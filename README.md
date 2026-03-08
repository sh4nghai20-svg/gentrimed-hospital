# Gentrimed Hospital Landing Page

A modern, responsive healthcare website landing page for Gentrimed Hospital, built with cutting-edge web technologies.

## 🏥 Project Overview

Gentrimed Hospital's landing page is designed to showcase the hospital's services, medical expertise, and commitment to patient care. The website features a modern design with smooth animations, responsive layouts, and intuitive navigation.

## ✨ Features

### 1. **Navigation Bar**
- Sticky header with hospital logo and name
- Responsive hamburger menu for mobile devices
- Book Appointment button
- Smooth hover animations
- Mobile-friendly design

### 2. **Hero Section**
- Full-width image slider with 3 hospital slides
- Fade transitions and parallax effects
- Each slide includes:
  - Hospital background image
  - Dark gradient overlay
  - Compelling title and subtitle
  - Call-to-action button
- Auto-play carousel with manual controls

### 3. **Why Choose Our Hospital**
- 4 glassmorphism cards with icon animations
- Features:
  - Expert Doctors
  - Advanced Technology
  - 24/7 Emergency Services
  - Patient-Centered Care
- Hover lift animations and gradient backgrounds

### 4. **Our Medical Services**
- 6-card grid layout showcasing services:
  - Cardiology
  - Pediatrics
  - Radiology
  - Emergency Care
  - Surgery
  - Laboratory
- Icons with hover rotation animations
- "Learn More" interactive buttons

### 5. **Meet Our Doctors**
- Doctor profile cards with:
  - Professional image placeholders
  - Name, specialty, and experience
  - Individual appointment booking buttons
  - Hover shadow effects
- Responsive grid layout (1-4 columns)

### 6. **Hospital Statistics**
- Animated counters showing:
  - 25+ Years Experience
  - 150+ Expert Doctors
  - 10,000+ Happy Patients
  - 24/7 Emergency Service
- Number animations with Framer Motion
- Gradient background with decorative elements

### 7. **News & Events**
- Latest hospital updates:
  - Medical missions
  - Health awareness seminars
  - Hospital announcements
- Modern card layout with category badges
- Responsive grid (1-3 columns)

### 8. **Patient Testimonials**
- Carousel slider with patient reviews
- 5-star rating system
- Patient information with avatars
- Smooth animations and transitions

### 9. **Appointment CTA Section**
- Full-width background image
- Large call-to-action with buttons
- Contact information display:
  - Phone number
  - Email address
  - Operating hours
- Dark overlay for text readability

### 10. **Footer**
- Hospital information and contact details
- Quick links navigation
- Service links
- Social media icons
- Copyright and legal links

### 11. **AI Virtual Assistant Chatbot**
- Floating chat button in bottom right
- Friendly virtual hospital assistant with professional tone
- Answers queries about services, doctors, hours, location, and emergencies
- Guides users through appointment booking flow
- Quick suggestion buttons for common actions
- Maintains privacy and avoids medical diagnoses

### 12. **Admin Dashboard**
- Accessible at `/admin` route
- Modify hospital content on-the-fly:
  - Services (title, icon name, description)
  - Doctors (name, specialty, experience)
  - Hero slides (text, button, image path)
  - Patient testimonials (review, rating)
  - Contact information (address, phone, email, hours)
- Changes persist via localStorage for demo purposes
- Designed with simple forms using React Context

## 🛠️ Technologies Used

### Frontend Framework
- **React** - UI component library
- **Next.js 15** - React framework with server-side rendering
- **TypeScript** - Type-safe JavaScript

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions

### Components & Libraries
- **React Slick** - Image carousel/slider
- **Lucide React** - Beautiful icon library

### Development
- **Next.js App Router** - Modern Next.js routing
- **TypeScript** - Full type safety
- **ESLint** - Code quality linting

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Instructions

1. **Clone or download the project**
   ```bash
   cd gentrimed-hospital
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The page will automatically reload on file changes

## 📁 Project Structure

```
gentrimed-hospital/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation header
│   │   ├── HeroSlider.tsx      # Hero carousel section
│   │   ├── WhyChooseUs.tsx     # Hospital features
│   │   ├── Services.tsx        # Medical services grid
│   │   ├── OurDoctors.tsx      # Doctor profiles
│   │   ├── Statistics.tsx      # Animated counters
│   │   ├── NewsEvents.tsx      # News & events
│   │   ├── Testimonials.tsx    # Patient reviews slider
│   │   ├── AppointmentCTA.tsx  # Booking section
│   │   ├── Chatbot.tsx         # AI-powered virtual assistant
│   │   └── Footer.tsx          # Footer section
│   └── [other config files]
├── public/
│   └── images/                 # Hospital images
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🎨 Design System

### Color Palette
- **Primary:** Medical Blue (#0ea5e9)
- **Secondary:** Teal (#14b8a6)
- **Background:** Soft Gray (#f8fafc)
- **Text:** Dark Gray (#1f2937)

### Typography
- **Headlines:** Bold sans-serif
- **Body:** Regular sans-serif
- **Monospace:** For code (if needed)

### Animations
- Smooth fade-in transitions
- Parallax scrolling effects
- Hover lift animations
- Number counter animations
- Staggered card animations

## 🚀 Build & Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deployment Options
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Self-hosted servers**

## 📱 Responsive Design

The website is fully responsive across:
- **Desktop:** 1024px and above
- **Tablet:** 640px to 1023px
- **Mobile:** Below 640px

All components adapt gracefully to different screen sizes using Tailwind CSS breakpoints.

## 🔧 Customization

### Adding Images
Place hospital images in `public/images/` and update the image paths in components.

### Updating Content
Edit component files in `src/components/` to modify:
- Service descriptions
- Doctor information
- News and events
- Testimonials
- Contact information

### Styling Changes
Modify Tailwind CSS classes in component files or:
1. Update `src/app/globals.css` for global styles
2. Update `tailwind.config.ts` for custom theme configuration

### Adding New Sections
1. Create a new component in `src/components/`
2. Import it in `src/app/page.tsx`
3. Add it to the main layout in the correct position

## 📊 Performance

- ✅ Optimized images with Next.js Image component
- ✅ Lazy loading of components
- ✅ Code splitting with Next.js
- ✅ CSS optimization with Tailwind
- ✅ Fast animations with Framer Motion

## 🔒 Security

- ✅ TypeScript for type safety
- ✅ Server-side rendering with Next.js
- ✅ Secure by default configurations
- ✅ Regular dependency updates

## 📞 Contact & Support

For customization or questions:
- Email: hello@gentrimed.com
- Phone: +234 123 456 7890

## 📄 License

This project is proprietary and built for Gentrimed Hospital.

## 🎯 Future Enhancements

- [ ] Online appointment booking system
- [ ] Patient portal
- [ ] Blog section
- [ ] Multilingual support
- [ ] Dark mode toggle
- [ ] Patient reviews and ratings
- [ ] Live chat support
- [ ] Integration with hospital management system

---

**Created with ❤️ for Gentrimed Hospital**

Version: 1.0.0  
Last Updated: March 2026

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
#   g e n t r i m e d - h o s p i t a l  
 