# Pranvi Building Solutions 🏗️

A modern, responsive Next.js website for a steel construction and prefabricated building company. Built with TypeScript, Tailwind CSS, and featuring server-side rendering for optimal performance and SEO.

![Next.js](https://img.shields.io/badge/Next.js-15.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)

## 🌟 Live Demo

[View Live Site]([https://pranvi-construction.vercel.app](https://pranvi-pre-fab-delta.vercel.app/)) 



## ✨ Features

### Frontend
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: Next.js Image optimization and lazy loading
- **SEO Ready**: Server-side rendering with meta tags optimization
- **Accessibility**: ARIA labels and semantic HTML

### Backend & Technical
- **API Routes**: RESTful endpoints for form submissions
- **Form Processing**: Contact form with validation and error handling
- **Email Integration**: Ready for nodemailer implementation
- **Type Safety**: Full TypeScript implementation
- **Component Architecture**: Reusable, modular components

### Pages
- **Home**: Hero section with animated text, services overview, testimonials
- **About**: Company history, team, and values
- **Services**: Detailed service offerings with feature lists
- **Projects**: Filterable project gallery with categories
- **Contact**: Interactive form with location map

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 15.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom components with React Icons

### Libraries
- **Animations**: Framer Motion
- **Icons**: React Icons (Font Awesome, Ionicons)
- **Forms**: Native React with API routes
- **Email**: Nodemailer (configured, ready to implement)

### Development
- **Linting**: ESLint with Next.js config
- **Package Manager**: npm/yarn/pnpm

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pranvi-fab.git
cd pranvi-fab
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create environment variables (optional):
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
pranvi-fab/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects gallery
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── ProjectCard.tsx    # Project display component
│   └── types.ts           # TypeScript interfaces
├── public/                # Static assets
│   └── images/           # Image assets
├── styles/               # Global styles
└── package.json          # Dependencies
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:

```env
# Email Configuration (for production)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Google Maps API (optional)
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your-api-key

# Site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Customization

1. **Company Info**: Update company details in `components/Footer.tsx` and throughout pages
2. **Images**: Replace placeholder images in `/public/images/`
3. **Colors**: Modify color scheme in `tailwind.config.js`
4. **Content**: Update text content in respective page components

## 📝 API Endpoints

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "company": "string",
  "projectType": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

```bash
# Using Vercel CLI
vercel --prod
```

### Other Platforms
- **Netlify**: Supports Next.js out of the box
- **AWS Amplify**: Full Next.js support
- **Railway**: One-click deploy from GitHub
- **Self-hosted**: Use `next build` and `next start`

## 🎨 Features Breakdown

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly navigation
- Optimized images for all screen sizes

### Performance Optimizations
- Next.js Image component with lazy loading
- Dynamic imports for heavy components
- Optimized fonts with next/font
- Minimal JavaScript bundle

### SEO Features
- Dynamic meta tags
- Structured data ready
- XML sitemap support
- Robots.txt configuration

## 🔄 Future Enhancements

- [ ] CMS Integration (Strapi/Contentful)
- [ ] Multi-language support (i18n)
- [ ] Blog section
- [ ] Client portal with authentication
- [ ] Project timeline tracker
- [ ] Cost calculator tool
- [ ] WhatsApp integration
- [ ] Progressive Web App (PWA)
- [ ] Analytics dashboard
- [ ] Automated testing suite

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Design inspiration from modern construction industry leaders
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- UI components patterns from best practices


---

Built with ❤️ using Next.js and TypeScript
