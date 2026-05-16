# 🚀 Portfolio Neobrutalism — Next.js

Portfolio web modern dengan tema **Neobrutalism UI** yang bold, clean, dan profesional.

## ✨ Features

- 🎨 **Neobrutalism Design** — Bold borders, hard shadows, high contrast
- ⚡ **Next.js 14** — App Router, Server & Client Components
- 🎭 **Framer Motion** — Smooth animations & transitions
- 🖱️ **Custom Cursor** — Interactive cursor effect
- 💡 **Typing Effect** — Animated role switcher di hero
- 🔧 **Skills Dashboard** — 17 skills dengan filter kategori & progress bar
- 📁 **Projects Gallery** — 6 proyek dengan filter & hover effects
- 📬 **Contact Form** — Form dengan validasi & feedback
- 📱 **Fully Responsive** — Mobile-friendly
- 🌊 **Marquee Animation** — Scrolling text ticker
- ✨ **Noise Overlay** — Tekstur subtle untuk depth

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion + CSS Animations
- **Icons:** Lucide React
- **Font:** Space Grotesk + DM Sans + JetBrains Mono
- **Language:** TypeScript

## 📦 Installation

```bash
# Clone atau extract project ini
cd portfolio-neobrutalism

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Struktur Proyek

```
portfolio/
├── app/
│   ├── globals.css       # Global styles + animations
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── CustomCursor.tsx  # Custom cursor effect
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section + typing effect
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills dashboard (17 skills)
│   ├── Projects.tsx      # Projects gallery
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── tailwind.config.js    # Tailwind + custom tokens
├── next.config.js        # Next.js config
└── tsconfig.json         # TypeScript config
```

## 🎨 Sections

| Section | ID | Keterangan |
|---------|-----|-----------|
| Hero | - | Nama, role typing effect, CTA buttons, stats |
| About | `#about` | Bio, traits, social links, education timeline |
| Skills | `#skills` | 17 skills dengan filter & progress bar |
| Projects | `#projects` | 6 proyek dengan filter tipe |
| Contact | `#contact` | Form kontak + info & social links |

## 🎯 Skills yang Ditampilkan

**Frontend:** HTML5, CSS3, JavaScript  
**Backend:** PHP, Python, Java, C++, Laravel  
**Mobile:** Flutter, Dart  
**Database:** MySQL, Basis Data  
**Network:** Cisco Packet Tracer  
**Design:** Figma, Photoshop, Illustrator  

## 🖌️ Customization

Edit `components/Skills.tsx` untuk mengubah skills, level, dan ikon.  
Edit `components/Projects.tsx` untuk menambah/mengubah proyek.  
Edit `components/Hero.tsx` untuk mengubah nama dan bio.  
Edit `app/globals.css` untuk mengubah warna tema neobrutalism.

## 📄 License

MIT — Free to use for personal portfolio.
