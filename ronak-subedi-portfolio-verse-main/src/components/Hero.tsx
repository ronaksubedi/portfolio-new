
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-accent/10"></div>
      </div>
      
      <div className="container-custom flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="flex-1 animate-fade-in">
          <span className="inline-block text-primary text-sm md:text-base font-medium mb-4 tracking-wider opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
            Full STACK DEVELOPER
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight opacity-0 animate-fade-in" style={{ animationDelay: '500ms' }}>
            Hi, I'm <span className="text-gradient">Ronak Subedi</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '700ms' }}>
            Building responsive, user-friendly web applications with modern technologies.
            Transforming ideas into elegant, functional digital experiences.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '900ms' }}>
            <Button asChild size="lg" className="rounded-full">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="flex-1 max-w-md lg:max-w-none animate-scale-in">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-75"></div>
            <img
              src="/lovable-uploads/af976dfe-fb78-48a4-a7fe-1157bb61b082.png"
              alt="Ronak Subedi"
              className="relative w-full lg:max-w-md rounded-full border-4 border-background"
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce transition-colors duration-300 hover:text-primary"
      >
        <ArrowDown size={30} />
      </a>
    </section>
  );
};

export default Hero;
