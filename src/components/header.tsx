import NextLink from "next/link";
import CirclePhotoCard from "@/components/ui/CirclePhotoCard";
import Menu from "./menu";
import { GITHUB_URL } from "@/lib/links";

export default function Header() {
  return (
    <header className="flex items-center pt-1 pb-1 border-b border-stone-200 backdrop-blur-md">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className=" select-none pt-1 pl-4 pb-1 duration-200 hover:scale-110"
      >
        <CirclePhotoCard
          src="/hii-pf-icon.svg"
          altText="プロフィール写真"
          size={44}
          imgWrapperStyle={{
            padding: "4px",
            backgroundColor: "#eee",
            borderRadius: "50%",
          }}
        />
      </a>
      <h1 className=" relative left-6 select-none text-black!">
        <NextLink href="/">hii</NextLink>
      </h1>
      <Menu />
    </header>
  );
}
