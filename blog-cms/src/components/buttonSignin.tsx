"use client";

import { singInWithGoogle } from "@/libs/auth";
import { FcGoogle } from "react-icons/fc";

export default function ButtonSignin() {
  return (
    <button
      onClick={singInWithGoogle}
      className="flex items-center justify-center bg-slate-100 text-black border p-2 rounded-xl w-28 hover:bg-slate-200 transition-colors"
    >
      <FcGoogle size={20} className="mr-2" />
      <span className="font-semibold">Login</span>
    </button>
  );
}
