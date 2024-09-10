import Link from "next/link";
import ProductsSlider from "../_components/ProductsSlider";
import SearchProducts from "../_components/SearchProducts";

function page({ searchParams }) {
  const categories = ["ألبان", "لحوم", "زبدة"];
  //assign 'filter' to the parameters in the url, if it doesn't exist assign to 'all'
  const filter = searchParams?.category ?? "all";

  return (
    <main className="min-h-screen flex flex-col items-center">
      <SearchProducts />
      <section className="flex flex-col w-full gap-10 px-5 sm:px-10 my-12">
        {categories.map(
          (category) =>
            (filter === category || filter === "all") && (
              <ProductsSlider key={category} category={category} />
            )
        )}
      </section>
      {filter !== "all" && (
        <div className="text-lg sm:text-2xl  px-4 py-3 m-5 rounded-md hover:text-green-800 ">
          <Link href="/products" className="underline">
            عرض جميع المنتجات &larr;
          </Link>
        </div>
      )}
    </main>
  );
}

export default page;
