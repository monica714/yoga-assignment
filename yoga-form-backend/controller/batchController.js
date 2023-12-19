import UserModel from './../model/userSchema.js';

export const editBatch = async (req, res) => {
  const { batch } = req.body.formData;
  const { paid } = req.body.currentUser;
  const {id} = req.params;
  const updateData = {batch : batch};

  if (!paid) {
    return res.json({ success: false, message: "Pay First" });
  }

  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return res.json({ success: false, message: "User Not Found" });
    }

    const registrationDate = user.createdAt;
    const currentMonth = Date.now();
    const oneMonthLater = new Date(registrationDate);
    oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

    if (currentMonth >= oneMonthLater) {
      const update = await UserModel.findByIdAndUpdate(id,updateData, {new : true});
      return res.json({ success: true, message: "Batch Updated" , newData : update});
    } else {
      return res.json({
        success: false,
        message: "Cannot update batch before one month",
      });
    }
  } catch (error) {
    return res.json(error);
  }
};


export const setBatch = async(req,res) =>{
  const {batch} = req.body.formData;
  const {_id} = req.body.currentUser;
  const updatedVal = {batch : batch}
  try {
    const set = await UserModel.findByIdAndUpdate(_id , updatedVal, {new : true});
    return res.json({success : true, newBatch : set});
  } catch (error) {
    return res.json({success : false, error : error});
  }
}

  