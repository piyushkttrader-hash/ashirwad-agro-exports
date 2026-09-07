import { Link } from 'wouter';
import { Target, TrendingUp, Handshake, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/use-seo';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function WhyUs() {
  useSEO({
    title: "Why Choose Ashirwad Agro Exports",
    description: "Discover why international commercial buyers prefer our B2B export-focused approach for sourcing Indian food ingredients and spices.",
    canonical: "/why-us"
  });
  useScrollReveal();

  const reasons = [
    {
      title: "Strictly B2B Focused",
      description: "We don't operate retail fronts. Our entire infrastructure is built to support the volume, documentation, and pricing needs of commercial importers and manufacturers.",
      icon: Target
    },
    {
      title: "Direct Sourcing Advantage",
      description: "By operating directly from India's agricultural hubs, we eliminate unnecessary middlemen, ensuring competitive pricing for commercial buyers.",
      icon: TrendingUp
    },
    {
      title: "Long-Term Partnership Mentality",
      description: "We are not looking for one-off transactions. We aim to become a reliable, integrated part of your ongoing supply chain.",
      icon: Handshake
    },
    {
      title: "Export Competence",
      description: "Understanding the nuances of international shipping, moisture control during transit, and customs documentation is built into our daily operations.",
      icon: Globe
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl reveal">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white">
            Why Partner With Us
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            Sourcing ingredients internationally requires trust. We build that trust through reliable communication, consistent quality, and a deep understanding of B2B export requirements.
          </p>
        </div>
      </section>

      {/* Core Reasons Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex gap-6 reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="mt-1">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <reason.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image / Statement */}
      <section className="py-24 bg-muted/50 border-y">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 reveal">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted border">
                <img src="/hero-spices.jpg" alt="Spices" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2 reveal">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Consistent Supply for Your Business</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                When you import ingredients for manufacturing or wholesale distribution, reliable supply is paramount. Changes in supply availability can disrupt your entire production line.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand this commercial reality. Our operations are designed to deliver according to your requirements shipment after shipment, providing the stability your business requires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl reveal">
          <h2 className="text-2xl font-bold mb-8">Ready to secure a reliable supply chain?</h2>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 text-lg font-bold">
              Contact Our Sales Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
