import Link from "next/link";
import { getCategories, getProducts } from "../_lib/data-service";
import ViewAllProductsLink from "../_components/ViewAllProductsLink";
import ProductsWithSearch from "../_components/ProductsWithSearch";

// If we use searchParams, this will not be neaded as the page will be dynamic
export const revalidate = 10;

async function page() {
  // fetch in parallel
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <main className="min-h-screen flex flex-col items-center">
      <ProductsWithSearch categories={categories} products={products} />
      <ViewAllProductsLink>
        <div className="text-lg sm:text-2xl  px-4 py-3 m-5 rounded-md hover:text-green-800 ">
          <Link href="/products" className="underline">
            عرض جميع المنتجات &larr;
          </Link>
        </div>
      </ViewAllProductsLink>
    </main>
  );
}

export default page;
