import ProductCard from "./ProductCard";
import EmblaCarousel from "./EmblaCarousel";
import { getProducts } from "../_lib/data-service";

async function FeaturedProductsSlider() {
  const products = await getProducts();
  const topThreeProducts = products.slice(0, 3);

  return (
    <div className="w-full">
      <section
        className="embla flex w-full mb-7 lg:mb-10 mt-10 justify-center"
        dir="rtl"
      >
        <EmblaCarousel>
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
        </EmblaCarousel>
      </section>
    </div>
  );
}

export default FeaturedProductsSlider;
