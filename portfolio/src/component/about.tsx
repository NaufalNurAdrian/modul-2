import { useEffect, useRef, useState } from "react";
import profil from "../assets/profil.png";
import ProgramingLanguage from "./programinglanguage";

const About: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className={`aboutpage flex flex-col justify-center items-center mt-20 min-h-screen transition-opacity duration-700 ${
        animate ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Title */}
      <div className="title font-bold text-3xl sm:text-4xl mb-8 sm:mb-12 text-center">
        <h1>About</h1>
      </div>

      {/* Main Content */}
      <div
        className={`content flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-8 sm:space-y-0 sm:space-x-8 max-w-5xl transition-transform duration-700 ${
          animate ? "translate-x-0" : "translate-x-[-30%]"
        }`}
      >
        {/* About Text */}
        <div
          className={`background text-center sm:text-left flex-1 transition-transform duration-700 ${
            animate ? "translate-x-0" : "translate-x-[-50%]"
          }`}
        >
          <h1 className="text-base sm:text-lg max-w-xs sm:max-w-sm md:w-96">
            Hello! I'm Naufal Nur Adrian, a web developer passionate about
            building dynamic and user-friendly websites. With expertise in both
            front-end and back-end technologies, I create seamless digital
            experiences with a full-stack approach.
          </h1>
        </div>

        {/* Profile Image */}
        <div className="image w-[200px] sm:w-[250px] lg:w-[300px]">
          <img src={profil} alt="Profile" className="rounded-3xl w-full" />
        </div>

        {/* Additional Information */}
        <div
          className={`data text-center sm:text-left flex-1 transition-transform duration-700 ${
            animate ? "translate-x-0" : "translate-x-[50%]"
          }`}
        >
          <div className="text-base sm:text-lg max-w-xs sm:max-w-sm md:w-96">
            <p>Name: Naufal Nur Adrian</p>
            <p>Place, Date of birth: Jakarta, October 24 2005</p>
            <p>Residence: Bogor</p>
          </div>
        </div>
      </div>

      {/* Programming Language Section */}
      <div className="mt-20 sm:mt-24"> {/* Adjusted margin-top for better spacing */}
        <ProgramingLanguage />
      </div>
    </div>
  );
};

export default About;