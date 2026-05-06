import { loadModels } from "@/lib/loader";
import { DeliveryClient } from "./client";

export default function DeliveryPage() {
  return <DeliveryClient models={loadModels()} />;
}
