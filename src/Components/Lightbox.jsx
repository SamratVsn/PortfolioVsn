import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

// One accessible image viewer for every case study.
//
// Contract: the parent conditionally renders <Lightbox /> only while an image
// is selected. This component then:
//   · exposes role="dialog" + aria-modal + a labelled heading
//   · moves focus into the dialog and traps Tab inside it
//   · closes on Escape or a backdrop click
//   · locks background scrolling
//   · restores focus to the trigger on close
export default function Lightbox({ image, onClose }) {
  const titleId = useId();
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const restoreRef = useRef(null);
  const closeRefCallback = useRef(onClose);
  closeRefCallback.current = onClose;

  useEffect(() => {
    restoreRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        closeRefCallback.current();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const nodes = Array.from(focusable).filter(
        (node) => node.offsetParent !== null || node === document.activeElement
      );
      if (nodes.length === 0) {
        event.preventDefault();
        return;
      }

      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown, true);

    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      document.body.style.overflow = previousOverflow;
      const trigger = restoreRef.current;
      if (trigger && typeof trigger.focus === "function") trigger.focus();
    };
  }, []);

  if (typeof document === "undefined") return null;

  const label = image.label || "Screenshot";
  const alt = image.alt || `${label} — ${image.desc || "project screenshot"}`;

  return createPortal(
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/92 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-3xl space-y-4 rounded-xl border border-border-strong bg-canvas p-4 shadow-2xl sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
          <h2 id={titleId} className="text-h4 font-semibold text-paper">
            {label}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="shrink-0 rounded p-1.5 text-slate-400 transition-colors hover:bg-surface hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <img
          src={image.src}
          alt={alt}
          decoding="async"
          className="mx-auto max-h-[70vh] w-auto max-w-full rounded-lg border border-border object-contain"
        />

        {image.desc && (
          <p className="text-small text-slate-400">{image.desc}</p>
        )}
      </div>
    </div>,
    document.body
  );
}
