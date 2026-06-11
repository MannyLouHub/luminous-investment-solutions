import type { Metadata } from 'next'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Connect with Luminous Investment Solutions — investor inquiries, partnership opportunities, and more.',
}

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 dark:text-gold-400 mb-2">Get in touch</p>
          <h1 className="text-4xl font-bold text-navy-950 dark:text-white mb-6">
            Let&apos;s talk about your next investment
          </h1>
          <p className="text-navy-600 dark:text-navy-400 leading-relaxed mb-10">
            Whether you&apos;re an accredited investor looking for passive income, an operator interested in partnering, or simply curious about what we do — we want to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-950 dark:text-white">Email</p>
                <p className="text-sm text-navy-500 dark:text-navy-400">Use the form to reach us directly</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-950 dark:text-white">Location</p>
                <p className="text-sm text-navy-500 dark:text-navy-400">Pittsburgh, PA</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-navy-50 dark:bg-navy-900 border border-navy-100 dark:border-navy-800 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"/></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-950 dark:text-white">Newsletter</p>
                <a
                  href="https://manage.kmail-lists.com/subscriptions/subscribe?a=SWf6mJ&g=WNDWpH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gold-600 dark:text-gold-400 hover:underline"
                >
                  Subscribe for market insights →
                </a>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}
