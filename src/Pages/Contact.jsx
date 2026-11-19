import { useState, useRef, useEffect, useCallback } from 'react';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SEO from '../Components/SEO';
import BackgroundFX from '../Components/BackgroundFX';
import PageHeader from '../Components/PageHeader';
import Container from '../Components/ui/Container';
import Card from '../Components/ui/Card';
import Button from '../Components/ui/Button';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'samratvsn@gmail.com',
    hint: 'Best way to reach me',
    href: 'mailto:samratvsn@gmail.com',
    external: false,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/SamratVsn',
    hint: 'See my work',
    href: 'https://github.com/SamratVsn',
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/samratvsn',
    hint: 'Connect with me',
    href: 'https://www.linkedin.com/in/samratvsn/',
    external: true,
  },
];

const FORM_FIELD_CLASS =
  'w-full rounded-xl border border-border-control bg-surface/60 px-4 py-3 text-body text-slate-300 placeholder:text-slate-400 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const mountedRef = useRef(true);
  const feedbackTimerRef = useRef(null);
  const formDataRef = useRef(formData);

  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
      if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    };
  }, []);

  const handleChange = useCallback((e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);

    const payload = { ...formDataRef.current, time: new Date().toLocaleString() };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, { publicKey: PUBLIC_KEY })
      .then(() => {
        if (!mountedRef.current) return;
        setSending(false);
        setSent(true);
        setFormData({ name: '', email: '', message: '' });

        if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
        feedbackTimerRef.current = setTimeout(() => {
          if (mountedRef.current) setSent(false);
        }, 5000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        if (!mountedRef.current) return;
        setSending(false);
        setError('Message failed to send. Please try again or email directly.');

        if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
        feedbackTimerRef.current = setTimeout(() => {
          if (mountedRef.current) setError(null);
        }, 5000);
      });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-slate-300 selection:bg-accent/20 selection:text-accent">
      <SEO
        title="Contact Samrat Parajuli | Product-Minded Systems & Application Engineer"
        description="Get in touch with Samrat Parajuli (SamratVsn), a product-minded systems and application engineer in Kathmandu, Nepal — open to product engineering, Android roles, and collaboration."
        ogUrl="https://www.samratparajuli0.com.np/contact"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://www.samratparajuli0.com.np/contact#webpage',
            'url': 'https://www.samratparajuli0.com.np/contact',
            'name': 'Contact Samrat Parajuli | Product-Minded Systems & Application Engineer',
            'description': 'Get in touch with Samrat Parajuli (SamratVsn), a product-minded systems and application engineer in Kathmandu, Nepal — open to product engineering, Android roles, and collaboration.',
            'isPartOf': { '@id': 'https://www.samratparajuli0.com.np/#website' },
            'about': { '@id': 'https://www.samratparajuli0.com.np/#person' },
            'mainEntity': {
              '@type': 'ContactPage',
              'name': 'Contact Samrat Parajuli',
              'url': 'https://www.samratparajuli0.com.np/contact',
              'mainEntity': {
                '@type': 'Person',
                '@id': 'https://www.samratparajuli0.com.np/#person',
                'name': 'Samrat Parajuli',
                'email': 'mailto:samratvsn@gmail.com',
                'url': 'https://www.samratparajuli0.com.np/',
                'sameAs': [
                  'https://github.com/SamratVsn',
                  'https://www.linkedin.com/in/samratvsn/',
                  'https://x.com/SamratVsn'
                ]
              }
            }
          }
        ]}
      />

      <Header />
      <BackgroundFX />

      <main id="main-content" className="relative pb-20 pt-10 sm:pt-14">
        <Container>
          <PageHeader
            eyebrow="01 · Contact"
            title="Let's work together."
            description="Whether you have a project in mind, want to collaborate on something interesting, or just want to chat about product engineering, Android development, and tech — I'm here for it. Reach out and let's see what we can build."
          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

            {/* LEFT — Contact Info (2 cols) */}
            <div className="space-y-10 lg:col-span-2">
              <div className="space-y-4">
                {CONTACT_CHANNELS.map((channel) => (
                  <Card
                    key={channel.label}
                    as="a"
                    href={channel.href}
                    {...(channel.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    variant="subtle"
                    padding="sm"
                    interactive
                    className="group flex items-start gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
                  >
                    <div className="mt-0.5 rounded-xl bg-accent/10 p-2.5 text-accent transition-colors group-hover:bg-accent/20">
                      <channel.icon size={18} aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 font-mono text-label font-bold uppercase text-slate-400">{channel.label}</p>
                      <p className="truncate text-small font-medium text-paper transition-colors group-hover:text-accent-text">{channel.value}</p>
                      <p className="mt-1 text-label tracking-normal text-slate-400">{channel.hint}</p>
                    </div>
                    <ArrowUpRight size={16} aria-hidden="true" className="mt-1 shrink-0 text-slate-400 opacity-0 transition-colors group-hover:text-accent-text group-hover:opacity-100" />
                  </Card>
                ))}
              </div>

              <div className="pt-2">
                <p className="mb-3 font-mono text-label font-bold uppercase text-slate-400">Location</p>
                <div className="flex items-start gap-3">
                  <MapPin size={18} aria-hidden="true" className="mt-0.5 text-accent" />
                  <div>
                    <p className="text-small font-semibold text-paper">Kathmandu, Nepal</p>
                    <p className="mt-0.5 text-label tracking-normal text-slate-400">Available for remote &amp; in-person collaboration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Contact Form (3 cols) */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono text-label font-bold uppercase text-slate-400">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={FORM_FIELD_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-label font-bold uppercase text-slate-400">
                    Your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    className={FORM_FIELD_CLASS}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-label font-bold uppercase text-slate-400">
                    What&apos;s on your mind?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project, idea, or just say hello..."
                    className={`${FORM_FIELD_CLASS} resize-none`}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  size="lg"
                  className="w-full"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                  {!sending && <ArrowUpRight size={16} aria-hidden="true" />}
                </Button>

                {sent && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="rounded-xl border border-accent-border bg-accent/10 p-4"
                  >
                    <p className="text-small font-medium text-accent-text">
                      ✓ Message sent successfully
                    </p>
                    <p className="mt-1 text-label tracking-normal text-slate-400">
                      I&apos;ll get back to you soon. Thanks for reaching out!
                    </p>
                  </div>
                )}

                {error && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-900/30 bg-red-900/10 p-4"
                  >
                    <p className="text-small font-medium text-red-400">
                      ✗ {error}
                    </p>
                    <p className="mt-1 text-label tracking-normal text-red-300/70">
                      Email me directly at samratvsn@gmail.com instead
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 border-t border-border pt-16">
            <div className="text-center">
              <p className="mx-auto mb-6 max-w-xl text-body text-slate-400">
                Prefer to reach out directly? My inbox is always open. No form? No problem.
              </p>
              <Button href="mailto:samratvsn@gmail.com" variant="secondary" size="lg">
                <Mail size={16} aria-hidden="true" />
                Email me directly
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
