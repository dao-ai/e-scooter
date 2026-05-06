import { loadCities } from "@/lib/loader";
import { ChargingClient } from "./client";

export default function ChargingPage() {
  return <ChargingClient cities={loadCities()} />;
}
