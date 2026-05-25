import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowLeft, ArrowUpRight } from 'lucide-react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SEO from '../Components/SEO'
import BrandLogo from '../assets/Brand-Logo.png'
import blogs from '../data/blogs'

function BlogPost() {
  const { slug } = useParams()
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#020617] text-slate-300 font-sans flex flex-col items-center justify-center">
        <p className="font-mono text-sm text-slate-500">Blog post not found.</p>
        <Link to="/blog" className="mt-4 font-mono text-xs text-[#2DD4BF] hover:underline">[Return_To_Blog_Stream]</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#2DD4BF]/20 selection:text-[#2DD4BF]">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <img src={BrandLogo} alt="" className="w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] object-contain" />
      </div>
      <SEO
        title={`${blog.title} | Samrat Parajuli`}
        description={blog.excerpt}
        ogUrl={`https://www.samratparajuli0.com.np/blog/${blog.slug}`}
      />
      <Header />
      <div className="pt-[65px] flex flex-col">
        <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] text-slate-500 hover:text-[#2DD4BF] transition-colors mb-6 sm:mb-10"
          >
            <ArrowLeft size={12} />
            [Return_To_Blog_Stream]
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[10px] font-mono text-slate-600">
                <span className="flex items-center gap-1">
                  <Calendar size={10} />
                  {blog.date}
                </span>
                <span className="text-slate-800">|</span>
                <span className="text-[#2DD4BF]/50">NODE_{blog.id}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">
                {blog.title}
              </h1>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] text-slate-600 bg-slate-950 border border-slate-900/40 px-1.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-900 pt-6 sm:pt-8 space-y-5 sm:space-y-6">
              {blog.content.map((block, i) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={i} className="text-lg font-bold font-mono text-slate-200 pt-4">
                      {block.text}
                    </h2>
                  )
                }
                if (block.type === "code") {
                  return (
                    <pre key={i} className="bg-slate-950 border border-slate-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
                      <code className="text-xs font-mono text-[#2DD4BF] leading-relaxed whitespace-pre">
                        {block.text}
                      </code>
                    </pre>
                  )
                }
                return (
                  <p key={i} className="text-sm font-mono text-slate-400 leading-relaxed">
                    {block.text}
                  </p>
                )
              })}
            </div>

            <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-mono text-[11px] text-slate-500 hover:text-[#2DD4BF] transition-colors"
              >
                <ArrowLeft size={12} />
                [Return_To_Blog_Stream]
              </Link>

              {blogs.length > 1 && (
                <div className="flex gap-4 text-[11px] font-mono">
                  {blogs.findIndex((b) => b.slug === slug) > 0 && (
                    <Link
                      to={`/blog/${blogs[blogs.findIndex((b) => b.slug === slug) - 1].slug}`}
                      className="flex items-center gap-1 text-slate-500 hover:text-[#2DD4BF] transition-colors"
                    >
                      <ArrowLeft size={12} />
                      [Prev_Entry]
                    </Link>
                  )}
                  {blogs.findIndex((b) => b.slug === slug) < blogs.length - 1 && (
                    <Link
                      to={`/blog/${blogs[blogs.findIndex((b) => b.slug === slug) + 1].slug}`}
                      className="flex items-center gap-1 text-slate-500 hover:text-[#2DD4BF] transition-colors"
                    >
                      [Next_Entry]
                      <ArrowUpRight size={12} />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default BlogPost
