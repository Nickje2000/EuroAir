export async function onRequestPost(context) {
  try {
    // Get form data from request
    const formData = await context.request.formData()

    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Basic validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required",
        }),
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        },
      )
    }

    // Get Discord webhook URL from environment variable
    const webhookUrl = context.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Discord webhook URL is not configured",
        }),
        {
          headers: { "Content-Type": "application/json" },
          status: 500,
        },
      )
    }

    // Create Discord embed
    const embed = {
      title: `New Contact Form Submission: ${subject}`,
      color: 0x3498db, // Blue color
      fields: [
        {
          name: "Name",
          value: `${firstName} ${lastName}`,
          inline: true,
        },
        {
          name: "Email",
          value: email,
          inline: true,
        },
        {
          name: "Subject",
          value: subject,
          inline: false,
        },
        {
          name: "Message",
          value: message,
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
      return new Response(
        JSON.stringify({
          success: false,
          message: "Failed to send message to Discord",
        }),
        {
          headers: { "Content-Type": "application/json" },
          status: 500,
        },
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Your message has been sent successfully!",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "An unexpected error occurred",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      },
    )
  }
}
