'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

// WordPress Services
const services = [
  {
    title: 'Custom Theme Development',
    description: 'Pixel-perfect, responsive themes built from scratch with clean code and SEO optimization.',
    features: ['Custom Designs', 'Mobile-First', 'SEO Optimized', 'Fast Loading']
  },
  {
    title: 'Plugin Development',
    description: 'Custom plugins that extend WordPress functionality while maintaining performance.',
    features: ['Custom APIs', 'WooCommerce Integration', 'Gutenberg Blocks', 'REST API']
  },
  {
    title: 'WooCommerce Solutions',
    description: 'Complete e-commerce solutions with custom checkout flows and payment integrations.',
    features: ['Custom Checkout', 'Payment Gateways', 'Inventory Management', 'Subscriptions']
  },
  {
    title: 'Headless WordPress',
    description: 'WordPress as a powerful CMS backend with modern frontend frameworks.',
    features: ['React/Next.js Frontend', 'GraphQL', 'Jamstack', 'Static Generation']
  }
]

// Featured WordPress Projects
const projects = [
  {
    title: 'Luxury Real Estate Network',
    description: 'Multi-site WordPress network for premium property listings across 12 countries.',
    image: '/images/wp-project-1.jpg',
    stats: { sites: '12', properties: '50K+', visits: '2M/mo' }
  },
  {
    title: 'Fashion E-Commerce Brand',
    description: 'High-converting WooCommerce store with AR try-on feature and subscription boxes.',
    image: '/images/wp-project-2.jpg',
    stats: { products: '5K+', orders: '10K/mo', revenue: '$2M+' }
  },
  {
    title: 'News Media Platform',
    description: 'High-traffic news portal with custom ad management and paywall integration.',
    image: '/images/wp-project-3.jpg',
    stats: { articles: '100K+', readers: '5M', authors: '200+' }
  },
  {
    title: 'Corporate Intranet',
    description: 'Enterprise knowledge base with SSO, document management, and team collaboration.',
    image: '/images/wp-project-4.jpg',
    stats: { employees: '10K+', documents: '50K+', searches: '100K/day' }
  }
]

// Expertise areas
const expertise = [
  { name: 'Theme Development', level: 98 },
  { name: 'Plugin Development', level: 95 },
  { name: 'WooCommerce', level: 96 },
  { name: 'Gutenberg/Blocks', level: 92 },
  { name: 'Performance Optimization', level: 97 },
  { name: 'Security Hardening', level: 94 }
]

