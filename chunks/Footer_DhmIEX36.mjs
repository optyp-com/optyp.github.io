import { c as createComponent, b as renderTemplate, m as maybeRenderHead } from './astro/server_DgE27xMi.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                       */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<header id="site-header" class="bg-transparent sticky top-0 z-40 transition-all duration-500" data-astro-cid-3ef6ksr2> <div class="container mx-auto flex items-center justify-between px-4 py-3" data-astro-cid-3ef6ksr2> <!-- Logo --> <a href="/" class="flex items-center space-x-2" data-astro-cid-3ef6ksr2> <img src="/images/logo.svg" alt="OPTYP Logo" class="h-10 w-auto" data-astro-cid-3ef6ksr2> <span class="font-bold text-xl text-primary-500 tracking-wide" data-astro-cid-3ef6ksr2>OPTYP</span> </a> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="md:hidden focus:outline-none" aria-label="Toggle Menu" data-astro-cid-3ef6ksr2> <svg class="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <line x1="3" y1="12" x2="21" y2="12" data-astro-cid-3ef6ksr2></line> <line x1="3" y1="6" x2="21" y2="6" data-astro-cid-3ef6ksr2></line> <line x1="3" y1="18" x2="21" y2="18" data-astro-cid-3ef6ksr2></line> </svg> </button> <!-- Desktop Navigation --> <nav class="hidden md:flex space-x-8 font-semibold font-body text-gray-700" data-astro-cid-3ef6ksr2> <a href="/#hero" class="nav-link hover:text-primary-600" data-section="hero" data-astro-cid-3ef6ksr2>Home</a> <a href="/#about" class="nav-link hover:text-primary-600" data-section="about" data-astro-cid-3ef6ksr2>About</a> <a href="/#services" class="nav-link hover:text-primary-600" data-section="services" data-astro-cid-3ef6ksr2>Services</a> <a href="/#plans" class="nav-link hover:text-primary-600" data-section="plans" data-astro-cid-3ef6ksr2>Plans</a> <a href="/#testimonials" class="nav-link hover:text-primary-600" data-section="testimonials" data-astro-cid-3ef6ksr2>Testimonials</a> <a href="/#contact" class="nav-link hover:text-primary-600" data-section="contact" data-astro-cid-3ef6ksr2>Contact</a> </nav> </div> <!-- Mobile Navigation --> <nav id="mobile-menu" class="md:hidden bg-white shadow-lg absolute w-full left-0 top-16 hidden px-4 py-4 space-y-2 font-semibold font-body" data-astro-cid-3ef6ksr2> <a href="/#hero" class="nav-link block hover:text-primary-600" data-section="hero" data-astro-cid-3ef6ksr2>Home</a> <a href="/#about" class="nav-link block hover:text-primary-600" data-section="about" data-astro-cid-3ef6ksr2>About</a> <a href="/#services" class="nav-link block hover:text-primary-600" data-section="services" data-astro-cid-3ef6ksr2>Services</a> <a href="/#plans" class="nav-link block hover:text-primary-600" data-section="plans" data-astro-cid-3ef6ksr2>Plans</a> <a href="/#testimonials" class="nav-link block hover:text-primary-600" data-section="testimonials" data-astro-cid-3ef6ksr2>Testimonials</a> <a href="/#contact" class="nav-link block hover:text-primary-600" data-section="contact" data-astro-cid-3ef6ksr2>Contact</a> </nav> <script>
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const header = document.getElementById('site-header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Mobile menu toggle
    button?.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Scrollspy (highlight current section)
    function setActive(sectionId) {
      navLinks.forEach(link => {
        if (link.dataset.section === sectionId) {
          link.classList.add('text-primary-600', 'font-bold', 'border-b-2', 'border-primary-600');
        } else {
          link.classList.remove('text-primary-600', 'font-bold', 'border-b-2', 'border-primary-600');
        }
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));

    // Smooth scroll for links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').split('#')[1];
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
        menu.classList.add('hidden'); // close mobile menu
      });
    });

    // Header background fade on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-white', 'shadow-md');
        header.classList.remove('bg-transparent');
      } else {
        header.classList.add('bg-transparent');
        header.classList.remove('bg-white', 'shadow-md');
      }
    });
  <\/script>  </header>`])), maybeRenderHead());
}, "D:/daws/repos/optyp.github.io/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative bg-gradient-to-b from-gray-900 via-black to-black text-white py-12 font-body overflow-hidden"> <!-- Neon Glows --> <div class="absolute -top-20 left-10 w-[300px] h-[300px] bg-emerald-500/20 rounded-full blur-3xl"></div> <div class="absolute bottom-0 right-10 w-[350px] h-[350px] bg-green-400/20 rounded-full blur-3xl"></div> <div class="container mx-auto px-6 relative z-10"> <!-- Grid Layout --> <div class="grid gap-8 md:grid-cols-3"> <!-- Logo + About --> <div> <a href="/" class="flex items-center space-x-2"> <img src="/images/logo.svg" alt="OPTYP Logo" class="h-10"> <span class="text-xl font-bold">OPTYP</span> </a> <p class="mt-4 text-gray-400 text-sm">
Empowering professionals with AI-driven tools to optimize careers and build personal brands for the future of work.
</p> </div> <!-- Quick Links --> <div> <h3 class="font-semibold text-lg mb-4">Quick Links</h3> <ul class="space-y-2 text-gray-400 text-sm"> <li><a href="#services" class="hover:text-emerald-400 transition">Services</a></li> <li><a href="#plans" class="hover:text-emerald-400 transition">Plans</a></li> <li><a href="#testimonials" class="hover:text-emerald-400 transition">Testimonials</a></li> <li><a href="#about" class="hover:text-emerald-400 transition">About</a></li> <li><a href="#contact" class="hover:text-emerald-400 transition">Contact</a></li> </ul> </div> <!-- Social + Contact --> <div> <h3 class="font-semibold text-lg mb-4">Connect</h3> <div class="flex gap-4 mb-4"> <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" class="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-110 hover:shadow-emerald-400/40 transition"> <img src="/icons/linkedin.svg" alt="LinkedIn" class="h-5 w-5"> </a> <a href="https://twitter.com" target="_blank" aria-label="Twitter" class="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-110 hover:shadow-emerald-400/40 transition"> <img src="/icons/twitter.svg" alt="Twitter" class="h-5 w-5"> </a> <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-110 hover:shadow-emerald-400/40 transition"> <img src="/icons/facebook.svg" alt="Facebook" class="h-5 w-5"> </a> <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-110 hover:shadow-emerald-400/40 transition"> <img src="/icons/instagram.svg" alt="Instagram" class="h-5 w-5"> </a> </div> <p class="text-gray-400 text-sm">
📩 support@optyp.com
</p> </div> </div> <!-- Divider --> <div class="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"> <p>© 2026 OPTYP. All rights reserved.</p> <p>Made with ❤️ for professionals</p> </div> </div> <!-- Back to Top --> <button onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" class="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 shadow-lg hover:shadow-emerald-500/50 transition transform hover:scale-110 z-50"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path> </svg> </button> </footer>`;
}, "D:/daws/repos/optyp.github.io/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
