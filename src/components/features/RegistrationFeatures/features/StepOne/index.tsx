import { useEffect, useState } from "react";
import "./styles/regstepone.css";
import logo from "../../../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

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
    <div className="registration-page">
      <div className="logo-container-reg1">
        <img src={logo} alt="logo" className="logo-img" />
        <p className="logo-text">Bankrupt</p>
      </div>

      <div className="form-container">
        <h1 className="form-title">Create Your Account</h1>
        <p className="form-subtitle">
          Join Bankrupt Bank and start managing your finances with ease
        </p>

        <div className="steps-bar">
          <button className="step-button active">Personal Info</button>
          <button
            className="step-button"
            onClick={() => navigate("/registration/step2")}
          >
            Account Setup
          </button>
          <button
            className="step-button"
            onClick={() => navigate("/registration/step3")}
          >
            Verification
          </button>
        </div>

        <form
          className="registration-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                type="tel"
                id="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="date_of_birth">Date of Birth</label>
              <input
                type="date"
                id="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="social_security">Social Security Number</label>
              <input
                id="social_security"
                placeholder="XXX-XX-XXXX"
                pattern="\d{3}-\d{2}-\d{4}"
                value={formData.social_security}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="address">State Address</label>
            <input
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="city">City</label>
              <input
                id="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="state">State</label>
              <input
                id="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="post_code">ZIP Code</label>
              <input
                id="post_code"
                value={formData.post_code}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="button-container">
            <button type="button" onClick={handleNext} className="next-button">
              Get Started
            </button>
          </div>

          <p className="signin-text">
            Already have an account?{" "}
            <a href="/login" className="signin-link1">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
