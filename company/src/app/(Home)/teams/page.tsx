import { User } from "@/types/types";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description: "Meet the passionate and skilled team at Naufal Technology, dedicated to delivering innovative AI, technology, and networking solutions. Learn more about our experts and their contributions.",
  keywords: "team, technology experts, AI, innovation, networking, Naufal Technology, meet the team, software engineers, tech professionals, leadership",
  openGraph: {
    title: "Meet Our Team - Naufal Technology",
    description: "Meet the passionate and skilled team at Naufal Technology, dedicated to delivering innovative AI, technology, and networking solutions. Learn more about our experts and their contributions.",
    url: "https://naufal-technology.vercel.app/teams",
    type: "website",
    images: [
      {
        url: "teams.png",
        width: 1200,
        height: 630,
        alt: "Meet Our Team at Naufal Technology"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team - Naufal Technology",
    description: "Meet the passionate and skilled team at Naufal Technology, dedicated to delivering innovative AI, technology, and networking solutions. Learn more about our experts and their contributions.",
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
    <section className="min-h-screen bg-gradient-to-b text-black from-slate-200 to-white py-16 mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {users.map((user) => (
            <div
              key={user.login.uuid}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <Image
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  width={150}
                  height={150}
                  className="rounded-full shadow-md"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {user.name.first} {user.name.last}
              </h2>
              <p className="text-gray-600 mb-1">
                {user.location.city}, {user.location.country}
              </p>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-gray-500">{user.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsPage;
