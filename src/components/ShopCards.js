import Image from "next/image";

const ShopCards = ({ product }) => {
  const { name, image, price, discount } = product;

  // 🔹 calcular precio con descuento
  const finalPrice = discount
    ? (price - (price * discount) / 100).toFixed(2)
    : price;

  return (
    <article className="relative group rounded-xl border text-[#1a1a1a] shadow hover:shadow-xl transition overflow-hidden">
      {/* Descuento */}
      
      {/* Imagen */}
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>


      {discount && (
        <span className="absolute top-3 left-3 bg-[#D64541] text-[#FFEFEF] text-sm font-bold px-2 py-1 rounded">
          -{discount}%
        </span>
      )}

      

      {/* Info producto */}
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{name}</h3>

        <div className="flex items-center gap-2 mt-2">
          {discount && (
            <span className="line-through text-gray-400 text-sm">
              ${price}
            </span>
          )}
          <span className="text-lg font-bold text-[#1a1a1a]">${finalPrice}</span>
        </div>
      </div>

      {/* Hover acciones */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
        {/* Shuffle */}
        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M16 3h5v5M4 20l5-5m0-6L4 4m12 0l5 5m-5 5l5 5m-5 0H4" />
          </svg>
        </button>

        {/* Search */}
        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

        {/* Heart */}
        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20.8 4.6c-1.9-1.9-5-1.9-6.9 0l-.9.9-.9-.9c-1.9-1.9-5-1.9-6.9 0s-1.9 5 0 6.9l7.8 7.8 7.8-7.8c1.9-1.9 1.9-5 0-6.9z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default ShopCards;