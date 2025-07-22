import { useMemo } from "react";
import type { FilterParams } from "../types";
import {
  CapacityValues,
  CollectionValues,
  EnergyClassValues,
} from "../data/selectOptions";

export function useFilteredProducts({
  products,
  collection,
  energyClass,
  capacity,
  sortBy,
}: FilterParams) {
  return useMemo(() => {
    let list = [...products];

    if (collection !== CollectionValues.ALL) {
      list = list.filter((p) => p.collection.includes(collection));
    }
    if (energyClass !== EnergyClassValues.ALL) {
      list = list.filter((p) => p.energyClass === energyClass);
    }
    if (capacity !== CapacityValues.ALL) {
      list = list.filter((p) => p.capacity.toString() === capacity);
    }

    switch (sortBy) {
      case "Cena":
        return [...list].sort((a, b) => a.price - b.price);
      case "Pojemność":
        return [...list].sort((a, b) => a.capacity - b.capacity);
      default:
        return list;
    }
  }, [products, collection, energyClass, capacity, sortBy]);
}
