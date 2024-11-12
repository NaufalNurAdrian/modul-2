import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-slate-100 text-black py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>

        {/* Sejarah Perusahaan */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Our Journey</h3>
          <p className="text-lg leading-8">
            Didirikan pada tahun <strong>1995</strong>, Naufal Technology's telah berkembang menjadi salah satu perusahaan terkemuka di dunia yang bergerak di bidang teknologi. Perusahaan kami memulai perjalanan dengan fokus pada pengembangan jaringan yang handal untuk bisnis kecil dan menengah. Dengan dedikasi untuk inovasi dan komitmen terhadap kualitas, kami terus bertransformasi dan memperluas layanan kami ke bidang-bidang baru seperti Artificial Intelligence (AI) dan manufaktur chip.
          </p>
          <p className="text-lg leading-8 mt-4">
            Pada akhir tahun 1990-an, kami mulai mengeksplorasi teknologi jaringan canggih yang memungkinkan kami menjadi pionir dalam pengembangan solusi internet awal bagi perusahaan-perusahaan besar. Di awal tahun 2000-an, dengan meningkatnya kebutuhan akan kecerdasan buatan, kami membentuk tim penelitian dan pengembangan AI yang berdedikasi. Investasi besar ini membantu kami menjadi salah satu pemain utama dalam sektor AI, mengembangkan produk dan solusi yang mengubah cara perusahaan beroperasi dan berinteraksi dengan data.
          </p>
        </div>

        {/* Visi dan Misi */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Our Vision & Mission</h3>
          <p className="text-lg leading-8">
            <strong>Visi Kami:</strong> Menjadi pemimpin global dalam industri teknologi dengan menyediakan solusi inovatif yang menghubungkan dunia, mengubah data menjadi wawasan yang bermakna, dan mempercepat perkembangan perangkat elektronik masa depan.
          </p>
          <p className="text-lg leading-8 mt-4">
            <strong>Misi Kami:</strong>
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Menghadirkan teknologi jaringan yang canggih dan andal untuk mendukung kebutuhan bisnis yang semakin kompleks.</li>
            <li>Mendorong transformasi digital dengan solusi AI yang inovatif dan dapat disesuaikan.</li>
            <li>Mengembangkan chip berperforma tinggi yang mendukung berbagai aplikasi masa depan dengan efisiensi tinggi.</li>
          </ul>
        </div>

        {/* Bidang Utama */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-200 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Networking</h4>
              <p className="text-sm">
                Kami menyediakan solusi jaringan yang handal dan efisien, baik untuk bisnis maupun industri. Dengan pengalaman dalam infrastruktur jaringan, keamanan siber, dan sistem komunikasi, kami membantu organisasi meningkatkan kinerja, keandalan, dan keamanan jaringan mereka.
              </p>
            </div>
            <div className="p-6 bg-slate-200 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Artificial Intelligence (AI)</h4>
              <p className="text-sm">
                Kami memanfaatkan kekuatan AI untuk mendorong inovasi dan transformasi digital. Tim kami mengembangkan solusi AI yang dapat diintegrasikan di berbagai sektor, mulai dari machine learning, computer vision, hingga natural language processing (NLP).
              </p>
            </div>
            <div className="p-6 bg-slate-200 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Chip Manufacturing</h4>
              <p className="text-sm">
                Kami terjun dalam manufaktur chip berteknologi tinggi. Dengan teknologi fabrikasi terkini, kami merancang dan memproduksi chip yang digunakan dalam berbagai perangkat elektronik, dari sensor IoT hingga perangkat AI dan infrastruktur jaringan.
              </p>
            </div>
          </div>
        </div>

        {/* Prestasi Perusahaan */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Our Achievements</h3>
          <p className="text-lg leading-8">
            Selama lebih dari dua dekade, Naufal Technology's telah menerima berbagai penghargaan dan pengakuan di industri teknologi. Kami terus berinovasi dan mengembangkan solusi teknologi terbaru yang memberikan dampak positif bagi industri global. Beberapa pencapaian penting kami meliputi:
          </p>
          <ul className="list-disc list-inside pl-4 mt-4">
            <li>Peluncuran teknologi jaringan 5G pertama di beberapa negara Asia Tenggara.</li>
            <li>Pengembangan chip AI berkinerja tinggi yang digunakan oleh perusahaan teknologi besar di seluruh dunia.</li>
            <li>Menjadi salah satu dari Top 10 perusahaan AI terinovatif selama lima tahun berturut-turut.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-semibold mb-4">Join Us in Shaping the Future</h3>
          <p className="text-lg leading-8">
            Bersama Naufal Technology's, mari kita ciptakan masa depan yang lebih terhubung, aman, dan cerdas. Bergabunglah dengan kami dalam perjalanan inovasi ini dan rasakan dampak teknologi terdepan yang kami tawarkan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
