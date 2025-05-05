# Eatzy - Meal Planning Landing Page

Eatzy is a modern, responsive landing page for a meal planning application that creates personalized meal plans with detailed recipes and convenient shopping lists based on users' dietary preferences.

![Eatzy Hero](public/images/eatzy-hero.png)

## Features

-   **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
-   **Modern UI**: Clean, professional design with animations and interactive elements
-   **Performance Optimized**: Fast loading times and smooth scrolling experience
-   **Interactive Elements**: Engaging animations using GSAP and ScrollTrigger
-   **SEO Ready**: Properly structured content for better search engine visibility

## Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
-   **Animations**: [GSAP](https://greensock.com/gsap/) with ScrollTrigger
-   **Deployment**: Ready to deploy on [Vercel](https://vercel.com/)

## Key Components

-   `AnimatedTimeline`: Visual timeline showing how to use the application
-   `ScrollAnimation`: Component for adding scroll-triggered animations
-   `LocomotiveScrollProvider`: Smooth scrolling experience (when enabled)

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18 or higher)
-   [pnpm](https://pnpm.io/) (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/eatzy-landing.git
cd eatzy-landing
```

2. Install the dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

1. Generate a production build:

```bash
pnpm build
```

2. Preview the production build locally:

```bash
pnpm start
```

## Project Structure

```
eatzy-landing/
├── app/                    # Next.js App Router pages and layouts
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main landing page
├── components/             # Reusable React components
│   ├── animated-timeline.tsx    # Timeline animation component
│   ├── scroll-animation.tsx     # Scroll-triggered animation wrapper
│   ├── how-to-use.tsx           # How-to-use section component
│   ├── locomotive-scroll-provider.tsx  # Smooth scroll provider
│   └── ui/                 # UI components from shadcn/ui
├── public/                 # Static assets
│   └── images/             # Image assets
├── styles/                 # Additional stylesheets
├── lib/                    # Utility functions and shared logic
├── hooks/                  # Custom React hooks
└── README.md               # Project documentation
```

## Customization

### Tailwind Configuration

Customize the theme, colors, and other design aspects in the `tailwind.config.ts` file.

### Animations

Modify the ScrollAnimation and AnimatedTimeline components to adjust animation behaviors and timings.

### Content

Update the content in `app/page.tsx` to change the text, images, and other content elements.

## Deployment

The Eatzy landing page is optimized for deployment on Vercel:

```bash
vercel
```

You can also deploy to any other platform that supports Next.js applications.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

-   Design inspiration from modern SaaS and application landing pages
-   Icons from [Lucide Icons](https://lucide.dev/)
-   UI components based on [shadcn/ui](https://ui.shadcn.com/)
