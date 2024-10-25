import { useEffect, useRef } from 'react';
import Footer from "../component/footer";
import Hero from "../component/hero";
import Navbar from "../component/navbar";
import PageContent from "../component/pagecontent";

const Homepage: React.FC = () => {
  const pageContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Observer for PageContent section
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect(); // Disconnect observer to prevent re-triggering
        }
      },
      { threshold: 0.1 } // Trigger when 10% of PageContent is visible
    );

    if (pageContentRef.current) {
      observer.observe(pageContentRef.current);
    }

    return () => {
      if (pageContentRef.current) observer.unobserve(pageContentRef.current);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Hero />
      </div>
      <div ref={pageContentRef}>
        <PageContent /> {/* Pass the animate prop */}
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
