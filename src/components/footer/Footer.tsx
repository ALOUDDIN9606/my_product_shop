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
    <div className="bg-primary pt-20 flex flex-col gap-16 mt-[68px]">
      <div className="container grid grid-cols-5 font-poppins w-full">
        <div className="col-span-5 bg-primary -mx-4 px-4">
          <div className="flex justify-between">
            <div className="text-white">
              <p className="text-2xl font-semibold font-inter mb-6">
                Exclusive
              </p>
              <p className="text-xl font-medium mb-6 leading-7">Subscribe</p>
              <p className="font-normal mb-4">Get 10% off your first order</p>
              <div className="flex border border-white bg-black rounded-[4px] py-3">
                <input
                  placeholder="Enter your email"
                  type="text"
                  className="w-[170px] outline-none bg-black pl-4"
                />
                <GoPaperAirplane
                  className="text-2xl mr-3 cursor-pointer hover:text-gray-600 duration-150"
                  onClick={() => navigate("/")}
                />
              </div>
            </div>
            <div className="text-white">
              <p className="text-xl font-medium mb-6 leading-7">Support</p>
              <p className="w-[175px] h-[48px] font-normal leading-6 mb-4">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="mb-4 font-normal leading-6">exclusive@gmail.com</p>
              <p className="font-normal leading-6">+88015-88888-9999</p>
            </div>
            <div className="text-white">
              <p className="text-xl font-medium mb-6 leading-7">Account</p>
              <p className="mb-4">My Account</p>
              <p className="mb-4">Login / Register</p>
              <p className="mb-4">Cart</p>
              <p className="mb-4">Wishlist</p>
              <p className="mb-4">Shop</p>
            </div>
            <div className="text-white">
              <p className="text-xl font-medium mb-6 leading-7">Quick Link</p>
              <p className="mb-4">Privacy Policy</p>
              <p className="mb-4">Terms Of Use</p>
              <p className="mb-4">FAQ</p>
              <p className="mb-4">Contact</p>
            </div>
            <div className="text-white">
              <p className="text-xl font-medium mb-6 leading-7">Download App</p>
              <p className="font-medium text-xs mb-2">
                Save $3 with App New User Only
              </p>
              <div className="flex gap-2 mb-6">
                <img src={qr} alt="qr.svg" />
                <div className="flex flex-col">
                  <img
                    src={google_play}
                    alt="google_play.svg"
                    className="w-[110px] h-[40px] cursor-pointer"
                  />
                  <img
                    src={app_store}
                    alt="app_store.svg"
                    className="w-[110px] h-[40px] cursor-pointer"
                  />
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
      </div>
      <div className="flex justify-center items-center gap-1 border-t border-zinc-800 py-5 text-white">
        <BsCCircle className="text-zinc-700" />
        <p className="text-zinc-700">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
