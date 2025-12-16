'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

// Custom development projects
const projects = [
  {
    title: 'FinTech Trading Platform',
    description: 'High-frequency trading platform processing 100K+ transactions per second with real-time market data visualization.',
    tech: ['React', 'Node.js', 'WebSocket', 'PostgreSQL', 'Redis'],
    metrics: { users: '50K+', uptime: '99.99%', transactions: '100K/s' },
    color: 'cyan'
  },
  {
    title: 'Healthcare Management System',
    description: 'HIPAA-compliant patient management system with telemedicine integration and AI-powered diagnostics.',
    tech: ['Next.js', 'Python', 'TensorFlow', 'MongoDB', 'AWS'],
    metrics: { patients: '200K+', clinics: '150+', accuracy: '98.5%' },
    color: 'emerald'
  },
  {
    title: 'E-Commerce Marketplace',
    description: 'Multi-vendor marketplace with advanced search, recommendation engine, and payment processing.',
    tech: ['React', 'GraphQL', 'Elasticsearch', 'Stripe', 'Docker'],
    metrics: { products: '1M+', sellers: '10K+', gmv: '$50M+' },
    color: 'purple'
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing platform with 3D virtual tours, mortgage calculator, and lead management.',
    tech: ['Vue.js', 'Django', 'Three.js', 'PostgreSQL', 'GCP'],
    metrics: { listings: '500K+', agents: '5K+', leads: '100K+' },
    color: 'amber'
  }
]

// Tech stack categories
const techCategories = [
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Python', 'Go', 'GraphQL', 'REST APIs', 'WebSocket']
  },
  {
    name: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Firebase']
  },
  {
    name: 'DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD', 'Terraform']
  }
]

// Code snippet for animation
const codeSnippet = `// Building exceptional experiences
const createWebApp = async (vision) => {
  const architecture = await design(vision);
  const components = buildUI(architecture);
  const backend = implementAPI(requirements);

  return deploy({
    frontend: components,
    api: backend,
    monitoring: true,
    scaling: 'auto'
  });
};`

