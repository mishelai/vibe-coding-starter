# Landing Page Restructure Plan - Motti Pinchas

## Design Direction
- **Style**: Minimal editorial - clean, text-focused, generous whitespace
- **About**: Two-column with large photo
- **Services**: Feature blocks - large alternating sections for each service

---

## Final Section Order

1. **Header** (keep)
2. **Hero** (keep)
3. **About** (NEW) - Two-column: photo + bio
4. **Testimonials** (NEW) - Minimal quote cards
5. **Services** (NEW) - 4 large feature blocks (alternating layout):
   - a. Mentoring
   - b. Strategy & Product Development
   - c. Community
   - d. Lectures
6. **QA** (keep FaqSection)
7. **Contact** (NEW) - Form + contact info
8. **Footer** (keep)

---

## Component Specifications

### 1. AboutSection (Two-column)
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  ┌──────────────────┐  ┌─────────────────────────┐  │
│  │                  │  │                         │  │
│  │                  │  │  ABOUT MOTTI PINCHAS    │  │
│  │      PHOTO       │  │                         │  │
│  │    (large)       │  │  Bio paragraph 1...     │  │
│  │                  │  │                         │  │
│  │                  │  │  Bio paragraph 2...     │  │
│  │                  │  │                         │  │
│  └──────────────────┘  └─────────────────────────┘  │
│                                                     │
└─────────────────────────────────────────────────────┘
```
- Responsive: stacks vertically on mobile (image on top)

### 2. TestimonialsSection (Minimal)
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│              WHAT CLIENTS SAY                       │
│                                                     │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐   │
│  │             │ │             │ │             │   │
│  │   "Quote"   │ │   "Quote"   │ │   "Quote"   │   │
│  │             │ │             │ │             │   │
│  │   — Name    │ │   — Name    │ │   — Name    │   │
│  │    Title    │ │    Title    │ │    Title    │   │
│  └─────────────┘ └─────────────┘ └─────────────┘   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 3. Services - Feature Blocks (Alternating)
Each service is a FULL section with alternating image/text placement:

```
┌─────────────────────────────────────────────────────┐
│  MENTORING                                          │
│  ┌──────────────────┐  ┌─────────────────────────┐  │
│  │                  │  │  Heading                │  │
│  │      IMAGE       │  │  Description paragraph  │  │
│  │                  │  │  [Learn More]           │  │
│  └──────────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  STRATEGY & PRODUCT DEVELOPMENT                     │
│  ┌─────────────────────────┐  ┌──────────────────┐  │
│  │  Heading                │  │                  │  │
│  │  Description paragraph  │  │      IMAGE       │  │
│  │  [Learn More]           │  │                  │  │
│  └─────────────────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  COMMUNITY                                          │
│  ┌──────────────────┐  ┌─────────────────────────┐  │
│  │                  │  │  Heading                │  │
│  │      IMAGE       │  │  Description paragraph  │  │
│  │                  │  │  [Learn More]           │  │
│  └──────────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  LECTURES                                           │
│  ┌─────────────────────────┐  ┌──────────────────┐  │
│  │  Heading                │  │                  │  │
│  │  Description paragraph  │  │      IMAGE       │  │
│  │  [Learn More]           │  │                  │  │
│  └─────────────────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### 4. ContactSection
```
┌─────────────────────────────────────────────────────┐
│                 GET IN TOUCH                        │
│                                                     │
│  ┌──────────────────────┐  ┌────────────────────┐   │
│  │  Name: [__________]  │  │  Contact Info      │   │
│  │  Email: [_________]  │  │                    │   │
│  │  Message:            │  │  email@example.com │   │
│  │  [________________]  │  │  +1 234 567 890    │   │
│  │  [________________]  │  │                    │   │
│  │                      │  │  [f] [in] [ig]     │   │
│  │  [  Send Message  ]  │  │                    │   │
│  └──────────────────────┘  └────────────────────┘   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Implementation Plan

### Files to CREATE

#### 1. `components/mentor/AboutSection.tsx`
- Two-column layout: image left, text right
- Image: rounded-xl, grayscale filter (consistent with hero portraits)
- Text: heading (text-2xl md:text-3xl font-bold), bio paragraphs (text-neutral-600 dark:text-secondary-200)
- Spacing: py-14 lg:py-24 (consistent with existing sections)
- Responsive: flex-col on mobile, md:flex-row on tablet+

#### 2. `components/mentor/TestimonialsSection.tsx`
- Section heading: text-2xl md:text-3xl font-bold text-center
- Grid: grid-cols-1 md:grid-cols-3 gap-6
- Card: bg-neutral-50 dark:bg-secondary-800, shadow-card, rounded-lg, p-6
- Quote: italic text-neutral-600 dark:text-secondary-200
- Attribution: font-semibold + text-sm text-neutral-400

#### 3. `components/mentor/ServiceFeature.tsx`
- Props: title, description, imageSrc, imagePosition ('left' | 'right'), ctaText, ctaHref
- Two-column grid: md:grid-cols-2 gap-8 lg:gap-16
- Image: rounded-xl, aspect-video or aspect-4/3
- Text: heading + description + MentorButton CTA
- Spacing: py-14 lg:py-20 (slightly less than full sections)
- Use order classes for alternating: md:order-1, md:order-2

#### 4. `components/mentor/ServicesSection.tsx`
- Section heading at top: "Our Services"
- Renders 4 ServiceFeature components
- Alternates imagePosition: left, right, left, right
- Full section spacing: py-14 lg:py-24

#### 5. `components/mentor/ContactSection.tsx`
- Two-column: md:grid-cols-2 gap-10 lg:gap-16
- Form: bg-neutral-50 dark:bg-secondary-800 rounded-lg p-6 lg:p-8
- Inputs: use existing input styles or simple bordered inputs
- Submit: MentorButton primary variant
- Info side: heading, email, phone, social icons row
- Social icons: same style as FinalCta (rounded, dark bg)

### Files to MODIFY

#### 1. `data/config/landingPageData.ts`
- Add: `aboutContent` (heading, bio paragraphs, imagePath)
- Add: `testimonialItems` (3-4 placeholder testimonials)
- Add: `serviceItems` (4 services with title, description, imagePath, ctaText, ctaHref)
- Add: `contactContent` (heading, email, phone, social links)
- Keep: `faqContent`, `faqItems`, `siteInfo`, `heroContent`
- Remove unused data

#### 2. `components/mentor/index.ts`
- Add new exports
- Remove old exports

#### 3. `app/page.tsx`
- New section order with new components

### Files to DELETE
- `CourseCard.tsx`, `CoursesGrid.tsx`
- `CommunityStats.tsx`, `ExpertSection.tsx`
- `ChartsStrip.tsx`, `FinalCta.tsx`

---

## Execution Order

1. Update `landingPageData.ts` with new data
2. Create `AboutSection.tsx`
3. Create `TestimonialsSection.tsx`
4. Create `ServiceFeature.tsx`
5. Create `ServicesSection.tsx`
6. Create `ContactSection.tsx`
7. Update `index.ts` exports
8. Update `app/page.tsx`
9. Delete unused files
10. Run diagnostics and browser verify
