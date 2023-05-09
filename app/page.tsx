import IconBar from "@/components/IconBar";
import Header from "@/components/Header";
import ProfilePicture from "@/components/ProfilePicture";
function getContent() {
  ``;
}

export default function Home() {
  return (
    <>
      <IconBar />
      <div className="ml-[150px]">
        <Header />
        <main className="max-w-7xl">
          <div className="w-full bg-blue-200 h-[250px]"/>
          <ProfilePicture className="mb-18"/>
        </main>
      </div>
    </>
  );
}
