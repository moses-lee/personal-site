import { content, TabTitle } from "@/data/content";
import { useEffect } from "react";

type Props = {
  setTab: (tab: TabTitle) => void;
  currentTab: TabTitle | null;
};

export function BottomTabs({ setTab, currentTab }: Props) {
  useEffect(() => {
    setTimeout(() => {
      document
        .querySelectorAll(".transform")
        .forEach((el) => el.classList.remove("scale-0"));
    }, 100);
  }, []);

  return (
    <div className="flex w-full justify-evenly transform transition-all duration-150 ease-out scale-0 py-4">
      {Object.keys(content.tabs).map((tab) => (
        <div
          key={tab}
          className={`text-grey text-md px-4 font-light cursor-pointer rounded border border-slate-800 py-1 text-center shadow-[-5px_-5px_30px_4px_rgba(0,0,0,1),_5px_5px_30px_4px_rgba(255,255,255,0.2)] hover:bg-[#2d2d34] ${
            currentTab === tab && "bg-[#2d2d34]"
          }`}
          onClick={() => setTab(tab as TabTitle)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
