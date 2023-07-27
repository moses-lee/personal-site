import Marquee from "react-fast-marquee";

type Props = {
  text: string;
};

export function TextScroller({ text }: Props) {
  return (
    <Marquee speed={100}>
      <div className="text-light-grey text-[1.175rem] mr-2 font-extralight">{text}</div>
    </Marquee>
  );
}
