import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const data = await req.json();

    const {
      fullName, companyName, country, email, whatsapp,
      enquiryType, productInterest, partsNeeded, howHeard,
    } = data;

    await resend.emails.send({
      from: "CrestMAX Website <website@crestmax.in>",
      to: "info@crestmax.in",
      bcc: "sparsh.rps@gmail.com",
      replyTo: email,
      subject: `New Export Enquiry — ${companyName} (${country})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C9A84C; border-bottom: 2px solid #C9A84C; padding-bottom: 8px;">New Export Enquiry</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 180px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Company</td><td style="padding: 8px 0; font-weight: bold;">${companyName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Country</td><td style="padding: 8px 0;">${country}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">WhatsApp</td><td style="padding: 8px 0;">${whatsapp || "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Enquiry Type</td><td style="padding: 8px 0;">${enquiryType}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Product Interest</td><td style="padding: 8px 0;">${Array.isArray(productInterest) ? productInterest.join(", ") : productInterest}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">How Heard</td><td style="padding: 8px 0;">${howHeard || "Not specified"}</td></tr>
          </table>

          ${partsNeeded ? `<h3 style="color: #333; margin-top: 20px;">Parts Needed</h3><p style="background: #f5f5f5; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${partsNeeded}</p>` : ""}

          <hr style="margin-top: 32px; border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">Sent from crestmax.in contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry email error:", error);
    return NextResponse.json({ error: "Failed to send enquiry" }, { status: 500 });
  }
}
