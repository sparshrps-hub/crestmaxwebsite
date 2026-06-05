import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "RESEND_API_KEY is not set in environment" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await req.json();

    const {
      fullName, companyName, country, email, whatsapp,
      businessType, marketsOperated, monthlyVolume, brandsStocked, message,
    } = data;

    const { error } = await resend.emails.send({
      from: "CrestMAX Website <website@crestmax.in>",
      to: "info@crestmax.in",
      bcc: "sparsh.rps@gmail.com",
      replyTo: email,
      subject: `Trade Partner Application — ${companyName} (${country})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C9A84C; border-bottom: 2px solid #C9A84C; padding-bottom: 8px;">New Trade Partner Application</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 180px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Company</td><td style="padding: 8px 0; font-weight: bold;">${companyName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Country</td><td style="padding: 8px 0;">${country}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">WhatsApp</td><td style="padding: 8px 0;">${whatsapp}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Business Type</td><td style="padding: 8px 0;">${businessType}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Markets Operated</td><td style="padding: 8px 0;">${marketsOperated}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Monthly Volume</td><td style="padding: 8px 0;">${monthlyVolume || "Not specified"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Brands Stocked</td><td style="padding: 8px 0;">${brandsStocked || "Not specified"}</td></tr>
          </table>
          ${message ? `<h3 style="color: #333; margin-top: 20px;">About Their Business</h3><p style="background: #f5f5f5; padding: 12px; border-radius: 4px; white-space: pre-wrap;">${message}</p>` : ""}
          <hr style="margin-top: 32px; border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">Sent from crestmax.in/trade-partner</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    console.error("Trade partner route error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
