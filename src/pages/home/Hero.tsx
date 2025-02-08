import {} from 'react'
import iphone from "../../assets/images/iphone.png"
import home from "../../assets/images/home.png"
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="container">
      <div className="mt-10 mb-[40px] bg-primary flex items-center justify-center pt-4">
        <div>
          <img src={iphone} alt="" />
          <h2 className="text-5xl leading-[60px] font-semibold text-secondary mt-5 w-[290px]">
            Up to 10% off Voucher
          </h2>
          <button className="flex items-center gap-2 text-white py-2 rounded-md mt-[22px]">
            <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-white">
              Shop Now
            </span>
            <span className="text-xl">
              <FaArrowRight />
            </span>
          </button>
        </div>
        <div>
          <img src={home} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero