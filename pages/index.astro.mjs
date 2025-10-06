/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, a as renderTemplate, d as addAttribute, e as createAstro, r as renderComponent } from '../chunks/astro/server_BV2FCX53.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BaoBAkGq.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$About } from '../chunks/About_B8p3KIRR.mjs';
import { $ as $$Services } from '../chunks/Services_D3QFOr9z.mjs';
import { $ as $$Contact } from '../chunks/Contact_CBszkrkj.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative flex items-center justify-center min-h-[90vh] overflow-hidden" role="banner" data-astro-cid-bbe6dxrz> <!-- Background with animated gradient --> <div class="absolute inset-0 -z-10" data-astro-cid-bbe6dxrz> <div class="w-full h-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 animate-gradient-x" data-astro-cid-bbe6dxrz></div> <div class="absolute inset-0 bg-black/30" data-astro-cid-bbe6dxrz></div> </div> <div class="container-custom md:pl-8" data-astro-cid-bbe6dxrz> <div class="flex flex-col items-center text-center md:grid md:grid-cols-2 md:gap-12" data-astro-cid-bbe6dxrz> <!-- Text Content --> <div aria-label="OPTYP Hero" class="mb-10 md:mb-0" data-astro-cid-bbe6dxrz> <div class="glass-card p-6 sm:p-8 inline-block transition-all duration-500" data-astro-cid-bbe6dxrz> <h1 id="hero-heading" role="heading" aria-level="1" class="animate-fadeInUp [animation-delay:0.1s] text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold leading-tight drop-shadow-lg" data-astro-cid-bbe6dxrz> <span class="text-white" data-astro-cid-bbe6dxrz>Optimize Your</span> <span class="text-[#47C6A2]" data-astro-cid-bbe6dxrz>Professionalism</span> </h1> <p class="animate-fadeInUp [animation-delay:0.3s] mt-4 text-lg sm:text-xl text-white" data-astro-cid-bbe6dxrz>
Get ATS Resume, LinkedIn, Job portal, Freelancing portal, GitHub, and Portfolio optimization that makes you stand out worldwide.
</p> <!-- CTAs --> <div class="animate-fadeInUp [animation-delay:0.5s] mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start" data-astro-cid-bbe6dxrz> <a href="#contact" onclick="openContactForm(); return false;" aria-label="Open contact form to get started" class="glass-btn px-6 py-3 rounded-xl font-semibold shadow-lg text-center pulse-cta" data-astro-cid-bbe6dxrz>
Get Started
</a> <a href="#plans" aria-label="View our pricing plans" class="px-6 py-3 rounded-xl border border-white/60 text-white font-semibold 
              hover:bg-white/10 hover:scale-105 hover:shadow-lg transition-all" data-astro-cid-bbe6dxrz>
View Plans
</a> </div> </div> </div> <!-- Right Side (Image or Illustration) --> <div class="flex justify-center md:justify-end animate-fadeInUp [animation-delay:0.7s] float-sway" data-astro-cid-bbe6dxrz> <img src="/images/illu.svg" alt="Illustration of career growth and professional success" class="w-64 sm:w-80 md:w-full max-w-md drop-shadow-2xl" loading="lazy" data-astro-cid-bbe6dxrz> </div> </div> </div> <!-- Scroll Down Indicator --> <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce" data-astro-cid-bbe6dxrz> <a href="#about" aria-label="Scroll down to about section" class="group" data-astro-cid-bbe6dxrz> <svg class="w-8 h-8 text-white opacity-80 group-hover:text-primary-200 group-hover:opacity-100 transition-all drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-bbe6dxrz></path> </svg> </a> </div> <!-- Styles -->  </section>`;
}, "D:/daws/repos/optyp.github.io/src/components/Hero.astro", void 0);

