import Hero from "./_components/Hero";
import Featured from "./_components/Featured";
import Categories from "./_components/Categories";
import Benefits from "./_components/Benefits";

export const revalidate = 10;

export default async function Page() {
  return (
    <main>
      <Hero />
      <Featured />
      <Categories />
      <Benefits />
    </main>
  );
}
