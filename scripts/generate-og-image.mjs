// Generates the social-share (Open Graph) card at public/images/og-cover.jpg.
// 1200x630 — clean navy brand card with the gold beacon glow + tagline.
// No identifiable location (keeps the operating market quiet).
// Run with: node scripts/generate-og-image.mjs
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const W = 1200
const H = 630

const card = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="glow" cx="0.13" cy="0.2" r="0.6">
      <stop offset="0" stop-color="#c9a84c" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#0d1b2a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#0d1b2a"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <text x="82" y="262" font-family="Helvetica, Arial, sans-serif" font-size="22"
        font-weight="bold" letter-spacing="5" fill="#e8c068">REAL ESTATE LENDING &amp; RENTAL INVESTMENTS</text>

  <text x="80" y="360" font-family="Helvetica, Arial, sans-serif" font-size="80"
        font-weight="bold" fill="#ffffff" letter-spacing="-1">Your beacon in the</text>
  <text x="80" y="452" font-family="Helvetica, Arial, sans-serif" font-size="80"
        font-weight="bold" letter-spacing="-1"><tspan fill="#e8c068">investment</tspan><tspan fill="#ffffff" dx="26">world.</tspan></text>

  <text x="82" y="556" font-family="Helvetica, Arial, sans-serif" font-size="26"
        letter-spacing="1" fill="#9fb3c8">luminousinvestmentsolutions.com</text>
</svg>`)

const logo = await sharp(path.join(root, 'public/images/logo-mark-gold.png'))
  .resize(76, 76)
  .toBuffer()

await sharp(card)
  .composite([{ input: logo, top: 64, left: 80 }])
  .jpeg({ quality: 88 })
  .toFile(path.join(root, 'public/images/og-cover.jpg'))

console.log('Wrote public/images/og-cover.jpg (1200x630)')