// src/data/plans.js
const plans = [
  {
    name: "Essentials",
    originalPrice: "₹1,999 ($25)",
    price: "₹999 ($12)",
    features: [
      "ATS Resume",
      "LinkedIn Optimization",
      "Naukri Optimization",
      "Indeed Optimization",
    ],
  },
  {
    name: "Freelancer Pro",
    originalPrice: "₹14,999 ($169)",
    price: "₹6,999 ($79)",
    features: [
      "Essentials plan +",
      "GitHub Optimization",
      "Upwork Optimization",
      "Fiverr Optimization",
      "Portfolio Creation",
    ],
  },
  {
    name: "Elite",
    originalPrice: "₹59,999 ($676)",
    price: "₹29,999 ($339)",
    features: [
      "Freelancer Pro plan +",
      "Toptal Optimization",
      "Personal Branding",
      "Social Media Optimization",
      "30 Days Content Calendar",
      "100 Days Profile Analytics",
      "Ongoing Reputation Monitoring",
    ],
  },
  
      {
  name: "Individual Services",
  price: "Flexible",
  features: [
    { name: "ATS Resume Crafting", oldPrice: "₹599 ($8)", newPrice: "₹299 ($4)" },
    { name: "Naukri Optimization", oldPrice: "₹599 ($8)", newPrice: "₹299 ($4)" },
    { name: "Indeed Optimization", oldPrice: "₹599 ($8)", newPrice: "₹299 ($4)" },
    { name: "GitHub Optimization", oldPrice: "₹599 ($8)", newPrice: "₹299 ($4)" },
    { name: "LinkedIn Optimization", oldPrice: "₹1,599 ($19)", newPrice: "₹799 ($9)" },
    { name: "Portfolio Website", oldPrice: "₹3,999 ($45)", newPrice: "₹1,999 ($23)" },
    { name: "Fiverr Optimization", oldPrice: "₹4,999 ($57)", newPrice: "₹2,499 ($29)" },
    { name: "Upwork Optimization", oldPrice: "₹5,999 ($68)", newPrice: "₹2,999 ($34)" },
    { name: "Toptal Optimization", oldPrice: "₹14,999 ($169)", newPrice: "₹6,999 ($79)" },
  ],
}
  
];

const $$Plans = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="plans" class="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white" data-astro-cid-bnzs7wvs> <div class="container mx-auto px-6" data-astro-cid-bnzs7wvs> <!-- Header --> <div class="text-center mb-12" data-astro-cid-bnzs7wvs> <h2 class="text-4xl sm:text-5xl font-extrabold mb-4" data-astro-cid-bnzs7wvs>
Our <span class="text-teal-400" data-astro-cid-bnzs7wvs>Plans</span> </h2> <p class="text-lg text-gray-300" data-astro-cid-bnzs7wvs>Flexible options tailored to your career goals</p> <div class="w-24 h-1 bg-gradient-to-r from-teal-400 to-green-500 mx-auto mt-6 rounded-full" data-astro-cid-bnzs7wvs></div> <!-- Offer Banner --> <div class="mt-6 inline-block bg-teal-500/10 border border-teal-400 text-teal-300 px-4 py-2 rounded-lg font-semibold text-sm animate-pulse" data-astro-cid-bnzs7wvs>
🎉 Flat 50% OFF on all plans — Limited Time!
</div> </div> <!-- Top 3 Plans --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-astro-cid-bnzs7wvs> ${plans.slice(0, 3).map((plan, idx) => renderTemplate`<div${addAttribute(`glass-box rounded-xl p-8 flex flex-col justify-between hover:scale-105 transition duration-300 shadow-lg relative ${idx === 1 ? "border border-teal-400" : ""}`, "class")} data-astro-cid-bnzs7wvs> ${idx === 1 && renderTemplate`<span class="absolute top-4 right-4 bg-teal-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md" data-astro-cid-bnzs7wvs>
Best Value
</span>`} <div data-astro-cid-bnzs7wvs> <h3 class="text-2xl font-bold text-teal-300 mb-4" data-astro-cid-bnzs7wvs>${plan.name}</h3> <ul class="space-y-3 mb-6 text-gray-300" data-astro-cid-bnzs7wvs> ${plan.features.map((feature) => renderTemplate`<li class="flex items-start gap-2" data-astro-cid-bnzs7wvs> <svg class="w-5 h-5 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-bnzs7wvs> <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-astro-cid-bnzs7wvs></path> </svg> <span data-astro-cid-bnzs7wvs>${feature}</span> </li>`)} </ul> </div> <div class="mt-6 text-center" data-astro-cid-bnzs7wvs> <p class="text-gray-400 text-sm line-through" data-astro-cid-bnzs7wvs>${plan.originalPrice}</p> <p class="text-2xl font-extrabold text-white" data-astro-cid-bnzs7wvs>${plan.price}</p> <button onclick="openContactForm()" class="mt-6 w-full bg-teal-500 hover:bg-teal-400 text-black font-semibold py-3 rounded-lg shadow-md transition duration-300 hover:scale-105" data-astro-cid-bnzs7wvs>
Get Started
</button> </div> </div>`)} </div> <!-- Individual Services (Full Width) --> <div class="glass-box rounded-xl p-8" data-astro-cid-bnzs7wvs> <h3 class="text-2xl font-bold text-teal-300 mb-6 text-center" data-astro-cid-bnzs7wvs>Individual Services</h3> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" data-astro-cid-bnzs7wvs> ${plans[3].features.map((service) => renderTemplate`<div class="flex flex-col justify-between bg-black/30 p-4 rounded-lg border border-white/10 hover:border-teal-400 transition hover:scale-105" data-astro-cid-bnzs7wvs> <div data-astro-cid-bnzs7wvs> <span class="text-gray-200 font-medium" data-astro-cid-bnzs7wvs>${service.name}</span> <div class="mt-2 text-sm" data-astro-cid-bnzs7wvs> <span class="line-through text-gray-500" data-astro-cid-bnzs7wvs>${service.oldPrice}</span> <span class="ml-2 text-teal-400 font-semibold" data-astro-cid-bnzs7wvs>${service.newPrice}</span> </div> </div> <button onclick="openContactForm()" class="mt-4 bg-teal-500 hover:bg-teal-400 text-black font-semibold py-2 rounded-md shadow-md transition duration-300 hover:scale-105" data-astro-cid-bnzs7wvs>
Get Started
</button> </div>`)} </div> </div> </div>  </section>`;
}, "D:/daws/repos/optyp.github.io/src/components/Plans.astro", void 0);

