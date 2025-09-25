"use client";

import { useAppContext } from "@/app/ShopContext";
import Image from "next/image";
import Link from "next/link";

const CartContainer = () => {
  const { addToCart, cartQty, handleAddToCart } = useAppContext();

  return (
    <div className="min-h-screen pt-20 relative">
      {addToCart.length === 0 ? (
        <div className="flex items-center justify-center text-[#d9d9d] mt-7">
          <h2 className="text-[#d9d9d9] text-2xl font-semibold mb-4 text-center">
            No agregaste nada a la Lista, genio
          </h2>
        </div>
      ) : (
        <>
          <h2 className="text-[#d9d9d9] text-2xl font-semibold mb-10 text-center mt-7">
            {`Tu carrito tiene ${cartQty()} productos${
              cartQty() > 1 ? `s` : ``
            }`}
          </h2>
        </>
      )}
      <section
        className="grid justify gap-1 items-center"
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(180px, 1fr))` }}
      >
        {cartQty.map((product) => {
          const imageUrl = `${product.image}`;

          return (
            <div key={product.id} className="flex flex-col ml-1 mr-1 max-w-[200px]">
              <Link
                href={`/product/${product.id}`}
                className="block w-full h-[280px] relative"
              >
                <Image
                  src={imageUrl}
                  alt="Póster"
                  fill
                  className="object-cover rounded-lg border-2 border-[#D4AF37]"
                  style={{ boxShadow: "0 0 15px rgba(212, 175, 55, 0.7" }}
                />
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const { id, image } = product;
                    handleAddToCart({ id, image });
                  }}
                  className="absolute top-2 right-2 p-1 cursor-pointer fill-[#ea6d6d] border-[#1e1e1e]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5"
                  viewBox="0 0 512 512"
                
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                  </svg>
              </div>
              </Link>

              
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CartContainer;