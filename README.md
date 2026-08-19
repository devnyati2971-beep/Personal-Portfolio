# ⌁ Personal Portfolio — HTML, CSS & JavaScript

A premium, modern personal portfolio website built entirely with **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)**.

Designed for developers, creatives, and students who want a portfolio that looks professional, feels smooth, and is dead-simple to customize — no frameworks, no build tools, no dependencies.

> **Industrial Training Project** — This project demonstrates advanced frontend development skills using only core web technologies.

---

## ✨ Features

| Category | Details |
|---|---|
| **Design** | Dark & light theme, glassmorphism accents, bento grid layouts, modern typography (Space Grotesk, Inter, JetBrains Mono) |
| **Animations** | Scroll-triggered reveals, staggered text entrance, typewriter effect, parallax glows, animated timeline rail, counter animations, smooth transitions |
| **Custom Cursor** | Dot + trailing ring, reacts to links/buttons, shows "View" label on project cards, auto-disabled on touch devices |
| **Navigation** | Sticky header with scroll state, active section highlighting via IntersectionObserver, mobile full-screen menu with smooth transitions |
| **Theme Toggle** | Dark/light mode, persisted in `localStorage`, respects system `prefers-color-scheme` on first visit |
| **Project Filtering** | Animated category filter (All / Frontend / JavaScript / Full Stack / Other) |
| **Contact Form** | Client-side validation with error/success states, `mailto:` fallback, ready for Formspree/EmailJS integration |
| **Scroll UX** | Scroll progress bar, back-to-top button, smooth scrolling, section reveal animations |
| **Responsive** | Fully responsive from 375px to 1440px+, mobile-first considerations |
| **Accessible** | Semantic HTML, ARIA labels, keyboard navigation, visible focus states, `prefers-reduced-motion` support |
| **SEO** | Meta tags, Open Graph, proper heading hierarchy, semantic markup |
| **Performance** | GPU-friendly CSS transforms, passive scroll listeners, IntersectionObserver for lazy reveals, no heavy dependencies |

---

## 🛠 Technologies Used

- **HTML5** — Semantic markup, accessibility attributes
- **CSS3** — Custom properties (variables), Grid, Flexbox, `clamp()`, `@media`, animations, transitions, `backdrop-filter`
- **JavaScript ES6+** — Modules pattern, IntersectionObserver, localStorage, DOM manipulation, event delegation
- **Google Fonts** — Space Grotesk, Inter, JetBrains Mono

No React. No Vue. No Angular. No Tailwind. No Bootstrap. No jQuery. No build step.

---

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file — all sections
├── style.css           # Complete stylesheet — design tokens, components, responsive
├── script.js           # All JavaScript — config, interactions, rendering
├── README.md           # This file
│
└── assets/
    ├── images/         # Profile photo, project screenshots, OG image
    │   └── og-cover.jpg    # Open Graph social sharing image (1200×630 recommended)
    ├── icons/          # Custom icons (if any)
    └── resume/
        └── resume.pdf  # Your downloadable resume/CV
```

---

## 🚀 How to Run

No build step required. Just open the file in a browser:

### Option 1: Direct
```bash
# Simply double-click index.html
# or open it in your browser
```

### Option 2: Local server (recommended for best experience)
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have npx)
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

> A local server avoids CORS issues with font loading and ensures everything works smoothly.

---

## 🎨 How to Customize

The portfolio is designed to be customized from **one place**. Almost everything you need to change lives in `script.js` at the very top.

### Step 1: Edit the Config Object

Open `script.js` and find `portfolioConfig` at the top of the file (line ~20):

```javascript
const portfolioConfig = {
  name: "Your Name",
  shortName: "YN",
  role: "Frontend Developer",
  rolesRotating: ["Frontend Developer", "Full Stack Developer", "UI Engineer"],
  location: "Your City, Country",
  email: "your@email.com",

  bio: "...",

  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername"
  },

  // ... skills, projects, timeline, services, etc.
};
```

### Step 2: Update Personal Info in HTML

Some content is hardcoded in `index.html` for SEO and initial render. Search and replace these placeholders:

| Placeholder | Where | What to change |
|---|---|---|
| `[YOUR NAME]` | `<title>`, hero `<h1>`, footer, meta tags | Your full name |
| `[YOUR ROLE]` | Hero section, meta description | Your job title |
| `[YOUR BIO]` | About section `<p>` tags | Your bio paragraphs |
| `[YOUR LOCATION]` | About section frame tag | Your city/country |
| `[YOUR EMAIL]` | Contact section `<a>` tag | Your email address |
| `YN` | Loader, nav logo, footer logo | Your initials |
| `your@email.com` | Contact section, config | Your email |
| `#` | Social links throughout | Your actual social URLs |

### Step 3: Add Your Profile Photo

Replace the placeholder image in the About section (`index.html` line ~164):

```html
<img src="assets/images/your-photo.jpg" alt="Portrait of Your Name" loading="lazy">
```

Place your photo in `assets/images/`.

### Step 4: Add Your Resume

Place your resume PDF in `assets/resume/resume.pdf`.

