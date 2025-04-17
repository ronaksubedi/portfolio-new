
import { useState } from "react";
import { ExternalLink, Github, Search, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import SectionHeader from "./SectionHeader";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  category: string;
  longDescription?: string;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product listings, search, cart and checkout functionality.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      liveLink: "#",
      githubLink: "#",
      category: "fullstack",
      longDescription: "An end-to-end e-commerce solution built with the MERN stack. Features include product catalog with categories and filtering, user authentication, shopping cart, payment processing integration, order management, and an admin dashboard for product and order management."
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspace functionality.",
      image: "https://images.unsplash.com/photo-1611224885990-ab7363d7f7e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1039&q=80",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      liveLink: "#",
      githubLink: "#",
      category: "frontend",
      longDescription: "A task management application with a focus on team collaboration. Users can create workspaces, assign tasks to team members, set due dates, add comments, and track progress with real-time updates. The app also includes calendar integration and notification features."
    },
    {
      id: 3,
      title: "Blog Platform API",
      description: "A RESTful API for a blog platform with authentication, posts, comments, and user management.",
      image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      githubLink: "#",
      category: "backend",
      longDescription: "A comprehensive API for a blogging platform, featuring user authentication with JWT, post creation and management, commenting system, user profile management, and content categorization. The API is fully documented with Swagger and includes comprehensive testing."
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather forecast dashboard with location search, saved locations, and detailed weather data.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS Grid"],
      liveLink: "#",
      githubLink: "#",
      category: "frontend",
      longDescription: "A responsive weather dashboard that allows users to search for locations, view current weather and forecasts, and save favorite locations. Features include interactive weather maps, hourly and daily forecasts, and data visualization with charts."
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-secondary/40">
      <div className="container-custom">
        <SectionHeader 
          title="Projects" 
          subtitle="A selection of my recent work showcasing my skills and development experience."
        />
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-card rounded-full p-1 shadow-sm">
            {["all", "frontend", "backend", "fullstack"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "py-2 px-4 rounded-full text-sm font-medium transition-all",
                  filter === category
                    ? "bg-primary text-white shadow-sm"
                    : "hover:bg-muted"
                )}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-scale group border-primary/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="rounded-full"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-lg">
                  {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)} Project
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p className="text-muted-foreground mb-4">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {selectedProject.liveLink && (
                      <Button asChild>
                        <a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {selectedProject.githubLink && (
                      <Button asChild variant="outline">
                        <a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
