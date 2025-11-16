import { React, useState } from 'react'
import Header from '../Components/Header'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaLocationDot, FaSquareGithub } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import emailjs from 'emailjs-com';
import Footer from '../Components/Footer';

function Contact() {
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
      .then(
        () => {
          setSending(false);
          setSent(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSent(false), 6000)
        },
        (err) => {
          setSending(false);
          alert(`Oops! Something went wrong. Please reload & try again!`);
          console.log(err);
        }
      )
  };

  const contactInfo = [
    {
      id: 'phone',
      icon: FaPhone,
      label: 'Phone',
      value: '+977 9847313479',
      link: 'tel:+9779847313479',
      color: 'from-green-400 to-emerald-500',
      description: 'Call me anytime'
    },
    {
      id: 'email',
      icon: MdMarkEmailRead,
      label: 'Email',
      value: 'std.samrat068@gmail.com',
      link: 'mailto:std.samrat068@gmail.com',
      color: 'from-red-400 to-rose-500',
      description: 'Send me a message'
    },
    {
      id: 'location',
      icon: FaLocationDot,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      link: 'https://maps.google.com/?q=Kathmandu,Nepal',
      color: 'from-orange-400 to-amber-500',
      description: 'Where I\'m based'
    },
    {
      id: 'github',
      icon: FaSquareGithub,
      label: 'GitHub',
      value: 'SamratVsn',
      link: 'https://github.com/SamratVsn',
      color: 'from-purple-400 to-violet-500',
      description: 'Check out my code'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white">
      <Header />
      <div className="mt-[70px] w-full py-12 sm:py-16 px-6 sm:px-10 md:px-16 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600 drop-shadow-md hover:scale-105 transition-transform duration-300"
        >
          Contact Me
        </motion.h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {contactInfo.map((contact) => {
            const Icon = contact.icon;
            return (
              <motion.div key={contact.id} variants={itemVariants} whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }} className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 overflow-hidden transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className='flex items-start justify-between mb-4'>
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${contact.color} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-600 transition-all duration-300">{contact.label}</h3>
                  <p className="text-gray-300 text-sm mb-3">{contact.description}</p>
                  <a href={contact.link} target={contact.id === 'location' || contact.id === 'github' ? '_blank' : '_self'} rel={contact.id === 'location' || contact.id === 'github' ? 'noopener noreferrer' : undefined}>{contact.value}</a>
                </div>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <div className='max-w-4xl mx-auto mt-12'>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-lg">
        <h3 className='text-lg sm:text-xl font-semibold text-cyan-400'>Send me a message</h3>
        <p className="text-gray-300 mt-2 text-sm sm:text-base">Reach out via contact, email or fill the form</p>
        <form className='mt-4 space-y-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input type="text" name="name" id='name' value={formData.name} onChange={handleChange} required className='mt-1 block w-full border-gray-600 bg-[#0f172a] rounded-md shadow-sm focus:ring-cyan-400 focus:border-cyan-400 p-2 text-white' />
          </div>
          <div>
            <label htmlFor="email" className='block text-sm font-medium text-gray-300'>Email</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className='mt-1 block w-full border-gray-600 bg-[#0f172a] rounded-md shadow-sm focus:ring-cyan-400 focus:border-cyan-400 p-2 text-white' />
          </div>
          <div>
            <label htmlFor="message" className='block text-sm font-medium text-gray-300'>Message</label>
            <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required className="mt-1 block w-full border-gray-600 bg-[#0f172a] rounded-md shadow-sm focus:ring-cyan-400 focus:border-cyan-400 p-2 text-white" />
          </div>
          <motion.button type='submit' whileHover={{ scale: 1.05, boxShadow: '0 0 20px #22d3ee' }} whileTap={{ scale: 0.95 }} className={`w-full py-2 px-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md focus:outline-none ${sending ? 'opacity-70 cursor-not-allowed' : ''}`} disabled={sending}>
            {sending ? 'Sending....' : 'Send Message'}
          </motion.button>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-green-400 text-center mt-2 font-medium"
              >
                ✅ Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </form> 
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
