<template>
  <div class="overflow-hidden bg-white">
    <!-- ====================================================
         HERO SECTION
         ==================================================== -->
    <section
      class="relative flex items-center justify-center text-center overflow-hidden"
      style="min-height:62vh; padding-top:110px; padding-bottom:80px; background: linear-gradient(135deg, #1a252f 0%, #2c3e50 40%, #1a3a5c 70%, #0d2137 100%);"
    >
      <!-- Radial glows -->
      <div
        class="absolute inset-0 z-10 pointer-events-none"
        style="background: radial-gradient(circle at 20% 50%, rgba(212,175,55,.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(52,152,219,.15) 0%, transparent 50%)"
      ></div>
      <!-- Diagonal stripes -->
      <div
        class="absolute inset-0 z-10 pointer-events-none"
        style="background-image: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(212,175,55,.04) 60px, rgba(212,175,55,.04) 61px)"
      ></div>

      <div class="relative z-20 max-w-[860px] mx-auto px-6">
        <div
          class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-[2px]"
          style="background: rgba(212,175,55,.15); border: 1px solid rgba(212,175,55,.4); color: #d4af37;"
        >
          <i class="fas fa-file-contract"></i> NFS Insure — Specialist Division
        </div>
        <h1
          class="font-extrabold text-white leading-tight mb-5"
          style="font-size: clamp(2.4rem,5vw,3.8rem); text-shadow: 0 4px 20px rgba(0,0,0,.4);"
        >
          Bonds &amp; <span style="color:#d4af37">Guarantees</span>
        </h1>
        <p
          class="mb-8 mx-auto"
          style="font-size:1.15rem; color:rgba(255,255,255,.8); max-width:720px; line-height:1.8;"
        >
          Specialist bond and guarantee solutions to help businesses meet contractual, commercial and regulatory obligations with confidence.
        </p>

        <!-- Breadcrumbs -->
        <div class="mb-8" style="color:rgba(255,255,255,.6); font-size:.95rem;">
          <router-link to="/" style="color:rgba(255,255,255,.8); text-decoration:none;" class="hover:text-yellow-400 transition-colors">Home</router-link>
          <span class="mx-2">/</span>
          <span>Bonds &amp; Guarantees</span>
        </div>

        <!-- Action CTAs -->
        <div class="flex flex-wrap gap-4 justify-center items-center">
          <router-link
            to="/contact?service=Bonds+%26+Guarantees"
            class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl no-underline"
            style="background: linear-gradient(135deg,#d4af37,#f1c40f); color:#1a252f; box-shadow:0 4px 20px rgba(212,175,55,.4);"
          >
            <i class="fas fa-file-signature"></i> Request a Quote
          </router-link>
          <router-link
            to="/contact?service=Bonds+%26+Guarantees"
            class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base text-white border border-white/40 bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md no-underline"
          >
            <i class="fas fa-user-tie"></i> Speak to an Advisor
          </router-link>
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
         INTRODUCTION SECTION
         ==================================================== -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <!-- Left: Dark intro card -->
          <div class="lg:col-span-7">
            <div
              class="relative rounded-3xl p-10 overflow-hidden text-white"
              style="background: linear-gradient(135deg,#2c3e50 0%,#1a3a5c 100%);"
            >
              <div class="absolute text-[10rem] right-[-1rem] top-[-1rem] leading-none select-none opacity-[.05]">🏗️</div>
              <div class="relative z-10">
                <div class="w-16 h-1 rounded mb-6" style="background:linear-gradient(135deg,#d4af37,#f1c40f)"></div>
                <h2 class="text-3xl font-extrabold text-white mb-4">Secure Your Business Commitments</h2>
                <p style="color:rgba(255,255,255,.9); line-height:1.8; font-size:1.05rem;">
                  Through our partnership with PCBS, NFS Insure provides access to a comprehensive range of specialist bond and guarantee solutions designed to support businesses across construction, customs, contracts, fuel and fiduciary requirements.
                </p>
                <p class="mt-4" style="color:rgba(255,255,255,.85); line-height:1.8; font-size:1.05rem;">
                  Whether you are bidding for a major contract, importing goods, supplying services, managing an estate or meeting a contractual obligation, our team can help you navigate the appropriate bond or guarantee solution.
                </p>
                <div class="flex flex-wrap gap-3 mt-8">
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;">
                    <i class="fas fa-hard-hat text-yellow-400"></i> Construction Protection
                  </span>
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;">
                    <i class="fas fa-ship text-yellow-400"></i> Customs &amp; Rebates
                  </span>
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;">
                    <i class="fas fa-gavel text-yellow-400"></i> Court &amp; Fiduciary
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Why It Matters & Image Showcase -->
          <div class="lg:col-span-5">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-100">
              <img
                src="/img/bonds_guarantees_1785049000000.png"
                alt="South African construction and infrastructure project management"
                class="w-full h-auto object-cover max-h-[300px]"
              />
              <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#1a252f]/90 via-[#1a252f]/60 to-transparent text-white text-xs font-semibold">
                Facilitating Specialist Guarantee Structures Across Key Sectors
              </div>
            </div>

            <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">
              Why It Matters
            </div>
            <p class="text-slate-600 mb-6" style="font-size:1.02rem; line-height:1.8;">
              Contractual obligations and statutory regulations require credible financial security. We assist you in unlocking project capacity while preserving operational liquidity.
            </p>
            <div class="space-y-3.5">
              <div v-for="item in highlights" :key="item" class="flex items-center gap-3.5">
                <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style="background:rgba(39,174,96,.12); color:#27ae60;">
                  <i class="fas fa-check text-sm"></i>
                </div>
                <p class="text-slate-700 font-medium m-0 text-sm md:text-base">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         MAIN SERVICES SECTION: 6 CATEGORIES GRID
         ==================================================== -->
    <section class="py-24" style="background:#f9fafb;" id="solutions">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">
            Our Solutions
          </div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50; line-height:1.2;">
            Our Bond &amp; Guarantee Solutions
          </h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; max-width:740px; line-height:1.8;">
            Explore our six specialist categories to find the right bond or guarantee structure for your commercial, statutory or project requirements.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <div
            v-for="(cat, index) in categories"
            :key="cat.title"
            class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-yellow-300 transition-all duration-300 flex flex-col relative"
            :class="expandedCategory === index ? 'border-yellow-400 shadow-xl ring-2 ring-yellow-400/20' : ''"
          >
            <!-- Icon -->
            <div
              class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300"
              style="background:rgba(212,175,55,.12); color:#b8940e;"
            >
              <i :class="cat.icon"></i>
            </div>

            <!-- Title & Description -->
            <h3 class="text-xl font-bold mb-3" style="color:#2c3e50;">{{ cat.title }}</h3>
            <p class="text-slate-500 text-sm leading-relaxed mb-6">{{ cat.desc }}</p>

            <!-- Product Count Badge -->
            <div class="mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                <i class="fas fa-layer-group text-slate-400"></i>
                {{ cat.products.length }} {{ cat.products.length === 1 ? 'Solution' : 'Specialist Products' }}
              </span>
            </div>

            <!-- Expandable Products Section -->
            <div
              class="overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-100 pt-4 mt-2"
              :style="{ maxHeight: expandedCategory === index ? '700px' : '0px', opacity: expandedCategory === index ? '1' : '0' }"
            >
              <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Included Products:</div>
              <ul class="space-y-2.5 mb-6">
                <li
                  v-for="prod in cat.products"
                  :key="prod.name"
                  class="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-sm"
                >
                  <i class="fas fa-check-circle text-emerald-600 mt-1 shrink-0 text-xs"></i>
                  <div>
                    <span class="font-bold text-slate-800">{{ prod.name }}</span>
                    <p v-if="prod.desc" class="text-slate-500 text-xs mt-0.5 leading-snug m-0">{{ prod.desc }}</p>
                  </div>
                </li>
              </ul>
              
              <div class="pt-2 pb-4">
                <router-link
                  :to="`/contact?service=Bonds+%26+Guarantees&subject=${encodeURIComponent(cat.title)}`"
                  class="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all no-underline"
                  style="background: #1a252f; color: white;"
                >
                  <span>Request {{ cat.title }}</span>
                  <i class="fas fa-arrow-right text-xs" style="color: #d4af37;"></i>
                </router-link>
              </div>
            </div>

            <!-- Toggle Button -->
            <button
              type="button"
              @click="toggleCategory(index)"
              class="mt-4 pt-4 border-t border-slate-100 w-full flex items-center justify-between font-bold text-sm bg-transparent border-none cursor-pointer transition-colors"
              :style="{ color: expandedCategory === index ? '#b8940e' : '#3498db' }"
            >
              <span>{{ expandedCategory === index ? 'Hide Solutions' : 'View Solutions' }}</span>
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
                :class="expandedCategory === index ? 'rotate-180 bg-yellow-50 text-yellow-700' : 'bg-blue-50 text-blue-600'"
              >
                <i class="fas fa-chevron-down text-xs"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         PCBS PARTNERSHIP SECTION
         ==================================================== -->
    <section class="py-24 bg-white relative overflow-hidden">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="relative rounded-[2.5rem] p-10 md:p-16 border border-slate-200 shadow-xl overflow-hidden" style="background: linear-gradient(135deg, #0d1622 0%, #1a252f 50%, #1a3a5c 100%);">
          <!-- Subtle watermark icon -->
          <div class="absolute right-[-2rem] bottom-[-2rem] text-[14rem] text-white/5 pointer-events-none select-none leading-none">
            <i class="fas fa-handshake"></i>
          </div>

          <div class="relative z-10 max-w-3xl">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style="background:rgba(212,175,55,.15); color:#d4af37; border:1px solid rgba(212,175,55,.3);">
              <i class="fas fa-handshake"></i> Strategic Reseller &amp; Broker Partnership
            </div>

            <!-- Partnership Title -->
            <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              In Partnership With <span style="color:#d4af37;">PCBS</span>
            </h2>

            <!-- Statement -->
            <div class="inline-block text-lg font-bold text-yellow-300/90 mb-6 tracking-wide">
              Specialist expertise. Tailored solutions. Greater confidence.
            </div>

            <!-- Description -->
            <p class="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
              Through our partnership with PCBS Construction &amp; Customs Bonds Services (Pty) Ltd, NFS Insure connects clients with specialist bond and guarantee solutions across construction, customs, contract, court, fuel and alternative risk transfer requirements.
            </p>

            <p class="text-slate-400 text-sm leading-relaxed mb-8">
              PCBS is an established specialist in the bond and guarantee arena. By combining NFS Insure's client-centric financial advisory experience with PCBS's technical structuring capabilities, we ensure our clients receive prompt, compliant, and robust guarantee facilities.
            </p>

            <!-- Action & Link -->
            <div class="flex flex-wrap items-center gap-6">
              <router-link
                to="/contact?service=Bonds+%26+Guarantees"
                class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 no-underline"
                style="background: linear-gradient(135deg,#d4af37,#f1c40f); color:#1a252f; box-shadow:0 4px 15px rgba(212,175,55,.3);"
              >
                <i class="fas fa-shield-alt"></i> Apply Through NFS Insure
              </router-link>

              <a
                href="https://pcbs.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-slate-300 hover:text-white font-semibold text-sm transition-colors group no-underline"
              >
                <span>Learn More About PCBS</span>
                <i class="fas fa-external-link-alt text-xs text-yellow-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         HOW IT WORKS SECTION (3 Simple Steps)
         ==================================================== -->
    <section class="py-24" style="background:#f8fafc;">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">
            Simple &amp; Efficient Process
          </div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50; line-height:1.2;">
            How It Works
          </h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; max-width:700px; line-height:1.8;">
            A straightforward three-step engagement to structure and secure your bond facility without unnecessary administrative friction.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div
            v-for="step in steps"
            :key="step.number"
            class="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative"
          >
            <!-- Step Number -->
            <div
              class="w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-xl mb-6 shadow-md"
              style="background: linear-gradient(135deg, #1a252f 0%, #2c3e50 100%); color: #d4af37;"
            >
              {{ step.number }}
            </div>

            <!-- Step Title -->
            <h3 class="text-xl font-bold mb-3" style="color:#2c3e50;">{{ step.title }}</h3>

            <!-- Step Description -->
            <p class="text-slate-500 text-sm leading-relaxed mb-0 flex-1">{{ step.desc }}</p>
          </div>
        </div>

        <!-- Section CTA -->
        <div class="text-center mt-12">
          <router-link
            to="/contact?service=Bonds+%26+Guarantees"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl no-underline"
            style="background: #1a252f; color: white;"
          >
            <span>Request a Bond or Guarantee</span>
            <i class="fas fa-arrow-right text-xs" style="color:#d4af37"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ====================================================
         WHO WE SUPPORT SECTION
         ==================================================== -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(212,175,55,.1); color:#b8940e; border:1px solid rgba(212,175,55,.3);">
            Sectors &amp; Industries
          </div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50; line-height:1.2;">
            Who Can Benefit?
          </h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; max-width:700px; line-height:1.8;">
            We facilitate bond and guarantee solutions for a wide spectrum of commercial entities, institutions, and fiduciaries.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="benefit in beneficiaries"
            :key="benefit.title"
            class="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:border-yellow-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group"
          >
            <div
              class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110"
              style="background:rgba(212,175,55,.12); color:#b8940e;"
            >
              <i :class="benefit.icon"></i>
            </div>
            <h4 class="text-base font-bold mb-1" style="color:#2c3e50;">{{ benefit.title }}</h4>
            <p class="text-slate-500 text-xs leading-relaxed m-0">{{ benefit.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================
         COMPLIANCE DISCLAIMER
         ==================================================== -->
    <section class="py-8 bg-slate-100 border-y border-slate-200">
      <div class="max-w-[1200px] mx-auto px-6 text-center text-xs text-slate-500 leading-relaxed">
        <p class="m-0 max-w-4xl mx-auto">
          <strong>Compliance Notice:</strong> NFS Insure Consultant (Pty) Ltd is an authorized Financial Services Provider (FSP No. 53910). Bonds and guarantees are specialized commercial and financial instruments facilitated in partnership with PCBS Construction &amp; Customs Bonds Services (Pty) Ltd. All facilities are subject to formal underwriting assessment, compliance checks, and approval against applicable risk criteria.
        </p>
      </div>
    </section>

    <!-- ====================================================
         STRONG NFS CTA SECTION
         ==================================================== -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div
          class="relative rounded-[2rem] p-12 md:p-16 text-center overflow-hidden"
          style="background:linear-gradient(135deg,#d4af37 0%,#f1c40f 100%);"
        >
          <div class="relative z-10">
            <h2 class="font-extrabold mb-4" style="font-size:clamp(1.8rem,4vw,2.8rem); color:#1a252f;">
              Need a Bond or Guarantee?
            </h2>
            <p class="mb-8 mx-auto" style="color:rgba(26,37,47,.8); font-size:1.1rem; max-width:640px; line-height:1.7;">
              Let our team help you navigate the right solution for your business requirement. Speak with a dedicated NFS Insure specialist today.
            </p>

            <div class="flex flex-wrap gap-4 justify-center items-center">
              <router-link
                to="/contact?service=Bonds+%26+Guarantees"
                class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 hover:shadow-2xl transition-all no-underline"
                style="background:#1a252f; color:white;"
              >
                <i class="fas fa-file-contract text-yellow-400"></i> Request a Quote
              </router-link>

              <router-link
                to="/contact"
                class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 transition-all no-underline"
                style="background:transparent; border:2px solid rgba(26,37,47,.35); color:#1a252f;"
              >
                <i class="fas fa-phone-alt"></i> Contact Us
              </router-link>

              <a
                href="https://wa.me/27790284802?text=Hello%20NFS%20Insure,%20I%20am%20enquiring%20about%20Bonds%20and%20Guarantees"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-base bg-emerald-700 text-white hover:bg-emerald-800 hover:-translate-y-1 transition-all shadow-md no-underline"
              >
                <i class="fab fa-whatsapp text-lg"></i> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const expandedCategory = ref(0); // Default open first category for immediate engagement

function toggleCategory(index) {
  expandedCategory.value = expandedCategory.value === index ? null : index;
}

const highlights = [
  'Facilitated through specialist partner PCBS',
  'Tailored security across construction and trade',
  'Protects liquidity without exhausting working capital',
  'Dedicated guidance from tender to project handover',
];

const steps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your contract, project, tender, or regulatory requirement with our advisory team.',
  },
  {
    number: '02',
    title: 'We Help Identify the Right Solution',
    desc: 'Our team helps you navigate the appropriate bond or guarantee requirement suited to your exact scope.',
  },
  {
    number: '03',
    title: 'Access Specialist Bond Solutions',
    desc: 'Through our PCBS partnership, your requirement is assessed and structured for the appropriate solution.',
  },
];

