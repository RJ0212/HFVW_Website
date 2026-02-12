# Quick Content Update Guide

## Most Frequently Updated Content

### 1. Contact Information
**Files to update:**
- `components/header.html` - Phone and email in top bar
- `components/footer.html` - Contact details and links
- `contact.html` - Main contact page info

**Search for these lines and update:**
```
+63 917 000 0000 → Your phone number
hopeforventwarriors@gmail.com → Your email
Metro Manila, Philippines → Your location
facebook.com/HopeForVentWarriors → Your Facebook page
```

---

### 2. Statistics / Numbers on Home Page
**File:** `index.html`
**Update these sections:**

```html
<!-- Find the stats section and update the numbers -->
<span class="text-3xl font-extrabold font-heading">500+</span>  <!-- Families Supported -->
<span class="text-3xl font-extrabold font-heading">1,000+</span> <!-- Vent Warriors -->
<span class="text-3xl font-extrabold font-heading">200+</span>  <!-- Ventilators -->
<span class="text-3xl font-extrabold font-heading">800+</span>  <!-- Volunteers -->
```

---

### 3. Mission & Vision Text
**File:** `who-we-are.html`
**Search for "Our Mission" and "Our Vision" cards**

```html
<p class="text-muted-foreground leading-relaxed">
  [Update mission text here]
</p>

<p class="text-muted-foreground leading-relaxed">
  [Update vision text here]
</p>
```

---

### 4. Add a New Vent Warrior Story
**File:** `warriors.html`
**Find the warriors grid and add a new card:**

```html
<!-- Copy this block and modify -->
<div class="card animate-on-scroll delay-1">
  <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
    <svg class="icon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style="color: var(--primary);">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
    <div>
      <h3 class="font-bold text-lg">Name, Age</h3>
      <p class="text-sm text-muted-foreground">Condition</p>
    </div>
  </div>
  <p class="text-muted-foreground text-sm leading-relaxed">
    Story text here...
  </p>
</div>
```

**Don't forget to update the delay class:**
- `delay-1`, `delay-2`, `delay-3`, `delay-4` for staggered animation

---

### 5. Add a New Timeline Event
**File:** `who-we-are.html`
**Find the timeline section and add:**

```html
<!-- Copy one of the existing timeline items and modify -->
<div class="animate-on-scroll delay-X relative mb-8 md:mb-12 flex md:flex-row">
  <div style="display: none; md:display: block; width: 50%;"></div>
  <div style="position: absolute; left: 1rem; top: 0.25rem; width: 1rem; height: 1rem; border-radius: 50%; background-color: var(--primary); border: 4px solid var(--card-bg); z-index: 10; transform: translateX(-50%);"></div>
  <div style="margin-left: 2.5rem; md:margin-left: 0; md:width: 50%; md:padding-right: 3rem;">
    <div class="rounded-xl bg-card p-6 shadow-sm border">
      <span class="text-sm font-bold text-primary">YEAR</span>
      <h3 class="font-bold text-lg mt-1">Event Title</h3>
      <p class="text-muted-foreground text-sm mt-2">Event description</p>
    </div>
  </div>
</div>
```

---

### 6. Update Programs/Services
**File:** `what-we-do.html`
**Find the programs grid and modify:**

```html
<div class="card animate-on-scroll delay-X">
  <div style="display: flex; align-items: center; justify-content: center; width: 3.5rem; height: 3.5rem; border-radius: 0.75rem; background-color: var(--charity-sky); margin-bottom: 1rem;">
    <!-- SVG icon goes here -->
  </div>
  <h3 class="text-lg font-bold mb-2">Program Title</h3>
  <p class="text-muted-foreground text-sm leading-relaxed">
    Program description
  </p>
</div>
```

---

### 7. Add a New Page to Navigation
**Files to update:**
1. `components/header.html` - Desktop menu
2. `components/header.html` - Mobile menu

**Add these lines in both places:**
```html
<a href="your-page.html" class="nav-link">Your Page Name</a>
```

---

### 8. Change Site Colors
**File:** `css/styles.css` (Line 10-25)

```css
:root {
  --primary: #0ba5d8;      /* Main blue color */
  --accent: #ff9500;       /* Orange color */
  --charity-sky: #e6f5fc;  /* Light blue background */
}
```

---

### 9. Update Certification or Awards Section
**Option 1:** Add to home page
**Option 2:** Create a new "Awards" page using the template

---

### 10. Change Phone Number Throughout Site

**Quick Replace in your editor:**
1. Use Find & Replace (Ctrl+H)
2. Find: `+63 917 000 0000`
3. Replace with: `+63 XXX XXX XXXX`
4. Replace all occurrences

---

## Common Content Locations Cheat Sheet

| Content | Location | HTML File |
|---------|----------|-----------|
| Phone/Email | Top bar & Footer | `components/header.html`, `components/footer.html` |
| Home page hero | Hero section | `index.html` |
| Statistics | Stats section | `index.html` |
| Vent warrior stories | Grid cards | `warriors.html` |
| Mission statement | Card section | `who-we-are.html` |
| Vision statement | Card section | `who-we-are.html` |
| Timeline events | Timeline section | `who-we-are.html` |
| Programs | Grid cards | `what-we-do.html` |
| Contact form labels | Form fields | `contact.html` |
| Contact details | Info cards | `contact.html` |

---

## Text Formatting Classes

### Headings
```html
<h1 class="text-4xl font-extrabold">Very Large Title</h1>
<h2 class="text-3xl font-bold">Large Title</h2>
<h3 class="text-xl font-bold">Medium Title</h3>
<h4 class="text-lg font-semibold">Small Title</h4>
```

### Text Colors
```html
<p class="text-primary">Primary blue color</p>
<p class="text-accent">Accent orange color</p>
<p class="text-muted-foreground">Light gray text</p>
<p class="text-foreground">Dark main text</p>
```

### Text Styles
```html
<p class="uppercase">LOOKS LIKE THIS</p>
<p class="lowercase">looks like this</p>
<p class="text-center">Center aligned</p>
<p class="font-semibold">Semi-bold text</p>
<p class="font-bold">Bold text</p>
<p class="font-extrabold">Extra bold text</p>
```

---

## Image Sizes for Best Results

- **Hero images:** 1920×1080px or larger (16:9 aspect ratio)
- **Community images:** 1000×750px (4:3 aspect ratio)
- **Icons:** 32×32px or 64×64px
- **Optimize all:** Use TinyPNG or ImageOptim

---

## Form Fields Explained

In `contact.html`, the form includes:
- First Name (text input)
- Last Name (text input)
- Email (email input)
- Category select (parent, donor, volunteer, medical, other)
- Message (textarea)

To add a field:
```html
<div class="form-group">
  <label class="form-label">Field Name</label>
  <input type="text" class="form-input" required />
</div>
```

---

## Testing Checklist

After making updates:
- [ ] Test on mobile (use browser dev tools)
- [ ] Check all links work
- [ ] Verify images display
- [ ] Test contact form
- [ ] Check spelling and grammar
- [ ] Ensure colors display correctly
- [ ] Test on different browsers

---

**Remember:** Always save your files and refresh your browser to see changes!
