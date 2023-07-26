import Cell from "./Cell";
import { CellContent, TabTitle } from "@/data/content";

type Props = {
  title: TabTitle;
  content: CellContent[];
};
export default function ContentPage({ content, title }: Props) {
  return (
    <div className="p-10">
      <div className="p-2">{title}</div>
      {content.map((cellContent, idx) => (
        <Cell key={idx} cellContent={cellContent} />
      ))}
    </div>
  );
}
