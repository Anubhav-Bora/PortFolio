import { type NextRequest, NextResponse } from "next/server"
import { sendThankYouEmail, sendNotificationEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 },
      )
    }

    console.log("[Contact Form] New submission:", { name, email, subject })

    // Send thank you email to the sender
    await sendThankYouEmail(name, email)
    
    // Send notification email to you with sender's details
    await sendNotificationEmail(name, email, subject, message)

    console.log("[Contact Form] Emails sent successfully")

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! Check your email for confirmation.",
    })
  } catch (error) {
    console.error("[Contact Form] Error:", error)
    
    // Provide more specific error message
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
    
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try emailing me directly at anubhavbora40@gmail.com",
        error: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 },
    )
  }
}
