
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-10 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">
              <span className="text-primary">Ronak</span> Subedi
            </h3>
            <p className="text-muted-foreground mt-2">
              MERN Stack Developer building modern web experiences.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-muted hover:bg-primary/10 p-2 rounded-full transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-muted hover:bg-primary/10 p-2 rounded-full transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-muted hover:bg-primary/10 p-2 rounded-full transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="mailto:ronak.subedi@example.com" 
              className="bg-muted hover:bg-primary/10 p-2 rounded-full transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Ronak Subedi. All Rights Reserved.
          </p>
          
          <ul className="flex items-center space-x-6 mt-4 md:mt-0">
            <li>
              <a 
                href="#home" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Scroll to top button now handled by the ScrollToTop component */}
    </footer>
  );
};

export default Footer;
