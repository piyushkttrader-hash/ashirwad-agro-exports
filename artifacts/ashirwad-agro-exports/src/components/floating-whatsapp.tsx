import { MessageCircle } from 'lucide-react';
import { useLocation } from 'wouter';
import { siteConfig } from '@/config';
import { trackConversion } from '@/lib/tracking';

interface FloatingWhatsAppProps {
  productName?: string;
}

export function FloatingWhatsApp({ productName }: FloatingWhatsAppProps) {
  const [location] = useLocation();
  const defaultMessage = productName 
    ? siteConfig.whatsapp.productMessage(productName)
    : siteConfig.whatsapp.generalMessage;
  
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.primary.replace(/\D/g, '')}?text=${encodedMessage}`;

  const mobileVisibility = location === "/contact" ? "hidden md:flex" : "flex";
  const className = `fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 md:bottom-6 md:right-6 z-50 ${mobileVisibility} items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group`;
  
  const buttonContent = (
    <>
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      <span className="absolute right-16 bg-white text-foreground text-sm font-semibold py-2 px-4 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Product enquiries
      </span>
    </>
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackConversion("product_whatsapp_click", { source: "floating_button" })}
      aria-label="Enquire about products on WhatsApp"
      data-testid="button-whatsapp-float"
    >
      {buttonContent}
    </a>
  );
}
