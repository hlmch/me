'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

// Magnetic button component
function MagneticButton({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = (clientX - left - width / 2) * 0.3
    const y = (clientY - top - height / 2) * 0.3
    setPosition({ x, y })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.a>
  )
}

// Animated text reveal
function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.span className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: '100%', rotate: 10 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </motion.span>
  )
}

const expertise = [
  {
    title: 'Custom Development',
    description: 'Bespoke web applications with modern frameworks',
    href: '/custom-development',
    gradient: 'from-cyan-400 via-blue-500 to-purple-600',
    stats: '50+',
    label: 'Projects'
  },
  {
    title: 'WordPress',
    description: 'Enterprise-grade WordPress solutions',
    href: '/wordpress',
    gradient: 'from-purple-400 via-pink-500 to-rose-500',
    stats: '100+',
    label: 'Sites'
  },
  {
    title: 'SaaS Products',
    description: 'Full-stack SaaS from MVP to scale',
    href: '/saas',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    stats: '15+',
    label: 'Products'
  },
  {
    title: 'Data Visualization',
    description: 'Interactive dashboards & visual stories',
    href: '/data-visualization',
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    stats: '30+',
    label: 'Dashboards'
  }
]

const projects = [
  { title: 'FinTech Platform', category: 'Custom Dev', gradient: 'from-cyan-500 to-blue-600' },
  { title: 'E-Commerce Empire', category: 'WordPress', gradient: 'from-purple-500 to-pink-600' },
  { title: 'Analytics Suite', category: 'SaaS', gradient: 'from-emerald-500 to-teal-600' },
]

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  const { scrollYProgress } = useScroll()
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.8])
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0])
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '20%'])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="relative bg-[#0a0a0f]">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: cursorVariant === 'hover' ? 3 : 1
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />

        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
          className="relative z-10 text-center px-6"
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-12"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-sm text-zinc-400 tracking-widest uppercase">Available for projects</span>
          </motion.div>

          {/* Main headline with reveal animation */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.9] tracking-tighter"
            >
              <span className="block text-white">HELMI</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.9] tracking-tighter"
            >
              <span
                className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                AOUALI
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-zinc-500 max-w-xl mx-auto mb-12 font-light"
          >
            Digital architect crafting <span className="text-white">extraordinary</span> web experiences
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <MagneticButton
              href="#work"
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="px-8 py-4 border border-zinc-700 text-white font-semibold rounded-full hover:border-zinc-500 transition-colors"
            >
              Let&apos;s Talk
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-zinc-500 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Decorative frame */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-3xl border border-zinc-800"
                  style={{ transform: 'rotate(6deg)' }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4 rounded-3xl border border-zinc-800"
                  style={{ transform: 'rotate(-3deg)' }}
                />

                {/* Main image container */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 h-full flex items-center justify-center">
                  <div className="text-center p-10">
                    <span className="text-8xl mb-6 block">👨‍💻</span>
                    <p className="text-zinc-500 text-sm">Profile Image Placeholder</p>
                  </div>

                  {/* Floating stats */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -right-6 top-1/4 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-4"
                  >
                    <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">10+</span>
                    <p className="text-xs text-zinc-500">Years Exp.</p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -left-6 bottom-1/4 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-4"
                  >
                    <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">200+</span>
                    <p className="text-xs text-zinc-500">Projects</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-cyan-400 text-sm font-mono tracking-wider">// ABOUT</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8 leading-tight">
                Crafting Digital
                <br />
                <span className="text-zinc-500">Excellence</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                With over a decade of experience, I transform complex challenges into elegant,
                scalable solutions. My passion lies in the intersection of design and engineering—
                where beautiful interfaces meet robust architecture.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed mb-10">
                Every project is an opportunity to push boundaries, challenge conventions,
                and deliver experiences that leave lasting impressions.
              </p>

              {/* Tech marquee */}
              <div className="overflow-hidden border-t border-b border-zinc-800 py-4">
                <motion.div
                  animate={{ x: [0, -1000] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="flex gap-8 whitespace-nowrap"
                >
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Tailwind', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL'].map((tech, i) => (
                    <span key={i} className="text-zinc-600 text-sm">{tech}</span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative py-32 px-6" id="work">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-purple-400 text-sm font-mono tracking-wider">// EXPERTISE</span>
            <h2 className="text-5xl md:text-7xl font-bold mt-4">
              What I <span className="italic text-zinc-500">do</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.href}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    onHoverStart={() => setCursorVariant('hover')}
                    onHoverEnd={() => setCursorVariant('default')}
                    className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                    {/* Border */}
                    <div className="absolute inset-0 rounded-3xl border border-zinc-800 group-hover:border-zinc-700 transition-colors" />

                    {/* Content */}
                    <div className="relative h-full p-8 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <motion.div
                          className={`text-6xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {item.stats}
                        </motion.div>
                        <span className="text-xs text-zinc-500 uppercase tracking-wider">{item.label}</span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-zinc-500 mb-4">{item.description}</p>
                        <motion.div
                          className="flex items-center gap-2 text-sm font-medium"
                          initial={{ x: 0 }}
                          whileHover={{ x: 10 }}
                        >
                          <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                            Explore
                          </span>
                          <span>→</span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <span className="text-emerald-400 text-sm font-mono tracking-wider">// SELECTED WORK</span>
              <h2 className="text-5xl md:text-7xl font-bold mt-4">
                Featured <span className="italic text-zinc-500">Projects</span>
              </h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              View All <span>→</span>
            </a>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setCursorVariant('hover')}
                  onHoverEnd={() => setCursorVariant('default')}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer"
                >
                  {/* Project image/preview */}
                  <div className={`relative h-96 bg-gradient-to-br ${project.gradient}`}>
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Decorative elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        className="w-64 h-64 border border-white/10 rounded-full"
                      />
                    </div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                      <span className="text-sm text-white/60 mb-2">{project.category}</span>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: 100 }}
                        className="h-1 bg-white rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-32 px-6" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-pink-400 text-sm font-mono tracking-wider">// LET&apos;S CONNECT</span>
            <h2 className="text-5xl md:text-8xl font-bold mt-4 mb-8">
              Have a project
              <br />
              <span className="italic text-zinc-500">in mind?</span>
            </h2>
            <p className="text-xl text-zinc-500 mb-12 max-w-xl mx-auto">
              Let&apos;s create something extraordinary together. I&apos;m always excited to discuss new opportunities.
            </p>

            <MagneticButton
              href="mailto:hello@helmi.dev"
              className="inline-flex items-center gap-4 px-10 py-6 bg-white text-black text-lg font-semibold rounded-full"
            >
              <span>hello@helmi.dev</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm">© 2024 Helmi Aouali. All rights reserved.</p>
          <div className="flex gap-8">
            {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
              <a key={social} href="#" className="text-zinc-600 hover:text-white text-sm transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
