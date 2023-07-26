import { TabTitle, content} from "@/data/content";
import ContentPage from "@/components/content/ContentPage";

type Props = {
  tab: TabTitle | null;
};

export function ContentContainer({ tab }: Props) {
  if (!tab) return null;

  function Content({ tab }: { tab: TabTitle }) {
    switch (tab) {
      case "about":
        return <ContentPage title={"about"} content={content.tabs.about}/>;
      case "experience":
        return <div>experience</div>;
      case "skills":
        return <div>skills</div>;
      default:
        return null;
    }
  }

  return (
    <div className="text-grey h-screen px-5">
      <Content tab={tab} />
    </div>
  );
}
