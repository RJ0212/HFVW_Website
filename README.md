# Hope For Vent Warriors - HTML Version Documentation

## Project Overview
This is a pure HTML, CSS, and JavaScript version of the Hope For Vent Warriors website. It's designed to be **easy to maintain**, **simple to update content**, and **straightforward to add new pages**.

---

## Project Structure

```
html-version/
├── index.html                 # Home page
├── warriors.html              # Vent Warriors stories
├── who-we-are.html            # About us page
├── what-we-do.html            # Programs & services
├── contact.html               # Contact form
├── 404.html                   # Error page
├── template.html              # Template for creating new pages
├── assets/                    # Images and media files
│   ├── hero-image.jpg
│   ├── children-community.jpg
│   ├── warrior-child.jpg
│   ├── medical-team.jpg
│   └── what-we-do.jpg
├── components/                # Reusable components
│   ├── header.html            # Header (auto-loaded)
│   └── footer.html            # Footer (auto-loaded)
├── css/
│   ├── styles.css             # Main stylesheet with utilities
│   └── notifications.css      # Toast notification styles
└── js/
    └── main.js                # JavaScript for navigation, animations, forms
```

---

## Quick Start

### Opening the Site
1. Open any `.html` file in your browser (e.g., `index.html`)
2. The site works without a server, but some features (like form submission) need a backend setup
3. For local development, use a simple HTTP server: `python -m http.server 8000`

---

## How to Update Content

### Changing Text on Existing Pages
1. Open the HTML file you want to edit (e.g., `index.html`)
2. Find the text you want to change
3. Edit it directly in the HTML
4. Save the file and refresh your browser

**Example:** To change the hero title on the home page:
```html
<!-- Find this line in index.html -->
<h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl animate-fade-up" style="animation-delay: 0.1s;">
  Hope For Vent Warriors  <!-- Change this text -->
</h1>
```

### Changing Images
1. Replace image files in the `assets/` folder
2. Make sure your new image has the same filename
3. The HTML will automatically use the new image

**Example images to replace:**
- `hero-image.jpg` - Home hero section
- `warrior-child.jpg` - Warriors page hero
- `medical-team.jpg` - Who We Are page hero
- `what-we-do.jpg` - What We Do page hero
- `children-community.jpg` - Community image on home page

### Changing Colors and Styling
Edit the CSS variables in `css/styles.css` (around line 10):

```css
:root {
  /* Primary brand color (teal blue) */
  --primary: #0ba5d8;
  
  /* Accent color (orange) */
  --accent: #ff9500;
  
  /* Charity Sky light blue */
  --charity-sky: #e6f5fc;
  
  /* Change any color here */
}
```

### Changing Contact Information
Find and update contact details in:
1. `components/header.html` - Top bar
2. `components/footer.html` - Footer contact section
3. `contact.html` - Contact page details

---

## How to Create a New Page

### Using the Template
1. **Copy the template:**
   - Copy `template.html` to a new file (e.g., `new-page.html`)

2. **Edit the page structure:**
   ```html
   <title>Your Page Title - Hope For Vent Warriors</title>
   ```

3. **Update the hero section:**
   ```html
   <section class="hero-section">
     <img src="assets/your-image.jpg" alt="Description" class="hero-image">
     <div class="hero-overlay"></div>
     <div class="hero-content container-narrow section-padding text-primary-foreground">
       <p class="mb-2 text-sm font-semibold uppercase tracking-widest text-accent animate-fade-up">
         Your Tagline
       </p>
       <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl animate-fade-up" style="animation-delay: 0.1s;">
         Your Page Title
       </h1>
       <p class="mb-8 max-w-xl text-lg opacity-90 animate-fade-up" style="animation-delay: 0.2s;">
         Your description text
       </p>
     </div>
   </section>
   ```

4. **Add content sections:**
   ```html
   <section class="section-padding">
     <div class="container-narrow">
       <div class="animate-on-scroll text-center mb-12">
         <h2 class="text-3xl font-extrabold md:text-4xl">Section Title</h2>
         <p class="mx-auto mt-4 max-w-2xl text-muted-foreground">
           Section description
         </p>
       </div>
       
       <!-- Your content here -->
     </div>
   </section>
   ```

5. **Add the page to navigation:**
   - Edit `components/header.html`
   - Add your link in both desktop and mobile menus:
   ```html
   <a href="new-page.html" class="nav-link">New Page Name</a>
   ```

---

## Common Components & Classes

