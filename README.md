# European Airlines Website

This is the official website for European Airlines, a Roblox airline group.

## Development

To run the development server:

\`\`\`bash
pnpm install
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to Cloudflare Pages

### Prerequisites

1. A Cloudflare account
2. A Discord webhook URL for the contact form (optional)

### Steps

1. Connect your GitHub repository to Cloudflare Pages
2. Set the following build settings:
   - Build command: \`pnpm run build\`
   - Build output directory: \`out\`
   - Node.js version: 18.17.1
3. Add environment variables (optional):
   - \`DISCORD_WEBHOOK_URL\`: Your Discord webhook URL
4. Deploy!

### Environment Variables

The following environment variables are optional:

- \`DISCORD_WEBHOOK_URL\`: The Discord webhook URL for the contact form

## Features

- Home page with airline information
- About page with airline history and fleet information
- Careers page with job listings
- Contact form (with optional Discord integration)
- Responsive design for all devices
- Static site generation for fast loading

## Technology Stack

- Next.js 13.4.19 (App Router)
- React 18.2.0
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Cloudflare Pages hosting
\`\`\`

Let's also create a simple _redirects file for Cloudflare Pages:

```plaintext file="public/_redirects"
/*    /index.html   200
