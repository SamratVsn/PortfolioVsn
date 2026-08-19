import { useState, useRef, useEffect, useCallback } from 'react';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BottomNav from '../Components/BottomNav';
import SEO from '../Components/SEO';
import BackgroundFX from '../Components/BackgroundFX';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
    <div className="relative min-h-screen bg-canvas text-slate-300 selection:bg-accent/20 selection:text-accent overflow-x-hidden">
      <SEO
        title="Contact Samrat Parajuli | Android Developer"
        description="Get in touch with Samrat Parajuli (SamratVsn), an Android developer based in Nepal — open to projects, collaboration, and new opportunities."
        ogUrl="https://www.samratparajuli0.com.np/contact"
      />

      <Header />
      <BackgroundFX />

      <main className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* LEFT — Contact Info (2 cols) */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-[11px] font-mono font-bold tracking-[0.14em] uppercase text-accent/70 mb-5">
                01 · Contact
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-[-0.03em] mb-4">
                Let&apos;s work together.
              </h1>
              <p className="text-[15px] text-slate-400 leading-relaxed max-w-md">
                Whether you have a project in mind, want to collaborate on something interesting,
                or just want to chat about Android development and tech — I&apos;m here for it.
                Reach out and let&apos;s see what we can build.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:samratvsn@gmail.com"
                className="group flex items-start gap-4 p-4 rounded-2xl border border-white/[0.05] bg-surface/60 backdrop-blur-md hover:border-accent/20 transition-colors duration-200"
              >
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors mt-0.5">
                  <Mail size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500 mb-1">Email</p>
                  <p className="text-sm text-white group-hover:text-accent transition-colors font-medium truncate">samratvsn@gmail.com</p>
                  <p className="text-xs text-slate-500 mt-1">Best way to reach me</p>
                </div>
                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100 mt-1 shrink-0" />
              </a>

              <a
                href="https://github.com/SamratVsn"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-2xl border border-white/[0.05] bg-surface/60 backdrop-blur-md hover:border-accent/20 transition-colors duration-200"
              >
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors mt-0.5">
                  <Github size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500 mb-1">GitHub</p>
                  <p className="text-sm text-white group-hover:text-accent transition-colors font-medium">github.com/SamratVsn</p>
                  <p className="text-xs text-slate-500 mt-1">See my work</p>
                </div>
                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100 mt-1 shrink-0" />
              </a>

              <a
                href="https://www.linkedin.com/in/samratvsn/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-2xl border border-white/[0.05] bg-surface/60 backdrop-blur-md hover:border-accent/20 transition-colors duration-200"
              >
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors mt-0.5">
                  <Linkedin size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500 mb-1">LinkedIn</p>
                  <p className="text-sm text-white group-hover:text-accent transition-colors font-medium">linkedin.com/in/samratvsn</p>
                  <p className="text-xs text-slate-500 mt-1">Connect with me</p>
                </div>
                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100 mt-1 shrink-0" />
              </a>
            </div>

            <div className="pt-2">
              <p className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500 mb-3">Location</p>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5" />
                <div>
                  <p className="text-white font-semibold text-sm">Kathmandu, Nepal</p>
                  <p className="text-xs text-slate-400 mt-0.5">Available for remote &amp; in-person collaboration</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Contact Form (3 cols) */}
          <div className="lg:mt-40 sm:mt-10 lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500 block mb-2">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ram, Shyam, Sita..."
                  className="w-full bg-surface/60 border border-white/[0.05] rounded-xl px-4 py-3 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 backdrop-blur-md transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500 block mb-2">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                  className="w-full bg-surface/60 border border-white/[0.05] rounded-xl px-4 py-3 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 backdrop-blur-md transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500 block mb-2">
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
                  className="w-full bg-surface/60 border border-white/[0.05] rounded-xl px-4 py-3 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 backdrop-blur-md transition-all resize-none text-sm leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                  sending
                    ? 'bg-surface text-slate-500 cursor-not-allowed border border-white/[0.05]'
                    : 'bg-accent text-white hover:bg-accent/90 active:scale-[0.97]'
                }`}
              >
                {sending ? 'Sending...' : 'Send Message'}
                {!sending && <ArrowUpRight size={16} />}
              </button>

              {sent && (
                <div className="p-4 bg-accent/10 border border-accent/30 rounded-xl">
                  <p className="text-sm text-accent font-medium">
                    ✓ Message sent successfully
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    I&apos;ll get back to you soon. Thanks for reaching out!
                  </p>
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-900/10 border border-red-900/30 rounded-xl">
                  <p className="text-sm text-red-400 font-medium">
                    ✗ {error}
                  </p>
                  <p className="text-xs text-red-300/70 mt-1">
                    Email me directly at samratvsn@gmail.com instead
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 pt-16 border-t border-white/[0.05]">
          <div className="text-center">
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              Prefer to reach out directly? My inbox is always open. No form? No problem.
            </p>
            <a
              href="mailto:samratvsn@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface/60 border border-white/[0.05] backdrop-blur-md hover:border-accent/20 rounded-xl text-slate-300 hover:text-accent transition-colors font-medium"
            >
              <Mail size={16} />
              Email me directly
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Contact;
