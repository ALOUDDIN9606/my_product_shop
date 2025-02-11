import { FaUsers, FaCheckCircle, FaChartLine } from "react-icons/fa";
import images from "../../assets/images/user-default.webp";

const About = () => {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-20">
      {/* About Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold">About Us</h2>
        <p className="text-gray-600 mt-4 max-w-2xl text-sm sm:text-base mx-auto">
          We are a passionate team dedicated to providing the best products and services to our customers.
          Our mission is to bring innovation and quality to everything we do.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
          <FaUsers className="text-3xl sm:text-4xl text-blue-500 mx-auto" />
          <h3 className="text-lg sm:text-xl font-semibold mt-2">10,000+ Customers</h3>
          <p className="text-gray-600 text-sm sm:text-base">Trusted by people worldwide</p>
        </div>
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
          <FaCheckCircle className="text-3xl sm:text-4xl text-green-500 mx-auto" />
          <h3 className="text-lg sm:text-xl font-semibold mt-2">500+ Projects Completed</h3>
          <p className="text-gray-600 text-sm sm:text-base">Successfully delivered quality services</p>
        </div>
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
          <FaChartLine className="text-3xl sm:text-4xl text-red-500 mx-auto" />
          <h3 className="text-lg sm:text-xl font-semibold mt-2">20+ Years Experience</h3>
          <p className="text-gray-600 text-sm sm:text-base">In business and industry growth</p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="mt-12">
        <h3 className="text-xl sm:text-2xl font-bold text-center">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {["John Doe", "Jane Smith", "Michael Brown"].map((name, index) => (
            <div key={index} className="text-center">
              <img
                src={images}
                alt="Team Member"
                className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full border-4 border-gray-300"
              />
              <h4 className="text-base sm:text-lg font-semibold mt-3">{name}</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                {index === 0 ? "CEO & Founder" : index === 1 ? "Head of Marketing" : "Lead Developer"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
