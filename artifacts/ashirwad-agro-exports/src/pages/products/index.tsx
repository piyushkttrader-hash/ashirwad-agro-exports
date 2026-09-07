import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/use-seo';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { siteConfig } from '@/config';

export default function Products() {
  useSEO({
    title: "Food Ingredients & Spice Powders Catalogue",
    description: "Browse our complete B2B product catalogue including onion powder, garlic powder, coriander powder, moringa, and other spices available for bulk export.",
    canonical: "/products"
  });
  useScrollReveal();

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-muted py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl reveal">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Product Catalogue</h1>
          <p className="text-lg text-muted-foreground">
            Dehydrated vegetable powders, moringa, and Indian spices processed for commercial bulk supply.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.products.map((product, idx) => (
              <div key={product.id} className="group bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all reveal flex flex-col" style={{ transitionDelay: `${(idx % 3) * 100}ms` }}>
                <Link href={`/products/${product.slug}`} className="block flex-1 flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden relative bg-muted">
                    <img 
                      src={product.imageSpecific} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">
                      {product.shortDescription}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.slice(0, 3).map((app, i) => (
                          <span key={i} className="text-xs bg-muted px-2 py-1 rounded-md font-medium">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-primary font-semibold mt-auto pt-4 border-t border-border/50">
                      View Specifications <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Banner */}
      <section className="py-20 bg-primary/5 border-t">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl reveal">
          <h2 className="text-3xl font-serif font-bold mb-6">Need Custom Specifications?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            If you require specific mesh sizes, distinct packaging, or a product not listed in our core catalogue, our export team can arrange custom processing.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-12 px-8 font-semibold">
              Contact Sales Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
