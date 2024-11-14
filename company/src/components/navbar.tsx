"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black font-semibold shadow-md z-50">
      <div className="flex justify-between items-center h-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/favicon.png"
              alt="logo"
              width={40}
              height={40}
              quality={40}
              priority
            />
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="block lg:hidden text-xl p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <div className="hidden lg:flex gap-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/product" className="hover:text-blue-600">
            Product
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About Us
          </Link>
          <Link href="/teams" className="hover:text-blue-600">
            Teams
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col lg:hidden bg-white w-full px-4 py-2">
          <Link href="/" onClick={toggleMenu} className="py-2 hover:text-blue-600">
            Home
          </Link>
          <Link href="/product" onClick={toggleMenu} className="py-2 hover:text-blue-600">
            Product
          </Link>
          <Link href="/about" onClick={toggleMenu} className="py-2 hover:text-blue-600">
            About Us
          </Link>
          <Link href="/teams" onClick={toggleMenu} className="py-2 hover:text-blue-600">
            Teams
          </Link>
          <Link href="/contact" onClick={toggleMenu} className="py-2 hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
