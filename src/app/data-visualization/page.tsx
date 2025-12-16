'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

// Data Services
const services = [
  {
    title: 'Interactive Dashboards',
    description: 'Real-time, responsive dashboards that bring your data to life with drill-down capabilities.',
    icon: '📊'
  },
  {
    title: 'Custom Visualizations',
    description: 'Bespoke charts and graphics tailored to your specific data storytelling needs.',
    icon: '📈'
  },
  {
    title: 'Data Pipeline Architecture',
    description: 'Robust ETL processes and data warehousing solutions for reliable analytics.',
    icon: '🔄'
  },
  {
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable insights that drive business decisions.',
    icon: '💡'
  },
  {
    title: 'Predictive Analytics',
    description: 'Machine learning models that forecast trends and identify opportunities.',
    icon: '🎯'
  },
  {
    title: 'Report Automation',
    description: 'Automated reporting systems that deliver insights when you need them.',
    icon: '⚡'
  }
]

// Tools & Technologies
const tools = [
  { name: 'D3.js', category: 'Visualization' },
  { name: 'Chart.js', category: 'Visualization' },
  { name: 'Plotly', category: 'Visualization' },
  { name: 'Tableau', category: 'BI Tool' },
  { name: 'Power BI', category: 'BI Tool' },
  { name: 'Python', category: 'Analysis' },
  { name: 'Pandas', category: 'Analysis' },
  { name: 'NumPy', category: 'Analysis' },
  { name: 'SQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Apache Spark', category: 'Big Data' },
  { name: 'TensorFlow', category: 'ML' }
]

// Case Studies
const caseStudies = [
  {
    title: 'E-Commerce Analytics Platform',
    client: 'Major Retail Chain',
    description: 'Built a comprehensive analytics dashboard tracking 50+ KPIs across 500 stores, reducing inventory costs by 23%.',
    metrics: { kpis: '50+', stores: '500', savings: '23%' },
    color: 'amber'
  },
  {
    title: 'Financial Risk Dashboard',
    client: 'Investment Firm',
    description: 'Real-time risk monitoring system processing millions of transactions, identifying anomalies in milliseconds.',
    metrics: { transactions: '10M/day', latency: '<50ms', accuracy: '99.9%' },
    color: 'cyan'
  },
  {
    title: 'Healthcare Analytics Suite',
    client: 'Hospital Network',
    description: 'Patient outcome prediction and resource optimization platform, improving bed utilization by 35%.',
    metrics: { patients: '500K+', hospitals: '12', efficiency: '+35%' },
    color: 'emerald'
  }
]

// Animated bar chart data
const chartData = [
  { label: 'Jan', value: 65 },
  { label: 'Feb', value: 78 },
  { label: 'Mar', value: 52 },
  { label: 'Apr', value: 88 },
  { label: 'May', value: 95 },
  { label: 'Jun', value: 72 },
  { label: 'Jul', value: 84 }
]

// Animated line chart component
function AnimatedLineChart() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const points = [
    { x: 0, y: 70 },
    { x: 50, y: 45 },
    { x: 100, y: 60 },
    { x: 150, y: 30 },
    { x: 200, y: 50 },
    { x: 250, y: 20 },
    { x: 300, y: 35 }
  ]

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  return (
    <div ref={ref} className="w-full h-32">
      <svg viewBox="0 0 300 100" className="w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent-amber)" />
            <stop offset="100%" stopColor="var(--color-accent-rose)" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent-amber)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-accent-amber)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area */}
        <motion.path
          d={`${pathD} L 300 100 L 0 100 Z`}
          fill="url(#areaGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        />

        {/* Line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isVisible ? 1 : 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />

        {/* Dots */}
        {points.map((point, index) => (
          <motion.circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="var(--color-accent-amber)"
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ delay: index * 0.1 + 1, duration: 0.3 }}
          />
        ))}
      </svg>
    </div>
  )
}

