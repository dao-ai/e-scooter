import { loadModels } from "@/lib/loader";
import { BrandsClient } from "./client";

export default function BrandsPage() {
  return <BrandsClient models={loadModels()} />;
}
