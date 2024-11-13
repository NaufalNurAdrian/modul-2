"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonSingin from "./buttonSignin";
import supabase from "@/services/supabase";
import { User } from "@supabase/supabase-js";
import Avatar from "./avatar";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null)
  const getSession = () => {
    supabase.auth.onAuthStateChange((event, session) => {
        setUser(session?.user || null)
        
    })
}


  useEffect(() => {
    getSession()
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full p-4 top-0 z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent backdrop-blur-xl text-black"
          : "bg-transparent text-black"
      }`}
    >
      <div className="px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/Blogger-logo.png" alt="logo" width={60} height={60} />
        </div>

        {/* Menu Hamburger (Mobile) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-2xl"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`flex-col lg:flex-row lg:flex space-y-4 lg:space-y-0 lg:space-x-6 absolute lg:static bg-white lg:bg-transparent left-0 right-0 p-6 lg:p-0 ${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex lg:items-center top-20 lg:top-auto`}
        >
          <li>
            <Link
              href="/"
              className="hover:text-gray-500 block text-center lg:text-left"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="https://www.naufaladrian.my.id/"
              className="hover:text-gray-500 block text-center lg:text-left"
            >
              My Portfolio
            </Link>
          </li>
          {
            user ? <div><Avatar 
            picture={user.user_metadata.picture}
            full_name={user.user_metadata.name}
            email={user.user_metadata.email}
            /></div> : <ButtonSingin/>
          }
        </ul>
      </div>
    </nav>
  );
}
