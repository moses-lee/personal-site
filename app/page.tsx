"use client";
import { TextScroller } from "@/components/TextScroller";
import { SocialIcons } from "@/components/SocialIcons";
import { BottomTabs } from "@/components/BottomTabs";
import { ContentContainer } from "@/components/content/ContentContainer";
import { useState, useRef, useEffect, useMemo } from "react";
import { content, TabTitle } from "@/data/content";
import CanvasContainer from "@/components/animations/CanvasContainer";

export default function App() {
  const [tab, setTab] = useState<TabTitle | null>(null);
  const ref = useRef<null | HTMLDivElement>(null);
  const headerText: string = useMemo(() => {
    const txt = Object.keys(content.tabs).map((tab) => {
      return content.tabs[tab as TabTitle]
        .map((cell) => {
          return (
            (cell.header || "") +
            (cell.header ? " " : "") +
            (cell.subheader || "") +
            (cell.subheader ? " " : "") +
            (cell.paragraph || "") +
            (cell.paragraph ? " " : "")
          );
        })
        .join(" ");
    });

    return txt.join(" ");
  }, []);

  useEffect(() => {
    if (tab && ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [tab, ref]);

  return (
    <div>
      <div className="h-screen">
        <TextScroller text={headerText} />
        <div className="flex flex-col justify-center h-[90%]">
          <div className="h-[80%] w-full">
            <CanvasContainer />
          </div>
          <SocialIcons />
        </div>
        <div ref={ref}>
          <BottomTabs setTab={setTab} currentTab={tab} />
        </div>
        <a
          href="https://github.com/moses-lee/personal-site"
          rel="noopener noreferrer"
          target="_blank"
          className="absolute text-grey text-[0.765rem] p-4 font-extralight top-0 right-0 mt-[2.175rem] italic"
        >
          {"//"} built with next.js, tailwindcss, and three
        </a>
      </div>
      <ContentContainer tab={tab} />
    </div>
  );
}
