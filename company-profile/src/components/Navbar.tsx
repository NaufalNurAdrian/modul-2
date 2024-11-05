import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex fixed justify-between items-center text-black bg-transparent backdrop-blur-sm h-[70px] w-full px-4 sm:px-6 md:px-10 lg:px-16 top-0 z-50 rounded-b-xl">
      {/* Logo */}
      <div className="font-extrabold text-lg sm:text-xl md:text-2xl">
        <Link href="/">
          <h1>UNIQLO</h1>
        </Link>
      </div>

      {/* Menu Links */}
      <div className="flex gap-4 sm:gap-6 md:gap-8 font-semibold text-sm sm:text-base md:text-xl">
        <Link href="/">
          <button>Woman</button>
        </Link>
        <Link href="/Men">
          <button>Men</button>
        </Link>
        <Link href="/Kids">
          <button>Kids</button>
        </Link>
        <Link href="/Baby">
          <button>Baby</button>
        </Link>
      </div>

      {/* Cart & Login Buttons */}
      <div className="flex gap-4 sm:gap-6 md:gap-8 font-semibold text-sm sm:text-base md:text-lg">
        <button>
          <svg
            viewBox="0 0 900 1000"
            fill="currentColor"
            height="1.25em"
            width="1.25em"
          >
            <path d="M150 850c0-26.667 10-50 30-70s43.333-30 70-30c28 0 51.667 10 71 30s29 43.333 29 70c0 28-9.667 51.667-29 71s-43 29-71 29c-26.667 0-50-9.667-70-29s-30-43-30-71m500 0c0-26.667 10-50 30-70s43.333-30 70-30c28 0 51.667 10 71 30s29 43.333 29 70c0 28-9.667 51.667-29 71s-43 29-71 29c-26.667 0-50-9.667-70-29s-30-43-30-71M328 614c-24 6.667-35.333 14.333-34 23 1.333 8.667 16 13 44 13h562v76c0 13.333-6.667 20-20 20H750 250h-24c-13.333 0-20-6.667-20-20v-76l-10-46-98-454H0V70c0-13.333 6.667-20 20-20h156c13.333 0 20 6.667 20 20v86h704v274c0 14.667-6 23.333-18 26L328 614" />
          </svg>
        </button>
        <button>Login</button>
      </div>
    </div>
  );
}
