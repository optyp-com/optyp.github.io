/* empty css                                 */
import { c as createComponent, a as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DgE27xMi.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_KPzSvLmH.mjs';
export { renderers } from '../renderers.mjs';

const $$Feedback = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Leave Feedback \u2013 OptyP" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main-content" class="container mx-auto px-4 py-16"> <h1 class="text-3xl font-heading font-bold mb-6">We Value Your Feedback</h1> <iframe src="https://forms.gle/iiotXL2Vzjuxf1tAA" width="100%" height="800" frameborder="0">Loading…</iframe> <p class="mt-4">Or email us at <a href="mailto:info@optyp.com" class="text-primary-600">info@optyp.com</a>.</p> </main> ` })}`;
}, "D:/daws/repos/optyp.github.io/src/pages/feedback.astro", void 0);

const $$file = "D:/daws/repos/optyp.github.io/src/pages/feedback.astro";
const $$url = "/feedback";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Feedback,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
