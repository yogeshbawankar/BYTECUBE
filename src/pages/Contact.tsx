import { useState } from 'react';
import type React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((previous) => ({ ...previous, [e.target.name]: e.target.value }));
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
            <p className="text-[#555555] mb-6">We'd love to hear from you. Reach us via the form or the details below.</p>
            <div className="space-y-2 text-[#555555]">
              <div>+1 (555) 123-4567</div>
              <div>hello@bytecube.ai</div>
              <div>123 Market Street, Metropolis</div>
            </div>
            <div className="mt-6 aspect-[16/9] w-full bg-[#CCCCCC]/30 border border-[#EAEAEA] flex items-center justify-center text-[#555555]">
              Google Maps Placeholder
            </div>
          </div>
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" required value={form.name} onChange={update} />
              </div>
              <div>
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" name="email" type="email" required value={form.email} onChange={update} />
              </div>
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" name="company" required value={form.company} onChange={update} />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required value={form.message} onChange={update} className="min-h-[140px]" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


