"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full p-4 top-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-transparent backdrop-blur-md text-black" : "bg-transparent text-black"
      }`}
    >
      <div className="px-6 py-3 flex justify-between items-center">
        <div>
          <Image src="/Blogger-logo.png" alt="logo" width={70} height={80} />
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="https://www.naufaladrian.my.id/"
              className="hover:text-gray-300"
            >
              My Portfolio
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold">Naufal Blog</span>
        </div>
      </div>
    </nav>
  );
}
