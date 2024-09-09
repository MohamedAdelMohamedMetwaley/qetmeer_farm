import Link from "next/link";

function Categories() {
  return (
    <section className="flex flex-col items-center justify-center mt-24">
      <h2 className="text-3xl sm:text-4xl mb-14">الفئات</h2>
      <div className="flex flex-wrap justify-center flex-col sm:flex-row gap-5 sm:gap-10 lg:gap-20">
        <Link
          href="/products?category=XXX"
          className="categ-card"
          style={{ "--overlay-color": "rgba(0,247,247,0.4)" }}
        >
          <h3 className="text-xl font-bold my-4">الألبان</h3>
          <svg
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.6667 5.41666H43.3334M24.375 5.41666V12.9702C24.375 15.1092 23.7417 17.2003 22.555 18.98L20.7784 21.645C19.5912 23.4254 18.9579 25.5176 18.9584 27.6575V54.1667C18.9584 55.6033 19.5291 56.981 20.5449 57.9968C21.5607 59.0126 22.9385 59.5833 24.375 59.5833H40.625C42.0616 59.5833 43.4394 59.0126 44.4552 57.9968C45.471 56.981 46.0417 55.6033 46.0417 54.1667V27.6548C46.0417 25.5158 45.4084 23.4247 44.2217 21.645L42.445 18.98C41.2579 17.1996 40.6246 15.1074 40.625 12.9675V5.41666"
              stroke="black"
              strokeWidth="6.16667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.9584 40.625C21.1027 39.7267 23.4043 39.264 25.7292 39.264C28.0541 39.264 30.3557 39.7267 32.5 40.625C34.6444 41.5233 36.946 41.986 39.2709 41.986C41.5958 41.986 43.8974 41.5233 46.0417 40.625"
              stroke="black"
              strokeWidth="6.16667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link
          href="/products?category=XXX"
          className="categ-card"
          style={{ "--overlay-color": "rgba(206,52,52,0.4)" }}
        >
          <h3 className="text-xl font-bold my-4">اللحوم</h3>
          <svg
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.5479 10.8333C44.7958 10.8333 46.9354 11.4292 48.75 12.6208C51.8375 14.625 53.7333 17.6854 54.1666 21.2333C54.3215 22.9519 54.0988 24.6835 53.514 26.3069C52.9292 27.9304 51.9965 29.4063 50.7812 30.6312C48.8854 32.5 46.475 33.6917 43.8208 33.9625C38.6479 34.5042 34.0979 36.5625 30.7125 40.0021C30.3029 40.4008 29.7539 40.6239 29.1823 40.6239C28.6107 40.6239 28.0616 40.4008 27.652 40.0021L24.9708 37.3208C24.7809 37.1333 24.6304 36.9097 24.5281 36.6632C24.4258 36.4167 24.3737 36.1523 24.375 35.8854C24.375 35.2083 24.6729 34.6125 25.2416 34.0437C28.5187 30.7396 30.5229 26.3521 31.0104 21.3146C31.3625 17.7125 33.2854 14.625 36.427 12.5937C38.2145 11.4292 40.327 10.8333 42.5479 10.8333ZM42.5479 5.41666C39.3791 5.41666 36.2104 6.28333 33.475 8.04375C28.7083 11.1042 26.0812 15.8708 25.6208 20.8C25.2687 24.375 23.9145 27.7062 21.4229 30.1979L21.3416 30.2792C18.2 33.4208 18.2 38.2146 21.152 41.1396L23.8333 43.8208C25.3229 45.3104 27.2458 46.0417 29.1687 46.0417C31.0916 46.0417 33.0416 45.3104 34.5312 43.8208C37.1583 41.1937 40.625 39.7583 44.3895 39.3521C48.1 38.9458 51.7291 37.3208 54.6 34.4771C56.4011 32.6784 57.7748 30.4979 58.6196 28.0967C59.4643 25.6956 59.7584 23.1352 59.4802 20.605C59.2019 18.0749 58.3585 15.6396 57.0121 13.4794C55.6658 11.3192 53.851 9.48926 51.7021 8.125C48.9666 6.31041 45.7708 5.41666 42.5479 5.41666ZM16.9541 53.7875C17.6854 55.3042 17.4416 57.1458 16.1687 58.3917C15.6174 58.9513 14.9148 59.3378 14.147 59.5039C13.3792 59.6699 12.5796 59.6083 11.8463 59.3265C11.1131 59.0447 10.478 58.555 10.019 57.9174C9.56002 57.2799 9.29709 56.5223 9.26247 55.7375C8.47767 55.7029 7.72005 55.4399 7.08253 54.981C6.44501 54.522 5.95531 53.8869 5.67351 53.1536C5.3917 52.4204 5.33004 51.6208 5.49609 50.853C5.66214 50.0852 6.04868 49.3825 6.6083 48.8312C7.85413 47.5854 9.72288 47.3146 11.2125 48.0458L17.9291 41.4646C18.3083 41.9792 18.7416 42.575 19.2291 43.0625L21.9104 45.7437C22.4791 46.2854 23.0208 46.7458 23.725 47.1521L16.9541 53.7875Z"
              fill="black"
            />
          </svg>
        </Link>
        <Link
          href="/products?category=XXX"
          className="categ-card"
          style={{ "--overlay-color": "rgba(253,218,100,0.6)" }}
        >
          <h3 className="text-xl font-bold my-4">الزبدة</h3>
          <svg
            width="66"
            height="46"
            viewBox="0 0 66 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.8407 2.46943C39.2099 2.16023 38.5166 1.99964 37.814 2C37.1115 2.00036 36.4184 2.16165 35.7879 2.47149L19.2013 10.4121L19.1868 10.4224C18.7131 10.6618 18.2962 10.9999 17.9642 11.4141C17.6323 11.8282 17.393 12.3087 17.2625 12.8232C16.2049 12.5536 15.0858 12.6706 14.1069 13.1532L12.0856 14.1226L12.0691 14.1329C10.8626 14.7351 10.0417 15.9685 10.0417 17.3999V20.6916L3.83975 23.7132L3.81912 23.7235C3.2787 23.9869 2.82228 24.3956 2.50099 24.9038C2.1797 25.4119 2.00623 25.9995 2 26.6007V29.1169C2 30.2761 2.61875 31.4537 3.82119 32.0539L24.7618 42.3499C25.6801 42.8063 26.6918 43.0438 27.7173 43.0438C28.7429 43.0438 29.7545 42.8063 30.6729 42.3499L62.0146 27.0936L62.0352 27.0833C63.2356 26.4852 63.8544 25.3034 63.8544 24.1463V21.6301C63.8476 21.029 63.6736 20.4417 63.352 19.9339C63.0303 19.4262 62.5737 19.0179 62.0332 18.7549L56.4913 16.0283V12.9263C56.4887 12.2472 56.2979 11.5821 55.94 11.005C55.582 10.4279 55.071 9.96131 54.4638 9.65724L39.8489 2.47562L39.8407 2.46943ZM34.8144 23.6101C34.8144 23.1563 34.7298 22.7149 34.571 22.3066L35.2063 22.6201C35.5981 22.8057 35.8456 23.2182 35.8456 23.6513V29.2819C35.8456 29.7769 35.33 30.1069 34.8763 29.8801L34.8144 29.8491V23.6101ZM10.0438 25.1157C10.0438 26.413 10.7904 27.5515 11.8711 28.1187L11.8938 28.1311L27.1192 35.6097L27.1419 35.62C27.6329 35.8522 28.1688 35.9738 28.7119 35.9763C29.255 35.9788 29.792 35.8621 30.2851 35.6344L30.3057 35.6241L32.9293 34.3557L32.9519 34.3433C33.8821 33.8792 34.5071 33.0419 34.7257 32.0911C35.6126 32.3716 36.5675 32.3014 37.4007 31.9219L37.4214 31.9137L54.6144 23.6678L54.6288 23.6596C55.8044 23.0738 56.4913 21.892 56.4913 20.6401V18.328L61.1112 20.5967C62.0187 21.0505 62.0187 22.3292 61.1112 22.783L29.7613 38.0455C28.4825 38.6849 26.9562 38.6849 25.6775 38.0455L4.74312 27.7557C4.53849 27.6556 4.36607 27.5001 4.24546 27.3068C4.12485 27.1136 4.06091 26.8904 4.06091 26.6626C4.06091 26.4348 4.12485 26.2115 4.24546 26.0183C4.36607 25.825 4.53849 25.6695 4.74312 25.5694L10.0438 22.9892V25.1157ZM36.6706 4.32568C37.3925 3.97506 38.2175 3.97506 38.96 4.32568L53.4181 11.4413C53.8306 11.6476 53.8306 12.2457 53.4181 12.4519L36.65 20.4957C36.1344 20.7432 35.5569 20.7432 35.0619 20.4957L20.2531 13.2151C19.8406 13.0088 19.8406 12.4107 20.2531 12.2044L36.6706 4.32568ZM12.1063 19.3819C12.1063 18.9694 12.5394 18.6807 12.9313 18.8663L28.1112 26.3326C28.271 26.4104 28.4102 26.5247 28.5177 26.6662C28.6252 26.8077 28.6979 26.9725 28.73 27.1472V32.9738C28.7295 33.0174 28.7337 33.061 28.7424 33.1037C28.7259 33.2076 28.685 33.3061 28.6232 33.3912C28.5613 33.4763 28.4802 33.5455 28.3864 33.5932C28.2927 33.6408 28.1889 33.6656 28.0838 33.6655C27.9786 33.6654 27.8749 33.6404 27.7812 33.5926L12.8488 26.2501C12.628 26.1481 12.4408 25.9852 12.3093 25.7807C12.1778 25.5761 12.1074 25.3383 12.1063 25.0951V19.3819ZM13.1375 15.8963L14.9938 15.0094C15.7156 14.6588 16.5406 14.6588 17.2625 15.0094L31.7206 22.1044C32.1331 22.3107 32.1331 22.9088 31.7206 23.1151L29.5344 24.1876C29.0188 24.4351 28.4412 24.4351 27.9462 24.1876L13.1375 16.9069C12.725 16.7007 12.725 16.1026 13.1375 15.8963Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default Categories;
