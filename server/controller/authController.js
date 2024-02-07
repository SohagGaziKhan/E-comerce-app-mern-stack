import { comparePassword, hashPassword } from "../middleware/authMiddleware.js";
import JWT from "jsonwebtoken";
import User from "../model/userMode.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;

    // validation
    if (!name) {
      return res.send({ message: "Name is Required " });
    }
    if (!email) {
      return res.send({ message: "E-mail is Required " });
    }
    if (!password) {
      return res.send({ message: "Password is Required " });
    }
    if (!phone) {
      return res.send({ message: "Phone Number is Required " });
    }
    if (!address) {
      return res.send({ message: "Address is Required " });
    }
    if (!answer) {
      return res.send({ message: "Answer is Required " });
    }

    // check user in database
    const existingUser = await User.findOne({ email });
    // exisiting user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Register Please LogIn",
      });
    }

    // password hashed
    const hashedPassword = await hashPassword(password);

    // register user and hashed password
    const user = await new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      message: "Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Register Controller",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    // check user in database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "E-mail is not Register",
      });
    }

    // compare password in database
    const comparePass = await comparePassword(password, user.password);
    if (!comparePass) {
      return res.status(404).send({
        success: false,
        message: "Invalid Password",
      });
    }

    // if all ok then create token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // if all ok then send response
    res.status(200).send({
      success: true,
      message: "LogIn Successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "Error in LogIn Controller",
      error,
    });
  }
};

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    // validation
    if (!email) {
      res.status(400).send({ message: "E-mail is required" });
    }
    if (!answer) {
      res.status(400).send({ message: "Answer is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "New Password is required" });
    }
    // check user
    const user = await User.findOne({ email, answer });
    // validation user
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email or Answer",
      });
    }
    // hashed new password
    const hashed = await hashPassword(newPassword);
    await User.findOneAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "Something weng wrong",
      error,
    });
  }
};

// update profile controller
// export const updateProfileController = async (req, res) => {
//   try {
//     const { name, email, password, address, phone } = req.body;
//     const users = await User.findById(req.user._id);
//     //password
//     if (password && password.length < 6) {
//       return res.json({ error: "Passsword is required and 6 character long" });
//     }
//     const hashedPassword = password ? await hashPassword(password) : undefined;
//     const updatedUser = await User.findByIdAndUpdate(
//       req.user._id,
//       {
//         name: name || users.name,
//         password: hashedPassword || users.password,
//         phone: phone || users.phone,
//         address: address || users.address,
//       },
//       { new: true }
//     );
//     res.status(200).send({
//       success: true,
//       message: "Profile Updated SUccessfully",
//       updatedUser,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Error in Update Profile",
//       error,
//     });
//   }
// };

// user account update
export const updateProfileController = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const { name, email, password, address, phone } = req.body;
    const hashedPassword = password ? await hashPassword(password) : undefined;

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        name: name || req.user.name,
        password: hashedPassword || req.user.password,
        phone: phone || req.user.phone,
        address: address || req.user.address,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in Update Profile",
      error: error.message,
    });
  }
};
// admin account update
export const updateAdminProfileController = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const { name, email, password, address, phone } = req.body;
    const hashedPassword = password ? await hashPassword(password) : undefined;

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        name: name || req.user.name,
        password: hashedPassword || req.user.password,
        phone: phone || req.user.phone,
        address: address || req.user.address,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in Update Profile",
      error: error.message,
    });
  }
};
