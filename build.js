const fs = require("fs")
const path = require("path")

// Create a simple build script to ensure compatibility
console.log("Preparing build for Cloudflare Pages...")

// Ensure the Discord webhook URL is properly set
const contactPagePath = path.join(__dirname, "app", "contact", "page.tsx")
if (fs.existsSync(contactPagePath)) {
  let content = fs.readFileSync(contactPagePath, "utf8")

  // Replace the placeholder with the actual webhook URL from environment
  if (process.env.DISCORD_WEBHOOK_URL) {
    content = content.replace(
      "https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN",
      process.env.DISCORD_WEBHOOK_URL,
    )
    fs.writeFileSync(contactPagePath, content)
    console.log("Discord webhook URL updated in contact page.")
  } else {
    console.warn("Warning: DISCORD_WEBHOOK_URL environment variable not set.")
  }
}

console.log("Build preparation complete.")
