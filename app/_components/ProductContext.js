"use client";

import { createContext, useContext, useMemo, useState } from "react";
import prod1 from "@/public/milk.jpg";
import prod2 from "@/public/butter.jpg";
import prod3 from "@/public/cheese.jpg";

// const initialState = {
//   products: [
const initialProducts = [
  {
    name: "لبن بقري",
    price: 50,
    discount: 0,
    image: prod1,
    measuringUnit: "لتر",
    category: "ألبان",
    sellCount: 3,
  },
  {
    name: "زبدة بقري",
    price: 120,
    discount: 20,
    image: prod2,
    measuringUnit: "كج",
    category: "زبدة",
    sellCount: 5,
  },
  {
    name: "جبنة",
    price: 30,
    discount: 0,
    image: prod3,
    measuringUnit: "كج",
    category: "ألبان",
    sellCount: 2,
  },
  {
    name: "جبنة جاموسي",
    price: 40,
    discount: 0,
    image: prod3,
    measuringUnit: "كج",
    category: "ألبان",
    sellCount: 7,
  },
  {
    name: "لحمة بقري",
    price: 200,
    discount: 30,
    image: prod1,
    measuringUnit: "كج",
    category: "لحوم",
    sellCount: 1,
  },
];
// };

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const topThreeProducts = useMemo(
    () => products.sort((a, b) => b.sellCount - a.sellCount).slice(0, 3),
    [products]
  );

  // Derived state. These are the products that will actually be displayed
  const searchedProducts =
    searchQuery.length > 0
      ? products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : products;

  return (
    <ProductContext.Provider
      value={{
        products: searchedProducts,
        topThreeProducts,
        setProducts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error("ProductContext was used outside of the ProductProvider");
  return context;
}

export { ProductProvider, useProducts };
