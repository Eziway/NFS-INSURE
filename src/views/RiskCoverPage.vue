<template>
  <div class="overflow-hidden bg-white">
    <!-- HERO -->
    <section class="relative flex items-center justify-center text-center overflow-hidden"
      style="min-height:62vh; padding-top:110px; padding-bottom:80px; background: linear-gradient(135deg, #1a252f 0%, #2c3e50 40%, #1a3a5c 70%, #0d2137 100%);">
      <div class="absolute inset-0 z-10 pointer-events-none" style="background: radial-gradient(circle at 20% 50%, rgba(212,175,55,.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(52,152,219,.15) 0%, transparent 50%)"></div>
      <div class="absolute inset-0 z-10 pointer-events-none" style="background-image: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(212,175,55,.04) 60px, rgba(212,175,55,.04) 61px)"></div>
      <div class="relative z-20 max-w-[860px] mx-auto px-6">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-[2px]" style="background: rgba(212,175,55,.15); border: 1px solid rgba(212,175,55,.4); color: #d4af37;">
          <i class="fas fa-umbrella"></i> NFS Insure — Risk Protection Division
        </div>
        <h1 class="font-extrabold text-white leading-tight mb-5" style="font-size: clamp(2.4rem,5vw,3.8rem); text-shadow: 0 4px 20px rgba(0,0,0,.4);">
          Risk Cover <span style="color:#d4af37">Solutions</span>
        </h1>
        <p class="mb-8 mx-auto" style="font-size:1.15rem; color:rgba(255,255,255,.75); max-width:700px; line-height:1.8;">
          Protecting your family, business, and financial legacy against unforeseen life events with comprehensive risk cover plans.
        </p>
        <div class="mb-8" style="color:rgba(255,255,255,.6); font-size:.95rem;">
          <router-link to="/" style="color:rgba(255,255,255,.8); text-decoration:none;" class="hover:text-yellow-400 transition-colors">Home</router-link>
          <span class="mx-2">/</span><span>Risk Cover</span>
        </div>
        <router-link to="/contact" class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" style="background: linear-gradient(135deg,#d4af37,#f1c40f); color:#1a252f; box-shadow:0 4px 20px rgba(212,175,55,.4);">
          <i class="fas fa-file-medical-alt"></i> Get Risk Cover Quote
        </router-link>
      </div>
      <!-- Smooth Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg class="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>

    <!-- INTRO -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7">
            <div class="relative rounded-3xl p-10 overflow-hidden text-white" style="background: linear-gradient(135deg,#2c3e50 0%,#1a3a5c 100%);">
              <div class="relative z-10">
                <div class="w-16 h-1 rounded mb-6" style="background:linear-gradient(135deg,#d4af37,#f1c40f)"></div>
                <h2 class="text-3xl font-extrabold text-white mb-4">Complete Peace of Mind For What Matters Most</h2>
                <p style="color:rgba(255,255,255,.85); line-height:1.8;">Life is unpredictable, but your family's financial security doesn't have to be. NFS Insure offers tailored risk cover solutions designed to protect your income, maintain your family's standard of living, and safeguard your legacy.</p>
                <p class="mt-4" style="color:rgba(255,255,255,.85); line-height:1.8;">From life cover and critical illness protection to disability cover and funeral benefits, our advisors work with top-tier accredited South African insurers to build a plan customized for your lifestyle.</p>
                <div class="flex flex-wrap gap-3 mt-8">
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-shield-alt text-yellow-400"></i> Life Protection</span>
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-notes-medical text-yellow-400"></i> Critical Illness</span>
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-hand-holding-usd text-yellow-400"></i> Income Protection</span>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-5">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-100">
              <img
                src="/img/risk_cover_1785048575478.png"
                alt="Happy family walking in a sunny park"
                class="w-full h-auto object-cover max-h-[300px]"
              />
            </div>

            <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Why It Matters</div>
            <p class="text-slate-600 mb-8" style="font-size:1.05rem; line-height:1.8;">Our risk cover policies provide financial continuity when you need it most, ensuring debts are settled and dependents are supported.</p>
            <div class="space-y-4">
              <div v-for="item in highlights" :key="item" class="flex items-center gap-4">
                <div class="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style="background:rgba(39,174,96,.12); color:#27ae60;"><i class="fas fa-check"></i></div>
                <p class="text-slate-700 font-medium m-0">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRODUCTS GRID -->
    <section class="py-24" style="background:#f9fafb;">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Our Solutions</div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50;">Comprehensive Risk Protection Products</h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; max-width:720px; line-height:1.8;">Select from a full range of individual and corporate risk management products.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="product in products" :key="product.title" class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-300 transition-all duration-300 flex flex-col">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6" style="background:rgba(212,175,55,.1); color:#b8940e;">
              <i :class="product.icon"></i>
            </div>
            <h4 class="text-xl font-bold mb-3" style="color:#2c3e50;">{{ product.title }}</h4>
            <p class="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{{ product.desc }}</p>
            <ul class="space-y-2 mb-6">
              <li v-for="benefit in product.benefits" :key="benefit" class="flex items-center gap-2 text-slate-600 text-sm">
                <i class="fas fa-check-circle" style="color:#27ae60;"></i> {{ benefit }}
              </li>
            </ul>
            <router-link to="/contact" class="inline-flex items-center gap-2 font-bold text-sm" style="color:#3498db;">
              Request Quote <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="relative rounded-[2rem] p-16 text-center overflow-hidden" style="background:linear-gradient(135deg,#d4af37 0%,#f1c40f 100%);">
          <div class="relative z-10">
            <h2 class="font-extrabold mb-4" style="font-size:clamp(1.8rem,4vw,2.8rem); color:#1a252f;">Secure Your Family's Financial Future Today</h2>
            <p class="mb-8 mx-auto" style="color:rgba(26,37,47,.75); font-size:1.1rem; max-width:600px; line-height:1.7;">Speak with an NFS Insure risk specialist to structure the ideal policy for your needs and budget.</p>
            <div class="flex flex-wrap gap-4 justify-center">
              <router-link to="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 hover:shadow-2xl transition-all" style="background:#1a252f; color:white;"><i class="fas fa-envelope"></i> Speak to an Advisor</router-link>
              <router-link to="/medical-aid-apply" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 transition-all" style="background:transparent; border:2px solid rgba(26,37,47,.35); color:#1a252f;"><i class="fas fa-calculator"></i> Get a Quick Quote</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const highlights = [
  'Lump-sum payouts for financial stability',
  'Flexible cover options matching your debt & lifestyle',
  'Guaranteed tax-free benefits to beneficiaries',
  'Intermediary support with top SA insurers',
];

