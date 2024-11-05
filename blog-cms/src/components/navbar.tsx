import Link from "next/link";
import Wrapper from "./wrapper";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-[60px] sticky top-0 bg-white ">
      <Wrapper>
        <Link href={"/"}><Image src="/Blogger-logo.png" alt="logo" width={80} height={80}/></Link>
      </Wrapper>
    </div>
  );
}
