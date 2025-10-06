import { c as createComponent, a as renderTemplate, m as maybeRenderHead, e as createAstro, r as renderComponent, f as renderSlot, b as renderHead, d as addAttribute } from './astro/server_BV2FCX53.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Footer, $ as $$Header } from './Footer_Dn6TFwqZ.mjs';
import 'clsx';
/* empty css                         */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$CookieBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Desktop Cookie Banner -->", `<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white border-t border-teal-400/40 py-4 px-6 shadow-lg z-50 hidden sm:flex items-center justify-between flex-wrap font-body" data-astro-cid-fzbxxtek> <!-- Message --> <p class="text-sm sm:text-base max-w-2xl leading-relaxed mb-3 sm:mb-0" data-astro-cid-fzbxxtek>
\u{1F36A} We use cookies to improve your experience, analyze traffic, and personalize content. 
    By clicking <strong data-astro-cid-fzbxxtek>\u201CAccept\u201D</strong>, you consent to our use of cookies as described in our
<a href="/cookies/" class="text-teal-400 underline hover:text-green-400" data-astro-cid-fzbxxtek>Cookies Policy</a>.
</p> <!-- Actions --> <div class="flex space-x-3 shrink-0" data-astro-cid-fzbxxtek> <button id="cookieAcceptBtn" class="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition" data-astro-cid-fzbxxtek>
Accept
</button> <button id="cookieRejectBtn" class="bg-gray-700 hover:bg-gray-800 text-gray-200 px-4 py-2 rounded-lg text-sm font-semibold transition" data-astro-cid-fzbxxtek>
Reject
</button> <button id="cookieManageBtn" class="bg-transparent text-teal-400 underline hover:text-green-400 text-sm font-semibold transition" data-astro-cid-fzbxxtek>
Manage
</button> </div> </div> <!-- Mobile Cookie Banner --> <div id="cookie-banner-mobile" class="fixed bottom-0 left-0 right-0 bg-black/90 text-white border-t border-teal-400/40 py-4 px-4 shadow-lg z-50 sm:hidden hidden" data-astro-cid-fzbxxtek> <p class="text-sm leading-relaxed" data-astro-cid-fzbxxtek>
We use cookies to improve your experience.
<a href="/cookies/" class="text-teal-400 underline hover:text-green-400" data-astro-cid-fzbxxtek>Learn more</a>.
</p> <div class="mt-3 flex justify-end space-x-3" data-astro-cid-fzbxxtek> <button id="cookieAcceptBtnMobile" class="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition" data-astro-cid-fzbxxtek>Accept</button> <button id="cookieRejectBtnMobile" class="bg-gray-700 hover:bg-gray-800 text-gray-200 px-3 py-1 rounded-lg text-sm font-semibold transition" data-astro-cid-fzbxxtek>Reject</button> </div> </div> <!-- \u2705 Functional Cookie Script (Runs Client-Side) --> <script client:load>
(function() {
  const banner = document.getElementById('cookie-banner');
  const bannerMobile = document.getElementById('cookie-banner-mobile');
  const acceptBtn = document.getElementById('cookieAcceptBtn');
  const rejectBtn = document.getElementById('cookieRejectBtn');
  const manageBtn = document.getElementById('cookieManageBtn');
  const acceptBtnMobile = document.getElementById('cookieAcceptBtnMobile');
  const rejectBtnMobile = document.getElementById('cookieRejectBtnMobile');

  // Helper: check if consent exists
  function hasConsent() {
    return localStorage.getItem('cookieConsent') !== null;
  }

  // Show the banner
  function showBanner() {
    banner?.classList.remove('hidden');
    bannerMobile?.classList.remove('hidden');
  }

  // Hide the banner
  function hideBanner() {
    banner?.classList.add('hidden');
    bannerMobile?.classList.add('hidden');
  }

  // Save user's choice in localStorage
  function saveConsent(status) {
    try {
      localStorage.setItem('cookieConsent', status);
      const prefs = {
        essential: true,
        analytics: status === 'accepted',
        marketing: status === 'accepted'
      };
      localStorage.setItem('cookiePreferences', JSON.stringify(prefs));

      // Notify other scripts (e.g., Google Analytics loader)
      window.dispatchEvent(new CustomEvent('cookiePreferencesSaved', { detail: prefs }));
    } catch (err) {
      console.warn('Cookie consent could not be saved:', err);
    }
  }

  // Button Handlers
  function handleAccept() {
    saveConsent('accepted');
    hideBanner();
  }

  function handleReject() {
    saveConsent('rejected');
    hideBanner();
  }

  function handleManage() {
    hideBanner();
    window.dispatchEvent(new CustomEvent('openCookieModal'));
  }

  // Event Bindings
  acceptBtn?.addEventListener('click', handleAccept);
  rejectBtn?.addEventListener('click', handleReject);
  manageBtn?.addEventListener('click', handleManage);
  acceptBtnMobile?.addEventListener('click', handleAccept);
  rejectBtnMobile?.addEventListener('click', handleReject);

  // Show on first visit
  if (!hasConsent()) {
    showBanner();
  }

  // Re-show banner if user clears consent
  window.addEventListener('storage', (e) => {
    if (e.key === 'cookieConsent' && e.newValue === null) {
      showBanner();
    }
  });
})();
<\/script> `])), maybeRenderHead());
}, "D:/daws/repos/optyp.github.io/src/components/CookieBanner.astro", void 0);

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
    ogImage = "https://optyp.com/images/og-banner.png",
    jsonLd
  } = Astro2.props;
  const canonicalUrl = Astro2.url.origin + Astro2.url.pathname;
  const siteName = "OPTYP";
  return renderTemplate(_b || (_b = __template(['<html lang="en" class="scroll-smooth" data-astro-cid-sckkx6r4> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><!-- =================== SEO Essentials =================== --><title>', '</title><meta name="description"', '><meta name="keywords"', '><meta name="author" content="OPTYP"><meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><meta name="google-site-verification" content="AbCdEfGHIJKlmno12345xyz"><!-- =================== Canonical & Locale =================== --><link rel="canonical"', '><meta property="og:locale" content="en_IN"><!-- =================== Open Graph =================== --><meta property="og:type" content="website"><meta property="og:site_name"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:url"', '><meta property="og:updated_time"', '><!-- =================== Twitter =================== --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@optyp"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- =================== Mobile & PWA =================== --><meta name="HandheldFriendly" content="true"><meta name="MobileOptimized" content="320"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><!-- =================== Colors & Theme =================== --><meta name="color-scheme" content="dark light"><meta name="theme-color" content="#47C6A2"><meta name="msapplication-TileColor" content="#47C6A2"><meta name="msapplication-config" content="/browserconfig.xml"><!-- =================== Preconnect / Prefetch =================== --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="dns-prefetch" href="https://fonts.googleapis.com"><link rel="dns-prefetch" href="https://www.googletagmanager.com"><link rel="preload" as="image" href="/images/logo.svg"><!-- =================== Fonts =================== --><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"><!-- =================== Favicons / Manifest (Custom Domain version) =================== --><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png"><link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png"><link rel="manifest" href="/site.webmanifest"><meta name="msapplication-config" content="/browserconfig.xml"><meta name="theme-color" content="#47C6A2"><meta name="msapplication-TileColor" content="#47C6A2"><!-- =================== Global Design Tokens =================== --><!-- =================== Global CSS =================== --><link rel="stylesheet" href="/styles/global.css"><!-- =================== Structured Data =================== --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@graph": [\n          {\n            "@type": "Organization",\n            "name": "OPTYP",\n            "url": "https://optyp.com",\n            "logo": "https://optyp.com/images/logo.svg",\n            "sameAs": [\n              "https://linkedin.com/company/optyp",\n              "https://instagram.com/optyp",\n              "https://facebook.com/optyp",\n              "https://twitter.com/optyp"\n            ],\n            "contactPoint": {\n              "@type": "ContactPoint",\n              "telephone": "+91-9848934274",\n              "contactType": "customer service"\n            },\n            "address": {\n              "@type": "PostalAddress",\n              "addressLocality": "Bengaluru",\n              "addressRegion": "Karnataka",\n              "addressCountry": "India"\n            }\n          },\n          {\n            "@type": "WebSite",\n            "url": "https://optyp.com",\n            "name": "OPTYP - Optimize Your Professionalism",\n            "potentialAction": {\n              "@type": "SearchAction",\n              "target": "https://optyp.com/?s={search_term_string}",\n              "query-input": "required name=search_term_string"\n            }\n          },\n          {\n            "@type": "Product",\n            "name": "Essentials Plan",\n            "description": "ATS Resume, LinkedIn & Naukri optimization to kickstart your career.",\n            "brand": { "@type": "Organization", "name": "OPTYP" },\n            "offers": {\n              "@type": "Offer",\n              "price": "999",\n              "priceCurrency": "INR",\n              "availability": "https://schema.org/InStock",\n              "url": "https://optyp.com/#plans"\n            }\n          },\n          {\n            "@type": "Product",\n            "name": "Professional Plan",\n            "description": "Complete career profile optimization with advanced resume + LinkedIn.",\n            "brand": { "@type": "Organization", "name": "OPTYP" },\n            "offers": {\n              "@type": "Offer",\n              "price": "6,999",\n              "priceCurrency": "INR",\n              "availability": "https://schema.org/InStock",\n              "url": "https://optyp.com/#plans"\n            }\n          },\n          {\n            "@type": "Product",\n            "name": "Elite Plan",\n            "description": "Premium optimization + portfolio website for standout professionals.",\n            "brand": { "@type": "Organization", "name": "OPTYP" },\n            "offers": {\n              "@type": "Offer",\n              "price": "29,999",\n              "priceCurrency": "INR",\n              "availability": "https://schema.org/InStock",\n              "url": "https://optyp.com/#plans"\n            }\n          }\n        ]\n      }\n    <\/script><!-- =================== Page-Specific JSON-LD =================== -->', "", '</head> <body class="bg-[linear-gradient(180deg,var(--bg-900),var(--bg-800))] text-white font-body leading-relaxed antialiased transition-colors duration-300" data-astro-cid-sckkx6r4> <a href="#main-content" class="sr-only focus:not-sr-only p-2 bg-[color:var(--accent-1)] text-black rounded-md shadow-lg" data-astro-cid-sckkx6r4>\nSkip to main content\n</a> <!-- =================== Header =================== --> ', ' <!-- =================== Main Content =================== --> <main id="main-content" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="main" data-astro-cid-sckkx6r4> ', " </main> <!-- =================== Cookie Banner =================== --> ", " <!-- =================== Footer & Floating Contact =================== --> ", " ", ` <!-- =================== Animations =================== -->  <!-- =================== Scroll Reveal =================== --> <script>
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
    <\/script> <!-- =================== Cookie Consent (Analytics) =================== --> <script>
      window.addEventListener('cookiePreferencesSaved', (e) => {
        if (e.detail.analytics) {
          const s = document.createElement('script');
          s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
          s.async = true;
          document.head.appendChild(s);
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        }
      });
    <\/script> </body> </html>
f`])), title, addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(canonicalUrl, "href"), addAttribute(siteName, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(canonicalUrl, "content"), addAttribute((/* @__PURE__ */ new Date()).toISOString(), "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), jsonLd && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n        {JSON.stringify(jsonLd)}\n      <\/script>']))), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "CookieBanner", $$CookieBanner, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "FloatingContactIcon", $$FloatingContactIcon, { "data-astro-cid-sckkx6r4": true }));
}, "D:/daws/repos/optyp.github.io/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
