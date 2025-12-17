'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

// SaaS Features
const features = [
  {
    icon: '🔐',
    title: 'Authentication & Security',
    description: 'Enterprise-grade auth with SSO, MFA, and role-based access control.',
    items: ['OAuth 2.0', 'SAML', 'JWT', 'RBAC']
  },
  {
    icon: '💳',
    title: 'Subscription & Billing',
    description: 'Flexible pricing models with automated billing and revenue analytics.',
    items: ['Stripe', 'Usage Metering', 'Invoicing', 'Dunning']
  },
  {
    icon: '📊',
    title: 'Analytics & Insights',
    description: 'Real-time dashboards with custom metrics and automated reporting.',
    items: ['Custom Metrics', 'Cohort Analysis', 'Funnels', 'A/B Testing']
  },
  {
    icon: '🔄',
    title: 'API & Integrations',
    description: 'RESTful and GraphQL APIs with webhooks and third-party integrations.',
    items: ['REST/GraphQL', 'Webhooks', 'Zapier', 'SDKs']
  },
  {
    icon: '📈',
    title: 'Scalability',
    description: 'Auto-scaling infrastructure that grows with your user base.',
    items: ['Load Balancing', 'CDN', 'Caching', 'Microservices']
  },
  {
    icon: '🛡️',
    title: 'Compliance',
    description: 'Built-in compliance for GDPR, SOC 2, and HIPAA requirements.',
    items: ['GDPR', 'SOC 2', 'HIPAA', 'Data Privacy']
  }
]

// SaaS Products Built
const products = [
  {
    name: 'TeamSync Pro',
    tagline: 'Project Management Reimagined',
    description: 'Collaborative workspace platform with AI-powered task automation and real-time sync.',
    metrics: { mrr: '$250K', users: '50K+', growth: '+45%' },
    color: 'emerald'
  },
  {
    name: 'DataPulse',
    tagline: 'Analytics That Make Sense',
    description: 'Business intelligence platform turning complex data into actionable insights.',
    metrics: { mrr: '$180K', users: '30K+', growth: '+62%' },
    color: 'cyan'
  },
  {
    name: 'CloudVault',
    tagline: 'Secure File Collaboration',
    description: 'Enterprise file storage with advanced encryption and compliance features.',
    metrics: { mrr: '$320K', users: '75K+', growth: '+38%' },
    color: 'purple'
  }
]

// Animated counter component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return <span>{count.toLocaleString()}{suffix}</span>
}

