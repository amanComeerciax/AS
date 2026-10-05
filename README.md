# Wedding Invitation Website

A stunning, production-ready wedding invitation website built with Next.js 15, Tailwind CSS v4, GSAP + ScrollTrigger, and Lenis smooth scrolling.

## Getting Started

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Customize

### 1. Edit the Content
All text content, dates, and settings are managed in one central config file.
Open `data/wedding.ts` and replace the placeholder text with your real details. This includes:
- Couple names and bios
- Wedding date (used for the countdown timer)
- Event details (time, venue, map links, dress code)
- Love story timeline milestones
- RSVP WhatsApp number
- Image and music paths

### 2. Replace Images & Music
All media assets live in the `public/` directory.

**Images (`public/images/`):**
Replace the placeholder images with your actual photos. Ensure the filenames match those listed in `data/wedding.ts` or update the paths in the config file.
- `hero-bg.jpg` - Background for the first section
- `bride.jpg` - Bride's portrait
- `groom.jpg` - Groom's portrait
- `gallery-1.jpg` to `gallery-6.jpg` - Photos for the gallery section

**Music (`public/audio/`):**
Replace `public/audio/background-music.mp3` with your desired background track. The music will play automatically after the user clicks the "Tap to Open" envelope.

### 3. Change Colors & Fonts
To change the color scheme or fonts, edit the variables defined in `app/globals.css` and `app/layout.tsx`.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Sign up/Log in to Vercel and create a new project.
3. Import your GitHub repository.
4. Leave all settings as default and click "Deploy".
5. Your stunning wedding website will be live in minutes!
