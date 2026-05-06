import { loadModels, loadNews, loadCities } from "@/lib/loader";
import { OverviewClient } from "./client";

export default function OverviewRoute() {
  return (
    <OverviewClient
      models={loadModels()}
      newsItems={loadNews()}
      cities={loadCities()}
    />
  );
}
