// Simple build preparation script
console.log("Preparing build for Cloudflare Pages...")

// Check if we're in a Node.js environment
if (typeof process !== "undefined" && process.env) {
  console.log("Node.js environment detected")

  // Log environment variables (without exposing sensitive data)
  if (process.env.DISCORD_WEBHOOK_URL) {
    console.log("Discord webhook URL is configured")
  } else {
    console.log("Warning: DISCORD_WEBHOOK_URL environment variable not set")
  }
} else {
  console.log("Running in browser environment")
}

console.log("Build preparation complete.")
