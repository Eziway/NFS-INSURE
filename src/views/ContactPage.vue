<template>
  <div class="overflow-hidden bg-white">
    <!-- ============================================
         HERO SECTION
         ============================================ -->
    <section class="relative flex items-center justify-center text-center overflow-hidden"
      style="min-height:50vh; padding-top:120px; padding-bottom:80px; background: linear-gradient(135deg, #1a252f 0%, #2c3e50 40%, #1a3a5c 70%, #0d2137 100%);">
      <div class="absolute inset-0 z-10 pointer-events-none" style="background: radial-gradient(circle at 20% 50%, rgba(212,175,55,.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(52,152,219,.15) 0%, transparent 50%)"></div>
      <div class="absolute inset-0 z-10 pointer-events-none" style="background-image: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(212,175,55,.04) 60px, rgba(212,175,55,.04) 61px)"></div>
      
      <div class="relative z-20 max-w-[860px] mx-auto px-6">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-[2px]" style="background: rgba(212,175,55,.15); border: 1px solid rgba(212,175,55,.4); color: #d4af37;">
          <i class="fas fa-envelope"></i> Get In Touch
        </div>
        <h1 class="font-extrabold text-white leading-tight mb-4" style="font-size: clamp(1.8rem,3.5vw,2.6rem); text-shadow: 0 4px 20px rgba(0,0,0,.4);">Contact Us</h1>
        <p class="mb-6 mx-auto" style="font-size:1.15rem; color:rgba(255,255,255,.8); max-width:700px; line-height:1.8;">
          Have a question or need assistance? Reach out to us using the form below or connect with our office directly.
        </p>
        <div style="color:rgba(255,255,255,.6); font-size:.95rem;">
          <router-link to="/" style="color:rgba(255,255,255,.8); text-decoration:none;" class="hover:text-yellow-400 transition-colors">Home</router-link>
          <span class="mx-2">/</span><span>Contact</span>
        </div>
      </div>

      <!-- Smooth Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg class="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="#f9fafb"></path>
        </svg>
      </div>
    </section>

    <!-- ============================================
         CONTACT CARDS & FORM SECTION
         ============================================ -->
    <section class="py-24" style="background:#f9fafb;">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(212,175,55,.1); color:#b8940e; border:1px solid rgba(212,175,55,.3);">Reach Out Today</div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#1a252f;">Send Your Message</h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; max-width:720px; line-height:1.8;">
            Our dedicated team is ready to answer your questions and assist with your financial and insurance requirements.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Contact Info Cards (Left Side) -->
          <div class="lg:col-span-5 space-y-6">
            
            <!-- Address Card -->
            <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-[#d4af37] transition-all duration-300 flex items-start gap-5">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0" style="background:rgba(212,175,55,.15); color:#b8940e;">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 class="font-bold text-lg mb-2" style="color:#1a252f">Our Office</h4>
                <p class="text-slate-600 text-sm leading-relaxed mb-0">
                  <a href="https://www.google.com/maps/search/Eagle+Canyon+Office+Park,+Corner+Christiaan+De+Wet+Street+and+Dolfyn+Street,+Randpark+Ridge,+2154" target="_blank" class="text-slate-600 hover:text-[#d4af37] transition-colors no-underline">
                    Eagle Canyon Office Park, Cnr Christiaan De Wet & Dolfyn St, Randpark Ridge, 2154
                  </a>
                </p>
              </div>
            </div>

            <!-- Mail Us Card -->
            <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-[#d4af37] transition-all duration-300 flex items-start gap-5">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0" style="background:rgba(212,175,55,.15); color:#b8940e;">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <h4 class="font-bold text-lg mb-2" style="color:#1a252f">Mail Us</h4>
                <p class="text-slate-600 text-sm leading-relaxed mb-1">
                  <a href="mailto:info@nfs.insure" class="text-slate-600 hover:text-[#d4af37] font-semibold transition-colors no-underline">info@nfs.insure</a>
                </p>
                <p class="text-xs text-slate-400 m-0">Fast response within 24 hours</p>
              </div>
            </div>

            <!-- Telephone Card -->
            <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-[#d4af37] transition-all duration-300 flex items-start gap-5">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0" style="background:rgba(212,175,55,.15); color:#b8940e;">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div>
                <h4 class="font-bold text-lg mb-2" style="color:#1a252f">Call Us</h4>
                <p class="text-slate-600 text-sm leading-relaxed mb-1">
                  <a href="tel:+27100110010" class="text-slate-600 hover:text-[#d4af37] font-semibold transition-colors no-underline">+27 10 011 0010</a>
                </p>
                <p class="text-xs text-slate-400 m-0">Mon - Fri: 8:00 AM - 5:00 PM</p>
              </div>
            </div>

            <!-- Regulatory Badge Card -->
            <div class="p-6 rounded-3xl text-white shadow-xl" style="background: linear-gradient(135deg, #1a252f 0%, #2c3e50 100%);">
              <div class="flex items-center gap-3 mb-2">
                <i class="fas fa-shield-alt text-2xl" style="color:#d4af37"></i>
                <h5 class="font-extrabold text-base mb-0">Licensed FSP No. 53910</h5>
              </div>
              <p class="text-xs text-slate-300 m-0 leading-relaxed">
                Registered with the FSCA & Accredited by the Council for Medical Schemes (Accreditation No. ORG53309).
              </p>
            </div>

          </div>

          <!-- Contact Form (Right Side) -->
          <div class="lg:col-span-7 bg-white rounded-3xl p-10 md:p-12 border border-slate-200 shadow-xl">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name -->
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Your Name</label>
                  <input type="text" v-model="form.name" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#d4af37] text-slate-800 text-sm transition-all" placeholder="John Doe" />
                </div>
                <!-- Email -->
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Your Email</label>
                  <input type="email" v-model="form.email" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#d4af37] text-slate-800 text-sm transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Phone -->
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Your Phone</label>
                  <input type="tel" v-model="form.phone" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#d4af37] text-slate-800 text-sm transition-all" placeholder="+27 82 123 4567" />
                </div>
                <!-- Select Service -->
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Select Solution</label>
                  <select v-model="form.project" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#d4af37] text-slate-800 text-sm transition-all">
                    <option value="" disabled>Select a Solution</option>
                    <option value="Risk Cover">Risk Cover</option>
                    <option value="Medical Aid">Medical Aid</option>
                    <option value="Short-Term Insurance">Short-Term Insurance</option>
                    <option value="Savings and Investments">Savings and Investments</option>
                    <option value="Pension and Annuities">Pension and Annuities</option>
                    <option value="Home Loans">Home Loans</option>
                    <option value="SMME Funding">SMME Funding</option>
                    <option value="Solar Financing">Solar Financing</option>
                    <option value="Diplomatic Desk">Diplomatic Desk</option>
                    <option value="Bonds & Guarantees">Bonds & Guarantees</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Subject</label>
                <input type="text" v-model="form.subject" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#d4af37] text-slate-800 text-sm transition-all" placeholder="How can we assist you?" />
              </div>

              <!-- Message -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Message</label>
                <textarea v-model="form.message" required rows="5" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#d4af37] text-slate-800 text-sm transition-all resize-none" placeholder="Type your message here..."></textarea>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button type="button" @click="suggestMessage" class="px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer" style="background:rgba(212,175,55,.1); border-color:rgba(212,175,55,.4); color:#b8940e;">
                  ✨ Suggest Message
                </button>

                <button type="submit" class="px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-lg flex items-center gap-2 cursor-pointer border-none" style="background:linear-gradient(135deg, #1a252f 0%, #2c3e50 100%); color:white;" :disabled="isSubmitting">
                  <span v-if="!isSubmitting">Send Message</span>
                  <span v-else>Sending...</span>
                  <i v-if="!isSubmitting" class="fas fa-paper-plane text-xs" style="color:#d4af37"></i>
                  <i v-else class="fas fa-spinner fa-spin text-xs"></i>
                </button>
              </div>

              <!-- Alert Banner -->
              <div v-if="successMsg" class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold flex items-center gap-3">
                <i class="fas fa-check-circle text-lg text-emerald-600"></i>
                Thank you! Your message has been sent successfully. An advisor will get back to you shortly.
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>

    <!-- ============================================
         MAP SECTION
         ============================================ -->
    <section class="py-20 bg-white">
      <div class="max-w-[1200px] mx-auto px-6 text-center">
        <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Our Location</div>
        <h2 class="font-extrabold mb-8" style="font-size:clamp(2rem,4vw,3rem); color:#1a252f;">Find Us on the Map</h2>
        
        <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.665324546452!2d27.91584961504958!3d-26.06945038342416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e959efc3f1f7e09%3A0x6b77c5d4f3b1b6d0!2sEagle%20Canyon%20Office%20Park!5e0!3m2!1sen!2sza!4v1678200000000!5m2!1sen!2sza" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const form = ref({
  name: '',
  email: '',
  phone: '',
  project: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const successMsg = ref(false);

function suggestMessage() {
  form.value = {
    name: 'Sipho Ndlovu',
    email: 'sipho@example.co.za',
    phone: '+27 82 555 1234',
    project: 'Risk Cover',
    subject: 'Inquiry regarding Life Cover & Critical Illness Protection',
    message: 'Good day NFS Insure team, I am interested in exploring comprehensive life cover and critical illness protection for my family. Please have a consultant reach out to me with available options.'
  };
}

function submitForm() {
  isSubmitting.value = true;
  setTimeout(() => {
    isSubmitting.value = false;
    successMsg.value = true;
    form.value = { name: '', email: '', phone: '', project: '', subject: '', message: '' };
    setTimeout(() => {
      successMsg.value = false;
    }, 6000);
  }, 1200);
}

onMounted(() => {
  window.scrollTo(0, 0);
  if (route.query.service) {
    form.value.project = route.query.service;
  }
  if (route.query.subject) {
    form.value.subject = `Inquiry regarding ${route.query.subject}`;
    form.value.message = `Good day NFS Insure team, I would like to request a quote / specialist consultation regarding ${route.query.subject}. Please have an advisor contact me.`;
  }
});
</script>
