# REPS - Minimalist Workout Tracker

A brutally simple workout tracking app built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm run dev          # Start development server
npm run db:seed      # Populate database with test data
npm run db:reset     # Clean slate database
npm run db:studio    # Visual database browser
```

---

## ============================================

## 🎨 PROFESSIONAL FITNESS APP DESIGN SYSTEM

## ============================================

This design system follows Apple's Human Interface Guidelines and modern fitness app best practices. Every decision is intentional and optimized for the gym environment - large touch targets, high contrast, and minimal cognitive load.

### ============================================

### COLOR PALETTE

### ============================================

#### Core Neutrals - Optimized for Dark Theme

```css
/* Pure Black - Main app background, optimized for OLED screens */
bg-black             /* #000000 - Main app background */

/* Gray Scale - iOS-inspired neutrals */
bg-gray-950          /* #0A0A0A - Near black, subtle contrast */
bg-gray-900          /* #1C1C1E - Surface, cards, containers */
bg-gray-800          /* #2C2C2E - Elevated surfaces (modals, dropdowns) */
bg-gray-700          /* #38383A - Borders, dividers */
bg-gray-600          /* #48484A - Disabled text */
bg-gray-500          /* #636366 - Tertiary text, placeholders */
bg-gray-400          /* #8E8E93 - Secondary text, labels */
bg-gray-300          /* #AEAEB2 - Inactive elements */
bg-gray-200          /* #C7C7CC - Light borders (rare use) */
bg-gray-100          /* #D1D1D6 - Light mode only */
bg-gray-50           /* #E5E5EA - Light mode only */
bg-white             /* #FFFFFF - Primary text, active elements */
```

#### Primary Brand Colors

```css
bg-blue-600          /* #0051D5 - Pressed state */
bg-blue-500          /* #007AFF - Primary actions, links, active states */
bg-blue-400          /* #0A84FF - Hover state */
```

#### Semantic Colors

```css
bg-green-500         /* #34C759 - Success, completion, positive actions */
bg-orange-500        /* #FF9500 - Warnings, PRs, attention-grabbing */
bg-red-500           /* #FF3B30 - Errors, destructive actions only */
```

### ============================================

### TEXT COLOR SYSTEM

### ============================================

```css
/* Primary Text Hierarchy */
text-white           /* Primary text, headings, important content */
text-gray-400        /* Secondary text, labels, supporting information */
text-gray-500        /* Tertiary text, placeholders, metadata */
text-gray-600        /* Disabled text, inactive states */

