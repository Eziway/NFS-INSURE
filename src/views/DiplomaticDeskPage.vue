<template>
  <div class="overflow-hidden bg-white">

    <!-- ====================================================
         HERO SECTION
         ==================================================== -->
    <section class="relative flex items-center justify-center text-center overflow-hidden"
      style="min-height:62vh; padding-top:110px; padding-bottom:80px; background: linear-gradient(135deg, #1a252f 0%, #2c3e50 40%, #1a3a5c 70%, #0d2137 100%);">
      <!-- Radial glows -->
      <div class="absolute inset-0 z-10 pointer-events-none"
        style="background: radial-gradient(circle at 20% 50%, rgba(212,175,55,.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(52,152,219,.15) 0%, transparent 50%)"></div>
      <!-- Diagonal stripes -->
      <div class="absolute inset-0 z-10 pointer-events-none"
        style="background-image: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(212,175,55,.04) 60px, rgba(212,175,55,.04) 61px)"></div>

      <div class="relative z-20 max-w-[860px] mx-auto px-6">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-[2px]"
          style="background: rgba(212,175,55,.15); border: 1px solid rgba(212,175,55,.4); color: #d4af37;">
          <i class="fas fa-landmark"></i> NFS Insure — Exclusive Division
        </div>
        <h1 class="font-extrabold text-white leading-tight mb-5" style="font-size: clamp(2.4rem,5vw,3.8rem); text-shadow: 0 4px 20px rgba(0,0,0,.4);">
          Concierge <span style="color:#d4af37">Diplomatic</span> Desk
        </h1>
        <p class="mb-8 mx-auto" style="font-size:1.15rem; color:rgba(255,255,255,.75); max-width:680px; line-height:1.8;">
          A specialized service division dedicated to serving Diplomatic Missions, Embassies, High Commissions, and International Organizations with tailored insurance and financial solutions.
        </p>
        <div class="mb-6" style="color:rgba(255,255,255,.6); font-size:.95rem;">
          <router-link to="/" style="color:rgba(255,255,255,.8); text-decoration:none;" class="hover:text-yellow-400 transition-colors">Home</router-link>
          <span class="mx-2">/</span>
          <span>Concierge Diplomatic Desk</span>
        </div>
        <router-link
          to="/diplomatic-apply"
          class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          style="background: linear-gradient(135deg,#d4af37,#f1c40f); color:#1a252f; box-shadow:0 4px 20px rgba(212,175,55,.4);"
        >
          <i class="fas fa-paper-plane"></i> Apply Now
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
         INTRO SECTION
         ==================================================== -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <!-- Dark intro card -->
          <div class="lg:col-span-7">
            <div class="relative rounded-3xl p-10 overflow-hidden text-white"
              style="background: linear-gradient(135deg,#2c3e50 0%,#1a3a5c 100%);">
              <div class="absolute text-[10rem] right-[-1rem] top-[-1rem] leading-none select-none opacity-[.06]">🏛</div>
              <div class="relative z-10">
                <div class="w-16 h-1 rounded mb-6" style="background:linear-gradient(135deg,#d4af37,#f1c40f)"></div>
                <h2 class="text-3xl font-extrabold text-white mb-4">Exclusive Services for Diplomatic Missions & Embassies</h2>
                <p style="color:rgba(255,255,255,.85); line-height:1.8; font-size:1.05rem;">The Concierge Diplomatic Desk is a specialized service division by NFS Insure dedicated to serving Diplomatic Missions, Embassies, High Commissions, and International Organizations.</p>
                <p class="mt-4" style="color:rgba(255,255,255,.85); line-height:1.8; font-size:1.05rem;">We provide tailored Insurance Solutions, Financial Services, and Strategic Business Support designed to meet the unique operational and diplomatic needs of embassies, diplomatic personnel, and international stakeholders.</p>
                <div class="flex flex-wrap gap-3 mt-8">
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-shield-alt text-yellow-400"></i> Insurance Solutions</span>
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-hand-holding-usd text-yellow-400"></i> Financial Services</span>
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-handshake text-yellow-400"></i> Partnership Access</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Why it matters -->
          <div class="lg:col-span-5">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-100">
              <img
                src="/img/diplomatic_desk_1785048537274.png"
                alt="Professional handshake in an elegant embassy"
                class="w-full h-auto object-cover max-h-[300px]"
              />
            </div>

            <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Why it matters</div>
            <p class="text-slate-600 mb-8" style="font-size:1.05rem; line-height:1.8;">Diplomatic institutions face unique operational challenges that standard insurance and financial products don't address. Our dedicated consultants understand the sensitivity, compliance requirements, and specific coverage needs of embassies and missions.</p>
            <div class="space-y-4">
              <div v-for="item in whyItems" :key="item" class="flex items-center gap-4">
                <div class="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style="background:rgba(39,174,96,.12); color:#27ae60;">
                  <i class="fas fa-check"></i>
                </div>
                <p class="text-slate-700 font-medium m-0">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         INSURANCE & FINANCIAL SERVICES
         ==================================================== -->
    <section class="py-24" style="background:#f9fafb;">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Our Core Offering</div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50; line-height:1.2;">Insurance & Financial Services</h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; line-height:1.8; max-width:720px;">Comprehensive solutions tailored for diplomatic institutions, embassy operations, and international personnel.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Card 1: Embassy Insurance -->
          <div class="service-card bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-300 transition-all duration-300 flex flex-col">
            <div class="w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-3xl mb-6 icon-blue transition-all duration-300">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h4 class="text-2xl font-bold mb-2" style="color:#2c3e50;">Embassy & Diplomatic Insurance</h4>
            <p class="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-6">Comprehensive Cover for Missions</p>
            <ul class="space-y-2.5 flex-1">
              <li v-for="item in embassyInsurance" :key="item" class="flex items-start gap-3 text-slate-600 text-[0.95rem]">
                <i class="fas fa-check-circle mt-0.5 shrink-0" style="color:#27ae60;"></i>
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Card 2: Financial Advisory -->
          <div class="service-card bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-300 transition-all duration-300 flex flex-col">
            <div class="w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-3xl mb-6 icon-gold transition-all duration-300">
              <i class="fas fa-coins"></i>
            </div>
            <h4 class="text-2xl font-bold mb-2" style="color:#2c3e50;">Financial & Advisory Support</h4>
            <p class="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-6">Professional Financial Services</p>
            <ul class="space-y-2.5 flex-1">
              <li v-for="item in financialServices" :key="item" class="flex items-start gap-3 text-slate-600 text-[0.95rem]">
                <i class="fas fa-check-circle mt-0.5 shrink-0" style="color:#27ae60;"></i>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         EMBASSY PARTNERSHIP
         ==================================================== -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <!-- Left -->
          <div class="lg:col-span-5">
            <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(212,175,55,.1); color:#b8940e; border:1px solid rgba(212,175,55,.3);">Access & Connections</div>
            <h2 class="font-extrabold mt-2 mb-6" style="font-size:clamp(1.8rem,3.5vw,2.5rem); color:#2c3e50; line-height:1.2;">Embassy Partnership & Access Information Services</h2>
            <p class="text-slate-600 mb-8" style="font-size:1.05rem; line-height:1.8;">The Concierge Diplomatic Desk also serves as a strategic connection platform between embassies, financial institutions, and trusted service providers.</p>

            <div class="rounded-2xl p-8 text-center" style="background:linear-gradient(135deg,#d4af37 0%,#f1c40f 100%); color:#1a252f;">
              <h3 class="text-xl font-extrabold mb-3">Readiness Assessment</h3>
              <p class="mb-6 opacity-85">We evaluate your organization's readiness and coordinate between you, institutions, and service providers.</p>
              <router-link to="/contact" class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm hover:-translate-y-1 hover:shadow-lg transition-all" style="background:#1a252f; color:white;">
                <i class="fas fa-arrow-right"></i> Request Assessment
              </router-link>
            </div>
          </div>

          <!-- Right: Partner features -->
          <div class="lg:col-span-7 space-y-4">
            <div v-for="feature in partnerFeatures" :key="feature.title"
              class="flex items-start gap-5 p-6 rounded-2xl border border-slate-200 hover:border-yellow-300 hover:shadow-lg hover:translate-x-1 transition-all duration-300">
              <div class="w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-all duration-300 feat-icon" style="background:rgba(212,175,55,.1); color:#b8940e;">
                <i :class="feature.icon"></i>
              </div>
              <div>
                <h5 class="font-bold mb-1" style="color:#2c3e50;">{{ feature.title }}</h5>
                <p class="text-slate-500 text-sm leading-relaxed m-0">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         WHY CHOOSE US (dark section)
         ==================================================== -->
    <section class="py-24 relative overflow-hidden" style="background:linear-gradient(135deg,#2c3e50 0%,#1a3a5c 100%);">
      <div class="absolute inset-0 pointer-events-none" style="background: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(255,255,255,.02) 60px, rgba(255,255,255,.02) 61px);"></div>
      <div class="relative z-10 max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 text-xs font-bold uppercase tracking-[2px]"
            style="background:rgba(212,175,55,.15); border:1px solid rgba(212,175,55,.4); color:#d4af37;">
            <i class="fas fa-star"></i> Why Choose Us
          </div>
          <h2 class="font-extrabold text-white mb-4" style="font-size:clamp(2rem,4vw,3rem);">Why Choose the Concierge Diplomatic Desk?</h2>
          <p style="color:rgba(255,255,255,.7); font-size:1.1rem; max-width:650px; margin:0 auto;">A dedicated division that puts diplomatic and mission-critical service at the centre of everything we do.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="card in whyCards" :key="card.title"
            class="why-card rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2"
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
          <div class="absolute text-[8rem] right-8 top-1/2 -translate-y-1/2 opacity-10 select-none">🏛</div>
          <div class="relative z-10">
            <h2 class="font-extrabold mb-4" style="font-size:clamp(1.8rem,4vw,2.8rem); color:#1a252f;">Ready to Engage the Diplomatic Desk?</h2>
            <p class="mb-8 mx-auto" style="color:rgba(26,37,47,.75); font-size:1.1rem; max-width:600px; line-height:1.7;">Reach out to our Concierge Diplomatic Desk team today for a confidential consultation tailored to your embassy or mission's needs.</p>
            <div class="flex flex-wrap gap-4 justify-center">
              <router-link to="/diplomatic-apply" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 hover:shadow-2xl transition-all" style="background:#1a252f; color:white;">
                <i class="fas fa-paper-plane"></i> Apply Now
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
const whyItems = [
  'Dedicated diplomatic service consultants',
  'Confidential and professional handling',
  'Trusted relationships with insurers and financial institutions',
  'Fast, efficient, and personalized service delivery',
];

