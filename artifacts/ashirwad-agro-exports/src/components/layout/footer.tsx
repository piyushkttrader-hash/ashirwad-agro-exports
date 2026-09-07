import { Link } from 'wouter';
import { siteConfig } from '@/config';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-foreground text-muted pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 bg-primary rounded-md flex items-center justify-center text-white font-serif font-bold text-xl leading-none">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight text-white">{siteConfig.shortName}</span>
                <span className="text-[10px] uppercase tracking-wider text-muted/70 font-semibold">Agro Exports</span>
              </div>
            </div>
            <p className="text-sm text-muted/80 leading-relaxed max-w-xs">
              Reliable B2B supplier of premium Indian food ingredients, dehydrated products, and spices. Dedicated to long-term commercial export partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-sm hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/why-us" className="text-sm hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link href="/how-it-works" className="text-sm hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/payment-terms" className="text-sm hover:text-primary transition-colors">Payment Terms</Link></li>
              <li><Link href="/kenya" className="text-sm hover:text-primary transition-colors">Kenya Exports</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted/80">{siteConfig.contact.address || "India"}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                {siteConfig.contact.phone ? (
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-sm text-muted/80 hover:text-white transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                ) : (
                  <span className="text-sm text-muted/80">[Add phone / WhatsApp number]</span>
                )}
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                {siteConfig.contact.email ? (
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-muted/80 hover:text-white transition-colors">
                    {siteConfig.contact.email}
                  </a>
                ) : (
                  <span className="text-sm text-muted/80">[Add business email]</span>
                )}
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-6">Ready to Order?</h4>
            <p className="text-sm text-muted/80 mb-4">
              Discuss your bulk requirements, specifications, and packaging needs with our export team.
            </p>
            <Link href="/contact">
              <Button className="w-full gap-2 font-semibold">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted/60 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-muted/60 hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
