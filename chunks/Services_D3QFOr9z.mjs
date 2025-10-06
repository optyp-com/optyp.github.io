import { e as createAstro, c as createComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead } from './astro/server_BV2FCX53.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://optyp.com");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const { services } = Astro2.props;
  const serviceLinks = {
    "ATS Resume": "/explore/ats-resume",
    "LinkedIn Optimization": "/explore/linkedin",
    "Naukri Optimization": "/explore/job-portals/naukri",
    "Indeed Optimization": "/explore/job-portals/indeed",
    "GitHub Enhancement": "/explore/github",
    "Portfolio Creation": "/explore/portfolio-site",
    "Upwork Profile Setup": "/explore/freelancing/upwork",
    "Fiverr Profile Setup": "/explore/freelancing/fiverr",
    "Toptal Profile Setup": "/explore/freelancing/toptal",
    "Personal Branding": "/explore/personal-branding"
  };
  return renderTemplate(_a || (_a = __template(["", '<section id="services" class="relative py-20 lg:py-28 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden" data-astro-cid-g5jplrhu> <div class="container mx-auto max-w-6xl px-6 sm:px-10 text-center relative z-10" data-astro-cid-g5jplrhu> <!-- Section Heading --> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-white" data-astro-cid-g5jplrhu>\nOur <span class="text-[#47C6A2]" data-astro-cid-g5jplrhu>Services</span> </h2> <div class="w-24 h-1 bg-gradient-to-r from-[#47C6A2] to-[#2F9E7F] mx-auto mb-10 rounded-full shadow-lg" data-astro-cid-g5jplrhu></div> <p class="text-gray-300 mb-12 max-w-3xl mx-auto" data-astro-cid-g5jplrhu>\nWe offer a full suite of career services that not only optimize your existing profiles \n      but also build new, high-impact accounts from scratch.\n</p> <!-- Services Grid --> <div class="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-g5jplrhu> ', ' </div> </div> <!-- Extra Styles -->  <!-- AOS Initialization --> <script type="module">\n    import AOS from "aos";\n    import "aos/dist/aos.css";\n    AOS.init({\n      duration: 800,\n      once: true,\n      offset: 80,\n    });\n  <\/script> </section>'])), maybeRenderHead(), services.map((service, i) => renderTemplate`<div${addAttribute(service.title, "key")} class="service-card group relative p-8 rounded-2xl transition-all duration-300 
                 bg-white/5 border border-white/10 backdrop-blur-lg 
                 hover:border-[#47C6A2]/70 hover:shadow-[0_0_25px_rgba(71,198,162,0.5)] 
                 hover:scale-105" data-aos="fade-up"${addAttribute(i * 100, "data-aos-delay")} data-astro-cid-g5jplrhu> <!-- Icon --> ${service.icon && renderTemplate`<div class="icon-box w-16 h-16 mx-auto mb-6 flex items-center justify-center 
                     rounded-full bg-gradient-to-r from-[#47C6A2] to-[#2F9E7F] shadow-lg 
                     transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" data-astro-cid-g5jplrhu> <img${addAttribute(service.icon, "src")}${addAttribute(service.title, "alt")} class="w-8 h-8 text-white" loading="lazy" data-astro-cid-g5jplrhu> </div>`} <!-- Title --> <h3 class="text-xl font-semibold mb-3 text-white group-hover:text-[#47C6A2] transition-colors" data-astro-cid-g5jplrhu> ${service.title} </h3> <!-- Description --> <p class="text-gray-300 mb-6" data-astro-cid-g5jplrhu> ${service.description} </p> <!-- See More Button (Glassmorphism Enhanced) --> ${serviceLinks[service.title] && renderTemplate`<a${addAttribute(serviceLinks[service.title], "href")} class="inline-block mt-2 px-4 py-2 text-sm font-semibold rounded-md 
                     bg-[#47C6A2]/80 backdrop-blur-md border border-white/10 
                     text-black hover:bg-[#2F9E7F]/90 hover:shadow-[0_0_20px_rgba(71,198,162,0.5)] 
                     transition-all duration-300" data-astro-cid-g5jplrhu>
See More
</a>`} </div>`));
}, "D:/daws/repos/optyp.github.io/src/components/Services.astro", void 0);

export { $$Services as $ };
