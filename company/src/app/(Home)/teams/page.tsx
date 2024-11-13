import { User } from "@/types/types";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description:
    "Meet the passionate and skilled team at Naufal Technology, dedicated to delivering innovative AI, technology, and networking solutions.",
  keywords:
    "team, technology experts, AI, innovation, networking, Naufal Technology",
  openGraph: {
    title: "Meet Our Team - Naufal Technology",
    description:
      "Meet the passionate and skilled team at Naufal Technology, delivering innovative solutions.",
    url: "https://naufal-technology.vercel.app/teams",
    type: "website",
    images: [
      {
        url: "teams.png",
        width: 1200,
        height: 630,
        alt: "Meet Our Team at Naufal Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team - Naufal Technology",
    description:
      "Meet the passionate and skilled team at Naufal Technology, delivering innovative solutions.",
    images: ["/teams.png"],
  },
};

const fetchUsers = async (count: number = 6): Promise<User[]> => {
  const response = await fetch(`https://randomuser.me/api/?results=${count}`);
  const data = await response.json();
  return data.results;
};

const TeamsPage = async () => {
  const users: User[] = await fetchUsers(6);

  return (
    <section className="py-12 bg-slate-100 text-black mt-20 h-[75vh]">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user, idx) => (
            <div
              key={user.login.uuid}
              className="bg-white rounded-lg p-4 flex flex-col items-center"
            >
              <div className="mb-3">
                <Image
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  width={120}
                  height={120}
                  quality={50}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="rounded-full"
                />
              </div>
              <h2 className="text-xl font-semibold">{user.name.first} {user.name.last}</h2>
              <p className="text-gray-600 text-sm">
                {user.location.city}, {user.location.country}
              </p>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsPage;
