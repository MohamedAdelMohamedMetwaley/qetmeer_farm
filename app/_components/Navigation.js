import Link from "next/link";
import CollapsedNavigation from "./CollapsedNavigation";

const isOpen = false;
const isActive = () => false;
// import { useState } from "react";
// import { useRouter } from "next/router";

function Navigation() {
  // const router = useRouter(); // Get the current route

  // const isActive = (path) => router.pathname === path;

  // Function to toggle the mobile menu

  return (
    <nav className="z-10 text-xs sm:text-sm flex flex-col items-center sm:block">
      <CollapsedNavigation />
      <ul className="hidden sm:flex gap-8 items-center">
        <li>
          <Link
            href="/"
            className="text-primary font-bold transition-all duration-300"
          >
            الصفحة الرئيسية
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="hover:text-green-800 duration-300 transition-colors"
          >
            جميع المنتجات
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-green-800 transition-colors duration-300"
          >
            عنا
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            className="hover:text-green-800 duration-300 transition-colors"
          >
            تسجيل الدخول
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
