import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { loginUser } from "../services/authService";
import hero from "../assets/images/hero.png";

import Card from "../components/common/Card";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = await loginUser(formData);

    localStorage.setItem("token", data.token);

    toast.success("Login Successful!");

    navigate("/dashboard");
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Login Failed"
    );
  }
};
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Left Section */}
      <div className="hidden w-1/2 flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 p-10 lg:flex">
        <img
          src={hero}
          alt="Health Illustration"
          className="w-2/3 max-w-md"
        />

        <h1 className="mt-8 text-6xl font-bold text-white">
          HealthLens
        </h1>

        <p className="mt-6 max-w-md text-center text-lg leading-8 text-blue-100">
          AI-powered personal health intelligence platform that helps
          you understand your health, not just track it.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex w-full items-center justify-center px-8 py-16 lg:w-1/2">

        <Card className="w-full max-w-2xl">
  <form onSubmit={handleSubmit}>
          <h2 className="mb-2 text-4xl font-bold text-slate-800">
  Welcome Back 👋
</h2>

<p className="mb-10 text-lg text-gray-500">
  Login to continue your health journey.
</p>

          <Input
            label="Email"
             name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
          />

          <Input
             label="Password"
              name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="mb-10 flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                  type="checkbox"
                         className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Button type="submit">
            Login
           </Button>

          <p className="mt-10 text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:underline"
            >
              Register
            </Link>
          </p>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Login;