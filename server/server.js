// // server.js
// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import Twilio  from 'twilio';

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// app.post('/send-sms', async (req, res) => {
//     try {
//         const message = await client.messages.create({
//             body: "Your service is requested",
//             from: process.env.TWILIO_PHONE_NUMBER,
//             to: process.env.TO_PHONE_NUMBER // This is hardcoded for now
//         });

//         console.log('Message sent:', message.sid);
//         res.status(200).json({ success: true });
//     } catch (error) {
//         console.error("SMS Error:", error);
//         res.status(500).json({ success: false, error: error.message });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
// import chatRoutes from './routes/chatRoutes.js';
import smsRoutes from './routes/smsRoutes.js';
import complaintRoutes from "./routes/complaintRoutes.js";

const app = express();
dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
// app.use('/api/chats', chatRoutes);
app.use('/api/sms', smsRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/uploads", express.static("uploads"));  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`)); 