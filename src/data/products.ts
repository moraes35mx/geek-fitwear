export interface ProductColor {
  name: string;
  hex: string;
  image: string;
  backImage?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  tag?: 'Novo' | 'Mais Vendido' | 'Limitado' | 'Outlet';
  originalPrice: number;
  pixPrice: number;
  installments: { count: number; value: number };
  sizes: string[];
  colors: ProductColor[];
  description: string;
  stock: number;
  features: string[];
  details: string;
  washing: string;
}

export const products: Product[] = [