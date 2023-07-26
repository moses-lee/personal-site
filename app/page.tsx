"use client";
import { TypewriterComponent } from "@/components/Typewriter";
import { SocialIcons } from "@/components/SocialIcons";
import { BottomTabs } from "@/components/BottomTabs";
import { ContentContainer } from "@/components/ContentContainer";
import { useState, useRef, useEffect } from "react";
import { content, TabTitle } from "@/data/content";
import CanvasContainer from "@/components/animations/CanvasContainer";

export default function App() {
  const [tab, setTab] = useState<TabTitle | null>(null);
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (tab && ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [tab, ref]);

  return (
    <div>
      <div className="h-screen">
        <div className="flex flex-col justify-evenly h-[90%]">
          <CanvasContainer />
          <TypewriterComponent strings={content.intro} className="-mt-[20%]" />
          <SocialIcons />
        </div>
        <div ref={ref}>
          <BottomTabs setTab={setTab} />
        </div>
      </div>
      <ContentContainer tab={tab} />
    </div>
  );
}
