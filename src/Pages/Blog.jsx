import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SEO from '../Components/SEO'
import BrandLogo from '../assets/Brand-Logo.png'
import blogs from '../data/blogs'

function Blog() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#2DD4BF]/20 selection:text-[#2DD4BF]">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <img src={BrandLogo} alt="" className="w-[500px] h-[500px] object-contain" />
      </div>
      <SEO
        title="Blog | Samrat Parajuli"
        description="Technical blog posts on Android development, Kotlin, system architecture, and software engineering."
        ogUrl="https://www.samratparajuli0.com.np/blog"
      />
      <Header />
      <div className="pt-[65px] flex flex-col">
        <div className="relative min-h-[30vh] sm:min-h-[40vh] flex flex-col items-center justify-center px-4 border-b border-slate-900">
          <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(45,212,191,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#2DD4BF]/[0.02] rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 border border-[#2DD4BF]/20 bg-[#2DD4BF]/5 px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest text-[#2DD4BF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-ping" />
              BLOG_STREAM
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-black tracking-tighter text-white"
            >
              Vsn Blogs<span className="text-[#2DD4BF]">_</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-slate-500 font-mono max-w-xl"
            >
              Publishing technical log streams on Android runtime architecture, Kotlin internals & systems engineering
            </motion.p>
          </div>
        </div>

        <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-12 sm:py-20">
          {blogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-600 font-mono text-sm">No blog posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 sm:gap-6">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="group block bg-slate-950/20 border border-slate-900 rounded-lg p-4 sm:p-6 hover:border-slate-800 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3 text-[10px] font-mono text-slate-600">
                          <span className="flex items-center gap-1">
                            <Calendar size={10} />
                            {blog.date}
                          </span>
                          <span className="text-slate-800">|</span>
                          <span className="text-[#2DD4BF]/50">NODE_{blog.id}</span>
                        </div>

                        <h2 className="font-mono text-base font-bold text-slate-200 group-hover:text-[#2DD4BF] transition-colors">
                          {blog.title}
                          <span className="inline-block animate-pulse ml-1 opacity-0 group-hover:opacity-100">_</span>
                        </h2>

                        <p className="text-xs font-mono text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                          {blog.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {blog.tags.map((tag) => (
                            <span key={tag} className="font-mono text-[10px] text-slate-600 bg-slate-950 border border-slate-900/40 px-1.5 py-0.5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <ArrowUpRight size={16} className="text-slate-700 group-hover:text-[#2DD4BF] transition-colors shrink-0 mt-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Blog