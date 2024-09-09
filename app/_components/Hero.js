import Link from "next/link";

function Hero() {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat text-center h-screen "
      style={{
        backgroundImage: "url(./bg6.jpeg)",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 h-full w-full overflow-hidden bg-fixed bg-green-950 bg-opacity-60">
        <div className="flex flex-col h-full items-center justify-center text-white">
          <h1 className="text-6xl font-bold mb-6 mt-8">
            مزارعنا تقدم أعلى جودة بأفضل الأسعار
          </h1>
          <p className="mb-8 tracking-wide text-stone-200">
            اطلب دلوقتي واستمتع بأفضل المنتجات من مزرعة قطمير
          </p>
          <Link
            href="/"
            className="border-black border text-lg tracking-wider bg-primary py-4 px-7 rounded-lg hover:bg-green-900 transition-colors duration-300 font-bold"
          >
            تصفح المنتجات
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
