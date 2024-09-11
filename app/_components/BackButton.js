"use client";

import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <button
      className="bg-primary hover:bg-green-900 transition-colors duration-300 rounded-md self-start mr-5 text-white px-4 py-2"
      onClick={() => router.back()}
    >
      الرجوع
    </button>
  );
}

export default BackButton;
