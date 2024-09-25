import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Named export for handling POST requests
export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false, // use SSL
    auth: {
      user: "214ba11fe11870",
      pass: "93e8cb662ba9b2",
    },
  });

  const mailOptions = {
    from: email, // Sender's email (from the form data)
    to: process.env.RECEIVER_EMAIL, // Your email to receive the form data
    subject: `New Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
