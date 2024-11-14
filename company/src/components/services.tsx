import { useMemo } from "react";

export default function Services() {
    const service = useMemo(
        () => [
          {
            id: "networking",
            title: "Networking",
            description:
              "Solusi jaringan yang handal dan efisien untuk meningkatkan performa bisnis.",
          },
          {
            id: "ai",
            title: "Artificial Intelligence (AI)",
            description: "Solusi AI yang dapat diintegrasikan untuk berbagai sektor.",
          },
          {
            id: "chip-manufacturing",
            title: "Manufaktur Chip",
            description:
              "Chip berkinerja tinggi untuk perangkat elektronik masa depan.",
          },
        ],
        []
      );
    
    return(
        <section className="flex bg-slate-100">
        <div className="flex flex-col justify-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.map((item, idx) => (
              <div key={idx} className="bg-slate-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}