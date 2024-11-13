import { User } from "@/types/types";
import Image from "next/image";

const fetchUsers = async (count: number = 6): Promise<User[]> => {
  const response = await fetch(`https://randomuser.me/api/?results=${count}`);
  const data = await response.json();
  return data.results;
};

const TeamsPage = async () => {
  const users: User[] = await fetchUsers(6);

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-blue-600 mb-12">
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
