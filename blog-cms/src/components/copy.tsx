"use client";

import { useState } from "react";
import { FaCheck, FaLink } from "react-icons/fa6";
import { useCopyToClipboard } from "usehooks-ts";

export default function CopyButton({ Link }: { Link: string }) {
  const [_value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <div
      className="text-gray-500 cursor-pointer"
      onClick={() => {
        copy(Link);
        setCopied(true);
      }}
      onMouseLeave={() => setCopied(false)}
    >
        {copied ? <FaCheck/> : <FaLink/>}
    </div>
  );
}
