import { ReactNode } from "react";
import Navbar from "./navbar";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="mx-auto max-w-[1000px]">
        {children}
      </div>
    </div>
  );
}