// Animated donut chart
function AnimatedDonutChart() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const segments = [
    { percent: 35, color: 'var(--color-accent-amber)' },
    { percent: 25, color: 'var(--color-accent-cyan)' },
    { percent: 20, color: 'var(--color-accent-purple)' },
    { percent: 20, color: 'var(--color-accent-emerald)' }
  ]

  let currentOffset = 0

  return (
    <div ref={ref} className="w-40 h-40 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        {segments.map((segment, index) => {
          const circumference = 2 * Math.PI * 35
          const strokeDasharray = (segment.percent / 100) * circumference
          const strokeDashoffset = -currentOffset
          currentOffset += strokeDasharray

          return (
            <motion.circle
              key={index}
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke={segment.color}
              strokeWidth="12"
              strokeDasharray={`${strokeDasharray} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default function DataVisualizationPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent-amber)]/5 via-transparent to-transparent" />
        </div>

        {/* Floating Data Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Numbers */}
          {[
            { value: '847', top: '20%', left: '10%', delay: 0 },
            { value: '23.5%', top: '30%', right: '15%', delay: 0.5 },
            { value: '1.2M', bottom: '40%', left: '5%', delay: 1 },
            { value: '$94K', bottom: '25%', right: '8%', delay: 1.5 }
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 0.5, 0.2], y: [-10, 10, -10] }}
              transition={{ duration: 4, delay: item.delay, repeat: Infinity }}
              className="absolute font-mono text-[var(--color-accent-amber)]/30 text-4xl font-bold"
              style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
            >
              {item.value}
            </motion.div>
          ))}
        </div>

        <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--color-accent-amber)]/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent-amber)] animate-pulse" />
                <span className="text-[var(--color-accent-amber)] text-sm font-medium">Data & Analytics</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Turn Data Into
                <br />
                <span className="text-[var(--color-accent-amber)]">Visual Stories</span>
              </h1>

              <p className="text-lg text-[var(--color-silver)] leading-relaxed mb-8 max-w-lg">
                Transforming complex datasets into intuitive, interactive visualizations
                that reveal insights and drive data-informed decisions.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="glass rounded-xl p-4 text-center min-w-[100px]">
                  <span className="block font-display text-3xl font-bold text-[var(--color-accent-amber)]">30+</span>
                  <span className="text-xs text-[var(--color-silver)]">Dashboards</span>
                </div>
                <div className="glass rounded-xl p-4 text-center min-w-[100px]">
                  <span className="block font-display text-3xl font-bold text-[var(--color-accent-amber)]">1B+</span>
                  <span className="text-xs text-[var(--color-silver)]">Data Points</span>
                </div>
                <div className="glass rounded-xl p-4 text-center min-w-[100px]">
                  <span className="block font-display text-3xl font-bold text-[var(--color-accent-amber)]">98%</span>
                  <span className="text-xs text-[var(--color-silver)]">Accuracy</span>
                </div>
              </div>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex px-8 py-4 rounded-xl bg-[var(--color-accent-amber)] text-[var(--color-midnight)] font-semibold"
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Right - Animated Charts */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Main Chart Card */}
              <div className="glass rounded-3xl p-6 border border-[var(--color-accent-amber)]/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold">Revenue Analytics</h3>
                  <span className="text-[var(--color-accent-amber)] text-sm">+24.5%</span>
                </div>
                <AnimatedLineChart />

                {/* Bar Chart */}
                <div className="mt-8">
                  <div className="flex items-end gap-3 h-32">
                    {chartData.map((item, index) => (
                      <div key={item.label} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${item.value}%` }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="w-full rounded-t-lg bg-gradient-to-t from-[var(--color-accent-amber)] to-[var(--color-accent-rose)]"
                        />
                        <span className="text-xs text-[var(--color-slate-light)]">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Mini Charts */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-xl p-4 border border-[var(--color-accent-amber)]/20"
              >
                <AnimatedDonutChart />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass rounded-xl p-4 border border-[var(--color-accent-cyan)]/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-cyan)]/20 flex items-center justify-center">
                    <span className="text-lg">📈</span>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-silver)]">Growth Rate</p>
                    <p className="font-display font-bold text-[var(--color-accent-cyan)]">+156%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-[var(--color-charcoal)]/30" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--color-accent-amber)] font-mono text-sm tracking-wider uppercase">
              Services
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Data Solutions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-8 border border-white/5 hover:border-[var(--color-accent-amber)]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent-amber)]/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-[var(--color-accent-amber)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--color-silver)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section - Flowing Tags */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--color-accent-amber)] font-mono text-sm tracking-wider uppercase">
              Tech Stack
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Tools of the Trade
            </h2>
          </motion.div>

          {/* Animated tool tags */}
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="glass px-6 py-3 rounded-2xl border border-white/5 hover:border-[var(--color-accent-amber)]/30 transition-all cursor-default"
              >
                <span className="font-medium">{tool.name}</span>
                <span className="ml-2 text-xs text-[var(--color-accent-amber)]">{tool.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 bg-[var(--color-charcoal)]/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[var(--color-accent-amber)] font-mono text-sm tracking-wider uppercase">
              Case Studies
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Data Success Stories
            </h2>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className={`glass rounded-3xl p-8 md:p-10 border-l-4 ${
                  study.color === 'amber' ? 'border-l-[var(--color-accent-amber)]' :
                  study.color === 'cyan' ? 'border-l-[var(--color-accent-cyan)]' :
                  'border-l-[var(--color-accent-emerald)]'
                }`}>
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <span className={`text-sm font-medium ${
                        study.color === 'amber' ? 'text-[var(--color-accent-amber)]' :
                        study.color === 'cyan' ? 'text-[var(--color-accent-cyan)]' :
                        'text-[var(--color-accent-emerald)]'
                      }`}>
                        {study.client}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 mb-4">
                        {study.title}
                      </h3>
                      <p className="text-[var(--color-silver)] leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="flex lg:flex-col gap-6 lg:gap-4">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center lg:text-right">
                          <span className={`block font-display text-2xl md:text-3xl font-bold ${
                            study.color === 'amber' ? 'text-[var(--color-accent-amber)]' :
                            study.color === 'cyan' ? 'text-[var(--color-accent-cyan)]' :
                            'text-[var(--color-accent-emerald)]'
                          }`}>
                            {value}
                          </span>
                          <span className="text-[var(--color-slate-light)] text-sm capitalize">{key}</span>
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

      {/* Process */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--color-accent-amber)] font-mono text-sm tracking-wider uppercase">
              Methodology
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Data to Decisions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Collect', desc: 'Gather and clean data from multiple sources', icon: '📥' },
              { num: '02', title: 'Analyze', desc: 'Apply statistical methods and ML models', icon: '🔬' },
              { num: '03', title: 'Visualize', desc: 'Create intuitive, interactive visualizations', icon: '🎨' },
              { num: '04', title: 'Act', desc: 'Deliver actionable insights and recommendations', icon: '🚀' }
            ].map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-6 text-center hover-lift h-full">
                  <span className="text-4xl mb-4 block">{step.icon}</span>
                  <span className="text-4xl font-display font-bold text-[var(--color-accent-amber)]/20">{step.num}</span>
                  <h3 className="font-display text-xl font-bold mt-2 mb-2">{step.title}</h3>
                  <p className="text-[var(--color-silver)] text-sm">{step.desc}</p>
                </div>

                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[var(--color-accent-amber)]/50 to-transparent" />
                )}
              </motion.div>
            ))}
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
              Let Your Data
              <br />
              <span className="text-[var(--color-accent-amber)]">Tell Its Story</span>
            </h2>
            <p className="text-[var(--color-silver)] text-lg mb-8 max-w-2xl mx-auto">
              Ready to unlock the potential hidden in your data? Let&apos;s create
              visualizations that drive decisions and deliver results.
            </p>
            <motion.a
              href="mailto:hello@helmi.dev"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-8 py-4 rounded-xl bg-[var(--color-accent-amber)] text-[var(--color-midnight)] font-semibold"
            >
              Start Visualizing
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
            className="w-12 h-12 rounded-full glass flex items-center justify-center border border-[var(--color-accent-amber)]/30"
          >
            <svg className="w-5 h-5 text-[var(--color-accent-amber)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
