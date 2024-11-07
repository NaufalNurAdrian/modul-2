import { ReactNode } from "react";
import Navbar from "./navbar";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-wrap justify-between items-center p-4">
            <Navbar />
        </div>

        <div className="mx-auto max-w-[1000px]">
            {children}
        </div>
    </div>
  );
}
