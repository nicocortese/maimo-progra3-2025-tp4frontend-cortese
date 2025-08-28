import ShopCards from "./ShopCards";

const ShopGrid = () => {
  return (
    <div>
      <h2 className="text-3xl flex justify-center font-semibold pt-4">
        ¡Nuestros productos!
      </h2>

      <div className="grid grid-cols-4 gap-6 max-w-[1200px] mx-auto py-10">
        <ShopCards />
        <ShopCards />
        <ShopCards />
        <ShopCards />
        <ShopCards />
        <ShopCards />
        <ShopCards />
        <ShopCards />
      </div>
    </div>
  );
};

export default ShopGrid;
