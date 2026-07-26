<template>
  <div class="overflow-hidden bg-white">
    <!-- ============================================
         HERO SECTION (Clean & Uncluttered)
         ============================================ -->
    <section
      class="relative min-h-[88vh] flex items-center pt-[150px] pb-28 bg-[#1a252f] overflow-hidden"
      id="home"
    >
      <!-- Background Image: hero-future.png -->
      <div class="absolute inset-0 z-0">
        <img
          src="/img/hero-future.png"
          alt="NFS Insure Background"
          class="w-full h-full object-cover object-center"
          onerror="this.src='/img/bg01.jpg'"
        />
        <!-- Dark Navy Overlay -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#0d1622]/95 via-[#1a252f]/85 to-[#0f172a]/75 z-10"></div>
      </div>

      <div class="max-w-[1250px] mx-auto px-6 relative z-20 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Text Content -->
          <div class="lg:col-span-7 text-left">

            <!-- Main Headline -->
            <h1 class="text-[clamp(2.1rem,3.8vw,3.2rem)] font-extrabold text-white mb-5 leading-[1.15] tracking-tight">
              Insurance That<br />
              <span class="text-[#d4af37]">Makes you happy</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-base text-slate-200 mb-8 leading-relaxed font-normal max-w-xl">
              We're more than just a Financial Services Provider, we're your partner in protecting your tomorrow today. Dedicated to providing exceptional service and support every step of the way.
            </p>

            <!-- Buttons -->
            <div class="flex items-center gap-4 flex-wrap">
              <router-link
                to="/contact"
                class="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] no-underline"
                style="background: linear-gradient(135deg, #d4af37 0%, #f1c40f 100%); color: #1a252f;"
              >
                <i class="fas fa-shield-alt"></i>
                Get Protected Today
              </router-link>

              <router-link
                to="/services"
                class="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm text-white border border-white/40 bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md no-underline"
              >
                <i class="fas fa-play text-xs"></i>
                Learn More
              </router-link>
            </div>
          </div>

          <!-- Right Column: Sleek Floating Glass Showcase Card -->
          <div class="lg:col-span-5 relative hidden lg:block">
            <div class="relative w-full max-w-[460px] mx-auto">
              <!-- Glow backdrop -->
              <div class="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/30 to-[#f1c40f]/20 rounded-[2.5rem] blur-2xl"></div>
              
              <!-- Glass Card -->
              <div class="relative bg-[#1e2a4a]/85 backdrop-blur-2xl border border-[#d4af37]/40 rounded-[2.5rem] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)] text-left">
                
                <!-- Card Header -->
                <div class="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-slate-900 text-xl font-bold shadow-md"
                      style="background: linear-gradient(135deg, #d4af37 0%, #f1c40f 100%);">
                      <i class="fas fa-umbrella"></i>
                    </div>
                    <div>
                      <h4 class="text-white font-bold text-base mb-0.5">NFS Insure</h4>
                      <span class="text-xs text-[#d4af37]">Protection Solutions</span>
                    </div>
                  </div>
                  <span class="px-3 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Accredited
                  </span>
                </div>

                <!-- Solution Highlights -->
                <div class="space-y-3 mb-6">
                  <div v-for="item in heroHighlights" :key="item.title"
                    class="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 hover:border-[#d4af37]/50 transition-all cursor-pointer"
                    @click="$router.push(item.to)"
                  >
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs" style="background:rgba(212,175,55,.15); color:#d4af37;">
                        <i :class="item.icon"></i>
                      </div>
                      <span class="text-white font-semibold text-xs">{{ item.title }}</span>
                    </div>
                    <i class="fas fa-chevron-right text-xs text-slate-400"></i>
                  </div>
                </div>

                <!-- Footer Trust Bar -->
                <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <div class="flex items-center gap-1 text-[#d4af37]">
                    <i class="fas fa-star" v-for="n in 5" :key="n"></i>
                  </div>
                  <span class="text-slate-300 font-medium">99.4% Satisfaction Rate</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      
      <!-- Smooth Curve Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg class="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="#f8fafc"></path>
        </svg>
      </div>
    </section>

    <!-- ============================================
         OUR FEATURES / BUILDING A BRIGHTER TOMORROW
         ============================================ -->
    <section class="py-20 bg-[#f8fafc] relative" id="features">
      <div class="max-w-[1200px] mx-auto px-6">
        
        <!-- Main White Card Container matching original site image -->
        <div class="bg-white rounded-[32px] p-8 md:p-14 border border-slate-100 shadow-[0_25px_70px_rgba(0,0,0,0.06)] text-center">
          
          <!-- Subtitle -->
          <div class="text-xs font-bold uppercase tracking-[0.2em] text-[#3498db] mb-4">
            OUR FEATURES
          </div>

          <!-- Title -->
          <h2 class="text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold text-[#1a252f] leading-tight mb-6">
            Building a Brighter Tomorrow
          </h2>

          <!-- Paragraphs -->
          <div class="space-y-6 text-slate-600 text-[1.02rem] leading-relaxed max-w-[850px] mx-auto mb-14">
            <p>
              At NFS Insure Consultant, we believe that insurance is more than just a policy - it's a promise of protection and security for a better future. Our mission is to provide you with peace of mind, knowing that you're covered in times of uncertainty.
            </p>
            <p>
              We're dedicated to being there for you when it matters most, offering personalized support and expert guidance to help you navigate life's challenges. Whether you're looking to safeguard your loved ones, protect your assets, or simply ensure a secure tomorrow, we're here to assist you every step of the way.
            </p>
            <p class="text-slate-600 font-medium">
              Trust NFS Insure Consultant to help you build a brighter future. Get in touch with us today to discover how our insurance solutions can provide you with the protection and reassurance you deserve.
            </p>
          </div>

          <!-- 3 Feature Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-[1050px] mx-auto pt-2">
            <div
              v-for="(card, index) in featureCards"
              :key="card.title"
              class="bg-white rounded-[24px] p-8 md:p-10 transition-all duration-300 flex flex-col items-center text-center cursor-pointer group"
              :class="index === 1 
                ? 'border-2 border-[#f1c40f] shadow-[0_20px_50px_rgba(241,196,15,0.18)] -translate-y-2' 
                : 'border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:border-[#f1c40f] hover:shadow-[0_20px_50px_rgba(241,196,15,0.18)] hover:-translate-y-2'"
            >
              <!-- Circle Icon -->
              <div class="w-[72px] h-[72px] rounded-full flex items-center justify-center text-2xl text-white mb-6 shadow-md transition-transform duration-300 group-hover:scale-110"
                style="background: linear-gradient(135deg, #a4b42b 0%, #d4af37 60%, #f1c40f 100%);">
                <i :class="card.icon"></i>
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold text-[#1a252f] mb-3">{{ card.title }}</h3>

              <!-- Description -->
              <p class="text-slate-500 text-sm leading-relaxed m-0 max-w-[280px]">{{ card.desc }}</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- ============================================
         SERVICES SECTION (All Services Grid)
         ============================================ -->
    <section class="py-24 bg-slate-50 relative" id="services">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div class="max-w-2xl">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style="background: rgba(212,175,55,.1); color: #b8940e; border: 1px solid rgba(212,175,55,.3);">
              <i class="fas fa-layer-group"></i> Our Protection Services
            </div>
            <h2 class="text-[clamp(1.6rem,2.8vw,2.2rem)] font-extrabold text-[#1a252f] leading-tight">
              Empowering Your <span style="color:#d4af37">Financial Freedom</span>
            </h2>
          </div>
          <router-link to="/services" class="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-white border border-slate-200 text-[#1a252f] font-bold hover:border-[#d4af37] hover:shadow-md transition-all shrink-0 no-underline">
            View All Services <i class="fas fa-arrow-right" style="color:#d4af37"></i>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in homeServices"
            :key="service.title"
            class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#d4af37] transition-all duration-300 flex flex-col group cursor-pointer"
            @click="$router.push(service.to)"
          >
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:scale-110" style="background:#f3f4f6; color:#1a252f;">
              <i :class="service.icon"></i>
            </div>
            <h3 class="text-2xl font-bold text-[#1a252f] mb-3">{{ service.title }}</h3>
            <p class="text-slate-500 text-sm leading-relaxed mb-6">{{ service.description }}</p>
            <ul class="space-y-2.5 mb-8 flex-1">
              <li v-for="feat in service.features" :key="feat" class="flex items-center gap-3 text-slate-700 text-sm">
                <i class="fas fa-check-circle shrink-0" style="color:#27ae60"></i> {{ feat }}
              </li>
            </ul>
            <router-link :to="service.to" class="mt-auto inline-flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all no-underline" style="color:#1a252f">
              Explore Plan <i class="fas fa-arrow-right" style="color:#d4af37"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         FAQ SECTION
         ============================================ -->
    <section class="py-24 bg-white relative z-10" id="faq">
      <div class="max-w-[850px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
            style="background: rgba(212,175,55,.1); color: #b8940e; border: 1px solid rgba(212,175,55,.3);">
            <i class="fas fa-question-circle"></i> Got Questions?
          </div>
          <h2 class="text-[clamp(1.6rem,2.8vw,2.2rem)] font-extrabold text-[#1a252f] mb-3">Frequently Asked Questions</h2>
          <p class="text-slate-600 text-sm">Everything you need to know about our licensing, products, and services.</p>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(faq, idx) in faqs" 
            :key="idx" 
            class="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
            :class="activeFaq === idx ? 'shadow-md bg-white border-[#d4af37]/60' : 'bg-slate-50 hover:border-slate-300'"
          >
            <button 
              @click="toggleFaq(idx)" 
              class="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer border-none bg-transparent"
            >
              <span class="font-bold text-[#1a252f] text-base pr-6">{{ faq.question }}</span>
              <div 
                class="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-300"
                :class="activeFaq === idx ? 'rotate-180 bg-[#1a252f] text-[#d4af37]' : ''"
              >
                <i class="fas fa-chevron-down text-xs"></i>
              </div>
            </button>
            
            <div 
              class="px-6 overflow-hidden transition-all duration-300 ease-in-out"
              :style="{ maxHeight: activeFaq === idx ? '250px' : '0', opacity: activeFaq === idx ? '1' : '0' }"
            >
              <p class="pb-6 text-slate-600 text-sm leading-relaxed m-0">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         TESTIMONIALS CAROUSEL SECTION
         ============================================ -->
    <section class="py-20 bg-[#f8fafc] relative">
      <div class="max-w-[950px] mx-auto px-6">
        <div class="text-center mb-10">
          <div class="text-xs font-bold uppercase tracking-[0.2em] text-[#3498db] mb-2">
            TESTIMONIALS
          </div>
          <h2 class="text-[clamp(1.6rem,2.8vw,2.2rem)] font-extrabold text-[#1a252f]">
            What Our Customers Are Saying
          </h2>
        </div>

        <!-- Carousel Card Container -->
        <div class="relative bg-white rounded-[32px] p-10 md:p-16 border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all">
          <!-- Light Blue Quote Icon Top Left -->
          <div class="absolute top-8 left-8 text-4xl text-blue-200 pointer-events-none">
            <i class="fas fa-quote-left"></i>
          </div>

          <!-- Active Testimonial Content -->
          <div class="text-center pt-4 pb-2 max-w-[760px] mx-auto">
            <p class="italic text-slate-700 text-lg md:text-xl leading-relaxed mb-8">
              {{ testimonials[activeTestimonial].quote }}
            </p>
            <h5 class="font-bold text-[#1a252f] text-lg mb-1">
              {{ testimonials[activeTestimonial].name }}
            </h5>
            <div class="text-slate-500 text-sm font-medium">
              {{ testimonials[activeTestimonial].role }}
            </div>
          </div>

          <!-- Prev / Next Navigation Arrows -->
          <button
            @click="prevTestimonial"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-50 hover:bg-[#1a252f] hover:text-white border border-slate-200 flex items-center justify-center text-slate-600 transition-all cursor-pointer shadow-sm"
            aria-label="Previous testimonial"
          >
            <i class="fas fa-chevron-left text-sm"></i>
          </button>

          <button
            @click="nextTestimonial"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-50 hover:bg-[#1a252f] hover:text-white border border-slate-200 flex items-center justify-center text-slate-600 transition-all cursor-pointer shadow-sm"
            aria-label="Next testimonial"
          >
            <i class="fas fa-chevron-right text-sm"></i>
          </button>
        </div>

        <!-- Carousel Dot Indicators -->
        <div class="flex justify-center items-center gap-2.5 mt-8">
          <button
            v-for="(t, idx) in testimonials"
            :key="idx"
            @click="activeTestimonial = idx"
            class="h-2.5 rounded-full transition-all duration-300 cursor-pointer border-none"
            :class="activeTestimonial === idx ? 'w-8 bg-[#3498db]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'"
            :aria-label="`Go to slide ${idx + 1}`"
          ></button>
        </div>
      </div>
    </section>

    <!-- ============================================
         CTA SECTION
         ============================================ -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="relative rounded-[2rem] p-16 text-center overflow-hidden" style="background:linear-gradient(135deg,#d4af37 0%,#f1c40f 100%);">
          <div class="relative z-10">
            <h2 class="font-extrabold mb-4 text-[#1a252f]" style="font-size:clamp(1.8rem,4vw,2.8rem);">Protect Your Tomorrow, Today</h2>
            <p class="mb-8 mx-auto text-slate-800" style="font-size:1.1rem; max-width:600px; line-height:1.7;">Speak to an NFS Insure advisor to structure the right cover for your family, business, or diplomatic mission.</p>
            <div class="flex flex-wrap gap-4 justify-center">
              <router-link to="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 hover:shadow-2xl transition-all no-underline" style="background:#1a252f; color:white;">
                <i class="fas fa-phone-alt text-[#d4af37]"></i> Contact Us
              </router-link>
              <router-link to="/medical-aid-apply" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 transition-all no-underline" style="background:transparent; border:2px solid rgba(26,37,47,.35); color:#1a252f;">
                <i class="fas fa-heartbeat"></i> Get a Quote
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activeFaq = ref(null);
const activeTestimonial = ref(0);

function toggleFaq(idx) {
  activeFaq.value = activeFaq.value === idx ? null : idx;
}

function nextTestimonial() {
  activeTestimonial.value = (activeTestimonial.value + 1) % testimonials.length;
}

function prevTestimonial() {
  activeTestimonial.value = (activeTestimonial.value - 1 + testimonials.length) % testimonials.length;
}

let testimonialTimer = null;
onMounted(() => {
  testimonialTimer = setInterval(nextTestimonial, 6000);
});
onUnmounted(() => {
  if (testimonialTimer) clearInterval(testimonialTimer);
});

const heroHighlights = [
  { title: 'Life & Risk Cover Solutions', icon: 'fas fa-umbrella', to: '/risk-cover' },
  { title: 'Medical Aid & Health Plans', icon: 'fas fa-heartbeat', to: '/medical-aid' },
  { title: 'SMME Funding & Growth', icon: 'fas fa-store', to: '/smme-funding' },
  { title: 'Home Loans & Pre-Qualify', icon: 'fas fa-key', to: '/home-loans' },
];

const featureCards = [
  {
    icon: 'fas fa-dollar-sign',
    title: 'Your Financial Freedom',
    desc: "Ready to take control of your finances? We're dedicated to helping you achieve financial freedom through comprehensive and personalized insurance solutions.",
  },
  {
    icon: 'fas fa-users',
    title: 'Expert Team',
    desc: 'Passionate about making a difference? Our dynamic team is dedicated to delivering exceptional customer service and expert advice you can trust.',
  },
  {
    icon: 'fas fa-headset',
    title: '24/7 Online Support',
    desc: 'We are here for you around the clock. Our dedicated support team is always ready to assist with your questions and provide the help you need, anytime.',
  },
];

const homeServices = [
  {
    title: 'Risk Cover',
    icon: 'fas fa-umbrella',
    description: 'Life cover, critical illness, disability protection, and income preservation.',
    features: ['Life & Funeral Cover', 'Critical Illness Benefit', 'Disability & Income Protection'],
    to: '/risk-cover',
  },
  {
    title: 'Medical Aid',
    icon: 'fas fa-heartbeat',
    description: 'Accredited healthcare advice for individuals, families, and corporate groups.',
    features: ['Top SA Medical Schemes', 'Individual & Family Plans', 'Corporate Group Schemes'],
    to: '/medical-aid',
  },
  {
    title: 'Short-Term Insurance',
    icon: 'fas fa-car-side',
    description: 'Comprehensive protection for motor vehicles, home contents, buildings, and commercial assets.',
    features: ['Motor & Household Cover', 'Commercial & Business', 'Health & Accident Insurance'],
    to: '/short-term-insurance',
  },
  {
    title: 'SMME Funding',
    icon: 'fas fa-store',
    description: 'Business funding solutions including Purchase Order funding, Tender funding, and Asset Finance.',
    features: ['14 Funding Products', 'PO & Invoice Financing', 'Funder Introductions'],
    to: '/smme-funding',
  },
  {
    title: 'Home Loans',
    icon: 'fas fa-key',
    description: 'Pre-qualification buyer certificate & multi-bank submission via ooba partnership.',
    features: ['Pre-Qualification Certificate', 'Multi-Bank Submission', 'Competitive Rate Comparison'],
    to: '/home-loans',
  },
  {
    title: 'Diplomatic Desk',
    icon: 'fas fa-landmark',
    description: 'Concierge division dedicated to Diplomatic Missions, Embassies, and International Organizations.',
    features: ['Embassy Building & Fleet', 'Financial Advisory Support', 'Readiness Assessment'],
    to: '/diplomatic',
  },
];

const faqs = [
  {
    question: "What does NFS Insure Consultant do?",
    answer: "NFS Insure Consultant is a licensed financial services provider (FSP No. 53910) specializing in comprehensive insurance solutions, including life insurance, medical aid, short-term insurance, investment planning, SMME funding, home loan pre-qualification, and diplomatic services."
  },
  {
    question: "Is NFS Insure Consultant a licensed provider?",
    answer: "Yes, we are a fully licensed Financial Services Provider (FSP No. 53910) registered with the Financial Sector Conduct Authority (FSCA) and accredited by The Council for Medical Schemes (Accreditation No. ORG53309). We are also a registered credit provider (NCRCP12678)."
  },
  {
    question: "How do I get a quote?",
    answer: "Getting a quote is easy! You can contact us directly via our phone number +27 10 011 0010, email info@nfs.insure, or by filling out the online application forms available across our website."
  },
  {
    question: "What is the Concierge Diplomatic Desk?",
    answer: "The Concierge Diplomatic Desk is a specialized division by NFS Insure dedicated to serving Diplomatic Missions, Embassies, High Commissions, and International Organizations with tailored insurance, banking facilitation, and strategic support."
  }
];

const testimonials = [
  {
    name: 'Nandi P',
    role: 'Individual Client',
    quote: '"I\'ve been with NFS Insure Consultant for years, and I\'ve never been disappointed. Their medical insurance plans are comprehensive and affordable. The claims process is seamless, and their customer support is top-notch. I have complete peace of mind knowing I\'m protected by NFS Insure Consultant."',
  },
  {
    name: 'Sipho M',
    role: 'Business Owner',
    quote: '"As a business owner, it\'s essential to have a reliable insurance partner. NFS Insure Consultant has been instrumental in helping me navigate the complex world of insurance. Their tailored group schemes are innovative and cost-effective. I appreciate their professionalism, expertise, and dedication to customer satisfaction."',
  },
  {
    name: 'Thabo M',
    role: 'Business Owner',
    quote: '"I was blown away by the exceptional service I received from NFS Insure Consultant. Their team went above and beyond to ensure I had the right coverage for my business. I highly recommend them to anyone looking for reliable and personalized insurance solutions."',
  },
];
</script>
