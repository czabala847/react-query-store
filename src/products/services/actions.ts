import { productsApi } from "../api/productsApi";
import { type Product } from "../interfaces/product";

interface GetProductsOptions {
  filterKey?: string;
}

export const getProducts = async ({
  filterKey,
}: GetProductsOptions): Promise<Product[]> => {
  try {
    const filterUrl = filterKey ? `category=${filterKey}` : "";

    const { data } = await productsApi.get<Product[]>(`/products?${filterUrl}`);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProductById = async (
  id: number
): Promise<Product | undefined> => {
  try {
    const { data } = await productsApi.get<Product>(`/products/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export interface ProductLike {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const createProduct = async (
  body: ProductLike
): Promise<Product | null> => {
  try {
    const { data } = await productsApi.post<Product>(`/products`, body);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
