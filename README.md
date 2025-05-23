# European Airlines Website

This is the official website for European Airlines, a Roblox airline group.

## Features

- **Static HTML Website**: Fast loading and compatible with any hosting platform
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Contact Form**: Integrated with Discord webhook for instant notifications
- **Modern UI**: Clean, professional design using Tailwind CSS
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Pages

- **Home**: Welcome page with airline overview and destinations
- **About**: Company history, fleet information, and mission
- **Careers**: Available positions and application process
- **Contact**: Contact form and social media links

## Deployment

This website is designed to work with **Cloudflare Pages** and requires no build process.

### Cloudflare Pages Setup

1. Connect your GitHub repository to Cloudflare Pages
2. Set build settings:
   - Build command: (leave empty)
   - Build output directory: `/` (root)
3. Add environment variables (optional):
   - `DISCORD_WEBHOOK_URL`: Your Discord webhook URL for contact form

### Discord Webhook Setup

To enable the contact form Discord integration:

1. Create a Discord webhook in your server
2. Replace `YOUR_DISCORD_WEBHOOK_URL_HERE` in `contact.html` with your actual webhook URL
3. Deploy the changes

### Alternative Hosting

This website can be hosted on any static hosting platform:
- GitHub Pages
- Netlify
- Vercel
- Any web server

## Technology Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Font Awesome**: Icons (via CDN)
- **Vanilla JavaScript**: Contact form functionality
- **Discord Webhooks**: Contact form integration

## Contact Information

- **Discord**: https://discord.gg/3jaEpjhk9r
- **Email**: europeanairlines.rblx@gmail.com
- **Roblox Group**: https://www.roblox.com/communities/34748880/European-Airlines-RBLX#!/about

## License

This is a fan-made website for a Roblox airline group.
\`\`\`

Finally, let's create a simple deployment configuration for Cloudflare Pages:

```toml file="wrangler.toml"
name = "european-airlines"
compatibility_date = "2023-08-14"

[site]
bucket = "."
