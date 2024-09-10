import CollapsedNavigation from "./CollapsedNavigation";
import NavLinks from "./NavLinks";

function Navigation() {
  return (
    <nav className="z-10 text-xs sm:text-sm flex flex-col sm:block">
      <CollapsedNavigation />
      <ul className="hidden sm:flex gap-8 items-center">
        <NavLinks />
      </ul>
    </nav>
  );
}

export default Navigation;
