import {} from "react";
import { useGetMeQuery } from "../../redux/api/auth";
import { useNavigate } from "react-router-dom";
import { ThreeDot } from "react-loading-indicators";

const Account = () => {
  const { data, isError, isLoading } = useGetMeQuery({});
  const navagate = useNavigate();

  if (isError) {
    navagate("/signin");
  }

  if (isLoading) {
    return (
      <div className="mx-auto flex items-center justify-center h-[544px]">
        <ThreeDot
          variant="bounce"
          color="#32cd32"
          size="medium"
          text=""
          textColor=""
        />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="flex items-center justify-between mt-20">
        <p className="text-sm">
          <span className="opacity-[50%]">Home</span> / My Account
        </p>
        <p className="text-sm">
          Welcome!{" "}
          <span className="text-[#DB4444]">
            {data?.firstName} {data?.lastName}
          </span>
        </p>
      </div>
      <div className="flex mt-20">
        <div>
          <h2 className="text-base font-medium">Manage My Account</h2>
          <ul className="mt-4 flex flex-col gap-2 ml-[35px]">
            <li className="text-[#DB4444] cursor-pointer hover:text-[#DB4444] hover:opacity-100">
              My Profile
            </li>
            <li className="opacity-[50%] cursor-pointer hover:text-[#DB4444] hover:opacity-100">
              Address Book
            </li>
            <li className="opacity-[50%] cursor-pointer hover:text-[#DB4444] hover:opacity-100">
              My Payment Options
            </li>
          </ul>
          <h2 className="text-base font-medium mt-6">My Orders</h2>
          <ul className="mt-4 flex flex-col gap-2 ml-[35px]">
            <li className="opacity-[50%] cursor-pointer hover:text-[#DB4444] hover:opacity-100">
              My Returns
            </li>
            <li className="opacity-[50%] cursor-pointer hover:text-[#DB4444] hover:opacity-100">
              My Cancellations
            </li>
          </ul>
          <h2 className="text-base font-medium mt-6">My Wishlist</h2>
        </div>
        <div className="py-10 px-20 flex-1">
          <h2 className="text-xl font-medium text-[#DB4444]">
            Edit Your Profile
          </h2>
          <form action="">
            <div className="grid grid-cols-2 gap-x-[50px] gap-y-[24px] mt-4">
              <div>
                <label className="">First Name</label>
                <input
                  type="text"
                  className="w-full py-4 px-3 border rounded bg-[#F5F5F5] mt-2 outline-none"
                  placeholder={data?.firstName}
                />
              </div>
              <div>
                <label className="">Last Name</label>
                <input
                  type="text"
                  className="w-full py-4 px-3 border rounded bg-[#F5F5F5] mt-2 outline-none"
                  placeholder={data?.lastName}
                />
              </div>
              <div>
                <label className="">Email</label>
                <input
                  type="email"
                  className="w-full py-4 px-3 border rounded bg-[#F5F5F5] mt-2 outline-none"
                  placeholder={data?.email}
                />
              </div>
              <div>
                <label className="">Address</label>
                <input
                  type="text"
                  className="w-full py-4 px-3 border rounded bg-[#F5F5F5] mt-2 outline-none"
                  placeholder={data?.address?.address}
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="">Password Changes</label>
              <input
                type="password"
                placeholder="Current Password"
                className="w-full py-4 px-3 border rounded bg-[#F5F5F5] mt-2 outline-none"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full py-4 px-3 border rounded bg-[#F5F5F5] mt-4 outline-none"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full py-4 px-3 border rounded bg-[#F5F5F5] mt-4 outline-none"
              />
            </div>

            <div className="flex items-center justify-end mt-6 gap-8">
              <button>Cancel</button>
              <button className="font-medium text-[#FAFAFA] bg-[#DB4444] py-4 px-12">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
