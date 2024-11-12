"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  // Menyembunyikan loading setelah beberapa waktu
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000); // Loading akan hilang setelah 3 detik
    return () => clearTimeout(timer);
  }, []);

  // Jika tidak visible, sembunyikan komponen
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/favicon.png"
          alt="logo"
          width={100}
          height={100}
          className="animate-bounce"
        />
        <p className="text-pastel-navy font-semibold">Loading...</p>
      </div>
    </div>
  );
}
