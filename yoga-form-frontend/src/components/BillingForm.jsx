// BillingForm.jsx
// BillingForm.jsx
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userData } from "../redux/UserSlice";

function BillingForm() {
  const {currentUser} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'creditCard', // Default payment method
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http://localhost:3000/payment",currentUser,{
      headers : {
        "Content-Type" : "application/json"
      }
    })
    if(res.data.success === true){
      dispatch(userData(res.data.newData));
      navigate('/payment-success'); 
    }
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center py-4">Billing Information</h2>
      <form className="max-w-[400px] w-full mx-auto bg-white p-8 rounded" onSubmit={handleSubmit}>
        {/* Billing form fields */}
        <div className="flex flex-col mb-4">
          <label>Card Number</label>
          <input
            className="border relative bg-gray-100 p-2"
            type="text"
            name="cardNumber"
            minLength={12}
            maxLength={12}
            value={formData.cardNumber}
            onChange={handleInputChange}
            required = {true}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>Expiry Date</label>
          <input
            className="border relative bg-gray-100 p-2"
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            required = {true}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>CVV</label>
          <input
            className="border relative bg-gray-100 p-2"
            type="passwprd"
            name="cvv"
            minLength={3}
            maxLength={3}
            value={formData.cvv}
            required = {true}
            onChange={handleInputChange}
          />
        </div>
        {/* Payment method */}
        <div className="flex flex-col mb-4">
          <label>Payment Method</label>
          <select
            className="border relative bg-gray-100 p-2"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            {/* Add more payment options if needed */}
          </select>
        </div>

        <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white" type="submit">
          Pay ₹500
        </button>
      </form>
    </div>
  );
}

export default BillingForm;
