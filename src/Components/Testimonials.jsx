import { motion } from "framer-motion";
import Himanshu from '../assets/image.png'
import Anish from '../assets/Anish.jpg'
import Ankit from '../assets/Ankit.jpg' 

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Samrat is a great friend and someone I've really seen grow in the tech world. What I admire most about him is his curiosity and willingness to keep improving himself. He's always excited to try new things and build something from what he learns. Even though he's still learning, you can tell he has a real passion for technology and development. I'm sure he'll do really well as he keeps moving forward on this path.",
      author: "Himanshu Mishra",
      position: "Freelance Web Developer",
      photo: Himanshu,
      rating: 5,
    },
    {
      quote:
        "Samrat is a highly dedicated and talented tech professional. I admire his curiosity, problem-solving mindset, and willingness to help others. He approaches every task with creativity and professionalism, and his passion for technology is clear. He's always eager to learn and take on new challenges, which makes him a joy to work with. I'm confident he'll continue to grow and achieve great things in the tech world.",
      author: "Anish Sah",
      position: "Tech Enthusiast",
      photo: Anish,
      rating: 5,
    },
    {
      quote:
        "I have had the pleasure of knowing Samrat as a dedicated and skilled developer. His hard work and commitment to excellence consistently shine through in every project he undertakes. He has a great ability to solve complex problems efficiently while maintaining clean, well-organized code. His passion for development and continuous learning makes him a dependable and valuable collaborator. I wholeheartedly recommend him for any development role or project.",
      author: "Ankit",
      position: "Video Editor | Colleague",
      photo: Ankit,
      rating: 5,
    },
  ];

  return (
    <section className="py-24 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-sky-500/20 border border-sky-400/30 rounded-full text-sky-300 text-sm font-medium">
              What People Say
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Testimonials
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Feedback from colleagues and friends who've worked with me
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-sky-400/20 text-6xl font-serif leading-none">
                  "
                </div>

                {/* Quote */}
                <div className="relative z-10 flex-1 mb-6">
                  <p className="text-blue-100 leading-relaxed text-sm">
                    {t.quote}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 + idx * 0.05 }}
                      className={`text-lg ${
                        idx < t.rating ? 'text-yellow-400' : 'text-gray-600'
                      }`}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent mb-5" />

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <img
                        src={t.photo}
                        alt={t.author}
                        className="w-14 h-14 rounded-full object-cover border-2 border-sky-400/50 shadow-lg"
                      />
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-full bg-sky-400/0 group-hover:bg-sky-400/20 transition-colors duration-300" />
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base group-hover:text-sky-300 transition-colors duration-300">
                      {t.author}
                    </h4>
                    <p className="text-xs text-blue-200/80">{t.position}</p>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}