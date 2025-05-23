"use server"

import { z } from "zod"

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = contactFormSchema.parse(data)

    // Discord webhook URL (this would be an environment variable in production)
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      return { success: false, message: "Discord webhook URL is not configured" }
    }

    // Create Discord embed
    const embed = {
      title: `New Contact Form Submission: ${validatedData.subject}`,
      color: 0x3498db, // Blue color
      fields: [
        {
          name: "Name",
          value: `${validatedData.firstName} ${validatedData.lastName}`,
          inline: true,
        },
        {
          name: "Email",
          value: validatedData.email,
          inline: true,
        },
        {
          name: "Subject",
          value: validatedData.subject,
          inline: false,
        },
        {
          name: "Message",
          value: validatedData.message,
          inline: false,
        },
      ],
      timestamp: new Date().toISOString(),
    }

    // Send to Discord webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    })

    if (!response.ok) {
      return { success: false, message: "Failed to send message to Discord" }
    }

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors.map((err) => `${err.path}: ${err.message}`).join(", ")
      return { success: false, message: errorMessage }
    }
    return { success: false, message: "An unexpected error occurred" }
  }
}
