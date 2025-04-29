import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../../../assets/logo.png";

export const RegistrationStepOne = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    social_security: "",
    address: "",
    city: "",
    state: "",
    post_code: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("registrationData");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    if (Object.values(formData).every((field) => field !== "")) {
      localStorage.setItem("registrationData", JSON.stringify(formData));
      navigate("/registration/step2");
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-24 relative">
      <div className="absolute top-5 left-5 flex items-center text-black">
        <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
        <p className="font-bold text-2xl">Bankrupt</p>
      </div>

      <div className="bg-white p-8 rounded-2xl max-w-7xl w-11/12 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-1 text-black">
          Create Your Account
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Join Bankrupt Bank and start managing your finances with ease
        </p>

        <div className="flex justify-between mb-6 bg-gray-200 rounded-2xl p-2">
          <button className="flex-1 py-2 bg-white rounded-2xl font-medium">
            Personal Info
          </button>
          <button
            className="flex-1 py-2 text-black hover:bg-gray-300 rounded-2xl"
            onClick={() => navigate("/registration/step2")}
          >
            Account Setup
          </button>
          <button
            className="flex-1 py-2 text-black hover:bg-gray-300 rounded-2xl"
            onClick={() => navigate("/registration/step3")}
          >
            Verification
          </button>
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <label
                htmlFor="first_name"
                className="text-sm font-medium mb-1 text-black"
              >
                First Name
              </label>
              <input
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="p-4 border border-gray-300 rounded-lg bg-white text-black"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="last_name"
                className="text-sm font-medium mb-1 text-black"
              >
                Last Name
              </label>
              <input
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="p-4 border border-gray-300 rounded-lg bg-white text-black"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <label
                htmlFor="email"
                className="text-sm font-medium mb-1 text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-4 border border-gray-300 rounded-lg bg-white text-black"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="phone_number"
                className="text-sm font-medium mb-1 text-black"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
                className="p-4 border border-gray-300 rounded-lg bg-white text-black"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <label
                htmlFor="date_of_birth"
                className="text-sm font-medium mb-1 text-black"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                required
                className="p-4 border border-gray-300 rounded-lg bg-white text-black"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="social_security"
                className="text-sm font-medium mb-1 text-black"
              >
                Social Security Number
              </label>
              <input
                id="social_security"
                placeholder="XXX-XX-XXXX"
                pattern="\d{3}-\d{2}-\d{4}"
                value={formData.social_security}
                onChange={handleChange}
                required
                className="p-4 border border-gray-300 rounded-lg bg-white text-black"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="address"
              className="text-sm font-medium mb-1 text-black"
            >
              State Address
            </label>
            <input
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="p-4 border border-gray-300 rounded-lg bg-white text-black"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <label
                htmlFor="city"
                className="text-sm font-medium mb-1 text-black"
              >
                City
              </label>
              <input
                id="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="p-4 border border-gray-300 rounded-lg bg-white text-black"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="state"
                className="text-sm font-medium mb-1 text-black"
              >
                State
              </label>
              <input
                id="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="p-4 border border-gray-300 rounded-lg bg-white text-black"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label
                htmlFor="post_code"
                className="text-sm font-medium mb-1 text-black"
              >
                ZIP Code
              </label>
              <input
                id="post_code"
                value={formData.post_code}
                onChange={handleChange}
                required
                className="p-4 border border-gray-300 rounded-lg bg-white text-black"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={handleNext}
              className="w-48 py-2 bg-black text-white font-medium rounded-lg hover:bg-white hover:text-black border hover:border-gray-600 transition-all"
            >
              Get Started
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
