export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  sizes: string[];
  colors: string[];
  features: string[];
  badge?: "NUEVO" | "BESTSELLER";
}