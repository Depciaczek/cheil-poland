import { useMemo } from "react";
import Fuse from "fuse.js";
import type { Product } from "../types";

export function useFuseSearch(products: Product[], query: string) {
  const fuse = useMemo(
    () => new Fuse(products, { keys: ["name"], threshold: 0.3 }),
    [products]
  );
  const results = useMemo(() => {
    if (!query.trim()) return products;
    return fuse.search(query.trim()).map((res) => res.item);
  }, [fuse, query, products]);
  return results;
}
