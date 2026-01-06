import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  cityCountry: string;
  leadType: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email, phone, cityCountry, leadType }: ContactFormData = await req.json();

    console.log("Received contact form submission:", { fullName, email, phone, cityCountry, leadType });

    // Map lead type to readable format
    const leadTypeText = {
      buyer: "Buyer Leads",
      seller: "Seller Leads",
      both: "Both Buyer & Seller Leads",
    }[leadType] || leadType;

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // Send email using Resend API directly
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Prime Lead Company <onboarding@resend.dev>",
        to: ["hello@primeleadcompany.com"],
        subject: `New Lead Inquiry from ${fullName}`,
        html: `
          <h1>New Lead Inquiry</h1>
          <p>You have received a new inquiry from your website.</p>
          <hr>
          <h2>Contact Details:</h2>
          <ul>
            <li><strong>Full Name:</strong> ${fullName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>City / Country:</strong> ${cityCountry}</li>
            <li><strong>Looking for:</strong> ${leadTypeText}</li>
          </ul>
          <hr>
          <p><em>This message was sent from the Prime Lead Company website contact form.</em></p>
        `,
      }),
    });

    const result = await emailResponse.json();
    
    if (!emailResponse.ok) {
      console.error("Resend API error:", result);
      throw new Error(result.message || "Failed to send email");
    }

    console.log("Email sent successfully:", result);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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
