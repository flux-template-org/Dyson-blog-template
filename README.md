# Dyson-Inspired Astro Blog Template

A modern, minimal, and highly customizable blog and portfolio template built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). This template is inspired by Dyson’s clean design language, focusing on clarity, performance, and a seamless user experience.

## Features

- **Minimal & Modern Design:** Clean layouts and typography for maximum readability.
- **Responsive Components:** Includes Bento cards, split layouts, two-column sections, and more.
- **Dynamic Content:** Data-driven pages and components for easy customization.
- **Blog System:** Journal index, individual post pages, categories, tags, and author support.
- **Smart Components:** Reusable, dynamic Navbar, Footer, Breadcrumb, CTA, and more.
- **Performance Optimized:** High Lighthouse scores for performance, accessibility, and SEO.
- **Dark/Light Mode Ready:** Easily adaptable for dual-mode experiences.
- **Privacy First:** Includes privacy policy and imprint pages.
- **Easy Deployment:** Ready for Netlify, Vercel, or your favorite static host.

## File Structure

```
src/
├── components/
│   ├── cards/
│   ├── global/
│   ├── AsymmetricLayout.astro
│   ├── SplitLayout.astro
│   ├── TwoColumnLayout.astro
│   └── Breadcrumb.astro
├── data/
├── layout/
├── pages/
└── styles/
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Customize your content:**
   Edit the files in `/data` and `/pages` to update site content, navigation, and blog posts.

## Customization

- Update navigation and footer in `/data/navigation.json` and `/data/footer.json`.
- Add or edit blog posts in `/data/journal.json` and `/pages/journal/[slug].astro`.
- Adjust styles in `/styles/global.css` or extend with Tailwind.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Astro and Tailwind CSS.
