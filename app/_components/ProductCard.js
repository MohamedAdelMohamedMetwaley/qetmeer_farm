import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as filledHeart } from "@fortawesome/free-solid-svg-icons";

function numToArabic(number) {
  return number.toLocaleString("ar-EG");
}
const filled = false;

function ProductCard({ product }) {
  const { name, image, price, discount, measuringUnit } = product;

  return (
    <div className="relative h-[290px] md:h-[330px] lg:h-[400px] border border-black flex flex-col items-center bg-white embla__slide">
      <div className="border-b relative overflow-clip border-black aspect-[6/5] w-[195px] md:w-[220px] lg:w-[300px]">
        <Image
          src={image}
          fill
          className="object-cover object-bottom"
          alt={name}
        />
        {discount && (
          <p className="absolute top-2 px-10 -right-6 rotate-[40deg] bg-green-700 text-white roboto-font text-lg">
            خصم
          </p>
        )}
      </div>
      <div className="bg-secondary py-2 md:px-6 px-4 -translate-y-5">
        <h3 className="text-base md:text-lg cairo-font">{name}</h3>
      </div>

      <p className="roboto-font text-xl">
        {discount ? (
          <>
            <span className="line-through text-stone-500 mx-2">
              {numToArabic(price)}ج
            </span>
            {numToArabic(price - discount)}ج
          </>
        ) : (
          `${numToArabic(price)}ج`
        )}{" "}
        / {measuringUnit}
      </p>
      <div className="absolute bottom-3 w-full flex items-center justify-center gap-2">
        <button className="bg-primary text-white text-sm md:text-base w-[75%] py-2 rounded-md font-semibold transition-colors duration-300 hover:bg-green-900">
          أضف إلى العربة
        </button>
        <button className="md:w-7 md:h-7 w-5 h-5">
          <FontAwesomeIcon
            icon={filled ? filledHeart : regularHeart}
            className={`cursor-pointer hover:text-red-500 transition-colors duration-300 fill-red-500 text-lg md:text-2xl ${
              filled && "text-red-500"
            }`}
            textAnchor="favourite"
          />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