### Typography
```html
<!-- Headings -->
<h1 class="text-4xl font-extrabold">Large Title</h1>
<h2 class="text-3xl font-bold">Section Title</h2>
<h3 class="text-xl font-bold">Subsection</h3>

<!-- Text Colors -->
<p class="text-primary">Primary color text</p>
<p class="text-muted-foreground">Lighter text</p>
<p class="text-accent">Accent color text</p>
```

### Buttons
```html
<!-- Primary Button -->
<a href="page.html" class="btn btn-primary">Click Me</a>

<!-- Accent Button -->
<a href="page.html" class="btn btn-accent">Get in Touch</a>

<!-- Link Button -->
<a href="page.html" class="btn btn-link">Learn More →</a>
```

### Cards
```html
<div class="card">
  <h3 class="text-xl font-bold mb-3">Card Title</h3>
  <p class="text-muted-foreground">Card content</p>
</div>
```

### Grid Layouts
```html
<!-- 2 column grid on desktop, 1 column on mobile -->
<div class="grid md:grid-cols-2 gap-8">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<!-- 3 column grid -->
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Animations
All elements with `animate-on-scroll` class will fade in when scrolled into view:
```html
<div class="animate-on-scroll">
  This fades in when you scroll to it
</div>

<!-- Add delay for staggered effect -->
<div class="animate-on-scroll delay-1">Fades in first</div>
<div class="animate-on-scroll delay-2">Fades in second</div>
```

### Forms
```html
<form>
  <div class="form-group">
    <label class="form-label">Field Label</label>
    <input type="text" class="form-input" placeholder="Enter text" />
  </div>
  
  <div class="form-group">
    <label class="form-label">Select Field</label>
    <select class="form-select">
      <option>Option 1</option>
      <option>Option 2</option>
    </select>
  </div>
  
  <div class="form-group">
    <label class="form-label">Message</label>
    <textarea class="form-textarea" rows="5"></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Send</button>
</form>
```

---

## JavaScript Features

### Navigation
- Mobile menu toggle (automatically handled)
- Active link highlighting based on current page
- Smooth scroll navigation

### Scroll Animations
- Elements with `animate-on-scroll` class fade in on scroll
- Staggered animation delays using `delay-1`, `delay-2`, etc.

### Form Handling
- Contact form submission with visual feedback
- Success/error notifications
- Input validation

### How to Modify JavaScript
Edit `js/main.js` to:
- Change animation behavior
- Add custom form handling
- Modify navigation logic

---

## SEO & Meta Tags

Each page should have proper meta tags:
```html
<meta name="description" content="A brief description of the page content">
<title>Page Title - Hope For Vent Warriors</title>
```

---

## Responsive Design

The site is mobile-first and responsive:
- **Mobile:** Single column layout
- **Tablet (md):** 2 columns
- **Desktop (lg):** Full layout

Use these breakpoint classes:
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)

---

## Color Reference

- **Primary (Blue):** `#0ba5d8` - Main brand color
- **Accent (Orange):** `#ff9500` - Call-to-action color
- **Charity Sky (Light Blue):** `#e6f5fc` - Background highlights
- **Text Dark:** `#1f2530` - Main text
- **Text Light:** `#7a8590` - Secondary text

---

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

---

## Tips for Maintenance

1. **Keep images optimized:** Use tools like TinyPNG to compress images
2. **Test on mobile:** Always check how pages look on phones/tablets
3. **Update links:** When adding new pages, update navigation in `header.html`
4. **Backup:** Keep a backup of CSS variables and important content
5. **Consistency:** Use existing classes and patterns for new additions

---

## Need Help?

### Common Issues

**Forms not submitting?**
- The contact form currently shows a success message without actually sending
- To make it work, integrate with a backend service like Formspree, Netlify Forms, or EmailJS

**Images not showing?**
- Check if image path is correct
- Ensure image file exists in `assets/` folder
- Use relative paths like `assets/image.jpg`

**Page not appearing in navigation?**
- Add link to both desktop nav and mobile menu in `components/header.html`
- Make sure the file name matches the href attribute

---

## Deployment

To deploy:
1. Upload all files to your web hosting
2. Ensure file structure remains the same
3. For contact form, integrate with a backend service
4. Test all links and pages after uploading

---

## Future Enhancements

Consider adding:
- Backend form submission
- CMS integration for easier content updates
- Blog/News section
- Photo gallery
- Donation system
- Volunteer application form

---

**Last Updated:** February 2026  
**Version:** 1.0 - Pure HTML/CSS/JS Edition
