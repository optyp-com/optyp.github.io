/* empty css                                 */
import { c as createComponent, r as renderHead, a as renderComponent, b as renderTemplate } from '../chunks/astro/server_DgE27xMi.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_DhmIEX36.mjs';
export { renderers } from '../renderers.mjs';

const $$Error = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Error | OPTYP</title>${renderHead()}</head> <body class="bg-gray-50 font-body"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex flex-col items-center justify-center min-h-[70vh] text-center px-6"> <div class="bg-white shadow-xl rounded-2xl p-10 max-w-lg"> <div class="text-red-600 text-6xl mb-4">❌</div> <h1 class="text-3xl font-bold text-gray-800 mb-4">Oops! Something Went Wrong</h1> <p class="text-gray-600 mb-6">
We couldn’t send your message. Please try again later or contact us directly at
<a href="mailto:info@optyp.com" class="text-primary-500 font-semibold">info@optyp.com</a>.
</p> <a href="/" class="inline-block bg-gray-700 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition">
Back to Home
</a> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/daws/repos/optyp.github.io/src/pages/error.astro", void 0);

const $$file = "D:/daws/repos/optyp.github.io/src/pages/error.astro";
const $$url = "/error";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Error,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
