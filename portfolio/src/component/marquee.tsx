import { FC } from "react";
import JavascriptLogo from "../assets/javascript-logo.svg";
import TypescripLogo from "../assets/typescript-logo.svg";
import ReactLogo from "../assets/react-logo.svg";
import TailwindLogo from "../assets/tailwind-logo.svg";
import HtmlLogo from "../assets/html-logo.svg";
import CssLogo from "../assets/css-logo.svg"

const Marquee: FC = () => (
  <div className="overflow-hidden whitespace-nowrap py-4 bg-gray-100 rounded-xl">
    <div className="animate-marquee flex space-x-8">
      <img src={JavascriptLogo} alt="JavaScript Logo" className="h-12 w-12" />
      <img src={TypescripLogo} alt="TypeScript Logo" className="h-12 w-12" />
      <img src={ReactLogo} alt="React Logo" className="h-12 w-12" />
      <img src={TailwindLogo} alt="Tailwind Logo" className="h-12 w-12" />
      <img src={HtmlLogo} alt="Html Logo" className="h-12 w-12" />
      <img src={CssLogo} alt="Css Logo" className="h-12 w-12" />
    </div>
  </div>
);

export default Marquee;
