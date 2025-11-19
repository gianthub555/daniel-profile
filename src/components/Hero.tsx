import { Github, Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const introdata = {
    first: "Web Developer",
    second: "Mobile Developer",
    third: "E-commerce Expert",
    fourth: "PHP Developer",
    fifth: "MERN Developer",
    sixth: "Python Expert",
    seventh: "AI Expert",
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary text-sm uppercase tracking-wider font-medium">
                I AM
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Daniel, a Senior
                <br />
                <div className="waviy text-outline inline-flex">
                  {["F", "U", "L", "L", "-", "S", "T", "A", "C", "K"].map(
                    (letter, i) => (
                      <span
                        key={i}
                        style={{ "--i": i + 1 } as React.CSSProperties}
                      >
                        {letter}
                      </span>
                    )
                  )}
                </div>
              </h1>

              <div className="text-2xl md:text-3xl font-bold text-primary h-12">
                <div className="animate-fade-in">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.first,
                        introdata.second,
                        introdata.third,
                        introdata.fourth,
                        introdata.fifth,
                        introdata.sixth,
                        introdata.seventh,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </div>
              </div>
            </div>

            <p className="text-foreground/80 text-lg leading-relaxed max-w-xl">
              <span className="text-primary font-semibold">10+ year</span>{" "}
              full-stack engineer delivering fast, secure, scalable apps with{" "}
              <span className="text-primary">clean code</span> and premium
              UX—ready to hit new heights together.
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              More About Me
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-foreground/60 text-sm">Find me on</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="tel:+1234567890"
                  className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                >
                  <Phone className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Large "Software" text overlay */}
              <div className="absolute -top-20 -right-10 z-0">
                <h2 className="text-8xl md:text-9xl font-bold text-foreground/5 whitespace-nowrap">
                  Software
                </h2>
              </div>

              {/* Profile image with glow effect */}
              <div className="relative z-10 hero-glow rounded-full">
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20">
                  <div className="relative">
                    <svg
                      className="w-48 h-48 animate-rotate-text"
                      viewBox="0 0 200 200"
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                      </defs>
                      <text className="text-[14px] fill-foreground font-medium tracking-[8px]">
                        <textPath href="#circlePath" startOffset="1">
                          DEVELOPER • SINCE 2012 •
                        </textPath>
                      </text>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">
                          10+
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-full aspect-square">
                  {/* <img
                    src="/src/assets/profile-hero.png"
                    alt="John - Senior Full-Stack Developer"
                    className="w-full h-full object-cover"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                </div>

                {/* "Developer" badge */}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 border-2 border-primary/30 rounded-full animate-float" />
              <div
                className="absolute bottom-1/4 -right-8 w-20 h-20 border-2 border-primary/30 rounded-lg animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
