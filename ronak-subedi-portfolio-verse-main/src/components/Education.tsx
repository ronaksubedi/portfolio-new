
import { CalendarDays, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <SectionHeader 
          title="Education" 
          subtitle="My academic journey that has shaped my technical knowledge and professional development."
        />
        
        <div className="grid grid-cols-1 max-w-3xl mx-auto">
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-md hover-scale">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-gradient">
                Bachelor in Information Technology
              </h3>
              <span className="bg-secondary text-foreground py-1 px-3 rounded-full text-sm mt-2 md:mt-0">
                Ongoing
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center text-muted-foreground mb-6 gap-2 md:gap-6">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Patan Multiple Campus-TU</span>
              </div>
              <div className="flex items-center">
                <CalendarDays size={16} className="mr-2" />
                <span>2021 - Present</span>
              </div>
            </div>
            
            <p className="text-foreground/80">
              Currently pursuing a Bachelor's degree in Information Technology with a focus on modern web development
              technologies, database systems, and software engineering principles. The program provides a comprehensive
              foundation in both theoretical concepts and practical applications of information technology.
            </p>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Key Coursework:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Web Development & Design</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Database Management</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Software Engineering</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Computer Networks</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Data Structures & Algorithms</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <span>Operating Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
