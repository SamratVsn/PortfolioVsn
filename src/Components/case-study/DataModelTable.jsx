import { cn } from "../ui/cn";

// A focused data-model table, not a database dump. On small screens each row
// becomes a labelled card so fields, responsibility, and notes stay readable
// without horizontal scrolling.
export default function DataModelTable({ entities, caption, className }) {
  if (!entities?.length) return null;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface/40",
        className
      )}
    >
      <table className="w-full border-collapse text-left max-md:block">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="bg-surface/70 max-md:sr-only">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 font-mono text-label font-semibold uppercase tracking-[0.12em] text-slate-400"
            >
              Entity
            </th>
            <th
              scope="col"
              className="px-4 py-3 font-mono text-label font-semibold uppercase tracking-[0.12em] text-slate-400"
            >
              Important fields
            </th>
            <th
              scope="col"
              className="px-4 py-3 font-mono text-label font-semibold uppercase tracking-[0.12em] text-slate-400"
            >
              Responsibility
            </th>
            <th
              scope="col"
              className="px-4 py-3 font-mono text-label font-semibold uppercase tracking-[0.12em] text-slate-400"
            >
              Note
            </th>
          </tr>
        </thead>
        <tbody className="max-md:block max-md:space-y-3 max-md:p-3">
          {entities.map((entity) => (
            <tr
              key={entity.name}
              className="border-t border-border align-top max-md:block max-md:rounded-lg max-md:border max-md:bg-surface max-md:p-4"
            >
              <th
                scope="row"
                className="px-4 py-4 align-top max-md:block max-md:border-0 max-md:px-0 max-md:pb-2 max-md:pt-0"
              >
                <span className="block font-mono text-small font-semibold text-paper">
                  {entity.name}
                </span>
                {entity.table && (
                  <span className="mt-1 block font-mono text-label text-slate-500">
                    {entity.table}
                  </span>
                )}
              </th>
              <td className="px-4 py-4 align-top text-small leading-relaxed text-slate-400 max-md:block max-md:px-0 max-md:py-1.5">
                <span className="mb-1 block font-mono text-label uppercase tracking-[0.12em] text-slate-500 md:hidden">
                  Fields
                </span>
                {entity.fields}
              </td>
              <td className="px-4 py-4 align-top text-small leading-relaxed text-slate-400 max-md:block max-md:px-0 max-md:py-1.5">
                <span className="mb-1 block font-mono text-label uppercase tracking-[0.12em] text-slate-500 md:hidden">
                  Responsibility
                </span>
                {entity.responsibility}
              </td>
              <td className="px-4 py-4 align-top text-small leading-relaxed text-slate-500 max-md:block max-md:px-0 max-md:pb-0 max-md:pt-1.5">
                <span className="mb-1 block font-mono text-label uppercase tracking-[0.12em] text-slate-500 md:hidden">
                  Note
                </span>
                {entity.note}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
