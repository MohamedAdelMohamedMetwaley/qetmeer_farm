import { useState } from "react";
import CloseButton from "./CloseButton";

function CartItem({
  name,
  measuringUnit,
  price,
  discount,
  amount,
  id,
  increaseItemAmount,
  decreaseItemAmount,
  deleteItem,
  numToArabic,
}) {
  const [displayedAmount, setDisplayedAmount] = useState(amount);

  function handleIncreaseAmount() {
    setDisplayedAmount((prev) => prev + 1);
    increaseItemAmount(id);
  }
  function handleDecreaseAmount() {
    setDisplayedAmount((prev) => prev - 1);
    decreaseItemAmount(id);
  }

  return (
    <div className="flex w-full py-3 px-3 cairo-font items-center justify-between">
      <div className="flex gap-3 text-sm">
        <p className="font-bold">
          {numToArabic(displayedAmount)} {measuringUnit}
        </p>
        <p>{name}</p>

        <p className="font-bold">
          {discount ? (
            <>
              <span className="line-through text-stone-500 mx-2">
                {numToArabic(price)}ج
              </span>
              {numToArabic(price - discount)}ج
            </>
          ) : (
            `${numToArabic(price)}ج`
          )}
        </p>
      </div>

      <div className="flex items-center pt-1 mr-2 text-2xl">
        <button
          onClick={handleIncreaseAmount}
          className="bg-primary ml-2 rounded-full h-8 w-8 flex items-center justify-center pb-1 text-white"
        >
          +
        </button>
        <button
          onClick={handleDecreaseAmount}
          className="bg-primary ml-5 rounded-full h-8 w-8 flex items-center justify-center pb-1 text-white"
        >
          -
        </button>
        <CloseButton
          styling="w-4 h-4 ml-1 text-stone-400"
          onClick={() => deleteItem(id)}
        />
      </div>
    </div>
  );
}

export default CartItem;
