import type { Metadata } from "next";
import { blogdata } from "@/data/blogsData";
import { BlogCard } from "@/components/ui/BlogCard";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog | hii dev",
  description: "Zennやnoteに投稿したhiiの技術記事の一覧ページです。",
};

export default function Portfolios() {
  return (
    <div className=" relative top-32 animate-fade-in">
      <h1 className="relative text-center">Blogs</h1>

      <div className="mt-16 mr-4 ml-4 grid gap-y-20 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-5 xl:grid-cols-3">
        {blogdata.map((blogdata) => (
          <BlogCard
            key={blogdata.id}
            title={blogdata.title}
            date={blogdata.date}
            description={blogdata.description}
            url={blogdata.url}
            platform={blogdata.platform}
          />
        ))}
      </div>

      <div className="relative mt-20 pb-16">
        <Footer />
      </div>
    </div>
  );
}
