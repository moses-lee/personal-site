import { content } from "@/data/content";
import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
}
export function SocialIcons({ className }: Props) {
  return (
    <div className={`flex flex-cols gap-12 items-center justify-center ${className}`}>
      {Object.keys(content.socials).map((social) => (
        <Link
          key={social}
          href={content.socials[social].url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            className="opacity-25"
            src={content.socials[social].icon}
            alt={social}
            width={28}
            height={28}
          />
        </Link>
      ))}
    </div>
  );
}
