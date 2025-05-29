import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { name: "React", icon: "⚛️", color: "text-blue-500" },
  { name: "Node.js", icon: "🟢", color: "text-green-500" },
  { name: "Python", icon: "🐍", color: "text-yellow-500" },
  { name: "MongoDB", icon: "🍃", color: "text-green-600" },
  { name: "AWS", icon: "☁️", color: "text-orange-500" },
  { name: "Figma", icon: "🎨", color: "text-purple-500" },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience building modern web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">My Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a full-stack developer who loves creating digital experiences that solve real-world problems.
                With expertise in modern web technologies, I bridge the gap between design and development to
                deliver exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source
                projects, or sharing knowledge with the developer community through blogs and talks.
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary transition-colors duration-300"
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-badge bg-background p-4 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:scale-105 border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="font-semibold">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