export default function SaaSPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div className="relative">
      {/* Hero Section - Dashboard Style */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Floating Dashboard Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-32 right-[10%] hidden xl:block"
        >
          <div className="glass rounded-2xl p-4 w-64 border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-sm">
                📈
              </div>
              <div>
                <p className="text-xs text-gray-400">Monthly Revenue</p>
                <p className="font-display font-bold text-emerald-400">$84,230</p>
              </div>
            </div>
            <div className="h-16 flex items-end gap-1">
              {[40, 65, 55, 80, 70, 90, 85].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-emerald-500 to-cyan-500"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-40 left-[5%] hidden xl:block"
        >
          <div className="glass rounded-2xl p-4 w-56 border border-emerald-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Active Users</span>
              <span className="text-xs text-emerald-400">+12%</span>
            </div>
            <p className="font-display text-3xl font-bold">24,891</p>
            <div className="mt-2 h-1.5 rounded-full bg-[#1a1a24]">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
            </div>
          </div>
        </motion.div>

        <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-emerald-400">SaaS Product Development</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Build Products
              <br />
              <span className="text-emerald-400">People Love</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto"
            >
              From MVP to market leader. I help founders and teams build scalable SaaS
              products with subscription billing, user management, and growth-focused architecture.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              {[
                { value: 15, suffix: '+', label: 'SaaS Products' },
                { value: 500, suffix: 'K+', label: 'Users Served' },
                { value: 50, suffix: 'M+', label: 'Transactions' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="block font-display text-4xl font-bold text-emerald-400">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-emerald-500 text-[#0a0a0f] font-semibold"
              >
                View Products
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl border border-emerald-500/30 text-emerald-400 font-semibold hover:bg-emerald-500/10"
              >
                Start Your SaaS
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid - Bento Style */}
      <section className="py-32 bg-[#111118]/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">
              Full-Stack SaaS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Everything You Need
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass rounded-3xl p-8 hover-lift ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-emerald-500/10 text-xs text-emerald-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-32" id="products">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">
              Success Stories
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              SaaS Products Built
            </h2>
          </motion.div>

          <div className="space-y-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`glass rounded-3xl overflow-hidden border ${
                  product.color === 'emerald' ? 'border-emerald-500/20 hover:border-emerald-500/40' :
                  product.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-500/40' :
                  'border-purple-500/20 hover:border-purple-500/40'
                } transition-colors`}>
                  <div className="grid lg:grid-cols-2">
                    {/* Product Info */}
                    <div className="p-10">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 ${
                        product.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                        product.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                        'bg-purple-500/10 text-purple-400'
                      }`}>
                        SaaS Product
                      </div>

                      <h3 className="font-display text-3xl font-bold mb-2">{product.name}</h3>
                      <p className={`text-lg mb-4 ${
                        product.color === 'emerald' ? 'text-emerald-400' :
                        product.color === 'cyan' ? 'text-cyan-400' :
                        'text-purple-400'
                      }`}>
                        {product.tagline}
                      </p>
                      <p className="text-gray-400 leading-relaxed mb-8">
                        {product.description}
                      </p>

                      {/* Metrics */}
                      <div className="flex gap-8">
                        {Object.entries(product.metrics).map(([key, value]) => (
                          <div key={key}>
                            <span className={`block font-display text-2xl font-bold ${
                              product.color === 'emerald' ? 'text-emerald-400' :
                              product.color === 'cyan' ? 'text-cyan-400' :
                              'text-purple-400'
                            }`}>
                              {value}
                            </span>
                            <span className="text-[#3a3a4a] text-sm uppercase">{key}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dashboard Preview */}
                    <div className={`relative h-80 lg:h-auto ${
                      product.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500/10 to-[#1a1a24]' :
                      product.color === 'cyan' ? 'bg-gradient-to-br from-cyan-500/10 to-[#1a1a24]' :
                      'bg-gradient-to-br from-purple-500/10 to-[#1a1a24]'
                    }`}>
                      <div className="absolute inset-4 glass rounded-xl overflow-hidden">
                        {/* Mock Dashboard UI */}
                        <div className="h-10 bg-[#1a1a24] flex items-center px-4 gap-2">
                          <span className="w-3 h-3 rounded-full bg-rose-500" />
                          <span className="w-3 h-3 rounded-full bg-amber-500" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500" />
                        </div>
                        <div className="p-4 grid grid-cols-3 gap-3">
                          <div className="col-span-2 h-24 rounded-lg bg-[#1a1a24]" />
                          <div className="h-24 rounded-lg bg-[#1a1a24]" />
                          <div className="h-16 rounded-lg bg-[#1a1a24]" />
                          <div className="h-16 rounded-lg bg-[#1a1a24]" />
                          <div className="h-16 rounded-lg bg-[#1a1a24]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-32 bg-[#111118]/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">
              Development Process
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              From Idea to Launch
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500" />

            <div className="space-y-12">
              {[
                { phase: 'Discovery', duration: 'Week 1-2', items: ['Market Research', 'User Interviews', 'Competitive Analysis', 'Feature Prioritization'] },
                { phase: 'Design', duration: 'Week 3-4', items: ['Wireframing', 'UI/UX Design', 'Prototyping', 'User Testing'] },
                { phase: 'Development', duration: 'Week 5-12', items: ['Core Features', 'Authentication', 'Payments', 'API Development'] },
                { phase: 'Launch', duration: 'Week 13+', items: ['Beta Testing', 'Performance Optimization', 'Go-to-Market', 'Iteration'] }
              ].map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative lg:grid lg:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'lg:text-right'}`}
                >
                  <div className={index % 2 === 0 ? 'lg:pr-12' : 'lg:order-2 lg:pl-12'}>
                    <div className="glass rounded-2xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm text-emerald-400 font-mono">{step.duration}</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-4">{step.phase}</h3>
                      <div className="flex flex-wrap gap-2">
                        {step.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 rounded-lg bg-[#1a1a24] text-sm text-gray-400"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#0a0a0f]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              <span className="text-emerald-400">SaaS Empire?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Whether you&apos;re launching your first product or scaling to the next level,
              let&apos;s build something that users will love and investors will notice.
            </p>
            <motion.a
              href="mailto:hello@helmi.dev"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-8 py-4 rounded-xl bg-emerald-500 text-[#0a0a0f] font-semibold"
            >
              Let&apos;s Build Together
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
            className="w-12 h-12 rounded-full glass flex items-center justify-center border border-emerald-500/30"
          >
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
