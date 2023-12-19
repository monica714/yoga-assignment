import React from "react";
import { useState } from "react";
import event from "../assets/eventPage.png";
import axios from "axios";
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {userData} from "../redux/UserSlice"

function EditBatch() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state) => state.user);
  const [message,setMessage] = useState("");
  const [formData, setFormData] = useState({
    batch: "6-7AM",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
     e.preventDefault();
     try {
       const res = await axios.put(`http://localhost:3000/editBatch/${currentUser._id}`,{formData,currentUser},{
        headers : {
          "Content-Type" : "application/json"
        }
       });
       if(res.data.success === true){
        dispatch(userData(res.data.newData));
        navigate("/check-event");
       }
       setMessage(res.data.message);
     } catch (error) {
       console.log(error);
     }
  }
  return (
    <div>
      <h2 className="text-4xl font-bold text-center py-4">Edit Batch</h2>
      <form className="max-w-[400px] w-full mx-auto bg-white p-8 rounded" onSubmit={handleSubmit}>
        {/* Name input */}
        <img
          src={event}
          className="absolute  w-fit h-screen object-cover mix-blend-overlay"
          alt="/"
        />
        {/* Batch selection */}
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
        {message && <p className="text-red-700">{message}</p>}
        <button className="flex text-center items-center justify-center w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white rounded-md">
          Update Batch
        </button>
      </form>
    </div>
  );
}

export default EditBatch;
