import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EmailData {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { firstname, lastname, email, message }: EmailData =
      await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    const mailOptions = {
      from: `"${firstname} ${lastname}" <${email}>`,
      to: process.env.EMAIL_USER, // Your email where you want to receive messages
      subject: `Message from ${firstname} ${lastname}`,
      html: `
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${message.replace(/\n/g, "<br>")}
        </div>
        <hr>
        <p><small>Sent from your portfolio contact form</small></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
