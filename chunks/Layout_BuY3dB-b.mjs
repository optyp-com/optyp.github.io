import { c as createComponent, m as maybeRenderHead, b as renderTemplate, e as createAstro, a as renderComponent, f as renderSlot, r as renderHead, d as addAttribute } from './astro/server_Dj1AFl_g.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Footer, $ as $$Header } from './Footer_DGzmbCsT.mjs';
import 'clsx';
/* empty css                              */

const $$FloatingContactIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed bottom-8 right-8 z-50" data-astro-cid-wohugwry> <!-- WhatsApp Floating Button --> <a href="https://wa.me/919848934274" aria-label="Chat with OPTYP on WhatsApp" target="_blank" rel="noopener noreferrer" class="whatsapp-btn flex items-center justify-center w-14 h-14 rounded-full
            bg-white/10 backdrop-blur-md border border-white/20 
            shadow-lg text-[#25D366] 
            hover:shadow-xl hover:shadow-[#25D366]/50 
            transition-all duration-300 transform hover:scale-110 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]" data-astro-cid-wohugwry> <!-- WhatsApp Icon --> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="h-7 w-7" data-astro-cid-wohugwry> <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.73 5.566 2.117 7.992L0 32l8.32-2.176A15.9 15.9 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.09c-2.588 0-5.105-.676-7.293-1.96l-.523-.309-4.934 1.29 1.32-4.816-.34-.547A12.84 12.84 0 0 1 3.09 16C3.09 9.29 9.29 3.09 16 3.09c6.71 0 12.91 6.2 12.91 12.91 0 6.71-6.2 13.09-12.91 13.09z" data-astro-cid-wohugwry></path> <path d="M24.32 19.68c-.34-.17-2.02-1-2.33-1.11-.31-.12-.54-.17-.77.17-.23.34-.89 1.11-1.09 1.34-.2.23-.4.26-.74.09-.34-.17-1.43-.53-2.73-1.68-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.85-1.06-2.53-.28-.67-.57-.58-.77-.59l-.66-.01c-.23 0-.6.09-.91.43-.31.34-1.19 1.16-1.19 2.84s1.22 3.29 1.39 3.52c.17.23 2.4 3.66 5.82 5.13.81.35 1.44.55 1.93.7.81.26 1.55.22 2.14.14.65-.1 2.02-.83 2.31-1.63.28-.8.28-1.49.2-1.63-.09-.14-.31-.23-.65-.4z" data-astro-cid-wohugwry></path> </svg> </a> </div> `;
}, "D:/daws/repos/optyp.github.io/src/components/FloatingContactIcon.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://optyp.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "OPTYP - Optimize Your Professionalism",
    keywords = "career optimization, resume service, LinkedIn optimization, Naukri profile, Upwork profile, Fiverr profile, portfolio optimization, OPTYP",
    ogImage = "https://optyp.github.io/images/og-banner.png",
    jsonLd
  } = Astro2.props;
  return renderTemplate(_b || (_b = __template(['<html lang="en" class="scroll-smooth" data-astro-cid-sckkx6r4> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><!-- Title & SEO Description --><title>', '</title><meta name="description"', '><meta name="keywords"', '><meta name="author" content="OPTYP"><!-- Robots / Crawling --><meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><!-- Mobile Optimization --><meta name="HandheldFriendly" content="true"><meta name="MobileOptimized" content="320"><meta name="apple-mobile-web-app-capable" content="yes"><!-- Canonical --><link rel="canonical" href="https://optyp.github.io"><!-- Open Graph (Facebook/LinkedIn Preview) --><meta property="og:type" content="website"><meta property="og:site_name" content="OPTYP"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url" content="https://optyp.github.io"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@optyp"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Theme / Color --><meta name="color-scheme" content="dark light"><meta name="theme-color" content="#00ffd1"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"><!-- Favicon / Manifest --><link rel="icon" href="/favicon.ico"><link rel="apple-touch-icon" href="/icons/icon-192.png"><link rel="manifest" href="/manifest.json"><!-- Global Design Tokens --><!-- Global CSS --><link rel="stylesheet" href="/styles/global.css"><!-- Default Structured Data (Organization + Plans) --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@graph": [\n          {\n            "@type": "Organization",\n            "name": "OPTYP",\n            "url": "https://optyp.github.io",\n            "logo": "https://optyp.github.io/images/logo.svg",\n            "sameAs": [\n              "https://linkedin.com/company/optyp",\n              "https://instagram.com/optyp",\n              "https://facebook.com/optyp",\n              "https://twitter.com/optyp"\n            ],\n            "contactPoint": {\n              "@type": "ContactPoint",\n              "telephone": "+91-9848934274",\n              "contactType": "customer service"\n            }\n          },\n          {\n            "@type": "Product",\n            "name": "Essentials Plan",\n            "description": "ATS Resume, LinkedIn & Naukri optimization to kickstart your career.",\n            "brand": { "@type": "Organization", "name": "OPTYP" },\n            "offers": {\n              "@type": "Offer",\n              "price": "499",\n              "priceCurrency": "INR",\n              "availability": "https://schema.org/InStock",\n              "url": "https://optyp.github.io/#plans"\n            }\n          },\n          {\n            "@type": "Product",\n            "name": "Professional Plan",\n            "description": "Complete career profile optimization with advanced resume + LinkedIn.",\n            "brand": { "@type": "Organization", "name": "OPTYP" },\n            "offers": {\n              "@type": "Offer",\n              "price": "749",\n              "priceCurrency": "INR",\n              "availability": "https://schema.org/InStock",\n              "url": "https://optyp.github.io/#plans"\n            }\n          },\n          {\n            "@type": "Product",\n            "name": "Elite Plan",\n            "description": "Premium optimization + portfolio website for standout professionals.",\n            "brand": { "@type": "Organization", "name": "OPTYP" },\n            "offers": {\n              "@type": "Offer",\n              "price": "999",\n              "priceCurrency": "INR",\n              "availability": "https://schema.org/InStock",\n              "url": "https://optyp.github.io/#plans"\n            }\n          }\n        ]\n      }\n    <\/script><!-- Page-Specific JSON-LD (Injectable via props) -->', "", '</head> <body class="bg-[linear-gradient(180deg,var(--bg-900),var(--bg-800))] text-white font-body leading-relaxed antialiased transition-colors duration-300" data-astro-cid-sckkx6r4> <!-- Accessibility: Skip link --> <a href="#main-content" class="sr-only focus:not-sr-only p-2 bg-[color:var(--accent-1)] text-black rounded-md shadow-lg" data-astro-cid-sckkx6r4>\nSkip to main content\n</a> <!-- Header --> ', ' <!-- Main content --> <main id="main-content" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="main" data-astro-cid-sckkx6r4> ', " </main> <!-- Footer & Floating contact --> ", " ", ` <!-- Animation Styles -->  <!-- Scroll Reveal Script --> <script>
      (function () {
        const revealEls = document.querySelectorAll(".animate-fadeInUp");
        if (!('IntersectionObserver' in window)) {
          revealEls.forEach(el => el.classList.add('visible'));
          return;
        }
        const revealObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.18 }
        );
        revealEls.forEach((el) => revealObserver.observe(el));
      }());
    <\/script> </body> </html>`])), title, addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), jsonLd && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n        {JSON.stringify(jsonLd)}\n      <\/script>']))), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "FloatingContactIcon", $$FloatingContactIcon, { "data-astro-cid-sckkx6r4": true }));
}, "D:/daws/repos/optyp.github.io/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
