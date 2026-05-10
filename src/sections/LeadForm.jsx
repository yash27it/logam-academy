import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

const STEPS = ['Personal Info', 'Background', 'Source & Message']

const INITIAL = {
  name: '',
  mobile: '',
  email: '',
  qualification: '',
  status: '',
  source: '',
  message: '',
}

function ProgressBar({ step }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-0">
        {STEPS.map((label, i) => {
          const done = i < step
          const active = i === step
          return (
            <div key={i} className="flex items-center flex-1 last:flex-none">
              {/* Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${
                    done
                      ? 'bg-brand-500 border-brand-500 text-white'
                      : active
                      ? 'border-brand-500 text-brand-400 bg-transparent'
                      : 'border-white/20 text-ink-400 bg-transparent'
                  }`}
                >
                  {done ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span
                  className={`text-[10px] mt-1.5 font-medium hidden sm:block transition-colors ${
                    active ? 'text-brand-400' : done ? 'text-brand-500' : 'text-ink-400'
                  }`}
                >
                  {label}
                </span>
              </div>

              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 relative overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`absolute inset-y-0 left-0 bg-brand-500 transition-all duration-500 ${
                      done ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <p className="text-center sm:hidden text-xs text-brand-400 mt-3 font-medium">
        Step {step + 1}: {STEPS[step]}
      </p>
    </div>
  )
}

function FieldError({ msg }) {
  if (!msg) return null
  return (
    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
      <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      {msg}
    </p>
  )
}

function InputField({ label, type = 'text', value, onChange, error, placeholder, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-ink-200 mb-1.5 tracking-wide">
        {label}
        {required && <span className="text-brand-500 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-ink-400 outline-none focus:ring-2 focus:ring-brand-500/40 transition-all ${
          error ? 'border-red-500/60 bg-red-500/5' : 'border-white/10 focus:border-brand-500/40'
        }`}
      />
      <FieldError msg={error} />
    </div>
  )
}

function SelectField({ label, value, onChange, error, options, required }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-ink-200 mb-1.5 tracking-wide">
        {label}
        {required && <span className="text-brand-500 ml-0.5">*</span>}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-500/40 transition-all appearance-none ${
          value ? 'text-white' : 'text-ink-400'
        } ${error ? 'border-red-500/60 bg-red-500/5' : 'border-white/10 focus:border-brand-500/40'}`}
        style={{ backgroundColor: 'rgb(255 255 255 / 0.05)' }}
      >
        <option value="" disabled style={{ background: '#1a1a1a', color: '#aaa' }}>
          Select {label}
        </option>
        {options.map((o) => (
          <option key={o} value={o} style={{ background: '#1a1a1a', color: '#fff' }}>
            {o}
          </option>
        ))}
      </select>
      <FieldError msg={error} />
    </div>
  )
}

export default function LeadForm() {
  const [state, handleSubmit] = useForm("mlgzolee")
  const [step, setStep] = useState(0)
  const [data, setData] = useState(INITIAL)
  const [errors, setErrors] = useState({})

  const set = (field) => (e) => {
    setData((d) => ({ ...d, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (step === 0) {
      if (!data.name.trim()) errs.name = 'Full name is required'
      if (!data.mobile.trim()) errs.mobile = 'Mobile number is required'
      else if (!/^[6-9]\d{9}$/.test(data.mobile.replace(/\s/g, '')))
        errs.mobile = 'Enter a valid 10-digit mobile number'
      if (!data.email.trim()) errs.email = 'Email address is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        errs.email = 'Enter a valid email address'
    }
    if (step === 1) {
      if (!data.qualification.trim()) errs.qualification = 'Qualification is required'
      if (!data.status) errs.status = 'Please select your current status'
    }
    if (step === 2) {
      if (!data.source) errs.source = 'Please tell us how you found us'
      if (!data.message.trim()) errs.message = 'Message is required'
    }
    return errs
  }

  const next = () => {
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setStep((s) => s + 1)
  }

  const back = () => setStep((s) => s - 1)

  const submit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    
    // Create FormData object with all form fields
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('mobile', data.mobile)
    formData.append('email', data.email)
    formData.append('qualification', data.qualification)
    formData.append('status', data.status)
    formData.append('source', data.source)
    formData.append('message', data.message)
    
    // Submit to Formspree
    await handleSubmit(formData)
  }

  if (state.succeeded) {
    return (
      <section id="lead" className="bg-ink py-20 md:py-32">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display font-bold text-3xl text-white mb-3">You're all set!</h2>
          <p className="text-ink-200 mb-6">
            Thanks, <span className="text-brand-400 font-semibold">{data.name}</span>! Our team will
            reach out to you shortly on <span className="text-brand-400 font-semibold">{data.mobile}</span>.
          </p>
          <button
            onClick={() => { setData(INITIAL); setStep(0); window.location.reload() }}
            className="text-sm text-ink-400 hover:text-white border border-white/10 hover:border-white/30 px-5 py-2 rounded-full transition-colors"
          >
            Submit another response
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="lead" className="bg-ink py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left copy */}
          <div className="md:sticky md:top-28">
            <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-brand-400 text-xs font-semibold tracking-widest uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white leading-tight mb-5">
              Let's Grow Your{' '}
              <span className="gradient-text">Business</span>{' '}
              Together
            </h2>
            <p className="text-ink-200 text-base leading-relaxed mb-8">
              Ready to take your digital presence to the next level? Fill in the
              form and one of our experts will get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📞', text: '+91 88669 72506' },
                { icon: '✉️', text: 'hello@logamdigital.com' },
                { icon: '📍', text: 'India • Serving Globally' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-ink-200 text-sm">
                  <span className="text-base">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className="bg-ink-800/60 border border-white/8 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <form onSubmit={submit}>
              <ProgressBar step={step} />

              {/* Step 1: Personal Info */}
              {step === 0 && (
                <div className="space-y-4 animate-fade-in">
                  <InputField
                    label="Full Name"
                    value={data.name}
                    onChange={set('name')}
                    error={errors.name}
                    placeholder="e.g. Rahul Sharma"
                    required
                  />
                  <InputField
                    label="Mobile Number"
                    type="tel"
                    value={data.mobile}
                    onChange={set('mobile')}
                    error={errors.mobile}
                    placeholder="e.g. 9876543210"
                    required
                  />
                  <InputField
                    label="Email Address"
                    type="email"
                    value={data.email}
                    onChange={set('email')}
                    error={errors.email}
                    placeholder="e.g. rahul@email.com"
                    required
                  />
                </div>
              )}

              {/* Step 2: Background */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <InputField
                    label="Highest Qualification"
                    value={data.qualification}
                    onChange={set('qualification')}
                    error={errors.qualification}
                    placeholder="e.g. B.Com, MBA, 12th Pass"
                    required
                  />
                  <SelectField
                    label="Current Status"
                    value={data.status}
                    onChange={set('status')}
                    error={errors.status}
                    required
                    options={[
                      'Student',
                      'Fresher / Job Seeker',
                      'Working Professional',
                      'Business Owner',
                      'Freelancer',
                      'Homemaker',
                      'Other',
                    ]}
                  />
                </div>
              )}

              {/* Step 3: Source + Message */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <SelectField
                    label="How Did You Hear About Us?"
                    value={data.source}
                    onChange={set('source')}
                    error={errors.source}
                    required
                    options={[
                      'Google Search',
                      'Instagram',
                      'Facebook',
                      'WhatsApp',
                      'YouTube',
                      'Friend / Referral',
                      'LinkedIn',
                      'Other',
                    ]}
                  />
                  <div>
                    <label className="block text-xs font-semibold text-ink-200 mb-1.5 tracking-wide">
                      Your Message
                      <span className="text-brand-500 ml-0.5">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={data.message}
                      onChange={set('message')}
                      placeholder="Tell us about your business goals or what you're looking for..."
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-ink-400 outline-none focus:ring-2 focus:ring-brand-500/40 transition-all resize-none ${
                        errors.message
                          ? 'border-red-500/60 bg-red-500/5'
                          : 'border-white/10 focus:border-brand-500/40'
                      }`}
                    />
                    <FieldError msg={errors.message} />
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex gap-3 mt-7">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={back}
                    className="flex-1 border border-white/15 text-ink-200 hover:text-white hover:border-white/30 font-semibold py-3 rounded-xl text-sm transition-all"
                  >
                    ← Back
                  </button>
                )}
                {step < STEPS.length - 1 ? (
                  <button
                    type="button"
                    onClick={next}
                    className="flex-1 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 rounded-xl text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-500/20"
                  >
                    Continue →
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="flex-1 bg-brand-500 hover:bg-brand-600 disabled:opacity-70 text-white font-semibold py-3 rounded-xl text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {state.submitting ? 'Submitting...' : 'Submit'}
                  </button>
                )}
              </div>

              <p className="text-center text-ink-400 text-xs mt-4">
                Step {step + 1} of {STEPS.length} — all fields marked{' '}
                <span className="text-brand-500">*</span> are required
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
