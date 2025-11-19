import { Card } from "./ui/card";

const Projects = () => {
  const projects = [
    {
      name: "4StateTrucks - Heavy Equipment Marketplace",
      tools: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3"],
      role: "Full-Stack Developer & E-commerce Specialist",
      features: [
        "Equipment Listings",
        "Advanced Search",
        "User Accounts",
        "Payment Integration",
        "Mobile Responsive",
      ],
      description:
        "Developed comprehensive heavy equipment marketplace with advanced search functionality, user account management, secure payment processing, and mobile-responsive design. Built custom WordPress theme with specialized features for equipment dealers and buyers.",
    },
    {
      name: "WardrobeShop - Fashion E-commerce Platform",
      tools: ["Shopify", "Liquid", "JavaScript", "CSS3", "Stripe"],
      role: "Shopify Developer & E-commerce Specialist",
      features: [
        "Custom Theme",
        "Product Catalog",
        "Checkout Optimization",
        "Mobile Responsive",
        "SEO Optimized",
      ],
      description:
        "Developed custom Shopify store for fashion retail with optimized product catalog, streamlined checkout process, mobile-responsive design, and advanced SEO implementation. Integrated payment processing and inventory management systems.",
    },
    {
      name: "Cafe Business Show - Event Management Platform",
      tools: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3"],
      role: "WordPress Developer & Event Platform Specialist",
      features: [
        "Event Management",
        "Registration System",
        "Payment Processing",
        "Content Management",
        "Mobile Responsive",
      ],
      description:
        "Developed comprehensive event management platform for cafe business exhibitions with registration system, payment processing, content management, and mobile-responsive design. Built custom WordPress solution with specialized event features.",
    },
    {
      name: "ShakeShop Liquor - Premium Liquor E-commerce",
      tools: ["Shopify", "Liquid", "JavaScript", "CSS3", "Stripe"],
      role: "Shopify Developer & E-commerce Solutions Architect",
      features: [
        "Age Verification",
        "Product Catalog",
        "Secure Checkout",
        "Inventory Management",
        "Mobile Optimized",
      ],
      description:
        "Developed premium liquor e-commerce platform with age verification, secure checkout, inventory management, and mobile-optimized design. Implemented custom Shopify theme with specialized features for alcohol retail compliance.",
    },
    {
      name: "4StateTrucks - Heavy Equipment Marketplace",
      tools: ["WordPress", "PHP", "MySQL", "JavaScript", "css3"],
      role: "Full-Stack Developer & E-commerce Specialist",
      features: [
        "Equipment Listings",
        "Advanced Search",
        "User Accounts",
        "Payment Integration",
        "Mobile Responsive",
      ],
      description:
        "Developed comprehensive heavy equipment marketplace with advanced search functionality, user account management, secure payment processing, and mobile-responsive design. Built custom WordPress theme with specialized features for equipment dealers and buyers.",
    },
    {
      name: "WardrobeShop - Fashion E-commerce Platform",
      tools: ["Shopify", "Liquid", "JavaScript", "CSS3", "Stripe"],
      role: "Shopify Developer & E-commerce Specialist",
      features: [
        "Custom Theme",
        "Product Catalog",
        "Checkout Optimization",
        "Mobile Responsive",
        "SEO Optimized",
      ],
      description:
        "Developed custom Shopify store for fashion retail with optimized product catalog, streamlined checkout process, mobile-responsive design, and advanced SEO implementation. Integrated payment processing and inventory management systems.",
    },
    {
      name: "Cafe Business Show - Event Management Platform",
      tools: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3"],
      role: "WordPress Developer & Event Platform Specialist",
      features: [
        "Event Management",
        "Registration System",
        "Payment Processing",
        "Content Management",
        "Mobile Responsive",
      ],
      description:
        "Developed comprehensive event management platform for cafe business exhibitions with registration system, payment processing, content management, and mobile-responsive design. Built custom WordPress solution with specialized event features.",
    },
    {
      name: "ShakeShop Liquor - Premium Liquor E-commerce",
      tools: ["Shopify", "Liquid", "JavaScript", "CSS3", "Stripe"],
      role: "Shopify Developer & E-commerce Specialist",
      features: [
        "Age Verification",
        "Product Catalog",
        "Secure Checkout",
        "Inventory Management",
        "Mobile Optimized",
      ],
      description:
        "Developed premium liquor e-commerce store with age verification system, secure payment processing, inventory management, and mobile-optimized design. Built custom Shopify solution with specialized features for alcohol retail compliance.",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm uppercase tracking-wider font-medium mb-2">
            PROJECTS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="sticky-card"
              style={{ top: `${100 + index * 20}px` }}
            >
              <Card className="code-card p-6 hover:border-primary transition-all duration-500 animate-fade-in group relative overflow-hidden">
                <div className="project-gradient-line"></div>
                {/* Code-style header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  <div className="font-mono text-sm space-y-2">
                    <div className="text-foreground/60">
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">project</span>{" "}
                      <span className="text-foreground/60">= {"{"}</span>
                    </div>

                    <div className="pl-4">
                      <div className="text-foreground/80">
                        <span className="text-green-400">name</span>
                        <span className="text-foreground/60">: </span>
                        <span className="text-orange-400">
                          '{project.name}'
                        </span>
                        <span className="text-foreground/60">,</span>
                      </div>
                    </div>

                    <div className="pl-4">
                      <div className="text-foreground/80">
                        <span className="text-green-400">tools</span>
                        <span className="text-foreground/60">: [</span>
                        {project.tools.map((tool, i) => (
                          <span key={i}>
                            <span className="text-orange-400">'{tool}'</span>
                            {i < project.tools.length - 1 && (
                              <span className="text-foreground/60">, </span>
                            )}
                          </span>
                        ))}
                        <span className="text-foreground/60">],</span>
                      </div>
                    </div>

                    <div className="pl-4">
                      <div className="text-foreground/80">
                        <span className="text-green-400">myRole</span>
                        <span className="text-foreground/60">: </span>
                        <span className="text-primary">{project.role}</span>
                        <span className="text-foreground/60">,</span>
                      </div>
                    </div>

                    <div className="pl-4">
                      <div className="text-foreground/80">
                        <span className="text-green-400">features</span>
                        <span className="text-foreground/60">: [</span>
                        {project.features.slice(0, 3).map((feature, i) => (
                          <span key={i}>
                            <span className="text-orange-400">'{feature}'</span>
                            {i < 2 && (
                              <span className="text-foreground/60">, </span>
                            )}
                          </span>
                        ))}
                        <span className="text-foreground/60">],</span>
                      </div>
                    </div>

                    <div className="pl-4">
                      <div className="text-foreground/80">
                        <span className="text-green-400">description</span>
                        <span className="text-foreground/60">: </span>
                        <span className="text-orange-400 block pl-4 leading-relaxed">
                          {project.description}
                        </span>
                      </div>
                    </div>

                    <div className="text-foreground/60">{"}"}</div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