export default function CustomDevelopmentPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [typedCode, setTypedCode] = useState('')
  const [currentLine, setCurrentLine] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  // Typing animation for code
  useEffect(() => {
    const lines = codeSnippet.split('\n')
    let currentIndex = 0
    let lineIndex = 0
    let charIndex = 0

    const typeChar = () => {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          setTypedCode(prev => prev + lines[lineIndex][charIndex])
          charIndex++
        } else {
          setTypedCode(prev => prev + '\n')
          lineIndex++
          charIndex = 0
          setCurrentLine(lineIndex)
        }
      }
    }

    const interval = setInterval(typeChar, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Hero Section - Terminal Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Cyan Glow */}
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[var(--color-accent-cyan)]/10 blur-3xl"
        />

        <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent-cyan)]/30 bg-[var(--color-accent-cyan)]/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent-cyan)] animate-pulse" />
                <span className="text-[var(--color-accent-cyan)] text-sm font-medium">Custom Development</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-[var(--color-accent-cyan)]">&lt;</span>
                Code
                <span className="text-[var(--color-accent-cyan)]">/&gt;</span>
                <br />
                <span className="text-[var(--color-silver)]">That Scales</span>
              </h1>

              <p className="text-lg text-[var(--color-silver)] leading-relaxed mb-8 max-w-lg">
                Architecting high-performance web applications with clean code, scalable
                infrastructure, and user-centric design. From concept to deployment, every
                line of code is crafted with purpose.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg bg-[var(--color-accent-cyan)] text-[var(--color-midnight)] font-semibold"
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg border border-[var(--color-accent-cyan)]/30 text-[var(--color-accent-cyan)] font-semibold hover:bg-[var(--color-accent-cyan)]/10"
                >
                  Start a Project
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Code Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass rounded-2xl overflow-hidden border border-[var(--color-accent-cyan)]/20">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[var(--color-slate-dark)] border-b border-white/5">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-[var(--color-accent-rose)]" />
                    <span className="w-3 h-3 rounded-full bg-[var(--color-accent-amber)]" />
                    <span className="w-3 h-3 rounded-full bg-[var(--color-accent-emerald)]" />
                  </div>
                  <span className="text-sm text-[var(--color-silver)] ml-4 font-mono">app.tsx</span>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <pre className="text-[var(--color-accent-cyan)]">
                    {typedCode}
                    <span className="animate-pulse">|</span>
                  </pre>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-lg glass border border-[var(--color-accent-cyan)]/20"
              >
                <span className="text-[var(--color-accent-cyan)] font-mono text-sm">npm run build ✓</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg glass border border-[var(--color-accent-emerald)]/20"
              >
                <span className="text-[var(--color-accent-emerald)] font-mono text-sm">Tests: 100% passed</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section - Horizontal Scroll */}
      <section className="py-24 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold"
          >
            Technology Stack
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-display font-semibold text-[var(--color-accent-cyan)] mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-[var(--color-slate-dark)] text-sm text-[var(--color-silver)] border border-white/5 hover:border-[var(--color-accent-cyan)]/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32" id="projects">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[var(--color-accent-cyan)] font-mono text-sm">// Featured Work</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Custom Web Applications
            </h2>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={`glass rounded-3xl overflow-hidden border-l-4 ${
                    project.color === 'cyan' ? 'border-l-[var(--color-accent-cyan)]' :
                    project.color === 'emerald' ? 'border-l-[var(--color-accent-emerald)]' :
                    project.color === 'purple' ? 'border-l-[var(--color-accent-purple)]' :
                    'border-l-[var(--color-accent-amber)]'
                  }`}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                          {project.title}
                        </h3>
                        <p className="text-[var(--color-silver)] leading-relaxed mb-6 max-w-2xl">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                project.color === 'cyan' ? 'bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)]' :
                                project.color === 'emerald' ? 'bg-[var(--color-accent-emerald)]/10 text-[var(--color-accent-emerald)]' :
                                project.color === 'purple' ? 'bg-[var(--color-accent-purple)]/10 text-[var(--color-accent-purple)]' :
                                'bg-[var(--color-accent-amber)]/10 text-[var(--color-accent-amber)]'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="flex lg:flex-col gap-6 lg:gap-4 lg:text-right">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key}>
                            <span className={`font-display text-2xl font-bold ${
                              project.color === 'cyan' ? 'text-[var(--color-accent-cyan)]' :
                              project.color === 'emerald' ? 'text-[var(--color-accent-emerald)]' :
                              project.color === 'purple' ? 'text-[var(--color-accent-purple)]' :
                              'text-[var(--color-accent-amber)]'
                            }`}>
                              {value}
                            </span>
                            <p className="text-[var(--color-slate-light)] text-sm capitalize">{key}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-[var(--color-charcoal)]/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--color-accent-cyan)] font-mono text-sm">// Development Lifecycle</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              How I Build
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)]/30 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🔍', title: 'Discovery', desc: 'Deep dive into requirements, user research, and technical feasibility analysis.' },
                { icon: '📐', title: 'Architecture', desc: 'System design, database modeling, and API specification documentation.' },
                { icon: '⚡', title: 'Development', desc: 'Agile sprints, code reviews, and continuous integration/deployment.' },
                { icon: '🚀', title: 'Launch', desc: 'Performance optimization, security audits, and production deployment.' }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="glass rounded-2xl p-6 text-center hover-lift">
                    <div className="w-16 h-16 rounded-xl bg-[var(--color-accent-cyan)]/10 flex items-center justify-center mx-auto mb-4 text-3xl">
                      {step.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-[var(--color-silver)] text-sm">{step.desc}</p>
                  </div>

                  {/* Step Number */}
                  <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--color-accent-cyan)] items-center justify-center">
                    <span className="text-sm font-bold text-[var(--color-midnight)]">{index + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32" id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your
              <br />
              <span className="text-[var(--color-accent-cyan)]">Next Big Thing?</span>
            </h2>
            <p className="text-[var(--color-silver)] text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and create something extraordinary together.
            </p>
            <motion.a
              href="mailto:hello@helmi.dev"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-8 py-4 rounded-lg bg-[var(--color-accent-cyan)] text-[var(--color-midnight)] font-semibold"
            >
              Start a Conversation
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="fixed bottom-8 right-8 z-40">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full glass flex items-center justify-center border border-[var(--color-accent-cyan)]/30"
          >
            <svg className="w-5 h-5 text-[var(--color-accent-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
