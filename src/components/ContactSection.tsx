import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-serifhead">
              Get in Touch
            </h2>
            <p className="text-muted-foreground">
              Let's talk. Fill out the form, and a member of our solutions team will be in touch within 24 hours.
            </p>
            <div className="flex items-center gap-6 opacity-80">
              <img src="/placeholder.svg" alt="Client 1" className="h-8 w-auto grayscale" />
              <img src="/placeholder.svg" alt="Client 2" className="h-8 w-auto grayscale" />
              <img src="/placeholder.svg" alt="Client 3" className="h-8 w-auto grayscale" />
            </div>
          </div>

          <Card className="md:col-span-3 bg-card border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-card-foreground text-left">
                {/* Removed redundant sub-header */}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background border-border"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Company Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-border"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background border-border min-h-[120px]"
                    placeholder="Tell us about your AI needs..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-semibold">
                  Request My Demo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;