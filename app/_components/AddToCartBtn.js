"use client";

import { useCart } from "./CartContext";

function AddToCartBtn({ product }) {
  const { addItemToCart, increaseItemAmount } = useCart();

  const item = {
    id: product.id,
    name: product.name,
    price: product.price,
    discount: product.discount,
    measuringUnit: product.measuring_unit,
    amount: 1,
  };

  function handleAddToCart() {
    increaseItemAmount(item.id) || addItemToCart(item);
  }

  return (
    <button
      onClick={handleAddToCart}
      className="bg-primary text-white text-sm md:text-base w-[75%] py-2 rounded-md font-semibold transition-colors duration-300 hover:bg-green-900"
    >
      أضف إلى العربة
    </button>
  );
}

export default AddToCartBtn;
