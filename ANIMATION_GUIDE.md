# ONTO Studio-Style Animations - Implementation Guide

## 🎬 What We've Added

### 1. **Cinematic Intro Animation** (`IntroAnimation.js`)
- Letter-by-letter reveal of "OTMANE" with 3D transforms
- Portal effect with the "O" logo
- Camera pass-through transition
- Light rays, particles, and glowing effects
- White flash cinematic transition

**Timeline:**
- 0-3.5s: Text animation
- 3.5-4.5s: Portal formation
- 4.5-5.5s: Portal activation
- 5.5-7s: Camera pass-through into website

---

### 2. **Scroll-Based Animations** (`ScrollAnimations.js`)
Reusable animation components:

#### `<FadeIn>`
```jsx
<FadeIn direction="up" delay={0.2}>
  <YourContent />
</FadeIn>
```
- Directions: `up`, `down`, `left`, `right`
- Smooth fade + slide animation

#### `<SlideIn>`
```jsx
<SlideIn direction="left" delay={0.3}>
  <YourContent />
</SlideIn>
```
- More dramatic slide effect
- Same directional options

#### `<ScaleIn>`
```jsx
<ScaleIn delay={0.1}>
  <YourContent />
</ScaleIn>
```
- Scale from 0.8 to 1.0
- Combined with fade

#### `<StaggerContainer>` & `<StaggerItem>`
```jsx
<StaggerContainer staggerDelay={0.15}>
  <StaggerItem><Item1 /></StaggerItem>
  <StaggerItem><Item2 /></StaggerItem>
  <StaggerItem><Item3 /></StaggerItem>
</StaggerContainer>
```
- Sequential animation of children
- Perfect for lists and grids

---

### 3. **Custom Cursor** (`CustomCursor.js`)
- Smooth following cursor dot
- Expanding circle on hover
- Color changes on click
- Magnetic effect on interactive elements
- Automatically hidden on touch devices

---

### 4. **Magnetic Buttons** (`MagneticButton.js`)
```jsx
<MagneticButton className="primary">
  Click Me
</MagneticButton>
```

**Variants:**
- `primary` - Green gradient background
- `secondary` - Outlined with green
- `outline` - White outline
- `small` / `large` - Size variants

**Features:**
- Magnetic pull effect on hover
- Smooth spring animations
- Scale on hover/click
- Gradient shimmer effect

---

### 5. **Page Transitions** (App.css)
- Smooth fade in/out
- Slide up entrance
- ONTO-style easing curves: `cubic-bezier(0.25, 0.4, 0.25, 1)`

---

## 🎨 Animation Principles (ONTO Style)

### Easing
All animations use the signature easing curve:
```
cubic-bezier(0.25, 0.4, 0.25, 1)
```
This creates that smooth, premium feel.

### Timing
- Fast interactions: 0.3-0.6s
- Content reveals: 0.8-1.2s
- Page transitions: 1-1.5s
- Stagger delays: 0.1-0.2s between items

### Motion Design
- Everything moves with purpose
- Subtle parallax on scroll
- Magnetic interactions
- Smooth spring physics
- Never jarring or abrupt

---

## 📦 Components Updated

### ✅ Hero.js
- Stagger animation for title and subtitle
- Slide in from right for 3D model
- Scale animation for decorative elements

### ✅ About.js
- FadeIn for section header
- Left/right slide for photo and text
- Smooth reveal on scroll

### ✅ Experience.js
- Wrapped in FadeIn container
- Timeline animations intact

### ✅ App.js
- Intro animation on load
- Custom cursor added
- Smooth transitions

---

## 🚀 Usage Examples

### Basic Fade In
```jsx
import { FadeIn } from './components/ScrollAnimations';

<FadeIn direction="up" delay={0.2}>
  <h1>Hello World</h1>
</FadeIn>
```

### Staggered List
```jsx
import { StaggerContainer, StaggerItem } from './components/ScrollAnimations';

<StaggerContainer staggerDelay={0.1}>
  {items.map(item => (
    <StaggerItem key={item.id}>
      <Card data={item} />
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Magnetic Button
```jsx
import MagneticButton from './components/MagneticButton';

<MagneticButton className="primary large">
  Get Started
</MagneticButton>
```

---

## 🎯 Performance Notes

- All animations use `framer-motion` for optimized performance
- GPU-accelerated transforms
- `will-change` properties set automatically
- Animations trigger only when in viewport
- `once: true` prevents re-animation on scroll up

---

## 🎨 Customization

### Change Animation Duration
```jsx
<FadeIn direction="up" delay={0.3}>
  {/* Content */}
</FadeIn>
```

Edit `ScrollAnimations.js` and adjust:
```javascript
transition: {
  duration: 0.8, // Change this
  delay: delay,
  ease: [0.25, 0.4, 0.25, 1]
}
```

### Change Magnetic Strength
Edit `MagneticButton.js`:
```javascript
const strength = 0.3; // Higher = stronger pull
```

### Modify Cursor Size
Edit `CustomCursor.css`:
```css
.custom-cursor-dot {
  width: 8px;   /* Dot size */
  height: 8px;
}

.custom-cursor-circle {
  width: 40px;  /* Circle size */
  height: 40px;
}
```

---

## 📱 Responsive Behavior

- Cursor hidden on touch devices
- Animations optimized for mobile
- Reduced motion on low-power devices
- Smooth degradation

---

## 🎬 Complete Animation Flow

1. **Page Load** → Intro animation (7s)
2. **Hero Section** → Stagger fade in
3. **Scroll Down** → Elements fade in as they enter viewport
4. **Hover Buttons** → Magnetic effect
5. **Cursor Movement** → Custom cursor follows
6. **Click** → Button scale + cursor color change

---

## 🔧 Troubleshooting

### Animations not working?
- Ensure `framer-motion` is installed: `npm install framer-motion`
- Check that components are imported correctly
- Verify ScrollAnimations.js is in components folder

### Cursor not showing?
- Only works on desktop (mouse devices)
- Check browser console for errors
- Ensure CustomCursor.css is imported

### Performance issues?
- Reduce number of animated elements
- Use `once: true` for one-time animations
- Lower stagger delays
- Reduce particle count in intro

---

## 🎉 Result

Your portfolio now has:
✅ Cinematic intro like ONTO Studio
✅ Smooth scroll animations
✅ Custom interactive cursor
✅ Magnetic button effects
✅ Premium easing and timing
✅ Professional page transitions
✅ Mobile-optimized performance

The website feels smooth, premium, and modern - just like studio-onto.com! 🚀✨
