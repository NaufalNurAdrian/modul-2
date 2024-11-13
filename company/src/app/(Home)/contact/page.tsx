import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex py-16 mt-20 min-h-screen bg-gradient-to-b from-slate-200 to-slate-100 text-gray-800"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left ">
            Contact Us
          </h2>
          <ul className="space-y-4 text-lg md:text-xl text-gray-700 text-center md:text-left">
            <li>
              📍 <span className="font-medium">Jakarta, Indonesia</span>
            </li>
            <li>
              📞 <span className="font-medium">+62 812-3456-7890</span>
            </li>
            <li>
              ✉️ <span className="font-medium">contact@naufal-tech.com</span>
            </li>
          </ul>
        </div>

        <form className="flex-1 bg-white shadow-lg p-8 rounded-2xl">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 bg-gray-50 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 bg-gray-50 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              className="w-full px-5 py-3 bg-gray-50 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
