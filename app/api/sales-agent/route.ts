import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const data = await req.json();

    const {
      fullName, country, email, whatsapp,
      currentRole, marketsYouCover, clientBase, experience, whyRepresent,
    } = data;

    await resend.emails.send({
      from: "CrestMAX Website <onboarding@resend.dev>",
      to: "info@crestmax.in",
      replyTo: email,
      subject: `Sales Agent Application — ${fullName} (${country})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C9A84C; border-bottom: 2px solid #C9A84C; padding-bottom: 8px;">New Sales Agent Application</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 180px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Country</td><td style="padding: 8px 0;">${country}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">WhatsApp</td><td style="padding: 8px 0;">${whatsapp}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Current Role</td><td style="padding: 8px 0;">${currentRole}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Markets Covered</td><td style="padding: 8px 0;">${marketsYouCover}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Experience</td><td style="padding: 8px 0;">${experience || "Not specified"}</td></tr>
          </table>

          ${clientBase ? `<h3 style="color: #333; margin-top: 20px;">Client / Buyer Network</h3><p style="background: #f5f5f5; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${clientBase}</p>` : ""}
          ${whyRepresent ? `<h3 style="color: #333; margin-top: 20px;">Why They Want to Represent CrestMAX</h3><p style="background: #f5f5f5; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${whyRepresent}</p>` : ""}

          <hr style="margin-top: 32px; border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">Sent from crestmax.in/sales-agent</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Sales agent email error:", error);
    return NextResponse.json({ error: "Failed to send application" }, { status: 500 });
  }
}
