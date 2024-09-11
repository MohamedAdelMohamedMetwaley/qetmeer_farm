"use client";

import { usePathname } from "next/navigation";

function HeaderLayoutPart({ children }) {
  const pathname = usePathname();
  const noHeaderPaths = ["/login"];
  const hideHeader = noHeaderPaths.includes(pathname);

  return hideHeader ? <></> : children;
}

export default HeaderLayoutPart;
