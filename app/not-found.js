import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-7 mt-4 flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-semibold">هذه الصفحة غير موجودة 😐</h1>
      <Link
        href="/"
        className="inline-block bg-primary hover:bg-green-900 transition-colors duration-300 text-white rounded-lg px-6 py-3 text-lg"
      >
        إلى الصفحة الرئيسية
      </Link>
    </main>
  );
}

export default NotFound;
