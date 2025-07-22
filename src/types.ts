export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  color: string;
  capacity: number;
  dimensions: string;
  energyClass: string;
  collection: string[];
  pricePeriod: string;
  price: number;
}
export interface Option {
  value: string;
  label: string;
}

export interface FilterProps {
  sortBy: string;
  onSortChange: (v: string) => void;
  collection: string;
  onCollectionChange: (v: string) => void;
  energyClass: string;
  onEnergyClassChange: (v: string) => void;
  capacity: string;
  onCapacityChange: (v: string) => void;
}

export interface CardProps {
  product: Product;
  isSelected: boolean;
  onSelect: () => void;
}

export interface FilterSelectProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}
export interface FilterParams {
  products: Product[];
  collection: string;
  energyClass: string;
  capacity: string;
  sortBy: string;
}
