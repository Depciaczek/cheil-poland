import Select from "react-select";
import type { SingleValue } from "react-select";
import type { FilterProps, Option, FilterSelectProps } from "../types";
import {
  sortOptions,
  collectionOptions,
  energyClassOptions,
  capacityOptions,
} from "../data/selectOptions";
import { customStyles } from "../customStyle";

const FilterSelect = ({
  label,
  options,
  value,
  onChange,
}: FilterSelectProps) => (
  <div>
    <p className="mb-1 font-semibold">{label}</p>
    <Select
      options={options}
      value={options.find((opt) => opt.value === value) || options[0]}
      onChange={(option: SingleValue<Option>) =>
        onChange(option?.value || options[0].value)
      }
      styles={customStyles}
    />
  </div>
);

// Główny komponent
export const FilterPanel = ({
  sortBy,
  onSortChange,
  collection,
  onCollectionChange,
  energyClass,
  onEnergyClassChange,
  capacity,
  onCapacityChange,
}: FilterProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <FilterSelect
        label="Sortuj po:"
        options={sortOptions}
        value={sortBy}
        onChange={onSortChange}
      />
      <FilterSelect
        label="Funkcje:"
        options={collectionOptions}
        value={collection}
        onChange={onCollectionChange}
      />
      <FilterSelect
        label="Klasa energetyczna:"
        options={energyClassOptions}
        value={energyClass}
        onChange={onEnergyClassChange}
      />
      <FilterSelect
        label="Pojemność:"
        options={capacityOptions}
        value={capacity}
        onChange={onCapacityChange}
      />
    </div>
  );
};
