import supabase from "@/services/supabase";
import Image from "next/image";

interface IProps{
    picture: string;
    full_name: string;
    email: string;
}

export default function Avatar({picture, full_name, email}: IProps){
    const onLogout = () => {
        supabase.auth.signOut();
    }
    return(
        <div onClick={onLogout} className="flex items-center gap-4 cursor-pointer">
                <Image
                  src={picture}
                  alt={full_name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="text-sm">
                  <div className="font-semibold">{full_name}</div>
                  <div className="text-gray-500">{email}</div>
                </div>
              </div>
    )
}