const products = [
  { icon: 'fas fa-heart', title: 'Life Cover', desc: 'Provides a lump-sum financial payout to your beneficiaries in the event of your passing, ensuring mortgage debts, estate duties, and living expenses are taken care of.', benefits: ['Tax-free lump sum', 'Debt settlement', 'Estate liquidity'] },
  { icon: 'fas fa-stethoscope', title: 'Critical Illness Cover', desc: 'Financial protection paying a tax-free lump sum if you are diagnosed with a severe illness such as cancer, heart attack, or stroke.', benefits: ['Covers medical extras', 'Lifestyle modification', 'Recovery support'] },
  { icon: 'fas fa-wheelchair', title: 'Disability Insurance', desc: 'Protects your earning potential by paying out a monthly income or lump sum if an injury or illness leaves you permanently disabled.', benefits: ['Occupational disability', 'Functional impairment', 'Lump sum or monthly payout'] },
  { icon: 'fas fa-wallet', title: 'Income Protection', desc: 'Replaces up to 75% of your regular income if you are temporarily disabled or unable to work due to injury or illness.', benefits: ['Monthly income replacement', 'Short and long term cover', 'Inflation-linked increases'] },
  { icon: 'fas fa-cross', title: 'Funeral Cover', desc: 'Affordable, immediate cash payout within 24-48 hours to cover dignified burial and funeral arrangements for your family.', benefits: ['Fast claims payout', 'Cover for extended family', 'No medical examination required'] },
  { icon: 'fas fa-user-shield', title: 'Key Person & Business Assurance', desc: 'Protects business continuity in the event of a key partner or shareholder passing or becoming disabled.', benefits: ['Buy & sell agreements', 'Key person protection', 'Loan account cover'] },
];
</script>
