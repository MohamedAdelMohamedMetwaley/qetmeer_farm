import Link from "next/link";

function Navigation() {
  return (
    <nav className="z-10 text-sm">
      <ul className="flex gap-8 items-center">
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
