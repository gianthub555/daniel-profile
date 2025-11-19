import { Building, Code2, TrendingUp, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";

const Philosophy = () => {
  const sections = [
    {
      icon: Building,
      title: "For the Business",
      subtitle: "Building Your Digital Foundation",
      description: "For any business, investing in professional web development is the cornerstone of establishing credibility and driving growth. It's your company's digital storefront, open 24/7 to a global audience.",
      points: [
        "Building Trust & Professionalism",
        "Expanding Reach & Accessibility",
        "Data-Driven Marketing",
        "Unlocking E-commerce"
      ]
    },
    {
      icon: Code2,
      title: "For the Developer",
      subtitle: "Mastering the Craft",
      description: "To thrive as a web developer in this new world, a structured approach to learning is essential. Mastery begins with the core building blocks before advancing to specialized frameworks.",
      points: [
        "Grasp Internet Fundamentals",
        "Master HTML, CSS, JavaScript",
        "Adopt Essential Tools",
        "Build a Tangible Portfolio"
      ]
    },
    {
      icon: TrendingUp,
      title: "For the Investor",
      subtitle: "Capitalizing on the Digital Ecosystem",
      description: "The growth of the web has created diverse financial opportunities beyond building a single business website. Investors can capitalize on the industry's expansion through various vehicles.",
      points: [
        "Tech Stocks & ETFs",
        "Web3 & Digital Assets",
        "Software-as-a-Service",
        "Creating Digital Products"
      ]
    }
  ];

  return (
    <section id="philosophy" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm uppercase tracking-wider font-medium mb-2">My Philosophy</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Web Development: A <span className="text-gradient">Dual Perspective</span>
            <br />
            on Creation and Investment
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed">
            In today's digital-first era, a robust online presence is not just an advantage—it's a necessity. 
            My perspective on web development is twofold: it is both a foundational tool for modern business 
            and a dynamic field for strategic financial investment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border p-8 hover:border-primary transition-all duration-500 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-4">{section.subtitle}</p>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {section.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{point}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Conclusion */}
        <div className="max-w-4xl mx-auto text-center p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20 animate-fade-in">
          <div className="text-3xl mb-4">🚀</div>
          <p className="text-lg leading-relaxed text-foreground/90">
            <span className="font-semibold text-primary">The future belongs to those who understand</span> that a website is more than a static page; 
            it is an interactive platform, a business engine, and a valuable asset. Success requires a fusion of technical skill, 
            strategic business acumen, and an investor's mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
