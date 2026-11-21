import { cn } from "../ui/cn";
import Eyebrow from "../ui/Eyebrow";
import ResponsiveImage from "../ui/ResponsiveImage";

const columnMap = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
};

const sizeMap = {
  2: "(min-width: 640px) 50vw, 100vw",
  3: "(min-width: 640px) 33vw, 50vw",
  4: "(min-width: 1024px) 25vw, 50vw",
};

// One gallery for every case study. Existing label/desc pairs are preserved;
// the alt text combines them so a screen-reader user hears what the screen
// shows rather than just its name.
export default function ScreenshotGallery({
  screenshots,
  onSelect,
  columns = 3,
  title = "Screenshots",
  caption,
  className,
}) {
  if (!screenshots?.length) return null;

  return (
    <div className={cn("space-y-5", className)}>
      <div className="flex items-end justify-between gap-4">
        <Eyebrow as="h2" tone="accent" dot={false} rule={false}>
          {title}
        </Eyebrow>
        {caption && (
          <p className="text-right text-label tracking-normal text-slate-500">{caption}</p>
        )}
      </div>

      <div className={cn("grid gap-3 sm:gap-4", columnMap[columns] || columnMap[3])}>
        {screenshots.map((screen) => {
          const alt =
            screen.alt ||
            `${screen.label} screenshot${screen.desc ? ` — ${screen.desc}` : ""}`;
          const content = (
            <>
              <ResponsiveImage
                image={screen.src}
                alt={alt}
                sizes={sizeMap[columns] || sizeMap[3]}
                loading="lazy"
                className="h-40 w-full object-cover object-top opacity-80 transition-all duration-300 group-hover:opacity-100 sm:h-48"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="text-small font-semibold text-paper">{screen.label}</p>
                {screen.desc && (
                  <p className="mt-0.5 line-clamp-2 text-label tracking-normal text-slate-400">
                    {screen.desc}
                  </p>
                )}
              </div>
            </>
          );

          const classes = cn(
            "group relative overflow-hidden rounded-xl border border-border bg-surface text-left",
            onSelect &&
              "transition-colors hover:border-accent-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
          );

          return onSelect ? (
            <button
              key={`${screen.label}-${screen.src?.src || screen.src}`}
              type="button"
              onClick={() => onSelect(screen)}
              aria-label={`Open ${screen.label} screenshot`}
              className={classes}
            >
              {content}
            </button>
          ) : (
            <figure key={`${screen.label}-${screen.src?.src || screen.src}`} className={classes}>
              {content}
            </figure>
          );
        })}
      </div>
    </div>
  );
}
