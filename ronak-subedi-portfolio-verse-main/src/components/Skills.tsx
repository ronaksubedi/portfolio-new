
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import SectionHeader from "./SectionHeader";

type SkillCategory = {
  name: string;
  skills: {
    name: string;
    level: number;
    icon?: string;
  }[];
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const skillCategories: SkillCategory[] = [
    {
      name: "all",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Node.js", level: 40 },
        { name: "React.js", level: 30 },
        { name: "HTML/CSS", level: 95 },
        { name: "MongoDB", level: 20 },
        { name: "Express.js", level: 10 },
        { name: "Git", level: 20 },
        { name: "Team Leadership", level: 82 },
        { name: "Communication", level: 88 },
        { name: "Problem-Solving", level: 92 },
      ],
    },
    {
      name: "technical",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Node.js", level: 40 },
        { name: "React.js", level: 30 },
        { name: "HTML/CSS", level: 95 },
        { name: "MongoDB", level: 20 },
        { name: "Express.js", level: 10 },
        { name: "Git", level: 20 },
        { name: "REST APIs", level: 25 },
        { name: "Responsive Design", level: 90 },
        { name: "Tailwind CSS", level: 65 },
      ],
    },
    {
      name: "soft",
      skills: [
        { name: "Team Leadership", level: 82 },
        { name: "Communication", level: 88 },
        { name: "Problem-Solving", level: 92 },
        { name: "Time Management", level: 85 },
        { name: "Collaboration", level: 90 },
        { name: "Adaptability", level: 87 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/40">
      <div className="container-custom">
        <SectionHeader 
          title="Skills" 
          subtitle="A showcase of my technical expertise and professional competencies."
        />
        
        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger
              value="all"
              onClick={() => setActiveTab("all")}
              className="text-base"
            >
              All Skills
            </TabsTrigger>
            <TabsTrigger
              value="technical"
              onClick={() => setActiveTab("technical")}
              className="text-base"
            >
              Technical
            </TabsTrigger>
            <TabsTrigger
              value="soft"
              onClick={() => setActiveTab("soft")}
              className="text-base"
            >
              Soft Skills
            </TabsTrigger>
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={cn(
                      "animate-fade-in appear transition-all duration-500",
                      {
                        "delay-100": index % 4 === 0,
                        "delay-200": index % 4 === 1,
                        "delay-300": index % 4 === 2,
                        "delay-400": index % 4 === 3,
                      }
                    )}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-medium">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 bg-card rounded-xl p-8 shadow-md max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              { name: "JavaScript", bg: "bg-yellow-100", text: "text-yellow-800" },
              { name: "React", bg: "bg-blue-100", text: "text-blue-800" },
              { name: "Node.js", bg: "bg-green-100", text: "text-green-800" },
              { name: "MongoDB", bg: "bg-emerald-100", text: "text-emerald-800" },
              { name: "Express", bg: "bg-gray-100", text: "text-gray-800" },
              { name: "HTML5", bg: "bg-orange-100", text: "text-orange-800" },
              { name: "CSS3", bg: "bg-indigo-100", text: "text-indigo-800" },
              { name: "Git", bg: "bg-red-100", text: "text-red-800" },
              { name: "Tailwind", bg: "bg-cyan-100", text: "text-cyan-800" },
              { name: "REST API", bg: "bg-purple-100", text: "text-purple-800" },
            ].map((tech) => (
              <div
                key={tech.name}
                className={cn(
                  "flex items-center justify-center py-3 px-4 rounded-md font-medium text-sm hover-scale",
                  tech.bg,
                  tech.text
                )}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
