import Typewriter from "typewriter-effect";

export function TypewriterComponent({
  strings,
  className,
}: {
  strings: string[];
  className?: string;
}) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          wrapperClassName: "text-3xl text-grey font-light",
          cursorClassName: "text-3xl text-grey font-light",
        }}
      />
    </div>
  );
}
