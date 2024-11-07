import Carousel from "@/components/Carousel";
import Content from "@/components/Content";
import ContentProduct from "@/components/ContentProduct";
import Recomendation from "@/components/Recomendation";

export default function Home() {
  return (
    <div className="w-full">
      <Carousel />
      <div className="flex justify-center font-extrabold text-3xl mt-20">
        <h1>New Arrival</h1>
      </div>
      <Content />
      <ContentProduct />
      <Recomendation />
    </div>
  );
}
