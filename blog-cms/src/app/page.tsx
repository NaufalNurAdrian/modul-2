import Content from "@/components/content";
import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";

export default async function Home() {
  return (
    <div>
      <Content />
    </div>
  );
}
