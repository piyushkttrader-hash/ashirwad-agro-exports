import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
}

export function useSEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    const siteOrigin = window.location.origin;
    // Update title
    document.title = title.includes("Ashirwad Agro Exports")
      ? title
      : `${title} | Ashirwad Agro Exports`;

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);

      // Open Graph Description
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', description);
    }

    // Update Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', document.title);

    // Update canonical link
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', new URL(canonical, siteOrigin).toString());
    }

    // Organization JSON-LD
    let scriptOrg = document.getElementById('jsonld-org');
    if (!scriptOrg) {
      scriptOrg = document.createElement('script');
      scriptOrg.setAttribute('type', 'application/ld+json');
      scriptOrg.setAttribute('id', 'jsonld-org');
      scriptOrg.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Ashirwad Agro Exports",
        "url": siteOrigin,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "areaServed": "KE",
          "availableLanguage": "en"
        }
      });
      document.head.appendChild(scriptOrg);
    }

  }, [title, description, canonical]);
}
