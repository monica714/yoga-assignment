import React from "react";
import loginImg from "../assets/loginPage.png";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import { useDispatch } from 'react-redux';
import { userData } from "../redux/UserSlice";

const LoginForm2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValue, setformValue] = useState({ 
    email : "",
    password : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValue({ ...formValue, [name]: value });
  };

  const [message,setMessage] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/loginUser",formValue,{
      headers : {
        "Content-Type" : "application/json"
      }
    });
    dispatch(userData(res.data.user));
    if(res.data.message === "Login Successful"){
      navigate("/check-event")
    }
    setMessage(res.data.message);
  }
  return (
    <div>
      <div className="relative w-full h-screen bg-zinc-900/90">
        <img
          className="absolute w-fit h-screen  object-cover mix-blend-overlay"
          src={loginImg}
          alt="/"
        />

        <div className="flex justify-start items-center h-full  ">
          <form className="max-w-[400px] w-full mx-auto bg-white p-8 rounded flex flex-col" onSubmit={handleSubmit}>
            <h2 className="text-4xl font-bold text-center py-4">YOGI.</h2>
            <div className="flex justify-between py-8">
              <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center hover:bg-slate-100">
                <AiFillFacebook className="mr-2" /> Facebook
              </p>
              <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center hover:bg-slate-100">
                <FcGoogle className="mr-2" /> Google
              </p>
            </div>
            <div className="flex flex-col mb-4">
              <label>Email</label>
              <input
                className="border relative bg-gray-100 p-2"
                required
                type="text"
                name="email"
                value={formValue.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col ">
              <label>Password</label>
              <input
                className="border relative bg-gray-100 p-2"
                type="password"
                name="password"
                value={formValue.password}
                onChange={handleChange}
                required
              />
            </div>
            {message && <p className="text-red-700">{message}</p>}
            <button className="flex items-center justify-center  py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white rounded-lg p-3">
              Sign In
            </button>
            <div className="flex mt-3">
              <Link
                to="/register"
                className="text-center text-blue-700 cursor-pointer"
              >
                Not a member? Sign up now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm2;
