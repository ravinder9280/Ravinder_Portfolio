import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, msg } = body;

    if (!name || !email || !subject || !msg) {
      return NextResponse.json(
        { message: "All fields (name, email, subject, message) are required", success: false },
        { status: 400 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Authenticated email with sender's name
      to: process.env.EMAIL_USER, // Send to yourself or another recipient
      replyTo: email, // Set the sender's email for replies
      subject: `Portfolio Contact: ${subject}`, // Include the subject from the client
      text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${msg}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully", success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send message", success: false }, { status: 500 });
  }
}