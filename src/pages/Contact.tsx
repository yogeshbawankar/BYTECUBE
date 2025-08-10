import { useState } from 'react';
import type React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
  const [submitting, setSubmitting] = useState(false);

  type ContactFormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    website: string;
    jobTitle: string;
    industry: string;
    hqLocation: string;
    productInterest: string;
    genAiSolution: string;
    evaluationStage: string;
    details: string;
    heardAboutUs: string;
  };

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    jobTitle: '',
    industry: '',
    hqLocation: '',
    productInterest: '',
    genAiSolution: '',
    evaluationStage: '',
    details: '',
    heardAboutUs: '',
  });

  const INDUSTRIES = [
    'Technology',
    'Financial Services',
    'Healthcare',
    'Education',
    'Retail & E‑commerce',
    'Manufacturing',
    'Media & Entertainment',
    'Government',
    'Other',
  ];

  const LOCATIONS = [
    'North America',
    'Europe',
    'Asia Pacific',
    'Latin America',
    'Middle East & Africa',
  ];

  const PRODUCT_INTERESTS = [
    'Bytecube Insight',
    'Bytecube Automate',
    'Bytecube Platform',
    'Professional Services',
  ];

  const EVALUATION_STAGES = [
    'Just exploring',
    'Evaluating vendors',
    'Piloting',
    'Ready to purchase',
  ];

  const HEARD_ABOUT_US = [
    'Search engine',
    'Social media',
    'Conference / event',
    'Referral',
    'News / blog',
    'Other',
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!topic) {
      toast({ title: 'Please select a topic', variant: 'destructive' });
      return;
    }

    // Basic required validation for the expanded form when a topic is selected
    const requiredFields: Array<keyof ContactFormData> = [
      'firstName',
      'lastName',
      'email',
      'company',
      'jobTitle',
    ];
    const missing = requiredFields.filter((field) => !formData[field]);
    if (missing.length > 0) {
      toast({ title: 'Please complete the required fields', variant: 'destructive' });
      return;
    }

    setSubmitting(true);
    // Simulate submit
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: 'Thanks for reaching out to Bytecube!',
        description: `We received your request about “${topic}”. Our team will get back to you shortly.`,
      });
      // Reset
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        jobTitle: '',
        industry: '',
        hqLocation: '',
        productInterest: '',
        genAiSolution: '',
        evaluationStage: '',
        details: '',
        heardAboutUs: '',
      });
      setTopic(undefined);
    }, 600);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="topic" className="text-base font-medium">
                      What can we help you with?*
                    </Label>
                    <Select onValueChange={setTopic} value={topic}>
                      <SelectTrigger id="topic" className="h-12 text-base">
                        <SelectValue placeholder="Please Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {SUPPORT_TOPICS.map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {topic && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First name*</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Jane"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name*</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Business email*</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="jane@company.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company or organization name*</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Acme Inc."
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Company website</Label>
                          <Input
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            placeholder="https://example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job title*</Label>
                        <Input
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          placeholder="Head of Data Science"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Industry</Label>
                          <Select
                            value={formData.industry}
                            onValueChange={(v) => setFormData((p) => ({ ...p, industry: v }))}
                          >
                            <SelectTrigger className="h-12 text-base">
                              <SelectValue placeholder="Please Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {INDUSTRIES.map((item) => (
                                <SelectItem key={item} value={item}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Company headquarters location</Label>
                          <Select
                            value={formData.hqLocation}
                            onValueChange={(v) => setFormData((p) => ({ ...p, hqLocation: v }))}
                          >
                            <SelectTrigger className="h-12 text-base">
                              <SelectValue placeholder="Please Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {LOCATIONS.map((item) => (
                                <SelectItem key={item} value={item}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Primary product interest</Label>
                          <Select
                            value={formData.productInterest}
                            onValueChange={(v) =>
                              setFormData((p) => ({ ...p, productInterest: v }))
                            }
                          >
                            <SelectTrigger className="h-12 text-base">
                              <SelectValue placeholder="Please Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {PRODUCT_INTERESTS.map((item) => (
                                <SelectItem key={item} value={item}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Where are you in your evaluation journey?</Label>
                          <Select
                            value={formData.evaluationStage}
                            onValueChange={(v) =>
                              setFormData((p) => ({ ...p, evaluationStage: v }))
                            }
                          >
                            <SelectTrigger className="h-12 text-base">
                              <SelectValue placeholder="Please Select" />
                            </SelectTrigger>
                            <SelectContent>
                              {EVALUATION_STAGES.map((item) => (
                                <SelectItem key={item} value={item}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="genAiSolution">
                          Please describe the Gen AI SaaS solution you're currently using, if any
                        </Label>
                        <Input
                          id="genAiSolution"
                          name="genAiSolution"
                          value={formData.genAiSolution}
                          onChange={handleInputChange}
                          placeholder="e.g., Using internal LLM for support automation"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="details">
                          Please share a bit more about why you're contacting us and how the Bytecube team can support you
                        </Label>
                        <Textarea
                          id="details"
                          name="details"
                          className="min-h-[120px]"
                          value={formData.details}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your goals, timelines, and success metrics"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>How did you hear about us?</Label>
                        <Select
                          value={formData.heardAboutUs}
                          onValueChange={(v) => setFormData((p) => ({ ...p, heardAboutUs: v }))}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Please Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {HEARD_ABOUT_US.map((item) => (
                              <SelectItem key={item} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  <Button type="submit" disabled={submitting} className="h-12 px-8 text-base">
                    {submitting ? 'Submitting…' : 'Submit'}
                  </Button>
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

