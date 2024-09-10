"use client";
import { useState } from "react";
import NavLinks from "./NavLinks";

export default function CollapsedNavigation({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-600 hover:text-green-800 focus:outline-none"
        >
          {isOpen ? (
            // Close icon (X) when open
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              transform="scale(1.5)"
            >
              <path
                transform="scale(1, -1) translate(0, -25)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            // Hamburger icon when closed
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              transform="scale(1.5)"
            >
              <path
                transform="scale(1, -1) translate(0, -25)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <ul className="flex flex-col items-center space-y-5 pt-6 text-base">
            <NavLinks setIsOpen={setIsOpen} />
          </ul>
        </div>
      )}
    </>
  );
}
