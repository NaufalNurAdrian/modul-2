import React, { useEffect, useRef, useState } from "react";

const Contact: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center mt-10 px-4 sm:px-8 lg:px-0">
      <div
        ref={sectionRef}
        className={`max-w-6xl w-full mx-auto bg-white p-6 sm:p-10 shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 transition-opacity duration-1000 transform ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Left side - Contact Info */}
        <div
          className={`space-y-5 transition-transform duration-1000 ${
            animate ? "translate-x-0" : "-translate-x-20"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Get in touch</h2>
          <p className="text-gray-700">
            Feel free to reach out to us for any inquiries. Our team is always ready to assist you!
          </p>
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-indigo-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89-4.11a2 2 0 011.72 0L21 8m-18 0v8a2 2 0 002 2h14a2 2 0 002-2V8m-18 0l9 5 9-5"
                ></path>
              </svg>
              nuradriannaufal@gmail.com
            </p>
            <p className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-indigo-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h2M4 6v8m-1 2a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1z"
                ></path>
              </svg>
              +62 85156659774
            </p>
            <p className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-indigo-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.2 9.2l4.1 4.1a3 3 0 01.9 2.1V18a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.6c0-.8.3-1.6.9-2.1l4.1-4.1"
                ></path>
              </svg>
              Bogor, Indonesia
            </p>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <form
          className={`space-y-4 transition-transform duration-1000 ${
            animate ? "translate-x-0" : "translate-x-20"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              className="border p-3 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="First name"
              required
            />
            <input
              className="border p-3 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Last name"
              required
            />
          </div>
          <input
            className="border p-3 w-full rounded-md focus:outline-none focus:border-indigo-500"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="border p-3 w-full rounded-md focus:outline-none focus:border-indigo-500"
            type="tel"
            placeholder="Phone number"
            required
          />
          <textarea
            className="border p-3 w-full rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Message"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-500 transition-all duration-300"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
