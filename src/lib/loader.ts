import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Model, NewsItem, CityCharge } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");

/** 从 data/*.md 文件加载全部车型 */
export function loadModels(): Model[] {
  const files = fs.readdirSync(DATA_DIR).filter((f) => /^m\d+-.+\.md$/.test(f));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(DATA_DIR, file), "utf-8");
    const { data } = matter(raw);
    return {
      id: data.id,
      slug: data.slug ?? data.id,
      name: data.name,
      brand: data.brand,
      use: data.use,
      price: data.price,
      range: data.range,
      topSpeed: data.topSpeed,
      battery: data.battery,
      charge: data.charge,
      source: data.source,
      score: data.score,
      heat: data.heat,
      tags: data.tags ?? [],
      specs: data.specs ?? [],
    } as Model;
  });
}

/** 从 data/news.md 加载资讯 */
export function loadNews(): NewsItem[] {
  const raw = fs.readFileSync(path.join(DATA_DIR, "news.md"), "utf-8");
  const { data } = matter(raw);
  return data.items as NewsItem[];
}

/** 从 data/cities.md 加载城市数据 */
export function loadCities(): CityCharge[] {
  const raw = fs.readFileSync(path.join(DATA_DIR, "cities.md"), "utf-8");
  const { data } = matter(raw);
  return data.cities as CityCharge[];
}

/** 获取单车型的 Markdown 正文（简介） */
export function loadModelBody(id: string): string | null {
  const files = fs.readdirSync(DATA_DIR).filter((f) => f.startsWith(`${id}-`));
  if (files.length === 0) return null;
  const raw = fs.readFileSync(path.join(DATA_DIR, files[0]), "utf-8");
  const { content } = matter(raw);
  return content.trim();
}
