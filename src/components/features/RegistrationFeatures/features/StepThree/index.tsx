import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../../../assets/logo.png";
const STORAGE_KEY = "registrationStepThree";

export const RegistrationStepThree = () => {
  const [formData, setFormData] = useState({
    agreed: false,
    verificationCode: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const data = JSON.parse(savedData);
      setFormData({
        agreed: data.agreed || false,
        verificationCode: data.code || "",
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const saveStepThreeData = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreed) {
      console.log("You must agree to the terms.");
      return;
    }

    if (!formData.verificationCode.trim()) {
      console.log("Please enter the verification code.");
      return;
    }

    saveStepThreeData();

    const savedStepOneData = JSON.parse(
      localStorage.getItem("registrationData") || "{}"
    );
    const savedStepTwoData = JSON.parse(
      localStorage.getItem("registrationStepTwo") || "{}"
    );

    const registrationData = {
      ...savedStepOneData,
      password: savedStepTwoData.password || "",
      verification_code: formData.verificationCode,
    };

    console.log("Registration Data to Send:", registrationData);

    try {
      const response = await fetch("http://localhost:8000/auth/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || "Verification failed");
      }

      //
      //const data = await response.json();
      //const verificationCodeFromEmail = data.verification_code;
      //if (formData.verificationCode !== verificationCodeFromEmail) {
      //  alert("The verification code is incorrect.");
      //  return;
      //}
      //

      console.log("The account was created successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error during verification:", error);
      alert("Error: " + error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-black">
      <div className="flex items-center absolute top-4 left-4">
        <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
        <p className="font-bold text-2xl">Bankrupt</p>
      </div>

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-8 mt-24">
        <h1 className="text-center text-2xl font-bold mb-2">Verification</h1>
        <p className="text-center text-black text-sm mb-6">
          Confirm your agreement and complete verification
        </p>

        <div className="flex justify-between bg-gray-200 p-2 rounded-2xl mb-6">
          <button
            className="flex-1 p-2 rounded-2xl font-bold text-black bg-gray-200 hover:bg-gray-300 transition"
            onClick={() => navigate("/registration/step1")}
          >
            Personal Info
          </button>
          <button
            className="flex-1 p-2 rounded-2xl font-bold text-black bg-gray-200 hover:bg-gray-300 transition"
            onClick={() => navigate("/registration/step2")}
          >
            Account Setup
          </button>
          <button className="flex-1 p-2 rounded-2xl font-bold text-black bg-white border border-gray-300">
            Verification
          </button>
        </div>

        <div className="bg-gray-100 border border-gray-300 rounded-2xl p-4 mb-6 max-h-64 overflow-y-auto">
          {[
            {
              title: "1. Account Usage",
              desc: "You agree to use your account for lawful purposes only and in accordance with all applicable laws and regulations.",
            },
            {
              title: "2. Privacy Policy",
              desc: "Your use of our services is also governed by our Privacy Policy, which can be found on our website.",
            },
            {
              title: "3. Security",
              desc: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
            },
            {
              title: "4. Electronic Communications",
              desc: "By creating an account, you consent to receive electronic communications from Horizon Bank.",
            },
            {
              title: "5. Fees and Charges",
              desc: "You agree to pay all fees and charges associated with your account as outlined in our Fee Schedule.",
            },
            {
              title: "6. Termination",
              desc: "We reserve the right to terminate your account at any time for any reason, including violation of these terms.",
            },
          ].map((item, idx) => (
            <p key={idx} className="mb-2">
              <strong>{item.title}:</strong> {item.desc}
            </p>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="agreed"
              className="w-5 h-5 mr-2"
              checked={formData.agreed}
              onChange={handleChange}
              required
            />
            I agree to the terms and conditions and privacy policy
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="marketing"
              className="w-5 h-5 mr-2"
              onChange={handleChange}
            />
            I agree to receive marketing communications from Horizon Bank
          </label>
        </div>

        <div className="mt-6">
          <label
            htmlFor="verificationCode"
            className="block text-sm font-medium mb-2"
          >
            Verification Code
          </label>
          <input
            type="text"
            id="verificationCode"
            name="verificationCode"
            value={formData.verificationCode}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg border border-gray-300 text-black bg-white"
          />
          <p className="text-xs text-gray-500 mt-2">
            We've sent a verification code to your email address
          </p>
        </div>

        <div className="flex justify-between mt-6">
          <button
            className="w-40 p-3 rounded-xl font-medium bg-white border border-gray-300 text-black hover:bg-gray-100 transition"
            onClick={() => navigate("/registration/step2")}
          >
            Back
          </button>
          <button
            className="w-40 p-3 rounded-xl font-medium bg-black text-white border border-gray-300 hover:bg-white hover:text-black transition"
            onClick={handleSubmit}
          >
            Create Account
          </button>
        </div>

        <p className="text-center mt-6 text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};
