import { type ReactNode, useEffect } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';

import Home from '@/pages/home';
import Products from '@/pages/products';
import ProductDetail from '@/pages/products/detail';
import Kenya from '@/pages/kenya';
import BulkExport from '@/pages/bulk-export';
import HowItWorks from '@/pages/how-it-works';
import PaymentTerms from '@/pages/payment-terms';
import WhyUs from '@/pages/why-us';
import About from '@/pages/about';
import Contact from '@/pages/contact';
import PrivacyPolicy from '@/pages/privacy';
import TermsConditions from '@/pages/terms';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function Router() {
  return (
    <div className="min-h-screen flex flex-col w-full relative">
      <Navbar />
      <main className="flex-1 w-full">
        <RoutedErrorBoundary>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/products/:slug" component={ProductDetail} />
            <Route path="/kenya" component={Kenya} />
            <Route path="/bulk-export" component={BulkExport} />
            <Route path="/how-it-works" component={HowItWorks} />
            <Route path="/payment-terms" component={PaymentTerms} />
            <Route path="/why-us" component={WhyUs} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/privacy" component={PrivacyPolicy} />
            <Route path="/terms" component={TermsConditions} />
            <Route component={NotFound} />
          </Switch>
        </RoutedErrorBoundary>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
