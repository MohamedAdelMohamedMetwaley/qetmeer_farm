"use client";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "./CartContext";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CloseButton from "./CloseButton";
import Link from "next/link";

const getScrollbarWidth = () => {
  return window.innerWidth - document.documentElement.clientWidth;
};

function ViewCart() {
  const {
    cartItems,
    increaseItemAmount,
    decreaseItemAmount,
    deleteItem,
    totalPrice,
    numToArabic,
    totalDiscount,
  } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const numberOfCartItems = cartItems.length;

  // Effect to handle body scrolling when modal opens/closes
  useEffect(() => {
    const scrollbarWidth = getScrollbarWidth();

    if (isModalOpen) {
      // Disable scrolling and prevent layout shift
      document.body.classList.add("no-scroll");
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Re-enable scrolling and reset padding
      document.body.classList.remove("no-scroll");
      document.body.style.paddingRight = "0px";
    }

    // Cleanup: reset padding and remove class when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
      document.body.style.paddingRight = "0px";
    };
  }, [isModalOpen]);

  useEffect(() => {
    numberOfCartItems === 0 && setIsModalOpen(false);
  }, [numberOfCartItems]);

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50">
          <div
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-black bg-opacity-40 -z-10"
          />
          <div className="w-[350px] bg-background h-full flex flex-col justify-between pb-5 pt-20 transition-all duration-300 slide-in overflow-y-scroll no-scrollbar">
            <div>
              <CloseButton
                styling="w-6 h-6 absolute top-5 right-5"
                onClick={() => setIsModalOpen(false)}
              />
              <p className="absolute top-5 left-5 text-lg text-stone-500">
                الإجمالي: {numToArabic(totalPrice - totalDiscount)}ج
              </p>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <CartItem
                    {...item}
                    increaseItemAmount={increaseItemAmount}
                    decreaseItemAmount={decreaseItemAmount}
                    deleteItem={deleteItem}
                    numToArabic={numToArabic}
                  />
                  <hr className="mt-1 w-10/12 mx-auto border-stone-300" />
                </div>
              ))}
            </div>
            <Link
              href="/order/new"
              onClick={() => setIsModalOpen(false)}
              className="bg-primary hover:bg-green-900 transition-colors duration-300 text-white font-bold py-2 px-4 rounded w-4/5 self-center mt-6 text-center"
            >
              إتمام الشراء
            </Link>
          </div>
        </div>
      )}
      {!isModalOpen && numberOfCartItems > 0 && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-7 right-5 sm:right-10 text-xl bg-green-900 flex items-center justify-between gap-5 hover:bg-green-950 text-white py-2 px-4 rounded-md transition-colors duration-300"
        >
          عرض السلة{" "}
          <div className="relative flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="absolute text-xs rounded-full w-3 h-3 flex items-center justify-center -top-1 -right-1 bg-red-500 text-white">
              {numberOfCartItems}
            </span>
          </div>
        </button>
      )}
    </div>
  );
}

export default ViewCart;
