import { content } from "@/data/content";
import Image from "next/image";
import Link from "next/link";

export function SocialIcons() {
  return (
    <div className="flex flex-cols gap-12 items-center justify-center">
      {Object.keys(content.socials).map((social) => (
        <Link key={social} href={content.socials[social].url}>
          <Image
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
