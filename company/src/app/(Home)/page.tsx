import Video from "@/components/video";

export default function Hero() {
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
    <div >
      <section className="min-h-screen flex flex-col justify-center items-center bg-slate-100 text-black">
        <header className="flex justify-center w-full max-w-6xl px-8 py-4">
          <div className="text-xl font-semibold">Empowering Tomorrow</div>
        </header>

        <div className="text-center">
          <h1 className="text-4xl md:text-8xl font-bold mb-4">
            Naufal Technology's
          </h1>
          <p className="text-lg md:text-2xl">With Cutting-Edge Technology</p>
        </div>
      </section>
      <div>
        <Video />
      </div>
      <section
  id="services"
  className="py-16 bg-slate-100 h-screen flex items-center text-black"
>
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="p-6 bg-slate-200 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
          <p className="text-sm mb-6">{service.description}</p>
          
          {/* Button dengan animasi saat di-hover */}
          <div className="flex justify-center">
            <button
              className="z-10 relative inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out group"
            >
              <span className="absolute inset-0 bg-blue-500 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
              <span className="relative">Learn More</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}
