// C:\Users\harsh\Desktop\Community-Connect\server\controllers\userController.js 

// import User from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// export const registerUser = async (req, res) => {
//   const { name, email, password, role } = req.body;
//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) return res.status(400).json({ message: 'User already exists' });

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const user = await User.create({ name, email, password: hashedPassword, role });
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

//     res.status(201).json({ token, user });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
//     res.json({ token, user });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const updateProfile = async (req, res) => {
//   const { id } = req.user;
//   const { block, flatNo, mobile, gender, pic } = req.body;
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       id,
//       { block, flatNo, mobile, gender, pic, profileComplete: true },
//       { new: true }
//     );
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// }; 

// export const allUsers = async (req, res) => {
//   try {
//     const users = await User.find({
//       _id: { $ne: req.user._id },
//       role: "resident", // Only residents
//       profileComplete: true, // Only those who finished profile
//     }).select("-password");

//     res.status(200).json(users);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };


// // export const allUsers = async (req, res) => {
// //   const keyword = req.query.search
// //     ? {
// //         $or: [
// //           { name: { $regex: req.query.search, $options: "i" } },
// //           { email: { $regex: req.query.search, $options: "i" } },
// //         ],
// //       }
// //     : {};

// //   try {
// //     const users = await User.find({
// //       ...keyword,
// //       _id: { $ne: req.user._id },
// //     });
// //     res.status(200).json(users);
// //   } catch (err) {
// //     res.status(400).json({ message: err.message });
// //   }
// // };
 



// C:\Users\harsh\Desktop\Community-Connect\server\controllers\userController.js

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hashedPassword, role });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.status(201).json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProfile = async (req, res) => {
  const { id } = req.user;
  const { block, flatNo, mobile, gender, pic } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { block, flatNo, mobile, gender, pic, profileComplete: true },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// export const allUsers = async (req, res) => {
//   try {
//     const users = await User.find({
//       _id: { $ne: req.user._id },
//       role: "resident",
//       profileComplete: true,
//     }).select("-password");

//     res.status(200).json(users);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

export const allUsers = async (req, res) => {
  try {
    let filter = { profileComplete: true };

    // If resident, show only other residents
    if (req.user.role === "resident") {
      filter.role = "resident";
      filter._id = { $ne: req.user._id };  // exclude self
    }

    // If admin, show all residents (no _id filter)
    if (req.user.role === "admin") {
      filter.role = "resident";
      // No _id filter for admin, admin can see all residents
    }

    const users = await User.find(filter).select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
