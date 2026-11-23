import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowUpRight, FolderOpen, Sparkles, Download } from "lucide-react";
import PageHeader from "./PageHeader";
import SectionHeading from "./SectionHeading";
import CategoryFilter from "./CategoryFilter";
import ResponsiveImage from "./ui/ResponsiveImage";
import Container from "./ui/Container";
import Tag from "./ui/Tag";
import StatusPill from "./ui/StatusPill";
import { PROJECTS, TIERS, screenshots } from "../data/projects";

const CATEGORIES = ["All", "Android", "Web", "C", "Experiments"];

/* -- small building blocks --------------------------------------------------- */

function CategoryChip({ category }) {
  return (
    <Tag className="absolute left-5 top-4 border-border bg-canvas/80 font-mono uppercase tracking-widest text-slate-300">
      {category}
    </Tag>
  );
}

function NewBadge() {
  return (
    <StatusPill tone="accent" className="absolute right-4 top-4" dot={false}>
      <Sparkles size={9} aria-hidden="true" />
      New
    </StatusPill>
  );
}

function TagsRow({ tags }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag, i) => (
        <Tag key={tag} dot dotIndex={i}>
          {tag}
        </Tag>
      ))}
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="relative z-20 flex min-h-6 min-w-6 items-center justify-center gap-1.5 rounded text-small text-slate-400 transition-colors hover:text-accent-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
          title="View source code on GitHub"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <Github size={14} aria-hidden="true" />
          <span className="hidden sm:inline">Code</span>
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="relative z-20 flex min-h-6 min-w-6 items-center justify-center gap-1.5 rounded text-small text-slate-400 transition-colors hover:text-accent-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
          title="View live project"
          aria-label={`Visit ${project.title} live site`}
        >
          <ExternalLink size={14} aria-hidden="true" />
          <span className="hidden sm:inline">Live</span>
        </a>
      )}
      {project.download && (
        <a
          href={project.download}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="relative z-20 flex min-h-6 min-w-6 items-center justify-center gap-1.5 rounded text-small text-slate-400 transition-colors hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
          title={`Download ${project.title} APK`}
          aria-label={`Download ${project.title} APK`}
        >
          <Download size={14} aria-hidden="true" />
          <span className="hidden sm:inline">APK</span>
        </a>
      )}
      <div className="flex-grow" />
      <span className="relative z-20 flex items-center gap-1 text-small text-slate-400 transition-colors duration-300 group-hover:text-accent-text">
        View details
        <ArrowUpRight size={12} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </div>
  );
}

function ProjectStatus({ project }) {
  if (!project.status) return null;
  return (
    <StatusPill
      tone={project.tier === "shipped" ? "accent" : "neutral"}
      className="mb-2 w-fit"
    >
      {project.status}
    </StatusPill>
  );
}

/* -- featured card ----------------------------------------------------------- */

function FeaturedCard({ project, wide = false, priority = false }) {
  const screenshot = screenshots[project.path];

  return (
    <article
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
          wide ? "h-56 shrink-0 sm:h-64 md:h-72 md:w-1/2 lg:h-80" : "h-48 sm:h-56"
        }`}
      >
        <ResponsiveImage
          image={screenshot}
          alt={`Preview of ${project.title}`}
          sizes={wide ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/40 to-surface/90" />
        <CategoryChip category={project.category} />
        {project.isNew && <NewBadge />}
      </div>

      <div className={`flex flex-1 flex-col ${wide ? "p-6 sm:p-8" : "p-6"}`}>
        <ProjectStatus project={project} />
        <h3
          className={`mb-2 font-semibold text-paper transition-colors duration-300 group-hover:text-accent-soft ${
            wide ? "text-h2" : "text-h3"
          }`}
        >
          {project.title}
        </h3>
        <p className={`mb-4 text-body text-slate-400 ${wide ? "max-w-lg" : ""}`}>
          {project.thesis}
        </p>
        <div className="mb-5">
          <TagsRow tags={project.tags} />
        </div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

/* -- compact card ------------------------------------------------------------ */

function ProjectCard({ project }) {
  const screenshot = screenshots[project.path];

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-300 hover:border-accent-border focus-within:border-accent-border"
    >
      <Link
        to={project.path}
        className="absolute inset-0 z-10 rounded-2xl"
        aria-label={`View project: ${project.title}`}
      />

      <div className="relative h-40 overflow-hidden sm:h-44">
        <ResponsiveImage
          image={screenshot}
          alt={`Preview of ${project.title}`}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/40 to-surface/90" />
        <CategoryChip category={project.category} />
        {project.isNew && <NewBadge />}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <ProjectStatus project={project} />
        <h3 className="mb-2 text-h4 font-semibold text-paper transition-colors duration-300 group-hover:text-accent-soft">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-small text-slate-400">
          {project.thesis}
        </p>
        <div className="mb-4">
          <TagsRow tags={project.tags} />
        </div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

/* -- page -------------------------------------------------------------------- */

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  const matches = (project) =>
    activeCategory === "All" || project.category === activeCategory;

  const tiers = TIERS.map((tier) => ({
    ...tier,
    projects: PROJECTS.filter(
      (project) => project.tier === tier.id && matches(project)
    ),
  }));

  const hasAny = tiers.some((tier) => tier.projects.length > 0);
  const shownCount = tiers.reduce((total, tier) => total + tier.projects.length, 0);

  return (
    <Container className="pb-6">
      <PageHeader
        eyebrow="Work"
        title={
          <>
            Projects<span className="text-accent">.</span>
          </>
        }
        description="Shipped applications first, then the systems and coursework that built the engineering behind them."
      />

      <CategoryFilter
        categories={CATEGORIES}
        active={activeCategory}
        onChange={setActiveCategory}
        label="Filter projects by category"
      />

      <p role="status" aria-live="polite" className="sr-only">
        {shownCount} {shownCount === 1 ? "project" : "projects"} shown
        {activeCategory === "All" ? "" : ` in ${activeCategory}`}.
      </p>

      {tiers.map((tier, tierIndex) => {
        if (tier.projects.length === 0) return null;

        const gridClass =
          tier.id === "foundations"
            ? "grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
            : "grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2";

        const cards = tier.projects.map((project, index) =>
          tier.id === "shipped" ? (
            <FeaturedCard
              key={project.id}
              project={project}
              wide={index === 0}
              priority={tierIndex === 0 && index === 0}
            />
          ) : (
            <ProjectCard key={project.id} project={project} />
          )
        );

        return (
          <section
            key={tier.id}
            className={tierIndex < tiers.length - 1 ? "mb-14 sm:mb-16" : ""}
            aria-labelledby={`tier-${tier.id}`}
          >
            <SectionHeading
              id={`tier-${tier.id}`}
              eyebrow={tier.eyebrow}
              title={tier.title}
              subtitle={tier.subtitle}
            />

            <div
              key={`${tier.id}-${activeCategory}`}
              className={`${gridClass}${hasMounted.current ? " grid-enter" : ""}`}
            >
              {cards}
            </div>
          </section>
        );
      })}

      {!hasAny && (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border px-6 py-20 text-center">
          <FolderOpen size={28} className="mb-4 text-slate-400" aria-hidden="true" />
          <p className="mb-1 text-small font-medium text-paper">Nothing here yet</p>
          <p className="max-w-sm text-small text-slate-400">
            I haven't published anything in this category yet. Check back soon.
          </p>
        </div>
      )}
    </Container>
  );
}
