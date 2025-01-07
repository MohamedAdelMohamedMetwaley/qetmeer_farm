"use client";

import { useState } from "react";
import { useCart } from "@/app/_components/CartContext";
import { createOrder } from "@/app/_lib/actions";
import GeolocationButton from "@/app/_components/GeolocationButton";
import Link from "next/link";

const isValidPhone = (str) => /^01[0-2,5][0-9]{8}$/.test(str);

function Page() {
  const {
    cartItems,
    setCartItems,
    totalPrice,
    numToArabic,
    location,
    address,
    totalDiscount,
  } = useCart();
  const [addressError, setAddressError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);

  const cartData = {
    items: cartItems,
    total: totalPrice,
    discount: totalDiscount,
  };

  const createOrderWithData = createOrder.bind(null, cartData);

  return (
    <main className="flex h-screen">
      {cartItems.length === 0 ? (
        <div className="flex flex-col px-3 py-4 mr-16 mt-10">
          <Link
            href="/products"
            className="text-blue-600 hover:underline cairo-font"
          >
            &rarr; الرجوع إلى جميع المنتجات
          </Link>
          <h1 className="text-2xl mt-3">
            لا يوجد منتجات في السلة. ابدأ بإضافة بعض المنتجات
          </h1>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center w-full mt-32">
            <form
              action={async (formData) => {
                if (!isValidPhone(formData.get("phone"))) {
                  // if (false) {
                  setPhoneError(
                    "رقم التليفون غير صحيح، يجب أن يبدأ الرقم بـ 01 ويتكون من 11 خانات"
                  );
                  return;
                }
                setPhoneError(null);
                (await createOrderWithData(formData)) && setCartItems([]);
              }}
              className="cairo-font max-[340px]:w-[250px] w-[300px] sm:w-[500px] relative"
            >
              <div className="mb-5 flex max-sm:flex-col max-sm:gap-3 sm:items-center">
                <label className="sm:basis-40 text-lg">الاسم</label>
                <input
                  type="text"
                  name="customer"
                  id="customer"
                  defaultValue=""
                  className="input grow"
                  required
                />
              </div>
              <div className="mb-5 flex max-sm:flex-col max-sm:gap-3 sm:items-center">
                <label className="sm:basis-40 text-lg">رقم التليفون</label>
                <div className="grow">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    defaultValue=""
                    className="input w-full"
                    onFocus={() => setPhoneError(null)}
                    required
                  />
                  {phoneError && (
                    <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                      {phoneError}
                    </p>
                  )}
                </div>
              </div>
              <div className="relative mb-5 flex max-sm:flex-col max-sm:gap-3 sm:items-center">
                <label className="sm:basis-40 text-lg">العنوان</label>
                <div className="grow">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    defaultValue={address}
                    className="input w-full"
                    disabled={isLoadingAddress}
                    onFocus={() => setAddressError(null)}
                    required
                  />
                  {addressError && (
                    <p
                      dir="ltr"
                      className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700"
                    >
                      {addressError}
                    </p>
                  )}
                </div>
                {!location.latitude && !location.longitude && (
                  <span className="absolute z-50 left-[3px] top-[43px] sm:top-[3px]">
                    <GeolocationButton
                      setError={setAddressError}
                      setIsLoading={setIsLoadingAddress}
                      isLoading={isLoadingAddress}
                    />
                  </span>
                )}
              </div>
              <div className="flex max-sm:flex-col justify-between sm:items-center mt-8 sm:mt-10">
                <button className="primary-btn text-lg font-bold py-2 px-6 tracking-wider">
                  اطلب الآن
                </button>
                <div className="max-sm:mt-4 text-center ml-2">
                  السعر الإجمالي:{" "}
                  {/* <span className="font-bold amiri-font mx-1">
                  {numToArabic(totalPrice - totalDiscount)}ج
                </span> */}
                  <p className="font-bold amiri-font mx-1">
                    {totalDiscount ? (
                      <>
                        <span className="line-through text-stone-500 mx-2">
                          {numToArabic(totalPrice)}ج
                        </span>
                        {numToArabic(totalPrice - totalDiscount)}ج
                      </>
                    ) : (
                      `${numToArabic(totalPrice)}ج`
                    )}
                  </p>
                </div>
              </div>
            </form>
          </div>
          <Link
            href="/products"
            className="absolute right-5 min-[400px]:right-10 top-10 text-sm text-blue-500 hover:underline cairo-font"
          >
            &rarr; أكمل التسوق
          </Link>
        </>
      )}
    </main>
  );
}

export default Page;
