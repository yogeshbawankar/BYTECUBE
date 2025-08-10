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
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serifhead">Get in Touch</h1>
            <p className="text-[#555555] mb-6">Let's talk. Fill out the form, and a member of our solutions team will be in touch within 24 hours.</p>
            <div className="flex items-center gap-6 opacity-80">
              <img src="/placeholder.svg" alt="Client 1" className="h-8 w-auto grayscale" />
              <img src="/placeholder.svg" alt="Client 2" className="h-8 w-auto grayscale" />
              <img src="/placeholder.svg" alt="Client 3" className="h-8 w-auto grayscale" />
            </div>
          </div>
          <div className="md:col-span-3">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name" className="mb-1 block">Full Name</Label>
                <Input id="name" name="name" required value={form.name} onChange={update} />
              </div>
              <div>
                <Label htmlFor="email" className="mb-1 block">Work Email</Label>
                <Input id="email" name="email" type="email" required value={form.email} onChange={update} />
              </div>
              <div>
                <Label htmlFor="company" className="mb-1 block">Company Name</Label>
                <Input id="company" name="company" required value={form.company} onChange={update} />
              </div>
              <div>
                <Label htmlFor="message" className="mb-1 block">Message</Label>
                <Textarea id="message" name="message" required value={form.message} onChange={update} className="min-h-[140px]" />
              </div>
              <Button type="submit" size="lg" className="w-full font-semibold">Request My Demo</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


