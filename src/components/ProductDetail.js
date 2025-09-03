// src/app/components/ProductDetail.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductDetail({ id }) {
  const products = [
    {
      id: "1",
      name: "Zapatilla Roja",
      image: "/images/red-shoe.jpg",
      price: 100,
      discount: 10,
    },
    {
      id: "2",
      name: "Zapatilla Azul",
      image: "/images/blue-shoe.jpg",
      price: 120,
      discount: 0,
    },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) return <p className="p-6">Producto no encontrado</p>;

  const finalPrice = product.discount
    ? product.price - product.discount
    : product.price;

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Flecha volver a Home */}
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Home
      </Link>

      {/* Contenedor del producto */}
      <div
        className="flex flex-col md:flex-row gap-10 items-center p-6 rounded-xl shadow"
        style={{
          backgroundColor: "rgb(var(--card-bg-rgb))",
          color: "rgb(var(--card-text-rgb))",
        }}
      >
        {/* Imagen */}
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold logoFont">{product.name}</h1>

          {product.discount > 0 && (
            <span className="bg-[#D64541] text-white px-3 py-1 rounded text-sm font-semibold inline-block">
              -{product.discount}%
            </span>
          )}

          <p className="text-xl font-semibold">
            {product.discount > 0 && (
              <span className="line-through text-gray-400 mr-2">
                ${product.price}
              </span>
            )}
            <span>${finalPrice}</span>
          </p>

          <button className="mt-4 bg-[#D64541] text-white px-6 py-3 rounded-full hover:bg-[#FF5B57] transition-colors w-max">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
