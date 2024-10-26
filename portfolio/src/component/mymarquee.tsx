import Marquee from 'react-fast-marquee';
import HtmlLogo from '../assets/html-logo.svg'; 
import CssLogo from '../assets/css-logo.svg';
import JavascriptLogo from '../assets/javascript-logo.svg'; 
import TypescriptLogo from '../assets/typescript-logo.svg'; 
import ReactLogo from '../assets/react-logo.svg'; 
import TailwindLogo from '../assets/tailwind-logo.svg'; 

const MyMarquee = () => {
  return (
    <div className='marquee mt-10 px-2 sm:px-4'>
      <Marquee
        className='Logo bg-slate-100 h-12 sm:h-14 md:h-16 lg:h-20' // Further reduced heights
        speed={50}
        style={{ borderRadius: '15px' }}
      >
        {/* Logo Items */}
        {[HtmlLogo, CssLogo, JavascriptLogo, TypescriptLogo, ReactLogo, TailwindLogo].map((logo, index) => (
          <div className="flex justify-center items-center mx-4 sm:mx-6 lg:mx-8" key={index}>
            <a>
              <img
                src={logo}
                alt={`${logo} Logo`}
                className="w-8 h-auto sm:w-10 md:w-12 lg:w-14" // Adjusted image sizes
              />
            </a>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MyMarquee;
