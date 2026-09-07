import { useParams, Link } from 'wouter';
import { ArrowLeft, Check, Package, Scale, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/use-seo';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { siteConfig } from '@/config';
import NotFound from '@/pages/not-found';
import { QuoteForm } from '@/components/quote-form';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  useScrollReveal();

  const product = siteConfig.products.find(p => p.slug === slug);

  useSEO({
    title: product ? `${product.name} Bulk Supplier for Kenya` : "Product Not Found",
    description: product ? `Bulk supply of ${product.name.toLowerCase()} for commercial buyers in Kenya. Request a B2B quote for export pricing and packaging options.` : "",
    canonical: product ? `/products/${product.slug}` : undefined
  });

  if (!product) return <NotFound />;

  const relatedProducts = siteConfig.products
    .filter(p => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="w-full pb-24">
      {/* Breadcrumb */}
      <div className="bg-muted py-4 border-b">
        <div className="container mx-auto px-4 md:px-8 flex items-center text-sm font-medium text-muted-foreground">
          <Link href="/products" className="hover:text-primary transition-colors flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* Product Image */}
          <div className="reveal">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted border shadow-sm relative">
              <img 
                src={product.imageSpecific} 
                alt={`${product.name} bulk supply`} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Quick Fact Badges */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-card border rounded-lg p-4 text-center">
                <Package className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="block text-xs font-semibold uppercase text-muted-foreground">Bulk Pack</span>
              </div>
              <div className="bg-card border rounded-lg p-4 text-center">
                <Settings className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="block text-xs font-semibold uppercase text-muted-foreground">B2B Supply</span>
              </div>
              <div className="bg-card border rounded-lg p-4 text-center">
                <Scale className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="block text-xs font-semibold uppercase text-muted-foreground">Export Ready</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="reveal flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{product.name}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {product.shortDescription}
            </p>
            
            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center border-b pb-2">
                  Commercial Applications
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center text-foreground/80 font-medium">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center border-b pb-2">
                  Packaging & Specifications
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Packaging and specifications can be discussed and customized according to buyer requirements. We accommodate standard bulk export packaging including PP bags, multi-wall paper bags, or custom bulk containers suitable for sea freight to Kenya.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h4 className="font-bold mb-2">Interested in this product?</h4>
              <p className="text-sm text-muted-foreground mb-4">Submit your requirements below for an accurate quote.</p>
              <Button size="lg" className="w-full sm:w-auto font-bold" onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Request a Quote for {product.name}
              </Button>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div id="quote-form" className="py-12 border-t scroll-mt-24 reveal">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif font-bold mb-4">Request a B2B Quotation</h2>
              <p className="text-lg text-muted-foreground">
                Provide your requirements for {product.name} and our export team will respond with competitive pricing and shipping details.
              </p>
            </div>
            <QuoteForm preselectedProduct={product.name} />
          </div>
        </div>

        {/* Related Products */}
        <div className="py-12 border-t mt-12 reveal">
          <h2 className="text-2xl font-serif font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/products/${p.slug}`}>
                <div className="group bg-card rounded-xl border overflow-hidden hover:shadow-md transition-all cursor-pointer h-full flex flex-col">
                  <div className="aspect-video overflow-hidden relative bg-muted">
                    <img 
                      src={p.imageSpecific} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{p.shortDescription}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
