"use client";

import { useState } from "react";
import { FaCheck, FaLink } from "react-icons/fa6";
import { useCopyToClipboard } from "usehooks-ts";

export default function CopyButton({ Link }: { Link: string }) {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <div
      className="text-gray-500 cursor-pointer"
      onClick={() => {
        copy(Link);
        setCopied(true);
      }}
      onMouseLeave={() => setCopied(false)}
      daya-cy="copy-button"
    >
        {copied ? <FaCheck data-cy="check-icon"/> : <FaLink data-cy="link-icon"/>}
    </div>
  );
}
