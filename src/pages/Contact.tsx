import { useState } from 'react';
import type React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/_extras/select';

const SUPPORT_TOPICS = [
  'Contact Sales',
  'Increase Rate Limits',
  'Business Associate Agreement',
  'Zero Day Retention',
  'Monthly Invoicing',
  'Product Support',
] as const;

const Contact = () => {
  const [topic, setTopic] = useState<string | undefined>(undefined);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: 'Thanks for reaching out to Bytecube!',
      description: `We received your request${topic ? ` about “${topic}”` : ''}. Our team will get back to you shortly.`,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-bytecube-black text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="mx-auto max-w-5xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-serifhead">
            Transform how your organization operates with Bytecube
          </h1>
          <div className="mt-10">
            <a href="#sales-form">
              <Button size="lg" variant="secondary" className="font-semibold">
                Try Bytecube
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Sales */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-serifhead">
                Contact Bytecube Sales
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Connect with our sales team to get additional resources and support as you grow your usage of Bytecube.
              </p>
              <p className="text-muted-foreground">
                Want a little help? Our{' '}
                <a href="#" className="underline underline-offset-4">Support Center</a>{' '}
                has answers to technical questions and product details.
              </p>
            </div>

            <div className="md:col-span-3">
              <div id="sales-form" className="rounded-3xl bg-muted p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="topic" className="text-base font-medium">
                      What can we help you with?*
                    </Label>
                    <Select onValueChange={setTopic}>
                      <SelectTrigger id="topic" className="h-12 text-base">
                        <SelectValue placeholder="Please Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {SUPPORT_TOPICS.map((item) => (
                          <SelectItem key={item} value={item}>{item}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="h-12 px-8 text-base">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

