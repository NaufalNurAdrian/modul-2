'use client'

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Portfolio from '@/components/portfolio';
import { useState, useEffect, useRef } from 'react';

const PortfolioPages: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const portfolioRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true); // Activate animation when the portfolio section comes into view
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
    <div>
      <Navbar />
      <div ref={portfolioRef}>
        <Portfolio animate={animate} />
      </div>
      <Footer />
    </div>
  );
}

export default PortfolioPages;
