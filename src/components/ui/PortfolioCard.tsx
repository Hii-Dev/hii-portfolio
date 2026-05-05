"use client";

import React from "react";
import Image from "next/image";
import type { PortfolioStatus } from "@/types/PortfolioStatus";

type PortfolioCardProps = {
  title: string;
  period?: string;
  url?: string;
  imageUrl?: string;
  description: string;
  techStackTag?: string[];
  status?: PortfolioStatus;
};

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  period,
  url,
  imageUrl,
  description,
  techStackTag,
  status,
}) => {
  const statusKey: "ongoing" | "completed" | "paused" = status || "paused";

  const statusInfo = {
    ongoing: {
      label: "開発中",
      badge: "bg-amber-50 text-amber-700 border border-amber-200",
    },
    completed: {
      label: "公開中",
      badge: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    },
    paused: {
      label: "開発終了",
      badge: "bg-stone-100 text-stone-600 border border-stone-300",
    },
  }[statusKey];

  return (
    <article
      className="
        group relative block h-full
        rounded-2xl border border-stone-200
        bg-white p-4
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      {/* image */}
      {imageUrl ? (
        <div className="overflow-hidden rounded-xl">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={240}
            quality={90}
            className="
              h-40 w-full object-cover
              transition-transform duration-300
              group-hover:scale-105
            "
          />
        </div>
      ) : (
        <div className="h-40 w-full rounded-xl bg-stone-200" />
      )}

      {/* header */}
      <div className="mt-4 flex items-start justify-between gap-2">
        <h2 className="text-lg font-semibold text-stone-800">{title}</h2>

        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${statusInfo.badge}`}
        >
          {statusInfo.label}
        </span>
      </div>

      {/* period */}
      {period && (
        <p className="mt-1 text-xs text-stone-400">開発期間：{period}</p>
      )}

      {/* description */}
      <p className="mt-3 text-sm leading-relaxed text-stone-600">
        {description}
      </p>

      {/* tech stack */}
      {techStackTag && techStackTag.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {techStackTag.map((tag, index) => (
            <span
              key={index}
              className="
                rounded-full border border-stone-300
                bg-stone-100 px-2 py-0.5
                text-xs text-stone-600
              "
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* link underline */}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            absolute inset-0 rounded-2xl
            focus:outline-none
          "
          aria-label={`${title} を開く`}
        />
      )}
    </article>
  );
};
