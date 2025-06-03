import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPasswordConfirm } from "../../../../utils/api";
import logo from "../../../../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import clsx from "clsx";

export const ResetConfirmForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token") || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const conditions = {
    length: password.length >= 8,
    hasLetter: /[a-zA-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (Object.values(conditions).some((cond) => !cond)) {
      setError("Password does not meet all conditions");
      return;
    }

    try {
      await resetPasswordConfirm(token, password);
      navigate("/login");
    } catch {
      setError("The password could not be changed. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-50">
      <div className="flex items-center self-start mb-8">
        <img src={logo} alt="Bankrupt Logo" className="w-10 h-10 mr-3" />
        <h1 className="text-2xl font-bold">Bankrupt</h1>
      </div>

      <div className="w-full max-w-lg bg-white shadow-md rounded-xl p-6 mt-16">
        <h2 className="text-2xl font-bold text-black mb-4 text-center">
          Change Your Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:border-black transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
              tabIndex={-1}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:border-black transition"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
              tabIndex={-1}
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={18} />
              ) : (
                <FaEye size={18} />
              )}
            </button>
          </div>

          <ul className="text-sm text-gray-600 space-y-1 mt-2">
            <li
              className={clsx({
                "text-green-600": conditions.length,
                "text-gray-600": !conditions.length,
              })}
            >
              Minimum 8 characters
            </li>
            <li
              className={clsx({
                "text-green-600": conditions.hasLetter,
                "text-gray-600": !conditions.hasLetter,
              })}
            >
              Contains letters
            </li>
            <li
              className={clsx({
                "text-green-600": conditions.hasNumber,
                "text-gray-600": !conditions.hasNumber,
              })}
            >
              Contains numbers
            </li>
            <li
              className={clsx({
                "text-green-600": conditions.hasSpecialChar,
                "text-gray-600": !conditions.hasSpecialChar,
              })}
            >
              Preferably includes special characters
            </li>
          </ul>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Confirm Password
          </button>
        </form>
      </div>
    </div>
  );
};
