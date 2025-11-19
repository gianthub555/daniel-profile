import { Code, ShoppingCart, Smartphone, Cloud } from "lucide-react";
import { Card } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Complete web application development from frontend to backend. React.js, Next.js, Laravel, Node.js, Python, and modern frameworks. Building scalable, secure, and high-performance applications that drive business growth.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Custom e-commerce platforms, Shopify stores, WooCommerce sites, and payment integrations. From product catalogs to secure checkout flows, I build online stores that convert visitors into customers.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications using React Native and Flutter. Native iOS and Android development, Firebase integration, and app store deployment. Building mobile solutions that work seamlessly across all devices.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "AWS, Azure, and GCP cloud infrastructure setup and management. Docker containerization, CI/CD pipelines, and automated deployments. Ensuring your applications are scalable, secure, and always available.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="service" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm uppercase tracking-wider font-medium mb-2">
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border overflow-hidden group hover:border-primary transition-all duration-500 animate-fade-in relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-gradient-line"></div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-primary/30">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-secondary/50 rounded-xl border border-border hover:border-primary transition-all duration-300 animate-fade-in">
            <div className="text-5xl font-bold text-primary mb-2">40+</div>
            <div className="text-foreground/70">Complete Projects</div>
          </div>
          <div
            className="text-center p-8 bg-secondary/50 rounded-xl border border-border hover:border-primary transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-5xl font-bold text-primary mb-2">10+</div>
            <div className="text-foreground/70">Years of Experience</div>
          </div>
          <div
            className="text-center p-8 bg-secondary/50 rounded-xl border border-border hover:border-primary transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-5xl font-bold text-primary mb-2">20+</div>
            <div className="text-foreground/70">Full-Stack Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
