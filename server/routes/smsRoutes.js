import express from 'express';
import { sendSMS } from '../utils/sendSMS.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { to, body } = req.body;
  try {
    await sendSMS(to, body);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;

// routes/smsRoutes.js (or controller)
// import express from 'express';
// const router = express.Router();

// router.post('/', (req, res) => {
//   const { to, body } = req.body;

//   console.log(`📨 Simulated SMS to ${to}: ${body}`);

//   return res.status(200).json({
//     success: true,
//     message: `Simulated SMS to ${to}`,
//   });
// });

// export default router;
