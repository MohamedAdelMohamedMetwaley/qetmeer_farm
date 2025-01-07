"use client";

import { useSearchParams } from "next/navigation";

function ViewAllProductsLink({ children }) {
  const searchParams = useSearchParams();
  //assign 'filter' to the parameters in the url, if it doesn't exist assign to 'all'
  const filter = searchParams?.get("category") ?? "all";
  return filter === "all" ? <></> : children;
}

export default ViewAllProductsLink;
// {filter !== "all"
