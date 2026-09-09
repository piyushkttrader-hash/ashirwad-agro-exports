import { Link } from 'wouter';
import { ArrowRight, Building2, Factory, FileText, Globe2, Handshake, MapPin, Package, Settings, ShieldCheck, Store, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/use-seo';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { siteConfig } from '@/config';
import { ProductWhatsAppActions } from '@/components/product-whatsapp-actions';
import { QuoteForm } from '@/components/quote-form';
import { trackConversion } from '@/lib/tracking';

export default function Home() {
  useSEO({
    title: "Ashirwad Agro Exports | Indian Agro Products Supplier & Exporter",
    description: "Explore Indian agro products for bulk B2B supply from Ashirwad Agro Exports, including garlic, onion, tomato, ginger and red chilli powders, moringa and spice blends.",
    canonical: "/"
  });
  useScrollReveal();

  const features = [
    {
      title: "Commercial Sourcing",
      description: "Product sourcing is discussed according to the buyer's commercial requirements.",
      icon: Package
    },
    {
      title: "Quality Alignment",
      description: "Requested quality parameters are reviewed before commercial terms are confirmed.",
      icon: ShieldCheck
    },
    {
      title: "Handling Requirements",
      description: "Processing and handling expectations are discussed for each buyer enquiry.",
      icon: Settings
    },
    {
      title: "Packaging Discussion",
      description: "Packaging needs are reviewed according to product, volume and destination.",
      icon: Package
    },
    {
      title: "Supply Coordination",
      description: "Order and dispatch terms are confirmed clearly before supply arrangements proceed.",
      icon: TrendingUp
    },
    {
      title: "Buyer-Focused Service",
      description: "Importers, distributors and commercial buyers receive requirement-led communication.",
      icon: Handshake
    }
  ];

  const trustValues = [
    { title: "Packaging Options", icon: Package },
    { title: "Quality Alignment", icon: ShieldCheck },
    { title: "Commercial Quotations", icon: FileText },
    { title: "Supply Coordination", icon: Handshake },
    { title: "International B2B Focus", icon: Globe2 },
  ];

  const featuredProductIds = [
    "garlic-powder",
    "onion-powder",
    "red-chilli-powder",
    "tomato-powder",
    "ginger-powder",
    "masala-spice-blends",
  ];
  const featuredProducts = featuredProductIds
    .map((id) => siteConfig.products.find((product) => product.id === id))
    .filter((product): product is (typeof siteConfig.products)[number] => Boolean(product));

  const industries = [
    { title: "Food Manufacturers", icon: Factory },
    { title: "Importers & Distributors", icon: Globe2 },
    { title: "Spice Companies", icon: Building2 },
    { title: "Agriculture & Food Businesses", icon: Users },
    { title: "Traders & Wholesalers", icon: Store },
  ];

  const bulkWhatsAppMessage = "Hello Ashirwad Agro Exports, I am interested in your bulk agro products. Please share product specifications, MOQ and quotation.";

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 pb-24 md:pt-0 md:pb-0 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden bg-secondary">
          <img
            src={siteConfig.video.poster}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <video
            src={siteConfig.video.src}
            poster={siteConfig.video.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Illustrative promotional footage of agriculture, processing, packaging and export logistics"
            className="absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden"
          />
          <div className="absolute inset-0 bg-secondary/15"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/25 via-secondary/10 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <p className="sr-only">
            This is illustrative promotional footage and does not represent company-owned facilities, employees, customers or shipments.
          </p>
          <div className="max-w-3xl rounded-2xl border border-white/10 bg-secondary/90 p-6 shadow-2xl sm:p-8 md:p-10 reveal">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.15] mb-6">
              Premium Indian Agro Products for Global Buyers
            </h1>

            <p className="mb-4 text-sm font-semibold uppercase leading-relaxed tracking-[0.12em] text-primary-foreground sm:text-base">
              Bulk Supply Discussions • Buyer-Aligned Specifications • Packaging Options • International B2B Focus
            </p>

            <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl leading-relaxed font-light">
              Ashirwad Agro Exports supplies Indian agro products to importers, distributors, food manufacturers and agricultural businesses seeking commercial supply discussions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 border-none">
                  Get Bulk Quote
                </Button>
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.primary.replace(/\D/g, '')}?text=${encodeURIComponent(bulkWhatsAppMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("product_whatsapp_click", { source: "home_hero" })}
              >
                <Button size="lg" className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20bd5a] border-none">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Values */}
      <section className="border-b bg-background py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {trustValues.map(({ title, icon: Icon }) => (
              <div key={title} className="flex min-h-20 items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3 shadow-sm">
                <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold leading-snug text-secondary">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-secondary">Why Choose Ashirwad Agro Exports?</h2>
              <p className="text-lg text-muted-foreground">
                We center our operations on understanding your specific commercial reality, focusing on clear communication and alignment.
              </p>
            </div>
            <Link href="/why-us">
              <Button variant="outline" className="mt-6 md:mt-0 font-semibold group border-primary/20 hover:bg-primary/5 text-primary">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-card p-8 rounded-xl border border-border/50 shadow-sm reveal hover:-translate-y-1 transition-all duration-300" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-secondary">Our Export Products</h2>
              <p className="text-lg text-muted-foreground">
                Dehydrated vegetable powders, moringa, and Indian spices available for requirement discussion.
              </p>
            </div>
            <Link href="/products">
              <Button variant="outline" className="mt-6 md:mt-0 font-semibold group border-primary/20 hover:bg-primary/5 text-primary">
                View All Products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, idx) => (
              <div key={product.id} className="group bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-md transition-all reveal h-full flex flex-col" style={{ transitionDelay: `${idx * 100}ms` }}>
                <Link href={`/products/${product.slug}`} className="flex flex-1 flex-col">
                  <div className="aspect-[4/3] overflow-hidden relative bg-muted">
                    <img 
                      src={product.imageSpecific} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors text-secondary">{product.name}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                      View Details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
                <div className="p-6 pt-0">
                  <ProductWhatsAppActions productName={product.name} compact primaryLabel="Request Bulk Price" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="border-y bg-muted/30 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center reveal">
            <h2 className="mb-4 font-serif text-3xl font-bold text-secondary md:text-4xl">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Commercial enquiries are welcomed from buyers across food, spice, distribution and agricultural sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-xl border border-border/60 bg-card p-6 text-center shadow-sm reveal">
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold leading-snug text-secondary">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (Compact) */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">How It Works</h2>
            <p className="text-lg text-white/80 font-light">
              A clear, professional approach to discussing and fulfilling international B2B requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-secondary-foreground/5 border border-white/10 p-8 rounded-xl reveal text-center">
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">1. Share Requirements</h3>
              <p className="text-white/70 text-sm leading-relaxed">Submit your requested product, volume, specifications, and destination port.</p>
            </div>
            <div className="bg-secondary-foreground/5 border border-white/10 p-8 rounded-xl reveal text-center delay-100">
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">2. Discuss & Quote</h3>
              <p className="text-white/70 text-sm leading-relaxed">We review your needs, confirm alignment, and provide a detailed quotation.</p>
            </div>
            <div className="bg-secondary-foreground/5 border border-white/10 p-8 rounded-xl reveal text-center delay-200">
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">3. Process & Ship</h3>
              <p className="text-white/70 text-sm leading-relaxed">Upon agreement, orders are prepared and dispatched according to confirmed terms.</p>
            </div>
          </div>
          
          <div className="text-center reveal">
            <Link href="/how-it-works">
              <Button variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10">
                View Full Export Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* B2B Enquiry */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center reveal">
            <h2 className="mb-4 font-serif text-3xl font-bold text-secondary md:text-5xl">Looking for a Reliable Indian Agro Supplier?</h2>
            <p className="text-lg text-muted-foreground">
              Share your product, quantity, destination and packaging requirements for a commercial supply discussion.
            </p>
          </div>
          <div className="mx-auto max-w-5xl reveal">
            <QuoteForm submitLabel="Send Bulk Enquiry" />
          </div>
        </div>
      </section>

      {/* Export Markets & Payment Terms Compact Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Export Markets */}
            <div className="bg-muted/40 p-10 rounded-2xl border border-border/50 reveal flex flex-col h-full">
              <div className="h-14 w-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-secondary">Export Markets</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                We supply international B2B buyers across various regions. For example, we maintain a dedicated focus on commercial requirements for the East African market.
              </p>
              <div>
                <Link href="/kenya">
                  <Button variant="link" className="px-0 text-primary font-semibold hover:text-accent">
                    View Kenya Export Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-muted/40 p-10 rounded-2xl border border-border/50 reveal flex flex-col h-full delay-100">
              <div className="h-14 w-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-secondary">Payment & Commercial Terms</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                Payment methods, currency, deposit structures, and required documentation are discussed per enquiry and confirmed in a formal quotation.
              </p>
              <div>
                <Link href="/payment-terms">
                  <Button variant="link" className="px-0 text-primary font-semibold hover:text-accent">
                    View Payment Terms <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Request a Quote CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl reveal">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-white">Ready to Discuss Your Import Requirements?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 font-light">
            Contact our commercial team today to receive a quotation tailored to your volume, destination, and packaging needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                Request a Quote
              </Button>
            </Link>
            <a
                href={`https://wa.me/${siteConfig.whatsapp.primary.replace(/\D/g, '')}?text=${encodeURIComponent(bulkWhatsAppMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("product_whatsapp_click", { source: "home_cta" })}
            >
              <Button size="lg" className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20bd5a] border-none">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
