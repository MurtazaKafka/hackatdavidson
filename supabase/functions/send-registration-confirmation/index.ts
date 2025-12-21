import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RegistrationEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email }: RegistrationEmailRequest = await req.json();
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    console.log("Sending registration confirmation to:", email);

    const emailHtml = `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #69612C 0%, #69612C 100%);
        color: white;
        padding: 30px;
        text-align: center;
        border-radius: 10px 10px 0 0;
      }
      .content {
        background: #ffffff;
        padding: 30px;
        border: 1px solid #e5e5e5;
        border-top: none;
      }
      .footer {
        background: #f8f8f8;
        padding: 20px;
        text-align: center;
        border: 1px solid #e5e5e5;
        border-top: none;
        border-radius: 0 0 10px 10px;
        font-size: 14px;
        color: #666;
      }
      .button {
        display: inline-block;
        padding: 12px 24px;
        background: #F9C74F;
        color: #333;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
        margin: 10px 0;
      }
      .details {
        background: #f8f8f8;
        padding: 15px;
        border-radius: 6px;
        margin: 20px 0;
      }
      h1 {
        margin: 0;
        font-size: 28px;
      }
      h2 {
        color: #69612C;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>🎉 Welcome to Hack@Davidson!</h1>
    </div>
    <div class="content">
      <p>Hi ${firstName},</p>
      
      <p>Thank you for registering for <strong>Hack@Davidson 2026</strong>! We're thrilled to have you join us for 48 hours of innovation, collaboration, and creativity.</p>
      
      <div class="details">
        <h2>Event Details</h2>
        <p><strong>📅 When:</strong> February 20-22, 2026</p>
        <p><strong>📍 Where:</strong> Davidson College, NC</p>
        <p><strong>⏰ Duration:</strong> 48 hours</p>
      </div>
      
      <h2>Next Steps</h2>
      <ol>
        <li><strong>Join our Discord:</strong> Connect with other hackers and stay updated at <a href="https://discord.gg/DsxPGRqFuS" style="color: #69612C;">https://discord.gg/DsxPGRqFuS</a></li>
        <li><strong>Mark your calendar:</strong> Save the dates February 20-22, 2026</li>
        <li><strong>Prepare:</strong> Start thinking about project ideas and potential teammates</li>
        <li><strong>Check your email:</strong> We'll send you more details as the event approaches</li>
      </ol>
      
      <h2>What to Bring</h2>
      <ul>
        <li>💻 Laptop and charger</li>
        <li>🎒 Any hardware you want to hack with</li>
        <li>😴 Sleeping bag (venue is open 24/7)</li>
        <li>🧠 Your creativity and enthusiasm!</li>
      </ul>
      
      <p>We'll provide:</p>
      <ul>
        <li>🍕 All meals and snacks</li>
        <li>👕 Awesome swag</li>
        <li>🏆 Amazing prizes</li>
        <li>💡 Workshops and mentorship</li>
      </ul>
      
      <p style="text-align: center; margin: 30px 0;">
        <a href="https://hackatdavidson.devpost.com/" class="button">Visit Devpost</a>
      </p>
      
      <p>Have questions? Reach out to us at <a href="mailto:hack@davidson.edu" style="color: #69612C;">hack@davidson.edu</a></p>
      
      <p>See you in February!</p>
      <p><strong>The Hack@Davidson Team</strong></p>
    </div>
    <div class="footer">
      <p>© 2025 Hack@Davidson. All rights reserved.</p>
      <p>Davidson College, North Carolina</p>
    </div>
  </body>
</html>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Hack@Davidson <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to Hack@Davidson 2026! 🎉",
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error("Resend API error:", errorData);
      throw new Error(`Resend API error: ${JSON.stringify(errorData)}`);
    }

    const emailResult = await resendResponse.json();
    console.log("Email sent successfully:", emailResult);

    return new Response(JSON.stringify(emailResult), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-registration-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
