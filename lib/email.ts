import { Resend } from "resend"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Professional thank you email template for the sender
export const getThankYouEmailTemplate = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Me</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f7;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 8px; overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">Thank You for Reaching Out!</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Hi <strong>${name}</strong>,
              </p>
              
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Thank you for getting in touch! I've received your message and appreciate you taking the time to reach out.
              </p>
              
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                I review all messages personally and will get back to you as soon as possible, typically within 24-48 hours.
              </p>
              
              <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 30px 0; border-radius: 4px;">
                <p style="margin: 0; color: #555555; font-size: 14px; line-height: 1.6;">
                  <strong>💡 In the meantime:</strong><br>
                  Feel free to check out my projects on <a href="https://github.com/anubhavbora" style="color: #667eea; text-decoration: none;">GitHub</a> or connect with me on <a href="https://linkedin.com/in/anubhav-bora" style="color: #667eea; text-decoration: none;">LinkedIn</a>.
                </p>
              </div>
              
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Looking forward to connecting with you!
              </p>
              
              <p style="margin: 30px 0 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #667eea;">Anubhav Bora</strong><br>
                <span style="color: #666666; font-size: 14px;">Full Stack Developer | Problem Solver</span>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0 0 15px; color: #666666; font-size: 14px;">
                Connect with me:
              </p>
              <table role="presentation" style="margin: 0 auto; border-collapse: collapse;">
                <tr>
                  <td style="padding: 0 10px;">
                    <a href="https://github.com/anubhavbora" style="color: #667eea; text-decoration: none; font-size: 14px;">GitHub</a>
                  </td>
                  <td style="padding: 0 10px;">
                    <a href="https://linkedin.com/in/anubhav-bora" style="color: #667eea; text-decoration: none; font-size: 14px;">LinkedIn</a>
                  </td>
                  <td style="padding: 0 10px;">
                    <a href="https://leetcode.com/anubhavbora" style="color: #667eea; text-decoration: none; font-size: 14px;">LeetCode</a>
                  </td>
                  <td style="padding: 0 10px;">
                    <a href="https://x.com/anubhavbora" style="color: #667eea; text-decoration: none; font-size: 14px;">Twitter</a>
                  </td>
                </tr>
              </table>
              <p style="margin: 20px 0 0; color: #999999; font-size: 12px;">
                © ${new Date().getFullYear()} Anubhav Bora. All rights reserved.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

// Email template for you with the sender's details
export const getNotificationEmailTemplate = (name: string, email: string, subject: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f7;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 8px; overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">🎉 New Contact Form Submission</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 30px; color: #333333; font-size: 16px; line-height: 1.6;">
                You have received a new message through your portfolio contact form.
              </p>
              
              <!-- Sender Details -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-radius: 4px;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; color: #666666; font-size: 14px; font-weight: 600; width: 100px;">Name:</td>
                        <td style="padding: 8px 0; color: #333333; font-size: 16px; font-weight: 500;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #666666; font-size: 14px; font-weight: 600;">Email:</td>
                        <td style="padding: 8px 0;">
                          <a href="mailto:${email}" style="color: #10b981; text-decoration: none; font-size: 16px;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #666666; font-size: 14px; font-weight: 600;">Subject:</td>
                        <td style="padding: 8px 0; color: #333333; font-size: 16px; font-weight: 500;">${subject}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <div style="margin-bottom: 30px;">
                <h3 style="margin: 0 0 15px; color: #333333; font-size: 18px; font-weight: 600;">Message:</h3>
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 4px; border-left: 4px solid #10b981;">
                  <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <!-- Action Button -->
              <table role="presentation" style="margin: 30px 0; border-collapse: collapse;">
                <tr>
                  <td style="border-radius: 6px; background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                    <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" 
                       style="display: inline-block; padding: 14px 30px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; border-radius: 6px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 30px 0 0; color: #666666; font-size: 14px; line-height: 1.6;">
                <strong>Note:</strong> This is an automated notification from your portfolio contact form.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; color: #999999; font-size: 12px;">
                Sent from your Portfolio Website • ${new Date().toLocaleString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true
                })}
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

// Function to send thank you email to the sender
export async function sendThankYouEmail(name: string, email: string) {
  await resend.emails.send({
    from: "Anubhav Bora <onboarding@resend.dev>", // Use your verified domain later
    to: email,
    subject: "Thank you for reaching out! 🚀",
    html: getThankYouEmailTemplate(name),
  })
}

// Function to send notification email to you
export async function sendNotificationEmail(name: string, email: string, subject: string, message: string) {
  await resend.emails.send({
    from: "Portfolio Contact Form <onboarding@resend.dev>", // Use your verified domain later
    to: "anubhavbora40@gmail.com",
    replyTo: email,
    subject: `New Contact Form: ${subject}`,
    html: getNotificationEmailTemplate(name, email, subject, message),
  })
}
