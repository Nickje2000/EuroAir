# European Airlines Website

This is the official website for European Airlines, a Roblox airline group.

## Development

To run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to Cloudflare Pages

### Prerequisites

1. A Cloudflare account
2. A Discord webhook URL for the contact form

### Steps

1. Connect your GitHub repository to Cloudflare Pages
2. Set the following build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Node.js version: 18 (or later)
3. Add the environment variable:
   - `DISCORD_WEBHOOK_URL`: Your Discord webhook URL
4. Deploy!

### Environment Variables

The following environment variables are required:

- `DISCORD_WEBHOOK_URL`: The Discord webhook URL for the contact form

## Features

- Home page with airline information
- About page with airline history and fleet information
- Careers page with job listings
- Contact form that sends messages to Discord
- Responsive design for all devices
