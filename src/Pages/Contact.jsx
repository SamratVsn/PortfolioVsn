import { useState, useRef, useEffect, useCallback } from 'react';
import { Mail, Github, Linkedin, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SEO from '../Components/SEO';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  
  const mountedRef = useRef(true);
  const feedbackTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
      if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    };
  }, []);

  const handleChange = useCallback((e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const payload = { ...formData, time: new Date().toLocaleString() };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, USER_ID)
      .then(() => {
        if (!mountedRef.current) return;
        setSending(false);
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
        
        feedbackTimerRef.current = setTimeout(() => {
          if (mountedRef.current) setSent(false);
        }, 5000);
      })
      .catch(() => {
        if (!mountedRef.current) return;
        setSending(false);
        setError('Message failed to send. Please try again or email directly.');
        
        feedbackTimerRef.current = setTimeout(() => {
          if (mountedRef.current) setError(null);
        }, 5000);
      });
  };

  const contactLinks = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'samratvsn@gmail.com', 
      href: 'mailto:samratvsn@gmail.com',
      desc: 'Best way to reach me'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+977 9847313479', 
      href: 'tel:+9779847313479',
      desc: 'Available for calls'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: 'SamratVsn', 
      href: 'https://github.com/SamratVsn',
      desc: 'See my work'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'samratvsn', 
      href: 'https://www.linkedin.com/in/samratvsn/',
      desc: 'Connect with me'
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-[#3B82F6]/20 selection:text-[#3B82F6]">
      <SEO
        title="Contact | Samrat Parajuli"
        description="Get in touch with Samrat. I'm always open to discussing projects, collaboration, or new opportunities."
        ogUrl="https://www.samratparajuli0.com.np/contact"
      />

      <Header />

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        
        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-[-0.03em]">
            Let's work <br />
            <span className="text-[#3B82F6]">together.</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            Whether you have a project in mind, want to collaborate on something interesting, 
            or just want to grab a coffee and chat about Android development and tech — I'm here for it. 
            Reach out and let's see what we can build.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Information */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-6">Direct contact</p>
              <div className="space-y-3">
                {contactLinks.slice(0, 2).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-start gap-4 p-4 rounded-lg hover:bg-slate-900/50 transition-colors"
                  >
                    <div className="p-2 bg-slate-900 rounded-lg text-[#3B82F6] group-hover:bg-slate-800 transition-colors mt-1">
                      <link.icon size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white group-hover:text-[#3B82F6] transition-colors">
                        {link.label}
                      </p>
                      <p className="text-sm text-slate-400">{link.value}</p>
                      <p className="text-xs text-slate-500 mt-1">{link.desc}</p>
                    </div>
                    <ArrowUpRight size={16} className="text-slate-600 group-hover:text-[#3B82F6] transition-colors opacity-0 group-hover:opacity-100 mt-1" />
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-6">Online presence</p>
              <div className="space-y-3">
                {contactLinks.slice(2).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 rounded-lg hover:bg-slate-900/50 transition-colors"
                  >
                    <div className="p-2 bg-slate-900 rounded-lg text-[#3B82F6] group-hover:bg-slate-800 transition-colors mt-1">
                      <link.icon size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white group-hover:text-[#3B82F6] transition-colors">
                        {link.label}
                      </p>
                      <p className="text-sm text-slate-400">{link.value}</p>
                      <p className="text-xs text-slate-500 mt-1">{link.desc}</p>
                    </div>
                    <ArrowUpRight size={16} className="text-slate-600 group-hover:text-[#3B82F6] transition-colors opacity-0 group-hover:opacity-100 mt-1" />
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mb-4">Location</p>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#3B82F6] mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Kathmandu, Nepal</p>
                  <p className="text-sm text-slate-400">Available for remote & in-person collaboration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm text-slate-400 font-medium block mb-2">
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
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]/20 transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-slate-400 font-medium block mb-2">
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
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]/20 transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-slate-400 font-medium block mb-2">
                  What's on your mind?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, idea, or just say hello..."
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]/20 transition-all resize-none text-sm leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`w-full py-3.5 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                  sending
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-[#3B82F6] text-[#020617] hover:bg-[#3B82F6]/90'
                }`}
              >
                {sending ? 'Sending...' : 'Send Message'}
                {!sending && <ArrowUpRight size={16} />}
              </button>

              {/* Success Message */}
              {sent && (
                <div className="p-4 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-lg">
                  <p className="text-sm text-[#3B82F6] font-medium">
                    ✓ Message sent successfully
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    I'll get back to you soon. Thanks for reaching out!
                  </p>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-900/10 border border-red-900/30 rounded-lg">
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

        {/* Bottom CTA Section */}
        <div className="mt-24 pt-16 border-t border-slate-800">
          <div className="text-center">
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              Prefer to reach out directly? My inbox is always open. No form? No problem.
            </p>
            <a
              href="mailto:samratvsn@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/50 border border-slate-800 hover:border-slate-700 rounded-lg text-slate-300 hover:text-[#3B82F6] transition-colors font-medium"
            >
              <Mail size={16} />
              Email me directly
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;