import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useSEO } from '@/hooks/use-seo';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { siteConfig } from '@/config';
import { QuoteForm } from '@/components/quote-form';

export default function Contact() {
  useSEO({
    title: "Contact Us & Request a Quote",
    description: "Contact the Ashirwad Agro Exports sales team to request a quotation for bulk food ingredients and spices. Fast response for B2B buyers.",
    canonical: "/contact"
  });
  useScrollReveal();

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-muted py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl reveal">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact Our Sales Team</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch to discuss your bulk ingredient requirements, request a quotation, or inquire about export logistics.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Contact Information Cards */}
            <div className="lg:col-span-1 space-y-6 reveal">
              <h2 className="text-2xl font-serif font-bold mb-6">Direct Contact</h2>
              
              {siteConfig.contact.whatsapp || siteConfig.contact.phone ? (
                <a href={siteConfig.contact.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9+]/g, '')}` : `tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="block group">
                  <div className="bg-card border rounded-xl p-6 hover:border-[#25D366] hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="h-10 w-10 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-[#25D366]" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-[#25D366] transition-colors">WhatsApp / Phone</h3>
                    </div>
                    <p className="text-muted-foreground ml-14">{siteConfig.contact.phone || siteConfig.contact.whatsapp}</p>
                  </div>
                </a>
              ) : (
                <div className="block group cursor-pointer" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  <div className="bg-card border rounded-xl p-6 hover:border-[#25D366] hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="h-10 w-10 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-[#25D366]" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-[#25D366] transition-colors">WhatsApp / Phone</h3>
                    </div>
                    <p className="text-muted-foreground ml-14">[Add phone / WhatsApp number]</p>
                  </div>
                </div>
              )}

              {siteConfig.contact.email ? (
                <a href={`mailto:${siteConfig.contact.email}`} className="block group">
                  <div className="bg-card border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Email</h3>
                    </div>
                    <p className="text-muted-foreground ml-14">{siteConfig.contact.email}</p>
                  </div>
                </a>
              ) : (
                <div className="block group cursor-pointer" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  <div className="bg-card border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Email</h3>
                    </div>
                    <p className="text-muted-foreground ml-14">[Add business email]</p>
                  </div>
                </div>
              )}

              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Office Location</h3>
                </div>
                <p className="text-muted-foreground ml-14">{siteConfig.contact.address || "India"}</p>
              </div>

              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Response Time</h3>
                </div>
                <p className="text-muted-foreground ml-14">We aim to respond to all commercial inquiries within 24 hours.</p>
              </div>
            </div>

            {/* Quote Form */}
            <div id="quote-form" className="lg:col-span-2 reveal" style={{ transitionDelay: '100ms' }}>
              <h2 className="text-2xl font-serif font-bold mb-6">Request a Quotation</h2>
              <QuoteForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
