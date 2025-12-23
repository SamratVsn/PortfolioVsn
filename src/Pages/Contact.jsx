import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaLocationDot, FaSquareGithub } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { Terminal, Send, Activity, ShieldCheck, Globe } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.send(
      'service_4caks7t',
      'template_302eb9i',
      formData,
      's_DOKVIFTrfiU-5Rj'
    )
    .then(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 6000);
    })
    .catch((err) => {
      setSending(false);
      alert(`ERR_CONNECTION_FAILED: Please verify network and try again.`);
      console.error(err);
    });
  };

  const contactInfo = [
    { id: 'phone', icon: FaPhone, label: 'VOICE_LINE', value: '+977 9847313479', link: 'tel:+9779847313479', color: 'from-[#2DD4BF] to-teal-500' },
    { id: 'email', icon: MdMarkEmailRead, label: 'SECURE_MAIL', value: 'std.samrat068@gmail.com', link: 'mailto:std.samrat068@gmail.com', color: 'from-blue-400 to-indigo-600' },
    { id: 'location', icon: FaLocationDot, label: 'GEOLOCATION', value: 'Kathmandu, Nepal', link: '#', color: 'from-amber-400 to-orange-600' },
    { id: 'github', icon: FaSquareGithub, label: 'SOURCE_REPO', value: 'github.com/SamratVsn', link: 'https://github.com/SamratVsn', color: 'from-purple-400 to-violet-600' }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#2DD4BF]/30">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        {/* SECTION HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#2DD4BF] uppercase tracking-[0.3em] mb-3">
            <Activity size={12} className="animate-pulse" /> SYSTEM_CONNECTION_ESTABLISHED
          </div>
          <h1 className="text-4xl md:text-6xl font-mono font-black text-slate-100 tracking-tighter uppercase">
            Get_In_Touch<span className="text-[#2DD4BF] animate-pulse">_</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: CONTACT TERMINALS */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  whileHover={{ x: 10 }}
                  className="group relative p-6 bg-[#070d1f] border border-slate-800 rounded-xl overflow-hidden transition-all"
                >
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.color} opacity-50`} />
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform">
                      <item.icon size={20} className="text-slate-100" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{item.label}</p>
                      <p className="text-sm font-bold text-slate-200 group-hover:text-[#2DD4BF] transition-colors">{item.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* SYSTEM STATUS CARD */}
            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl font-mono text-[10px] space-y-3 text-slate-500">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2"><Globe size={12}/> SERVER_LOC</span>
                <span className="text-slate-300 uppercase">Kathmandu / ASIA</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2"><ShieldCheck size={12}/> ENCRYPTION</span>
                <span className="text-slate-300 uppercase">TLS_1.3_ACTIVE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2"><Terminal size={12}/> RESPONSE_TIME</span>
                <span className="text-slate-300 uppercase">&lt; 24 HOURS</span>
              </div>
            </div>
          </div>

          {/* RIGHT: MESSAGE UPLINK (FORM) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative p-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden"
            >
              <div className="bg-[#070d1f] p-8 md:p-10 rounded-2xl">
                <h2 className="text-xl font-mono font-bold text-slate-100 uppercase tracking-tighter mb-8 flex items-center gap-3">
                   <Send size={18} className="text-[#2DD4BF]" /> Initialize_Message_Uplink
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">IDENTIFIER.name</label>
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleChange} required 
                        className="w-full bg-[#020617] border border-slate-800 rounded-lg p-3 text-sm focus:outline-none focus:border-[#2DD4BF] transition-all"
                        placeholder="Samrat Parajuli"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">ENDPOINT.email</label>
                      <input 
                        type="email" name="email" value={formData.email} onChange={handleChange} required 
                        className="w-full bg-[#020617] border border-slate-800 rounded-lg p-3 text-sm focus:outline-none focus:border-[#2DD4BF] transition-all"
                        placeholder="Samrat@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">DATALAYER.message</label>
                    <textarea 
                      name="message" rows="5" value={formData.message} onChange={handleChange} required 
                      className="w-full bg-[#020617] border border-slate-800 rounded-lg p-3 text-sm focus:outline-none focus:border-[#2DD4BF] transition-all resize-none"
                      placeholder="Mail details..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={sending}
                    className={`w-full py-4 rounded-lg font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
                      sending 
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                      : 'bg-[#2DD4BF] text-black hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]'
                    }`}
                  >
                    {sending ? (
                      <> <Activity size={16} className="animate-spin" /> UPLOADING_ENCRYPTED_PACKET </>
                    ) : (
                      <> <Send size={16} /> EXECUTE_TRANSMISSION </>
                    )}
                  </button>

                  <AnimatePresence>
                    {sent && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-center"
                      >
                        <p className="text-green-400 text-[10px] font-mono font-bold tracking-widest uppercase">
                          ✅ DATA_RECEIVED: Message routed to primary inbox.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;