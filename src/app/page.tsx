import type { Metadata } from "next";
import NextLink from "next/link";
import CustomButton from "@/components/ui/button";
import Footer from "@/components/footer";
import TypingAnimation from "@/components/TypingAnimation";
import ZennStats from "@/components/stats/ZennStats";
import NoteStats from "@/components/stats/NoteStats";
import ShizumeStats from "@/components/stats/ShizumeStats";
import { MdArrowOutward } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { SiZenn } from "react-icons/si";
import { FaRegHandPointUp } from "react-icons/fa6";
import { GITHUB_URL } from "@/lib/links";
import { portfoliosdata } from "@/data/portfoliosData";

export const metadata: Metadata = {
  title: "hii dev",
  description:
    "hii-dev は、情報系専門学生である私のスキルとプロジェクトを紹介するポートフォリオサイトです。",
};

const totalProjects = portfoliosdata.length;
const ongoingProjects = portfoliosdata.filter(
  (p) => p.status === "ongoing"
).length;
const otherProjects = totalProjects - ongoingProjects;

export default function Home() {
  return (
    <div className=" relative top-0 mb-20">
      <TypingAnimation></TypingAnimation>

      <div className="animate-fade-in">
        <div className="grid gap-y-10 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-5 xl:grid-cols-3">
          <div className="duration-200 hover:scale-103 relativ pt-4 pb-5 pr-0  pl-4 ml-4 mr-4 rounded-2xl ">
            <h2 className=" border-b border-stone-200 pb-1 ">PROFILE</h2>
            <div className="mt-4">
              <p>hii / Haruto Higashimoto.</p>
              <p>Web Developer. </p>
              <p>Chiba / Japan.</p>
              <p>Kawahara Computer Business College, Graduated 2026</p>
              <p>Sanno University, Graduated 2026</p>
            </div>
            <div className=" mt-6 flex justify-center">
              <NextLink href="/background">
                <CustomButton buttontext="About me" />
              </NextLink>
            </div>
          </div>

          <div className="duration-200 hover:scale-103 relative bg-white pt-4 pb-5 pr-4 pl-4 ml-4 mr-4 ">
            <h2 className=" border-b border-stone-200 pb-1">SKILLS</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <p>
                HTML5 <br />
                CSS3 <br />
                JavaScript <br />
                TypeScript <br />
                Python <br />
                Java
              </p>
              <p>
                React <br />
                Next.js <br />
                FastAPI <br />
                TailwindCSS <br />
                Azure <br />
                GitHub
              </p>
            </div>
          </div>

          <div className=" duration-200 hover:scale-103 relative bg-white pt-4 pb-6 pr-4 pl-4 ml-4 mr-4">
            <h2 className=" border-b border-stone-200 pb-1">BLOG</h2>
            <div className="mt-4">
              <a
                href="https://zenn.dev/aputech"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-sky-500 flex gap-0.5"
              >
                <SiZenn className=" text-blue-400" />
                Zenn
                <MdArrowOutward />
              </a>
              <ZennStats />
            </div>
            <div className="mt-1">
              <a
                href="https://note.com/h1idev"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-sky-500 flex gap-0.5"
              >
                note
                <MdArrowOutward />
              </a>
              <NoteStats />
            </div>
            <div className="mt-4">
              <a
                href="https://sizu.me/hii"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-sky-500 flex gap-0.5"
              >
                <FaRegHandPointUp className="text-black" />
                しずかなインターネット
                <MdArrowOutward />
              </a>
              <ShizumeStats />
            </div>
            <div className=" mt-6 flex justify-center">
              <NextLink href="/blog">
                <CustomButton buttontext="Articles" />
              </NextLink>
            </div>
          </div>

          <div className="duration-200 hover:scale-103 relative pt-4 pb-6 pr-4 pl-4 ml-4 mr-4 ">
            <h2 className=" border-b border-stone-200 pb-1">PORTFOLIO</h2>
            <div className="mt-4">
              <p>
                {totalProjects} Projects <br />
                {ongoingProjects} active / {otherProjects} completed or paused
              </p>
              <div className=" mt-6 flex justify-center">
                <NextLink href="/portfolio">
                  <CustomButton buttontext="Projects" />
                </NextLink>
              </div>
            </div>
          </div>

          <div className="duration-200 hover:scale-103 relative pt-4 pb-6 pr-4 pl-4 ml-4 mr-4">
            <h2 className=" border-b border-stone-200 pb-1">SNS</h2>
            <div className="mt-4 space-x-4 flex">
              <a
                href="https://x.com/h1idev"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <FaSquareXTwitter className="text-black text-4xl" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <FaSquareGithub className="text-black text-4xl" />
              </a>
              <a
                href="https://www.instagram.com/hi1dev?igsh=MW1mMDB0a2xzaDFlNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <FaSquareInstagram className=" text-pink-600 text-4xl" />
              </a>
            </div>
          </div>

          <div className="duration-200 hover:scale-103 relative pt-4 pb-6 pr-4 pl-4 ml-4 mr-4">
            <h2 className="relatived  border-b border-stone-200 pb-1">
              CONTACT
            </h2>
            <div className=" flex mt-4">
              <IoMail className="text-black text-3xl" />
              <p className=" pt-0.5 pl-2">E-Mail</p>
            </div>
            <p className="wrap-break-word select-text mt-1">
              CA01971020@st.kawahara.ac.jp
            </p>
            <div className=" flex mt-4">
              <a
                href="https://x.com/h1idev"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="text-sky-500 flex gap-0.5">
                  <FaSquareXTwitter className="text-black text-3xl" />
                  <p className="pt-0.5 pl-2 text-sky-500!">Twitter DM</p>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="relative mt-40 mb-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}
