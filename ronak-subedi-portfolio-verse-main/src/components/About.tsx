
import { GraduationCap, Code, Users, Lightbulb } from "lucide-react";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/40">
      <div className="container-custom">
        <SectionHeader 
          title="About Me" 
          subtitle="I'm a passionate Full Stack developer focused on creating efficient, user-friendly web applications with modern technologies."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <p className="text-lg mb-6 text-foreground/90">
              As a passionate Full Stack Developer, I thrive on turning complex problems into elegant, intuitive solutions. 
              My journey in web development began with a curiosity about how digital experiences are created, which evolved 
              into a deep expertise in modern JavaScript technologies.
            </p>
            
            <p className="text-lg mb-6 text-foreground/90">
              I specialize in building responsive, user-friendly applications with React, Node.js, Express, and MongoDB. 
              With a strong foundation in both frontend and backend development, I create applications that are not only 
              functional but also maintainable and scalable.
            </p>
            
            <p className="text-lg text-foreground/90">
              My goal is to leverage technology to build innovative solutions that solve real-world problems. I'm constantly 
              expanding my knowledge and staying updated with the latest industry trends and best practices. I believe in 
              writing clean, efficient code and creating seamless user experiences.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-md hover-scale animate-fade-in">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Code className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
                  <p className="text-muted-foreground">
                    Proficient in JavaScript, React, Node.js, Express, and MongoDB, with a strong foundation in HTML/CSS and responsive design principles.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md hover-scale animate-fade-in">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education Focus</h3>
                  <p className="text-muted-foreground">
                    Currently pursuing a Bachelor's degree in Information Technology at Patan Multiple Campus, constantly expanding my knowledge and skills.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md hover-scale animate-fade-in">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Team Leadership</h3>
                  <p className="text-muted-foreground">
                    Experienced in leading development teams, fostering collaboration, and ensuring project success through effective communication.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md hover-scale animate-fade-in">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Lightbulb className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Career Goals</h3>
                  <p className="text-muted-foreground">
                    Aspiring to become a lead developer while continuing to build innovative web applications that deliver exceptional user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
