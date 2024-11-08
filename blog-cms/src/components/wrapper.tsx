import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 py-2">
      {children}
    </div>
  );
}
