export default function Services() {
    const services = [
      {
        title: "Networking",
        description:
          "Solusi jaringan yang handal dan efisien untuk meningkatkan performa dan keamanan bisnis.",
      },
      {
        title: "Artificial Intelligence (AI)",
        description:
          "Mendorong inovasi dengan solusi AI yang dapat diintegrasikan untuk berbagai sektor.",
      },
      {
        title: "Manufaktur Chip",
        description:
          "Mengembangkan chip berkinerja tinggi untuk mendukung perangkat elektronik masa depan.",
      },
    ];
  
    return (
      <section id="services" className="py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-gray-700 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  