const $$Astro = createAstro("https://optyp.com");
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const { testimonials } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="testimonials" class="relative py-20 lg:py-28 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden" data-astro-cid-aadlzisc> <div class="container mx-auto max-w-6xl px-6 text-center relative z-10" data-astro-cid-aadlzisc> <!-- Section Heading --> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-white" data-astro-cid-aadlzisc>
News From Our <span class="text-[#47C6A2]" data-astro-cid-aadlzisc>Clients Worldwide</span> </h2> <div class="w-24 h-1 bg-gradient-to-r from-[#47C6A2] to-[#2F9E7F] mx-auto mb-10 rounded-full shadow-lg" data-astro-cid-aadlzisc></div> <!-- Intro --> <p class="text-gray-300 text-lg mb-6 max-w-4xl mx-auto" data-astro-cid-aadlzisc>
We have successfully optimized over
<span class="font-semibold text-[#47C6A2]" data-astro-cid-aadlzisc>500+ professional profiles</span>
across multiple countries, empowering careers globally.
</p> <p class="mb-12 text-base sm:text-lg font-medium text-gray-400 max-w-3xl mx-auto" data-astro-cid-aadlzisc> <strong class="text-[#2F9E7F]" data-astro-cid-aadlzisc>We value your privacy.</strong><br data-astro-cid-aadlzisc>
Your personal and professional details are never disclosed.  
      Confidentiality and trust are the foundation of our service.
