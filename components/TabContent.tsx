import { TabTitle } from "@/data/content";

type Props = {
  tab: TabTitle | null;
};

export function TabContent({ tab }: Props) {
  if (!tab) return null;
  return <div className="text-dark-white h-screen">{tab}</div>;
}
