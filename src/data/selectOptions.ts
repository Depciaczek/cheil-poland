import type { Option } from "../types";

export const CapacityValues = {
  ALL: "Wszystkie",
  EIGHT: "8",
  NINE: "9",
  TEN_POINT_FIVE: "10.5",
} as const;

export type CapacityValue =
  (typeof CapacityValues)[keyof typeof CapacityValues];

export const CollectionValues = {
  ALL: "Wszystkie",
  ADD_WASH: "Drzwi AddWash",
  AI_CONTROL: "Panel AI Control",
  INVERTER: "Silnik inwerterowy",
  DISPLAY: "Wyświetlacz elektroniczny",
} as const;

export type CollectionValue =
  (typeof CollectionValues)[keyof typeof CollectionValues];

export const EnergyClassValues = {
  ALL: "Wszystkie",
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
} as const;

export type EnergyClassValue =
  (typeof EnergyClassValues)[keyof typeof EnergyClassValues];

export const SortValues = {
  POPULARITY: "Popularność",
  PRICE: "Cena",
  CAPACITY: "Pojemność",
} as const;

export type SortValue = (typeof SortValues)[keyof typeof SortValues];

export const capacityOptions: Option[] = [
  { value: CapacityValues.ALL, label: "Wszystkie" },
  { value: CapacityValues.EIGHT, label: "8kg" },
  { value: CapacityValues.NINE, label: "9kg" },
  { value: CapacityValues.TEN_POINT_FIVE, label: "10.5kg" },
];

export const collectionOptions: Option[] = [
  { value: CollectionValues.ALL, label: "Wszystkie" },
  { value: CollectionValues.ADD_WASH, label: "Drzwi AddWash" },
  { value: CollectionValues.AI_CONTROL, label: "Panel AI Control" },
  { value: CollectionValues.INVERTER, label: "Silnik inwerterowy" },
  { value: CollectionValues.DISPLAY, label: "Wyświetlacz elektroniczny" },
];

export const energyClassOptions: Option[] = [
  { value: EnergyClassValues.ALL, label: "Wszystkie" },
  { value: EnergyClassValues.A, label: "A" },
  { value: EnergyClassValues.B, label: "B" },
  { value: EnergyClassValues.C, label: "C" },
  { value: EnergyClassValues.D, label: "D" },
  { value: EnergyClassValues.E, label: "E" },
  { value: EnergyClassValues.F, label: "F" },
];

export const sortOptions: Option[] = [
  { value: SortValues.POPULARITY, label: "Popularność" },
  { value: SortValues.PRICE, label: "Cena" },
  { value: SortValues.CAPACITY, label: "Pojemność" },
];
