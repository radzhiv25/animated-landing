# Animated Landing Page - Feeble Assignment

A pixel-perfect, responsive hero section implementation with smooth animations and interactive elements.

## 🚀 Tech Stack

- **Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.19
- **Animations**: Framer Motion 12.23.26
- **Icons**: React Icons 5.5.0
- **Language**: TypeScript 5.9.3

## 📁 Project Structure

```
src/
├── components/
│   ├── Bird/
│   │   ├── Bird.tsx              # Reusable bird component
│   │   ├── birdConfigs.ts        # Animation configurations
│   │   └── index.ts              # Barrel export
│   ├── Hero.tsx                  # Main hero section
│   ├── HeroBirds.tsx             # Hero section birds
│   ├── Navbar.tsx                # Navigation bar
│   ├── ScrollIndicator.tsx       # Scroll to learn more indicator
│   └── CloudBirds.tsx            # Cloud section birds
├── assets/                       # Image assets
├── App.tsx                       # Main application component
└── main.tsx                      # Application entry point
```

## ✨ Features

### Pixel-Perfect Implementation
- Exact spacing, alignment, and typography matching the design
- Responsive breakpoints for mobile, tablet, and desktop
- Precise color matching using Tailwind CSS custom colors

### Animations & Interactions
- **Navbar**: Slide-down fade-in animation on page load
- **Hero Content**: Staggered fade-in animations for content elements
- **Birds**: Continuous flying animations with varied paths and speeds
- **Clouds**: Pop-up animation from bottom with bounce effect
- **Buttons**: Hover and tap interactions with scale and shadow effects
- **Scroll Indicator**: Pulsing arrow animation

### Responsive Design
- Mobile-first approach with breakpoints:
  - Mobile: `< 640px` (sm)
  - Tablet: `640px - 1024px` (md)
  - Desktop: `> 1024px` (lg)
- Adaptive typography and spacing
- Hidden decorative elements on mobile for performance
- Touch-friendly button sizes

## 🎯 Implementation Notes

### Component Architecture
The codebase follows a modular, maintainable structure:

1. **Reusable Components**: 
   - `Bird` component eliminates code duplication (reduced ~200 lines)
   - Centralized animation configurations in `birdConfigs.ts`

2. **Separation of Concerns**:
   - Hero content separated from decorative elements
   - Cloud section birds isolated in dedicated component
   - Scroll indicator as standalone component

3. **Animation Management**:
   - Animation variants defined at component level
   - Shared easing functions for consistency
   - Configurable animation presets

### Key Design Decisions

1. **Bird Positioning**:
   - All birds positioned at minimum 250px from top to avoid navbar overlap
   - Birds constrained to left/right edges to avoid center content
   - Fixed positioning for viewport-relative animations

2. **Performance Optimizations**:
   - Birds hidden on mobile (`hidden sm:block`) to reduce render load
   - `pointer-events-none` on decorative elements
   - Optimized animation durations and easing

3. **Accessibility**:
   - Semantic HTML structure
   - Proper alt text for all images
   - Keyboard navigation support for interactive elements

### Assumptions

1. **Design Specifications**:
   - Assumed standard viewport breakpoints (sm: 640px, md: 768px, lg: 1024px)
   - Used Tailwind's default spacing scale for consistency
   - Colors matched to design using hex values (#007AFF for primary blue)

2. **Browser Support**:
   - Modern browsers with CSS Grid and Flexbox support
   - ES6+ JavaScript features
   - CSS custom properties support

3. **Animation Behavior**:
   - Infinite loop animations for birds (as per design intent)
   - Staggered delays for natural feel
   - Smooth 60fps animations using Framer Motion's optimized rendering

4. **Responsive Behavior**:
   - Mobile navigation links hidden (hamburger menu not in scope)
   - Decorative birds hidden on mobile for cleaner UX
   - Full-width buttons on mobile for better touch targets

## 🛠️ Development

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Code Quality

- **TypeScript**: Full type safety throughout the codebase
- **ESLint**: Configured with React and TypeScript rules
- **Component Structure**: Modular, reusable, and maintainable
- **Performance**: Optimized animations and conditional rendering
- **Best Practices**: Following React and Framer Motion best practices

## 🎨 Design Fidelity

- ✅ Pixel-perfect spacing and alignment
- ✅ Exact color matching
- ✅ Typography scale implementation
- ✅ Animation timing and easing accuracy
- ✅ Responsive breakpoint behavior
- ✅ Interactive state styling

## 📦 Dependencies

### Production
- `react` & `react-dom`: UI framework
- `framer-motion`: Animation library
- `react-icons`: Icon components
- `tailwindcss`: Utility-first CSS framework

### Development
- `typescript`: Type safety
- `vite`: Build tool and dev server
- `eslint`: Code linting

## 🔗 Live Demo

[Deployed Website Link](https://your-deployment-url.com)

## 📧 Contact

For questions or feedback, please contact: hiring@feeble.io

---

**Note**: This implementation prioritizes code quality, maintainability, and pixel-perfect accuracy while following modern React best practices.
