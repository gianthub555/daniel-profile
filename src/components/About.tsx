import { Code2, Zap, Target, Rocket } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized apps with 0.4s load times and premium UX",
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Delivered 3× revenue lifts through strategic solutions",
    },
    {
      icon: Rocket,
      title: "Quick Delivery",
      description: "Your next feature shipped in 48h—retainer or sprint",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm uppercase tracking-wider font-medium mb-2">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Building <span className="text-gradient">Fast, Modern</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">and Beautiful Web Apps</h3>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed">
            I am passionate about merging <span className="text-primary">SEO strategy</span>,{" "}
            <span className="text-primary">automation</span>, and{" "}
            <span className="text-primary">AI innovation</span> to deliver high-performance, scalable,
            and future-ready digital solutions. Every project I create is designed not just to look amazing,
            but also to drive traffic, engagement, and business growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 card-glow group animate-fade-in about-us-card relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="tmp-light light-center"></div>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-foreground/60">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
