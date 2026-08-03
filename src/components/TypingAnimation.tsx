"use client";

import { useEffect, useState } from "react";

const texts = [
  "Hi, I'm Hii.",
  "I'm an engineer from Ehime, Japan.",
  "I currently live in Chiba.",
  "I enjoy beer and Netflix.",
];

export default function TypingAnimation() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(delay);
    }
  }, [charIndex, textIndex]);

  return (
    <div className="flex items-center justify-center mt-20 h-40 mr-6 ml-6 rounded-2xl lg:h-screen lg:mt-0">
      <p className="text-lg! font-mono animate-fade-in">{displayText}</p>
    </div>
  );
}
