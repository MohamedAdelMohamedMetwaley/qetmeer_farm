"use client";

import { useProducts } from "./ProductContext";

function SearchProducts() {
  const { searchQuery, setSearchQuery } = useProducts();

  return (
    <input
      type="text"
      placeholder="ابحث في المنتجات"
      className="w-9/12 sm:w-1/2 lg:w-1/3 border border-stone-300 py-2 pt-3 px-5 rounded-full focus:ring-2 focus:outline-none focus:ring-green-800 shadow-xl mt-28"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchProducts;
