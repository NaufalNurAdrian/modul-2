import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-[60px] sticky top-0 ">
        <Link href={"/"}><Image src="/Blogger-logo.png" alt="logo" width={80} height={80}/></Link>
    </div>
  );
}
