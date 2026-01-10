import { motion } from "framer-motion";
import Himanshu from '../assets/image.png'
import Anish from '../assets/Anish.jpg'
import Ankit from '../assets/Ankit.jpg'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Samrat is a seeker. What I admire most is his curiosity and willingness to keep improving. He doesn’t just code; he builds from what he learns.",
      author: "Himanshu Mishra",
      position: "Freelance Web Developer",
      photo: Himanshu,
    },
    {
      quote: "He approaches every task with creativity and a problem-solving mindset. His passion for technology is clear and his growth is consistent.",
      author: "Anish Sah",
      position: "Cyber-Security Enthusiast",
      photo: Anish,
    },
    {
      quote: "A dedicated developer who solves complex problems while maintaining clean, organized code. A dependable and valuable collaborator.",
      author: "Ankit",
      position: "Video Editor | Colleague",
      photo: Ankit,
    },
  ];

  return (
    <section className="py-24 bg-[#0F172A] border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header - Matching our previous sections */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-slate-100 text-3xl font-mono tracking-tighter"
          >
            Collective Perspective<span className="text-[#2DD4BF]">_</span>
          </motion.h2>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mt-2">
            // Feedback from peers and collaborators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800/50 border border-slate-800 rounded-2xl overflow-hidden">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0F172A] p-8 md:p-10 flex flex-col h-full group transition-all duration-500 hover:bg-[#111c33]"
            >
              {/* Spiritual/Tech Detail: The Opening Quote Mark */}
              <div className="font-mono text-[#2DD4BF] text-3xl opacity-20 mb-4 transition-opacity group-hover:opacity-100">
                “
              </div>

              <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base mb-8 italic flex-grow">
                {t.quote}
              </p>

              <div className="flex items-center gap-4 border-t border-slate-800/50 pt-6 mt-auto">
                <div className="relative cursor-pointer">
                  <img
                    src={t.photo}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-slate-700 group-hover:border-[#2DD4BF]"
                  />
                  {/* Subtle 'online' or 'verified' status dot */}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#2DD4BF] rounded-full border-2 border-[#0F172A]" />
                </div>
                
                <div>
                  <h4 className="font-mono font-semibold text-slate-100 text-sm tracking-tight">{t.author}</h4>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-[#2DD4BF]/70 transition-colors">
                    {t.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}