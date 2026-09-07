import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { siteConfig } from '@/config';
import { Loader2 } from 'lucide-react';
import { useSubmitQuote } from '@workspace/api-client-react';

const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  country: z.string().min(2, "Country is required"),
  productInterest: z.string().min(1, "Please select a product"),
  requiredQuantity: z.string().min(1, "Required quantity is needed"),
  packaging: z.string().min(1, "Packaging requirement is needed"),
  targetPrice: z.string().optional(),
  deliveryLocation: z.string().min(2, "Delivery location is required"),
  message: z.string().optional(),
  honeypot: z.string().max(0, "Spam detected"), // simple honeypot
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

interface QuoteFormProps {
  preselectedProduct?: string;
  className?: string;
}

export function QuoteForm({ preselectedProduct, className = "" }: QuoteFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartedAt] = useState(() => Date.now());
  const submitQuote = useSubmitQuote();

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "Kenya",
      productInterest: preselectedProduct || "",
      requiredQuantity: "",
      packaging: "",
      targetPrice: "",
      deliveryLocation: "",
      message: "",
      honeypot: "",
    },
  });

  async function onSubmit(data: QuoteFormValues) {
    setIsSubmitting(true);

    try {
      const receipt = await submitQuote.mutateAsync({
        data: {
          ...data,
          targetPrice: data.targetPrice || undefined,
          message: data.message || undefined,
          formStartedAt,
        },
      });

      toast({
        title: "Quote Request Sent Successfully",
        description: receipt.message,
      });

      form.reset({
        ...form.getValues(),
        message: "",
        targetPrice: "",
        honeypot: "",
      });
    } catch {
      toast({
        variant: "destructive",
        title: "Quote Request Not Sent",
        description: "We couldn't deliver your request. Your details are still here—please try again shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6 bg-card p-6 md:p-8 rounded-xl border shadow-sm ${className}`}>
        
        {/* Honeypot field (hidden from screen readers and visual users) */}
        <div className="hidden" aria-hidden="true">
          <FormField
            control={form.control}
            name="honeypot"
            render={({ field }) => (
              <FormItem>
                <FormControl><Input {...field} tabIndex={-1} autoComplete="off" /></FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name *</FormLabel>
                <FormControl><Input placeholder="Your Business Ltd." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Email *</FormLabel>
                <FormControl><Input type="email" placeholder="john@company.com" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp / Phone *</FormLabel>
                <FormControl><Input placeholder="+254 XXX XXX XXX" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country *</FormLabel>
                <FormControl><Input placeholder="e.g. Kenya, UAE, UK" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deliveryLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Delivery City/Port *</FormLabel>
                <FormControl><Input placeholder="e.g. Mombasa, Dubai" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="productInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Interested In *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {siteConfig.products.map(p => (
                    <SelectItem key={p.id} value={p.name}>{p.name}</SelectItem>
                  ))}
                  <SelectItem value="Multiple Products">Multiple Products</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="requiredQuantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Required Quantity *</FormLabel>
                <FormControl><Input placeholder="e.g. 500 kg or your expected order quantity" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="packaging"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Packaging Requirement *</FormLabel>
                <FormControl><Input placeholder="e.g. 25kg PP bags, Custom" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="targetPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Price (Optional)</FormLabel>
                <FormControl><Input placeholder="Optional target price or budget guidance" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Requirements / Specifications</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your specific grade requirements, certifications needed, or other details..." 
                  className="min-h-[100px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full text-lg font-semibold h-12" disabled={isSubmitting}>
          {isSubmitting ? (
            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting Request...</>
          ) : (
            "Request My Quote"
          )}
        </Button>
      </form>
    </Form>
  );
}
