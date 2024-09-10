"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6 h-full">
      <h1 className="text-3xl font-semibold">حدث خطا ما!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-primary text-WHITE px-6 py-3 text-lg"
        onClick={reset}
      >
        حاول مجدداً
      </button>
    </main>
  );
}
