import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Globe2, Package, ShieldCheck, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/use-seo';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { siteConfig } from '@/config';

export default function Home() {
  useSEO({
    title: "Premium Indian Agricultural Products for Global Markets",
    description: "Reliable Indian B2B bulk supplier of food ingredients, spice powders, and agricultural products for international importers and commercial buyers.",
    canonical: "/"
  });
  useScrollReveal();

  const features = [
    {
      title: "B2B Bulk Supply",
      description: "Capable of handling FCL and LCL shipments customized for large-scale commercial buyers.",
      icon: Package
    },
    {
      title: "Competitive Export Pricing",
      description: "Direct-from-origin pricing structure designed for importers, wholesalers, and distributors.",
      icon: TrendingUp
    },
    {
      title: "Buyer Specifications",
      description: "Products processed and supplied according to your specific grading and processing requirements.",
      icon: ShieldCheck
    },
    {
      title: "Flexible Buyer Requirements",
      description: "Customized packaging sizes and specification matching according to your business needs.",
      icon: Globe2
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 md:pt-0 md:pb-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-spices.jpg" 
            alt="Assorted Indian spices" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              Exporting from India Worldwide
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6">
              Premium Indian Agricultural Products for Global Markets
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl leading-relaxed">
              Bulk supply of food ingredients, dehydrated vegetable powders, and spices for international importers, distributors, and commercial buyers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto bg-background/50 backdrop-blur-sm border-foreground/20 hover:bg-background/80">
                  View Product Catalogue
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm font-medium text-foreground/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Long-Term Focus
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> B2B Export Quantities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Built for Commercial Buyers</h2>
            <p className="text-lg text-muted-foreground">
              We understand the complexities of international trade. Our operations are streamlined to provide global buyers with reliable, continuous supply without the usual sourcing friction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-card p-8 rounded-xl border shadow-sm reveal hover:-translate-y-2 transition-transform duration-300" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Core Export Products</h2>
              <p className="text-lg text-muted-foreground">
                Specializing in high-demand dehydrated powders and essential spices for the food manufacturing and distribution sectors.
              </p>
            </div>
            <Link href="/products">
              <Button variant="ghost" className="mt-6 md:mt-0 font-semibold group">
                View All Products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.products.slice(0, 4).map((product, idx) => (
              <Link key={product.id} href={`/products/${product.slug}`}>
                <div className="group bg-card rounded-xl border overflow-hidden hover:shadow-md transition-all reveal cursor-pointer h-full flex flex-col" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <div className="aspect-[4/3] overflow-hidden relative bg-muted">
                    <img 
                      src={product.imageSpecific} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                      View Details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl reveal">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-white">Ready to Discuss Your Import Requirements?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
            Contact our commercial team today to receive a competitive quotation tailored to your volume, destination, and packaging needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                Request a Quote
              </Button>
            </Link>
            {siteConfig.contact.whatsapp ? (
              <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9+]/g, '')}`}>
                <Button size="lg" className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20bd5a] border-none">
                  WhatsApp Us
                </Button>
              </a>
            ) : (
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20bd5a] border-none">
                  WhatsApp Us
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
