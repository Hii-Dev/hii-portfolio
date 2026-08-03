import type { Metadata } from "next";
import { data } from "@/data/updatesData";
import { UpdatesCard } from "@/components/ui/updatesCard";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Update History | hii dev",
  description: "hii devサイトの更新履歴をまとめたページです。",
};

export default function UpdateHistory() {
  return (
    <div className=" relative top-32 animate-fade-in">
      <h1 className="relative text-center">Update History</h1>

      <div className="grid gap-y-20 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-5 xl:grid-cols-3">
        {data.map((data) => (
          <UpdatesCard
            key={data.id}
            title={data.title}
            date={data.date}
            description={data.description}
            techStack={data.techStack}
            githubLink={data.githubLink}
          />
        ))}
      </div>

      <div className="relative mt-40 mb-20">
        <Footer />
      </div>
    </div>
  );
}