export default function WordPressPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="relative">
      {/* Hero Section - Split Design */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Purple Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-purple-500/10 to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-purple-500/10 to-transparent" />
        </div>

        {/* Decorative Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-64 h-64 border border-purple-500/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-40 left-10 w-96 h-96 border border-purple-500/10 rounded-full"
        />

        <motion.div
          style={{ scale, opacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-rose-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18.5c-4.687 0-8.5-3.813-8.5-8.5S7.313 3.5 12 3.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z"/>
                    <path d="M3.5 12l4.386 8.768a8.48 8.48 0 01-4.386-8.768zm15.614 0a8.48 8.48 0 01-4.386 8.768L19.114 12zm-7.614 8.5c-.926 0-1.815-.149-2.65-.424L12 13.5l3.15 6.576a8.513 8.513 0 01-3.65.424z"/>
                  </svg>
                </div>
                <span className="text-purple-400 font-semibold">WordPress Expert</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                WordPress
                <br />
                <span className="bg-gradient-to-r from-purple-500 to-rose-500 bg-clip-text text-transparent">
                  Reimagined
                </span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
                Taking WordPress beyond templates. Custom themes, powerful plugins, and
                enterprise-grade solutions that push the platform to its full potential.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="text-center">
                  <span className="block font-display text-4xl font-bold text-purple-400">100+</span>
                  <span className="text-gray-400 text-sm">Sites Built</span>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <span className="block font-display text-4xl font-bold text-purple-400">50+</span>
                  <span className="text-gray-400 text-sm">Custom Plugins</span>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <span className="block font-display text-4xl font-bold text-purple-400">10M+</span>
                  <span className="text-gray-400 text-sm">Users Served</span>
                </div>
              </div>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-rose-500 font-semibold text-white shadow-lg shadow-purple-500/25"
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Right - Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] hidden lg:block"
            >
              {/* Stacked Cards Effect */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                  className={`absolute glass rounded-2xl p-6 w-72 ${
                    i === 0 ? 'top-0 left-0 z-30' :
                    i === 1 ? 'top-12 left-12 z-20 opacity-80' :
                    'top-24 left-24 z-10 opacity-60'
                  }`}
                  style={{
                    border: '1px solid rgba(168, 85, 247, 0.2)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <span className="text-xl">{['🎨', '⚡', '🔒'][i]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{['Custom Theme', 'Blazing Fast', 'Secure'][i]}</p>
                      <p className="text-xs text-gray-400">{['Pixel Perfect', '< 1s Load', 'Enterprise Grade'][i]}</p>
                    </div>
                  </div>
                  <div className="h-32 rounded-lg bg-gradient-to-br from-[#1a1a24] to-[#111118] overflow-hidden">
                    <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNhODU1ZjciIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDIwdjIwSDB6TTIwIDIwaDIwdjIwSDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
                  </div>
                </motion.div>
              ))}

              {/* WP Logo Animation */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-rose-500 flex items-center justify-center shadow-2xl shadow-purple-500/30"
              >
                <span className="text-5xl font-display font-bold text-white">W</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section - Magazine Layout */}
      <section className="py-32 relative" id="services">
        <div className="absolute inset-0 bg-[#111118]/50" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">Services</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              WordPress Solutions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="glass rounded-3xl p-8 h-full border border-white/5 hover:border-purple-500/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{['🎨', '🔌', '🛒', '⚡'][index]}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 rounded-lg bg-[#1a1a24] text-xs text-gray-400 border border-white/5"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Bars */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">Expertise</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6">
                Deep WordPress
                <br />Knowledge
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Years of experience diving deep into WordPress core, building
                custom solutions, and pushing the platform beyond its limits.
              </p>

              <div className="flex gap-4">
                <div className="glass rounded-xl p-4 text-center">
                  <span className="block font-display text-2xl font-bold text-purple-400">8+</span>
                  <span className="text-xs text-gray-400">Years</span>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <span className="block font-display text-2xl font-bold text-purple-400">500+</span>
                  <span className="text-xs text-gray-400">Commits</span>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <span className="block font-display text-2xl font-bold text-purple-400">Core</span>
                  <span className="text-xs text-gray-400">Contributor</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {expertise.map((item, index) => (
                <div key={item.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-purple-400">{item.level}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-[#1a1a24] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-rose-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 bg-[#111118]/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              WordPress Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="glass rounded-3xl overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="relative h-56 bg-gradient-to-br from-purple-500/20 to-[#1a1a24] overflow-hidden">
                    <div className="absolute inset-0 bg-[#0a0a0f]/50 group-hover:bg-transparent transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-50 group-hover:scale-110 transition-transform">🌐</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="flex gap-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <span className="block font-display font-bold text-purple-400">{value}</span>
                          <span className="text-xs text-[#3a3a4a] capitalize">{key}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 border border-purple-500/20"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Need a WordPress
              <br />
              <span className="text-purple-400">Expert?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              From custom themes to complex e-commerce solutions, let&apos;s build
              your perfect WordPress experience.
            </p>
            <motion.a
              href="mailto:hello@helmi.dev"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-rose-500 font-semibold text-white"
            >
              Start Your Project
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
            className="w-12 h-12 rounded-full glass flex items-center justify-center border border-purple-500/30"
          >
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
