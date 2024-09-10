// import ProductCard from "../_components/ProductCard";
import ProductsSlider from "../_components/ProductsSlider";
// import prod1 from "@/public/milk.jpg";
// import prod2 from "@/public/butter.jpg";
// import prod3 from "@/public/cheese.jpg";

// const products = [
//   {
//     name: "لبن بقري",
//     price: 50,
//     discount: 0,
//     image: prod1,
//     measuringUnit: "لتر",
//     category: "ألبان",
//   },
//   {
//     name: "زبدة بقري",
//     price: 120,
//     discount: 20,
//     image: prod2,
//     measuringUnit: "كج",
//     category: "زبدة",
//   },
//   {
//     name: "جبنة",
//     price: 30,
//     discount: 0,
//     image: prod3,
//     measuringUnit: "كج",
//     category: "ألبان",
//   },
//   {
//     name: "4جبنة",
//     price: 30,
//     discount: 0,
//     image: prod3,
//     measuringUnit: "كج",
//     category: "لحوم",
//   },
//   {
//     name: "3جبنة",
//     price: 30,
//     discount: 0,
//     image: prod3,
//     measuringUnit: "كج",
//     category: "لحوم",
//   },
//   {
//     name: "2جبنة",
//     price: 30,
//     discount: 0,
//     image: prod3,
//     measuringUnit: "كج",
//     category: "لحوم",
//   },
// ];

function page() {
  const categories = ["ألبان", "لحوم", "زبدة"];

  return (
    <main className="min-h-screen flex flex-col items-center">
      <input
        type="text"
        placeholder="ابحث في المنتجات"
        className="w-9/12 sm:w-1/2 lg:w-1/3 border border-stone-300 py-2 pt-3 px-5 rounded-full focus:ring-2 focus:outline-none focus:ring-green-800 shadow-xl mt-28 "
      />
      <section className="flex flex-col w-full gap-16 px-5 sm:px-10 my-16">
        {categories.map((categroy) => (
          <div key={categroy}>
            <h2 className="text-4xl font-bold mb-4">{categroy}</h2>
            <hr className="w-11/12 sm:w-4/5 border-stone-500" />
            {/* <div className="flex flex-wrap gap-5 md:gap-10 lg:gap-20 mt-10">
              {products.map(
                (product) =>
                  product.category === categroy && (
                    <ProductCard product={product} key={product.name} />
                  )
              )}
            </div> */}
            <ProductsSlider category={categroy} />
          </div>
        ))}
      </section>
    </main>
  );
}

export default page;
