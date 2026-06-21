import { useState, useRef, useEffect, useCallback } from 'react';
import Header from '../Components/Header';
import SEO from '../Components/SEO';
import Footer from '../Components/Footer';
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorLog, setErrorLog] = useState(null);
  
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
    setErrorLog(null);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        if (!mountedRef.current) return;
        setSending(false);
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
        
        feedbackTimerRef.current = setTimeout(() => {
          if (mountedRef.current) setSent(false);
        }, 6000);
      })
      .catch(() => {
        if (!mountedRef.current) return;
        setSending(false);
        setErrorLog('Something went wrong. Please try again or email me directly.');
        
        feedbackTimerRef.current = setTimeout(() => {
          if (mountedRef.current) setErrorLog(null);
        }, 6000);
      });
  };

  const contactNodes = [
    { icon: FaPhone, label: 'Phone', value: '+977 9847313479', link: 'tel:+9779847313479' },
    { icon: MdEmail, label: 'Email', value: 'samratvsn@gmail.com', link: 'mailto:samratvsn@gmail.com' },
    { icon: FaLocationDot, label: 'Location', value: 'Kathmandu, Nepal', link: '#' },
    { icon: FaGithub, label: 'GitHub', value: 'github.com/SamratVsn', link: 'https://github.com/SamratVsn' }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-[#2DD4BF]/20 selection:text-[#2DD4BF] overflow-x-hidden">
      <SEO
        title="Contact | Samrat Parajuli"
        description="Get in touch with Samrat Parajuli for collaboration, project inquiries, or Android development opportunities."
        ogUrl="https://www.samratparajuli0.com.np/contact"
      />
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <div className="mb-12">
          <h1 className="text-white text-3xl font-bold mb-2 tracking-[-0.02em]">
            Contact<span className="text-[#2DD4BF]">.</span>
          </h1>
          <p className="text-slate-400 max-w-xl">
            Get in touch for collaboration, project inquiries, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-4">
              {contactNodes.map((node) => (
              <a
                key={node.label}
                href={node.link}
                className="flex items-center gap-4 p-4 border border-slate-800/50 rounded-lg hover:border-slate-700/50 transition-colors group"
              >
                <div className="text-slate-500 group-hover:text-[#2DD4BF] transition-colors">
                  <node.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{node.label}</p>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors">{node.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="text-xs text-slate-500 mb-1 block">Name</label>
                  <input 
                    id="contact-name" 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-slate-900/30 border border-slate-800 rounded px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-[#2DD4BF] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-xs text-slate-500 mb-1 block">Email</label>
                  <input 
                    id="contact-email" 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-slate-900/30 border border-slate-800 rounded px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-[#2DD4BF] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="text-xs text-slate-500 mb-1 block">Message</label>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  className="w-full bg-slate-900/30 border border-slate-800 rounded px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-[#2DD4BF] transition-colors resize-none leading-relaxed"
                  placeholder="Your message..."
                />
              </div>

              <button 
                type="submit" 
                disabled={sending}
                className={`w-full py-3 rounded font-medium text-sm transition-all ${
                  sending 
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                  : 'bg-[#2DD4BF] text-[#020617] hover:opacity-90'
                }`}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>

              {sent && (
                <div className="p-3 bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 rounded text-sm text-[#2DD4BF]">
                  Message sent successfully. I will get back to you soon.
                </div>
              )}

              {errorLog && (
                <div className="p-3 bg-red-900/20 border border-red-900/30 rounded text-sm text-red-400">
                  {errorLog}
                </div>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
