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
          setAnimate(true); // Start animation when in view
        } else {
          setAnimate(false); // Reset animation when out of view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">My Education</h1>
      </div>
      <div
        ref={sectionRef}
        className="flex flex-col lg:flex-row w-full max-w-5xl px-4 lg:space-x-16 space-y-8 lg:space-y-0"
      >
        {/* First Image */}
        <div
          className={`transition-transform duration-1000 w-full lg:w-[55%] ${
            animate ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
        >
          <img src={image} alt="Purwadhika" className="rounded-3xl w-full" />
        </div>

        {/* Second Image */}
        <div
          className={`transition-transform duration-1000 w-full lg:w-[35%] ${
            animate ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}
        >
          <img src={smanic} alt="Smanic" className="rounded-3xl w-full" />
        </div>
      </div>
    </div>
  );
};

export default PageContent;
