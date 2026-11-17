import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowUpRight, FolderOpen, Sparkles, Download } from "lucide-react";
import PageHeader from "./PageHeader";
import SectionHeading from "./SectionHeading";
import CategoryFilter from "./CategoryFilter";
import { PROJECTS, screenshots } from "../data/projects";

const CATEGORIES = ["All", "Android", "Web", "C", "Experiments"];
const TAG_DOT_COLORS = ["var(--p-accent-soft)", "var(--p-sand)", "var(--p-terra)"];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ── small building blocks ─────────────────────────────────────────────────── */

function CategoryChip({ category }) {
  return (
    <span className="absolute left-5 top-4 inline-flex items-center rounded-md border border-border bg-canvas/80 px-2 py-0.5 text-[9px] font-mono font-medium uppercase tracking-widest text-slate-300">
      {category}
    </span>
  );
}

function NewBadge() {
  return (
    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-md border border-accent-border bg-accent-muted px-2 py-0.5 text-[9px] font-mono font-semibold uppercase tracking-widest text-accent-soft">
      <Sparkles size={9} />
      New
    </span>
  );
}

function TagsRow({ tags }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag, i) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1.5 text-[10px] text-slate-400 bg-surface/40 border border-border px-2.5 py-1 rounded-full transition-colors duration-300 group-hover:border-border"
        >
          <span
            className="w-1 h-1 rounded-full shrink-0"
            style={{ backgroundColor: TAG_DOT_COLORS[i % 3] }}
          />
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="mt-auto flex items-center gap-3 pt-4 border-t border-border">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-slate-400 hover:text-accent transition-colors flex items-center gap-1.5 relative z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
          title="View source code on GitHub"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <Github size={14} />
          <span className="text-xs hidden sm:inline">Code</span>
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-slate-400 hover:text-accent transition-colors flex items-center gap-1.5 relative z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded"
          title="View live project"
          aria-label={`Visit ${project.title} live site`}
        >
          <ExternalLink size={14} />
          <span className="text-xs hidden sm:inline">Live</span>
        </a>
      )}
      {project.download && (
        <a
          href={project.download}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="relative z-20 flex items-center gap-1.5 rounded text-slate-400 transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          title={`Download ${project.title} APK`}
          aria-label={`Download ${project.title} APK`}
        >
          <Download size={14} />
          <span className="text-xs hidden sm:inline">APK</span>
        </a>
      )}
      <div className="flex-grow" />
      <span className="text-xs text-slate-400 group-hover:text-accent transition-colors duration-300 flex items-center gap-1 relative z-20">
        View details
        <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </div>
  );
}

/* ── status line (only rendered when a release is verified) ───────────────── */

function ProjectStatus({ project }) {
  if (!project.status) return null;
  return (
    <p className="mb-2 inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-accent-soft">
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
      {project.status}
    </p>
  );
}

/* ── featured card (larger, stronger emphasis) ─────────────────────────────── */

