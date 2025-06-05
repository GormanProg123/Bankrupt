import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { confirm2FARequest } from "../../../../utils/api";
import logo from "../../../../assets/logo.png";

export const TwoFAConfirmForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [code, setCode] = useState("");
  const [email, setEmail] = useState(location.state?.email || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await confirm2FARequest(email, code);
      navigate("/home");
    } catch (error) {
      console.error("Confirmation error 2FA:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4 text-black relative">
      <div className="flex items-center absolute top-4 left-4">
        <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
        <p className="font-bold text-2xl">Bankrupt</p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-4xl flex gap-12 items-center">
        <div className="w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">Confirm your identity</h2>
          <p className="text-gray-600 text-base">
            A 8-digit confirmation code has been sent to your email. Please
            enter it along with your email address to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-1/2 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              required
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="code">
              2FA Code
            </label>
            <input
              required
              id="code"
              type="text"
              maxLength={8}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-black text-white font-semibold rounded-xl hover:bg-white hover:text-black hover:border hover:border-gray-600 transition"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};