The download button in the hero section already points to this path.

### Step 5: Add Project Screenshots

For each project in the config, replace the `placehold.co` URLs with your actual screenshots:

```javascript
projects: [
  {
    title: "My Awesome Project",
    desc: "A brief description of this project.",
    image: "assets/images/project-awesome.jpg",  // ← your screenshot
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    github: "https://github.com/you/project",
    demo: "https://your-demo-url.com"
  },
  // ... more projects
]
```

### Step 6: Add an OG Cover Image

Create a social sharing image (1200×630px recommended) and save it as `assets/images/og-cover.jpg`. This appears when your portfolio link is shared on social media.

---

## 🎨 Changing Colors

All colors are defined as CSS custom properties in `style.css`:

### Dark Theme (default)
```css
:root {
  --bg: #0B0D12;
  --surface: #12151C;
  --surface-2: #171B24;
  --text: #ECEEF3;
  --text-muted: #888E9C;
  --border: rgba(255,255,255,0.08);
  --primary: #7C6FF0;       /* ← main accent color */
  --accent: #F5A623;        /* ← secondary accent */
  --success: #4FD1C5;
  --danger: #F16565;
}
```

### Light Theme
```css
[data-theme="light"] {
  --bg: #F7F7FA;
  --surface: #FFFFFF;
  --surface-2: #F0F0F5;
  --text: #14161C;
  --text-muted: #6B7080;
  --border: rgba(20,22,28,0.08);
  --primary: #6152D9;       /* ← main accent color */
  --accent: #D4930D;        /* ← secondary accent */
  --success: #2BA89C;
  --danger: #D94F4F;
}
```

To change the **primary accent color**, just update `--primary` in both themes. Everything else adapts automatically.

---

## 📧 Connecting the Contact Form

The contact form currently validates on the client side and falls back to `mailto:`. To make it actually send emails:

### Option A: Formspree (easiest)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form endpoint URL
3. In `index.html`, change the form tag:

```html
<form class="contact__form" id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
```

4. In `script.js`, update the `initContactForm()` function to submit via `fetch()` instead of `mailto:`

### Option B: EmailJS

1. Go to [emailjs.com](https://www.emailjs.com) and create an account
2. Set up an email service and template
3. Add the EmailJS SDK to your `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

4. Update `initContactForm()` in `script.js` to use `emailjs.send()`

---

## 🌐 Deployment

### GitHub Pages (Free)

1. Push your portfolio to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch** → `main` → `/ (root)`
4. Your site will be live at `https://yourusername.github.io/repository-name/`

### Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repo
4. Build command: *(leave empty)*
5. Publish directory: `.` or `/`
6. Click **Deploy**

### Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"** → Import your GitHub repo
3. Framework preset: **Other**
4. Root directory: `.`
5. Click **Deploy**

### Manual Hosting

Since this is a static site (no build step), you can host it anywhere that serves static files:
- Upload via FTP to any web host
- Use Cloudflare Pages
- Use Firebase Hosting
- Use any static file CDN

---

## 📋 Customization Checklist

Use this checklist when setting up your portfolio:

- [ ] Update `portfolioConfig` in `script.js` with your info
- [ ] Replace `[YOUR NAME]` placeholders in `index.html`
- [ ] Replace `[YOUR BIO]` paragraphs in the About section
- [ ] Update `<title>` and `<meta>` tags in `<head>`
- [ ] Add your profile photo to `assets/images/`
- [ ] Add your resume to `assets/resume/resume.pdf`
- [ ] Add project screenshots to `assets/images/`
- [ ] Update social links (GitHub, LinkedIn, Twitter) everywhere
- [ ] Update the contact email address
- [ ] Create an OG cover image (`assets/images/og-cover.jpg`)
- [ ] Update the logo initials (`YN` → your initials) in HTML
- [ ] Customize colors in `style.css` if desired
- [ ] Test on desktop, tablet, and mobile
- [ ] Test dark and light theme
- [ ] Deploy!

---

## 🧩 Section Map

| # | Section | HTML ID | Nav Link |
|---|---|---|---|
| 1 | Loading Screen | `#loader` | — |
| 2 | Hero | `#hero` | — |
| 3 | About | `#about` | 01 · About |
| 4 | Skills (Bento) | `#skills` | 02 · Skills |
| 5 | Currently Learning | *(no ID)* | — |
| 6 | Timeline | `#timeline` | 03 · Journey |
| 7 | Projects | `#work` | 04 · Work |
| 8 | Services | `#services` | 05 · Services |
| 9 | Achievements | *(no ID)* | — |
| 10 | Testimonials | *(no ID)* | — |
| 11 | Contact | `#contact` | 06 · Contact |
| 12 | Footer | — | — |

---

## 📄 License

This project is open-source. Feel free to use it as a starting point for your own portfolio. Attribution is appreciated but not required.

---

## 🙏 Credits

- **Fonts**: [Google Fonts](https://fonts.google.com) — Space Grotesk, Inter, JetBrains Mono
- **Design Inspiration**: Modern award-winning developer portfolios
- **Built with**: Pure HTML, CSS & JavaScript ❤️
