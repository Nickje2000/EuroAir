export default {
  async fetch(request, env, ctx) {
    // This is required for Cloudflare Pages to properly handle API routes
    const url = new URL(request.url)

    // Handle API routes
    if (url.pathname.startsWith("/api/")) {
      // Forward to the appropriate function
      return env.ASSETS.fetch(request)
    }

    // For all other routes, serve the static assets
    return env.ASSETS.fetch(request)
  },
}