const embassyInsurance = [
  'Embassy Building Insurance',
  'Official Residence Insurance',
  'Embassy Fleet & Vehicle Insurance',
  'Comprehensive Motor Insurance',
  'Medical Insurance for Diplomats & Staff',
  'Group Life Cover',
  'Travel Insurance',
  'Public Liability Insurance',
  'Office Contents Insurance',
  'Electronic Equipment Insurance',
  'Goods in Transit Cover',
  'Fidelity Guarantee Insurance',
  'Cyber & Data Protection Insurance',
  'Personal Accident Cover',
  'Asset All-Risk Insurance',
  'Fire & Theft Insurance',
];

const financialServices = [
  'Financial Advice & Consultation',
  'Car Financing Assistance',
  'Building & Property Financing',
  'Banking Solutions & Bank Account Opening Assistance',
  'VAT Return Assistance',
  'Investment Guidance',
  'Business & Asset Funding Solutions',
  'Financial Structuring Support',
  'Private & Corporate Banking Introductions',
  'Funding Facilitation with Banks & Private Funders',
];

const partnerFeatures = [
  { icon: 'fas fa-university', title: 'Verified Financial Service Providers', desc: 'Access to pre-vetted, trusted financial service providers who understand diplomatic and international client needs.' },
  { icon: 'fas fa-chart-bar', title: 'Banking & Investment Institutions', desc: 'Direct introductions to private and corporate banking partners, investment houses, and wealth management institutions.' },
  { icon: 'fas fa-globe', title: 'International Trade & Business Support', desc: 'Connect with networks that facilitate cross-border trade, business development, and international commerce.' },
  { icon: 'fas fa-users', title: 'Professional Advisory Networks', desc: 'Access to specialists in legal, compliance, tax, accounting, and strategic advisory for diplomatic institutions.' },
  { icon: 'fas fa-briefcase', title: 'Corporate & Commercial Partnerships', desc: 'Facilitated introductions to corporate partners for commercial agreements, procurement, and business development.' },
];

