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
  },
  {
    name: "زبدة بقري",
    price: 120,
    discount: 20,
    image: prod2,
    measuringUnit: "كج",
  },
  {
    name: "جبنة",
    price: 30,
    discount: 0,
    image: prod3,
    measuringUnit: "كج",
  },
];

function ProductsSlider() {
  const featuredProducts = featured;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    direction: "rtl",
    loop: false,
  });
  return (
    <section
      className="embla flex justify-center w-full mb-7 sm:mb-10"
      dir="rtl"
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container sm:flex gap-5 md:gap-10 lg:gap-20">
          {featuredProducts.map((product) => (
            <ProductCard product={product} key={product.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSlider;
