# Portfolio

A modern, full-stack developer portfolio built with Next.js, React, and Tailwind CSS. Showcases my skills, experience, and projects with a clean and interactive UI.

---

## Demo


https://github.com/user-attachments/assets/43969752-b6cf-4323-8a8a-7814f4e45205


---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)

---

## Features

- **Responsive Design:** Mobile-first, accessible, and visually appealing.
- **Animated UI:** Smooth transitions and interactive elements using Framer Motion.
- **Dynamic Content:** Skills, experience, and services are easily configurable.
- **Contact Form:** Secure email sending via a Next.js API route and Nodemailer.
- **Social Links:** Quick access to your professional profiles.
- **Downloadable CV:** PDF resume available for download.

---

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

```bash
git clone https://github.com/Ali-Tarek/portfolio.git
cd portfolio
npm install
```

### Running Locally

```bash
npm run dev
```

Open `http://localhost:3000` to view it in your browser.

---

## Project Structure

```
portfolio/
  app/                # Next.js app directory (pages, API, layout)
    api/send-email/   # Contact form API endpoint
    about/            # About page
    contact/          # Contact page
    services/         # Services page
    work/             # Work/projects page
    ...
  components/         # Reusable React components
    ui/               # UI primitives (input, label, select, etc.)
  lib/                # Constants and utility functions
  public/             # Static assets (images, SVGs, PDF, etc.)
    assets/
      work/           # Project thumbnails
      services/       # Service icons
      blobs/          # Decorative SVG blobs
  ...
```

---

## Configuration

### Environment Variables

To enable the contact form, create a `.env.local` file in the root with:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

- Use an [App Password](https://support.google.com/accounts/answer/185833) if using Gmail with 2FA.

---

## Available Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run start` – Start the production server
- `npm run lint` – Lint the codebase

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **UI:** [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Components:** [Radix UI](https://www.radix-ui.com/), custom UI primitives
- **Email:** [Nodemailer](https://nodemailer.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Other:** [Swiper](https://swiperjs.com/) (carousel), [clsx](https://github.com/lukeed/clsx) (conditional classes)

---
