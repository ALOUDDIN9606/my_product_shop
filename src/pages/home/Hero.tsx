import iphone from "../../assets/images/iphone.png";
import home from "../../assets/images/home.png";
import { FaArrowRight } from "react-icons/fa6";
  
const Hero = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-10 mb-10 bg-primary flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-12 lg:px-20 rounded-lg shadow-lg relative overflow-hidden">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2">
          <img src={iphone} alt="iPhone" className="w-40 mx-auto md:mx-0 md:w-48 lg:w-56" />
          <h2 className="text-4xl lg:text-5xl leading-tight font-semibold text-secondary mt-5">
            Up to 10% off Voucher
          </h2>
          <button className="flex items-center gap-3 text-white py-2 px-4 rounded-md mt-6 bg-red-500 hover:bg-red-600 transition-all duration-300 ease-in-out group relative">
            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:h-[4px]">
              Shop Now
            </span>
            <FaArrowRight className="text-xl group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <img src={home} alt="Home" className="w-60 md:w-72 lg:w-80 hover:scale-105 transition-all duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