/* Interactive Text */
text-blue-500        /* Links, active navigation, interactive elements */
text-green-500       /* Success messages, positive feedback */
text-orange-500      /* Warnings, caution text */
text-red-500         /* Error messages, destructive action labels */
```

### ============================================

### BORDER COLOR SYSTEM

### ============================================

```css
border-gray-700      /* Default borders, card outlines */
border-gray-800      /* Subtle borders, fine dividers */
border-blue-500      /* Active/focused borders, selected states */
border-green-500     /* Success borders, positive validation */
border-red-500       /* Error borders, destructive confirmation */
```

### ============================================

### TYPOGRAPHY HIERARCHY (10 LEVELS)

### ============================================

#### 1. DISPLAY TEXT

**Classes:** `text-5xl font-bold` (48px/700)
**Usage:** Large numbers (weight: 225 lbs), hero sections, timer displays, main metrics
**Color:** `text-white`
**Examples:**

```jsx
<span className="text-5xl font-bold text-white">225</span>
<div className="text-5xl font-bold text-white">3:45</div>
```

#### 2. PAGE TITLES

**Classes:** `text-4xl font-bold` (36px/700)
**Usage:** Page titles ("PUSH DAY"), main workout names, primary headings
**Color:** `text-white`
**Examples:**

```jsx
<h1 className="text-4xl font-bold text-white">PUSH DAY</h1>
<h1 className="text-4xl font-bold text-white">UPPER POWER</h1>
```

#### 3. SECTION HEADERS

**Classes:** `text-3xl font-bold` (30px/700)
**Usage:** Section headers ("MY ROUTINES"), modal titles, major divisions
**Color:** `text-white`
**Examples:**

```jsx
<h2 className="text-3xl font-bold text-white">MY ROUTINES</h2>
<h2 className="text-3xl font-bold text-white">WORKOUT HISTORY</h2>
```

#### 4. CARD TITLES

**Classes:** `text-xl font-semibold` (20px/600)
**Usage:** Card titles ("Today's Workout"), exercise names in lists, component headers
**Color:** `text-white`
**Examples:**

```jsx
<h3 className="text-xl font-semibold text-white">Today's Workout</h3>
<h3 className="text-xl font-semibold text-white">Bench Press</h3>
```

#### 5. IMPORTANT LABELS

**Classes:** `text-lg font-semibold` (18px/600)
**Usage:** Button text, important labels, tab labels, emphasized content
**Color:** `text-white` or `text-blue-500` for links
**Examples:**

```jsx
<button className="text-lg font-semibold text-white">START WORKOUT</button>
<span className="text-lg font-semibold text-blue-500">Active</span>
```

#### 6. BODY TEXT

**Classes:** `text-base` (16px/400)
**Usage:** Default paragraph text, form inputs, list items, general content
**Color:** `text-white` for primary, `text-gray-400` for secondary
**Examples:**

```jsx
<p className="text-base text-white">Main content text</p>
<p className="text-base text-gray-400">Secondary information</p>
```

#### 7. EMPHASIZED BODY TEXT

**Classes:** `text-base font-medium` (16px/500)
**Usage:** Emphasized body text, stats and metrics, badge text, important data
**Color:** `text-white`
**Examples:**

```jsx
<span className="text-base font-medium text-white">12,450 lbs</span>
<div className="text-base font-medium text-white">Week 3 of 8</div>
```

#### 8. SUPPORTING INFORMATION

**Classes:** `text-sm` (14px/400)
**Usage:** Supporting information, exercise details (3 × 8 @ 185 lbs), descriptions
**Color:** `text-gray-400`
**Examples:**

```jsx
<p className="text-sm text-gray-400">3 × 8 @ 185 lbs</p>
<p className="text-sm text-gray-400">Chest, Shoulders, Triceps</p>
```

#### 9. META INFORMATION

**Classes:** `text-xs` (12px/400)
**Usage:** Timestamps, meta information, helper text, small details
**Color:** `text-gray-400` or `text-gray-500`
**Examples:**

```jsx
<time className="text-xs text-gray-400">2 hours ago</time>
<span className="text-xs text-gray-500">Last updated: March 15</span>
```

#### 10. SMALL LABELS

**Classes:** `text-xs font-medium uppercase tracking-wide` (12px/500)
**Usage:** Small labels, section labels ("EXERCISES"), navigation labels, categories
**Color:** `text-gray-400` or `text-gray-500`
**Examples:**

```jsx
<p className="text-xs font-medium uppercase tracking-wide text-gray-400">EXERCISES</p>
<span className="text-xs font-medium uppercase tracking-wide text-gray-500">TODAY</span>
```

### ============================================

### SPACING SCALE (4px Base Unit)

### ============================================

```css
/* Padding Classes */
p-0     /* 0px */      py-0    /* 0px vertical */     px-0    /* 0px horizontal */
p-1     /* 4px */      py-1    /* 4px vertical */     px-1    /* 4px horizontal */
p-2     /* 8px */      py-2    /* 8px vertical */     px-2    /* 8px horizontal */
p-3     /* 12px */     py-3    /* 12px vertical */    px-3    /* 12px horizontal */
p-4     /* 16px */     py-4    /* 16px vertical */    px-4    /* 16px horizontal */
p-5     /* 20px */     py-5    /* 20px vertical */    px-5    /* 20px horizontal */
p-6     /* 24px */     py-6    /* 24px vertical */    px-6    /* 24px horizontal */
p-8     /* 32px */     py-8    /* 32px vertical */    px-8    /* 32px horizontal */
p-10    /* 40px */     py-10   /* 40px vertical */    px-10   /* 40px horizontal */
p-12    /* 48px */     py-12   /* 48px vertical */    px-12   /* 48px horizontal */
p-16    /* 64px */     py-16   /* 64px vertical */    px-16   /* 64px horizontal */
p-20    /* 80px */     py-20   /* 80px vertical */    px-20   /* 80px horizontal */

