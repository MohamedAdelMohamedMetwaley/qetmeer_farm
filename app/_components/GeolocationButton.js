"use client";

import { useCart } from "./CartContext";

export default function GeolocationButton({
  setError,
  isLoading,
  setIsLoading,
}) {
  const { setLocation, setAddress } = useCart();

  const getGeolocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          // Fetch the address using reverse geocoding API
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();

          setAddress(data.display_name); // This will give you the formatted address
          setError(null);
          setIsLoading(false);
        },
        (err) => {
          setError("Geolocation not supported or permission denied");
          setIsLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        getGeolocation();
      }}
      disabled={isLoading}
      className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 rounded-md text-stone-800 px-2 py-2 sm:py-[6px] text-xs sm:text-sm"
    >
      احصل على العنوان
    </button>
  );
}
