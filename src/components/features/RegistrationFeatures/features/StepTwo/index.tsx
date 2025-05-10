import { useEffect, useState } from "react";
import logo from "../../../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../../api/baseUrl";

interface StepOneData {
  email: string;
  phone_number: string;
  social_security: string;
}

interface SecurityQuestion {
  question: string;
  answer: string;
}

export const RegistrationStepTwo = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [stepOneData, setStepOneData] = useState<StepOneData>({
    email: "",
    phone_number: "",
    social_security: "",
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);
  const [securityQuestions, setSecurityQuestions] = useState<
    SecurityQuestion[]
  >([
    { question: "", answer: "" },
    { question: "", answer: "" },
  ]);

  useEffect(() => {
    const savedStepOne = localStorage.getItem("registrationData");
    if (savedStepOne) {
      setStepOneData(JSON.parse(savedStepOne));
    }

    const savedStepTwo = localStorage.getItem("registrationStepTwo");
    if (savedStepTwo) {
      const data = JSON.parse(savedStepTwo);
      setUsername(data.username || "");
      setPassword(data.password || "");
      setConfirmPassword(data.confirmPassword || "");
      setSelectedAccounts(data.selectedAccounts || []);
      setSecurityQuestions(data.securityQuestions || []);
    }
  }, []);

  const handleAccountChange = (label: string) => {
    setSelectedAccounts((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const handleQuestionChange = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    setSecurityQuestions((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const saveStepTwoData = () => {
    const data = {
      username,
      password,
      confirmPassword,
      selectedAccounts,
      securityQuestions,
    };
    localStorage.setItem("registrationStepTwo", JSON.stringify(data));
  };

  const sendRegistrationData = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const finalData = {
      email: stepOneData.email,
      phone_number: stepOneData.phone_number,
      social_security: stepOneData.social_security,
      username,
      password,
      selected_accounts: selectedAccounts,
      security_questions: securityQuestions,
    };

    fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then(async (res) => {
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.detail || "Registration failed");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Registration successful:", data);
        navigate("/registration/step3");
      })
      .catch((err) => {
        console.error("Registration error:", err);
        alert("Error: " + err.message);
      });
  };

  const handleNext = () => {
    saveStepTwoData();
    sendRegistrationData();
    navigate("/registration/step3");
  };

  const handleBack = () => {
    saveStepTwoData();
    navigate("/registration/step1");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 relative text-black">
      <div className="flex items-center absolute top-5 left-5">
        <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
        <p className="font-bold text-2xl">Bankrupt</p>
      </div>

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8 mt-24">
        <h1 className="text-2xl font-bold text-center mb-1">Account Setup</h1>
        <p className="text-gray-500 text-sm text-center mb-6">
          Set up your credentials and account preferences
        </p>

        <div className="flex justify-between bg-gray-200 p-2 rounded-2xl mb-6">
          <button
            className="w-full p-2 rounded-2xl bg-gray-200 hover:bg-gray-300 transition"
            onClick={handleBack}
          >
            Personal Info
          </button>
          <button className="w-full p-2 rounded-2xl bg-white font-semibold">
            Account Setup
          </button>
          <button
            className="w-full p-2 rounded-2xl bg-gray-200 hover:bg-gray-300 transition"
            onClick={handleNext}
          >
            Verification
          </button>
        </div>

        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg text-base"
            />
            <p className="text-gray-500 text-xs mt-1">
              This will be used to log in to your account
            </p>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-lg text-base"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-lg text-base"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Account Types
            </label>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Checking Account",
                "Savings Account",
                "Credit Card",
                "Investment Account",
              ].map((label) => (
                <label className="flex items-center text-sm" key={label}>
                  <input
                    type="checkbox"
                    checked={selectedAccounts.includes(label)}
                    onChange={() => handleAccountChange(label)}
                    className="mr-2"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Security Questions
            </label>
            <div className="grid gap-4">
              {[0, 1].map((i) => (
                <div key={i} className="flex flex-col gap-2">
                  <select
                    value={securityQuestions[i]?.question}
                    onChange={(e) =>
                      handleQuestionChange(i, "question", e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg text-base"
                  >
                    <option value="">Select security question {i + 1}</option>
                    <option>What is your pet's name?</option>
                    <option>What is your mother's maiden name?</option>
                    <option>What is your favorite teacher's name?</option>
                    <option>What was the name of your first school?</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Your answer"
                    value={securityQuestions[i]?.answer}
                    onChange={(e) =>
                      handleQuestionChange(i, "answer", e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg text-base"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              className="bg-gray-100 hover:bg-gray-200 transition text-black px-6 py-3 rounded-lg"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              type="button"
              className="bg-black hover:bg-gray-800 transition text-white px-6 py-3 rounded-lg"
              onClick={handleNext}
            >
              Continue to Verification
            </button>
          </div>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
