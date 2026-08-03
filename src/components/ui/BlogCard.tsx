import React from "react";
import { SiZenn } from "react-icons/si";
import { FiEdit3 } from "react-icons/fi";

type BlogCardProps = {
  title: string;
  date?: string;
  description?: string;
  url?: string;
  platform: "Zenn" | "note";
};

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  url,
  description,
  platform,
}) => {
  const isZenn = platform === "Zenn";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative block
        rounded-2xl border border-stone-200
        bg-white p-4
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs text-stone-400">{date}</span>

        <span
          className={`
            flex items-center gap-1.5 rounded-full px-2 py-0.5
            text-xs font-medium
            ${
              isZenn
                ? "bg-sky-50 text-sky-600 border border-sky-200"
                : "bg-emerald-50 text-emerald-600 border border-emerald-200"
            }
          `}
        >
          {isZenn ? <SiZenn size={12} /> : <FiEdit3 size={12} />}
          {platform}
        </span>
      </div>

      <h2 className="mb-3 text-lg font-semibold text-stone-800 transition-colors group-hover:text-stone-500">
        {title}
      </h2>

      <p className="text-sm leading-relaxed text-stone-600 line-clamp-3">
        {description}
      </p>

      <div className="mt-4 h-px w-0 bg-stone-300 transition-all duration-300 group-hover:w-full" />
    </a>
  );
};
