import Link from "next/link";
import { IconType } from "react-icons";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";
import CopyButton from "./copy";

interface IShare {
  Icon: IconType;
  Link: string;
  style: string
}

const share: IShare[] = [
  { Icon: IoLogoFacebook, 
    Link: "https://www.facebook.com/sharer/share.php?u=",
    style: "text-blue-500"
   },
  { Icon: IoLogoLinkedin, 
    Link: "https://www.linkedin.com/sharing/share-offsite/?url=",
    style: "text-blue-500"
   },
  { Icon: IoLogoTwitter, 
    Link: "https://www.twitter.com/intent/tweet?url=",
    style: "text-blue-500"
 },
  { Icon: IoLogoWhatsapp, 
    Link: "https://wa.me/?text=",
    style: "text-blue-500"
 },
];
export default function Share ({slug}: {slug: string}) {
    const domain = "https://naufal-blog.vercel.app/"
  return (
    <div className="flex flex-col gap-5">
      <p>bagikan</p>
      <div className="flex flex-row gap-4">
        {share.map((item, idx) => {
          return (
            <Link key={idx} href={`${item.Link}${domain}${slug}`}>
              <item.Icon />
            </Link>
          );
        })}
        <CopyButton Link={`${domain}${slug}`} />
      </div>
    </div>
  );
}
