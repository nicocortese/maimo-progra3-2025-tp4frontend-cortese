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
      description:
        "Un clásico retro con estilo urbano. Ideal para el día a día.",
    },
    {
      id: "2",
      name: "Zapatilla Azul",
      image: "/images/blue-shoe.jpg",
      price: 120,
      discount: 0,
      description: "Diseño versátil y cómodo. Perfecto para cualquier ocasión.",
    },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) return <p className="p-6">Producto no encontrado</p>;

  const finalPrice = product.discount
    ? product.price - product.discount
    : product.price;

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Flecha volver a Home */}
      <Link
        href="/"
        className="inline-flex items-center text-[rgb(var(--foreground-rgb))] hover:opacity-80 mb-6"
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
        Volver
      </Link>

      {/* Contenedor del producto */}
      <div
        className="flex flex-col md:flex-row gap-12 items-center md:items-start p-8 rounded-xl shadow"
        style={{
          backgroundColor: "rgb(var(--card-bg-rgb))",
          color: "rgb(var(--card-text-rgb))",
        }}
      >
        {/* Imagen */}
        <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-4xl font-bold logoFont">{product.name}</h1>

          {product.discount > 0 && (
            <span className="bg-[#D64541] text-white px-3 py-1 rounded text-sm font-semibold w-max">
              -{product.discount}%
            </span>
          )}

          <p className="text-2xl font-semibold">
            {product.discount > 0 && (
              <span className="line-through text-gray-400 mr-2">
                ${product.price}
              </span>
            )}
            <span>${finalPrice}</span>
          </p>

          {/* Descripción */}
          <p className="text-base leading-relaxed opacity-80">
            {product.description}
          </p>

          {/* Botones */}
          <div className="flex items-center gap-4 mt-4">
            <button className="bg-[#D64541] text-white px-6 py-3 rounded-full hover:bg-[#FF5B57] transition-colors">
              Agregar al carrito
            </button>
            <button className="p-3 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M20.8 4.6c-1.9-1.9-5-1.9-6.9 0l-.9.9-.9-.9c-1.9-1.9-5-1.9-6.9 0s-1.9 5 0 6.9l7.8 7.8 7.8-7.8c1.9-1.9 1.9-5 0-6.9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
