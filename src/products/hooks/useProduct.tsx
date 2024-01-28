import { useQuery } from "@tanstack/react-query";
import { productsActions } from "..";

interface Options {
  id: number;
}

export const useProduct = ({ id }: Options) => {
  const {
    isLoading,
    isError,
    data: product,
    isFetched,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => productsActions.getProductById(id),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
  return {
    isError,
    isFetched,
    isLoading,
    product,
  };
};
