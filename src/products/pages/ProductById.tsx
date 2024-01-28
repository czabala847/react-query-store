import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "..";
import { useProduct } from "../hooks/useProduct";

export const ProductById = () => {
  const { id } = useParams();

  const { isLoading, product } = useProduct({ id: +id! });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Producto</h1>

      {isLoading && <h1>Loading...</h1>}

      {product && <ProductCard product={product} />}
    </div>
  );
};
