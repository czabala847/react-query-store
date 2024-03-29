import { ProductList } from "..";
import { useProducts } from "../hooks/useProducts";

export const MensPage = () => {
  const { isLoading, products } = useProducts({ filterKey: "men's clothing" });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      {isLoading && <h1>Loading...</h1>}

      <ProductList products={products} />
    </div>
  );
};