const whyCards = [
  { emoji: '🏛️', title: 'Dedicated Diplomatic Consultants', desc: 'Specialists who understand the protocols and unique requirements of embassies and missions.' },
  { emoji: '✂️', title: 'Tailor-Made Solutions', desc: "No off-the-shelf products — every solution is designed around your specific operational context." },
  { emoji: '🔒', title: 'Confidential & Professional', desc: 'We handle all engagements with the utmost discretion expected of diplomatic services.' },
  { emoji: '🤝', title: 'Trusted Relationships', desc: 'Long-standing relationships with leading insurers, banks, and financial institutions.' },
  { emoji: '⚡', title: 'Fast & Efficient Delivery', desc: 'Our processes are streamlined for rapid, high-quality service delivery.' },
  { emoji: '🌍', title: 'Intermediary Expertise', desc: 'Professional intermediary support connecting you with the right funders and advisors.' },
];
</script>

<style scoped>
.icon-blue { background: rgba(52,152,219,.12); color: #3498db; }
.service-card:hover .icon-blue { background: #3498db; color: white; transform: translateY(-4px) rotate(5deg); }
.icon-gold { background: rgba(212,175,55,.12); color: #b8940e; }
.service-card:hover .icon-gold { background: #d4af37; color: white; transform: translateY(-4px) rotate(5deg); }
.feat-icon { background: rgba(212,175,55,.1); color: #b8940e; }
.partner-feature:hover .feat-icon { background: #d4af37; color: white; }
.why-card:hover { background: rgba(255,255,255,.12) !important; border-color: rgba(212,175,55,.5) !important; }
</style>
