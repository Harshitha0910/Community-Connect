// C:\Users\harsh\Desktop\Community-Connect\server\routes\userRoutes.js 

import express from 'express';
import { registerUser, loginUser, updateProfile, allUsers } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/profile', protect, updateProfile); 
router.route("/").get(protect, allUsers);

export default router;
 
