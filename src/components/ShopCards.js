"use client";
import { FiEye, FiHeart } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const ShopCards = ({ product }) => {
  const { id, name, image, price, discount } = product;

  const finalPrice = discount ? price - discount : price;

  return (
    <article
      className="relative group rounded-xl border shadow hover:shadow-xl transition overflow-hidden"
      style={{
        backgroundColor: `rgb(var(--card-bg-rgb))`,
        color: `rgb(var(--card-text-rgb))`,
      }}
    >
      {/* Imagen */}
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Badge de descuento */}
      {discount && (
        <span className="absolute top-3 left-3 bg-[#D64541] text-[#FFEFEF] text-sm font-bold px-2 py-1 rounded">
          -{discount}%
        </span>
      )}

      {/* Info */}
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

      {/* Hover acciones - barra inferior */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4 py-2">
        {/* Ir al detalle */}
        <Link
          href={`/product/${id}`}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <FiEye className="w-5 h-5" />
        </Link>

        {/* Wishlist */}
        <button className="p-2 rounded-full hover:bg-gray-200">
          <FiHeart className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
};

export default ShopCards;
