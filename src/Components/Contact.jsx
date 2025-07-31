import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaGoogle,
  FaFacebook
} from 'react-icons/fa';

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen fixed w-full py-20 px-4 pb-[70px] bg-[#0f1419] text-white text-center overflow-hidden">
      {/* Radial Glow Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_30%,rgba(0,212,255,0.12)_0%,transparent_50%)]" />

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto rounded-2xl bg-white/5 backdrop-blur-md p-10 sm:p-14 border border-white/10 shadow-xl hover:shadow-2xl transition duration-500"
      >
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 inline-block bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">
          Connect With Me
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full text-base sm:text-lg hover:text-sky-400 transition duration-300">
            <FaPhoneAlt className="w-5 h-5" />
            <span>+977 9847313479</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full text-base sm:text-lg hover:text-sky-400 transition duration-300">
            <FaEnvelope className="w-5 h-5" />
            <span>std.samrat068@gmail.com</span>
          </div>
        </div>

        {/* Social Media Links */}
        <ul className="flex flex-wrap justify-center gap-10 mb-10">
          {[
            {
              icon: <FaLinkedin size={40} className="text-[#0A66C2]" />,
              label: 'LinkedIn',
              link: 'https://www.linkedin.com/in/samrat-parajuli-54310732b/',
            },
            {
              icon: <FaGithub size={40} className="text-[#181717]" />,
              label: 'GitHub',
              link: 'https://github.com/SamratVsn',
            },
            {
              icon: <FaGoogle size={40} className="text-[#4285F4]" />,
              label: 'Google Dev',
              link: 'https://developers.google.com/profile/u/Samrat_vsn',
            },
            {
              icon: <FaFacebook size={40} className="text-[#1877F2]" />,
              label: 'Facebook',
              link: 'https://www.facebook.com/samrat.parajuli.9615',
            },
          ].map(({ icon, label, link }, i) => (
            <li key={i} className="group hover:-translate-y-1 transition-transform duration-300">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 px-5 py-4 bg-white/10 rounded-xl text-white hover:text-sky-400 hover:bg-white/20 transition duration-300"
              >
                <div className="transition-transform group-hover:scale-110 group-hover:rotate-3">
                  {icon}
                </div>
                <span className="text-sm sm:text-base">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <p className="text-white/60 text-sm sm:text-base mt-10 font-light">
          &copy; {year} <span className="text-white/80 font-semibold">SamratVsn</span>. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
