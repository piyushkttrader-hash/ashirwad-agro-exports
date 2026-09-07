import { Router, type IRouter } from "express";
import { SubmitQuoteBody, SubmitQuoteResponse } from "@workspace/api-zod";
import { db, quoteEnquiriesTable } from "@workspace/db";
import { and, count, eq, gte } from "drizzle-orm";

const router: IRouter = Router();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const MIN_FILL_TIME_MS = 2_000;

router.post("/quotes", async (req, res): Promise<void> => {
  const now = Date.now();

  const parsed = SubmitQuoteBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ issues: parsed.error.issues }, "Rejected invalid quote enquiry");
    res.status(400).json({ error: "Please check the form details and try again." });
    return;
  }

  const { honeypot, formStartedAt, message, targetPrice, ...enquiry } = parsed.data;
  if (honeypot || now - formStartedAt < MIN_FILL_TIME_MS || formStartedAt > now) {
    req.log.warn("Rejected suspected automated quote enquiry");
    res.status(400).json({ error: "We could not accept this request." });
    return;
  }

  try {
    const normalizedEmail = enquiry.email.trim().toLowerCase();
    const [{ value: recentCount }] = await db
      .select({ value: count() })
      .from(quoteEnquiriesTable)
      .where(
        and(
          eq(quoteEnquiriesTable.email, normalizedEmail),
          gte(quoteEnquiriesTable.createdAt, new Date(now - WINDOW_MS)),
        ),
      );

    if (recentCount >= MAX_ATTEMPTS) {
      res.setHeader("Retry-After", String(WINDOW_MS / 1000));
      res.status(429).json({ error: "Too many quote requests. Please try again later." });
      return;
    }

    const [saved] = await db
      .insert(quoteEnquiriesTable)
      .values({
        ...enquiry,
        email: normalizedEmail,
        targetPrice: targetPrice?.trim() || null,
        specifications: message?.trim() || null,
      })
      .returning({ id: quoteEnquiriesTable.id });

    res.status(201).json(
      SubmitQuoteResponse.parse({
        enquiryId: saved.id,
        message: "Your quote request has been received. Our export team will contact you within 24 hours.",
      }),
    );
  } catch (error) {
    req.log.error({ err: error }, "Failed to save quote enquiry");
    res.status(500).json({
      error: "We could not send your request right now. Please try again shortly.",
    });
  }
});

export default router;