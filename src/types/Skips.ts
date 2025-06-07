export interface ISkip {
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  area: string;
  forbidden: boolean;
  hire_period_days: number;
  id: number;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  transport_cost: number;
  size: number;
  postcode: string;
  created_at: string;
}
