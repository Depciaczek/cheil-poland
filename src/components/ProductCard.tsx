import type { CardProps } from "../types";

export const ProductCard = ({ product, isSelected, onSelect }: CardProps) => {
  return (
    <div className="rounded-xl bg-white shadow-md p-6 w-full flex flex-col justify-between h-full">
      <div className="flex flex-col items-center gap-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-auto rounded-md"
        />
        <h2 className="text-lg font-semibold text-center">
          {product.name}, {product.capacity} kg, {product.color}
        </h2>
        <div className="text-sm text-gray-700 w-full space-y-1">
          <p>
            <span className="text-gray-500">Pojemność (kg): </span>
            <span className="font-medium">{product.capacity}</span>
          </p>
          <p>
            <span className="text-gray-500">Wymiary (GxSxW): </span>
            <span className="font-medium">{product.dimensions} cm</span>
          </p>
          <p>
            <span className="text-gray-500">Funkcje: </span>
            <span className="font-medium">{product.collection.join(", ")}</span>
          </p>
          <p className="text-gray-500">
            Klasa energetyczna{" "}
            <span className="inline-block pl-1 pr-10 bg-[#009949] text-white font-semibold clip-energy-class">
              {product.energyClass}
            </span>
          </p>
          <p className="text-gray-500">
            Cena obowiązuje: {product.pricePeriod}
          </p>
        </div>
        <div className="text-2xl font-bold text-gray-900 mt-2">
          {product.price.toLocaleString()} zł
        </div>
        <div className="text-sm text-gray-500">
          {(product.price / 60).toFixed(2)} zł x 60 rat
        </div>
      </div>

      <button
        onClick={onSelect}
        className={`mt-6 self-center ${
          isSelected ? "bg-black" : "bg-[#1428A0] hover:bg-blue-700"
        } text-white text-sm font-thin py-2 px-10 rounded-full tracking-widest cursor-pointer`}
      >
        {isSelected ? "WYBRANE" : "WYBIERZ"}
      </button>
    </div>
  );
};
