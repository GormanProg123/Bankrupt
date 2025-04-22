import { useEffect, useState } from "react";
import "./styles/regsteptwo.css";
import logo from "../../../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

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

    fetch("https://bankrupt-back.onrender.com/auth/register", {
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
    <div className="regstep-two-container">
      <div className="regstep-two-logo">
        <img src={logo} alt="logo" className="regstep-two-logo-img" />
        <p className="regstep-two-logo-text">Bankrupt</p>
      </div>

      <div className="regstep-two-form-wrapper">
        <h1 className="regstep-two-form-title">Account Setup</h1>
        <p className="regstep-two-form-subtitle">
          Set up your credentials and account preferences
        </p>

        <div className="regstep-two-step-buttons">
          <button className="regstep-two-step-button" onClick={handleBack}>
            Personal Info
          </button>
          <button className="regstep-two-step-button active">
            Account Setup
          </button>
          <button className="regstep-two-step-button" onClick={handleNext}>
            Verification
          </button>
        </div>

        <form
          className="regstep-two-registration-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="regstep-two-form-group">
            <label htmlFor="username">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="regstep-two-input"
            />
            <p className="regstep-two-helper-text">
              This will be used to log in to your account
            </p>
          </div>

          <div className="regstep-two-form-row">
            <div className="regstep-two-form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="regstep-two-input"
              />
            </div>
            <div className="regstep-two-form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="regstep-two-input"
              />
            </div>
          </div>

          <div className="regstep-two-form-group">
            <label>Account Types</label>
            <div className="regstep-two-checkbox-grid">
              {[
                "Checking Account",
                "Savings Account",
                "Credit Card",
                "Investment Account",
              ].map((label) => (
                <label className="regstep-two-checkbox-label" key={label}>
                  <input
                    type="checkbox"
                    checked={selectedAccounts.includes(label)}
                    onChange={() => handleAccountChange(label)}
                    className="regstep-two-checkbox-input"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="regstep-two-form-group">
            <label>Security Questions</label>
            <div className="regstep-two-security-grid">
              {[0, 1].map((i) => (
                <div key={i}>
                  <select
                    value={securityQuestions[i]?.question}
                    onChange={(e) =>
                      handleQuestionChange(i, "question", e.target.value)
                    }
                    className="regstep-two-select"
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
                    className="regstep-two-input"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="regstep-two-form-footer">
            <button
              type="button"
              className="regstep-two-back-button"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              type="button"
              className="regstep-two-continue-button"
              onClick={handleNext}
            >
              Continue to Verification
            </button>
          </div>

          <p className="regstep-two-signin-text">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};