</p> <!-- Swiper Carousel --> ${renderComponent($$result, "swiper-container", "swiper-container", { "class": "pb-16", "space-between": "30", "slides-per-view": "1", "autoplay-delay": "4000", "autoplay-disable-on-interaction": "false", "pagination": "true", "navigation": "true", "loop": "true", "breakpoints": '{"768":{"slidesPerView":2},"1024":{"slidesPerView":3}}', "data-astro-cid-aadlzisc": true }, { "default": () => renderTemplate` ${testimonials.map(({ quote, profession, location }) => renderTemplate`${renderComponent($$result, "swiper-slide", "swiper-slide", { "data-astro-cid-aadlzisc": true }, { "default": () => renderTemplate` <blockquote class="relative group glass-card p-8 rounded-2xl transition-all duration-500 hover:scale-105" data-astro-cid-aadlzisc> <!-- Profile Icon --> <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-[#47C6A2] to-[#2F9E7F] flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500" data-astro-cid-aadlzisc> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-black animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-aadlzisc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9.969 9.969 0 0112 15c2.21 0 4.243.72 5.879 1.929M15 11a3 3 0 11-6 0 3 0 016 0z" data-astro-cid-aadlzisc></path> </svg> </div> <!-- Quote --> <p class="text-gray-200 italic mb-6 text-lg leading-relaxed" data-astro-cid-aadlzisc>
"${quote}"
</p> <footer class="text-sm font-bold text-[#47C6A2] uppercase tracking-wide" data-astro-cid-aadlzisc> ${profession}, ${location} </footer> </blockquote> ` })}`)} ` })} <!-- Navigation Arrows --> <div class="swiper-button-prev hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10" data-astro-cid-aadlzisc></div> <div class="swiper-button-next hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10" data-astro-cid-aadlzisc></div> </div> </section> <!-- Swiper Bundle -->  `;
}, "D:/daws/repos/optyp.github.io/src/components/Testimonials.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$FAQHome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section id="faq" class="relative py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white" data-astro-cid-alcrz2gh> <div class="container mx-auto max-w-5xl text-center" data-astro-cid-alcrz2gh> <!-- Section Heading --> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-wide-heading" data-astro-cid-alcrz2gh>\nFrequently Asked Questions\n</h2> <div class="w-20 h-1 bg-gradient-to-r from-[#47C6A2] to-[#2F9E7F] mx-auto mb-10 rounded-full shadow-sm" data-astro-cid-alcrz2gh></div> <p class="text-gray-300 mb-12 max-w-xl mx-auto text-lg font-medium" data-astro-cid-alcrz2gh>\nQuick answers to the most common questions about our resume and profile services.\n</p> <!-- FAQ Items --> <div class="space-y-6 text-left" data-astro-cid-alcrz2gh> <!-- FAQ 1 --> <div class="faq-card group glass-box transition duration-500 hover:scale-[1.02] hover:shadow-xl" data-astro-cid-alcrz2gh> <button class="faq-question w-full text-left p-6 font-bold text-lg flex justify-between items-center text-white" aria-expanded="false" aria-controls="faq1" id="faq-btn-1" data-astro-cid-alcrz2gh> <span data-astro-cid-alcrz2gh>How does the process work after I sign up?</span> <svg class="w-6 h-6 transform transition-transform duration-300 text-[#47C6A2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-alcrz2gh> <path d="M19 9l-7 7-7-7" data-astro-cid-alcrz2gh></path> </svg> </button> <div id="faq1" class="faq-answer max-h-0 overflow-hidden transition-all duration-500 px-6 text-gray-300 text-base" data-astro-cid-alcrz2gh> <p class="py-4" data-astro-cid-alcrz2gh>\nAfter purchase, you\u2019ll receive a short questionnaire. Our team reviews your details, optimizes your profiles/resume, and delivers the first draft within 24\u201348 hours. You\u2019ll then have time to request revisions (based on your plan).\n</p> </div> </div> <!-- FAQ 2 --> <div class="faq-card group glass-box transition duration-500 hover:scale-[1.02] hover:shadow-xl" data-astro-cid-alcrz2gh> <button class="faq-question w-full text-left p-6 font-bold text-lg flex justify-between items-center text-white" aria-expanded="false" aria-controls="faq2" id="faq-btn-2" data-astro-cid-alcrz2gh> <span data-astro-cid-alcrz2gh>How long does the delivery process take?</span> <svg class="w-6 h-6 transform transition-transform duration-300 text-[#47C6A2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-alcrz2gh> <path d="M19 9l-7 7-7-7" data-astro-cid-alcrz2gh></path> </svg> </button> <div id="faq2" class="faq-answer max-h-0 overflow-hidden transition-all duration-500 px-6 text-gray-300 text-base" data-astro-cid-alcrz2gh> <p class="py-4" data-astro-cid-alcrz2gh>\nMost projects are completed within <strong data-astro-cid-alcrz2gh>24\u201348 hours</strong>. Elite plan customers receive priority processing.\n</p> </div> </div> <!-- FAQ 3 --> <div class="faq-card group glass-box transition duration-500 hover:scale-[1.02] hover:shadow-xl" data-astro-cid-alcrz2gh> <button class="faq-question w-full text-left p-6 font-bold text-lg flex justify-between items-center text-white" aria-expanded="false" aria-controls="faq3" id="faq-btn-3" data-astro-cid-alcrz2gh> <span data-astro-cid-alcrz2gh>Do you offer revisions if I\'m not satisfied?</span> <svg class="w-6 h-6 transform transition-transform duration-300 text-[#47C6A2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-alcrz2gh> <path d="M19 9l-7 7-7-7" data-astro-cid-alcrz2gh></path> </svg> </button> <div id="faq3" class="faq-answer max-h-0 overflow-hidden transition-all duration-500 px-6 text-gray-300 text-base" data-astro-cid-alcrz2gh> <p class="py-4" data-astro-cid-alcrz2gh>\nYes. Essentials & Professional \u2192 1 free revision (7 days). Elite \u2192 2 free revisions (14 days). Extra revisions at \u20B9500.\n</p> </div> </div> </div> <!-- CTA --> <div class="text-center mt-10" data-astro-cid-alcrz2gh> <a href="/faq" class="inline-flex items-center px-8 py-3 rounded-lg font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#47C6A2] glass-btn" data-astro-cid-alcrz2gh>\nSee More FAQs \u2192\n</a> </div> </div> <!-- Styles -->  <!-- Toggle Script --> <script>\n    (function () {\n      function toggleFAQById(faqId, button) {\n        const answer = document.getElementById(faqId);\n        if (!answer || !button) return;\n        const currentlyExpanded = button.getAttribute("aria-expanded") === "true";\n        document.querySelectorAll(".faq-answer").forEach(el => el.style.maxHeight = "0");\n        document.querySelectorAll(".faq-question").forEach(btn => {\n          btn.setAttribute("aria-expanded", "false");\n          const svg = btn.querySelector("svg");\n          if (svg) svg.style.transform = "rotate(0deg)";\n        });\n        if (!currentlyExpanded) {\n          answer.style.maxHeight = answer.scrollHeight + "px";\n          button.setAttribute("aria-expanded", "true");\n          const icon = button.querySelector("svg");\n          if (icon) icon.style.transform = "rotate(180deg)";\n        }\n      }\n      document.querySelectorAll(".faq-question").forEach(button => {\n        const controls = button.getAttribute("aria-controls");\n        button.addEventListener("click", () => toggleFAQById(controls, button));\n        button.addEventListener("keydown", (ev) => {\n          if (ev.key === "Enter" || ev.key === " ") {\n            ev.preventDefault();\n            toggleFAQById(controls, button);\n          }\n        });\n        button.setAttribute("tabindex", "0");\n      });\n      if (location.hash) {\n        const h = location.hash.replace("#", "");\n        const btn = document.querySelector(`[aria-controls="${h}"]`);\n        if (btn) setTimeout(()=> toggleFAQById(h, btn), 120);\n      }\n    })();\n  <\/script> </section>'], ["", '<section id="faq" class="relative py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white" data-astro-cid-alcrz2gh> <div class="container mx-auto max-w-5xl text-center" data-astro-cid-alcrz2gh> <!-- Section Heading --> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-wide-heading" data-astro-cid-alcrz2gh>\nFrequently Asked Questions\n</h2> <div class="w-20 h-1 bg-gradient-to-r from-[#47C6A2] to-[#2F9E7F] mx-auto mb-10 rounded-full shadow-sm" data-astro-cid-alcrz2gh></div> <p class="text-gray-300 mb-12 max-w-xl mx-auto text-lg font-medium" data-astro-cid-alcrz2gh>\nQuick answers to the most common questions about our resume and profile services.\n</p> <!-- FAQ Items --> <div class="space-y-6 text-left" data-astro-cid-alcrz2gh> <!-- FAQ 1 --> <div class="faq-card group glass-box transition duration-500 hover:scale-[1.02] hover:shadow-xl" data-astro-cid-alcrz2gh> <button class="faq-question w-full text-left p-6 font-bold text-lg flex justify-between items-center text-white" aria-expanded="false" aria-controls="faq1" id="faq-btn-1" data-astro-cid-alcrz2gh> <span data-astro-cid-alcrz2gh>How does the process work after I sign up?</span> <svg class="w-6 h-6 transform transition-transform duration-300 text-[#47C6A2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-alcrz2gh> <path d="M19 9l-7 7-7-7" data-astro-cid-alcrz2gh></path> </svg> </button> <div id="faq1" class="faq-answer max-h-0 overflow-hidden transition-all duration-500 px-6 text-gray-300 text-base" data-astro-cid-alcrz2gh> <p class="py-4" data-astro-cid-alcrz2gh>\nAfter purchase, you\u2019ll receive a short questionnaire. Our team reviews your details, optimizes your profiles/resume, and delivers the first draft within 24\u201348 hours. You\u2019ll then have time to request revisions (based on your plan).\n</p> </div> </div> <!-- FAQ 2 --> <div class="faq-card group glass-box transition duration-500 hover:scale-[1.02] hover:shadow-xl" data-astro-cid-alcrz2gh> <button class="faq-question w-full text-left p-6 font-bold text-lg flex justify-between items-center text-white" aria-expanded="false" aria-controls="faq2" id="faq-btn-2" data-astro-cid-alcrz2gh> <span data-astro-cid-alcrz2gh>How long does the delivery process take?</span> <svg class="w-6 h-6 transform transition-transform duration-300 text-[#47C6A2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-alcrz2gh> <path d="M19 9l-7 7-7-7" data-astro-cid-alcrz2gh></path> </svg> </button> <div id="faq2" class="faq-answer max-h-0 overflow-hidden transition-all duration-500 px-6 text-gray-300 text-base" data-astro-cid-alcrz2gh> <p class="py-4" data-astro-cid-alcrz2gh>\nMost projects are completed within <strong data-astro-cid-alcrz2gh>24\u201348 hours</strong>. Elite plan customers receive priority processing.\n</p> </div> </div> <!-- FAQ 3 --> <div class="faq-card group glass-box transition duration-500 hover:scale-[1.02] hover:shadow-xl" data-astro-cid-alcrz2gh> <button class="faq-question w-full text-left p-6 font-bold text-lg flex justify-between items-center text-white" aria-expanded="false" aria-controls="faq3" id="faq-btn-3" data-astro-cid-alcrz2gh> <span data-astro-cid-alcrz2gh>Do you offer revisions if I\'m not satisfied?</span> <svg class="w-6 h-6 transform transition-transform duration-300 text-[#47C6A2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-alcrz2gh> <path d="M19 9l-7 7-7-7" data-astro-cid-alcrz2gh></path> </svg> </button> <div id="faq3" class="faq-answer max-h-0 overflow-hidden transition-all duration-500 px-6 text-gray-300 text-base" data-astro-cid-alcrz2gh> <p class="py-4" data-astro-cid-alcrz2gh>\nYes. Essentials & Professional \u2192 1 free revision (7 days). Elite \u2192 2 free revisions (14 days). Extra revisions at \u20B9500.\n</p> </div> </div> </div> <!-- CTA --> <div class="text-center mt-10" data-astro-cid-alcrz2gh> <a href="/faq" class="inline-flex items-center px-8 py-3 rounded-lg font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#47C6A2] glass-btn" data-astro-cid-alcrz2gh>\nSee More FAQs \u2192\n</a> </div> </div> <!-- Styles -->  <!-- Toggle Script --> <script>\n    (function () {\n      function toggleFAQById(faqId, button) {\n        const answer = document.getElementById(faqId);\n        if (!answer || !button) return;\n        const currentlyExpanded = button.getAttribute("aria-expanded") === "true";\n        document.querySelectorAll(".faq-answer").forEach(el => el.style.maxHeight = "0");\n        document.querySelectorAll(".faq-question").forEach(btn => {\n          btn.setAttribute("aria-expanded", "false");\n          const svg = btn.querySelector("svg");\n          if (svg) svg.style.transform = "rotate(0deg)";\n        });\n        if (!currentlyExpanded) {\n          answer.style.maxHeight = answer.scrollHeight + "px";\n          button.setAttribute("aria-expanded", "true");\n          const icon = button.querySelector("svg");\n          if (icon) icon.style.transform = "rotate(180deg)";\n        }\n      }\n      document.querySelectorAll(".faq-question").forEach(button => {\n        const controls = button.getAttribute("aria-controls");\n        button.addEventListener("click", () => toggleFAQById(controls, button));\n        button.addEventListener("keydown", (ev) => {\n          if (ev.key === "Enter" || ev.key === " ") {\n            ev.preventDefault();\n            toggleFAQById(controls, button);\n          }\n        });\n        button.setAttribute("tabindex", "0");\n      });\n      if (location.hash) {\n        const h = location.hash.replace("#", "");\n        const btn = document.querySelector(\\`[aria-controls="\\${h}"]\\`);\n        if (btn) setTimeout(()=> toggleFAQById(h, btn), 120);\n      }\n    })();\n  <\/script> </section>'])), maybeRenderHead());
}, "D:/daws/repos/optyp.github.io/src/components/FAQHome.astro", void 0);

// src/data/services.js
const services = [
  {
    title: "ATS Resume",
    description: "Fine-tune your resume for ATS algorithms, ensuring top placement and recruiter visibility.",
    icon: "/icons/resume.svg",
  },
  {
    title: "LinkedIn Optimization",
    description: "Refine your LinkedIn profile to attract recruiters, expand your network, and land interviews.",
    icon: "/icons/linkedin.svg",
  },
  {
    title: "Naukri Optimization",
    description: "Elevate your Naukri presence with targeted keywords and layout tweaks for maximum exposure.",
    icon: "/icons/naukri.svg",
  },
  {
    title: "Indeed Optimization",
    description: "Optimize your Indeed profile with strategic keywords and branding to draw in top employers.",
    icon: "/icons/indeed.svg",
  },
  {
    title: "GitHub Enhancement",
    description: "Showcase your best projects and skills on GitHub with curated content to impress hiring teams.",
    icon: "/icons/github.svg",
  },
  {
    title: "Portfolio Creation",
    description: "Create a polished online portfolio with case studies and visuals that highlight your expertise.",
    icon: "/icons/portfolio.svg",
  },
  {
    title: "Upwork Profile Setup",
    description: "Build and optimize your Upwork profile to stand out, win projects, and attract quality clients.",
    icon: "/icons/upwork.svg",
  },
  {
    title: "Fiverr Profile Setup",
    description: "Craft high-converting Fiverr gigs and profiles that boost visibility and secure orders faster.",
    icon: "/icons/fiverr.svg",
  },
  {
    title: "Toptal Profile Setup",
    description: "Optimize your Toptal profile and portfolio with guidance to improve your chances of passing the screening process.",
    icon: "/icons/toptal.svg",
  },
  {
    title: "Personal Branding",
    description: "Develop a strong personal brand with strategy, content planning, and authority building online.",
    icon: "/icons/branding.svg",
  },
];

const testimonials = [
  {
    quote: "I never realized how much difference a well-optimized LinkedIn and resume could make until I worked with optyp. Within two weeks, I started getting responses from companies I’d been applying to for months.",
    profession: "Marketing Executive",
    location: "Bengaluru",
  },
  {
    quote: "Optyp didn’t just edit my resume they completely transformed how I present myself professionally. The recruiter engagement on my profile increased instantly",
    profession: "Software Engineer",
    location: "Bangalore",
  },
  {
    quote: "Their team understood my career goals and crafted my profiles perfectly. I now get interview calls from both Indian and overseas clients on Upwork.",
    profession: "Freelance Designer",
    location: "Hyderabad",
  },
  {
    quote: "I was struggling to get noticed on job portals. After optyp optimized my Naukri and LinkedIn profiles, I received multiple shortlists within a week. Totally worth it.",
    profession: "HR Coordinator",
    location: "Pune",
  },
  {
    quote: "I came across OPTYP while searching for a resume optimization service, and it turned out to be the best career investment I’ve made. Their team not only optimized my ATS resume but also improved my LinkedIn and freelancing profiles with the right keywords and presentation. Within a few weeks, I started receiving international interview calls. They truly know how to position professionals for global opportunities.",
    profession: "Electrical Engineer",
    location: "Chennai",
  },
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "OPTYP \u2013 Optimize Your Professionalism", "description": "Premium resume, LinkedIn, Naukri, and portfolio optimization services to help professionals get hired faster globally.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="bg-[linear-gradient(180deg,var(--bg-900),var(--bg-800))] text-gray-100" data-astro-cid-j7pv25f6> <!-- Hero (landmark + accessible) --> <section id="hero" class="scroll-mt-20" role="region" aria-labelledby="hero-heading" data-astro-cid-j7pv25f6> ', ' </section> <!-- About --> <section id="about" class="relative py-12 sm:py-16 lg:py-20 scroll-mt-20" role="region" aria-labelledby="about-heading" data-astro-cid-j7pv25f6> <div class="glass-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> ', ' </div> </section> <!-- Services --> <section id="services" class="relative py-12 sm:py-16 lg:py-20 scroll-mt-20" role="region" aria-labelledby="services-heading" data-astro-cid-j7pv25f6> <div class="glass-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> ', ' </div> </section> <!-- Plans --> <section id="plans" class="relative py-12 sm:py-16 lg:py-20 scroll-mt-20" role="region" aria-labelledby="plans-heading" data-astro-cid-j7pv25f6> <div class="glass-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> ', ' </div> </section> <!-- Testimonials --> <section id="testimonials" class="relative py-12 sm:py-16 lg:py-20 scroll-mt-20" role="region" aria-labelledby="testimonials-heading" data-astro-cid-j7pv25f6> <div class="glass-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> ', ' </div> </section> <!-- FAQ (home) --> <section id="faq" class="relative py-12 sm:py-16 lg:py-20 scroll-mt-20" role="region" aria-labelledby="faq-heading" data-astro-cid-j7pv25f6> <div class="glass-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> ', ' </div> </section> <!-- Contact --> <section id="contact" class="relative py-12 sm:py-16 lg:py-20 scroll-mt-20" role="region" aria-labelledby="contact-heading" data-astro-cid-j7pv25f6> <div class="glass-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> ', ` </div> </section> </main>   <script>
    // Intercept any internal clicks to links that target #contact to open the modal (progressive)
    document.addEventListener('click', function (ev) {
      const a = ev.target.closest && ev.target.closest('a[href*="#contact"]');
      if (!a) return;
      // If href is purposely external (contains full origin), don't intercept
      try {
        const href = a.getAttribute('href') || '';
        // If pathname includes host, treat as external -> allow default
        if (href.indexOf('http') === 0 && !href.includes(location.hostname)) return;
      } catch (e) { /* ignore */ }

      ev.preventDefault();
      if (typeof openContactForm === 'function') {
        openContactForm();
      } else {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, { passive: false });

    // Ensure deep links (URL contains #contact) open modal on load
    document.addEventListener('DOMContentLoaded', function () {
      if (location.hash === '#contact') {
        if (typeof openContactForm === 'function') {
          openContactForm();
        } else {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  <\/script> `])), maybeRenderHead(), renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result2, "Services", $$Services, { "services": services, "data-astro-cid-j7pv25f6": true }), renderComponent($$result2, "Plans", $$Plans, { "plans": plans, "data-astro-cid-j7pv25f6": true }), renderComponent($$result2, "Testimonials", $$Testimonials, { "testimonials": testimonials, "data-astro-cid-j7pv25f6": true }), renderComponent($$result2, "FAQHome", $$FAQHome, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true })) })}`;
}, "D:/daws/repos/optyp.github.io/src/pages/index.astro", void 0);

const $$file = "D:/daws/repos/optyp.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
