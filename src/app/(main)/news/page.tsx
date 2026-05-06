import { loadNews } from "@/lib/loader";
import { NewsClient } from "./client";

export default function NewsPage() {
  return <NewsClient newsItems={loadNews()} />;
}
