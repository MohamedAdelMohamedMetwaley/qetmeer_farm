"use client";

import Link from "next/link";
import CollapsedNavigation from "./CollapsedNavigation";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <nav className="z-10 text-xs sm:text-sm flex flex-col items-center sm:block">
      <CollapsedNavigation />
      <ul className="hidden sm:flex gap-8 items-center">
        <li>
          <Link
            href="/"
            className={`hover:text-green-800 transition-all duration-300 ${
              isActive("/") ? "active" : ""
            }`}
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
          >
            تسجيل الدخول
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
