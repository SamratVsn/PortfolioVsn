import { useState, useRef, useEffect, useCallback } from 'react';
import Header from '../Components/Header';
import SEO from '../Components/SEO';
import Footer from '../Components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaLocationDot, FaSquareGithub } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { Terminal, Send, Activity, ShieldCheck, Globe, AlertTriangle } from 'lucide-react';
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
      .catch((err) => {
        if (!mountedRef.current) return;
        setSending(false);
        setErrorLog(`ERR_UPSTREAM_TIMEOUT: Pipeline distribution failure. Status code ${err?.status || 500}.`);
        
        feedbackTimerRef.current = setTimeout(() => {
          if (mountedRef.current) setErrorLog(null);
        }, 6000);
      });
  };

  const contactNodes = [
    { id: 'phone', icon: FaPhone, label: 'VOICE_LINE', value: '+977 9847313479', link: 'tel:+9779847313479' },
    { id: 'email', icon: MdMarkEmailRead, label: 'SECURE_MAIL', value: 'samratvsn@gmail.com', link: 'mailto:samratvsn@gmail.com' },
    { id: 'location', icon: FaLocationDot, label: 'GEOLOCATION', value: 'Kathmandu, Nepal', link: '#' },
    { id: 'github', icon: FaSquareGithub, label: 'SOURCE_REPO', value: 'github.com/SamratVsn', link: 'https://github.com/SamratVsn' }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#2DD4BF]/20 selection:text-[#2DD4BF]">
      <SEO
        title="Contact | Samrat Parajuli - Terminal Uplink"
        description="Establish communications routing with Samrat Parajuli. Interface access open for project scheduling, architecture analysis, and collaborative programming operations."
        ogUrl="https://www.samratparajuli0.com.np/contact"
      />
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-24 lg:pt-32 pb-20">
        
        {/* INTERFACE MONITOR HEADER */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#2DD4BF] uppercase tracking-[0.3em] mb-2">
            <Activity size={10} className="animate-pulse" /> COM_CHANNEL_GATEWAY_OPEN
          </div>
          <h1 className="text-2xl md:text-3xl font-mono font-bold text-white tracking-tight uppercase">
            Establish_Link_Pipeline<span className="text-[#2DD4BF] animate-pulse">_</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT CHANNELS CONFIG */}
          <div className="lg:col-span-5 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {contactNodes.map((node, index) => (
                <motion.a
                  key={node.id}
                  href={node.link}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="group relative p-5 bg-slate-950/20 border border-slate-900 rounded hover:border-slate-800 transition-colors"
                >
                  <div className="absolute top-0 left-0 w-px h-full bg-[#2DD4BF] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  <div className="flex items-center gap-4">
                    <div className="p-2 border border-slate-900 bg-slate-950 rounded text-slate-600 group-hover:text-[#2DD4BF] group-hover:border-[#2DD4BF]/20 transition-colors">
                      <node.icon size={16} />
                    </div>
                    <div className="font-mono">
                      <p className="text-[9px] text-slate-600 uppercase tracking-widest flex items-center gap-1">
                        <span>// 0{index + 1}</span>
                        {node.label}
                      </p>
                      <p className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors mt-0.5">{node.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* COMMUNICATIONS METADATA */}
            <div className="p-4 bg-slate-950/40 border border-slate-900 rounded font-mono text-[10px] space-y-2.5 text-slate-600">
              <div className="flex justify-between items-center border-b border-slate-900 pb-2">
                <span className="flex items-center gap-2"><Globe size={11} className="text-slate-700" /> SOURCE_ORIGIN</span>
                <span className="text-slate-400 tracking-wide">KATHMANDU / NP</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-900 pb-2">
                <span className="flex items-center gap-2"><ShieldCheck size={11} className="text-[#2DD4BF]" /> INTEGRITY_SCHEME</span>
                <span className="text-slate-400 tracking-wide">TLS_1.3_VERIFIED</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2"><Terminal size={11} className="text-slate-700" /> MAX_REPLY_LATENCY</span>
                <span className="text-slate-400 tracking-wide">24_HRS_CYCLE</span>
              </div>
            </div>
          </div>

          {/* RIGHT DATA INPUT MODULE */}
          <div className="lg:col-span-7">
            <div className="bg-[#020617] border border-slate-900 rounded-xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              <h2 className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider mb-6 flex items-center gap-2">
                 <Send size={12} className="text-[#2DD4BF]" /> Compile_Data_Packet
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5 font-mono">
                    <label htmlFor="contact-name" className="text-[10px] text-slate-600 uppercase tracking-widest ml-0.5">IDENTIFIER.name</label>
                    <input 
                      id="contact-name" 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full bg-slate-950/60 border border-slate-900 rounded px-3 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-[#2DD4BF] font-sans transition-colors"
                      placeholder="Identify yourself..."
                    />
                  </div>
                  <div className="space-y-1.5 font-mono">
                    <label htmlFor="contact-email" className="text-[10px] text-slate-600 uppercase tracking-widest ml-0.5">ENDPOINT.email</label>
                    <input 
                      id="contact-email" 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full bg-slate-950/60 border border-slate-900 rounded px-3 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-[#2DD4BF] font-sans transition-colors"
                      placeholder="address@domain.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 font-mono">
                  <label htmlFor="contact-message" className="text-[10px] text-slate-600 uppercase tracking-widest ml-0.5">DATALAYER.payload</label>
                  <textarea 
                    id="contact-message" 
                    name="message" 
                    rows="5" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-slate-950/60 border border-slate-900 rounded px-3 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-[#2DD4BF] font-sans transition-colors resize-none leading-relaxed"
                    placeholder="Enter contextual transfer parameters..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={sending}
                  className={`w-full py-3 rounded font-mono text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 ${
                    sending 
                    ? 'bg-slate-950 border border-slate-900 text-slate-700 cursor-not-allowed' 
                    : 'bg-[#2DD4BF] text-[#020617] shadow-[0_0_15px_rgba(45,212,191,0.15)] hover:shadow-[0_0_20px_rgba(45,212,191,0.35)]'
                  }`}
                >
                  {sending ? (
                    <> <Activity size={13} className="animate-spin text-[#020617]" /> Routing_Encrypted_Packet_ </>
                  ) : (
                    <> <Send size={13} /> Execute_Transmission </>
                  )}
                </button>

                {/* LOG READOUT CONTROLLERS */}
                <AnimatePresence mode="wait">
                  {sent && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-[#2DD4BF]/5 border border-[#2DD4BF]/20 rounded font-mono text-[10px] text-[#2DD4BF]"
                    >
                      <p className="tracking-wide font-bold">
                        [SUCCESS] DATA_RECEIVED // Stream package correctly committed to distribution tree.
                      </p>
                    </motion.div>
                  )}

                  {errorLog && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-rose-500/5 border border-rose-500/20 rounded font-mono text-[10px] text-rose-400 flex items-center gap-2"
                    >
                      <AlertTriangle size={12} className="shrink-0" />
                      <p className="tracking-wide font-bold">{errorLog}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;