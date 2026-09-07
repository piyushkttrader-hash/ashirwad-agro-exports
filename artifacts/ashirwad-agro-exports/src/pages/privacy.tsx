import { useSEO } from '@/hooks/use-seo';
import { siteConfig } from '@/config';
import { trackConversion } from '@/lib/tracking';

export default function PrivacyPolicy() {
  useSEO({
    title: "Privacy Policy",
    canonical: "/privacy"
  });

  return (
    <div className="container mx-auto px-4 md:px-8 py-20 max-w-4xl">
      <h1 className="text-4xl font-serif font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-slate max-w-none text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

        <h2 className="text-foreground">1. Introduction</h2>
        <p>
          Welcome to {siteConfig.name}. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data when you visit our website 
          and tell you about your privacy rights.
        </p>

        <h2 className="text-foreground">2. The Data We Collect About You</h2>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <ul>
          <li><strong>Identity Data:</strong> includes first name, last name, and company name.</li>
          <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
          <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
          <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
        </ul>

        <h2 className="text-foreground">3. How We Use Your Personal Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing a quotation).</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2 className="text-foreground">4. Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
        </p>

        <h2 className="text-foreground">5. Contact Details</h2>
        <p>
          If you have any questions about this privacy policy or our privacy practices, please contact us at:
          <br /><br />
          Email: {siteConfig.contact.email ? (
            <a href={`mailto:${siteConfig.contact.email}`} onClick={() => trackConversion("email_click", { source: "privacy_page" })} className="text-primary hover:underline">{siteConfig.contact.email}</a>
          ) : (
            <span>[Add business email]</span>
          )}
        </p>
      </div>
    </div>
  );
}
