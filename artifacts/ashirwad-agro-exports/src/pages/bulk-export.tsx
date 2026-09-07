import { Link } from 'wouter';
import { Box, Ship, FileText, Settings, Factory, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/use-seo';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function BulkExport() {
  useSEO({
    title: "Bulk & Export Supply Services",
    description: "Learn about our B2B bulk export capabilities, packaging options, and how to request quotations for international shipments.",
    canonical: "/bulk-export"
  });
  useScrollReveal();

  const processSteps = [
    {
      title: "Initial Enquiry",
      description: "Submit your requirement including product, estimated volume, and destination port.",
      icon: FileText
    },
    {
      title: "Specification Matching",
      description: "We align our processing and grading to meet your exact commercial requirements.",
      icon: Settings
    },
    {
      title: "Quotation & Sampling",
      description: "Receive competitive commercial terms. Samples can be arranged for quality verification.",
      icon: Box
    },
    {
      title: "Processing & Packaging",
      description: "Orders are processed and packed according to agreed buyer requirements.",
      icon: Factory
    },
    {
      title: "Export & Documentation",
      description: "We handle the necessary export documentation to facilitate smooth customs clearance.",
      icon: Ship
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-muted py-20 border-b relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="/bulk-warehouse.jpg" alt="" className="w-full h-full object-cover mask-image-l-to-r" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 reveal">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 max-w-3xl">
            Commercial Bulk & Export Supply
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            We specialize in fulfilling large-scale B2B orders for international markets, providing end-to-end supply chain reliability from our Indian facilities to your destination port.
          </p>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">How We Work With Buyers</h2>
            <p className="text-lg text-muted-foreground">
              A transparent, professional approach designed for long-term commercial partnerships.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-border z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <div className="h-[90px] w-[90px] rounded-full bg-card border-2 border-primary/20 shadow-sm flex items-center justify-center mb-6 bg-white">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packaging & Logistics Details */}
      <section className="py-24 bg-muted/50 border-y">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="reveal">
              <h2 className="text-3xl font-serif font-bold mb-6">Flexible Packaging Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Proper packaging is critical for maintaining product integrity during sea freight. We offer various export-standard packaging options to meet your specific logistics requirements.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-md h-fit"><ShieldCheck className="h-5 w-5 text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Standard Bulk Packaging</h4>
                    <p className="text-muted-foreground">Strong multi-wall paper bags or PP bags with inner food-grade liners, typically in 20kg or 25kg increments.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-md h-fit"><Box className="h-5 w-5 text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Custom Buyer Requirements</h4>
                    <p className="text-muted-foreground">Specific weight requirements or alternative container types can be discussed based on order volume.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="reveal">
              <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-muted border">
                <img src="/bulk-warehouse.jpg" alt="Bulk warehouse logistics" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Begin the Enquiry Process</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Provide us with your product requirements, required quantity, and destination to receive a detailed quotation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 text-lg font-bold">
              Submit a Quotation Request
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
