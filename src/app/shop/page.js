import ShopGrid from "@/components/ShopGrid";

const products = [
  { id: 1, name: "Converse rojas retro", image: "/assets/imgs/producto1.jpg" },
  {
    id: 2,
    name: "Adidas Superstar vintage",
    image: "/assets/imgs/producto2.jpg",
  },
  { id: 3, name: "Nike Air Max 90 OG", image: "/assets/imgs/producto3.jpg" },
  { id: 4, name: "Puma Suede Classic", image: "/assets/imgs/producto4.jpg" },
];

export default function ShopPage() {
  return (
    <main>
      <ShopGrid products={products} />
    </main>
  );
}
