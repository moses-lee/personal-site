import Image from "next/image";

type ProfilePictureProps = {
    className?: string;
    small?: boolean;
};

export default function ProfilePicture({ small, className }: ProfilePictureProps) {
  return (
    <Image
      src="/profile_picture.jpg"
      alt="Me"
      width={small ? 50 : 200}
      height={small ? 50 : 200}
      className={`rounded-full border-4 border-red-500 ${className} relative`}
    />
  );
}
