import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between flex-row z-50 top-0 fixed bg-white text-black font-semibold items-center w-full h-20 p-4">
      <div className="flex justify-start">
        <Link href="/">
          <Image src="/favicon.png" alt="logo" width={50} height={50} />
        </Link>
      </div>
      <div className="flex self-center gap-4 ">
        <Link href="/product">Product</Link>
        <Link href="/about">Abous Us</Link>
        <Link href="/teams">Teams</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div></div>
    </div>
  );
}
