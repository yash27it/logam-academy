const reasons = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Data-Driven Decisions',
    description:
      'Every campaign is built on real data. We track, analyse, and optimise continuously so your ad spend never goes to waste.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'ROI-First Approach',
    description:
      'We are obsessed with returns. Our campaigns are structured to generate measurable revenue, not just clicks or impressions.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Expert Team',
    description:
      'Our certified professionals bring deep expertise across Google Ads, Meta, WhatsApp, and ecommerce — committed to your growth.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Global Reach',
    description:
      'With clients across 10+ countries, we bring an international perspective and battle-tested strategies to every project.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Execution',
    description:
      'Speed matters in digital marketing. We move quickly from strategy to execution, so you start seeing results sooner.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Transparent Reporting',
    description:
      'No black boxes. You get clear, honest reporting on exactly how your budget is being used and what results it delivers.',
  },
]

export default function WhyLogam() {
  return (
    <section id="why" className="bg-ink-800 py-20 md:py-32 relative overflow-hidden">
      {/* decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-brand-400 text-xs font-semibold tracking-widest uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              We Handle The{' '}
              <span className="gradient-text">Most Tedious</span>{' '}
              Tasks For You
            </h2>
            <p className="text-ink-200 text-base md:text-lg leading-relaxed mb-8">
              Experienced, knowledgeable professionals in digital marketing. Our
              team is committed to making you money — while you focus on what
              you do best.
            </p>

            {/* Quick trust badges */}
            <div className="flex flex-wrap gap-3">
              {['Google Partner', 'Meta Certified', '250+ Clients', '5+ Years'].map(
                (badge) => (
                  <span
                    key={badge}
                    className="text-xs font-semibold border border-white/15 text-ink-100 px-3 py-1.5 rounded-full bg-white/5"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="bg-ink/60 border border-white/8 rounded-xl p-5 hover:border-brand-500/30 hover:bg-ink/80 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-3 group-hover:bg-brand-500/20 transition-colors">
                  {r.icon}
                </div>
                <h3 className="font-display font-semibold text-sm text-white mb-2">
                  {r.title}
                </h3>
                <p className="text-ink-400 text-xs leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
