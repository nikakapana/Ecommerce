import {Category} from "./category";


export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  categoryId?: number;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
