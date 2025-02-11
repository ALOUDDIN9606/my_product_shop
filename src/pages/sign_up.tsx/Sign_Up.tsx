import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Sign_Up = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "confirmPassword" && e.target.value !== formData.newPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mx-auto py-10 px-4 flex flex-col lg:flex-row gap-6">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Manage My Account</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="text-red-500 font-semibold cursor-pointer">My Profile</li>
          <li className="hover:text-red-500 transition cursor-pointer">Address Book</li>
          <li className="hover:text-red-500 transition cursor-pointer">My Payment Options</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-4">My Orders</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-red-500 transition cursor-pointer">My Returns</li>
          <li className="hover:text-red-500 transition cursor-pointer">My Cancellations</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-4">My Wishlist</h2>
      </aside>

      {/* Profile Form */}
      <section className="w-full lg:w-3/4 shadow-md p-6 sm:p-10 rounded-lg bg-white">
        <h2 className="text-2xl font-bold text-red-500 mb-6 text-center lg:text-left">Edit Your Profile</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border px-4 py-2 rounded w-full focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border px-4 py-2 rounded w-full focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full focus:ring-2 focus:ring-blue-500"
            required
          />

          <h3 className="text-lg font-semibold mt-6">Password Changes</h3>

          {/* Password Fields */}
          {["currentPassword", "newPassword", "confirmPassword"].map((field, index) => (
            <div className="relative" key={index}>
              <input
                type={showPassword[field as keyof typeof showPassword] ? "text" : "password"}
                name={field}
                placeholder={field === "currentPassword" ? "Current Password" : field === "newPassword" ? "New Password" : "Confirm New Password"}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="border px-4 py-2 rounded w-full pr-10 focus:ring-2 focus:ring-blue-500"
                required={field !== "currentPassword"}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, [field]: !prev[field as keyof typeof showPassword] }))
                }
              >
                {showPassword[field as keyof typeof showPassword] ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          ))}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end mt-4 gap-4">
            <button type="button" className="text-gray-500">
              Cancel
            </button>
            <button
              type="submit"
              className={`w-full sm:w-auto px-6 py-2 rounded transition ${
                Object.values(formData).every((value) => value.trim()) && !error
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
              disabled={!Object.values(formData).every((value) => value.trim()) || !!error}
            >
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Sign_Up;
