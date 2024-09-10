"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks({ setIsOpen }) {
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
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
        >
          تسجيل الدخول
        </Link>
      </li>
    </>
  );
}

export default NavLinks;
