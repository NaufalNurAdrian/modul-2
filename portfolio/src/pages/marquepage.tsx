import MyMarquee from "../component/mymarquee";

function MarquePage() {
  return (
    <div className="marquepage mx-4 sm:mx-8 lg:mx-16 mb-10 sm:mb-16 lg:mb-20 mt-10">
      <div className="title text-center mb-10 sm:mb-16 lg:mb-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Tools And Experience
        </h1>
      </div>
      <MyMarquee />
    </div>
  );
}

export default MarquePage;
