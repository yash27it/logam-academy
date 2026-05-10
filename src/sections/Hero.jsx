export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink pt-20"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-brand-600/15 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 text-center">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          <span className="text-brand-400 text-xs font-semibold tracking-widest uppercase">
            Performance Marketing Agency
          </span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 text-balance">
          Your Digital{' '}
          <span className="gradient-text">Presence</span>
          <br />
          Is About To
          <br />
          <span className="relative inline-block">
            Take Off
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 400 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10 Q100 2 200 8 Q300 14 398 4"
                stroke="#f97316"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </h1>

        <p className="text-ink-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Do you want your business to stand out digitally? We are the one-stop
          solution for all your requirements — from performance marketing and
          lead generation to WhatsApp automation and Shopify development.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('lead')}
            className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-brand-500/30"
          >
            Schedule a Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo('courses')}
            className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full text-sm transition-all hover:bg-white/5"
          >
            Explore Courses
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
          {[
            { num: '250+', label: 'Brands Served' },
            { num: '10+', label: 'Countries' },
            { num: '5+', label: 'Years Experience' },
            { num: '98%', label: 'Client Satisfaction' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display font-bold text-3xl md:text-4xl gradient-text mb-1">
                {s.num}
              </p>
              <p className="text-ink-200 text-xs md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink to-transparent pointer-events-none" />
    </section>
  )
}
