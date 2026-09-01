<template>
  <div class="overflow-hidden bg-white">

    <!-- HERO -->
    <section class="relative flex items-center justify-center text-center overflow-hidden"
      style="min-height:50vh; padding-top:110px; padding-bottom:80px; background: linear-gradient(135deg, #1a252f 0%, #2c3e50 40%, #1a3a5c 70%, #0d2137 100%);">
      <div class="absolute inset-0 z-10 pointer-events-none" style="background: radial-gradient(circle at 20% 50%, rgba(212,175,55,.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(52,152,219,.15) 0%, transparent 50%)"></div>
      <div class="absolute inset-0 z-10 pointer-events-none" style="background-image: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(212,175,55,.04) 60px, rgba(212,175,55,.04) 61px)"></div>
      <div class="relative z-20 px-6">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-[2px]" style="background: rgba(212,175,55,.15); border: 1px solid rgba(212,175,55,.4); color: #d4af37;">
          <i class="fas fa-th-large"></i> NFS Insure — Our Services
        </div>
        <h1 class="font-extrabold text-white mb-5" style="font-size: clamp(2.4rem,5vw,3.8rem); text-shadow: 0 4px 20px rgba(0,0,0,.4);">Our Services</h1>
        <div style="color:rgba(255,255,255,.6); font-size:.95rem;">
          <router-link to="/" style="color:rgba(255,255,255,.8); text-decoration:none;" class="hover:text-yellow-400 transition-colors">Home</router-link>
          <span class="mx-2">/</span><span>Services</span>
        </div>
      </div>
      <!-- Smooth Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg class="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>

    <!-- INTRO -->
    <section class="py-20 bg-white">
      <div class="max-w-[960px] mx-auto px-6">
        <div class="text-center">
          <div class="text-sm font-bold uppercase tracking-[1px] mb-4" style="color:#3498db;">Our Services</div>
          <h2 class="font-extrabold mb-8" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50; line-height:1.2;">Empowering Your Financial Freedom</h2>
          <div class="space-y-4 text-slate-600 text-lg leading-relaxed text-left max-w-[800px] mx-auto">
            <p>At NFS Insure Consultant, we believe that everyone deserves to achieve their aspirations and secure their future. That's why we're dedicated to providing innovative insurance solutions that protect your tomorrow, today.</p>
            <p>As a licensed financial services provider (FSP: 53910) and registered credit provider (NCRCP12678), you can trust that our expertise and guidance will help you make informed decisions about your financial well-being.</p>
            <p class="mb-0">We're proud to be a B-BBEE Level 1 Contributor, demonstrating our commitment to economic empowerment and social responsibility.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICE CATEGORIES -->
    <section class="py-20" style="background:#f9fafb;">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50;">Comprehensive Protection Solutions</h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; max-width:720px; line-height:1.8;">Explore our wide range of services designed to secure every aspect of your life and assets.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="service in serviceCategories"
            :key="service.title"
            class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-300 transition-all duration-300 flex flex-col cursor-pointer group"
            @click="$router.push(service.to)"
          >
            <div class="w-[70px] h-[70px] rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:scale-110" style="background:#f3f4f6; color:#2c3e50;">
              <i :class="service.icon"></i>
            </div>
            <h4 class="text-2xl font-bold mb-5" style="color:#2c3e50;">{{ service.title }}</h4>
            <ul class="space-y-2.5 flex-1">
              <li v-for="item in service.items" :key="item" class="flex items-start gap-3 text-slate-600">
                <i class="fas fa-check-circle mt-0.5 shrink-0" style="color:#27ae60;"></i> {{ item }}
              </li>
            </ul>
            <router-link :to="service.to" class="mt-6 inline-flex items-center gap-2 font-bold text-sm transition-colors hover:gap-3" style="color:#3498db;">
              Learn More <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="py-20 bg-slate-50 relative">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-12">
          <div class="text-xs font-bold uppercase tracking-[0.2em] text-[#3498db] mb-2">TESTIMONIALS</div>
          <h2 class="text-[clamp(1.6rem,2.8vw,2.2rem)] font-extrabold text-[#1a252f]">What Our Customers Are Saying</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="t in testimonials" :key="t.name"
            class="bg-white rounded-3xl p-8 border border-slate-200 text-center flex flex-col items-center shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-[#d4af37] transition-all duration-300 relative">
            <i class="fas fa-quote-left text-3xl mb-5" style="color:#d4af37"></i>
            <p class="italic text-slate-600 text-sm leading-relaxed mb-6 flex-1">{{ t.quote }}</p>
            <div class="flex items-center gap-1 text-[#d4af37] mb-3">
              <i class="fas fa-star text-xs" v-for="n in 5" :key="n"></i>
            </div>
            <h5 class="font-bold text-base mb-0.5" style="color:#1a252f">{{ t.name }}</h5>
            <div class="text-slate-500 text-xs font-medium">{{ t.role }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24" style="background:#f9fafb;">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="relative rounded-[2rem] p-16 text-center overflow-hidden" style="background:linear-gradient(135deg,#d4af37 0%,#f1c40f 100%);">
          <div class="relative z-10">
            <h2 class="font-extrabold mb-4" style="font-size:clamp(1.8rem,4vw,2.8rem); color:#1a252f;">Ready to Get Protected?</h2>
            <p class="mb-8 mx-auto" style="color:rgba(26,37,47,.75); font-size:1.1rem; max-width:600px; line-height:1.7;">Speak to an NFS Insure consultant today and find the right cover for your life and future.</p>
            <div class="flex flex-wrap gap-4 justify-center">
              <router-link to="/medical-aid-apply" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 hover:shadow-2xl transition-all" style="background:#1a252f; color:white;"><i class="fas fa-heartbeat"></i> Get a Quote</router-link>
              <router-link to="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 transition-all" style="background:transparent; border:2px solid rgba(26,37,47,.35); color:#1a252f;"><i class="fas fa-phone"></i> Contact Us</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const serviceCategories = [
  {
    title: 'Risk Cover', icon: 'fas fa-shield-alt', to: '/risk-cover',
    items: ['Life Cover', 'Critical Illness Cover', 'Disability Insurance', 'Income Protection', 'Funeral Cover'],
  },
  {
    title: 'Medical Aid', icon: 'fas fa-medkit', to: '/medical-aid',
    items: ['Various plan options for Individuals', 'Various plan options for Corporates'],
  },
  {
    title: 'Short-Term Insurance', icon: 'fas fa-car-side', to: '/short-term-insurance',
    items: ['Motor & Household Insurance', 'Commercial Insurance', 'Health and Accident Cover for Individuals', 'Health and Accident Cover for Corporates'],
  },
  {
    title: 'Savings & Investments', icon: 'fas fa-piggy-bank', to: '/savings-investments',
    items: ['Personal Savings Plans', 'Investment Portfolios', 'Unit Trusts & Funds', 'Education Savings'],
  },
  {
    title: 'Pension & Annuities', icon: 'fas fa-hand-holding-usd', to: '/pension-annuities',
    items: ['Retirement Planning', 'Retirement Annuities', 'Pension Funds', 'Provident Funds'],
  },
  {
    title: 'Home Loans', icon: 'fas fa-key', to: '/home-loans',
    items: ['Pre-Qualification Certificate', 'Multiple Bank Submissions', 'Competitive Rate Comparison', 'Personal Consultant Support'],
  },
  {
    title: 'Diplomatic Desk', icon: 'fas fa-landmark', to: '/diplomatic',
    items: ['Embassy & Mission Insurance', 'Financial Advisory Support', 'Partnership Access', 'Readiness Assessments'],
  },
  {
    title: 'SMME Funding', icon: 'fas fa-seedling', to: '/smme-funding',
    items: ['14 Funding Products', 'Purchase Order Funding', 'Business Expansion Funding', 'Funder Introductions'],
  },
  {
    title: 'Solar Financing', icon: 'fas fa-solar-panel', to: '/solar-financing',
    items: ['Asset Finance', 'Solar PPA', 'Green Loans', 'Leasing Options'],
  },
  {
    title: 'Bonds & Guarantees', icon: 'fas fa-file-contract', to: '/bonds-guarantees',
    items: ['Construction Contract Guarantees', 'Customs & Rebate Bonds', 'Court & Fiduciary Bonds', 'Contract & Fuel Guarantees', 'Alternative Risk Transfer'],
  },
];

const testimonials = [
  {
    name: 'Nandi P', role: 'Individual Client',
    quote: '"I\'ve been with NFS Insure Consultant for years, and I\'ve never been disappointed. Their medical insurance plans are comprehensive and affordable. The claims process is seamless, and their customer support is top-notch. I have complete peace of mind knowing I\'m protected by NFS Insure Consultant."',
  },
  {
    name: 'Sipho M', role: 'Business Owner',
    quote: '"As a business owner, it\'s essential to have a reliable insurance partner. NFS Insure Consultant has been instrumental in helping me navigate the complex world of insurance. Their tailored group schemes are innovative and cost-effective. I appreciate their professionalism, expertise, and dedication to customer satisfaction."',
  },
  {
    name: 'Thabo M', role: 'Business Owner',
    quote: '"I was blown away by the exceptional service I received from NFS Insure Consultant. Their team went above and beyond to ensure I had the right coverage for my business. I highly recommend them to anyone looking for reliable and personalized insurance solutions."',
  },
];
</script>