function FeaturedCard({ project, wide = false }) {
  const screenshot = screenshots[project.path];
  const imageLayoutId = `project-image-${project.path}`;

  return (
    <motion.article
      variants={cardVariants}
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-300 hover:border-accent-border focus-within:border-accent-border ${
        wide ? "md:col-span-2 md:flex-row lg:col-span-2" : ""
      }`}
    >
      <Link
        to={project.path}
        className="absolute inset-0 z-10 rounded-2xl"
        aria-label={`View project: ${project.title}`}
      />

      <div
        className={`relative overflow-hidden ${
          wide
            ? "h-56 sm:h-64 md:h-72 lg:h-80 md:w-1/2 shrink-0"
            : "h-48 sm:h-56"
        }`}
      >
        <motion.img
          layoutId={imageLayoutId}
          src={screenshot}
          alt={`Screenshot of the ${project.title} app`}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          style={{ willChange: "transform" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/40 to-surface/90" />
        <CategoryChip category={project.category} />
        {project.isNew && <NewBadge />}
      </div>

      <div
        className={`flex-1 flex flex-col ${
          wide ? "p-6 sm:p-8" : "p-6"
        }`}
      >
        <ProjectStatus project={project} />
        <h3
          className={`mb-2 font-semibold text-paper transition-colors duration-300 group-hover:text-accent-soft ${
            wide ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-slate-400 text-sm leading-relaxed mb-4 ${
            wide ? "max-w-lg" : ""
          }`}
        >
          {project.solution}
        </p>
        <div className="mb-5">
          <TagsRow tags={project.tags} />
        </div>
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

/* ── compact card (other projects) ─────────────────────────────────────────── */

function ProjectCard({ project }) {
  const screenshot = screenshots[project.path];
  const imageLayoutId = `project-image-${project.path}`;

  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-300 hover:border-accent-border focus-within:border-accent-border"
    >
      <Link
        to={project.path}
        className="absolute inset-0 z-10 rounded-2xl"
        aria-label={`View project: ${project.title}`}
      />

      <div className="relative h-40 sm:h-44 overflow-hidden">
        <motion.img
          layoutId={imageLayoutId}
          src={screenshot}
          alt={`Screenshot of the ${project.title} app`}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          style={{ willChange: "transform" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/40 to-surface/90" />
        <CategoryChip category={project.category} />
        {project.isNew && <NewBadge />}
      </div>

      <div className="flex-1 flex flex-col p-5">
        <ProjectStatus project={project} />
        <h3 className="mb-2 text-base font-semibold text-paper transition-colors duration-300 group-hover:text-accent-soft">
          {project.title}
        </h3>
        <p className="text-slate-400 text-[13px] leading-relaxed mb-4 line-clamp-2">
          {project.solution}
        </p>
        <div className="mb-4">
          <TagsRow tags={project.tags} />
        </div>
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

/* ── page ──────────────────────────────────────────────────────────────────── */

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const matches = (p) =>
    activeCategory === "All" || p.category === activeCategory;

  const featured = PROJECTS.filter((p) => p.featured && matches(p));
  const others = PROJECTS.filter((p) => !p.featured && matches(p));
  const hasAny = featured.length > 0 || others.length > 0;

  return (
    <div className="max-w-6xl mx-auto px-6 xl:max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] pb-6">
      <PageHeader
        eyebrow="Work"
        title={
          <>
            Projects<span className="text-accent">.</span>
          </>
        }
        description="Applications I designed, built, and shipped — then the coursework and experiments that taught me how."
      />

      <CategoryFilter
        categories={CATEGORIES}
        active={activeCategory}
        onChange={setActiveCategory}
        label="Filter projects by category"
      />

      {featured.length > 0 && (
        <section className="mb-14 sm:mb-16">
          <SectionHeading
            eyebrow="Applications"
            title="Featured Applications"
            subtitle="Original apps where product thinking, architecture, and UI decisions came together — led by Avalokan, an offline-first Android app built for Nepal."
          />
          <motion.div
            key={`featured-${activeCategory}`}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6"
          >
            {featured.map((project, i) => (
              <FeaturedCard
                key={project.id}
                project={project}
                wide={i === 0}
              />
            ))}
          </motion.div>
        </section>
      )}

      {others.length > 0 && (
        <section>
          <SectionHeading
            eyebrow="Foundations"
            title="Foundations & Coursework"
            subtitle="Course projects and experiments that built the fundamentals — kept here honestly, not presented as shipped products."
          />
          <motion.div
            key={`others-${activeCategory}`}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </section>
      )}

      {!hasAny && (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border py-20 px-6 text-center">
          <FolderOpen size={28} className="text-slate-400 mb-4" />
          <p className="text-paper text-sm font-medium mb-1">
            Nothing here yet
          </p>
          <p className="text-slate-400 text-sm max-w-sm">
            I haven't published anything in this category yet. Check back soon.
          </p>
        </div>
      )}
    </div>
  );
}