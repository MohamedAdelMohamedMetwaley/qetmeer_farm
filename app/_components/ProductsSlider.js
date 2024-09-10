"use client";

import ProductCard from "./ProductCard";
import useEmblaCarousel from "embla-carousel-react";
import { useProducts } from "./ProductContext";
import { useMemo } from "react";

function ProductsSlider({ category = "all", addStyle = "" }) {
  const { products } = useProducts();
  const numOfProductsInCategory = useMemo(
    () =>
      category !== "all" &&
      products.filter((product) => product.category === category).length,
    [category, products]
  );

  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    direction: "rtl",
    active: false,
    breakpoints: { "(max-width: 645px)": { active: true } },
  });

  if (category !== "all" && !numOfProductsInCategory) return;

  return (
    <div className="w-full">
      {category !== "all" && (
        <>
          <h2 className="text-4xl font-bold mb-4">{category}</h2>
          <hr className="w-11/12 sm:w-4/5 border-stone-500" />
        </>
      )}

      <section
        className={`embla flex w-full mb-7 lg:mb-10 mt-10 ${addStyle}`}
        dir="rtl"
      >
        <div ref={emblaRef} className="embla__viewport">
          <div className="embla__container gap-5 md:gap-10 lg:gap-20">
            {products.map(
              (product) =>
                (category === "all" || product.category === category) && (
                  <ProductCard product={product} key={product.name} />
                )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsSlider;
