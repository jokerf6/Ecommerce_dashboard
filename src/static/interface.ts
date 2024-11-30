import { discountType } from "@prisma/client";

export interface RESPONSE {
  data: unknown;
  status: number;
}

export interface CategoryType {
  id: number;
  nameAr: string;
  nameEn: string;
  image: string;
  isActive: boolean;
  isFeatured: boolean;
  parentId: number;
  name: string;
  Children?: CategoryType[];
  Product?: ProductType[];
}

export interface BannerType {
  id: number;
  imageAr: string;
  imageEn: string;
  isActive: boolean;
}
export interface ProductType {
  id: number;
  nameAr: string;
  nameEn: string;
  price: number;
  image: string;
  description: string;
  isActive: boolean;
  discount: number;
  discountType: discountType;
}
