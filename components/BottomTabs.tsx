import { content, TabTitle } from "@/data/content";

type Props = {
  setTab: (tab: TabTitle) => void;
};

export function BottomTabs({ setTab }: Props) {
  return (
    <div className="flex w-full justify-evenly">
      {content.tabs.map((tab) => (
        <div
          key={tab.title}
          className="text-dark-white text-md cursor-pointer"
          onClick={() => setTab(tab.title)}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
}
