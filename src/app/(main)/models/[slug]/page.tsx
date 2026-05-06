import { loadModels, loadModelBody } from "@/lib/loader";
import { notFound } from "next/navigation";
import ModelDetailClient from "./client";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const models = loadModels();
  return models
    .filter((m) => m.id)
    .map((m) => ({
      slug: m.id,
    }));
}

export default async function ModelDetailPage({ params }: Props) {
  const { slug } = await params;
  const models = loadModels();
  const model = models.find((m) => m.id === slug || m.slug === slug);

  if (!model) {
    notFound();
  }

  const body = loadModelBody(model.id);

  return <ModelDetailClient model={model} body={body} />;
}
