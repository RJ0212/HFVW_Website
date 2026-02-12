# Getting Started - Installation & Setup Guide

## What You Have

A complete, production-ready pure HTML/CSS/JavaScript website for Hope For Vent Warriors. No frameworks, no build tools, no dependencies. Just clean, maintainable code.

---

## Step 1: File Structure Overview

After conversion, all files are in the `html-version/` folder:

```
html-version/
├── index.html                 # 🏠 Home page
├── warriors.html              # 💪 Vent Warriors stories
├── who-we-are.html            # ℹ️ About us
├── what-we-do.html            # 📋 Programs & services
├── contact.html               # 📧 Contact form
├── 404.html                   # ❌ Error page
├── template.html              # 📝 Template for new pages
├── assets/                    # 🖼️ Images (add yours here)
├── components/                # 🧩 Reusable header & footer
├── css/                       # 🎨 Stylesheets
├── js/                        # ⚙️ JavaScript
├── README.md                  # 📚 Full documentation
├── QUICK-REFERENCE.md         # ⚡ Quick update guide
└── SETUP.md                   # This file

```

---

## Step 2: Opening the Site Locally

### Option A: Using Python (Recommended)
Python comes pre-installed on most computers.

1. Open Command Prompt / Terminal
2. Navigate to the `html-version` folder:
   ```
   cd path/to/html-version
   ```
3. Run:
   ```
   python -m http.server 8000
   ```
4. Open your browser and go to: `http://localhost:8000`

### Option B: Using Node.js
If you have Node.js installed:
```
npx http-server
```

### Option C: Just Open HTML Files
Simply double-click any `.html` file to open it in your browser. This works but some features might not work without a local server.

---

## Step 3: Replace Your Images

### Step 1: Prepare Your Images
Get high-quality images for:
- **hero-image.jpg** - Home page hero (1920×1080px recommended)
- **warrior-child.jpg** - Warriors page hero (1920×1080px)
- **medical-team.jpg** - Who We Are hero (1920×1080px)
- **what-we-do.jpg** - What We Do hero (1920×1080px)
- **children-community.jpg** - Community image (1000×750px)

