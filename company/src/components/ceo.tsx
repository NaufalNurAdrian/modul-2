import Image from "next/image";

export default function Ceo() {
  return (
    <div className="hero bg-slate-100 text-black min-h-[70vh]">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="CEO Naufal Nur Adrian"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">CEO</h1>
          <p className="mt-2 font-semibold">Naufal Nur Adrian</p>
          <p className="pt-10 text-gray-700">
            Naufal Nur Adrian adalah seorang pemimpin visioner di bidang
            teknologi dengan pengalaman lebih dari 15 tahun dalam pengembangan
            sistem dan inovasi digital. Keahliannya mencakup Artificial
            Intelligence (AI), pengembangan jaringan, dan manufaktur chip
            berteknologi tinggi. Di bawah kepemimpinannya, Naufal Technology
            berhasil meraih berbagai penghargaan global atas inovasi yang
            mengubah dunia teknologi. Komitmennya untuk membawa solusi inovatif
            dan menginspirasi tim telah menjadikan perusahaan sebagai salah satu
            pemimpin industri yang terkemuka.
          </p>
        </div>
      </div>
    </div>
  );
}
