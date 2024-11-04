import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex fixed justify-between items-center text-white bg-black h-[50px] w-full ml-1 mr-1 p-5 rounded-b-xl top-0">
      <div>
        <Link href="/Product">
          <button>Product</button>
        </Link>
      </div>
      <div className="font-semibold text-lg">
        <Link href="/">
          <h1>Nata Store</h1>
        </Link>
      </div>
      <div className="flex gap-10">
        <button>
        <svg
      viewBox="0 0 900 1000"
      fill="currentColor"
      height="1em"
      width="1em"
      
    >
      <path d="M150 850c0-26.667 10-50 30-70s43.333-30 70-30c28 0 51.667 10 71 30s29 43.333 29 70c0 28-9.667 51.667-29 71s-43 29-71 29c-26.667 0-50-9.667-70-29s-30-43-30-71m500 0c0-26.667 10-50 30-70s43.333-30 70-30c28 0 51.667 10 71 30s29 43.333 29 70c0 28-9.667 51.667-29 71s-43 29-71 29c-26.667 0-50-9.667-70-29s-30-43-30-71M328 614c-24 6.667-35.333 14.333-34 23 1.333 8.667 16 13 44 13h562v76c0 13.333-6.667 20-20 20H750 250h-24c-13.333 0-20-6.667-20-20v-76l-10-46-98-454H0V70c0-13.333 6.667-20 20-20h156c13.333 0 20 6.667 20 20v86h704v274c0 14.667-6 23.333-18 26L328 614" />
    </svg>
        </button>
        <button>Login</button>
      </div>
    </div>
  );
}
