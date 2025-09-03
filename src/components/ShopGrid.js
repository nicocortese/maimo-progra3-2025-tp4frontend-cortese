import Link from "next/link";
import ShopCards from "./ShopCards";

const ShopGrid = () => {
  // Data temporal (después reemplazar con API)
  const products = [
    { id: 1, name: "Converse Chuck Taylor", image: "/assets/imgs/producto1.jpg", price: 180, discount: 20 },
    { id: 2, name: "Adidas Superstar", image: "/assets/imgs/producto2.jpg", price: 150, discount: 10 },
    { id: 3, name: "Puma Suede Classic", image: "/assets/imgs/producto3.jpg", price: 110 },
    { id: 4, name: "Vans Old Skool", image: "/assets/imgs/producto4.jpg", price: 95, discount: 5 },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      {/* Título + Ver más alineados */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[rgb(var(--foreground-rgb))]">
          ¡Descubre las ofertas de hoy!
        </h2>

        <Link
          href="/shop"
          className="text-base font-medium underline underline-offset-4 hover:opacity-70 transition"
          style={{ color: "rgb(var(--foreground-rgb))" }}
        >
          Ver más
        </Link>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ShopCards key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ShopGrid;
