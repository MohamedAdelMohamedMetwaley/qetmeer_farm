"use client";

import prod1 from "@/public/milk.jpg";
import prod2 from "@/public/butter.jpg";
import prod3 from "@/public/cheese.jpg";
import ProductCard from "./ProductCard";
import useEmblaCarousel from "embla-carousel-react";

const featured = [
  {
    name: "لبن بقري",
    price: 50,
    discount: 0,
    image: prod1,
    measuringUnit: "لتر",
    category: "ألبان",
  },
  {
    name: "زبدة بقري",
    price: 120,
    discount: 20,
    image: prod2,
    measuringUnit: "كج",
    category: "زبدة",
  },
  {
    name: "جبنة",
    price: 30,
    discount: 0,
    image: prod3,
    measuringUnit: "كج",
    category: "ألبان",
  },
];

const products = featured;

function ProductsSlider({ category = "all", addStyle = "" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    direction: "rtl",
    active: false,
    breakpoints: { "(max-width: 645px)": { active: true } },
  });

  return (
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
  );
}

export default ProductsSlider;
