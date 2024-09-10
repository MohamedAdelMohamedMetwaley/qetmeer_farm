import Link from "next/link";
import ProductsSlider from "./ProductsSlider";

function Featured() {
  return (
    <section className="flex flex-col items-center justify-center mt-24 px-3">
      <h2 className="text-3xl sm:text-4xl">الأكثر مبيعاً</h2>
      <ProductsSlider addStyle={"justify-center"} />
      <div className="border border-black sm:text-xl text-lg px-4 py-3  rounded-md">
        <Link href="/products" className="underline-link">
          تصفح جميع المنتجات &larr;
        </Link>
      </div>
    </section>
  );
}

export default Featured;
