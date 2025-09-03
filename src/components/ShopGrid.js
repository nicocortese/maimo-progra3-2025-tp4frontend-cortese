import ShopCards from "./ShopCards";

const ShopGrid = () => {
  // 🔹 Data temporal de prueba (después la reemplazás con API)
  const products = [
    { id: 1, name: "Converse Chuck Taylor", image: "/assets/imgs/producto1.jpg", price: 180, discount: 20 },
    { id: 2, name: "Adidas Superstar", image: "/assets/imgs/producto2.jpg", price: 150, discount: 10 },
    { id: 3, name: "Puma Suede Classic", image: "/assets/imgs/producto3.jpg", price: 110 },
    { id: 4, name: "Vans Old Skool", image: "/assets/imgs/producto4.jpg", price: 95, discount: 5 },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">¡Descubre las ofertas de hoy!</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ShopCards key={product.id} product={product} />
        ))}
      </div>

      {/* Botón Ver más */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Ver más
        </button>
      </div>
    </section>
  );
};

export default ShopGrid;