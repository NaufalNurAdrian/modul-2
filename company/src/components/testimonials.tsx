import Image from "next/image";
import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CTO at Tech Innovate",
    feedback:
      "Solusi AI dari Naufal Technology's benar-benar mengubah cara kami menganalisis data. Inovasi mereka dalam machine learning membantu kami meningkatkan efisiensi bisnis hingga 30%.",
    imgSrc: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Michael Lee",
    title: "Head of IT at GlobalNet",
    feedback:
      "Produk chip berteknologi tinggi dari Naufal Technology's memberikan performa yang luar biasa untuk perangkat kami. Kualitasnya tak tertandingi, memungkinkan kami menghadirkan layanan yang lebih cepat dan efisien.",
    imgSrc: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Linda Brown",
    title: "Network Engineer at SecureLink",
    feedback:
      "Sebagai perusahaan yang berfokus pada solusi jaringan, kami sangat terbantu dengan teknologi jaringan canggih dari Naufal Technology's. Infrastruktur mereka memperkuat keamanan dan stabilitas sistem kami.",
    imgSrc: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 text-black py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-bold text-center mb-16">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={testimonial.imgSrc}
                alt={testimonial.name}
                width={50}
                height={50}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h4 className="text-2xl font-semibold">{testimonial.name}</h4>
              <p className="text-blue-600">{testimonial.title}</p>
              <p className="text-gray-700 text-center mt-4 italic">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
