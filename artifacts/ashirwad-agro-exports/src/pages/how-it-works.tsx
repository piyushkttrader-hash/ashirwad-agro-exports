import { FileText, Calculator, Settings, Truck, Ship, Handshake } from 'lucide-react';
import { useSEO } from '@/hooks/use-seo';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function HowItWorks() {
  useSEO({
    title: "How It Works | Export Process",
    description: "Understand our step-by-step B2B export process, from your initial requirement to shipment dispatch.",
    canonical: "/how-it-works"
  });
  useScrollReveal();

  const steps = [
    {
      num: "01",
      title: "Share Your Requirement",
      description: "Tell us the product, quantity, required specifications, and destination port.",
      icon: FileText
    },
    {
      num: "02",
      title: "Receive Our Quotation",
      description: "We review your requirements and provide pricing along with commercial details.",
      icon: Calculator
    },
    {
      num: "03",
      title: "Confirm Specifications",
      description: "Product quality, packaging, quantity, and shipment terms are discussed and finalized.",
      icon: Settings
    },
    {
      num: "04",
      title: "Payment & Order Processing",
      description: "Payment terms are agreed upon, and the order moves into our processing queue.",
      icon: Handshake
    },
    {
      num: "05",
      title: "Packaging & Dispatch",
      description: "Products are packed according to the agreed requirements and prepared for dispatch.",
      icon: Truck
    },
    {
      num: "06",
      title: "Shipment & Documentation",
      description: "Required export and shipping documentation is prepared as applicable.",
      icon: Ship
    }
  ];

  return (
    <div className="w-full pb-24 bg-background">
      <section className="bg-muted py-20 border-b">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl reveal">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">How It Works</h1>
          <p className="text-lg text-muted-foreground">
            A clear, professional B2B process designed for international importers and commercial buyers.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-6 bg-card p-8 rounded-2xl border shadow-sm reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                    <span className="text-primary font-bold text-xl">{step.num}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center reveal border-t pt-16">
            <h2 className="text-2xl font-bold mb-6">Ready to start the process?</h2>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg font-bold">
                Submit Your Requirement
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
