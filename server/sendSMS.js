// import { Twilio } from 'twilio';
// import dotenv from 'dotenv';
// dotenv.config();
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// const sendSMS= async (body) =>{
//     let msgOptions={
//         from: process.env.TWILIO_PHONE_NUMBER,
//         to: process.env.TO_PHONE_NUMBER,
//         body: body
//     };
//     try{
//         const message = await client.messages.create(msgOptions);
//         console.log(message);
//     }
//     catch(err){
//         console.error('Error sending SMS:', err);
//     }
// }

// sendSMS("I need you service at my home.")