import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      message,
      service,
      property,
      rooms,
      timeline,
    } = body;

    if (
      !name ||
      !email ||
      !phone
    ) {
      return NextResponse.json(
        {
          error:
            "Missing required fields",
        },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from:
        "Booking Form <onboarding@resend.dev>",

      to: "oluwapelumisotoyinbo@gmail.com",

      subject:
        `New Booking Enquiry - ${name}`,

      replyTo: email,

      html: `
        <h2>New Booking Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <hr />

        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Property:</strong> ${property || "N/A"}</p>
        <p><strong>Rooms:</strong> ${rooms || "N/A"}</p>
        <p><strong>Timeline:</strong> ${timeline || "N/A"}</p>

        <hr />

        <p><strong>Project Details:</strong></p>
        <p>${message || "No message"}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to send email",
      },
      { status: 500 }
    );
  }
}