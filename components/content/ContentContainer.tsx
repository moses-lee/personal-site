import { TabTitle, content } from "@/data/content";
import { Cell } from "./Cell";

type Props = {
  tab: TabTitle | null;
};

export function ContentContainer({ tab }: Props) {
  if (!tab) return null;
  return (
    <div className="text-grey h-screen px-12 pt-14 max-md:px-4 pb-24">
      {content.tabs[tab].map((cellContent, idx) => (
        <div key={idx} className="mb-10">
          <Cell cellContent={cellContent} />
        </div>
      ))}
    </div>
  );
}
