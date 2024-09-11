"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks({ toggleMenu }) {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  return (
    <>
      <li>
        <Link
          href="/"
          className={`hover:text-green-800 transition-all duration-300 ${
            isActive("/") ? "active" : ""
          }`}
          onClick={toggleMenu}
        >
          الصفحة الرئيسية
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          className={`hover:text-green-800 transition-all duration-300 ${
            isActive("/products") ? "active" : ""
          }`}
          onClick={toggleMenu}
        >
          جميع المنتجات
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={`hover:text-green-800 transition-all duration-300 ${
            isActive("/about") ? "active" : ""
          }`}
          onClick={toggleMenu}
        >
          عنا
        </Link>
      </li>
      <li>
        <Link
          href="/login"
          className={`hover:text-green-800 transition-all duration-300 ${
            isActive("/login") ? "active" : ""
          }`}
          onClick={toggleMenu}
        >
          تسجيل الدخول
        </Link>
      </li>
    </>
  );
}

export default NavLinks;
