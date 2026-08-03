"use client";

import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { GITHUB_URL } from "@/lib/links";

type MenuItem = {
  href: string;
  label: string;
  external?: boolean;
};

const INTERNAL_LINKS: MenuItem[] = [
  { href: "/", label: "Home" },
  { href: "/background", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
];

const EXTERNAL_LINKS: MenuItem[] = [
  { href: "https://x.com/h1idev", label: "Twitter", external: true },
  { href: GITHUB_URL, label: "GitHub", external: true },
  {
    href: "mailto:CA01971020@st.kawahara.ac.jp",
    label: "E-Mail",
    external: true,
  },
];

export default function Menu() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* ハンバーガーボタン */}
      <MenuButton onClick={() => setVisible(true)}>
        <GiHamburgerMenu />
      </MenuButton>

      {/* メニュー */}
      <div
        className={`fixed inset-0 z-40 h-screen bg-white transition-all duration-500 ease-in-out
          ${
            visible
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
      >
        {/* 閉じるボタン */}
        <MenuButton onClick={() => setVisible(false)} ariaLabel="Close menu">
          <IoMdClose />
        </MenuButton>

        <div className="mt-24 text-center lg:mt-12">
          <nav>
            <MenuList
              items={INTERNAL_LINKS}
              onClick={() => setVisible(false)}
            />
            <MenuList items={EXTERNAL_LINKS} />
          </nav>

          <footer className="mt-20">
            <small className="text-xl font-bold text-black">
              &copy; hii dev. {new Date().getFullYear()}
            </small>
          </footer>
        </div>
      </div>
    </>
  );
}

function MenuButton({
  children,
  onClick,
  ariaLabel = "Open menu",
}: {
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel?: string;
}) {
  return (
    <div className="absolute right-0 top-3.5 z-40 mr-6 px-3 pt-1">
      <button onClick={onClick} aria-label={ariaLabel}>
        <span className="select-none text-3xl text-black duration-200 hover:scale-125">
          {children}
        </span>
      </button>
    </div>
  );
}

function MenuList({
  items,
  onClick,
}: {
  items: MenuItem[];
  onClick?: () => void;
}) {
  return (
    <>
      {items.map(({ href, label, external }) => (
        <div key={href} className="mt-8 text-center">
          {external ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <MenuText>{label}</MenuText>
            </a>
          ) : (
            <Link href={href} onClick={onClick} className="inline-block">
              <MenuText>{label}</MenuText>
            </Link>
          )}
        </div>
      ))}
    </>
  );
}

function MenuText({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="inline-block duration-300 hover:scale-125">{children}</h2>
  );
}
