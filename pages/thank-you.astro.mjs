/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BV2FCX53.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BaoBAkGq.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Thank You - OPTYP", "description": "Your message has been sent successfully. We'll get back to you soon!", "data-astro-cid-reykoxrt": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200" data-astro-cid-reykoxrt> <div class="max-w-lg mx-auto bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-md p-10 \n                transform translate-y-10 opacity-0 transition-all duration-700 ease-out" id="thankyou-card" data-astro-cid-reykoxrt> <!-- Success Icon --> <div class="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-green-100/70 text-green-600 shadow-inner \n                  animate-pulse-glow" data-astro-cid-reykoxrt> <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-reykoxrt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-reykoxrt></path> </svg> </div> <!-- Heading --> <h1 class="text-4xl font-extrabold text-gray-900 mb-4" data-astro-cid-reykoxrt>Thank You!</h1> <p class="text-lg text-gray-700 mb-8" data-astro-cid-reykoxrt>\nYour message has been sent successfully. Our team will get back to you soon.  \n        We\u2019re excited to help you optimize your career journey \u{1F680}\n</p> <!-- Buttons --> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-reykoxrt> <a href="/" class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition" data-astro-cid-reykoxrt>\nBack to Home\n</a> <a href="/#plans" class="inline-flex items-center justify-center px-6 py-3 bg-white/80 text-primary-600 border border-primary-600 text-lg font-semibold rounded-xl shadow-md hover:bg-white hover:scale-105 transition" data-astro-cid-reykoxrt>\nView Our Plans\n</a> </div> </div> <!-- Animation Script --> <script>\n      window.addEventListener("DOMContentLoaded", () => {\n        const card = document.getElementById("thankyou-card");\n        requestAnimationFrame(() => {\n          card.classList.remove("translate-y-10", "opacity-0");\n          card.classList.add("translate-y-0", "opacity-100");\n        });\n      });\n    <\/script> <!-- Custom Tailwind Animation -->  </section> '])), maybeRenderHead()) })}`;
}, "D:/daws/repos/optyp.github.io/src/pages/thank-you.astro", void 0);

const $$file = "D:/daws/repos/optyp.github.io/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
