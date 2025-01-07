"use client";

import ProductCard from "./ProductCard";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import EmblaCarousel from "./EmblaCarousel";

function ProductsSlider({ searchQuery, products, category = "all" }) {
  const searchParams = useSearchParams();
  //assign 'filter' to the parameters in the url, if it doesn't exist assign to 'all'
  const filter = searchParams?.get("category") ?? "all";
  // Derived state. These are the products that will actually be displayed
  const displayedProducts =
    searchQuery.length > 0
      ? products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : products;

  const isShowingAllProducts = category === "all";

  const numOfProductsInCategory = useMemo(
    () =>
      !isShowingAllProducts &&
      displayedProducts.filter((product) => product.category === category)
        .length,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [category, displayedProducts]
  );

  // don't render if there are no products in the category
  if (!numOfProductsInCategory) return;
  // render by filter, if no filter render all
  if (filter !== category && filter !== "all") return;

  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold mb-3">{category}</h2>
      <hr className="w-11/12 sm:w-4/5 border-stone-500" />
      <section className="embla flex w-full mb-7 lg:mb-10 mt-6" dir="rtl">
        <EmblaCarousel>
          <div className="embla__container gap-5 md:gap-8 lg:gap-12">
            {displayedProducts.map(
              (product) =>
                (isShowingAllProducts || product.category === category) && (
                  <ProductCard
                    containerHeight="h-[260px] sm:h-[290px] lg:h-[330px]"
                    imageWidth={"w-[160px] sm:w-[195px] lg:w-[220px]"}
                    product={product}
                    key={product.name}
                  />
                )
            )}
          </div>
        </EmblaCarousel>
      </section>
    </div>
  );
}

export default ProductsSlider;
