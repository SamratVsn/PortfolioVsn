import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import Himanshu from '../assets/image.png'
import Anish from '../assets/Anish.jpg'
import Ankit from '../assets/Ankit.jpg' 

export default function Testimonials() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    review: "",
    rating: 5
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingClick = (rating) => {
    setFormData({ ...formData, rating });
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.position.trim() !== '' &&
      formData.review.trim() !== '' &&
      formData.rating > 0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    
    setSending(true);
    
    const emailData = {
      name: formData.name,
      email: formData.email,
      position: formData.position,
      rating: formData.rating,
      review: formData.review,
    };
    
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
          setFormData({ 
            name: '', 
            email: '', 
            position: '',
            review: '',
            rating: 5 
          });
          setTimeout(() => setSent(false), 6000);
        },
        (err) => {
          setSending(false);
          alert('Oops! Something went wrong. Please reload & try again!');
          console.log(err);
        }
      );
  };

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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mb-20">
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
                className="h-full bg-slate-800/80 backdrop-blur-md border border-sky-500/30 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-sky-500/30 transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-400/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-sky-400/30 text-6xl font-serif leading-none">
                  "
                </div>

                {/* Quote */}
                <div className="relative z-10 flex-1 mb-6">
                  <p className="text-gray-100 leading-relaxed text-sm">
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
                        className="w-14 h-14 rounded-full object-cover border-2 border-sky-400/70 shadow-lg"
                      />
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-full bg-sky-400/0 group-hover:bg-sky-400/30 transition-colors duration-300" />
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base group-hover:text-sky-300 transition-colors duration-300">
                      {t.author}
                    </h4>
                    <p className="text-xs text-gray-300">{t.position}</p>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-6"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-3">
              Leave a Review
            </h3>
            <p className="text-gray-300">
              Share your review about me
            </p>
          </div>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800/90 backdrop-blur-md border border-sky-500/40 p-8 md:p-10 rounded-3xl shadow-xl"
          >
            <div className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sky-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/60 border border-sky-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sky-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/60 border border-sky-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all"
                    placeholder="Someone@example.com"
                  />
                </div>
              </div>

              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-sky-300 mb-2">
                  Your Position / Role *
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/60 border border-sky-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all"
                  placeholder="Your Job Title or Role"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-sky-300 mb-3">
                  Your Rating *
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-4xl focus:outline-none transition-all"
                    >
                      <span
                        className={`${
                          star <= (hoveredStar || formData.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-600'
                        }`}
                      >
                        ★
                      </span>
                    </motion.button>
                  ))}
                  <span className="ml-3 text-gray-300 self-center">
                    {formData.rating} / 5
                  </span>
                </div>
              </div>

              {/* Review */}
              <div>
                <label htmlFor="review" className="block text-sm font-medium text-sky-300 mb-2">
                  Your Review *
                </label>
                <textarea
                  id="review"
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-700/60 border border-sky-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all resize-none"
                  placeholder="Share your review about me..."
                ></textarea>
              </div>

              {/* Message Display */}
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-green-500/20 border border-green-400/30 text-green-300"
                >
                  Thank you for your review! It has been sent to me.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={sending || !isFormValid()}
                whileHover={isFormValid() ? { scale: 1.02 } : {}}
                whileTap={isFormValid() ? { scale: 0.98 } : {}}
                className={`w-full py-4 px-6 font-semibold rounded-xl shadow-lg transition-all duration-300 ${
                  isFormValid() && !sending
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:shadow-xl hover:shadow-sky-500/30 cursor-pointer'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-60'
                }`}
              >
                {sending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Submit Review"
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}