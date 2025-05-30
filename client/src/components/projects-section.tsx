import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight, ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@shared/schema";

const projects: Project[] = [
  {
    id: "project1",
    title: "Beauty Salon Website",
    shortDescription: "Featured site while working with TheBrandWiz.com (agency). Interactive and responsive frontend development.",
    description: "One of the featured sites while working with TheBrandWiz.com (agency). Worked as a frontend developer to make the site user interactive and responsive.",
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
    description: "Harigurus is a new-age site for all Hindu, religious, ancient and traditional literature. Built the complete site from scratch.",
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
    description: "A full-featured e-commerce website for furniture and home decor. Implemented comprehensive shopping cart functionality, product catalog, user authentication, and payment integration.",
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
    description: "Factory Girl is a comprehensive web platform featuring multiple enhancements to improve user experience. Worked on implementing various features including responsive design, interactive components, and seamless navigation.",
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
    description: "Being a Content and Frontend lead, the site is a highly responsive and interactive website. Created new features and pages. Worked as a team with product managers and designers.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React.js", "Next.js", "Express.js", "MongoDB", "Node.js"],
    features: ["AI integration", "Patient management", "Medical diagnostics", "Team collaboration", "Interactive dashboard"],
    githubUrl: "https://github.com/Nafeesa-shehzadi/complete-furniro-website",
    liveUrl: "#",
    category: "Healthcare AI"
  }
];

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const getColorByCategory = (category: string) => {
    switch (category) {
      case "Web Application": return "bg-orange-500";
      case "Content Platform": return "bg-blue-500";
      case "E-commerce": return "bg-purple-500";
      case "Healthcare AI": return "bg-teal-500";
      default: return "bg-primary";
    }
  };

  return (
    <section id="projects" className="relative py-12 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-40 h-40 bg-chart-2/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ExternalLinkIcon className="h-4 w-4 mr-2" />
            My Work
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my development journey and technical expertise
          </p>
        </motion.div>

        {/* Modern Carousel */}
        <div className="relative mb-12">
          {/* Carousel Images */}
          <motion.div
            className="relative h-80 md:h-96 flex justify-center items-center overflow-hidden rounded-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {projects.map((project, index) => {
              const position = (index - currentIndex + projects.length) % projects.length;
              let transform;
              let opacity;
              let zIndex;

              if (position === 0) {
                // Center image
                transform = "translateX(0) scale(1.05)";
                opacity = 1;
                zIndex = 2;
              } else if (position === projects.length - 1) {
                // Left image
                transform = "translateX(-120%) scale(0.85)";
                opacity = 0.4;
                zIndex = 1;
              } else if (position === 1) {
                // Right image
                transform = "translateX(120%) scale(0.85)";
                opacity = 0.4;
                zIndex = 1;
              } else {
                // Hidden images
                transform = "translateX(200%) scale(0.7)";
                opacity = 0;
                zIndex = 0;
              }

              return (
                <motion.div
                  key={project.id}
                  className="absolute w-72 md:w-80 h-60 md:h-72"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    all: { duration: 0.5, ease: "easeInOut" }
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Navigation and Project Info */}
          <motion.div
            className="flex flex-col items-center justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Navigation */}
            <div className="flex items-center gap-6 mb-6">
              <motion.button
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full border-2 border-primary bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>

              <h3 className="text-2xl md:text-3xl font-bold text-center min-w-0 flex-1">
                {projects[currentIndex].title}
              </h3>

              <motion.button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border-2 border-primary bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Project Description */}
            <p className="text-center text-muted-foreground max-w-2xl mb-6 leading-relaxed">
              {projects[currentIndex].description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {projects[currentIndex].technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Badge 
                    className={`${getColorByCategory(projects[currentIndex].category)} text-white hover:scale-105 transition-transform`}
                  >
                    {tech.replace('.js', '')}
                  </Badge>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {projects[currentIndex].liveUrl && projects[currentIndex].liveUrl !== "#" && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90 text-primary-foreground"
                  >
                    <a 
                      href={projects[currentIndex].liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </motion.div>
              )}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a 
                    href={projects[currentIndex].githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
