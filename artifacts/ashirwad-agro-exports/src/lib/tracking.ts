type ConversionEvent =
  | "product_whatsapp_click"
  | "private_business_whatsapp_click"
  | "serious_buyer_whatsapp_click"
  | "quote_form_submit"
  | "phone_click"
  | "email_click";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: "event", eventName: string, parameters?: Record<string, unknown>) => void;
  }
}

export function trackConversion(event: ConversionEvent, parameters: Record<string, unknown> = {}) {
  const payload = { event, ...parameters };
  window.dataLayer?.push(payload);
  window.gtag?.("event", event, parameters);
}