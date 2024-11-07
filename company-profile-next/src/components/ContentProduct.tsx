import Image from "next/image";

export default function ContentProduct() {
  return (
    <div className="flex flex-col gap-10 p-4 md:p-8 lg:p-12">
      <div className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full">
        <Image src="/png.avif" alt="product" fill className="object-cover rounded-lg shadow-lg" />
      </div>
      <div className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full">
        <Image src="/png-1.avif" alt="product" fill className="object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  );
}
