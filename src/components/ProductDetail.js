"use client";

import { useShopContext } from "@/contexts/ShopContext";
import { useEffect, useState } from "react";
import Image from "next/image";

const ProductDetail = ({ id }) => {
  const {getOneProduct, product} = useShopContext()
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState("/assets/imgs/producto1.jpg");


  useEffect(() => {
    getOneProduct(id)
  }, [])

 if (!product || !product._id) {
    return <p className="text-center py-20">Cargando producto...</p>;
  }

  const finalPrice = product.discount
    ? product.price - product.discount
    : product.price;

  const sizes = ["38", "39", "40", "41", "42", "43", "44"];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Galería */}
        <div className="flex-1">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow">
            <Image
              src={mainImage || product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex gap-3 mt-4">
            {product.images?.map((img, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setMainImage(img)}
                className={`relative w-24 h-24 rounded-lg overflow-hidden cursor-pointer border transition 
                  ${
                    (mainImage || product.images[0]) === img
                      ? "border-black"
                      : "border-gray-200 hover:border-black"
                  }`}
              >
                <Image
                  src={img}
                  alt={`${product.name}-${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Información */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-sm text-gray-600 mt-1">
            {product.gender} • {product.style}
          </p>
          <p className="text-sm uppercase tracking-wide text-gray-500">
            {product.brand}
          </p>

          {/* Precio */}
          <div className="flex items-center gap-3 mt-6">
            {product.discount && (
              <span className="line-through text-gray-400 text-lg">
                ${product.price}
              </span>
            )}
            <span className="text-3xl font-bold">${finalPrice}</span>
          </div>

          {/* Descripción */}
          <p className="mt-6 text-lg leading-relaxed">{product.description}</p>

          {/* Talles */}
          <div className="mt-8">
            <h3 className="font-semibold mb-3">Selecciona tu talle</h3>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-3 rounded-md border text-sm font-medium transition 
                    ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white hover:bg-gray-100 border-gray-300"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Botón */}
          <button className="mt-10 px-8 py-4 rounded-xl bg-black text-white font-semibold text-lg hover:opacity-80 transition">
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;