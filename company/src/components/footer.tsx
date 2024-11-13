import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-200 text-black py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Naufal Technology
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Empowering Tomorrow with Cutting-Edge Technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
          <Link href="/product" className="hover:text-gray-400">
            Product
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About Us
          </Link>
          <Link href="/teams" className="hover:text-gray-400">
            Teams
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>

        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 hover:text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82v-9.294H9.692V11.41h3.127V8.575c0-3.1 1.893-4.785 4.655-4.785 1.324 0 2.462.099 2.794.143v3.24h-1.916c-1.504 0-1.796.715-1.796 1.764v2.314h3.591l-.467 3.297h-3.124V24h6.116c.73 0 1.325-.595 1.325-1.325V1.325C24 .595 23.405 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6 hover:text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.93 4.93 0 002.165-2.723 9.86 9.86 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482C7.688 8.094 4.067 6.13 1.64 3.161a4.822 4.822 0 001.523 6.574A4.903 4.903 0 01.964 9.7v.06a4.919 4.919 0 003.946 4.827 4.897 4.897 0 01-2.212.084 4.924 4.924 0 004.6 3.417 9.867 9.867 0 01-6.102 2.104c-.395 0-.786-.023-1.17-.069A13.957 13.957 0 007.548 21c9.142 0 14.307-7.721 14.307-14.426 0-.22-.005-.439-.015-.657A10.216 10.216 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/naufal-nur-adrian-613705234/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6 hover:text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729V22.27C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.729V1.73C24 .774 23.208 0 22.23 0zM7.115 20.452H3.545V8.993h3.57v11.459zM5.33 7.505a2.068 2.068 0 110-4.135 2.068 2.068 0 010 4.135zM20.452 20.452h-3.569v-5.854c0-1.394-.027-3.187-1.941-3.187-1.942 0-2.239 1.515-2.239 3.08v5.96h-3.57V8.993h3.427v1.56h.049c.478-.906 1.646-1.86 3.389-1.86 3.625 0 4.292 2.385 4.292 5.49v6.269z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8">
        © {new Date().getFullYear()} Naufal Technology. All rights reserved.
      </div>
    </footer>
  );
}
