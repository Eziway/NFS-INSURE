<template>
  <div class="overflow-hidden bg-white">

    <!-- ====================================================
         HERO
         ==================================================== -->
    <section class="relative flex items-center justify-center text-center overflow-hidden"
      style="min-height:62vh; padding-top:110px; padding-bottom:80px; background: linear-gradient(135deg, #1a252f 0%, #2c3e50 40%, #1a3a5c 70%, #0d2137 100%);">
      <div class="absolute inset-0 z-10 pointer-events-none"
        style="background: radial-gradient(circle at 20% 50%, rgba(212,175,55,.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(52,152,219,.15) 0%, transparent 50%)"></div>
      <div class="absolute inset-0 z-10 pointer-events-none"
        style="background-image: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(212,175,55,.04) 60px, rgba(212,175,55,.04) 61px)"></div>
      <div class="relative z-20 max-w-[860px] mx-auto px-6">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-[2px]"
          style="background: rgba(212,175,55,.15); border: 1px solid rgba(212,175,55,.4); color: #d4af37;">
          <i class="fas fa-seedling"></i> NFS Insure — Business Growth Division
        </div>
        <h1 class="font-extrabold text-white leading-tight mb-5" style="font-size: clamp(2.4rem,5vw,3.8rem); text-shadow: 0 4px 20px rgba(0,0,0,.4);">
          SMME <span style="color:#d4af37">Funding</span> Solutions
        </h1>
        <p class="mb-8 mx-auto" style="font-size:1.15rem; color:rgba(255,255,255,.75); max-width:700px; line-height:1.8;">
          Business Funding & Financial Support Services — tailored funding structures and strategic financial support to help your business grow, sustain operations, and execute projects successfully.
        </p>
        <div class="mb-8" style="color:rgba(255,255,255,.6); font-size:.95rem;">
          <router-link to="/" style="color:rgba(255,255,255,.8); text-decoration:none;" class="hover:text-yellow-400 transition-colors">Home</router-link>
          <span class="mx-2">/</span>
          <span>SMME Funding Solutions</span>
        </div>
        <router-link to="/smme-apply" class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          style="background: linear-gradient(135deg,#d4af37,#f1c40f); color:#1a252f; box-shadow:0 4px 20px rgba(212,175,55,.4);">
          <i class="fas fa-rocket"></i> Apply Now
        </router-link>
      </div>
      <!-- Smooth Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg class="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>

    <!-- ====================================================
         INTRO
         ==================================================== -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div class="lg:col-span-7">
            <div class="relative rounded-3xl p-10 overflow-hidden text-white" style="background: linear-gradient(135deg,#2c3e50 0%,#1a3a5c 100%);">
              <div class="relative z-10">
                <div class="w-16 h-1 rounded mb-6" style="background:linear-gradient(135deg,#d4af37,#f1c40f)"></div>
                <h2 class="text-3xl font-extrabold text-white mb-4">Empowering Businesses Through Smart Financial Solutions</h2>
                <p style="color:rgba(255,255,255,.85); line-height:1.8;">At NFS Insure, we understand that Small, Medium, and Micro Enterprises (SMMEs) require reliable financial support to grow, sustain operations, and execute projects successfully.</p>
                <p class="mt-4" style="color:rgba(255,255,255,.85); line-height:1.8;">Our SMMEs Funding Solutions are designed to assist businesses with tailored funding structures and strategic financial support across multiple industries. NFS Insure acts as a professional intermediary between clients, financial institutions, and funding partners.</p>
                <div class="flex flex-wrap gap-3 mt-8">
                  <span v-for="pill in introPills" :key="pill" class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;">{{ pill }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-5">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-100">
              <img
                src="/img/smme_business_owner_1785047712480.png"
                alt="Confident small business owner"
                class="w-full h-auto object-cover max-h-[300px]"
              />
            </div>
            
            <div class="text-center mb-5">
              <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Industries We Support</span>
            </div>
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in industries" :key="tag" class="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 border border-slate-200 bg-white hover:border-yellow-300 hover:bg-yellow-50 transition-colors cursor-default">{{ tag }}</span>
            </div>
            <div class="p-5 rounded-2xl border border-slate-200" style="background:#f9fafb;">
              <p class="text-slate-600 text-[0.95rem] leading-relaxed m-0"><strong class="text-slate-800">Our role:</strong> We bridge the gap between businesses and funding institutions — handling readiness assessments, documentation, introductions, and ongoing financial advisory so you can focus on running your business.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         14 FUNDING PRODUCTS
         ==================================================== -->
    <section class="py-24" style="background:#f9fafb;">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Funding Services</div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50;">Our Funding Products</h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; line-height:1.8; max-width:720px;">A comprehensive range of funding solutions for every stage, size, and need of your business.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="product in fundingProducts" :key="product.title"
            class="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-yellow-300 transition-all duration-300">
            <div class="text-4xl mb-4">{{ product.emoji }}</div>
            <h5 class="text-lg font-bold mb-3" style="color:#2c3e50;">{{ product.title }}</h5>
            <p class="text-slate-500 text-sm leading-relaxed m-0">{{ product.desc }}</p>
            <ul v-if="product.list" class="mt-3 space-y-1.5">
              <li v-for="li in product.list" :key="li" class="flex items-start gap-2 text-slate-500 text-sm">
                <i class="fas fa-check-circle mt-0.5 shrink-0" style="color:#27ae60; font-size:.75rem;"></i> {{ li }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         ADDITIONAL SUPPORT
         ==================================================== -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Beyond Funding</div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50;">Additional Financial Support Services</h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; max-width:720px; line-height:1.8;">We don't just connect you to funding — we support your business from readiness through to sustained growth.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Support services card -->
          <div class="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-300 transition-all duration-300 flex flex-col">
            <div class="w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-3xl mb-6 icon-blue">
              <i class="fas fa-concierge-bell"></i>
            </div>
            <h4 class="text-2xl font-bold mb-2" style="color:#2c3e50;">Our Support Services</h4>
            <p class="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-6">End-to-End Business Assistance</p>
            <ul class="space-y-2.5 flex-1">
              <li v-for="item in supportServices" :key="item" class="flex items-start gap-3 text-slate-600">
                <i class="fas fa-check-circle mt-0.5 shrink-0" style="color:#27ae60;"></i> {{ item }}
              </li>
            </ul>
          </div>
          <!-- Why NFS card (dark) -->
          <div class="rounded-3xl p-10 flex flex-col" style="background:linear-gradient(135deg,#2c3e50 0%,#1a3a5c 100%);">
            <div class="w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-3xl mb-6" style="background:rgba(212,175,55,.15); color:#d4af37;">
              <i class="fas fa-star"></i>
            </div>
            <h4 class="text-2xl font-bold mb-2 text-white">Why Choose NFS Insure?</h4>
            <p class="text-sm font-semibold uppercase tracking-wider mb-6" style="color:rgba(255,255,255,.5);">Our SMME Advantage</p>
            <ul class="space-y-2.5 flex-1">
              <li v-for="item in whyNFS" :key="item" class="flex items-start gap-3" style="color:rgba(255,255,255,.85);">
                <i class="fas fa-check-circle mt-0.5 shrink-0" style="color:#27ae60;"></i> {{ item }}
              </li>
            </ul>
            <p class="mt-8 font-bold" style="color:#d4af37; font-style:italic; font-size:.95rem;">NFS Insure — Empowering Businesses Through Smart Financial Solutions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         HOW WE HELP (dark)
         ==================================================== -->
    <section class="py-24 relative overflow-hidden" style="background:linear-gradient(135deg,#2c3e50 0%,#1a3a5c 100%);">
      <div class="absolute inset-0 pointer-events-none" style="background: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(255,255,255,.02) 60px, rgba(255,255,255,.02) 61px);"></div>
      <div class="relative z-10 max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 text-xs font-bold uppercase tracking-[2px]" style="background:rgba(212,175,55,.15); border:1px solid rgba(212,175,55,.4); color:#d4af37;">
            <i class="fas fa-route"></i> Our Process
          </div>
          <h2 class="font-extrabold text-white mb-4" style="font-size:clamp(2rem,4vw,3rem);">How We Help Your Business</h2>
          <p style="color:rgba(255,255,255,.7); font-size:1.1rem; max-width:650px; margin:0 auto;">A structured, professional process designed to improve your chances of securing funding and sustaining growth.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="card in processCards" :key="card.title"
            class="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2"
            style="background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.12); backdrop-filter:blur(4px);">
            <span class="text-5xl mb-4 block">{{ card.emoji }}</span>
            <h5 class="font-bold text-white mb-2 text-lg">{{ card.title }}</h5>
            <p style="color:rgba(255,255,255,.7); font-size:.92rem; line-height:1.7; margin:0;">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         CTA
         ==================================================== -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="relative rounded-[2rem] p-16 text-center overflow-hidden" style="background:linear-gradient(135deg,#d4af37 0%,#f1c40f 100%);">
          <div class="relative z-10">
            <h2 class="font-extrabold mb-4" style="font-size:clamp(1.8rem,4vw,2.8rem); color:#1a252f;">Ready to Grow Your Business?</h2>
            <p class="mb-8 mx-auto" style="color:rgba(26,37,47,.75); font-size:1.1rem; max-width:600px; line-height:1.7;">Reach out to our SMME Funding team today for a funding readiness assessment and a tailored strategy for your business.</p>
            <div class="flex flex-wrap gap-4 justify-center">
              <router-link to="/smme-apply" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 hover:shadow-2xl transition-all" style="background:#1a252f; color:white;">
                <i class="fas fa-rocket"></i> Apply for Funding
              </router-link>
              <router-link to="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 transition-all" style="background:transparent; border:2px solid rgba(26,37,47,.35); color:#1a252f;">
                <i class="fas fa-envelope"></i> Get in Touch
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const introPills = [
  '🏦 14 Funding Products', '🔗 Bank & Funder Access', '📈 Growth Advisory',
];

const industries = [
  '🔧 Plumbing', '🏗️ Construction', '🧹 Cleaning Services', '🚛 Transportation',
  '🛡️ Security', '🌾 Agriculture & Farming', '🛒 Retail & Informal Trade',
  '👩‍💼 Women-Owned Enterprises', '🌟 Youth-Owned Enterprises',
];

const fundingProducts = [
  { emoji: '📦', title: 'Purchase Order Funding', desc: 'Funding assistance for businesses that have secured purchase orders and require capital to fulfill supplier or client demands.' },
  { emoji: '⚙️', title: 'Operational Expense Funding', desc: 'Financial support to help businesses manage day-to-day costs.', list: ['Salaries & wages', 'Rent & utilities', 'Stock purchases', 'Cash flow management'] },
  { emoji: '📋', title: 'Project Loans', desc: 'Funding solutions for businesses undertaking short-term or long-term projects across various sectors.' },
  { emoji: '🏗️', title: 'Construction Funding', desc: 'Financial assistance for various types of construction projects.', list: ['Residential construction projects', 'Commercial developments', 'Renovations & upgrades', 'Civil engineering & infrastructure'] },
  { emoji: '🧾', title: 'Invoice Discounting / Financing', desc: 'Access immediate cash flow by leveraging unpaid invoices — turn outstanding receivables into working capital today.' },
  { emoji: '🏭', title: 'Asset Finance', desc: 'Funding for the purchase of business equipment and assets.', list: ['Machinery & equipment', 'Vehicles', 'Office infrastructure', 'Industrial tools'] },
  { emoji: '📈', title: 'Business Expansion Funding', desc: 'Capital solutions to grow your business.', list: ['Open new branches', 'Expand operations', 'Increase production capacity', 'Enter new markets'] },
  { emoji: '⏳', title: 'Bridging Finance', desc: 'Short-term funding solutions to assist businesses while awaiting incoming payments or contract settlements.' },
  { emoji: '🌍', title: 'Trade Finance', desc: 'Support for importers and exporters through structured trade funding solutions to facilitate cross-border commerce.' },
  { emoji: '🚀', title: 'Start-Up Business Funding', desc: 'Funding guidance and support for new businesses and entrepreneurs taking their first steps to market.' },
  { emoji: '📜', title: 'Tender Funding', desc: 'Financial assistance for businesses awarded government or private sector tenders that require upfront capital to deliver.' },
  { emoji: '💧', title: 'Working Capital Solutions', desc: 'Flexible financing to maintain healthy business cash flow and ensure operational continuity throughout the year.' },
  { emoji: '🏢', title: 'Property & Commercial Building Funding', desc: 'Funding assistance for commercial property acquisition and development for business premises and investment.' },
  { emoji: '🚚', title: 'Vehicle & Fleet Financing', desc: 'Funding solutions for company vehicles, logistics fleets, and operational transport to keep your business moving.' },
];

const supportServices = [
  'Financial Advisory Services',
  'Business Structuring Assistance',
  'Funding Readiness Assessments',
  'Bank & Private Funder Introductions',
  'Investment Support',
  'Cash Flow Planning',
  'Business Financial Consulting',
];

const whyNFS = [
  'Tailored funding solutions for SMMEs',
  'Access to banking and private funding networks',
  'Professional financial guidance at every step',
  'Fast and efficient support processes',
  'Industry-focused funding strategies',
];

const processCards = [
  { emoji: '🔍', title: 'Readiness Assessment', desc: 'We evaluate your business profile, financial health, and documentation to identify gaps before approaching funders.' },
  { emoji: '📄', title: 'Profile Preparation', desc: 'We assist with business profile preparation and financial documentation to present your business in the best light.' },
  { emoji: '🤝', title: 'Funder Introductions', desc: 'As a professional intermediary, we connect you with the right banks and private funders matched to your needs.' },
  { emoji: '🏗️', title: 'Business Structuring', desc: 'We help structure your business correctly to meet funder requirements and comply with financial regulations.' },
  { emoji: '📈', title: 'Growth Planning', desc: 'Beyond funding, our advisors provide financial advisory and growth planning to ensure long-term sustainability.' },
  { emoji: '⚡', title: 'Fast & Efficient', desc: 'Our streamlined processes and established funder relationships mean faster turnaround times for your business.' },
];
</script>

<style scoped>
.icon-blue { background: rgba(52,152,219,.12); color: #3498db; }
</style>
