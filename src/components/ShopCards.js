import Image from "next/image";

const ShopCards = ({ product }) => {
  return (
    <article className="col-span-1 rounded-3xl overflow-hidden bg-[#FFEFEF] shadow-lg">
      <div className="relative w-full h-[300px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="rounded-3xl object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center font-bold text-xl z-10 bg-black/40 text-white">
          <h3>{product.name}</h3>
        </div>
      </div>
    </article>
  );
};

export default ShopCards;