// 车型用途
export type ModelUse = "commute" | "performance" | "delivery";

// 充电方式
export type ChargeType = "快充" | "慢充" | "换电";

// 车型
export interface Model {
  id: string;
  slug?: string;
  name: string;
  brand: string;
  use: ModelUse;
  price: number;
  range: number;
  topSpeed: number;
  battery: string;
  charge: ChargeType;
  source: string;
  score: number;
  heat: number;
  tags: string[];
  /** 详细规格参数（可选），按组分 */
  specs?: SpecGroup[];
}

// 资讯
export interface NewsItem {
  type: "launch" | "policy" | "tech";
  label: string;
  title: string;
  source: string;
  time: string;
  summary: string;
}

// 城市补能
export interface CityCharge {
  city: string;
  index: number;
  note: string;
}

// 规格参数（一组键值对）
export interface SpecGroup {
  title: string;
  specs: { key: string; value: string }[];
}

// 筛选状态
export interface FilterState {
  use: ModelUse | "all";
  price: "all" | "low" | "mid" | "high";
  minRange: number;
  chargingOnly: boolean;
  query: string;
  newsType: "all" | "launch" | "policy" | "tech";
  compare: string[];
}

// 工具函数
export function priceBand(price: number): "low" | "mid" | "high" {
  if (price < 8000) return "low";
  if (price <= 15000) return "mid";
  return "high";
}

export function filterModels(models: Model[], state: FilterState): Model[] {
  const query = state.query.trim().toLowerCase();
  return models.filter((m) => {
    if (state.use !== "all" && m.use !== state.use) return false;
    if (state.price !== "all" && priceBand(m.price) !== state.price) return false;
    if (m.range < state.minRange) return false;
    if (state.chargingOnly && m.charge === "慢充") return false;
    if (query) {
      const text = [m.name, m.brand, m.charge, ...m.tags].join(" ").toLowerCase();
      if (!text.includes(query)) return false;
    }
    return true;
  });
}

export function formatPrice(price: number): string {
  return `¥${price.toLocaleString("zh-CN")}`;
}
