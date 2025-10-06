/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BV2FCX53.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BaoBAkGq.mjs';
import { $ as $$About$1 } from '../chunks/About_B8p3KIRR.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const title = "About Us | OPTYP";
  const description = "Learn more about OPTYP \u2013 helping professionals optimize their digital profiles for global opportunities.";
  const keywords = "about optyp, resume experts, linkedin optimization team, optyp info";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-4"> <section class="max-w-5xl w-full"> <h1 class="text-4xl md:text-5xl font-bold text-center mb-8">About OPTYP</h1> <p class="text-center text-gray-400 max-w-2xl mx-auto mb-12">
At OPTYP, we specialize in optimizing your professional identity — from ATS resumes and LinkedIn profiles 
        to freelancing and job portals — ensuring you stand out globally.
</p> <!-- Reuse About component --> ${renderComponent($$result2, "About", $$About$1, {})} </section> </main> ` })}`;
}, "D:/daws/repos/optyp.github.io/src/pages/about.astro", void 0);

const $$file = "D:/daws/repos/optyp.github.io/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
