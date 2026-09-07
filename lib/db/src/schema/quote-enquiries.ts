import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const quoteEnquiriesTable = pgTable("quote_enquiries", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  companyName: text("company_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  country: text("country").notNull(),
  productInterest: text("product_interest").notNull(),
  requiredQuantity: text("required_quantity").notNull(),
  packaging: text("packaging").notNull(),
  targetPrice: text("target_price"),
  deliveryLocation: text("delivery_location").notNull(),
  specifications: text("specifications"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertQuoteEnquirySchema = createInsertSchema(quoteEnquiriesTable).omit({
  id: true,
  createdAt: true,
});
export type InsertQuoteEnquiry = z.infer<typeof insertQuoteEnquirySchema>;
export type QuoteEnquiry = typeof quoteEnquiriesTable.$inferSelect;