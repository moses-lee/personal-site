"use client";
import { TypewriterComponent } from "@/components/Typewriter";
import { SocialIcons } from "@/components/SocialIcons";
import { BottomTabs } from "@/components/BottomTabs";
import { TabContent } from "@/components/TabContent";
import { useState, useRef, MutableRefObject } from "react";
import { content, TabTitle } from "@/data/content";

export default function App() {
  const [tab, setTab] = useState<TabTitle | null>(null);
  const ref = useRef<null | HTMLDivElement>(null);

  function scroll(ref: MutableRefObject<null | HTMLDivElement>) {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function onSetTab(tab: TabTitle) {
    setTab(tab);
    scroll(ref);
  }

  return (
    <div>
      <div className="h-screen">
        <div className="flex flex-col justify-evenly h-[90%]">
          <TypewriterComponent strings={content.intro} />

          <SocialIcons />
        </div>
        <div ref={ref}>
          <BottomTabs setTab={onSetTab} />
        </div>
      </div>
      <TabContent tab={tab} />
    </div>
  );
}
