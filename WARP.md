# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This repository contains a professional website development proposal for two industrial clients: Solar Technical Company (K.S.A.) and Hudo Alsama Oil & Gas (U.A.E.). The proposal is built as a single-page HTML application with advanced interactive features, responsive design, and professional presentation standards.

## Repository Structure

- `index.html` - Main proposal document with embedded CSS, JavaScript, and complete content
- `index.backup.html` - Safety backup of the main file (maintained automatically)
- `.git/` - Version control tracking proposal iterations and updates

## Key Technologies & Architecture

### Frontend Stack
- **Pure HTML5** with semantic structure and accessibility considerations
- **Embedded CSS** using CSS Custom Properties for consistent theming
- **Vanilla JavaScript** for interactivity and dynamic content population
- **TailwindCSS** (CDN) for utility-first styling approach
- **Font Awesome 6.4.0** for professional iconography
- **Google Fonts** (Inter + Crimson Text) for typography hierarchy
- **Mermaid.js** for interactive diagrams and flowcharts

### Design System
The application uses a carefully crafted design system with CSS custom properties:
- `--solar-blue` / `--solar-blue-light` - Primary brand colors for Solar Technical Company
- `--hudo-green` / `--hudo-green-light` / `--hudo-green-dark` - Brand colors for Hudo Alsama
- `--accent-orange` - Highlight and call-to-action color
- `--neutral-[50-900]` - Comprehensive grayscale system for content hierarchy

### Interactive Features
- **Fixed Table of Contents** with scroll-based active section highlighting
- **Interactive Mermaid Diagrams** with pan, zoom, and touch controls
- **Smooth Scrolling** navigation with intersection observer animations
- **Responsive Grid Layouts** using CSS Grid and Flexbox
- **Touch-Optimized Controls** for mobile diagram interaction

## Configuration Management

### Dynamic Content Variables (Lines 2159-2174)
The proposal includes centralized configuration for easy updates:

```javascript
const PRICING = {
    static: {
        single: { min: 400, max: 800 },
        multi: { min: 1200, max: 1600, pages: "4-5" }
    },
    dynamic: {
        single: { min: 1200, max: 1600 },
        multi: { min: 1600, max: 2000 }
    }
};

const CONTACT = {
    email: "contact@sheriax.com",
    phone: "+91 7338923502",
    website: "https://sheriax.com"
};
```

These variables automatically populate elements with matching IDs (`static-single`, `dynamic-multi`, `contact-email`, etc.).

## Common Development Tasks

### Viewing the Proposal
```bash
# Open in default browser (macOS)
open index.html

# Or serve locally with Python
python3 -m http.server 8000
# Then navigate to http://localhost:8000
```

### Content Updates
- **Pricing Changes**: Modify the `PRICING` object in the configuration section
- **Contact Information**: Update the `CONTACT` object
- **Content Sections**: Edit HTML directly in the respective `<section>` elements
- **Styling**: Modify CSS custom properties in the `:root` selector or add custom styles

### Version Control Workflow
```bash
# Create backup before major changes
cp index.html index.backup.html

# Stage and commit changes
git add index.html
git commit -m "feat(proposal): describe your changes"

# Push to remote repository
git push origin main
```

### Testing Interactive Features
- **Diagram Controls**: Test zoom, pan, and reset functionality on Mermaid diagrams
- **Table of Contents**: Verify scroll-to-section and active highlighting
- **Responsive Design**: Test on various screen sizes (mobile, tablet, desktop)
- **Touch Interactions**: Verify mobile gesture support for diagrams

## Architecture Notes

### Single-File Architecture
This project intentionally uses a monolithic single-file approach for:
- **Portability**: Easy sharing and deployment without build dependencies
- **Self-Containment**: All resources except external CDNs are embedded
- **Version Control Simplicity**: Single file changes are easy to track and review

### Performance Considerations
- External CDN resources are loaded asynchronously where possible
- CSS and JavaScript are minified through careful organization
- Images use referrer policy restrictions for privacy
- Smooth scrolling and animations use hardware acceleration

### Accessibility Features
- Semantic HTML structure with proper heading hierarchy
- ARIA labels and roles for interactive elements
- Keyboard navigation support for all interactive features
- High contrast ratios in the color system
- Screen reader friendly content structure

## Browser Compatibility

The proposal is optimized for modern browsers supporting:
- ES6+ JavaScript features (const, arrow functions, template literals)
- CSS Grid and Flexbox layouts
- CSS Custom Properties (CSS Variables)
- Intersection Observer API
- Modern touch events for mobile interaction

## Client Customization

When adapting this proposal for other clients:
1. Update company names and industry-specific content in HTML sections
2. Modify the CSS color variables to match client brand colors
3. Replace the pricing structure in the JavaScript configuration
4. Update contact information in the `CONTACT` object
5. Adjust the Table of Contents to match new section structure
6. Replace industry-specific icons and imagery references

## File Size Considerations

The current `index.html` is approximately 2,200 lines and ~108KB, optimized for:
- Reasonable loading times over standard internet connections
- Complete offline functionality once loaded
- Professional presentation quality with rich interactive features
