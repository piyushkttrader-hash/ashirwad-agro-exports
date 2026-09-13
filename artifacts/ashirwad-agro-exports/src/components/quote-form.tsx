import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { siteConfig } from '@/config';
import { Loader2 } from 'lucide-react';

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
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

interface QuoteFormProps {
  preselectedProduct?: string;
  className?: string;
  submitLabel?: string;
}

export function QuoteForm({ preselectedProduct, className = "", submitLabel = "Request My Quote" }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdeorood";

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      productInterest: preselectedProduct || "",
      requiredQuantity: "",
      packaging: "",
      targetPrice: "",
      deliveryLocation: "",
      message: "",
    },
  });

  async function onSubmit(data: QuoteFormValues) {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Buyer Name": data.fullName,
          "Company": data.companyName,
          "Email": data.email,
          "Phone / WhatsApp": data.phone,
          "Country": data.country,
          "Delivery Port / City": data.deliveryLocation,
          "Product": data.productInterest,
          "Quantity": data.requiredQuantity,
          "Packaging": data.packaging,
          "Target Price": data.targetPrice || "N/A",
          "Message": data.message || "N/A",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        const resData = await response.json();
        setErrorMessage(resData.error || "Submission failed. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-300 p-8 rounded-xl text-center space-y-4 shadow-sm">
        <h3 className="text-2xl font-bold text-emerald-800">Quote Request Received!</h3>
        <p className="text-emerald-700">
          Thank you. Your enquiry has been forwarded to our sales team. We will get back to you shortly.
        </p>
        <Button 
          onClick={() => setIsSuccess(false)} 
          variant="outline" 
          className="border-emerald-600 text-emerald-700 hover:bg-emerald-100"
        >
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6 bg-card p-6 md:p-8 rounded-xl border shadow-sm ${className}`}>

        {errorMessage && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-medium">
            Error: {errorMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl><Input placeholder="Buyer Name" {...field} /></FormControl>
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
                <FormControl><Input placeholder="Company Name" {...field} /></FormControl>
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
                <FormControl><Input type="email" placeholder="buyer@domain.com" {...field} /></FormControl>
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
                <FormControl><Input placeholder="+91 / +254..." {...field} /></FormControl>
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
                <FormControl><Input placeholder="e.g. Kenya, UAE" {...field} /></FormControl>
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
                <FormControl><Input placeholder="e.g. Mombasa Port" {...field} /></FormControl>
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
                <FormControl><Input placeholder="e.g. 500 MT" {...field} /></FormControl>
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
                <FormControl><Input placeholder="e.g. 50kg Bags" {...field} /></FormControl>
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
                <FormControl><Input placeholder="Target Price" {...field} /></FormControl>
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
                  placeholder="Mention quality, specifications..." 
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
            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</>
          ) : (
            submitLabel
          )}
        </Button>
      </form>
    </Form>
  );
}
