
import { Mail, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionHeader 
          title="Get in Touch" 
          subtitle="Feel free to reach out for collaborations, opportunities, or just to say hello!"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              I'm interested in freelance opportunities and collaborations. If you have a project that needs coding or want to discuss a potential opportunity, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                  <a 
                    href="mailto:ronaksubedi576@gmail.com" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    ronaksubedi576@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Linkedin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">LinkedIn</h4>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/ronak-subedi
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Twitter className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Twitter / X</h4>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    @subedi_ronak
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Github className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">GitHub</h4>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    github.com/ronaksubedi
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">Resume</h3>
              <Button asChild className="rounded-full">
                <a href="#" download>
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          
          <Card className="border-primary/10">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full rounded-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
