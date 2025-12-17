'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

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
    description: 'End-to-end SaaS development from MVP to market-ready products.',
    href: '/saas',
    color: 'emerald',
    icon: '🚀',
    stats: '15+ Products'
  },
  {
    title: 'Data Visualization',
    description: 'Transform complex data into intuitive, interactive dashboards.',
    href: '/data-visualization',
    color: 'amber',
    icon: '📊',
    stats: '30+ Dashboards'
  }
]

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'GraphQL', 'Tailwind', 'WordPress'
]

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Custom Development',
    description: 'High-performance marketplace handling 50K+ daily transactions',
    color: 'cyan'
  },
  {
    title: 'Enterprise CMS',
    category: 'WordPress',
    description: 'Multi-site WordPress network for Fortune 500 company',
    color: 'purple'
  },
  {
    title: 'Analytics Dashboard',
    category: 'SaaS',
    description: 'Real-time analytics platform with ML-powered insights',
    color: 'emerald'
  }
]

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-32">
          <div className="max-w-4xl">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#12121a] border border-[rgba(255,255,255,0.08)] mb-10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-sm text-[#8b8b9a]">Available for new projects</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8"
            >
              <span className="block text-white">I&apos;m Helmi Aouali</span>
              <span className="block text-gradient mt-3">Full-Stack Developer</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-[#8b8b9a] max-w-2xl mb-12 leading-relaxed"
            >
              I craft exceptional digital experiences through innovative code,
              scalable architecture, and pixel-perfect design. Turning ideas into reality.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-5"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-[rgba(255,255,255,0.2)] flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-[rgba(255,255,255,0.4)] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="section-label text-cyan-400">About Me</p>
            <h2 className="section-title text-white">
              Building Digital Excellence
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 glass-card p-10"
            >
              <div className="flex flex-col md:flex-row gap-10">
                {/* Profile Image */}
                <div className="shrink-0">
                  <div className="profile-container">
                    <div className="profile-inner">
                      {/* Replace with actual image */}
                      <div className="w-full h-full bg-gradient-to-br from-[#1a1a25] to-[#0c0c12] flex items-center justify-center">
                        <span className="text-7xl">👨‍💻</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Hello, I&apos;m <span className="text-gradient">Helmi</span>
                  </h3>
                  <p className="text-[#8b8b9a] leading-relaxed mb-5">
                    With over a decade of experience in web development, I&apos;ve helped
                    startups and enterprises alike bring their digital visions to life.
                  </p>
                  <p className="text-[#8b8b9a] leading-relaxed">
                    I believe in clean code, intuitive design, and the power of technology
                    to transform businesses. Every project is an opportunity to push
                    boundaries and deliver something remarkable.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Column */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="stat-card"
              >
                <div className="stat-number text-gradient">10+</div>
                <p className="text-[#8b8b9a] mt-3">Years of Experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="stat-card"
              >
                <div className="stat-number text-gradient">200+</div>
                <p className="text-[#8b8b9a] mt-3">Projects Delivered</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="stat-card"
              >
                <div className="stat-number text-gradient">50+</div>
                <p className="text-[#8b8b9a] mt-3">Happy Clients</p>
              </motion.div>
            </div>
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="glass-card p-10 mt-8"
          >
            <h4 className="text-lg font-semibold mb-6">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 px-8 relative" id="expertise">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0c12] to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="section-label text-purple-400">What I Do</p>
            <h2 className="section-title text-white">Areas of Expertise</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={area.href}>
                  <div
                    className={`expertise-card h-full cursor-pointer ${
                      area.color === 'cyan' ? 'hover:border-cyan-500/30' :
                      area.color === 'purple' ? 'hover:border-purple-500/30' :
                      area.color === 'emerald' ? 'hover:border-emerald-500/30' :
                      'hover:border-amber-500/30'
                    }`}
                    style={{ '--accent-color': area.color === 'cyan' ? '#00d4ff' : area.color === 'purple' ? '#a855f7' : area.color === 'emerald' ? '#10b981' : '#f59e0b' } as React.CSSProperties}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-5xl">{area.icon}</span>
                      <span className={`px-4 py-1.5 rounded-full text-xs font-medium ${
                        area.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
                        area.color === 'purple' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                        area.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                        'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}>
                        {area.stats}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                    <p className="text-[#8b8b9a] leading-relaxed mb-6">{area.description}</p>

                    <div className={`flex items-center gap-2 text-sm font-semibold ${
                      area.color === 'cyan' ? 'text-cyan-400' :
                      area.color === 'purple' ? 'text-purple-400' :
                      area.color === 'emerald' ? 'text-emerald-400' :
                      'text-amber-400'
                    }`}>
                      <span>Learn More</span>
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-8" id="projects">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20"
          >
            <div>
              <p className="section-label text-emerald-400">Portfolio</p>
              <h2 className="section-title text-white">Featured Projects</h2>
            </div>
            <a href="#" className="mt-4 md:mt-0 text-[#8b8b9a] hover:text-white transition-colors font-medium">
              View All Projects →
            </a>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <div className="project-card h-full">
                  {/* Project Image Area */}
                  <div className={`h-64 relative ${
                    project.color === 'cyan' ? 'bg-gradient-to-br from-cyan-500/20 to-[#0c0c12]' :
                    project.color === 'purple' ? 'bg-gradient-to-br from-purple-500/20 to-[#0c0c12]' :
                    'bg-gradient-to-br from-emerald-500/20 to-[#0c0c12]'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-30">
                        {project.color === 'cyan' ? '💻' : project.color === 'purple' ? '🌐' : '📊'}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      project.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                      project.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                      'bg-emerald-500/10 text-emerald-400'
                    }`}>
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-[#8b8b9a] text-sm">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0c12] to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="section-label text-amber-400">How I Work</p>
            <h2 className="section-title text-white">My Process</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision, goals, and requirements through consultation.' },
              { step: '02', title: 'Strategy', description: 'Crafting a roadmap with clear milestones and technical specifications.' },
              { step: '03', title: 'Development', description: 'Building with clean code, best practices, and continuous updates.' },
              { step: '04', title: 'Launch', description: 'Rigorous testing, deployment, and ongoing support for success.' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="glass-card p-8 h-full">
                  <span className="text-5xl font-bold text-[#2a2a35]">{item.step}</span>
                  <h3 className="text-xl font-bold mt-4 mb-3">{item.title}</h3>
                  <p className="text-[#8b8b9a] text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-8" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label text-rose-400">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-8">
              Let&apos;s Build Something<br />
              <span className="text-gradient">Extraordinary</span>
            </h2>
            <p className="text-[#8b8b9a] text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it. Whether it&apos;s a
              simple website or a complex web application, let&apos;s discuss.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a href="mailto:hello@helmi.dev" className="btn-primary">
                hello@helmi.dev
              </a>
              <a href="#" className="btn-secondary">
                Schedule a Call
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-16 flex justify-center gap-8">
              {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[#8b8b9a] hover:text-white transition-colors font-medium"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
