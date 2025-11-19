import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              expert<span className="text-primary">IO</span>
            </h3>
            <p className="text-foreground/60 text-sm">
              Building fast, modern, and beautiful web applications with 8+ years of experience in full-stack development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-foreground/60 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/60 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-foreground/60 hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/60 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-all flex items-center justify-center group"
              >
                <Github className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-all flex items-center justify-center group"
              >
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="mailto:john.dev@example.com"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-all flex items-center justify-center group"
              >
                <Mail className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="tel:+639193368046"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-all flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>© {currentYear} John Villanueva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
