import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Simulate sending email processing delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Here you would integrate with an email service like Resend, SendGrid, etc.
        console.log("Contact Form Submission:", { name, email, message });

        return NextResponse.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