/* Margin Classes - Same pattern as padding */
m-0, m-1, m-2, m-3, m-4, m-5, m-6, m-8, m-10, m-12, m-16, m-20
my-0, my-1, my-2, my-3, my-4, my-5, my-6, my-8, my-10, my-12, my-16, my-20
mx-0, mx-1, mx-2, mx-3, mx-4, mx-5, mx-6, mx-8, mx-10, mx-12, mx-16, mx-20

/* Gap Classes for Flex/Grid */
gap-0, gap-1, gap-2, gap-3, gap-4, gap-5, gap-6, gap-8, gap-10, gap-12, gap-16, gap-20
```

### ============================================

### BORDER RADIUS SCALE

### ============================================

```css
rounded-none         /* 0px - No rounding */
rounded-sm           /* 2px - Small elements, tight corners */
rounded-md           /* 6px - Small buttons, tags, pills */
rounded-lg           /* 8px - Default radius, standard elements */
rounded-xl           /* 12px - Cards, containers, panels */
rounded-2xl          /* 16px - Large cards, modals, major surfaces */
rounded-3xl          /* 24px - Extra large elements, hero sections */
rounded-full         /* 9999px - Circles, avatar, perfect pills */

/* Directional Rounding */
rounded-t-xl         /* Top corners only */
rounded-b-xl         /* Bottom corners only */
rounded-l-xl         /* Left corners only */
rounded-r-xl         /* Right corners only */
```

### ============================================

### INTERACTIVE STATES

### ============================================

#### Hover States

```css
hover:bg-blue-400         /* Primary button hover - lighten */
hover:bg-gray-800         /* Card hover - lighten background */
hover:text-blue-400       /* Link hover - lighten text */
hover:border-blue-400     /* Border hover - lighten border */
hover:scale-105           /* Subtle scale on hover */
hover:shadow-lg           /* Add shadow on hover */
```

#### Active/Pressed States

```css
active:bg-blue-600        /* Primary button pressed - darken */
active:bg-gray-700        /* Card pressed - darken background */
active:scale-95           /* Subtle press inward */
active:translate-y-0.5    /* Subtle downward press */
```

#### Focus States (Accessibility)

```css
focus:outline-none        /* Remove default outline */
focus:ring-2              /* Custom focus ring */
focus:ring-blue-500       /* Blue focus ring */
focus:ring-offset-2       /* Offset from element */
focus:ring-offset-black   /* Offset color matches background */
```

#### Disabled States

```css
disabled:opacity-60           /* 60% opacity for disabled */
disabled:cursor-not-allowed   /* Show not-allowed cursor */
disabled:pointer-events-none  /* Disable all interactions */
```

### ============================================

### COMPONENT PATTERNS

### ============================================

#### Primary Action Button

```jsx
<button className="w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-60 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200">
  ▶ START WORKOUT
</button>
```

#### Secondary Button

```jsx
<button className="bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition-colors">
  Cancel
</button>
```

#### Card Container

```jsx
<div className="bg-gray-900 hover:bg-gray-800 rounded-xl p-6 transition-colors">
  <h3 className="text-xl font-semibold text-white mb-3">Card Title</h3>
  <p className="text-sm text-gray-400 mb-4">Supporting description text</p>
  <div className="text-base font-medium text-white">Action Content</div>
</div>
```

#### Exercise Row

```jsx
<div className="bg-gray-900 hover:bg-gray-800 rounded-xl p-5 flex items-center justify-between transition-colors cursor-pointer">
  <div>
    <h4 className="text-lg font-semibold text-white">Bench Press</h4>
    <p className="text-sm text-gray-400 mt-1">3 × 8 @ 185 lbs</p>
  </div>
  <span className="text-gray-400 text-xl">→</span>
</div>
```

#### Section Header with Label

```jsx
<div className="mb-6">
  <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-4">
    EXERCISES
  </p>
  <h2 className="text-3xl font-bold text-white">Today's Workout</h2>
