'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Expertise areas with unique colors
const expertiseAreas = [
  {
    title: 'Custom Development',
    description: 'Bespoke web applications built from the ground up with modern frameworks and clean architecture.',
    href: '/custom-development',
    color: 'cyan',
    icon: '⚡',
    stats: '50+ Projects'
  },
  {
    title: 'WordPress',
    description: 'Custom themes, plugins, and enterprise-grade WordPress solutions that scale.',
    href: '/wordpress',
    color: 'purple',
    icon: '🎨',
    stats: '100+ Sites'
  },
  {
    title: 'SaaS Products',
    description: 'End-to-end SaaS development from MVP to market-ready products with subscription systems.',
    href: '/saas',
    color: 'emerald',
    icon: '🚀',
    stats: '15+ Products'
  },
  {
    title: 'Data Visualization',
    description: 'Transform complex data into intuitive, interactive dashboards and visual stories.',
    href: '/data-visualization',
    color: 'amber',
    icon: '📊',
    stats: '30+ Dashboards'
  }
]

// Featured projects
const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    category: 'Custom Development',
    description: 'High-performance marketplace handling 50K+ daily transactions',
    image: '/images/project-1.jpg',
    color: 'cyan'
  },
  {
    title: 'Enterprise CMS',
    category: 'WordPress',
    description: 'Multi-site WordPress network for Fortune 500 company',
    image: '/images/project-2.jpg',
    color: 'purple'
  },
  {
    title: 'Analytics Dashboard',
    category: 'SaaS',
    description: 'Real-time analytics platform with ML-powered insights',
    image: '/images/project-3.jpg',
    color: 'emerald'
  }
]

