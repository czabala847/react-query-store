import { ProductCard } from "..";
import { usePrefetchProduct } from "../hooks/usePrefetchProduct";
import { type Product } from "../interfaces/product";

interface Props {
  products: Product[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
  const { preFetchProduct } = usePrefetchProduct();

  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 justify-center max-w-max">
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          prefetchProduct={preFetchProduct}
        />
      ))}
    </div>
  );
};
