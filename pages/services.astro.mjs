/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BV2FCX53.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BaoBAkGq.mjs';
import { $ as $$Services$1 } from '../chunks/Services_D3QFOr9z.mjs';
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const title = "Our Services | OPTYP";
  const description = "Explore OPTYP services \u2013 ATS Resume, LinkedIn Optimization, Job Portal Profile Enhancement, and more.";
  const keywords = "optyp services, resume optimization, linkedin profile services, naukri optimization, job portal upgrade";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-4"> <section class="max-w-5xl w-full"> <h1 class="text-4xl md:text-5xl font-bold text-center mb-8">Our Services</h1> <p class="text-center text-gray-400 max-w-2xl mx-auto mb-12">
Discover how OPTYP helps you get noticed faster — from crafting powerful resumes to optimizing online profiles
        across multiple platforms.
</p> <!-- Reuse Services component --> ${renderComponent($$result2, "Services", $$Services$1, {})} </section> </main> ` })}`;
}, "D:/daws/repos/optyp.github.io/src/pages/services.astro", void 0);

const $$file = "D:/daws/repos/optyp.github.io/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
