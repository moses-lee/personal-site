import { CellContent } from "@/data/content";

export default function Cell({ cellContent }: { cellContent: CellContent }) {
  return (
    <div className="flex flex-col rounded-lg border border-slate-800 shadow-lg shadow-slate-500/40 p-5">
      <div>{cellContent.header}</div>
      <div>{cellContent.subtitle}</div>
    </div>
  );
}
