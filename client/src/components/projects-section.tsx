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
    title: "Beauty Salon Website",
    shortDescription: "Featured site while working with TheBrandWiz.com (agency). Interactive and responsive frontend development.",
    description: "One of the featured sites while working with TheBrandWiz.com (agency). Worked as a frontend developer to make the site user interactive and responsive. The project focused on creating an elegant and modern design for a beauty salon with smooth animations and mobile-first approach.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React.js", "Next.js", "Express.js", "MongoDB", "Node.js"],
    features: ["Responsive design", "Interactive UI", "Booking system", "Gallery showcase", "Contact integration"],
    githubUrl: "https://github.com/Nafeesa-shehzadi/complete-furniro-website",
    liveUrl: "#",
    category: "Web Application"
  },
  {
    id: "project2",
    title: "Harigurus Company Site",
    shortDescription: "New-age site for Hindu, religious, ancient and traditional literature. Built from scratch.",
    description: "Harigurus is a new-age site for all Hindu, religious, ancient and traditional literature. Built the complete site from scratch with modern web technologies. The platform serves as a comprehensive resource for spiritual and traditional content with user-friendly navigation and content management.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React.js", "Next.js", "Express.js", "MongoDB", "Node.js"],
    features: ["Content management", "Search functionality", "User authentication", "Responsive design", "SEO optimization"],
    githubUrl: "https://github.com/Nafeesa-shehzadi/complete-furniro-website",
    liveUrl: "https://website-seven-alpha-90.vercel.app/",
    category: "Content Platform"
  },
  {
    id: "project3",
    title: "Furniro E-commerce Website",
    shortDescription: "Complete e-commerce solution with modern design and comprehensive shopping features.",
    description: "A full-featured e-commerce website for furniture and home decor. Implemented comprehensive shopping cart functionality, product catalog, user authentication, and payment integration. The project showcases modern web development practices with responsive design and smooth user experience.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React.js", "Next.js", "Express.js", "MongoDB", "Node.js"],
    features: ["Product catalog", "Shopping cart", "User authentication", "Payment integration", "Order management"],
    githubUrl: "https://github.com/Nafeesa-shehzadi/complete-furniro-website",
    liveUrl: "https://furniro-website-sigma.vercel.app/",
    category: "E-commerce"
  },
  {
    id: "project4",
    title: "Factory Girl Platform",
    shortDescription: "Modern web application with enhanced user experience and multiple feature implementations.",
    description: "Factory Girl is a comprehensive web platform featuring multiple enhancements to improve user experience. Worked on implementing various features including responsive design, interactive components, and seamless navigation. The project demonstrates proficiency in modern React development patterns.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React.js", "Next.js", "Express.js", "MongoDB", "Node.js"],
    features: ["Modern UI/UX", "Interactive components", "Responsive design", "Performance optimization", "Cross-browser compatibility"],
    githubUrl: "https://github.com/Nafeesa-shehzadi/complete-furniro-website",
    liveUrl: "#",
    category: "Web Application"
  },
  {
    id: "project5",
    title: "AI MedLab Platform",
    shortDescription: "Highly responsive medical platform with AI integration. Led frontend and content development.",
    description: "Being a Content and Frontend lead, the site is a highly responsive and interactive website. Created new features and pages for this medical AI platform. Worked as a team with product managers and designers to deliver a comprehensive healthcare solution with AI-powered diagnostics and patient management.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React.js", "Next.js", "Express.js", "MongoDB", "Node.js"],
    features: ["AI integration", "Patient management", "Medical diagnostics", "Team collaboration", "Interactive dashboard"],
    githubUrl: "https://github.com/Nafeesa-shehzadi/complete-furniro-website",
    liveUrl: "#",
    category: "Healthcare AI"
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
