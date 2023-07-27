import { TabTitle, content } from "@/data/content";
import { Cell } from "./Cell";

type Props = {
  tab: TabTitle | null;
};

export function ContentContainer({ tab }: Props) {
  if (!tab) return null;
  const length = content.tabs[tab].length;
  return (
    <div className="text-grey h-screen px-12 py-5 max-md:px-4 max-md:my-12">
      {content.tabs[tab].map((cellContent, idx) => (
        <div key={idx} className={idx === length - 1 ? "" : "mb-10"}>
          <Cell cellContent={cellContent} />
        </div>
      ))}
    </div>
  );
}
