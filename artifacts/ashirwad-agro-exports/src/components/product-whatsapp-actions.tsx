import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config";
import { trackConversion } from "@/lib/tracking";

interface ProductWhatsAppActionsProps {
  productName: string;
  compact?: boolean;
  primaryLabel?: string;
}

function whatsappUrl(number: string, message: string) {
  return `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export function ProductWhatsAppActions({ productName, compact = false, primaryLabel = "Enquire on WhatsApp" }: ProductWhatsAppActionsProps) {
  return (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      <a
        href={whatsappUrl(siteConfig.whatsapp.primary, siteConfig.whatsapp.productMessage(productName))}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackConversion("product_whatsapp_click", { product_name: productName })}
        className="flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#20bd5a]"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        {primaryLabel}
      </a>

      <div className="border-t border-border/60 pt-3 text-center">
        <p className="mb-2 text-xs text-muted-foreground">
          Looking for a custom deal or specific business arrangement?
        </p>
        <a
          href={whatsappUrl(siteConfig.whatsapp.directBusiness, siteConfig.whatsapp.directBusinessMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion("private_business_whatsapp_click", { product_name: productName })}
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-primary/30 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/5"
        >
          Private Business Discussion
        </a>
      </div>
    </div>
  );
}