// Tech stack
const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'AWS', 'Docker', 'GraphQL', 'Tailwind', 'WordPress'
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute inset-0 bg-gradient-radial" />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 py-32"
        >
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            {/* Greeting Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm text-gray-400">Available for new projects</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="block">I&apos;m Helmi Aouali</span>
              <span className="block text-gradient mt-2">Digital Architect</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Full-stack developer crafting exceptional digital experiences through
              innovative code, scalable architecture, and pixel-perfect design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold text-white shadow-lg shadow-cyan-500/25"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-white/10 font-semibold hover:bg-white/5 transition-colors"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
              >
                <motion.div className="w-1 h-2 rounded-full bg-white/50" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Bento Grid */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">About Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Building the Future,<br />
              <span className="text-gray-500">One Line at a Time</span>
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 lg:row-span-2 glass rounded-3xl p-8 hover-lift group"
            >
              <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 mx-auto md:mx-0">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 animate-pulse-glow" />
                  <div className="absolute inset-1 rounded-2xl bg-[#111118] overflow-hidden">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full bg-gradient-to-br from-[#1a1a24] to-[#111118] flex items-center justify-center">
                      <span className="text-6xl">👨‍💻</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-display text-2xl font-bold mb-4">
                    Hello, I&apos;m <span className="text-gradient">Helmi</span>
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    With over a decade of experience in web development, I&apos;ve helped startups
                    and enterprises alike bring their digital visions to life. My passion lies
                    in creating solutions that are not just functional, but truly exceptional.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    I believe in clean code, intuitive design, and the power of technology
                    to transform businesses. Every project is an opportunity to push boundaries
                    and deliver something remarkable.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-3xl p-8 hover-lift"
            >
              <div className="text-center">
                <span className="text-6xl font-display font-bold text-gradient">10+</span>
                <p className="text-gray-400 mt-2">Years of Experience</p>
              </div>
            </motion.div>

            {/* Projects Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-3xl p-8 hover-lift"
            >
              <div className="text-center">
                <span className="text-6xl font-display font-bold text-gradient">200+</span>
                <p className="text-gray-400 mt-2">Projects Delivered</p>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 glass rounded-3xl p-8 hover-lift"
            >
              <h4 className="font-display font-semibold text-lg mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-[#1a1a24] text-sm text-gray-400 border border-white/5 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Clients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass rounded-3xl p-8 hover-lift"
            >
              <div className="text-center">
                <span className="text-6xl font-display font-bold text-gradient">50+</span>
                <p className="text-gray-400 mt-2">Happy Clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative py-32 overflow-hidden" id="expertise">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111118]/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">What I Do</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Areas of Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={area.href}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative h-full p-8 rounded-3xl glass overflow-hidden group cursor-pointer animated-border"
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      area.color === 'cyan' ? 'bg-cyan-500/5' :
                      area.color === 'purple' ? 'bg-purple-500/5' :
                      area.color === 'emerald' ? 'bg-emerald-500/5' :
                      'bg-amber-500/5'
                    }`} />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <span className="text-4xl">{area.icon}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          area.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                          area.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                          area.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                          'bg-amber-500/10 text-amber-400'
                        }`}>
                          {area.stats}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                        {area.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {area.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all">
                        <span className={
                          area.color === 'cyan' ? 'text-cyan-400' :
                          area.color === 'purple' ? 'text-purple-400' :
                          area.color === 'emerald' ? 'text-emerald-400' :
                          'text-amber-400'
                        }>Learn More</span>
                        <span className="text-xl">→</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-32" id="projects">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          >
            <div>
              <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">Portfolio</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
                Featured Projects
              </h2>
            </div>
            <a href="#" className="mt-4 md:mt-0 text-gray-400 hover:text-white link-underline font-medium">
              View All Projects →
            </a>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative h-full rounded-3xl overflow-hidden group cursor-pointer glass"
                >
                  {/* Project Image Placeholder */}
                  <div className={`absolute inset-0 ${
                    project.color === 'cyan' ? 'bg-gradient-to-br from-cyan-500/20 to-[#1a1a24]' :
                    project.color === 'purple' ? 'bg-gradient-to-br from-purple-500/20 to-[#1a1a24]' :
                    'bg-gradient-to-br from-emerald-500/20 to-[#1a1a24]'
                  }`} />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />

                  {/* Content */}
                  <div className={`relative z-10 h-full p-8 flex flex-col justify-end ${index === 0 ? 'min-h-[500px]' : 'min-h-[250px]'}`}>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 w-fit ${
                      project.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                      project.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {project.category}
                    </span>
                    <h3 className={`font-display font-bold mb-2 ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>

                    {/* Hover Reveal */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="mt-4 flex items-center gap-2 text-sm font-medium"
                    >
                      <span>View Case Study</span>
                      <span>→</span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111118]/50 via-transparent to-[#111118]/50" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 font-mono text-sm tracking-wider uppercase">How I Work</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              My Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision, goals, and requirements through in-depth consultation.' },
              { step: '02', title: 'Strategy', description: 'Crafting a roadmap with clear milestones and technical specifications.' },
              { step: '03', title: 'Development', description: 'Building with clean code, best practices, and continuous communication.' },
              { step: '04', title: 'Launch', description: 'Rigorous testing, deployment, and ongoing support for success.' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass rounded-3xl p-8 h-full hover-lift">
                  <span className="text-5xl font-display font-bold text-[#3a3a4a]">{item.step}</span>
                  <h3 className="font-display text-xl font-bold mt-4 mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#3a3a4a] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32" id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-rose-400 font-mono text-sm tracking-wider uppercase">Get in Touch</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
              Let&apos;s Build Something<br />
              <span className="text-gradient">Extraordinary</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it. Whether it&apos;s a simple website
              or a complex web application, let&apos;s discuss how we can work together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="mailto:hello@helmi.dev"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold text-white shadow-lg shadow-cyan-500/25"
              >
                hello@helmi.dev
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-white/10 font-semibold hover:bg-white/5 transition-colors"
              >
                Schedule a Call
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="mt-16 flex justify-center gap-6">
              {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
