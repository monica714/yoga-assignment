import UserModel from './../model/userSchema.js';

export const CompletePayment = async (req, res) => {
  const {_id} = req.body;
  try {
    const updateFields = { paid: true }; 
    const newUser = await UserModel.findByIdAndUpdate(_id, updateFields, { new: true });
    return res.json({success : true, newData : newUser});
  } catch (error) {
    return res.status(500).json(error);
  }
};
