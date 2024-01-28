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
