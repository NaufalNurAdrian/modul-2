export default function Contact() {
    return (
      <section id="contact" className="flex py-16 mt-20 h-[92vh] bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <ul className="space-y-4">
              <li>📍 Jakarta, Indonesia</li>
              <li>📞 +62 812-3456-7890</li>
              <li>✉️ contact@naufal-tech.com</li>
            </ul>
          </div>
          <form className="flex-1 bg-gray-700 p-6 rounded-lg">
            <input type="text" placeholder="Your Name" className="w-full mb-4 px-4 py-2 bg-gray-900 text-white rounded-lg" />
            <input type="email" placeholder="Your Email" className="w-full mb-4 px-4 py-2 bg-gray-900 text-white rounded-lg" />
            <textarea placeholder="Message" className="w-full mb-4 px-4 py-2 bg-gray-900 text-white rounded-lg" rows={4}></textarea>
            <button type="submit" className="w-full border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  