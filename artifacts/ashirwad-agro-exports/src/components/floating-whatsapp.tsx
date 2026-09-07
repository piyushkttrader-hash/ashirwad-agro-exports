import { MessageCircle } from 'lucide-react';
import { Link } from 'wouter';
import { siteConfig } from '@/config';

interface FloatingWhatsAppProps {
  productName?: string;
}

export function FloatingWhatsApp({ productName }: FloatingWhatsAppProps) {
  const defaultMessage = productName 
    ? `Hello Ashirwad Agro Exports, I am interested in bulk supply of ${productName} for Kenya. Please share your quotation, MOQ, packaging options and export details.`
    : `Hello Ashirwad Agro Exports, I am interested in bulk food ingredients for Kenya. Please share your product list and export details.`;
  
  const encodedMessage = encodeURIComponent(defaultMessage);
  const hasWhatsApp = !!siteConfig.contact.whatsapp;
  const whatsappUrl = hasWhatsApp 
    ? `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9+]/g, '')}?text=${encodedMessage}`
    : `/contact`;

  const className = "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group";
  
  const buttonContent = (
    <>
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-16 bg-white text-foreground text-sm font-semibold py-2 px-4 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {hasWhatsApp ? "Chat with us" : "Contact Us"}
      </span>
    </>
  );

  if (hasWhatsApp) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label="Contact us on WhatsApp"
        data-testid="button-whatsapp-float"
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <Link href={whatsappUrl} className={className} aria-label="Contact us" data-testid="button-whatsapp-float">
      {buttonContent}
    </Link>
  );
}
