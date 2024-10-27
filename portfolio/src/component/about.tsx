import { useEffect, useRef, useState } from 'react';
import profil from "../assets/logo.png";

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className={`aboutpage flex flex-col justify-center items-center mt-20 h-auto sm:h-[62vh] transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Title */}
      <div className="title font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-10 lg:mb-12 text-center">
        <h1>About</h1>
      </div>

      {/* Content */}
      <div
        className={`content flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-6 sm:space-y-0 sm:space-x-8 max-w-6xl transition-transform duration-700 ${animate ? 'translate-x-0' : 'translate-x-[-30%]'}`}
      >
        {/* Background Text */}
        <div
          className={`background text-center sm:text-left flex-1 transition-transform duration-700 ${animate ? 'translate-x-0' : 'translate-x-[-50%]'}`}
        >
          <p className="text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4">
            Hello! I'm Naufal Nur Adrian, a web developer passionate about building dynamic and user-friendly websites. With expertise in both front-end and back-end technologies, I create seamless digital experiences with a full-stack approach.
          </p>
        </div>

        {/* Image */}
        <div className="image flex-shrink-0 w-[150px] sm:w-[180px] md:w-[220px] lg:w-[270px] xl:w-[320px] mb-6 sm:mb-0">
          <img src={profil} alt="Profile" className="rounded-3xl w-full h-auto" />
        </div>

        {/* Additional Data */}
        <div
          className={`data text-center sm:text-left flex-1 transition-transform duration-700 ${animate ? 'translate-x-0' : 'translate-x-[50%]'}`}
        >
          <div className="text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4">
            <p>Name: Naufal Nur Adrian</p>
            <p>Place, Date of Birth: Jakarta, 24 Oktober 2005</p>
            <p>Residence: Bogor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
