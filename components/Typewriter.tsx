import Typewriter from "typewriter-effect";

export function TypewriterComponent({ strings }: { strings: string[] }) {
  return (
    <div className="flex justify-center items-center">
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          wrapperClassName: "text-3xl text-dark-white font-light",
          cursorClassName: "text-3xl text-dark-white font-light",
        }}
      />
    </div>
  );
}
