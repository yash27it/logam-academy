const courses = [
  {
    number: '01',
    tag: 'ROI Focused',
    title: 'Performance Marketing',
    description:
      'Data-driven advertising campaigns that deliver measurable results. Maximize your ROI with targeted strategies across Google, Meta, and more.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'from-orange-500/20 to-red-500/10',
    border: 'border-orange-500/20',
    tagColor: 'bg-orange-500/10 text-orange-400',
  },
  {
    number: '02',
    tag: 'Lead Expert',
    title: 'Lead Generation',
    description:
      'Target people who are ready to become your customer. Our systems find, qualify, and convert high-intent leads into real sales.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'from-amber-500/20 to-yellow-500/10',
    border: 'border-amber-500/20',
    tagColor: 'bg-amber-500/10 text-amber-400',
  },
  {
    number: '03',
    tag: 'Automation',
    title: 'WhatsApp Automation',
    description:
      'Send personalised messages with an industry-leading open rate. Reach your audience personally and scale customer engagement effortlessly.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: 'from-green-500/20 to-emerald-500/10',
    border: 'border-green-500/20',
    tagColor: 'bg-green-500/10 text-green-400',
  },
  {
    number: '04',
    tag: 'E-commerce',
    title: 'Shopify Development',
    description:
      'Build high-converting ecommerce websites that drive sales. Professional Shopify stores designed to scale your online business.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/20',
    tagColor: 'bg-blue-500/10 text-blue-400',
  },
]

export default function Courses() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="courses" className="bg-ink py-20 md:py-32 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-ink-200 text-xs font-semibold tracking-widest uppercase">
              Our Services
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white leading-tight mb-4">
            We Create Campaigns That{' '}
            <span className="gradient-text">Help You Grow</span>
          </h2>
          <p className="text-ink-200 text-base md:text-lg max-w-xl mx-auto">
            From individuals to enterprise — we solve real digital marketing
            problems with proven, data-backed strategies.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {courses.map((c) => (
            <div
              key={c.number}
              className={`group relative bg-gradient-to-br ${c.color} border ${c.border} rounded-2xl p-6 md:p-8 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1 cursor-default`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-4xl text-white/10">
                    {c.number}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  {c.icon}
                </div>
              </div>

              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${c.tagColor}`}>
                {c.tag}
              </span>

              <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-3">
                {c.title}
              </h3>
              <p className="text-ink-200 text-sm leading-relaxed mb-5">
                {c.description}
              </p>

              <button
                onClick={() => scrollTo('lead')}
                className="inline-flex items-center gap-1.5 text-brand-400 text-sm font-semibold group-hover:gap-3 transition-all"
              >
                Get Started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Client logos marquee */}
        <div className="mt-16 md:mt-24">
          <p className="text-center text-ink-400 text-xs font-semibold tracking-widest uppercase mb-8">
            250+ Brands Trust Us
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap gap-12">
              {[
                'Aatmee Developers',
                'Aggrawal College',
                'Anna Ki Idli',
                'Ratnakar Developers',
                'Bodyleaf',
                'Brahmras Natural',
                'Casa Amplio',
                'Ecotriip',
                'Sahajanand Elite',
                'Faridabad Eye',
                'Fitness Fox',
                'Casa Amplio',
                'Aatmee Developers',
                'Aggrawal College',
                'Anna Ki Idli',
                'Ratnakar Developers',
                'Bodyleaf',
                'Brahmras Natural',
                'Casa Amplio',
                'Ecotriip',
                'Sahajanand Elite',
                'Faridabad Eye',
                'Fitness Fox',
                'Casa Amplio',
              ].map((name, i) => (
                <span
                  key={i}
                  className="inline-block font-display font-semibold text-sm text-ink-600 tracking-wide"
                >
                  {name}
                  <span className="ml-12 text-brand-500/50">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
