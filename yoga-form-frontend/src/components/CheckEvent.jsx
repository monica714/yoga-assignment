import React, { useState } from "react";
import event from "../assets/eventPage.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { userData } from "../redux/UserSlice";

function YogaRegistrationForm() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    batch: "6-7AM",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.put(
        "http://localhost:3000/setBatch",
        { formData, currentUser },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.success) {
        dispatch(userData(res.data.newBatch));
        navigate(`/billing-form/${currentUser._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center py-4">
        Yoga Classes Registration
      </h2>
      <form className="max-w-[400px] w-full mx-auto bg-white p-8 rounded">
        {/* Name input */}
        <img
          src={event}
          className="absolute  w-fit h-screen object-cover mix-blend-overlay"
          alt="/"
        />
        {/* Batch selection */}
        {currentUser.paid ? (
          <h1 className=" text-2xl text-center font-medium text-green-600 tracking-wider">{`Your Current Batch ${currentUser.batch}`}</h1>
        ) : (
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
        )}
        {currentUser.paid ? (
          " "
        ) : (
          <Link
            className="flex text-center items-center justify-center w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white rounded-md"
            onClick={handleSubmit}
          >
            Proceed To pay
          </Link>
        )}
        <Link
          className="flex text-center items-center justify-center  py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white rounded-md"
          to={`/edit-batch/${currentUser._id}`}
        >
          Edit Batch
        </Link>
      </form>
    </div>
  );
}

export default YogaRegistrationForm;
