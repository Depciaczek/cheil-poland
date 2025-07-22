import type { StylesConfig } from "react-select";
import type { Option } from "./types";

export const customStyles: StylesConfig<Option, false> = {
  control: (base) => ({
    ...base,
    borderColor: "#fff",
    padding: "0.25rem 0.5rem",
    minHeight: "2.5rem",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#F3F3F3"
      : state.isFocused
      ? "#f0eded"
      : "#fff",
    color: "#111827",
    padding: "0.5rem 0.75rem",
    cursor: "pointer",
  }),
  menu: (base) => ({
    ...base,
    marginTop: "0.25rem",
    zIndex: 20,
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),
};
