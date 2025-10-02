"use client";

import Link from "next/link";
import Image from "next/image";

const BrandLogos = () => {
  const brands = [
    { name: "Nike", slug: "nike", logo: "/assets/imgs/brands/nike-logo.png" },
    { name: "Adidas", slug: "adidas", logo: "/assets/imgs/brands/adidas-logo.png" },
    { name: "Puma", slug: "puma", logo: "/assets/imgs/brands/puma-logo.png" },
    { name: "Reebok", slug: "reebok", logo: "/assets/imgs/brands/reebok-logo.png" },
    { name: "Converse", slug: "converse", logo: "/assets/imgs/brands/converse-logo.png" },
    { name: "Vans", slug: "vans", logo: "/assets/imgs/brands/vans-logo.png" },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center text-[rgb(var(--foreground-rgb))]">
          Marcas con las que trabajamos
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {brands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/brands/${brand.slug}`}
            className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="relative w-full h-20">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BrandLogos;
