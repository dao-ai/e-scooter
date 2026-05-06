import { loadModels, loadNews, loadCities } from "@/lib/loader";
import { ModelsClient } from "./client";

export default function ModelsPage() {
  return <ModelsClient models={loadModels()} />;
}
