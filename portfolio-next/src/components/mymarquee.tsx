// components/MyMarquee.tsx
import Marquee from 'react-fast-marquee';


const MyMarquee: React.FC = () => {
  const logos = [
    '/html-logo.svg',
    '/css-logo.svg',
    '/javascript-logo.svg',
    '/typescript-logo.svg',
    '/react-logo.svg',
    '/tailwind-logo.svg',
  ];

  return (
    <div className="marquee mt-10 px-2 sm:px-4">
      <Marquee
        className="Logo bg-slate-100 h-12 sm:h-14 md:h-16 lg:h-20"
        speed={50}
        style={{ borderRadius: '15px' }}
      >
        {logos.map((logo, index) => (
          <div className="flex justify-center items-center mx-4 sm:mx-6 lg:mx-8" key={index}>
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-8 h-auto sm:w-10 md:w-12 lg:w-14"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MyMarquee;
