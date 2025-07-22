import { useState } from "react";
import type { Product } from "../types";
import { ProductCard } from "./ProductCard";

interface ListProps {
  products: Product[];
}

const PRODUCTS_PER_PAGE = 6;

export const ProductList = ({ products }: ListProps) => {
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + PRODUCTS_PER_PAGE);
  };

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl w-full px-4">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={selectedProductId === product.id}
            onSelect={() => setSelectedProductId(product.id)}
          />
        ))}
      </div>

      {visibleCount < products.length && (
        <button
          onClick={handleShowMore}
          className="my-8 px-6 py-2 hover:text-blue-800 text-blue-500 font-semibold cursor-pointer"
        >
          Pokaż więcej ▼
        </button>
      )}
    </div>
  );
};
