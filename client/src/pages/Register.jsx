import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import hero from "../assets/images/hero.png";
import Card from "../components/common/Card";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  age: "",
  gender: "",
  height_cm: "",
  weight: "",
  health_goal: "Weight Loss",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!formData.name.trim()) {
  toast.error("Name is required");
  return;
}

if (!formData.email.trim()) {
  toast.error("Email is required");
  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(formData.email)) {
  toast.error("Please enter a valid email");
  return;
}

if (formData.password.length < 6) {
  toast.error("Password must be at least 6 characters");
  return;
}

if (formData.password !== formData.confirmPassword) {
  toast.error("Passwords do not match");
  return;
}

if (!formData.age || Number(formData.age) <= 0) {
  toast.error("Enter a valid age");
  return;
}

if (!formData.height_cm || Number(formData.height_cm) <= 0) {
  toast.error("Enter a valid height");
  return;
}
  try {
    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      age: Number(formData.age),
      gender: formData.gender,
      height_cm: Number(formData.height_cm),
      health_goal: formData.health_goal,
    };

    const response = await registerUser(data);

    toast.success(response.message);

    navigate("/");
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Registration failed"
    );
  }
};
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Left Section */}
      <div className="hidden w-1/2 flex-col items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-700 p-10 lg:flex">
        <img
          src={hero}
          alt="Health Illustration"
          className="w-3/5 max-w-sm"
        />

        <h1 className="mt-8 text-5xl font-bold text-white">
          Join HealthLens
        </h1>

        <p className="mt-6 max-w-md text-center text-lg text-blue-100">
          Track your health, analyze your progress, and receive AI-powered
          insights for a healthier lifestyle.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex w-full items-center justify-center px-8 py-10 lg:w-1/2">
        <Card className="w-full max-w-2xl">
        <form onSubmit={handleSubmit}>
          <h2 className="mb-2 text-4xl font-bold text-slate-800">
            Create Account
          </h2>

          <p className="mb-8 text-gray-500">
            Start your health journey today.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Input
             label="Full Name"
              name="name"
               placeholder="John Doe"
                value={formData.name}
                 onChange={handleChange}
            />

            <Input
              label="Email"
              name="email"
               type="email"
                placeholder="john@gmail.com"
                value={formData.email}
                 onChange={handleChange}
            />

            <Input
               label="Password"
              name="password"
                 type="password"
              placeholder="********"
             value={formData.password}
            onChange={handleChange}
             />

            <Input
  label="Confirm Password"
  name="confirmPassword"
  type="password"
  placeholder="********"
  value={formData.confirmPassword}
  onChange={handleChange}
/>

            <Input
  label="Age"
  name="age"
  type="number"
  placeholder="22"
  value={formData.age}
  onChange={handleChange}
/>

            <Input
  label="Gender"
  name="gender"
  placeholder="Male / Female"
  value={formData.gender}
  onChange={handleChange}
/>

            <Input
  label="Height (cm)"
  name="height_cm"
  placeholder="170"
  value={formData.height_cm}
  onChange={handleChange}
/>

            <Input
  label="Weight (kg)"
  name="weight"
  placeholder="65"
  value={formData.weight}
  onChange={handleChange}
/>
          </div>

          <div className="mt-2 mb-8">
            <label className="mb-2 block font-semibold">
              Health Goal
            </label>

            <select
  name="health_goal"
  value={formData.health_goal}
  onChange={handleChange}
  className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none focus:border-blue-500"
>
  <option value="Weight Loss">Weight Loss</option>
  <option value="Weight Gain">Weight Gain</option>
  <option value="Maintain Fitness">Maintain Fitness</option>
  <option value="Improve Sleep">Improve Sleep</option>
</select>
          </div>

          <Button type="submit">Create Account</Button>

          <p className="mt-8 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-semibold text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Register;