**Pro Tip:** Optimize images with [TinyPNG](https://tinypng.com) to reduce file sizes.

### Step 2: Replace Files
Replace the image files in the `assets/` folder with your images. Keep the same filenames.

---

## Step 4: Update Your Content

### Quick Content Updates
See `QUICK-REFERENCE.md` for:
- How to change phone numbers
- How to update team information
- How to add new warrior stories
- How to change colors
- How to modify any text

### Step-by-Step Example: Change Your Phone Number

1. Open `components/header.html`
2. Find: `+63 917 000 0000`
3. Replace with your phone number
4. Do the same in `components/footer.html` and `contact.html`

---

## Step 5: Add Your Branding

### Change Brand Colors
Open `css/styles.css` and find:
```css
:root {
  --primary: #0ba5d8;      /* Change this for main color */
  --accent: #ff9500;       /* Change this for accent color */
  --charity-sky: #e6f5fc;  /* Change this for light backgrounds */
}
```

### Change Logo/Organization Name
Search for "Hope For Vent Warriors" and "Charity Group · Philippines" and update:
- `components/header.html` (appears twice - desktop and mobile nav)
- `components/footer.html`
- HTML page `<title>` tags

---

## Step 6: Create a New Page (Optional)

### Fastest Way: Use the Template

1. Copy `template.html` to `my-new-page.html`
2. Edit the content inside
3. Add link to navigation in `components/header.html`:
   ```html
   <a href="my-new-page.html" class="nav-link">My New Page</a>
   ```
   (Add in BOTH places: desktop nav AND mobile menu)

See Full Documentation in `README.md` for complete page creation guide.

---

## Step 7: Deploy to the Web

### Option A: GitHub Pages (Free)
1. Upload all files to a GitHub repository
2. Enable GitHub Pages in repo settings
3. Your site is now live on `yourusername.github.io/repository-name`

### Option B: Web Hosting (Paid)
1. Purchase hosting from GoDaddy, Bluehost, HostGator, etc.
2. Upload files via FTP
3. Points domain to your hosting
4. Done!

### Option C: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `html-version` folder
3. Your site is live with automatic HTTPS

---

## Step 8: Setup Contact Form (Important!)

The contact form currently shows a success message but **doesn't actually send emails**.

### To Make It Work, Choose One:

#### Option 1: Formspree (Easiest)
1. Go to [formspree.io](https://formspree.io)
2. Create a new form with your email
3. Update form action in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

#### Option 2: Netlify Forms
1. Deploy to Netlify (see Step 7)
2. Add `netlify` attribute to form:
   ```html
   <form netlify>
   ```

#### Option 3: EmailJS
1. Go to [emailjs.com](https://emailjs.com)
2. Create an account and get credentials
3. Add to `js/main.js` and customize form handling

---

## Understanding the Code

### HTML Files
- Contains page structure and content
- Easy to edit text and add sections
- Links to CSS and JavaScript files

### CSS (`css/styles.css`)
- All styling and design
- Uses CSS variables for colors
- Utility classes for quick styling (like Tailwind)
- Mobile-responsive breakpoints

### JavaScript (`js/main.js`)
- Handles navigation menu
- Scroll animations
- Form submission
- No dependencies, pure vanilla JS

---

## Common Tasks

### Change Text on a Page
1. Open the HTML file
2. Find the text
3. Edit it
4. Save and refresh

### Change Colors
1. Open `css/styles.css`
2. Find `:root { ... }`
3. Change the color hex values
4. Save and refresh

### Add a New Page
1. Copy `template.html`
2. Rename and edit it
3. Add link to `components/header.html`
4. Done!

### Update Images
1. Replace files in `assets/` folder
2. Keep same filename
3. No code changes needed

---

## Troubleshooting

### Images Not Showing
- Check file path is correct
- Ensure file exists in `assets/` folder
- Use relative paths: `assets/filename.jpg`

### Form Not Submitting
- You need to set up a form handler (see Step 8)
- Currently it only shows a success message

### Page Not in Navigation
- Add link to **both** desktop menu AND mobile menu in `components/header.html`

### Styles Look Wrong
- Check if browser cached old CSS
- Do a hard refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`

### Links Don't Work
- Check filename matches (case-sensitive)
- Make sure HTML file exists

---

## Best Practices

✅ **DO:**
- Keep images optimized and reasonably sized
- Test on mobile devices
- Back up important files
- Use consistent naming conventions
- Keep similar pages using same structure

❌ **DON'T:**
- Edit CSS for simple text changes (edit HTML instead)
- Use images larger than 5MB
- Remove important divs or classes without understanding them
- Forget to update links when renaming pages

---

## File Size Guide

For optimal performance:
- **Images:** 200-500KB each
- **CSS:** ~30KB
- **JavaScript:** ~3KB
- **Total:** ~1-3MB

---

## Browser Support

The site works on:
- Chrome & Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari & Chrome

---

## Next Steps

1. ✅ Review all pages and update content
2. ✅ Replace images with your own
3. ✅ Update contact information
4. ✅ Change colors if needed
5. ✅ Set up contact form
6. ✅ Test everything
7. ✅ Deploy to web
8. ✅ Share with your team

---

## Need Help?

### Check These Files First
- `README.md` - Full documentation
- `QUICK-REFERENCE.md` - Fast content updates
- `template.html` - Example of page structure

### Where to Find Things
| Task | See File |
|------|----------|
| Update contact info | `components/header.html`, `footer.html`, `contact.html` |
| Change colors | `css/styles.css` |
| Add navigation link | `components/header.html` |
| Edit page content | Individual HTML files |
| Create new page | `template.html` |

---

## Maintenance Checklist

### Weekly
- Check contact form submissions
- Review and respond to inquiries

### Monthly
- Update statistics if they change
- Review and update content
- Check for broken links

### Quarterly
- Update warrior stories
- Refresh images if needed
- Review site performance

---

**You're all set! Your pure HTML/CSS/JavaScript website is ready to use and maintain.** 🎉

For detailed instructions, see `README.md`  
For quick updates, see `QUICK-REFERENCE.md`
