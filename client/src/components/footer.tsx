import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Dribbble, Heart, Sparkles, Code, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub", color: "hover:text-purple-400" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-400" },
  { icon: Dribbble, href: "#", label: "Dribbble", color: "hover:text-pink-400" },
];

const quickLinks = [
  { href: "#home", label: "Home", icon: Sparkles },
  { href: "#about", label: "About", icon: Heart },
  { href: "#projects", label: "Projects", icon: Code },
  { href: "#contact", label: "Contact", icon: Coffee },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-foreground via-foreground to-foreground/90 text-background py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-chart-2/20 rounded-full blur-3xl"
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
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.div
                className="relative cursor-pointer group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="text-3xl font-black tracking-wider select-none"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    textShadow: "0 0 30px rgba(139, 92, 246, 0.3)"
                  }}
                  whileHover={{ 
                    textShadow: "0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(236, 72, 153, 0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Nafeesa
                    </span>
                  </span>
                  <span className="ml-2 text-2xl font-light text-background/70 relative">
                    S<span className="text-primary">.</span>
                  </span>
                </motion.div>
              </motion.div>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-2 rounded-full mb-4" />
              <p className="text-background/80 leading-relaxed">
                Full Stack Developer passionate about creating digital experiences that make a difference. 
                Let's build something amazing together!
              </p>
            </div>
            
            <motion.div
              className="flex items-center text-background/60 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-1"
              >
                <Heart className="h-4 w-4 text-red-400 fill-current" />
              </motion.div>
              <span>and lots of</span>
              <Coffee className="h-4 w-4 ml-1 text-amber-400" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-xl mb-6 text-background flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primary" />
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="group flex items-center text-background/70 hover:text-background transition-all duration-300 text-left w-full"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <link.icon className="h-4 w-4 mr-3 text-primary group-hover:text-chart-2 transition-colors" />
                  <span className="group-hover:text-primary transition-colors">{link.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-xl mb-6 text-background flex items-center">
              <Heart className="h-5 w-5 mr-2 text-pink-400" />
              Let's Connect
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Button
                    variant="ghost"
                    asChild
                    className={`w-full h-12 text-background/70 hover:text-background hover:bg-background/10 border border-background/20 hover:border-background/40 transition-all duration-300 ${social.color}`}
                  >
                    <a href={social.href} aria-label={social.label} className="flex items-center justify-center space-x-2">
                      <social.icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-background/30 to-transparent mb-8" />
          <div className="text-center">
            <motion.p 
              className="text-background/70 text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              &copy; 2024 Nafeesa Shehzadi. All rights reserved. • Crafted with passion and precision
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
