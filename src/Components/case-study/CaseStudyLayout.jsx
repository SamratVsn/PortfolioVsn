import { cn } from "../ui/cn";
import Container from "../ui/Container";
import Breadcrumb from "./Breadcrumb";
import CaseStudyHeader from "./CaseStudyHeader";

// Shared case-study shell: one container, one breadcrumb, one h1, and the same
// 2/1 body-and-aside grid on every project. The page-specific content and
// sidebar are passed in; nothing about the narrative is templated.
export default function CaseStudyLayout({
  breadcrumb,
  children,
  aside,
  banner,
  footer,
  className,
  ...headerProps
}) {
  return (
    <div className={cn("pb-16", className)}>
      <Container className="pt-8 sm:pt-10">
        <Breadcrumb items={breadcrumb} />
        <CaseStudyHeader {...headerProps} />
        {banner && <div className="mb-10">{banner}</div>}

        <div
          className={cn(
            "grid grid-cols-1 gap-10 lg:gap-12",
            aside && "lg:grid-cols-3"
          )}
        >
          <div className={cn("min-w-0 space-y-12", aside && "lg:col-span-2")}>
            {children}
          </div>
          {aside && (
            <aside aria-label="Project details" className="space-y-6 lg:col-span-1">
              {aside}
            </aside>
          )}
        </div>

        {footer && <div className="mt-12">{footer}</div>}
      </Container>
    </div>
  );
}