</div>
```

#### Navigation Tab

```jsx
<button className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-500 active:text-blue-600 transition-colors py-2 px-4">
  <div className="w-6 h-6">{/* Icon component */}</div>
  <span className="text-xs font-medium uppercase tracking-wide">TODAY</span>
</button>
```

#### Stat Card

```jsx
<div className="bg-gray-900 rounded-xl p-6 text-center">
  <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
    THIS WEEK
  </p>
  <p className="text-3xl font-bold text-white mb-1">3</p>
  <p className="text-xs text-gray-400">workouts</p>
</div>
```

#### Badge/Pill

```jsx
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500 text-white">
  2 PR's 🔥
</span>
```

### ============================================

### LAYOUT PATTERNS

### ============================================

#### Screen Container

```jsx
<div className="min-h-screen bg-black pb-24">{/* Content */}</div>
```

#### Content Section

```jsx
<div className="px-5 py-6">{/* Section content */}</div>
```

#### Card Grid

```jsx
<div className="grid gap-3 px-5">{/* Cards */}</div>
```

#### Bottom Navigation

```jsx
<nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 safe-bottom">
  <div className="flex justify-around items-center h-20 pb-5">
    {/* Navigation items */}
  </div>
</nav>
```

### ============================================

### USAGE GUIDELINES

### ============================================

#### Typography Rules

- **Always** use the defined typography scale
- **Never** use arbitrary font sizes
- Use `text-white` for all primary headings
- Use `text-gray-400` for secondary/supporting text
- Use `text-gray-500` for tertiary/meta information
- Reserve `text-blue-500` for links and active states only

#### Color Rules

- **Backgrounds:** Start with `bg-black`, use `bg-gray-900` for cards
- **Primary Actions:** Always use `bg-blue-500` with proper hover states
- **Success States:** Use `bg-green-500` for completion, PRs, positive feedback
- **Warnings:** Use `bg-orange-500` sparingly for attention-grabbing elements
- **Destructive Actions:** Only use `bg-red-500` for delete/destructive actions

#### Spacing Rules

- **Always** use the 4px base unit spacing scale
- **Never** use arbitrary padding/margin values
- Use `px-5` for horizontal screen padding
- Use `py-6` for vertical section padding
- Use `gap-3` for card spacing
- Use `mb-4` for standard content spacing

#### Interactive Rules

- **All buttons** must have hover, active, and focus states
- **Minimum touch target:** 44px × 44px for all interactive elements
- **Always** include transition classes for smooth interactions
- **Use** `cursor-pointer` for clickable non-button elements

#### Accessibility Requirements

- High contrast ratios maintained (4.5:1 minimum)
- Focus states visible and well-defined
- Semantic HTML structure
- Screen reader friendly text hierarchy
- Touch targets minimum 44px for mobile use
- Reduced motion support built-in

#### Performance Guidelines

- Use `transition-colors` instead of `transition-all`
- Prefer transforms over position changes
- Use `will-change` sparingly and remove after animations
- Optimize for 60fps on mobile devices

### ============================================

### COMPONENT HIERARCHY

### ============================================

```
Screen Level:
├── bg-black (main background)
├── px-5 py-6 (screen padding)
└── pb-24 (bottom nav spacing)

Section Level:
├── mb-6 (section spacing)
├── text-xs uppercase text-gray-500 (section label)
└── text-3xl font-bold text-white (section title)

Card Level:
├── bg-gray-900 hover:bg-gray-800 (card background)
├── rounded-xl p-6 (card styling)
├── text-xl font-semibold text-white (card title)
└── text-sm text-gray-400 (card supporting text)

Element Level:
├── Buttons: bg-blue-500 hover:bg-blue-400 active:bg-blue-600
├── Text: text-white, text-gray-400, text-gray-500
└── Interactive: cursor-pointer transition-colors
```

---

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** with strict mode
- **Tailwind CSS v4** for styling
- **SQLite** with Drizzle ORM
- **React** 19

## Database Schema

See `SCHEMA.md` for complete database documentation and relationships.
