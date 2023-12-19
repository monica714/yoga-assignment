import UserModel from '../model/userSchema.js';

export const registerForm = async (req, res) => {
  const { username, email, password, confirmPassword, age, batch } = req.body;
  const user = await UserModel.findOne({ email });
  if (password !== confirmPassword) {
    return res.json({ message: "Password Not Matched" });
  }
  if (user) {
    return res.json({ message: "User Already Exists" });
  }
  try {
    const newUser = new UserModel({
      username, email, password, age, batch
    })

    await newUser.save();
    res.json({ message: "User Registered Successfully", user: newUser });

  } catch (error) {
    // res.json({ message: "Something Wrong", error: error });
    return res.json(error)
  }
}


export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validUser = await UserModel.findOne({ email });
    if (!validUser) {
      return res.json({ message: "User Not Found" })
    }

    if (validUser.password !== password) {
      return res.json({ message: "Wrong Credentials" });
    }
    const { password: pass, ...rest } = validUser._doc;
    res.json({ message: "Login Successful", user: rest });
  } catch (error) {
    return res.json({ message: error });
  }
}

