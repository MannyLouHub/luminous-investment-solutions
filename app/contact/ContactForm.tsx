'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      if (res.ok) {
        setState('success')
        form.reset()
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
      <input type="hidden" name="subject" value="New investor inquiry — Luminous Investment Solutions" />
      <input type="hidden" name="redirect" value="false" />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-navy-600 dark:text-navy-400 mb-1.5" htmlFor="firstName">
            First name <span className="text-gold-600">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full px-3 py-2.5 rounded-lg border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-950 dark:text-white text-sm placeholder-navy-300 dark:placeholder-navy-600 focus:outline-none focus:border-gold-500 dark:focus:border-gold-500 transition-colors"
            placeholder="Emmanuel"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-navy-600 dark:text-navy-400 mb-1.5" htmlFor="lastName">
            Last name <span className="text-gold-600">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full px-3 py-2.5 rounded-lg border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-950 dark:text-white text-sm placeholder-navy-300 dark:placeholder-navy-600 focus:outline-none focus:border-gold-500 dark:focus:border-gold-500 transition-colors"
            placeholder="Louison"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-navy-600 dark:text-navy-400 mb-1.5" htmlFor="email">
          Email address <span className="text-gold-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-3 py-2.5 rounded-lg border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-950 dark:text-white text-sm placeholder-navy-300 dark:placeholder-navy-600 focus:outline-none focus:border-gold-500 dark:focus:border-gold-500 transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-navy-600 dark:text-navy-400 mb-1.5" htmlFor="phone">
          Phone number <span className="text-navy-400 dark:text-navy-600 font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full px-3 py-2.5 rounded-lg border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-950 dark:text-white text-sm placeholder-navy-300 dark:placeholder-navy-600 focus:outline-none focus:border-gold-500 dark:focus:border-gold-500 transition-colors"
          placeholder="+1 (412) 555-0100"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-navy-600 dark:text-navy-400 mb-1.5" htmlFor="investorType">
          I am a…
        </label>
        <select
          id="investorType"
          name="investorType"
          className="w-full px-3 py-2.5 rounded-lg border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-950 dark:text-white text-sm focus:outline-none focus:border-gold-500 dark:focus:border-gold-500 transition-colors"
        >
          <option value="">Select one</option>
          <option value="passive-investor">Passive investor looking for deals</option>
          <option value="accredited-investor">Accredited investor</option>
          <option value="operator">Operator / potential partner</option>
          <option value="learning">Learning about real estate investing</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-navy-600 dark:text-navy-400 mb-1.5" htmlFor="message">
          Message <span className="text-navy-400 dark:text-navy-600 font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-3 py-2.5 rounded-lg border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-950 dark:text-white text-sm placeholder-navy-300 dark:placeholder-navy-600 focus:outline-none focus:border-gold-500 dark:focus:border-gold-500 transition-colors resize-none"
          placeholder="Tell us about your investment goals or any questions you have..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="newsletter"
          name="newsletter"
          type="checkbox"
          className="mt-0.5 w-4 h-4 rounded border-navy-300 dark:border-navy-600 accent-gold-500"
        />
        <label htmlFor="newsletter" className="text-sm text-navy-600 dark:text-navy-400">
          Subscribe to our newsletter for market insights and deal updates
        </label>
      </div>

      {state === 'success' && (
        <div className="rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 px-4 py-3">
          <p className="text-sm text-green-700 dark:text-green-300 font-medium">Message sent — we&apos;ll be in touch shortly.</p>
        </div>
      )}

      {state === 'error' && (
        <div className="rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 px-4 py-3">
          <p className="text-sm text-red-700 dark:text-red-300">Something went wrong. Please try again or email us directly.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full py-3 rounded-lg bg-navy-950 text-white font-medium text-sm hover:bg-navy-800 transition-colors dark:bg-gold-500 dark:text-navy-950 dark:hover:bg-gold-400 disabled:opacity-60"
      >
        {state === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
