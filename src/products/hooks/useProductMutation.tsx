import { useMutation, useQueryClient } from "@tanstack/react-query";

import { productsActions } from "..";
import { Product } from "../interfaces/product";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productsActions.createProduct,
    onSuccess: (data) => {
      if (!data) return;

      console.log("success");

      // Invalida la cache de products, para que se refresque cuando se cree un nuevo producto
      //   queryClient.invalidateQueries({
      //     queryKey: ["products", { filterKey: data.category }],
      //   });

      // Guarda el nuevo producto en la cache
      queryClient.setQueryData<Product[]>(
        ["products", { filterKey: data.category }],
        (old) => {
          if (!old) return [data];

          return [...old, data];
        }
      );
    },
    onSettled: () => {
      console.log("settled");
    },
  });

  return mutation;
};
