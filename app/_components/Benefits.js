import Link from "next/link";

function Benefits() {
  return (
    // <div className="">
    //   <div className="flex gap-16">d</div>
    // </div>
    <section className="flex flex-col items-center justify-center mt-32 mb-24">
      <h2 className="text-4xl mb-16">لماذا تختارنا؟</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
          {/* Farm-Fresh Products */}
          <div className="flex flex-col items-center">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4.49658C2.21983 8.78742 2.28792 12.7948 4.71358 20.9632C7.65067 29.4198 18.4933 29.9898 19.2961 30.0057C20.0244 31.1552 21.6917 32.7037 25.5123 33.5048L25.9366 31.4908C22.6401 30.8005 21.4336 29.5291 21.0187 28.8308L21.0108 28.8403C21.1486 28.074 23.4222 20.3267 18.9161 14.033C11.3715 5.673 0 4.49658 0 4.49658ZM38 5.82658C31.8282 6.794 31.2028 4.36992 19.8344 10.7238C21.687 12.8882 23.0238 15.4452 23.7438 18.2018C24.4638 20.9583 24.5482 23.8424 23.9907 26.6363C29.8854 24.2835 32.1702 20.341 32.8668 16.3985C32.8668 16.3985 34.8777 8.9315 38 5.82658ZM19.8344 10.7238L19.8312 10.7207V10.727L19.8344 10.7238ZM4.18475 8.26491C4.18475 8.26491 12.7696 10.5227 17.7112 26.5413C13.0483 25.1337 11.0564 20.531 10.3803 18.3587H10.3898C9.15575 14.5471 7.0292 11.0862 4.18475 8.26491Z"
                fill="#126741"
              />
            </svg>

            <h3 className="text-lg font-bold mb-4 text-green-900">
              منتجات طازجة ومحلية
            </h3>
            <p className="text-gray-700">
              نحن نحرص على تقديم منتجات طازجة مباشرة من مزارعنا إلى باب منزلك،
              مما يضمن لك الجودة العالية والطعم الرائع.
            </p>
          </div>

          {/* Handpicked for You */}
          <div className="flex flex-col items-center">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.415 27.1007L21.6258 26.4232C22.1049 25.1582 22.9195 23.7858 24.2037 22.3589L25.6287 23.6411C24.495 24.9013 23.8069 26.0657 23.415 27.1007Z"
                fill="#126741"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9145 6.70825C9.61687 6.70825 5.75 12.1133 5.75 17.9438C5.75 30.9579 23 39.2916 23 39.2916C23 39.2916 40.25 30.4213 40.25 17.9438C40.25 12.1152 36.3831 6.70825 31.0864 6.70825C27.4102 6.70825 24.6819 9.13379 23 12.5742C21.3162 9.13379 18.5897 6.70825 14.9145 6.70825ZM16.2917 23.919C16.2917 26.609 19.3027 27.4677 21.506 26.7528C20.4537 29.8683 21.4312 32.2958 22.3014 33.2349L23.7073 31.9316C23.3584 31.5559 22.5572 30.0015 23.2195 27.6938C24.3762 29.8376 29.7083 30.1079 29.7083 26.0647V15.3333C26.9464 17.6706 23.9957 18.5945 21.5673 19.3554C18.5179 20.3099 16.2917 21.0066 16.2917 23.919Z"
                fill="#126741"
              />
            </svg>

            <h3 className="text-lg font-bold text-green-900 mb-4">
              الالتزام بالجودة
            </h3>
            <p className="text-gray-700">
              نلتزم بأعلى معايير الجودة في كل ما نقدمه، لضمان حصولك على أفضل
              المنتجات بأفضل الأسعار.
            </p>
          </div>

          {/* Fast & Reliable Delivery */}
          <div className="flex flex-col items-center">
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.375 13.125C41.4563 13.125 43.125 14.7937 43.125 16.875V31.875H39.375C39.375 33.3668 38.7824 34.7976 37.7275 35.8525C36.6726 36.9074 35.2418 37.5 33.75 37.5C32.2582 37.5 30.8274 36.9074 29.7725 35.8525C28.7176 34.7976 28.125 33.3668 28.125 31.875H16.875C16.875 33.3668 16.2824 34.7976 15.2275 35.8525C14.1726 36.9074 12.7418 37.5 11.25 37.5C9.75816 37.5 8.32742 36.9074 7.27252 35.8525C6.21763 34.7976 5.625 33.3668 5.625 31.875H1.875V24.375C1.875 22.2937 3.54375 20.625 5.625 20.625L11.25 13.125H39.375ZM16.875 15.9375H12.1875L8.5125 20.625H16.875V15.9375ZM33.75 29.0625C33.0041 29.0625 32.2887 29.3588 31.7613 29.8863C31.2338 30.4137 30.9375 31.1291 30.9375 31.875C30.9375 32.6209 31.2338 33.3363 31.7613 33.8637C32.2887 34.3912 33.0041 34.6875 33.75 34.6875C34.4959 34.6875 35.2113 34.3912 35.7387 33.8637C36.2662 33.3363 36.5625 32.6209 36.5625 31.875C36.5625 31.1291 36.2662 30.4137 35.7387 29.8863C35.2113 29.3588 34.4959 29.0625 33.75 29.0625ZM11.25 29.0625C10.5041 29.0625 9.78871 29.3588 9.26126 29.8863C8.73382 30.4137 8.4375 31.1291 8.4375 31.875C8.4375 32.6209 8.73382 33.3363 9.26126 33.8637C9.78871 34.3912 10.5041 34.6875 11.25 34.6875C11.9959 34.6875 12.7113 34.3912 13.2387 33.8637C13.7662 33.3363 14.0625 32.6209 14.0625 31.875C14.0625 31.1291 13.7662 30.4137 13.2387 29.8863C12.7113 29.3588 11.9959 29.0625 11.25 29.0625Z"
                fill="#126741"
              />
            </svg>

            <h3 className="text-lg font-bold text-green-900 mb-4">
              خدمة توصيل سريعة
            </h3>
            <p className="text-gray-700">
              فريقنا مكرّس لتوصيل طلباتك في أسرع وقت ممكن، حتى تتمكن من
              الاستمتاع بمنتجاتنا الطازجة بسرعة.
            </p>
          </div>
        </div>

        {/* Button */}
      </div>
      <div className="border border-black text-xl px-3 py-3 rounded-md">
        <Link href="/products" className="underline-link text-lg">
          تصفح جميع المنتجات &larr;
        </Link>
      </div>
    </section>
  );
}

export default Benefits;
