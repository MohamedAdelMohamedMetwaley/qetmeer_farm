"use client";

import useEmblaCarousel from "embla-carousel-react";

function EmblaCarousel({ children }) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    direction: "rtl",
    active: false,
    breakpoints: { "(max-width: 645px)": { active: true } },
  });
  return (
    <div ref={emblaRef} className="embla__viewport">
      {children}
    </div>
  );
}

export default EmblaCarousel;
