# FirstGen Digital — Website Design & Development Agency

<p align="center">
  <img src="./public/logo.png" alt="FirstGen Digital" width="220" />
</p>

FirstGen Digital is a modern website design and development platform focused on helping students, professionals, freelancers, and businesses build a strong online presence.

The website presents FirstGen Digital's services, pricing, sample projects, delivery process, FAQs, and a multi-step enquiry flow for customers who want to start a website project.

## Live Website

**Website:** https://www.firstgendigital.in

## Services

- Student Portfolio Websites
- Personal Websites
- Business Websites
- Website Redesign

## Key Features

### Modern Agency Website

- Responsive landing page for desktop, tablet, and mobile
- Animated hero and interactive visual effects
- Services and pricing presentation
- Project showcase section
- Development process timeline
- FAQ section
- Contact and consultation calls to action

### Dedicated Service Pages

Each major service has its own landing experience with service-specific information, benefits, features, process details, and calls to action:

- Student Portfolio
- Personal Website
- Business Website
- Website Redesign

### Sample Project Previews

The website includes sample project pages that allow visitors to explore example designs for:

- Student portfolios
- Personal websites
- Business websites
- Website redesigns

### Booking & Enquiry Flow

- Two-step project enquiry form
- Name, email, and WhatsApp number validation
- International phone number support
- Website type selection
- Budget selection
- Project requirement details
- Form submissions through Web3Forms
- Lead storage using Supabase

### Location-Aware Experience

A Vercel serverless API reads Vercel location headers and provides country information to the frontend. This is used to improve the phone-number input experience for visitors from different regions.

### Additional Pages

- Privacy Policy
- Terms & Conditions
- Refund Policy
- Custom 404 page

## Tech Stack

### Frontend

- React 19
- JavaScript
- Tailwind CSS
- React Router
- Framer Motion
- GSAP
- AOS
- Lucide React
- React Icons

### Forms & Data

- Supabase
- Web3Forms
- React International Phone
- Google libphonenumber

### Visual Effects

- OGL
- Framer Motion animations
- Custom Galaxy, Light Rays, Splash Cursor, Border Glow, and Glare effects

### Deployment

- Vercel
- Vercel Serverless Function for location detection

## Project Structure

first-gen/
├── api/
│   └── location.js
├── public/
├── src/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── images/
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── LandingPages/
│   │   │   ├── SampleProjects/
│   │   │   ├── Forms/
│   │   │   ├── SuccessPages/
│   │   │   └── LeagalPages/
│   │   └── utils/
│   │       ├── ui/
│   │       ├── css/
│   │       ├── json/
│   │       └── supabase.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── vercel.json
└── package.json
