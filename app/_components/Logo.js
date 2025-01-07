import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image
        src={logo}
        quality={100}
        height="65"
        width="65"
        alt="مزارع قطمير"
      /> */}
      <span className="text-xl amiri-font font-semibold text-primary-100 text-green-900">
        مزارع قِطْمِير
      </span>
    </Link>
  );
}

export default Logo;
