import Hero from "./_components/Hero";
import Featured from "./_components/Featured";
import Categories from "./_components/Categories";
import Benefits from "./_components/Benefits";
//TODO: manage global state
export default function Page() {
  return (
    <main className="">
      <Hero />
      {/* <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="ابحث في المنتجات"
          className="w-9/12 mx-auto sm:w-1/2 lg:w-1/3 border py-2 pt-3 px-5 rounded-full focus:ring-2 focus:outline-none focus:ring-green-800 shadow-lg mt-28 "
        />
      </div> */}
      <Featured />
      <Categories />
      <Benefits />
    </main>
  );
}
