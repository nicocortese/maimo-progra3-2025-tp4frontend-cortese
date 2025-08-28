import Image from "next/image";
const ShopCards = () => {
  return (
    <article className="col-span-1 rounded-3xl overflow-hidden bg-[#FFEFEF] shadow-lg">
      <div className="relative w-full h-[300px]">
        <Image
          src="/assets/imgs/producto1.jpg"
          alt="Producto 1"
          fill
          className="rounded-3xl object-cover"
        />
      

      <div className="absolute inset-0 flex items-center justify-center font-bold text-xl z-10">
        <h3>Converse rojas y feas</h3>
      </div>
      </div>
    </article>
  );
};

export default ShopCards;
