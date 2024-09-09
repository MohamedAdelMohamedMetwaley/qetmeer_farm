import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Footer() {
  return (
    <footer
      className="bg-black text-white py-4 px-8"
      style={{ direction: "ltr" }}
    >
      <div className="container flex justify-between items-center">
        {/* Contact Information */}
        <div className="text-center md:text-left ">
          <p>
            Contact number: <strong>01004408078</strong>{" "}
            <span className="sm:mx-3">|</span> Email:{" "}
            <strong>info@zfarm.com</strong>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-5">
          <Link
            href="#"
            className="text-white hover:text-gray-400 h-4 w-4 sm:h-[26px] sm:w-6 mt-[3px]"
          >
            <FontAwesomeIcon icon={faFacebook} size={24} />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-400 h-4 w-4 sm:h-6 sm:w-6"
          >
            <FontAwesomeIcon icon={faWhatsapp} size={24} />
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-400 h-4 w-4 sm:h-6 sm:w-6"
          >
            <FontAwesomeIcon icon={faInstagram} size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
