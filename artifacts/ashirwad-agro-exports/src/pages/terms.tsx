import { useSEO } from '@/hooks/use-seo';
import { siteConfig } from '@/config';
import { trackConversion } from '@/lib/tracking';

export default function TermsConditions() {
  useSEO({
    title: "Terms & Conditions",
    canonical: "/terms"
  });

  return (
    <div className="container mx-auto px-4 md:px-8 py-20 max-w-4xl">
      <h1 className="text-4xl font-serif font-bold mb-8">Terms & Conditions</h1>
      
      <div className="prose prose-slate max-w-none text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

        <h2 className="text-foreground">1. Introduction</h2>
        <p>
          These terms and conditions outline the rules and regulations for the use of {siteConfig.name}'s Website.
          By accessing this website we assume you accept these terms and conditions. Do not continue to use {siteConfig.name} if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-foreground">2. B2B Commercial Nature</h2>
        <p>
          The content, products, and services offered on this website are strictly intended for Business-to-Business (B2B) commercial transactions. All product descriptions, specifications, and pricing discussions assume bulk commercial purchasing for export purposes.
        </p>

        <h2 className="text-foreground">3. Quotations & Pricing</h2>
        <p>
          Any prices or quotations provided through this website or subsequent communications are subject to change based on market conditions, raw material availability, shipping costs, and currency fluctuations. A quotation is only binding once a formal proforma invoice has been issued and agreed upon by both parties.
        </p>

        <h2 className="text-foreground">4. Product Specifications</h2>
        <p>
          While we strive to ensure all product information on the website is accurate, actual product specifications may vary slightly between agricultural batches. Final specifications will be agreed upon during the formal ordering process.
        </p>

        <h2 className="text-foreground">5. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of India.
        </p>

        <h2 className="text-foreground">6. Contact</h2>
        <p>
          For any questions regarding these Terms & Conditions, please contact us at:
          <br /><br />
          Email: {siteConfig.contact.email ? (
            <a href={`mailto:${siteConfig.contact.email}`} onClick={() => trackConversion("email_click", { source: "terms_page" })} className="text-primary hover:underline">{siteConfig.contact.email}</a>
          ) : (
            <span>[Add business email]</span>
          )}
        </p>
      </div>
    </div>
  );
}
