import { Link } from 'wouter';
import { siteConfig } from '@/config';
import {
  ArrowRight,
  CreditCard,
  Globe2,
  Home,
  Mail,
  MapPin,
  Package,
  Phone,
  ShieldCheck,
  Users,
  Workflow,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackConversion } from '@/lib/tracking';

const quickLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About Us', icon: Users },
  { href: '/products', label: 'Products', icon: Package },
  { href: '/why-us', label: 'Why Choose Us', icon: ShieldCheck },
  { href: '/how-it-works', label: 'How It Works', icon: Workflow },
  { href: '/payment-terms', label: 'Payment Terms', icon: CreditCard },
  { href: '/kenya', label: 'Kenya Exports', icon: Globe2 },
] as const;

export function Footer() {
  return (
    <footer className="bg-foreground text-muted pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <img
                src={siteConfig.logo}
                alt={`${siteConfig.name} logo`}
                className="h-12 w-12 rounded-xl object-cover"
                width="48"
                height="48"
                loading="lazy"
              />
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
            <ul className="grid grid-cols-1 gap-2.5">
              {quickLinks.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex min-h-11 w-full touch-manipulation select-none items-center gap-3 rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-2.5 text-sm font-medium text-muted/90 shadow-[0_3px_0_rgba(0,0,0,0.22),0_6px_14px_rgba(0,0,0,0.12)] transition-[transform,box-shadow,background-color,border-color,color] duration-150 ease-out hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/12 hover:text-white hover:shadow-[0_4px_0_rgba(0,0,0,0.2),0_8px_18px_rgba(0,0,0,0.16)] active:translate-y-0.5 active:scale-[0.97] active:border-primary/40 active:bg-primary/15 active:shadow-[0_1px_0_rgba(0,0,0,0.18),0_2px_5px_rgba(0,0,0,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-primary transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
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
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} onClick={() => trackConversion("phone_click", { source: "footer" })} className="text-sm text-muted/80 hover:text-white transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                ) : (
                  <span className="text-sm text-muted/80">[Add phone / WhatsApp number]</span>
                )}
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                {siteConfig.contact.email ? (
                  <a href={`mailto:${siteConfig.contact.email}`} onClick={() => trackConversion("email_click", { source: "footer" })} className="text-sm text-muted/80 hover:text-white transition-colors">
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
