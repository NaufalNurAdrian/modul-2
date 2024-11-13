"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-100 z-50">
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
