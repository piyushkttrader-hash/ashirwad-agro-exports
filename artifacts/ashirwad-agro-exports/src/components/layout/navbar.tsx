import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/why-us', label: 'Why Choose Us' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/payment-terms', label: 'Payment Terms' },
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-primary text-primary-foreground py-2 px-4 md:px-8 text-sm font-medium hidden md:flex justify-between items-center z-50 relative">
        <div className="flex gap-6">
          {siteConfig.contact.email ? (
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              {siteConfig.contact.email}
            </a>
          ) : (
            <span className="flex items-center gap-2 text-primary-foreground/70">
              <Mail className="h-4 w-4" />
              [Add business email]
            </span>
          )}
          {siteConfig.contact.phone ? (
            <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              {siteConfig.contact.phone}
            </a>
          ) : (
            <span className="flex items-center gap-2 text-primary-foreground/70">
              <Phone className="h-4 w-4" />
              [Add phone / WhatsApp number]
            </span>
          )}
        </div>
        <div>
          Premium Indian Agricultural Products for Global Markets
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background'}`}>
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
            <img
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              className="h-12 w-12 rounded-xl object-cover shadow-sm"
              width="48"
              height="48"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight text-foreground">{siteConfig.shortName}</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Agro Exports</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-primary ${location === link.href ? 'text-primary' : 'text-foreground'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="font-semibold tracking-wide">Request a Quote</Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-[100%] left-0 w-full bg-background border-b shadow-lg animate-in slide-in-from-top-2">
            <nav className="flex flex-col py-4 px-4 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`text-base font-semibold p-2 border-b border-border/50 ${location === link.href ? 'text-primary' : 'text-foreground'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="mt-2">
                <Button className="w-full font-semibold">Request a Quote</Button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
