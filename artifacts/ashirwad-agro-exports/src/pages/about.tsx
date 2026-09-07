import { Link } from 'wouter';
import { ArrowRight, MapPin, Building2, Globe2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/use-seo';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function About() {
  useSEO({
    title: "About Ashirwad Agro Exports",
    description: "Learn about our company's mission to supply premium Indian food ingredients and spices to international B2B buyers through reliable export channels.",
    canonical: "/about"
  });
  useScrollReveal();

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-muted py-20 border-b">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl reveal">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Ashirwad Agro Exports</h1>
          <p className="text-lg text-muted-foreground">
            Connecting India's rich agricultural resources with global commercial buyers through professional, reliable B2B export operations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="reveal">
              <h2 className="text-3xl font-serif font-bold mb-6">Our Foundation</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Ashirwad Agro Exports was established with a singular focus: to provide a dependable, professional supply chain for international buyers requiring bulk Indian food ingredients and spices.
                </p>
                <p>
                  Operating out of India, we leverage our proximity to major agricultural producing regions. This allows us to source raw materials efficiently, process them according to buyer requirements, and offer bulk export pricing to our global partners.
                </p>
                <p>
                  We are not just traders; we are supply chain partners. We understand that our clients—whether they are food manufacturers in Nairobi or distributors in Mombasa—rely on us to keep their operations running smoothly.
                </p>
              </div>
            </div>

            <div className="reveal">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-muted rounded-xl p-8 border text-center flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">B2B Core</h3>
                  <p className="text-sm text-muted-foreground">100% focused on commercial bulk supply.</p>
                </div>
                <div className="bg-muted rounded-xl p-8 border text-center flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Globe2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Export Ready</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive understanding of shipping & logistics.</p>
                </div>
                <div className="bg-muted rounded-xl p-8 border text-center flex flex-col items-center sm:col-span-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Based in India</h3>
                  <p className="text-sm text-muted-foreground">Direct access to the source.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">Our Commitment to Buyers</h2>
          <p className="text-xl md:text-2xl font-serif italic text-primary-foreground/90 leading-relaxed mb-10">
            "To communicate honestly, price competitively, and deliver consistently. We measure our success by the longevity of the business relationships we build."
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold h-12 px-8">
              Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
