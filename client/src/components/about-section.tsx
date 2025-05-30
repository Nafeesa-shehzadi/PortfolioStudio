import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Award,
  Users,
  Clock,
  Star,
  Code2,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  {
    name: "React",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    logo: "⚛️",
  },
  {
    name: "Next.js",
    icon: Globe,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gray-500/10",
    logo: "▲",
  },
  {
    name: "Redux",
    icon: Database,
    color: "from-purple-600 to-purple-800",
    bgColor: "bg-purple-500/10",
    logo: "🔄",
  },
  {
    name: "Node.js",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    logo: "🟢",
  },
  {
    name: "JavaScript",
    icon: Code2,
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-400/10",
    logo: "🟨",
  },
  {
    name: "TypeScript",
    icon: Code2,
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-600/10",
    logo: "🔷",
  },
  {
    name: "MySQL",
    icon: Database,
    color: "from-orange-500 to-orange-700",
    bgColor: "bg-orange-500/10",
    logo: "🗄️",
  },
  {
    name: "MUI",
    icon: Palette,
    color: "from-indigo-500 to-indigo-700",
    bgColor: "bg-indigo-500/10",
    logo: "🎨",
  },
  {
    name: "HTML5",
    icon: Code2,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    logo: "🌐",
  },
  {
    name: "CSS3",
    icon: Palette,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-400/10",
    logo: "🎨",
  },
  {
    name: "Sass",
    icon: Palette,
    color: "from-pink-500 to-pink-700",
    bgColor: "bg-pink-500/10",
    logo: "💎",
  },
  {
    name: "Tailwind",
    icon: Palette,
    color: "from-cyan-400 to-teal-500",
    bgColor: "bg-cyan-400/10",
    logo: "🎯",
  },
  {
    name: "Git",
    icon: Code2,
    color: "from-orange-600 to-red-600",
    bgColor: "bg-orange-600/10",
    logo: "📝",
  },
  {
    name: "Express",
    icon: Database,
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-600/10",
    logo: "⚡",
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "from-green-600 to-green-800",
    bgColor: "bg-green-600/10",
    logo: "🍃",
  },
  {
    name: "Figma",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    logo: "🎨",
  },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
    color: "hover:text-blue-500",
  },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-400" },
  {
    icon: Dribbble,
    href: "#",
    label: "Dribbble",
    color: "hover:text-pink-500",
  },
];

const stats = [
  {
    icon: Award,
    value: "5+",
    label: "Years Experience",
    color: "text-blue-500",
  },
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    color: "text-green-500",
  },
  {
    icon: Code2,
    value: "100+",
    label: "Projects Done",
    color: "text-purple-500",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Client Rating",
    color: "text-yellow-500",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-muted/20 via-background to-muted/40 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 bg-chart-2/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-20"
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
            <Star className="h-4 w-4 mr-2" />
            About Me
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate developer with 5+ years of experience crafting
            exceptional digital experiences
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div
                className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color === "text-blue-500" ? "from-blue-500/10 to-blue-600/10" : stat.color === "text-green-500" ? "from-green-500/10 to-green-600/10" : stat.color === "text-purple-500" ? "from-purple-500/10 to-purple-600/10" : "from-yellow-500/10 to-yellow-600/10"} flex items-center justify-center`}
              >
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <motion.div
                className={`text-3xl font-bold ${stat.color} mb-2`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <p className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                My Story
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg"
                >
                  I'm a full-stack developer who loves creating digital
                  experiences that solve real-world problems. With expertise in
                  modern web technologies, I bridge the gap between design and
                  development to deliver exceptional user experiences.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg"
                >
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open source projects, or sharing
                  knowledge with the developer community through blogs and
                  talks.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg"
                >
                  My passion lies in creating scalable, performant applications
                  that not only look beautiful but also provide seamless user
                  experiences across all devices and platforms.
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                Let's Connect
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className={`h-12 w-12 rounded-xl border border-border hover:border-primary/50 bg-card/50 hover:bg-card transition-all duration-300 ${social.color}`}
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-chart-2 to-accent bg-clip-text text-transparent">
                Skills & Technologies
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Proficient in modern technologies and frameworks, always
                learning and adapting to new tools.
              </p>
            </div>

            {/* Moving skills carousel */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/5 via-chart-2/5 to-accent/5 p-8 mb-8">
              <h4 className="text-xl font-bold mb-6 text-center">
                Technologies & Tools
              </h4>
              <div className="relative">
                <motion.div
                  className="flex gap-6"
                  animate={{
                    x: [0, -1920],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }}
                >
                  {/* First set of skills */}
                  {skills.map((skill, index) => (
                    <motion.div
                      key={`first-${skill.name}`}
                      className="flex-shrink-0 group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 bg-card/80 backdrop-blur-sm transition-all duration-300 w-24"
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <div className="p-4 text-center">
                        <div
                          className={`w-12 h-12 mx-auto mb-2 ${skill.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <span className="text-xl">{skill.logo}</span>
                        </div>
                        <p className="font-semibold text-xs group-hover:text-primary transition-colors">
                          {skill.name}
                        </p>
                      </div>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {skills.map((skill, index) => (
                    <motion.div
                      key={`second-${skill.name}`}
                      className="flex-shrink-0 group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 bg-card/80 backdrop-blur-sm transition-all duration-300 w-24"
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <div className="p-4 text-center">
                        <div
                          className={`w-12 h-12 mx-auto mb-2 ${skill.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <span className="text-xl">{skill.logo}</span>
                        </div>
                        <p className="font-semibold text-xs group-hover:text-primary transition-colors">
                          {skill.name}
                        </p>
                      </div>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Gradient overlays for smooth edges */}
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Static skills grid */}

            <motion.div
              className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-chart-2/5 border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                <h4 className="font-bold text-lg">Always Learning</h4>
              </div>
              <p className="text-muted-foreground">
                Currently exploring AI/ML integration, blockchain development,
                and advanced cloud architectures to stay ahead of the technology
                curve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
