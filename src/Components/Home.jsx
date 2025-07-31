import homeImg from '../assets/Home1.png';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import portfolioImg from '../assets/Portfolio1.jpg';
import homeBack from '../assets/homeBack.png';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="min-h-screen pt-[70px] flex items-center bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${homeImg})` }}
      >
        <div className="w-[90%] max-w-[1200px] mx-auto py-10 px-4 flex flex-col lg:flex-row items-center lg:justify-around gap-12 lg:gap-12 text-white bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-3xl">
          {/* LEFT: TEXT */}
          <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10"
            >
              <div className="font-bold leading-tight mb-4">
                <span className="block text-[1rem] text-[#b3b3b3] font-normal mb-2">Hello I'm</span>
                <span className="block text-3xl sm:text-4xl md:text-5xl bg-gradient-to-br from-[#0080ff] to-[#00e673] bg-clip-text text-transparent animate-glow">
                  Samrat Parajuli
                </span>
                <span className="block text-xl sm:text-2xl text-[#808080] font-semibold mt-2">Tech Enthusiast from Nepal</span>
                <p className="mt-2 text-sm sm:text-lg text-[#b3b3b3] font-mono">
                  <Typewriter
                    words={['Student', 'Developer', 'Tech Explorer']}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                <Link
                  to="/About"
                  className="text-sm sm:text-base inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 border-[#0080ff] bg-[#0080ff] text-white hover:bg-transparent hover:text-[#0080ff] hover:shadow-[0_0_20px_#0080ff] transition-all duration-300"
                >
                  <FaUser /> About Me
                </Link>
                <Link
                  to="/Contact"
                  className="text-sm sm:text-base inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 border-[#33394a] bg-transparent text-[#f2f2f2] hover:border-[#00e673] hover:text-[#00e673] hover:shadow-[0_0_20px_#00e673] transition-all duration-300"
                >
                  <FaEnvelope /> Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80">
              <div
                className="absolute inset-0 rounded-[23px] opacity-70 blur-[10px]"
                style={{
                  background: 'linear-gradient(45deg, #0080ff, #00e673, #8a2be2)',
                  zIndex: -1,
                }}
              ></div>
              <div className="relative w-full h-full rounded-[20px] overflow-hidden border-3 border-[#0080ff] shadow-[0_20px_60px_rgba(0,0,0,0.3)] group">
                <img
                  src={portfolioImg}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div
        className="min-h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover px-4 py-10 text-white text-center"
        style={{ backgroundImage: `url(${homeBack})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-sky-400 via-blue-600 to-blue-500 bg-clip-text text-transparent font-bold">
            Know me More
          </h1>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/Skills"
              className="px-6 py-3 rounded-full bg-blue-500 transition text-white text-base shadow-lg hover:bg-transparent hover:shadow-[0_0_50px_#0080ff]"
            >
              My Skills
            </Link>
            <Link
              to="/Projects"
              className="px-6 py-3 rounded-full bg-blue-500 transition hover:bg-transparent text-white text-base shadow-lg hover:shadow-[0_0_50px_#0080ff]"
            >
              Projects
            </Link>
          </div>

          {/* Icons */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-3xl sm:text-4xl text-cyan-400">
            <FaHtml5 className="cursor-pointer hover:scale-110 transition-all duration-300 hover:text-blue-500" title="HTML5" />
            <FaCss3Alt className="cursor-pointer hover:scale-110 transition-all duration-300 hover:text-blue-500" title="CSS3" />
            <FaJs className="cursor-pointer hover:scale-110 transition-all duration-300 hover:text-blue-500" title="JavaScript" />
            <FaReact className="cursor-pointer hover:scale-110 transition-all duration-300 hover:text-blue-500" title="React" />
            <FaGithub className="cursor-pointer hover:scale-110 transition-all duration-300 hover:text-blue-500" title="GitHub" />
          </div>

          {/* Quote */}
          <div className="mt-10 max-w-xl mx-auto px-2">
            <p className="italic text-lg sm:text-xl text-cyan-400">
              “Code is like poetry — each line a story, each function a rhythm.”
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
