import { useState } from "react";
import logo from "../../../../../assets/logo.png";
import { resetPasswordRequest } from "../../../../../utils/api";

export const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [socialSecurity, setSocialSecurity] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await resetPasswordRequest(email, phoneNumber, socialSecurity);
      setIsSubmitted(true);
    } catch {
      setError("Error when sending the request. Check the entered data");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-50">
      <div className="flex items-center self-start mb-8">
        <img src={logo} alt="Bankrupt Logo" className="w-10 h-10 mr-3" />
        <h1 className="text-2xl font-bold">Bankrupt</h1>
      </div>

      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 mt-25">
        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold text-black mb-4 text-center">
              Reset Password
            </h2>
            <p className="text-gray-700 text-center mb-6">
              Enter your information to reset your password
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-md outline-none bg-gray-100"
              />
              <input
                type="text"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="w-full p-3 rounded-md outline-none bg-gray-100"
              />
              <input
                type="text"
                placeholder="Social security number"
                value={socialSecurity}
                onChange={(e) => setSocialSecurity(e.target.value)}
                required
                className="w-full p-3 rounded-md outline-none bg-gray-100"
              />

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-black">
              Verification Complete
            </h2>
            <p className="text-gray-700">
              A password reset link has been sent to your email address.
            </p>
            <a
              href="https://mail.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Go to Gmail
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
