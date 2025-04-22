import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../../../assets/logo.png";
import "./styles/regstepthree.css";

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
      const response = await fetch(
        "https://bankrupt-back.onrender.com/auth/verify-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registrationData),
        }
      );

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
    <div className="page-container">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
        <p className="logo-text">Bankrupt</p>
      </div>

      <div className="form-container-step3">
        <h1 className="form-title">Verification</h1>
        <p className="form-description">
          Confirm your agreement and complete verification
        </p>

        <div className="nav-buttons">
          <button
            className="nav-button"
            onClick={() => navigate("/registration/step1")}
          >
            Personal Info
          </button>
          <button
            className="nav-button"
            onClick={() => navigate("/registration/step2")}
          >
            Account Setup
          </button>
          <button className="nav-button active">Verification</button>
        </div>

        <div className="terms-container">
          <p className="terms-item">
            <strong>1. Account Usage:</strong> You agree to use your account for
            lawful purposes only and in accordance with all applicable laws and
            regulations.
          </p>
          <p className="terms-item">
            <strong>2. Privacy Policy:</strong> Your use of our services is also
            governed by our Privacy Policy, which can be found on our website.
          </p>
          <p className="terms-item">
            <strong>3. Security:</strong> You are responsible for maintaining
            the confidentiality of your account credentials and for all
            activities that occur under your account.
          </p>
          <p className="terms-item">
            <strong>4. Electronic Communications:</strong> By creating an
            account, you consent to receive electronic communications from
            Horizon Bank.
          </p>
          <p className="terms-item">
            <strong>5. Fees and Charges:</strong> You agree to pay all fees and
            charges associated with your account as outlined in our Fee
            Schedule.
          </p>
          <p className="terms-item">
            <strong>6. Termination:</strong> We reserve the right to terminate
            your account at any time for any reason, including violation of
            these terms.
          </p>
        </div>

        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="agreed"
              className="checkbox-input"
              checked={formData.agreed}
              onChange={handleChange}
              required
            />
            I agree to the terms and conditions and privacy policy
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="marketing"
              className="checkbox-input"
              onChange={handleChange}
            />
            I agree to receive marketing communications from Horizon Bank
          </label>
        </div>

        <div className="verification-code-container">
          <label htmlFor="verificationCode" className="verification-code-label">
            Verification Code
          </label>
          <input
            type="text"
            id="verificationCode"
            name="verificationCode"
            value={formData.verificationCode}
            className="verification-code-input"
            onChange={handleChange}
            required
          />
          <p className="verification-info">
            We've sent a verification code to your email address
          </p>
        </div>

        <div className="buttons-container">
          <button
            className="button button-back"
            onClick={() => navigate("/registration/step2")}
          >
            Back
          </button>
          <button className="button button-submit" onClick={handleSubmit}>
            Create Account
          </button>
        </div>

        <p className="sign-in-link">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
};
