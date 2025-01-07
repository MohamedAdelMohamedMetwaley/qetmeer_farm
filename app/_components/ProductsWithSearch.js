"use client";

import { useState } from "react";
import ProductsSlider from "./ProductsSlider";

function ProductsWithSearch({ categories, products }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="ابحث في المنتجات"
        className="w-9/12 sm:w-1/2 lg:w-1/3 border border-stone-300 py-2 pt-3 px-5 rounded-full focus:ring-2 focus:outline-none focus:ring-green-800 shadow-xl mt-28"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <section className="flex flex-col w-full gap-10 px-5 sm:px-10 my-12">
        {categories.map((category) => (
          <ProductsSlider
            searchQuery={searchQuery}
            products={products}
            key={category.name}
            category={category.name}
          />
        ))}
      </section>
    </>
  );
}

export default ProductsWithSearch;
