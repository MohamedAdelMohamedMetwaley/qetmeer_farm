import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b border-black py-5 px-5 xl:px-0 content-grid h-fit bg-background fixed left-0 right-0 top-0 z-50 cairo-font">
      <div className="flex justify-between items-center breakout">
        <h3>قِطْمِير</h3>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
