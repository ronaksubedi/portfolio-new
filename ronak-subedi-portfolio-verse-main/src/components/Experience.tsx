import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "WebTech Solutions",
      period: "January 2023 - Present",
      description: "Developing responsive web applications using React.js, working closely with design teams to implement pixel-perfect interfaces, and optimizing applications for maximum speed and scalability.",
      skills: ["React.js", "Redux", "TypeScript", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Junior Full Stack Developer",
      company: "Digital Innovators",
      period: "May 2022 - December 2022",
      description: "Built RESTful APIs using Node.js and Express, implemented frontend components with React, and maintained MongoDB databases for various client projects.",
      skills: ["MERN Stack", "REST API", "Agile"],
      link: "#"
    },
    {
      title: "Web Development Intern",
      company: "TechStart Nepal",
      period: "January 2022 - April 2022",
      description: "Assisted in developing and maintaining client websites, learned modern web development practices, and participated in code reviews and team meetings.",
      skills: ["HTML/CSS", "JavaScript", "Git", "Responsive Design"],
      link: "#"
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeader 
          title="Experience" 
          subtitle="My professional journey and roles that have contributed to my growth as a developer."
        />

        <div className="relative max-w-4xl mx-auto mt-10">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-border transform md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative mb-16 last:mb-0"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10"></div>
                
                {/* Experience card */}
                <Card className="md:w-1/2 hover-scale group transition-all duration-300 border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                      
                      {/* Date badge - unified placement */}
                      <div className="inline-flex items-center gap-1.5 bg-secondary text-foreground py-1 px-3 rounded-full text-sm">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Briefcase size={16} className="mr-2" />
                      <span>{exp.company}</span>
                      {exp.link && (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-primary hover:text-primary/80">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    
                    <p className="text-foreground/80 mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Placeholder for layout balance */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;