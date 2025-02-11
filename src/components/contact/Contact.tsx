import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-20">
      {/* Title */}
      <div className="text-center pb-10">
        <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 pb-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Feel free to reach out to us for any inquiries or support.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhone className="text-red-500 text-lg sm:text-xl" />
              <p className="text-gray-700 text-sm sm:text-base">+99899 777 77 77</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500 text-lg sm:text-xl" />
              <p className="text-gray-700 text-sm sm:text-base">info@example.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-500 text-lg sm:text-xl" />
              <p className="text-gray-700 text-sm sm:text-base">Uzbekistan, Tashkent city</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Send us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-1.5 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-1.5 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-3 py-1.5 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-8">
        <iframe
          title="Google Map"
          className="w-full h-48 sm:h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509433!2d144.95565131531274!3d-37.817327979751994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2s!4v1612308883995"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
