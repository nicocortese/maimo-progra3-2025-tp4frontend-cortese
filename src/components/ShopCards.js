import Image from "next/image";
import Link from "next/link";

const ShopCards = ({ product }) => {
  const { id, name, image, price, discount } = product;

  const finalPrice = discount ? price - discount : price;

  return (
    <article
      className="relative group rounded-xl border text-[#1a1a1a] shadow hover:shadow-xl transition overflow-hidden"
      style={{
        backgroundColor: `rgb(var(--card-bg-rgb))`,
        color: `rgb(var(--card-text-rgb))`,
      }}
    >
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Badge de descuento */}
      {discount && (
        <span className="absolute top-3 left-3 bg-[#D64541] text-[#FFEFEF] text-sm font-bold px-2 py-1 rounded">
          -{discount}%
        </span>
      )}

      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{name}</h3>

        <div className="flex items-center gap-2 mt-2">
          {discount && (
            <span className="line-through text-gray-400 text-sm">${price}</span>
          )}
          <span
            className="text-lg font-bold"
            style={{ color: "rgb(var(--foreground-rgb))" }}
          >
            ${finalPrice}
          </span>
        </div>
      </div>

      {/* Hover acciones */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
        {/* Search */}
        <Link
          href={`/product/${id}`}
          className="p-3 bg-white rounded-full shadow hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </Link>

        {/* Heart */}
        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M20.8 4.6c-1.9-1.9-5-1.9-6.9 0l-.9.9-.9-.9c-1.9-1.9-5-1.9-6.9 0s-1.9 5 0 6.9l7.8 7.8 7.8-7.8c1.9-1.9 1.9-5 0-6.9z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default ShopCards;
