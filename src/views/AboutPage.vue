<template>
  <div class="overflow-hidden bg-white">

    <!-- ====================================================
         HERO
         ==================================================== -->
    <section class="relative flex items-center justify-center text-center overflow-hidden"
      style="min-height:55vh; padding-top:120px; padding-bottom:80px; background: linear-gradient(135deg, #1a252f 0%, #2c3e50 40%, #1a3a5c 70%, #0d2137 100%);">
      <div class="absolute inset-0 z-10 pointer-events-none" style="background: radial-gradient(circle at 20% 50%, rgba(212,175,55,.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(52,152,219,.15) 0%, transparent 50%)"></div>
      <div class="absolute inset-0 z-10 pointer-events-none" style="background-image: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(212,175,55,.04) 60px, rgba(212,175,55,.04) 61px)"></div>
      <div class="relative z-20 max-w-[860px] mx-auto px-6">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-[2px]" style="background: rgba(212,175,55,.15); border: 1px solid rgba(212,175,55,.4); color: #d4af37;">
          <i class="fas fa-info-circle"></i> About NFS Insure
        </div>
        <h1 class="font-extrabold text-white leading-tight mb-5" style="font-size: clamp(2.4rem,5vw,3.8rem); text-shadow: 0 4px 20px rgba(0,0,0,.4);">About Us</h1>
        <p class="mb-6 mx-auto" style="font-size:1.15rem; color:rgba(255,255,255,.8); max-width:700px; line-height:1.8;">
          Learn about our mission, vision and values, and how we deliver comprehensive insurance solutions tailored to individuals, businesses and specialised sectors.
        </p>
        <div style="color:rgba(255,255,255,.6); font-size:.95rem;">
          <router-link to="/" style="color:rgba(255,255,255,.8); text-decoration:none;" class="hover:text-yellow-400 transition-colors">Home</router-link>
          <span class="mx-2">/</span><span>About</span>
        </div>
      </div>
      
      <!-- Smooth Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg class="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>

    <!-- ====================================================
         WHO WE ARE — INTRO
         ==================================================== -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <!-- Image column -->
          <div class="lg:col-span-5">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="/img/aboutUs-02.png"
                alt="About NFS Insure Infographic"
                class="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          </div>

          <!-- Content column -->
          <div class="lg:col-span-7">
            <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">High Range of Exploring Protection</div>
            <h2 class="font-extrabold mb-3" style="font-size:clamp(1.8rem,3.5vw,2.8rem); color:#2c3e50; line-height:1.2;">A Legacy of Trust and Protection</h2>
            <div class="w-16 h-1 rounded mb-6" style="background:linear-gradient(135deg,#d4af37,#f1c40f)"></div>
            <p class="text-slate-600 mb-4" style="font-size:1.05rem; line-height:1.8;">
              NFS Insure Consultant (Pty) Ltd is a licensed Financial Services Provider (FSP No. 53910) registered with the Financial Sector Conduct Authority (FSCA) and The Council for Medical Schemes (Accreditation No. ORG53309).
            </p>
            <p class="text-slate-600 mb-8" style="font-size:1.05rem; line-height:1.8;">
              Our mission is to deliver comprehensive insurance solutions that meet the evolving needs of our clients, integrating various products and solutions, while upholding the highest standards of integrity, transparency, and customer service.
            </p>
            <div class="space-y-3">
              <div v-for="item in whoWeArePoints" :key="item" class="flex items-center gap-4">
                <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style="background:rgba(39,174,96,.12); color:#27ae60;">
                  <i class="fas fa-check text-xs"></i>
                </div>
                <p class="text-slate-700 font-medium m-0">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         MISSION VISION VALUES
         ==================================================== -->
    <section class="py-24 relative overflow-hidden" style="background: linear-gradient(135deg,#2c3e50 0%,#1a3a5c 100%);">
      <div class="absolute inset-0 pointer-events-none" style="background: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(255,255,255,.02) 60px, rgba(255,255,255,.02) 61px);"></div>
      <div class="relative z-10 max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 text-xs font-bold uppercase tracking-[2px]" style="background:rgba(212,175,55,.15); border:1px solid rgba(212,175,55,.4); color:#d4af37;"><i class="fas fa-star"></i> Our Foundation</div>
          <h2 class="font-extrabold text-white" style="font-size:clamp(2rem,4vw,3rem);">Mission, Vision & Values</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="card in mvvCards" :key="card.title" class="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/50" style="background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.12); backdrop-filter:blur(4px);">
            <span class="text-5xl mb-4 block">{{ card.emoji }}</span>
            <h5 class="font-bold text-white mb-4 text-xl">{{ card.title }}</h5>
            <p style="color:rgba(255,255,255,.75); font-size:.95rem; line-height:1.75; margin:0;">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         OUR OFFERINGS (4 grid)
         ==================================================== -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">What We Offer</div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50;">Our Offerings</h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; max-width:720px; line-height:1.8;">Comprehensive financial solutions designed to protect every aspect of your life.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="offering in offerings" :key="offering.title"
            class="rounded-3xl p-8 text-center border border-slate-200 hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-300 transition-all duration-300 group cursor-pointer"
            @click="$router.push(offering.to)">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 transition-all duration-300 group-hover:scale-110" style="background:#f3f4f6; color:#2c3e50;">
              <i :class="offering.icon"></i>
            </div>
            <h5 class="font-bold text-lg mb-2" style="color:#2c3e50;">{{ offering.title }}</h5>
            <p class="text-slate-500 text-sm leading-relaxed">{{ offering.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         WHY CHOOSE US
         ==================================================== -->
    <section class="py-24" style="background:#f9fafb;">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(212,175,55,.1); color:#b8940e; border:1px solid rgba(212,175,55,.3);">Why Choose Us</div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50;">Why Choose NFS Insure?</h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; max-width:720px; line-height:1.8;">Our commitment to excellence and client-first service makes us the trusted choice for insurance solutions.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="str in strengths" :key="str.title"
            class="flex items-start gap-5 p-7 bg-white rounded-2xl border border-slate-200 hover:border-yellow-300 hover:shadow-lg hover:translate-x-1 transition-all duration-300">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0" style="background:rgba(212,175,55,.1); color:#b8940e;"><i :class="str.icon"></i></div>
            <div><h5 class="font-bold mb-2 text-lg" style="color:#2c3e50;">{{ str.title }}</h5><p class="text-slate-500 text-sm leading-relaxed m-0">{{ str.desc }}</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         FAQ
         ==================================================== -->
    <section class="py-24 bg-white">
      <div class="max-w-[800px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Got Questions?</div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50;">Frequently Asked Questions</h2>
          <p class="text-slate-500">Everything you need to know about who we are and how we work.</p>
        </div>
        <div class="space-y-4">
          <div v-for="(faq, idx) in faqs" :key="idx"
            class="border rounded-2xl overflow-hidden transition-all duration-300"
            :class="activeFaq === idx ? 'shadow-md bg-white border-blue-200' : 'bg-slate-50 border-slate-200 hover:border-slate-300'">
            <button class="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer" @click="activeFaq = activeFaq === idx ? null : idx">
              <span class="font-bold pr-6" style="color:#2c3e50;">{{ faq.q }}</span>
              <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300"
                :class="activeFaq === idx ? 'rotate-180 bg-primary text-white' : 'bg-slate-200 text-slate-500'">
                <i class="fas fa-chevron-down text-xs"></i>
              </div>
            </button>
            <div class="overflow-hidden transition-all duration-300" :style="{ maxHeight: activeFaq === idx ? '300px' : '0' }">
              <div class="px-6 pb-6 text-slate-600 leading-relaxed">{{ faq.a }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         CTA
         ==================================================== -->
    <section class="py-24" style="background:#f9fafb;">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="relative rounded-[2rem] p-16 text-center overflow-hidden" style="background:linear-gradient(135deg,#d4af37 0%,#f1c40f 100%);">
          <div class="relative z-10">
            <h2 class="font-extrabold mb-4" style="font-size:clamp(1.8rem,4vw,2.8rem); color:#1a252f;">We're Here for You</h2>
            <p class="mb-8 mx-auto" style="color:rgba(26,37,47,.75); font-size:1.1rem; max-width:600px; line-height:1.7;">Speak with one of our expert consultants today. Whether you need insurance advice, a quote, or specialized financial guidance — we're ready to help.</p>
            <div class="flex flex-wrap gap-4 justify-center">
              <router-link to="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 hover:shadow-2xl transition-all" style="background:#1a252f; color:white;"><i class="fas fa-phone-alt"></i> Contact Us</router-link>
              <router-link to="/medical-aid-apply" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 transition-all" style="background:transparent; border:2px solid rgba(26,37,47,.35); color:#1a252f;"><i class="fas fa-file-alt"></i> Get a Quote</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeFaq = ref(null);

const whoWeArePoints = [
  'Licensed FSP (No. 53910) registered with the FSCA',
  'Accredited by The Council for Medical Schemes (ORG53309)',
  'B-BBEE Level 1 Contributor',
  'Registered Credit Provider (NCRCP12678)',
  'Serving individuals, businesses and specialised sectors',
];

const mvvCards = [
  { emoji: '🎯', title: 'Our Mission', desc: 'To deliver comprehensive insurance solutions that meet the evolving needs of our clients, integrating various products while upholding the highest standards of professionalism and integrity.' },
  { emoji: '🔭', title: 'Our Vision', desc: 'To be the most trusted and innovative insurance and financial services provider in South Africa, empowering clients to secure their futures with confidence.' },
  { emoji: '💎', title: 'Our Values', desc: 'Integrity, transparency, client-centricity, excellence, and innovation — these are the values that guide every interaction and decision we make.' },
];

const offerings = [
  { icon: 'fas fa-heartbeat', title: 'Life Insurance', desc: 'Comprehensive life and risk cover for you and your family.', to: '/risk-cover' },
  { icon: 'fas fa-medkit', title: 'Medical Aid', desc: 'Individual and corporate health plan options.', to: '/medical-aid' },
  { icon: 'fas fa-car-side', title: 'Vehicle & Home', desc: 'Motor, household, and commercial short-term insurance.', to: '/short-term-insurance' },
  { icon: 'fas fa-chart-line', title: 'Investments', desc: 'Savings, pension, annuities, and investment portfolios.', to: '/savings-investments' },
];

const strengths = [
  { icon: 'fas fa-award', title: 'Fully Licensed & Regulated', desc: 'We operate under strict FSCA regulatory standards ensuring compliance, transparency, and accountability in all our client dealings.' },
  { icon: 'fas fa-user-tie', title: 'Expert Consultants', desc: 'Our team of qualified financial advisors brings years of industry experience to provide tailored solutions for every client.' },
  { icon: 'fas fa-handshake', title: 'Client-First Approach', desc: 'We prioritize your needs and goals above everything else, ensuring the solutions we provide genuinely protect your interests.' },
  { icon: 'fas fa-network-wired', title: 'Wide Partner Network', desc: 'We work with a broad range of top insurers, banks, and financial institutions to ensure you always have access to the best products.' },
  { icon: 'fas fa-shield-alt', title: 'Comprehensive Solutions', desc: 'From personal insurance to specialized diplomatic and SMME services — we cover every aspect of your financial protection needs.' },
  { icon: 'fas fa-clock', title: 'Fast & Efficient Service', desc: 'Our streamlined processes mean you get quick responses, fast turnaround times, and consistent service delivery every time.' },
];

const faqs = [
  { q: 'What is NFS Insure Consultant?', a: 'NFS Insure Consultant (Pty) Ltd is a licensed Financial Services Provider (FSP No. 53910) registered with the FSCA and accredited by The Council for Medical Schemes (ORG53309). We specialize in providing comprehensive insurance and financial solutions.' },
  { q: 'What services does NFS Insure offer?', a: 'We offer a wide range of services including Risk Cover (life, disability, critical illness), Medical Aid, Short-Term Insurance, Savings & Investments, Pension & Annuities, Home Loans, SMME Funding, Solar Financing, and our specialized Diplomatic Desk.' },
  { q: 'Is NFS Insure a trusted and regulated provider?', a: 'Yes. We are fully licensed and regulated by the Financial Sector Conduct Authority (FSCA) under FSP No. 53910 and are a registered credit provider (NCRCP12678). We are also a B-BBEE Level 1 Contributor.' },
  { q: 'How can I get a quote from NFS Insure?', a: 'You can get a quote by contacting us via phone or email, or by using the Apply options available on our website. Our consultants will guide you through the process and provide a personalized recommendation.' },
  { q: 'Where is NFS Insure located?', a: 'We are located at Eagle Canyon Office Park, Cnr Christiaan De Wet & Dolfyn St, Randpark Ridge, 2154. You can also reach us by phone at +27 10 011 0010 or by email at info@nfs.insure.' },
];
</script>
