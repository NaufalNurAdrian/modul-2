import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Mengaktifkan animasi ketika hero masuk viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimate(true);  // Mulai animasi saat muncul di viewport
          } else {
            setAnimate(false); // Reset animasi saat keluar viewport
          }
        });
      },
      { threshold: 0.5 } // Mulai animasi saat 50% hero terlihat
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className={`hero bg-base-200 min-h-screen transition-opacity duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className={`max-w-sm rounded-lg shadow-2xl transform transition-transform duration-1000 ${animate ? 'translate-y-0' : '-translate-y-12'}`}
          alt="Hero"
        />
        <div className={`transition-opacity duration-1000 delay-200 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-5xl font-bold">Welcome!</h1>
          <p className="py-6">
            I am Naufal Nur Adrian, a Full-Stack Web Programmer
          </p>
          <button className="btn w-50 rounded-full bg-black text-white">
            <Link to="/port">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
