import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useForm } from "@formspree/react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [state, handle] = useForm("mwprylrk");
  if (state.succeeded) {
    return <p>Successful Sending</p>;
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (225) 501-6437",
      href: "tel:+12255016437",
    },
    {
      icon: Mail,
      label: "Email",
      value: "danielbingo048@gmail.com",
      href: "mailto:danielbingo048@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Texus, USA",
      href: "#",
    },
  ];

  return (
    <section id="contacts" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm uppercase tracking-wider font-medium mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your
            vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary transition-all duration-300 card-glow"
                >
                  <a href={info.href} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">
                        {info.label}
                      </p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              );
            })}

            <div className="pt-6">
              <p className="text-foreground/60 mb-4">Available for:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Full-time opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Freelance projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Technical consulting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-border animate-slide-in-right">
            <form
              action={"https://formspree.io/f/mwprylrk"}
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  required
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background border-border"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background border-border"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[150px]"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={state.submitting}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
