import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectModal } from "./project-modal";
import type { Project } from "@shared/schema";

const projects: Project[] = [
  {
    id: "project1",
    title: "E-commerce Dashboard",
    shortDescription: "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics.",
    description: "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and customer insights. Built with modern React patterns and optimized for performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Socket.io"],
    features: ["Real-time analytics", "Inventory management", "Customer insights", "Order tracking", "Sales reports"],
    githubUrl: "https://github.com/alexjohnson/ecommerce-dashboard",
    liveUrl: "https://dashboard.alexjohnson.dev",
    category: "Web Application"
  },
  {
    id: "project2",
    title: "Fitness Tracking App",
    shortDescription: "A React Native mobile app for tracking workouts and nutrition with social features.",
    description: "A React Native mobile app for tracking workouts and nutrition with social features and progress analytics. Includes workout planning, nutrition logging, and community features.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["React Native", "Firebase", "TypeScript", "Redux", "Expo"],
    features: ["Workout tracking", "Nutrition logging", "Social features", "Progress analytics", "Goal setting"],
    githubUrl: "https://github.com/alexjohnson/fitness-app",
    liveUrl: "https://apps.apple.com/app/fitness-tracker",
    category: "Mobile Application"
  },
  {
    id: "project3",
    title: "AI Chatbot Platform",
    shortDescription: "An intelligent chatbot platform with natural language processing and machine learning.",
    description: "An intelligent chatbot platform with natural language processing and machine learning capabilities for customer support. Features advanced NLP, custom training, and multi-platform integration.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
    features: ["Natural language processing", "Machine learning", "Multi-platform integration", "Analytics dashboard", "Custom training"],
    githubUrl: "https://github.com/alexjohnson/ai-chatbot",
    liveUrl: "https://chatbot.alexjohnson.dev",
    category: "AI/ML Application"
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <motion.div
                  className="project-overlay absolute inset-0 bg-primary/90 opacity-0 transition-opacity duration-300 flex items-center justify-center"
                  whileHover={{ opacity: 1 }}
                >
                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="bg-background text-primary hover:bg-background/90"
                  >
                    View Details
                  </Button>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
