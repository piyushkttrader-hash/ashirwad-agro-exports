import { Handshake, ArrowRight } from 'lucide-react';
import { useSEO } from '@/hooks/use-seo';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function PaymentTerms() {
  useSEO({
    title: "Payment Terms",
    description: "Information regarding commercial payment terms and conditions for B2B export orders.",
    canonical: "/payment-terms"
  });
  useScrollReveal();

  return (
    <div className="w-full pb-24 bg-background">
      <section className="bg-muted py-20 border-b">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl reveal">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Payment & Commercial Terms</h1>
          <p className="text-lg text-muted-foreground">
            Information regarding commercial terms for international B2B transactions.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          
          <div className="bg-card border rounded-2xl p-8 md:p-12 shadow-sm reveal mb-12">
            <h2 className="text-2xl font-bold mb-6 border-b pb-4">Commercial Terms Discussion</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
                Commercial terms are discussed separately for each B2B enquiry. Accepted payment methods, currency, deposit and balance schedules (if any), banking details, pricing basis, shipment terms, and applicable documentation are reviewed before an order is confirmed.
            </p>
            
            <div className="bg-muted rounded-xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="mt-1 flex-shrink-0">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Order Confirmation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Please note that all commercial and payment terms only become binding when explicitly recorded and agreed upon in the formal quotation or order confirmation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center reveal flex flex-col items-center justify-center">
            <p className="text-lg font-medium mb-6">Buyers should contact our team to discuss specific requirements.</p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg font-bold gap-2">
                Contact Our Commercial Team <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
}
