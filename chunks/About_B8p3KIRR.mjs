import { c as createComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_BV2FCX53.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section id="about" class="relative py-20 lg:py-28 overflow-hidden" data-astro-cid-v2cbyr3p> <!-- Futuristic Gradient Background --> <div class="absolute inset-0 -z-10 bg-gradient-to-tr from-black via-gray-900 to-black" data-astro-cid-v2cbyr3p></div> <div class="container-custom text-center md:text-left relative z-10" data-astro-cid-v2cbyr3p> <div class="flex flex-col md:grid md:grid-cols-2 md:gap-16 items-center" data-astro-cid-v2cbyr3p> <!-- Illustration --> <div class="flex justify-center mb-10 md:mb-0 animate-fadeInUp floating" data-astro-cid-v2cbyr3p> <img src="/images/about-resume.svg" alt="Career optimization and growth illustration" class="w-56 sm:w-72 md:w-full max-w-md drop-shadow-[0_0_25px_rgba(71,198,162,0.6)]" loading="lazy" data-astro-cid-v2cbyr3p> </div> <!-- Content --> <div class="animate-fadeInUp" style="animation-delay:0.15s" data-astro-cid-v2cbyr3p> <div class="glass-box p-6 sm:p-10" data-astro-cid-v2cbyr3p> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold mb-6 text-white" data-astro-cid-v2cbyr3p>
About <span class="text-[#47C6A2]" data-astro-cid-v2cbyr3p>OPTYP</span> </h2> <p class="text-base sm:text-lg leading-relaxed text-gray-200 mb-4" data-astro-cid-v2cbyr3p>
At <span class="font-semibold text-[#47C6A2]" data-astro-cid-v2cbyr3p>OPTYP</span>, We craft your digital identity by optimizing your
<strong class="highlight" data-astro-cid-v2cbyr3p>ATS Resume</strong>,
<strong class="highlight" data-astro-cid-v2cbyr3p>LinkedIn</strong>,
<strong class="highlight" data-astro-cid-v2cbyr3p>Indeed</strong>,
<strong class="highlight" data-astro-cid-v2cbyr3p>Naukri</strong>,
<strong class="highlight" data-astro-cid-v2cbyr3p>Upwork</strong>,
<strong class="highlight" data-astro-cid-v2cbyr3p>Fiverr</strong>,
<strong class="highlight" data-astro-cid-v2cbyr3p>Toptal</strong>,
<strong class="highlight" data-astro-cid-v2cbyr3p>GitHub</strong>, and
<strong class="highlight" data-astro-cid-v2cbyr3p>Portfolio</strong> profiles 
            to help you get noticed and hired faster globally.
</p> <p class="text-base sm:text-lg leading-relaxed text-gray-300" data-astro-cid-v2cbyr3p>
Our expert team ensures your professionalism is showcased to attract recruiters effectively.
<span class="font-semibold text-[#47C6A2]" data-astro-cid-v2cbyr3p>GET SET, GET HIRED!</span> </p> <!-- Mini Stats Row --> <div class="mt-8 grid grid-cols-2 gap-6 sm:flex sm:gap-12 text-center md:text-left" data-astro-cid-v2cbyr3p> <div data-astro-cid-v2cbyr3p> <p class="text-3xl font-bold text-[#47C6A2] counter drop-shadow-md" data-target="500" data-astro-cid-v2cbyr3p>0</p> <p class="text-gray-300 text-sm" data-astro-cid-v2cbyr3p>Profiles Optimized</p> </div> <div data-astro-cid-v2cbyr3p> <p class="text-3xl font-bold text-[#47C6A2] counter drop-shadow-md" data-target="10" data-astro-cid-v2cbyr3p>0</p> <p class="text-gray-300 text-sm" data-astro-cid-v2cbyr3p>Countries Served</p> </div> </div> </div> </div> </div> </div> <!-- Extra Styles -->  <!-- COUNTER SCRIPT --> <script type="module">
    const counters = Array.from(document.querySelectorAll('.counter'));
    if (counters.length > 0) {
      function animateCount(el, end, duration = 1500) {
        let startTime = null;
        function step(now) {
          if (!startTime) startTime = now;
          const progress = Math.min((now - startTime) / duration, 1);
          const current = Math.floor(progress * end);
          el.textContent = current.toLocaleString();
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = end.toLocaleString() + '+';
        }
        requestAnimationFrame(step);
      }
      function runCounters() {
        counters.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'), 10) || 0;
          animateCount(el, target, 1400 + Math.min(target, 1000));
        });
      }
      const section = document.getElementById('about');
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              runCounters();
              observer.disconnect();
            }
          });
        }, { threshold: 0.35 });
        io.observe(section);
      } else {
        runCounters();
      }
    }
  <\/script> </section>`])), maybeRenderHead());
}, "D:/daws/repos/optyp.github.io/src/components/About.astro", void 0);

export { $$About as $ };
