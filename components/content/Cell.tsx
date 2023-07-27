import { CellContent } from "@/data/content";
import Image from "next/image";

export function Cell({ cellContent }: { cellContent: CellContent }) {
  return (
    <div className="flex rounded-lg border border-slate-800 shadow-lg shadow-slate-500/40 p-7 gap-8 max-md:flex-col">
      {cellContent.image && (
        <div className="flex">
          <Image
            className="m-auto rounded"
            src={cellContent.image}
            alt={cellContent.header ?? ""}
            width={128}
            height={128}
          />
        </div>
      )}

      <div className="flex flex-col gap-2">
        {(cellContent.header || cellContent.subheader) && (
          <div>
            {cellContent.header && (
              <div className={`font-medium text-[1.15rem] text-light-grey}`}>
                <a href={cellContent.link}> {cellContent.header}</a>
              </div>
            )}
            {cellContent.subheader && (
              <div className="text-light-grey text-[0.875rem] italic">
                {cellContent.subheader}
              </div>
            )}
          </div>
        )}
        {cellContent.paragraph && (
          <div className="text-grey font-light text-[1rem] whitespace-pre-line">
            {cellContent.paragraph}
          </div>
        )}
      </div>
    </div>
  );
}
