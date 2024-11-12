const people = [
    {
      name: 'Naufal Nur Adrian',
      role: 'Founder & CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1529626455594-01d3d5b8d7af?crop=faces&fit=crop&w=256&h=256',
    },
    {
      name: 'Amanda Wilta Macaron',
      role: 'Chief Operating Officer',
      imageUrl:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=256&h=256',
    },
    {
      name: 'Michael Tan',
      role: 'Head of AI Development',
      imageUrl:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=256&h=256',
    },
    {
      name: 'Sarah Williams',
      role: 'VP of Chip Manufacturing',
      imageUrl:
        'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?crop=faces&fit=crop&w=256&h=256',
    },
    {
      name: 'David Kim',
      role: 'Networking Solutions Architect',
      imageUrl:
        'https://images.unsplash.com/photo-1603415526794-6c15a55c7c71?crop=faces&fit=crop&w=256&h=256',
    },
    {
      name: 'Emily Zhang',
      role: 'Chief Technology Officer',
      imageUrl:
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?crop=faces&fit=crop&w=256&h=256',
    },
  ];
  
  export default function LeadershipTeam() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are a dynamic team dedicated to revolutionizing the tech industry with innovative solutions in AI, chip manufacturing, and networking technologies.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    alt={`${person.name}'s profile`}
                    src={person.imageUrl}
                    className="h-16 w-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  