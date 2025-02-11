import qr from "../../assets/images/qrcode.svg";
import google_play from "../../assets/images/googleplay.svg";
import app_store from "../../assets/images/appstore.svg";
import { GoPaperAirplane } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { BsCCircle } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { PiXLogoLight } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary pt-20 flex flex-col gap-16 mt-[68px] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Exclusive */}
          <div>
            <p className="text-2xl font-semibold font-inter mb-6">Exclusive</p>
            <p className="text-xl font-medium mb-6">Subscribe</p>
            <p className="font-normal mb-4">Get 10% off your first order</p>
            <div className="flex border border-white bg-black rounded-md py-3">
              <input
                placeholder="Enter your email"
                type="text"
                className="w-full sm:w-[170px] outline-none bg-black pl-4"
              />
              <GoPaperAirplane
                className="text-2xl mr-3 cursor-pointer hover:text-gray-600 duration-150"
                onClick={() => navigate("/")}
              />
            </div>
          </div>

          {/* Support */}
          <div>
            <p className="text-xl font-medium mb-6">Support</p>
            <p className="w-full sm:w-[175px] font-normal leading-6 mb-4">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="mb-4">exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          {/* Account */}
          <div>
            <p className="text-xl font-medium mb-6">Account</p>
            <p className="mb-4">My Account</p>
            <p className="mb-4">Login / Register</p>
            <p className="mb-4">Cart</p>
            <p className="mb-4">Wishlist</p>
            <p className="mb-4">Shop</p>
          </div>

          {/* Quick Link */}
          <div>
            <p className="text-xl font-medium mb-6">Quick Link</p>
            <p className="mb-4">Privacy Policy</p>
            <p className="mb-4">Terms Of Use</p>
            <p className="mb-4">FAQ</p>
            <p className="mb-4">Contact</p>
          </div>

          {/* Download App */}
          <div>
            <p className="text-xl font-medium mb-6">Download App</p>
            <p className="font-medium text-xs mb-2">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-2 mb-6">
              <img src={qr} alt="qr.svg" className="w-16" />
              <div className="flex flex-col">
                <img src={google_play} alt="google_play.svg" className="w-[110px] h-[40px] cursor-pointer" />
                <img src={app_store} alt="app_store.svg" className="w-[110px] h-[40px] cursor-pointer" />
              </div>
            </div>
            <div className="flex gap-6">
              <FaFacebookF className="text-2xl cursor-pointer hover:text-gray-600 duration-150" />
              <PiXLogoLight className="text-2xl cursor-pointer hover:text-gray-600 duration-150" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-gray-600 duration-150" />
              <RiLinkedinLine className="text-2xl cursor-pointer hover:text-gray-600 duration-150" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-800 py-5 text-center">
        <div className="flex justify-center items-center gap-1 text-zinc-700">
          <BsCCircle />
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
