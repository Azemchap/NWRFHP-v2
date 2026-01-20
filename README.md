# NWRFHP Website

Official website for the **North West Regional Fund for Health Promotion (NWRFHP)** - A public health organization serving communities in Cameroon.

[![CI/CD Pipeline](https://github.com/Azemchap/NWRFHP-v2/actions/workflows/ci.yml/badge.svg)](https://github.com/Azemchap/NWRFHP-v2/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-13.4.12-black)](https://nextjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 🚀 Features

- ✅ **Full TypeScript** - Complete type safety across the application
- ✅ **Design System** - Centralized Tailwind CSS design tokens
- ✅ **Database Integration** - Drizzle ORM with MongoDB
- ✅ **Form Validation** - React Hook Form with comprehensive validation
- ✅ **Unit Tests** - Jest & React Testing Library
- ✅ **SEO Optimized** - Auto-generated sitemap and robots.txt
- ✅ **Security Headers** - XSS, clickjacking, and MIME-sniffing protection
- ✅ **Error Handling** - Custom error boundaries
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **CI/CD Pipeline** - GitHub Actions for automated testing and deployment

## 📋 Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **MongoDB** >= 5.0 (local or cloud instance)

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/Azemchap/NWRFHP-v2.git
cd NWRFHP-v2
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
# Database
DATABASE_URL="mongodb://localhost:27017/nwrfhp"
DATABASE_NAME="nwrfhp"

# Email (Resend)
RESEND_API_KEY="re_your_api_key_here"

# Public variables
NEXT_PUBLIC_PHONE="+237611222333"
NEXT_PUBLIC_WHATSAPP="+237611222333"
NEXT_PUBLIC_EMAIL="info@nwrfhp.org"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

4. **Seed the database** (optional)
```bash
npm run db:seed
```

5. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests in watch mode |
| `npm run test:ci` | Run tests in CI mode |
| `npm run db:seed` | Seed database with team data |
| `npm run db:studio` | Open Drizzle Studio |

## 🏗️ Project Structure

```
NWRFHP-v2/
├── .github/
│   └── workflows/           # GitHub Actions CI/CD
├── public/
│   ├── images/              # Static images
│   └── robots.txt           # SEO robots file
├── src/
│   ├── app/                 # Next.js 13 App Router
│   │   ├── api/             # API routes
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── ...
│   ├── components/          # React components
│   ├── config/              # Configuration files
│   ├── data/                # JSON data
│   └── db/                  # Database layer
├── jest.config.ts           # Jest configuration
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Dependencies
```

## 🎨 Design System

Centralized design tokens in `tailwind.config.js`:
- Primary color: `#2858dc`
- Secondary color: `#059669`

## 🗄️ Database

MongoDB with Drizzle ORM. Seed database:
```bash
npm run db:seed
```

## 🧪 Testing

Run tests with Jest:
```bash
npm test
```

## 🔒 Security

- Security headers configured
- Environment variables for secrets
- Input validation on all forms

## 📧 Contact Form

Validated contact form with API endpoint at `/api/contact`.

## 🚀 Deployment

Deploy to Vercel:
```bash
vercel
```

## 📄 License

MIT License

## 👥 Contact

- Email: info@nwrfhp.org
- Phone: +237 611 222 333

---

**Built with ❤️ for better health in Cameroon**
