import React, { useState } from "react";
import RegisterImg from "../assets/registerPage.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    age: 18,
    batch : "7-8AM"
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/submitUser",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.message === "User Registered Successfully") {
        navigate("/login");
      }
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error);
    }
  };
  return (
    <div>
      <div className="relative w-full h-screen bg-zinc-900/90">
        <img
          src={RegisterImg}
          className="absolute w-fit h-screen  object-cover mix-blend-overlay"
          alt="/"
        />

        <div className="flex justify-start items-center h-full">
          <form
            className="max-w-[400px] w-full mx-auto bg-white p-8 rounded flex flex-col"
            onSubmit={handleSubmit}
          >
            <h2 className="text-4xl font-bold text-center py-4">YOGI.</h2>
            <div className="flex justify-between py-8"></div>
            {/* Name input */}
            <div className="flex flex-col mb-4">
              <label>Name</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Email input */}
            <div className="flex flex-col mb-4">
              <label>Email</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Password</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Confirm Password</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Age input with validation */}
            <div className="flex flex-col mb-4">
              <label>Age</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Batch</label>
              <select
                className="border relative bg-gray-100 p-2"
                name="batch"
                value={formData.batch}
                onChange={handleInputChange}
              >
                <option value="6-7AM">6-7AM</option>
                <option value="7-8AM">7-8AM</option>
                <option value="8-9AM">8-9AM</option>
                <option value="5-6PM">5-6PM</option>
              </select>
            </div>
            {message && <p className="text-red-600">{message}</p>}
            <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white">
              Register
            </button>
            <Link
              to={"/login"}
              className="text-center cursor-pointer text-blue-600 mt-3"
            >
              Already a member? Sign in now
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
