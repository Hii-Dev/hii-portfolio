import React from "react";

type UpdatesCardProps = {
  title: string;
  date: string;
  description: string;
  techStack?: string;
  githubLink?: string;
};

export const UpdatesCard: React.FC<UpdatesCardProps> = ({
  title,
  date,
  description,
  techStack,
  githubLink,
}) => {
  return (
    <div className="duration-200 hover:scale-103 relative mt-16 bg-white pt-4 pb-5 pr-8 pl-8 ml-8 mr-8 rounded-2xl  shadow-lg shadow-black/50">
      <div className="border-b border-b-black">
        <h3 className="text-black text-xl">{title}</h3>
      </div>
      <h4 className="text-black text-lg mt-1">{date}</h4>
      <p className="mt-4 whitespace-pre-line">{description}</p>

      {techStack && (
        <div className="mt-2">
          <h5 className="text-black">使用技術</h5>
          <p>{techStack}</p>
        </div>
      )}

      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 font-bold mt-3 block"
        >
          Source Code on GitHub
        </a>
      )}
    </div>
  );
};
