// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { sendMail } from '@/lib/mailer';

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    const content = `
      <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    await sendMail(
      process.env.CONTACT_EMAIL!,
      "New Contact Form Submission",
      content
    );

    return NextResponse.json({ message: "Email sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
  }
}