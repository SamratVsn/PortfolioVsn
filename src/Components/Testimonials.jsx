  import { motion } from "framer-motion";
  import Himanshu from '../assets/image.png'
  import Anish from '../assets/Anish.jpg'
  import Ankit from '../assets/Ankit.jpg'

  export default function Testimonials() {
    const testimonials = [
      {
        quote:
          "Samrat is a great friend and someone I’ve really seen grow in the tech world. What I admire most about him is his curiosity and willingness to keep improving himself. He’s always excited to try new things and build something from what he learns. Even though he’s still learning, you can tell he has a real passion for technology and development. I’m sure he’ll do really well as he keeps moving forward on this path.",
        author: "Himanshu Mishra",
        position: "Freelance Web Developer | Friend",
        photo: Himanshu,
        rating: 5,
      },
      {
        quote:
          "Samrat is a highly dedicated and talented tech professional. I admire his curiosity, problem-solving mindset, and willingness to help others. He approaches every task with creativity and professionalism, and his passion for technology is clear. He’s always eager to learn and take on new challenges, which makes him a joy to work with. I’m confident he’ll continue to grow and achieve great things in the tech world.",
        author: "Anish Sah",
        position: "Tech Enthusiast | Friend",
        photo: Anish,
        rating: 5,
      },
      {
        quote:
          "I have had the pleasure of knowing Samrat as a dedicated and skilled developer. His hard work and commitment to excellence consistently shine through in every project he undertakes. He has a great ability to solve complex problems efficiently while maintaining clean, well-organized code. His passion for development and continuous learning makes him a dependable and valuable collaborator. I wholeheartedly recommend him for any development role or project.",
        author: "Ankit ",
        position: "Video Editor | Friend | Colleague",
        photo: Ankit,
        rating: 5,
      },
    ];

    return (
      <section className="py-24 text-white">
        <h2 className="text-4xl font-bold text-center mb-16">Experts Testimonials</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                scale: 1.04,
                y: -5,
                boxShadow: "0 0 35px rgba(56, 189, 248, 0.5)",
              }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-lg transition-all cursor-pointer"
            >
              {/* Quote */}
              <p className="text-blue-100 italic leading-relaxed text-base mb-6">
                “{t.quote}”
              </p>

              {/* Rating */}
              <div className="flex text-yellow-400 text-lg mb-4">
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.photo}
                  alt={t.author}
                  className="w-14 h-14 rounded-full object-cover border border-white/30"
                />
                <div>
                  <h4 className="font-semibold text-white text-lg">{t.author}</h4>
                  <p className="text-sm text-blue-200">{t.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }
