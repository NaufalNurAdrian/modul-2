import { useEffect, useRef, useState } from 'react';
import image from "../assets/purwadhika2.png";
import smanic from "../assets/smanic.png";

const PageContent: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center p-6">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">My Education</h1>
      </div>
      <div
        ref={sectionRef}
        className="flex flex-col md:flex-row w-full max-w-5xl px-4 space-y-8 md:space-y-0 md:gap-x-16"
      >
        {/* First Image */}
        <div
          className={`transition-transform duration-1000 w-full md:w-[55%] ${
            animate ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
        >
          <img src={image} alt="Purwadhika" className="rounded-3xl w-full shadow-lg" />
        </div>

        {/* Second Image */}
        <div
          className={`transition-transform duration-1000 w-full md:w-[40%] ${
            animate ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}
        >
          <img src={smanic} alt="Smanic" className="rounded-3xl w-full shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default PageContent;
