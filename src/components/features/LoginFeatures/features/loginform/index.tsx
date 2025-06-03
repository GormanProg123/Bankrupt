import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import logo from "../../../../../assets/logo.png";
import { loginRequest } from "../../../../../utils/api";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await loginRequest(email, password);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/home");
    } catch (error) {
      console.log("Login failed: " + error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 relative text-black">
      <div className="flex items-center absolute top-4 left-4">
        <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
        <p className="font-bold text-2xl">Bankrupt</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        <h1 className="text-2xl font-bold mb-2 text-center">Sign In</h1>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Enter your credentials to access your account
        </p>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="mb-6 relative">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <a
              href="/password-reset"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 pr-10 rounded-xl border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-11 right-3 text-gray-600 hover:text-black"
            tabIndex={-1}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-black text-white font-medium rounded-xl hover:bg-white hover:text-black hover:border hover:border-gray-600 transition"
        >
          Sign In
        </button>

        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account?{" "}
          <a href="/registration" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};
