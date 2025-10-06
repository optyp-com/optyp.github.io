import { c as createComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_BV2FCX53.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                       */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- Contact CTA Section -->", `<section class="bg-gradient-to-br from-black via-gray-900 to-black py-20 text-white" data-astro-cid-xmivup5a> <div class="container mx-auto max-w-5xl px-4 text-center" data-astro-cid-xmivup5a> <h2 class="text-4xl font-extrabold mb-4 text-white tracking-wide-heading" data-astro-cid-xmivup5a>
Contact Us
</h2> <div class="w-20 h-1 bg-gradient-to-r from-[#47C6A2] to-green-400 mx-auto mb-10 rounded-full shadow-sm" data-astro-cid-xmivup5a></div> <p class="text-gray-300 mb-12 max-w-xl mx-auto" data-astro-cid-xmivup5a>
Have questions or want to get started? Click below to open the form.
</p> <div class="flex flex-col items-center space-y-2" data-astro-cid-xmivup5a> <button class="inline-block glass-btn px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" onclick="openContactForm()" aria-haspopup="dialog" aria-controls="contact-modal" data-astro-cid-xmivup5a>
Get Started
</button> </div> </div> </section> <!-- Modal --> <div id="contact-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 hidden opacity-0 transition-opacity duration-500 ease-out" role="dialog" aria-modal="true" aria-hidden="true" onclick="closeContactForm()" data-astro-cid-xmivup5a> <div id="contact-modal-content" class="relative glass-panel w-full h-full sm:w-[95%] sm:h-[90%] md:w-[70%] md:h-[85%] flex flex-col transform transition-all duration-500 ease-out translate-y-10 opacity-0 scale-95" onclick="event.stopPropagation()" role="document" tabindex="-1" aria-labelledby="contact-modal-title" data-astro-cid-xmivup5a> <!-- Header --> <div class="sticky top-0 z-10 flex justify-end p-3 glass-header border-b border-white/10" data-astro-cid-xmivup5a> <button id="close-contact-btn" onclick="closeContactForm()" class="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center bg-black/60 hover:bg-black/70 text-white rounded-full shadow-md transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" aria-label="Close contact form" data-astro-cid-xmivup5a>\u2715</button> </div> <!-- Form --> <div class="flex-1 overflow-y-auto p-6 sm:p-10" data-astro-cid-xmivup5a> <div class="glass-box max-w-2xl mx-auto p-8 rounded-2xl shadow-sm" data-astro-cid-xmivup5a> <h3 id="contact-modal-title" class="text-2xl font-bold text-white mb-4" data-astro-cid-xmivup5a>Start a Conversation</h3> <form id="contact-form" class="space-y-6" novalidate data-astro-cid-xmivup5a> <input type="hidden" name="access_key" value="adb0d3eb-198d-40ab-bfeb-d6d36ed4e402" data-astro-cid-xmivup5a> <input type="hidden" name="subject" value="New Contact Form Submission - OPTYP" data-astro-cid-xmivup5a> <input type="hidden" name="from_name" value="OPTYP Contact Form" data-astro-cid-xmivup5a> <input type="checkbox" name="botcheck" style="display:none" data-astro-cid-xmivup5a> <!-- Name + Email --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-xmivup5a> <div data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>Full Name *</label> <input type="text" name="name" required aria-required="true" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> <div class="field-error text-pink-400 text-sm mt-1 hidden" aria-live="polite" data-astro-cid-xmivup5a></div> </div> <div data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>Email *</label> <input type="email" name="email" required aria-required="true" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> <div class="field-error text-pink-400 text-sm mt-1 hidden" aria-live="polite" data-astro-cid-xmivup5a></div> </div> </div> <!-- Phone --> <div data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>Contact Number *</label> <input type="tel" name="phone" required placeholder="+91 9876543210" aria-required="true" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> <div class="field-error text-pink-400 text-sm mt-1 hidden" aria-live="polite" data-astro-cid-xmivup5a></div> </div> <!-- Profession --> <div data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>What do you currently do? *</label> <select name="profession" id="profession" required aria-required="true" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> <option value="" data-astro-cid-xmivup5a>Select an option</option> <option value="salaried" data-astro-cid-xmivup5a>Salaried Professional</option> <option value="self-employed" data-astro-cid-xmivup5a>Self-Employed</option> <option value="student" data-astro-cid-xmivup5a>Student</option> </select> <div class="field-error text-pink-400 text-sm mt-1 hidden" aria-live="polite" data-astro-cid-xmivup5a></div> </div> <!-- Experience --> <div id="experience-wrapper" class="hidden" data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>Years of Experience *</label> <select name="experience" id="experience" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> <option value="" data-astro-cid-xmivup5a>Select experience</option> <option value="0" data-astro-cid-xmivup5a>0 years (Fresher)</option> <option value="1-2" data-astro-cid-xmivup5a>1\u20132 years</option> <option value="3-5" data-astro-cid-xmivup5a>3\u20135 years</option> <option value="5-10" data-astro-cid-xmivup5a>5\u201310 years</option> <option value="10-15" data-astro-cid-xmivup5a>10\u201315 years</option> <option value="15+" data-astro-cid-xmivup5a>15+ years</option> </select> <div class="field-error text-pink-400 text-sm mt-1 hidden" aria-live="polite" data-astro-cid-xmivup5a></div> </div> <!-- Services --> <div data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>Select Services *</label> <select name="services" id="services" multiple required aria-required="true" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> <option value="ATS Resume" data-astro-cid-xmivup5a>ATS Resume</option> <option value="LinkedIn Optimization" data-astro-cid-xmivup5a>LinkedIn Optimization</option> <option value="Naukri" data-astro-cid-xmivup5a>Naukri</option> <option value="Indeed" data-astro-cid-xmivup5a>Indeed</option> <option value="GitHub" data-astro-cid-xmivup5a>GitHub</option> <option value="Portfolio Website" data-astro-cid-xmivup5a>Portfolio Website</option> <option value="Upwork" data-astro-cid-xmivup5a>Upwork</option> <option value="Fiverr" data-astro-cid-xmivup5a>Fiverr</option> <option value="Topal" data-astro-cid-xmivup5a>Topal</option> <option value="Personal Branding" data-astro-cid-xmivup5a>Personal Branding</option> </select> <p class="text-sm text-gray-400 mt-1" data-astro-cid-xmivup5a>Hold CTRL (Windows) or CMD (Mac) to select multiple.</p> <div class="field-error text-pink-400 text-sm mt-1 hidden" aria-live="polite" data-astro-cid-xmivup5a></div> </div> <!-- Referral / Coupon Code (Optional) --> <div data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>Referral or Coupon Code (optional)</label> <input type="text" name="referral_code" placeholder="Enter referral or coupon code (if any)" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> </div> <!-- Message --> <div data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>Message *</label> <textarea name="message" rows="5" required aria-required="true" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a></textarea> <div class="field-error text-pink-400 text-sm mt-1 hidden" aria-live="polite" data-astro-cid-xmivup5a></div> </div> <!-- Submit --> <div class="text-center" data-astro-cid-xmivup5a> <button id="submit-btn" type="submit" class="inline-flex items-center justify-center gap-2 glass-btn px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> <span id="btn-text" data-astro-cid-xmivup5a>Send Message</span> <svg id="btn-spinner" class="animate-spin h-5 w-5 text-white hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-xmivup5a> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-astro-cid-xmivup5a></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" data-astro-cid-xmivup5a></path> </svg> </button> </div> </form> </div> </div> </div> </div> <!-- Toast --> <div id="toast" class="fixed bottom-5 right-5 hidden z-[9999]" aria-live="polite" aria-atomic="true" data-astro-cid-xmivup5a> <div id="toast-content" class="flex items-center gap-3 px-6 py-4 rounded-xl border backdrop-blur-md bg-white/6 shadow-lg text-white font-medium transform translate-y-5 opacity-0 transition-all duration-500 ease-out" data-astro-cid-xmivup5a> <span id="toast-icon" class="text-xl" aria-hidden="true" data-astro-cid-xmivup5a></span> <span id="toast-message" data-astro-cid-xmivup5a></span> </div> </div> <!-- \u2705 Keep full JS logic as in your original file --> <script>
  /* ====== Elements & state ====== */
  let lastFocusedElement = null;
  const modal = document.getElementById('contact-modal');
  const content = document.getElementById('contact-modal-content');
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const btnText = document.getElementById("btn-text");
  const btnSpinner = document.getElementById("btn-spinner");

  const toast = document.getElementById("toast");
  const toastContent = document.getElementById("toast-content");
  const toastMessage = document.getElementById("toast-message");
  const toastIcon = document.getElementById("toast-icon");

  /* ====== Open / Close modal (with accessible focus handling) ====== */
  function openContactForm() {
    lastFocusedElement = document.activeElement;
    document.body.classList.add('overflow-hidden');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');

    requestAnimationFrame(() => {
      modal.classList.add('opacity-100');
      modal.classList.remove('opacity-0');
      content.classList.remove('translate-y-10','opacity-0','scale-95');
      content.classList.add('translate-y-0','opacity-100','scale-100');
    });

    const closeBtn = document.getElementById('close-contact-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeContactForm() {
    document.body.classList.remove('overflow-hidden');
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    content.classList.remove('translate-y-0','opacity-100','scale-100');
    content.classList.add('translate-y-10','opacity-0','scale-95');
    modal.setAttribute('aria-hidden', 'true');

    setTimeout(() => {
      modal.classList.add('hidden');
      if (lastFocusedElement) lastFocusedElement.focus();
    }, 500);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeContactForm();
    }
  });

  document.querySelectorAll('a[href*="#contact"], a[href$="/#contact"], a[href$="#contact"]').forEach(el => {
    el.addEventListener('click', (ev) => {
      ev.preventDefault();
      openContactForm();
    });
  });

  document.addEventListener('click', (ev) => {
    const a = ev.target.closest && ev.target.closest('a[href*="#contact"]');
    if (a) {
      ev.preventDefault();
      openContactForm();
    }
  });

  document.getElementById("profession").addEventListener("change", function() {
    const expWrapper = document.getElementById("experience-wrapper");
    const expField = document.getElementById("experience");
    if (this.value === "salaried") {
      expWrapper.classList.remove("hidden");
      expField.setAttribute('required','true');
    } else {
      expWrapper.classList.add("hidden");
      expField.removeAttribute('required');
      expField.value = '';
    }
  });

  function showToast(msg, type="info") {
    toastMessage.textContent = msg;
    toastContent.className =
      "flex items-center gap-3 px-6 py-4 rounded-xl border backdrop-blur-md bg-white/6 shadow-lg font-medium transform translate-y-5 opacity-0 transition-all duration-500 ease-out";
    if(type==="success"){
      toastIcon.textContent="\u2714\uFE0F";
      toastContent.classList.add("border-green-400","text-green-200");
    } else if(type==="error"){
      toastIcon.textContent="\u274C";
      toastContent.classList.add("border-pink-400","text-pink-200");
    } else {
      toastIcon.textContent="\u2139\uFE0F";
      toastContent.classList.add("border-[#47C6A2]","text-[#47C6A2]");
    }
    toast.classList.remove("hidden");
    requestAnimationFrame(()=>{
      toastContent.classList.remove("opacity-0","translate-y-5");
      toastContent.classList.add("opacity-100","translate-y-0");
    });
    setTimeout(()=>{
      toastContent.classList.remove("opacity-100","translate-y-0");
      toastContent.classList.add("opacity-0","translate-y-5");
      setTimeout(()=>toast.classList.add("hidden"),500);
    },3000);
  }

  function validateForm() {
    let valid=true;
    form.querySelectorAll(".field-error").forEach(e=>e.classList.add("hidden"));
    const req=["name","email","phone","profession","services","message"];
    req.forEach(n=>{
      const f=form.querySelector(\`[name="\${n}"]\`);
      if(!f) return;
      const value = f.multiple ? Array.from(f.selectedOptions).map(o=>o.value).join(', ').trim() : (f.value || '').trim();
      if(!value){
        f.classList.add("border-pink-400");
        const errEl = f.parentNode.querySelector(".field-error");
        if(errEl){ errEl.textContent="This field is required"; errEl.classList.remove("hidden"); }
        valid=false;
      } else {
        f.classList.remove("border-pink-400");
      }
    });

    if(form.profession && form.profession.value==="salaried" && !form.experience.value){
      form.experience.classList.add("border-pink-400");
      form.experience.parentNode.querySelector(".field-error").textContent="Please select experience";
      form.experience.parentNode.querySelector(".field-error").classList.remove("hidden");
      valid=false;
    }

    const email=form.email?.value || "";
    if(email && !/^[^@]+@[^@]+\\.[^@]+$/.test(email)){
      form.email.parentNode.querySelector(".field-error").textContent="Invalid email";
      form.email.parentNode.querySelector(".field-error").classList.remove("hidden");
      form.email.classList.add("border-pink-400");
      valid=false;
    }

    const phone=form.phone?.value || "";
    if(phone && !/^[\\+]?[\\d\\s\\-]{10,15}$/.test(phone)){
      form.phone.parentNode.querySelector(".field-error").textContent="Invalid phone";
      form.phone.parentNode.querySelector(".field-error").classList.remove("hidden");
      form.phone.classList.add("border-pink-400");
      valid=false;
    }
    return valid;
  }

  form.addEventListener("submit", async e => {
    e.preventDefault();
    if(!validateForm()){ showToast("Please fix errors","error"); return; }
    btnText.textContent="Sending...";
    btnSpinner.classList.remove("hidden");
    submitBtn.disabled=true;

    try {
      const fd = new FormData(form);
      const services = fd.getAll("services");
      fd.delete("services");
      fd.append("services", services.join(", "));

      const payload = {};
      for (const [k, v] of fd.entries()) payload[k] = v;

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await res.json();

      if (res.status === 200) {
        showToast("Message sent successfully!","success");
        form.reset();
        setTimeout(()=>{ closeContactForm(); window.location.href = \`\${siteUrl}/thank-you/\`; }, 2000);
      } else {
        showToast(result.message || "Failed to send","error");
      }
    } catch (err) {
      showToast("Network error. Try again","error");
    } finally {
      btnText.textContent="Send Message";
      btnSpinner.classList.add("hidden");
      submitBtn.disabled=false;
    }
  });
<\/script> `], ["<!-- Contact CTA Section -->", `<section class="bg-gradient-to-br from-black via-gray-900 to-black py-20 text-white" data-astro-cid-xmivup5a> <div class="container mx-auto max-w-5xl px-4 text-center" data-astro-cid-xmivup5a> <h2 class="text-4xl font-extrabold mb-4 text-white tracking-wide-heading" data-astro-cid-xmivup5a>
Contact Us
</h2> <div class="w-20 h-1 bg-gradient-to-r from-[#47C6A2] to-green-400 mx-auto mb-10 rounded-full shadow-sm" data-astro-cid-xmivup5a></div> <p class="text-gray-300 mb-12 max-w-xl mx-auto" data-astro-cid-xmivup5a>
Have questions or want to get started? Click below to open the form.
</p> <div class="flex flex-col items-center space-y-2" data-astro-cid-xmivup5a> <button class="inline-block glass-btn px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" onclick="openContactForm()" aria-haspopup="dialog" aria-controls="contact-modal" data-astro-cid-xmivup5a>
Get Started
</button> </div> </div> </section> <!-- Modal --> <div id="contact-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 hidden opacity-0 transition-opacity duration-500 ease-out" role="dialog" aria-modal="true" aria-hidden="true" onclick="closeContactForm()" data-astro-cid-xmivup5a> <div id="contact-modal-content" class="relative glass-panel w-full h-full sm:w-[95%] sm:h-[90%] md:w-[70%] md:h-[85%] flex flex-col transform transition-all duration-500 ease-out translate-y-10 opacity-0 scale-95" onclick="event.stopPropagation()" role="document" tabindex="-1" aria-labelledby="contact-modal-title" data-astro-cid-xmivup5a> <!-- Header --> <div class="sticky top-0 z-10 flex justify-end p-3 glass-header border-b border-white/10" data-astro-cid-xmivup5a> <button id="close-contact-btn" onclick="closeContactForm()" class="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center bg-black/60 hover:bg-black/70 text-white rounded-full shadow-md transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" aria-label="Close contact form" data-astro-cid-xmivup5a>\u2715</button> </div> <!-- Form --> <div class="flex-1 overflow-y-auto p-6 sm:p-10" data-astro-cid-xmivup5a> <div class="glass-box max-w-2xl mx-auto p-8 rounded-2xl shadow-sm" data-astro-cid-xmivup5a> <h3 id="contact-modal-title" class="text-2xl font-bold text-white mb-4" data-astro-cid-xmivup5a>Start a Conversation</h3> <form id="contact-form" class="space-y-6" novalidate data-astro-cid-xmivup5a> <input type="hidden" name="access_key" value="adb0d3eb-198d-40ab-bfeb-d6d36ed4e402" data-astro-cid-xmivup5a> <input type="hidden" name="subject" value="New Contact Form Submission - OPTYP" data-astro-cid-xmivup5a> <input type="hidden" name="from_name" value="OPTYP Contact Form" data-astro-cid-xmivup5a> <input type="checkbox" name="botcheck" style="display:none" data-astro-cid-xmivup5a> <!-- Name + Email --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-xmivup5a> <div data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>Full Name *</label> <input type="text" name="name" required aria-required="true" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> <div class="field-error text-pink-400 text-sm mt-1 hidden" aria-live="polite" data-astro-cid-xmivup5a></div> </div> <div data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>Email *</label> <input type="email" name="email" required aria-required="true" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> <div class="field-error text-pink-400 text-sm mt-1 hidden" aria-live="polite" data-astro-cid-xmivup5a></div> </div> </div> <!-- Phone --> <div data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>Contact Number *</label> <input type="tel" name="phone" required placeholder="+91 9876543210" aria-required="true" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> <div class="field-error text-pink-400 text-sm mt-1 hidden" aria-live="polite" data-astro-cid-xmivup5a></div> </div> <!-- Profession --> <div data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>What do you currently do? *</label> <select name="profession" id="profession" required aria-required="true" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> <option value="" data-astro-cid-xmivup5a>Select an option</option> <option value="salaried" data-astro-cid-xmivup5a>Salaried Professional</option> <option value="self-employed" data-astro-cid-xmivup5a>Self-Employed</option> <option value="student" data-astro-cid-xmivup5a>Student</option> </select> <div class="field-error text-pink-400 text-sm mt-1 hidden" aria-live="polite" data-astro-cid-xmivup5a></div> </div> <!-- Experience --> <div id="experience-wrapper" class="hidden" data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>Years of Experience *</label> <select name="experience" id="experience" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> <option value="" data-astro-cid-xmivup5a>Select experience</option> <option value="0" data-astro-cid-xmivup5a>0 years (Fresher)</option> <option value="1-2" data-astro-cid-xmivup5a>1\u20132 years</option> <option value="3-5" data-astro-cid-xmivup5a>3\u20135 years</option> <option value="5-10" data-astro-cid-xmivup5a>5\u201310 years</option> <option value="10-15" data-astro-cid-xmivup5a>10\u201315 years</option> <option value="15+" data-astro-cid-xmivup5a>15+ years</option> </select> <div class="field-error text-pink-400 text-sm mt-1 hidden" aria-live="polite" data-astro-cid-xmivup5a></div> </div> <!-- Services --> <div data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>Select Services *</label> <select name="services" id="services" multiple required aria-required="true" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> <option value="ATS Resume" data-astro-cid-xmivup5a>ATS Resume</option> <option value="LinkedIn Optimization" data-astro-cid-xmivup5a>LinkedIn Optimization</option> <option value="Naukri" data-astro-cid-xmivup5a>Naukri</option> <option value="Indeed" data-astro-cid-xmivup5a>Indeed</option> <option value="GitHub" data-astro-cid-xmivup5a>GitHub</option> <option value="Portfolio Website" data-astro-cid-xmivup5a>Portfolio Website</option> <option value="Upwork" data-astro-cid-xmivup5a>Upwork</option> <option value="Fiverr" data-astro-cid-xmivup5a>Fiverr</option> <option value="Topal" data-astro-cid-xmivup5a>Topal</option> <option value="Personal Branding" data-astro-cid-xmivup5a>Personal Branding</option> </select> <p class="text-sm text-gray-400 mt-1" data-astro-cid-xmivup5a>Hold CTRL (Windows) or CMD (Mac) to select multiple.</p> <div class="field-error text-pink-400 text-sm mt-1 hidden" aria-live="polite" data-astro-cid-xmivup5a></div> </div> <!-- Referral / Coupon Code (Optional) --> <div data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>Referral or Coupon Code (optional)</label> <input type="text" name="referral_code" placeholder="Enter referral or coupon code (if any)" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> </div> <!-- Message --> <div data-astro-cid-xmivup5a> <label class="block text-sm font-semibold mb-1 text-gray-200" data-astro-cid-xmivup5a>Message *</label> <textarea name="message" rows="5" required aria-required="true" class="w-full rounded-xl border border-white/10 p-3 bg-black/60 text-white focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a></textarea> <div class="field-error text-pink-400 text-sm mt-1 hidden" aria-live="polite" data-astro-cid-xmivup5a></div> </div> <!-- Submit --> <div class="text-center" data-astro-cid-xmivup5a> <button id="submit-btn" type="submit" class="inline-flex items-center justify-center gap-2 glass-btn px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-[#47C6A2]" data-astro-cid-xmivup5a> <span id="btn-text" data-astro-cid-xmivup5a>Send Message</span> <svg id="btn-spinner" class="animate-spin h-5 w-5 text-white hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-xmivup5a> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-astro-cid-xmivup5a></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" data-astro-cid-xmivup5a></path> </svg> </button> </div> </form> </div> </div> </div> </div> <!-- Toast --> <div id="toast" class="fixed bottom-5 right-5 hidden z-[9999]" aria-live="polite" aria-atomic="true" data-astro-cid-xmivup5a> <div id="toast-content" class="flex items-center gap-3 px-6 py-4 rounded-xl border backdrop-blur-md bg-white/6 shadow-lg text-white font-medium transform translate-y-5 opacity-0 transition-all duration-500 ease-out" data-astro-cid-xmivup5a> <span id="toast-icon" class="text-xl" aria-hidden="true" data-astro-cid-xmivup5a></span> <span id="toast-message" data-astro-cid-xmivup5a></span> </div> </div> <!-- \u2705 Keep full JS logic as in your original file --> <script>
  /* ====== Elements & state ====== */
  let lastFocusedElement = null;
  const modal = document.getElementById('contact-modal');
  const content = document.getElementById('contact-modal-content');
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const btnText = document.getElementById("btn-text");
  const btnSpinner = document.getElementById("btn-spinner");

  const toast = document.getElementById("toast");
  const toastContent = document.getElementById("toast-content");
  const toastMessage = document.getElementById("toast-message");
  const toastIcon = document.getElementById("toast-icon");

  /* ====== Open / Close modal (with accessible focus handling) ====== */
  function openContactForm() {
    lastFocusedElement = document.activeElement;
    document.body.classList.add('overflow-hidden');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');

    requestAnimationFrame(() => {
      modal.classList.add('opacity-100');
      modal.classList.remove('opacity-0');
      content.classList.remove('translate-y-10','opacity-0','scale-95');
      content.classList.add('translate-y-0','opacity-100','scale-100');
    });

    const closeBtn = document.getElementById('close-contact-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeContactForm() {
    document.body.classList.remove('overflow-hidden');
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    content.classList.remove('translate-y-0','opacity-100','scale-100');
    content.classList.add('translate-y-10','opacity-0','scale-95');
    modal.setAttribute('aria-hidden', 'true');

    setTimeout(() => {
      modal.classList.add('hidden');
      if (lastFocusedElement) lastFocusedElement.focus();
    }, 500);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeContactForm();
    }
  });

  document.querySelectorAll('a[href*="#contact"], a[href$="/#contact"], a[href$="#contact"]').forEach(el => {
    el.addEventListener('click', (ev) => {
      ev.preventDefault();
      openContactForm();
    });
  });

  document.addEventListener('click', (ev) => {
    const a = ev.target.closest && ev.target.closest('a[href*="#contact"]');
    if (a) {
      ev.preventDefault();
      openContactForm();
    }
  });

  document.getElementById("profession").addEventListener("change", function() {
    const expWrapper = document.getElementById("experience-wrapper");
    const expField = document.getElementById("experience");
    if (this.value === "salaried") {
      expWrapper.classList.remove("hidden");
      expField.setAttribute('required','true');
    } else {
      expWrapper.classList.add("hidden");
      expField.removeAttribute('required');
      expField.value = '';
    }
  });

  function showToast(msg, type="info") {
    toastMessage.textContent = msg;
    toastContent.className =
      "flex items-center gap-3 px-6 py-4 rounded-xl border backdrop-blur-md bg-white/6 shadow-lg font-medium transform translate-y-5 opacity-0 transition-all duration-500 ease-out";
    if(type==="success"){
      toastIcon.textContent="\u2714\uFE0F";
      toastContent.classList.add("border-green-400","text-green-200");
    } else if(type==="error"){
      toastIcon.textContent="\u274C";
      toastContent.classList.add("border-pink-400","text-pink-200");
    } else {
      toastIcon.textContent="\u2139\uFE0F";
      toastContent.classList.add("border-[#47C6A2]","text-[#47C6A2]");
    }
    toast.classList.remove("hidden");
    requestAnimationFrame(()=>{
      toastContent.classList.remove("opacity-0","translate-y-5");
      toastContent.classList.add("opacity-100","translate-y-0");
    });
    setTimeout(()=>{
      toastContent.classList.remove("opacity-100","translate-y-0");
      toastContent.classList.add("opacity-0","translate-y-5");
      setTimeout(()=>toast.classList.add("hidden"),500);
    },3000);
  }

  function validateForm() {
    let valid=true;
    form.querySelectorAll(".field-error").forEach(e=>e.classList.add("hidden"));
    const req=["name","email","phone","profession","services","message"];
    req.forEach(n=>{
      const f=form.querySelector(\\\`[name="\\\${n}"]\\\`);
      if(!f) return;
      const value = f.multiple ? Array.from(f.selectedOptions).map(o=>o.value).join(', ').trim() : (f.value || '').trim();
      if(!value){
        f.classList.add("border-pink-400");
        const errEl = f.parentNode.querySelector(".field-error");
        if(errEl){ errEl.textContent="This field is required"; errEl.classList.remove("hidden"); }
        valid=false;
      } else {
        f.classList.remove("border-pink-400");
      }
    });

    if(form.profession && form.profession.value==="salaried" && !form.experience.value){
      form.experience.classList.add("border-pink-400");
      form.experience.parentNode.querySelector(".field-error").textContent="Please select experience";
      form.experience.parentNode.querySelector(".field-error").classList.remove("hidden");
      valid=false;
    }

    const email=form.email?.value || "";
    if(email && !/^[^@]+@[^@]+\\\\.[^@]+$/.test(email)){
      form.email.parentNode.querySelector(".field-error").textContent="Invalid email";
      form.email.parentNode.querySelector(".field-error").classList.remove("hidden");
      form.email.classList.add("border-pink-400");
      valid=false;
    }

    const phone=form.phone?.value || "";
    if(phone && !/^[\\\\+]?[\\\\d\\\\s\\\\-]{10,15}$/.test(phone)){
      form.phone.parentNode.querySelector(".field-error").textContent="Invalid phone";
      form.phone.parentNode.querySelector(".field-error").classList.remove("hidden");
      form.phone.classList.add("border-pink-400");
      valid=false;
    }
    return valid;
  }

  form.addEventListener("submit", async e => {
    e.preventDefault();
    if(!validateForm()){ showToast("Please fix errors","error"); return; }
    btnText.textContent="Sending...";
    btnSpinner.classList.remove("hidden");
    submitBtn.disabled=true;

    try {
      const fd = new FormData(form);
      const services = fd.getAll("services");
      fd.delete("services");
      fd.append("services", services.join(", "));

      const payload = {};
      for (const [k, v] of fd.entries()) payload[k] = v;

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await res.json();

      if (res.status === 200) {
        showToast("Message sent successfully!","success");
        form.reset();
        setTimeout(()=>{ closeContactForm(); window.location.href = \\\`\\\${siteUrl}/thank-you/\\\`; }, 2000);
      } else {
        showToast(result.message || "Failed to send","error");
      }
    } catch (err) {
      showToast("Network error. Try again","error");
    } finally {
      btnText.textContent="Send Message";
      btnSpinner.classList.add("hidden");
      submitBtn.disabled=false;
    }
  });
<\/script> `])), maybeRenderHead());
}, "D:/daws/repos/optyp.github.io/src/components/Contact.astro", void 0);

export { $$Contact as $ };
