import { useQuery } from "@tanstack/react-query";
import { productsActions } from "..";

interface Options {
  filterKey?: string;
}

export const useProducts = ({ filterKey }: Options) => {
  const {
    isLoading,
    isError,
    data: products = [],
    isFetched,
  } = useQuery({
    queryKey: ["products", { filterKey }],
    queryFn: () => productsActions.getProducts({ filterKey }),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
  return {
    isError,
    isFetched,
    isLoading,
    products,
  };
};
