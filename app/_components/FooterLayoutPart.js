"use client";

import { usePathname } from "next/navigation";

function FooterLayoutPart({ children }) {
  const pathname = usePathname();
  const noFooterPaths = ["/login", "/order/new"];
  const hideFooter = noFooterPaths.includes(pathname);

  return hideFooter ? <></> : children;
}

export default FooterLayoutPart;
