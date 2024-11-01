import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { useEffect, useRef, useState } from 'react';

interface PortfolioProps {
  animate: boolean; // Keep this if you want to pass in an animate prop from a parent component
}

const Portfolio: React.FC<PortfolioProps> = ({ animate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const portfolioRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true); // Activate animation when the portfolio section comes into view
          observer.disconnect(); // Disconnect the observer after animation starts
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) observer.unobserve(portfolioRef.current);
    };
  }, []);

  return (
    <div ref={portfolioRef} className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div
        className={`mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 transition-transform duration-700 ${
          isVisible || animate ? 'translate-x-0' : 'translate-x-[-30%]'
        }`}
      >
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Welcome</p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                I'M Naufal Nur Adrian
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                I am a passionate web developer with expertise in building modern, responsive websites and applications.
                My experience spans across full-stack development, including front-end frameworks like React, as well as
                back-end technologies. I aim to create intuitive and user-friendly interfaces that offer a seamless experience.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden transition-transform duration-700 ${
          isVisible || animate ? 'translate-x-0' : 'translate-x-[30%]'
        }">
          <img
            alt="Naufal Nur Adrian"
            src='/profil.png'
            className="w-[24rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem]" // Adjusted width
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div
              className={`max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg transition-transform duration-700 ${
                isVisible || animate ? 'translate-x-0' : 'translate-x-[-30%]'
              }`}
            >
              <p>
                I am dedicated to staying up-to-date with the latest technologies and best practices to provide efficient and scalable solutions.
                I take pride in my attention to detail, ensuring that every project I work on is not only functional but also aesthetically pleasing.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Front-end Development</strong> - Skilled in creating dynamic,
                    responsive web interfaces using HTML, CSS, JavaScript, and modern frameworks like React.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Back-end Integration</strong> - Experience with integrating server-side technologies
                    using Node.js, databases, and REST APIs for seamless application functionality.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Database Management</strong> - Expertise in managing relational and non-relational
                    databases, ensuring data integrity and optimal performance.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                I am always looking for new challenges and opportunities to grow as a developer. Feel free to check out my GitHub and LinkedIn profiles
                to see some of my projects and connect with me.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Let's build something great together.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
