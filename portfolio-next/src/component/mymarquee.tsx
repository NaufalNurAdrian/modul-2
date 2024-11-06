"use client"

import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const MyMarquee = () => {
  return (
    <div className='marquee mt-10 px-2 sm:px-4'>
      <Marquee
        className='Logo bg-slate-100 h-12 sm:h-14 md:h-16 lg:h-20' // Further reduced heights
        speed={50}
        style={{ borderRadius: '15px' }}
      >
        {/* Logo Items */}
        {["/html-logo.svg", "/css-logo.svg", "/javascript-logo.svg", "/typescript-logo.svg", "/react-logo.svg", "/tailwind-logo.svg"].map((logo, index) => (
          <div className="flex justify-center items-center mx-4 sm:mx-6 lg:mx-8" key={index}>
            <a>
              <Image
                src="/logo.png"
                alt={`${"/logo.png"} Logo`}
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
