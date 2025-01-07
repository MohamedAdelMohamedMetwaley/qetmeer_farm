"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "الصفحة الرئيسية",
    path: "/",
  },
  {
    name: "جميع المنتجات",
    path: "/products",
  },
  {
    name: "عنا",
    path: "/about",
  },
  {
    name: "تسجيل الدخول",
    path: "/login",
  },
];

function NavLinks({ toggleMenu }) {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  return (
    <>
      {navLinks.map(({ name, path }) => (
        <li key={path}>
          <Link
            href={path}
            className={`hover:text-green-800 transition-all duration-300 ${
              isActive(path) ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            {name}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
