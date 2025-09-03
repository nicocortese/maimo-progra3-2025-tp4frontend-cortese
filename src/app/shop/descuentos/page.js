import ShopCards from "@/components/ShopCards";

const products = [
  { id: 1, name: "Converse Chuck Taylor", image: "/assets/imgs/producto1.jpg", price: 180, discount: 20 },
  { id: 2, name: "Adidas Superstar", image: "/assets/imgs/producto2.jpg", price: 150, discount: 10 },
  { id: 3, name: "Puma Suede Classic", image: "/assets/imgs/producto3.jpg", price: 110 },
  { id: 4, name: "Vans Old Skool", image: "/assets/imgs/producto4.jpg", price: 95, discount: 5 },
];

export default function Descuentos() {
  const discounted = products.filter((p) => p.discount);

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-[rgb(var(--foreground-rgb))]">
        Zapatillas en descuento
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {discounted.map((product) => (
          <ShopCards key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
