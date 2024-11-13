import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-slate-100 text-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Judul Halaman */}
        <h2 className="text-5xl font-bold text-center text-blue-600 mb-16">
          About Us
        </h2>

        {/* Sejarah Perusahaan */}
        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6">Our Journey</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Didirikan pada tahun <strong>1995</strong>, Naufal Technology's telah
            berkembang menjadi salah satu perusahaan terkemuka di dunia yang bergerak
            di bidang teknologi. Kami memulai dengan fokus pada pengembangan jaringan
            yang handal dan kini merambah ke Artificial Intelligence (AI) serta manufaktur
            chip berteknologi tinggi.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            Di awal tahun 2000-an, kami membentuk tim penelitian AI yang berdedikasi.
            Investasi ini mengukuhkan posisi kami sebagai pemimpin dalam solusi AI yang
            inovatif, yang kini digunakan untuk transformasi digital di berbagai sektor industri.
          </p>
        </div>

        {/* Visi dan Misi */}
        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6">Our Vision & Mission</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Visi Kami:</strong> Menjadi pemimpin global dalam industri teknologi
            dengan menyediakan solusi inovatif yang menghubungkan dunia, mengubah data
            menjadi wawasan yang bermakna, dan mempercepat perkembangan perangkat elektronik.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            <strong>Misi Kami:</strong>
          </p>
          <ul className="list-disc list-inside pl-5 space-y-2 text-lg text-gray-700">
            <li>Menghadirkan solusi jaringan yang andal untuk bisnis global.</li>
            <li>Mendorong transformasi digital melalui teknologi AI yang inovatif.</li>
            <li>Merancang chip berperforma tinggi untuk aplikasi masa depan.</li>
          </ul>
        </div>

        {/* Bidang Utama */}
        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6">Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Networking",
                description:
                  "Kami menyediakan solusi jaringan yang andal untuk bisnis dengan fokus pada infrastruktur, keamanan siber, dan sistem komunikasi.",
              },
              {
                title: "Artificial Intelligence (AI)",
                description:
                  "Kami mengembangkan solusi AI yang canggih, mulai dari machine learning hingga natural language processing, untuk mendorong inovasi.",
              },
              {
                title: "Chip Manufacturing",
                description:
                  "Kami merancang chip berteknologi tinggi yang digunakan dalam perangkat AI, IoT, dan infrastruktur jaringan.",
              },
            ].map((item, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-semibold mb-4 text-blue-600">
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prestasi Perusahaan */}
        <div className="mb-16">
          <h3 className="text-4xl font-semibold mb-6">Our Achievements</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Naufal Technology's telah mendapatkan berbagai penghargaan atas inovasi kami.
            Beberapa pencapaian penting meliputi:
          </p>
          <ul className="list-disc list-inside pl-5 mt-4 space-y-2 text-lg text-gray-700">
            <li>Peluncuran teknologi jaringan 5G pertama di Asia Tenggara.</li>
            <li>Pengembangan chip AI berkinerja tinggi yang digunakan oleh perusahaan besar.</li>
            <li>Dinobatkan sebagai Top 10 perusahaan AI terinovatif selama lima tahun berturut-turut.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-semibold mb-6 text-blue-600">
            Join Us in Shaping the Future
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Bersama Naufal Technology's, mari kita ciptakan masa depan yang lebih terhubung,
            aman, dan cerdas. Bergabunglah dengan kami dan rasakan dampak inovasi kami.
          </p>
          <button className="px-8 py-3 text-lg font-semibold bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
