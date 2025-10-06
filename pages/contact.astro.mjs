/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BV2FCX53.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_BaoBAkGq.mjs';
import { $ as $$Contact$1 } from '../chunks/Contact_CBszkrkj.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const title = "Contact Us | OPTYP";
  const description = "Get in touch with the OPTYP team. Have questions about resume or profile optimization? We\u2019re here to help.";
  const keywords = "contact optyp, resume optimization, linkedin optimization, naukri profile help, optyp contact form";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-4"> <section class="max-w-5xl w-full"> <h1 class="text-4xl md:text-5xl font-bold text-center mb-8">Get in Touch</h1> <p class="text-center text-gray-400 max-w-2xl mx-auto mb-12">
Have questions about our services or need help optimizing your professional profiles?  
        Reach out and our team will respond quickly.
</p> <!-- ✅ Reuse the same Contact component --> ${renderComponent($$result2, "Contact", $$Contact$1, {})} </section> </main> ` })}`;
}, "D:/daws/repos/optyp.github.io/src/pages/contact.astro", void 0);

const $$file = "D:/daws/repos/optyp.github.io/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
