import { ReactNode } from "react";

export default function Wrapper ({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1200px] p-4 bg-slate-100">
            { children }
        </div>
    )
}