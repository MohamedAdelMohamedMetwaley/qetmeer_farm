import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Page() {
  return (
    <main className="flex justify-center items-center h-screen bg-primary">
      {/* TODO: Logo here */}
      <div className="w-[350px] h-[250px] rounded-md bg-background flex flex-col items-center gap-10">
        <h2 className="text-2xl mt-8 font-bold">تسجيل الدخول</h2>
        <div className="flex flex-col gap-4 w-4/5">
          <Link
            href="#"
            className="bg-[#dc503f] text-white text-lg border border-stone-300 px-4 py-2 rounded-md flex justify-center items-center relative"
          >
            <p>سجل باستخدام جوجل</p>
            <FontAwesomeIcon className="absolute left-4" icon={faGoogle} />
          </Link>
          <Link
            href="#"
            className="bg-[#32519b] text-white text-lg border border-stone-300 px-4 py-2 rounded-md flex justify-center items-center relative"
          >
            <p>سجل باستخدام فيسبوك</p>
            <FontAwesomeIcon className="absolute left-4" icon={faFacebookF} />
          </Link>
        </div>
      </div>
    </main>
  );
}

// Might be usefull if we want to add login without google or facebook
{
  /* <form className="w-4/5 flex flex-col" action="">
  <label htmlFor="">اسم المستخدم</label>
  <input
    type="text"
    className="rounded-md border-stone-300 border mt-2 mb-4 py-2 shadow-lg"
    // placeholder="اسم المستخدم"
  />
  <label htmlFor="">البريد الالكتروني</label>
  <input
    type="email"
    className="rounded-md border-stone-300 border mt-2 mb-4 py-2 shadow-lg"
    // placeholder="البريد الالكتروني"
  />
  <label htmlFor="">كلمة المرور</label>
  <input
    type="password"
    className="rounded-md border-stone-300 border mt-2 py-2 shadow-lg"
    // placeholder="كلمة المرور"
  />
  <button
    className="bg-primary hover:bg-green-900 transition-colors duration-300 text-white font-bold rounded-md mt-6 py-2"
    type="submit"
  >
    تسجيل الدخول
  </button>
</form> */
}
export default Page;
