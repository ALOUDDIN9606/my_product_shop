import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signin from "../../../assets/images/signin.png";
import { useSigninMutation } from "../../../redux/api/auth";

const SignIn = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [login, { isLoading, error }] = useSigninMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await login({ ...formData }).unwrap();
      // console.log(user);
      localStorage.setItem("accessToken", user?.accessToken); // Tokenni localStorage ga saqlash
      navigate("/auth/account"); // Tizimga kirgandan keyin account sahifasiga yo‘naltirish
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="container flex mt-10 mb-20">
      <div>
        <img src={signin} alt="Sign In" />
      </div>
      <div className="flex justify-center items-center pl-32">
        <div className="w-[370px] flex flex-col justify-center items-center font-poppins">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-inter font-medium leading-[30px]">
                Log in to Exclusive
              </h2>
              <p className="font-poppins font-normal">
                Enter your details below
              </p>
            </div>
            <div className="flex flex-col py-14 gap-10">
              <input
                className="outline-none border-b-2 pb-2"
                placeholder="Username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                className="outline-none border-b-2 pb-2"
                placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {error && <p className="text-red-500 mb-3">Login failed. Try again.</p>}
            <div className="flex justify-between items-center">
              <button
                className="bg-[#DB4444] border border-[#DB4444] text-[#FAFAFA] rounded-[4px] py-3 px-8 hover:bg-white hover:text-[#DB4444] duration-150"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log In"}
              </button>
              <p className="text-[#DB4444] cursor-pointer hover:text-red-800 duration-150">
                Forget Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
