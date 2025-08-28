import ShopCards from "./ShopCards";

const ShopGrid = ({ products = [] }) => {
  return (
    <div>
      <h2 className="text-3xl flex justify-center font-semibold pt-4">
        ¡Nuestros productos!
      </h2>

      <div className="grid grid-cols-4 gap-6 max-w-[1200px] mx-auto py-10">
        {products.map((product) => (
          <ShopCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopGrid;