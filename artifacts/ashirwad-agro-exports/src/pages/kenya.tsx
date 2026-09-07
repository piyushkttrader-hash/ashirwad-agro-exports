import { Link } from 'wouter';
import { ArrowRight, MapPin, Truck, ShieldCheck, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/use-seo';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { siteConfig } from '@/config';
import { QuoteForm } from '@/components/quote-form';

export default function Kenya() {
  useSEO({
    title: "Food Ingredient & Spice Supplier for Kenya",
    description: "Ashirwad Agro Exports is a trusted Indian B2B supplier of bulk food ingredients, dehydrated vegetable powders, and spices for commercial buyers in Kenya.",
    canonical: "/kenya"
  });
  useScrollReveal();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20 pb-20 md:pt-0 md:pb-0 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-spices.jpg" 
            alt="Export to Kenya" 
            className="w-full h-full object-cover object-center opacity-20 mix-blend-multiply grayscale"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl reveal">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm mb-8 backdrop-blur-sm">
            <MapPin className="h-4 w-4" /> Dedicated Supply for the Kenyan Market
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
            Food Ingredient & Spice Supplier for Kenya
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Supporting Kenyan food manufacturers, importers, spice wholesalers, distributors, and commercial kitchens with reliable bulk supply directly from India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-white text-primary hover:bg-white/90" onClick={() => document.getElementById('kenya-quote')?.scrollIntoView({ behavior: 'smooth' })}>
              Request a Quote for Kenya
            </Button>
            {siteConfig.contact.whatsapp ? (
              <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9+]/g, '')}`}>
                <Button size="lg" className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20bd5a] border-none">
                  WhatsApp Us
                </Button>
              </a>
            ) : (
              <Button size="lg" className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20bd5a] border-none" onClick={() => document.getElementById('kenya-quote')?.scrollIntoView({ behavior: 'smooth' })}>
                WhatsApp Us
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Target Market Sectors */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Serving Kenya's Commercial Food Sector</h2>
            <p className="text-lg text-muted-foreground">
              We cater exclusively to B2B buyers seeking consistent quality and reliable import channels into Nairobi, Mombasa, Kisumu, Nakuru, and surrounding regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-muted p-8 rounded-xl reveal">
              <h3 className="text-xl font-bold mb-3 border-b border-border pb-3">Food Manufacturing</h3>
              <p className="text-muted-foreground">Bulk spice blends, dehydrated vegetable powders, and essential ingredients for packaged food producers and snack manufacturers.</p>
            </div>
            <div className="bg-muted p-8 rounded-xl reveal delay-100">
              <h3 className="text-xl font-bold mb-3 border-b border-border pb-3">Importers & Distributors</h3>
              <p className="text-muted-foreground">Consistent supply lines and competitive export pricing allowing wholesalers to maintain healthy margins.</p>
            </div>
            <div className="bg-muted p-8 rounded-xl reveal delay-200">
              <h3 className="text-xl font-bold mb-3 border-b border-border pb-3">HORECA Sector</h3>
              <p className="text-muted-foreground">Aromatics and flavor profiles for commercial kitchens, large catering operations, and hotel chains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kenya specific products */}
      <section className="py-24 bg-muted/50 border-y">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">High-Demand Imports</h2>
              <p className="text-lg text-muted-foreground">
                Our most frequently requested bulk ingredients for the East African market.
              </p>
            </div>
            <Link href="/products">
              <Button variant="outline" className="mt-6 md:mt-0 font-semibold bg-background">
                View All Products
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {siteConfig.products.slice(0, 4).map((product, idx) => (
              <Link key={product.id} href={`/products/${product.slug}`}>
                <div className="bg-card border rounded-lg p-4 text-center hover:border-primary hover:shadow-md transition-all cursor-pointer reveal" style={{ transitionDelay: `${idx * 50}ms` }}>
                  <div className="aspect-square rounded-md overflow-hidden mb-4 bg-muted">
                    <img src={product.imageSpecific} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-sm md:text-base">{product.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="kenya-quote" className="py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl reveal">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Discuss Your Kenya Import Needs</h2>
              <p className="text-lg text-muted-foreground">
                Whether you need specific packaging sizes or a mixed container of various spice powders, our export team is ready to assist.
              </p>
            </div>
            <QuoteForm className="bg-white" />
          </div>
        </div>
      </section>
    </div>
  );
}
