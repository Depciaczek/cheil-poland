import "./index.css";
import { useState } from "react";
import { FuseSearch } from "./components/FuseSearch";
import { FilterPanel } from "./components/FilterPanel";
import { products } from "./data/products";
import { ProductList } from "./components/ProductList";
import { useFuseSearch } from "./hooks/useFuseSearch";
import { useFilteredProducts } from "./hooks/useFilteredProducts";

export const App = () => {
  const [query, setQuery] = useState("");

  const [filters, setFilters] = useState({
    sortBy: "Popularność",
    collection: "Wszystkie",
    energyClass: "Wszystkie",
    capacity: "Wszystkie",
  });

  const updateFilter = (name: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const fuseResults = useFuseSearch(products, query);

  const filteredProducts = useFilteredProducts({
    products: fuseResults,
    ...filters,
  });

  return (
    <main className="bg-[#F8F8F8] min-h-screen">
      <h1 className="bg-white text-4xl font-bold text-center py-4 w-full">
        Wybierz urządzenie
      </h1>

      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-sm">
            <FuseSearch query={query} setQuery={setQuery} />
          </div>
        </div>
        <div className="mb-6">
          <FilterPanel
            sortBy={filters.sortBy}
            onSortChange={(value) => updateFilter("sortBy", value)}
            collection={filters.collection}
            onCollectionChange={(value) => updateFilter("collection", value)}
            energyClass={filters.energyClass}
            onEnergyClassChange={(value) => updateFilter("energyClass", value)}
            capacity={filters.capacity}
            onCapacityChange={(value) => updateFilter("capacity", value)}
          />
        </div>
        Liczba wyników: {filteredProducts.length}
      </div>

      <ProductList products={filteredProducts} />
    </main>
  );
};

export default App;