const beneficiaries = [
  { icon: 'fas fa-building', title: 'Construction Companies', desc: 'Civil & commercial builders' },
  { icon: 'fas fa-tools', title: 'Contractors & Subcontractors', desc: 'Specialist trade contractors' },
  { icon: 'fas fa-truck-loading', title: 'Suppliers & Vendors', desc: 'Material & equipment providers' },
  { icon: 'fas fa-globe-africa', title: 'Importers & Exporters', desc: 'Customs & cross-border trade' },
  { icon: 'fas fa-gas-pump', title: 'Fuel Businesses', desc: 'Wholesale & retail petroleum' },
  { icon: 'fas fa-concierge-bell', title: 'Service Providers', desc: 'Commercial services & logistics' },
  { icon: 'fas fa-landmark', title: 'Estates & Fiduciaries', desc: 'Trustees, executors & curators' },
  { icon: 'fas fa-file-contract', title: 'Contractual Obligors', desc: 'Businesses with tender obligations' },
];

const categories = [
  {
    title: 'Construction Contract Guarantees',
    icon: 'fas fa-hard-hat',
    desc: 'Financial protection designed to support contractors and project stakeholders from tender through to project completion.',
    products: [
      { name: 'Bid Bonds', desc: 'Guarantees tender commitments during the bidding process.' },
      { name: 'Performance Guarantee', desc: 'Secures contract fulfillment according to specifications.' },
      { name: 'Retention Guarantee', desc: 'Replaces cash retention, unlocking valuable cash flow.' },
      { name: 'Advance Payment Guarantee', desc: 'Secures mobilization and upfront operational payments.' },
      { name: 'Materials Off-Site Guarantee', desc: 'Protects funds advanced for materials stored off-site.' },
      { name: 'Supplier Surety', desc: 'Provides security to trade and supply chain partners.' },
    ],
  },
  {
    title: 'Customs Bonds',
    icon: 'fas fa-ship',
    desc: 'Specialist bond solutions supporting businesses with customs and import/export obligations.',
    products: [
      { name: 'Deferred Payment Bonds', desc: 'Facilitates duty payment deferral with SARS Customs.' },
      { name: 'Customs Rebate Bonds', desc: 'Secures manufacturing rebate facilities for import inputs.' },
      { name: 'Approved Warehouse Operator Bonds', desc: 'Supports bonded storage and distribution operations.' },
      { name: 'Temporary Importation Bonds', desc: 'Guarantees duties for goods temporarily imported.' },
      { name: 'Removal in Transit Bonds', desc: 'Secures movement of duty-unpaid goods through transit.' },
      { name: 'Inward Processing Rebate Bonds', desc: 'Supports processing and value-addition for re-export.' },
      { name: "Agent's Bonds", desc: 'Bond facilities tailored for accredited clearing agents.' },
      { name: 'Other Customs Bonds', desc: 'Tailored statutory bond facilities for specific import requirements.' },
    ],
  },
  {
    title: 'Court Bonds',
    icon: 'fas fa-gavel',
    desc: 'Guarantee solutions supporting fiduciary and court-related obligations.',
    products: [
      { name: 'Executor Bonds', desc: 'Security for executors managing deceased estates.' },
      { name: 'Trustee Bonds', desc: 'Guarantees for appointed trustees managing insolvent estates or trusts.' },
      { name: 'Curator Bonds', desc: 'Security required for court-appointed curators bonis.' },
    ],
  },
  {
    title: 'Contract Guarantees',
    icon: 'fas fa-handshake',
    desc: 'Financial guarantees designed to support contractual obligations for goods and services.',
    products: [
      { name: 'Goods & Services Guarantees', desc: 'Performance and delivery security for commercial supply contracts.' },
    ],
  },
  {
    title: 'Fuel Guarantees',
    icon: 'fas fa-gas-pump',
    desc: 'Guarantee solutions for businesses involved in wholesale and retail fuel supply.',
    products: [
      { name: 'Wholesale & Retail Fuel Guarantees', desc: 'Security facilities fulfilling requirements of major fuel wholesalers and distributors.' },
    ],
  },
  {
    title: 'Alternative Risk Transfer',
    icon: 'fas fa-project-diagram',
    desc: 'Flexible risk transfer solutions designed as alternatives to traditional insurance arrangements.',
    products: [
      { name: 'Alternative Risk Transfer Solutions', desc: 'Structured risk financing and bespoke indemnity arrangements.' },
    ],
  },
];
</script>
