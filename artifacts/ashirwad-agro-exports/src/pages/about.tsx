import { Link } from 'wouter';
import { ArrowRight, Globe, Target, CheckCircle2, Package, Users, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/use-seo';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { siteConfig } from '@/config';

export default function About() {
  useSEO({
    title: "About Ashirwad Agro Exports | Founder & Achievements",
    description: "Learn about Ashirwad Agro Exports' approach to supplying Indian agricultural products to international B2B buyers.",
    canonical: "/about"
  });
  useScrollReveal();

  const getIcon = (id: string) => {
    switch (id) {
      case 'quality-sourcing': return CheckCircle2;
      case 'b2b-focus': return Target;
      case 'global-vision': return Globe;
      case 'buyer-alignment': return Handshake;
      case 'product-portfolio': return Package;
      case 'long-term-relationships': return Users;
      default: return CheckCircle2;
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-secondary py-20 border-b relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/95 z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-3xl reveal">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">About Ashirwad Agro Exports</h1>
          <p className="text-lg text-white/80 font-light">
            Connecting Indian agricultural products with international B2B opportunities through clear communication and requirement alignment.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="reveal order-2 lg:order-1 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 w-fit">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Leadership
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2 text-secondary">
                {siteConfig.founder.name}
              </h2>
              <p className="text-lg text-primary font-medium mb-6">{siteConfig.founder.title}</p>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {siteConfig.founder.bio}
                </p>
              </div>
            </div>

            <div className="reveal order-1 lg:order-2">
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-muted border border-border/50 shadow-xl group">
                <img 
                  src={siteConfig.founder.image} 
                  alt={`${siteConfig.founder.name}, ${siteConfig.founder.title}`} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-muted/30 border-y relative overflow-hidden">
        {/* Subtle Map / Global Background element */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <Globe className="w-[800px] h-[800px] text-secondary" strokeWidth={0.5} />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-secondary">Our Achievements</h2>
            <p className="text-xl text-primary font-serif italic mb-6">
              Building a Reliable Bridge Between Indian Agriculture and Global Markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.achievements.map((achievement, idx) => {
              const Icon = getIcon(achievement.id);
              return (
                <div 
                  key={achievement.id} 
                  className="bg-card p-8 rounded-xl border border-border/50 shadow-sm reveal hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">{achievement.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Foundation (Cleaned up) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl reveal">
          <h2 className="text-3xl font-serif font-bold mb-6 text-secondary">Our Foundation</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Ashirwad Agro Exports is structured around discussing commercial bulk supply opportunities for international buyers. Operating from India, we aim to align our sourcing capabilities with buyer requirements to present suitable bulk export options.
            </p>
            <p>
              We view each transaction as an opportunity to build understanding. We prioritize clear discussions regarding specifications, packaging, and commercial terms, aiming for transparency with our international partners.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment & CTAs */}
      <section className="py-24 bg-secondary text-secondary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-secondary to-secondary"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">Let's Discuss Your Requirements</h2>
          <p className="text-xl font-light text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto">
            Contact our team to begin a conversation about how we can support your commercial bulk sourcing needs from India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 border-none">
                Partner With Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-transparent text-white border-white/20 hover:bg-white/10">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}