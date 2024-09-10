"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useProducts } from "./ProductContext";
import ProductCard from "./ProductCard";

function FeaturedProductsSlider() {
  const { topThreeProducts } = useProducts();

  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    direction: "rtl",
    active: false,
    breakpoints: { "(max-width: 645px)": { active: true } },
  });

  return (
    <div className="w-full">
      <section
        className={`embla flex w-full mb-7 lg:mb-10 mt-10 justify-center`}
        dir="rtl"
      >
        <div ref={emblaRef} className="embla__viewport">
          <div className="embla__container gap-5 md:gap-10 lg:gap-20">
            {topThreeProducts.map((product) => (
              <ProductCard
                containerHeight="h-[290px] md:h-[330px] lg:h-[400px]"
                imageWidth="w-[195px] md:w-[220px] lg:w-[300px]"
                product={product}
                key={product.name}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedProductsSlider;
