<template>
  <div class="overflow-hidden bg-white">
    <!-- HERO -->
    <section class="relative flex items-center justify-center text-center overflow-hidden"
      style="min-height:62vh; padding-top:110px; padding-bottom:80px; background: linear-gradient(135deg, #1a252f 0%, #2c3e50 40%, #1a3a5c 70%, #0d2137 100%);">
      <div class="absolute inset-0 z-10 pointer-events-none" style="background: radial-gradient(circle at 20% 50%, rgba(212,175,55,.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(52,152,219,.15) 0%, transparent 50%)"></div>
      <div class="absolute inset-0 z-10 pointer-events-none" style="background-image: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(212,175,55,.04) 60px, rgba(212,175,55,.04) 61px)"></div>
      <div class="relative z-20 max-w-[860px] mx-auto px-6">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-[2px]" style="background: rgba(212,175,55,.15); border: 1px solid rgba(212,175,55,.4); color: #d4af37;">
          <i class="fas fa-car-side"></i> NFS Insure — Property & Asset Protection
        </div>
        <h1 class="font-extrabold text-white leading-tight mb-5" style="font-size: clamp(2.4rem,5vw,3.8rem); text-shadow: 0 4px 20px rgba(0,0,0,.4);">
          Short-Term <span style="color:#d4af37">Insurance</span>
        </h1>
        <p class="mb-8 mx-auto" style="font-size:1.15rem; color:rgba(255,255,255,.75); max-width:700px; line-height:1.8;">
          Tailored coverage for your vehicle, household possessions, building, commercial operations, and health & accident protection.
        </p>
        <div class="mb-8" style="color:rgba(255,255,255,.6); font-size:.95rem;">
          <router-link to="/" style="color:rgba(255,255,255,.8); text-decoration:none;" class="hover:text-yellow-400 transition-colors">Home</router-link>
          <span class="mx-2">/</span><span>Short-Term Insurance</span>
        </div>
        <router-link to="/contact" class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" style="background: linear-gradient(135deg,#d4af37,#f1c40f); color:#1a252f; box-shadow:0 4px 20px rgba(212,175,55,.4);">
          <i class="fas fa-file-invoice"></i> Get Short-Term Quote
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
                <h2 class="text-3xl font-extrabold text-white mb-4">Safeguard Your Assets & Physical Belongings</h2>
                <p style="color:rgba(255,255,255,.85); line-height:1.8;">Whether it's your personal vehicle, house contents, or your company fleet and premises, unexpected loss or damage can cause significant financial disruption. NFS Insure provides comprehensive short-term insurance solutions.</p>
                <p class="mt-4" style="color:rgba(255,255,255,.85); line-height:1.8;">We source competitive quotes across top South African short-term insurers to ensure you receive optimal cover, competitive excess structures, and hassle-free claims management.</p>
                <div class="flex flex-wrap gap-3 mt-8">
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-car text-yellow-400"></i> Motor & Vehicle</span>
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-home text-yellow-400"></i> Building & Contents</span>
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-building text-yellow-400"></i> Commercial Cover</span>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-5">
            <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Why Insure With Us</div>
            <div class="space-y-4">
              <div v-for="item in whyPoints" :key="item" class="flex items-center gap-4">
                <div class="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style="background:rgba(39,174,96,.12); color:#27ae60;"><i class="fas fa-check"></i></div>
                <p class="text-slate-700 font-medium m-0">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OFFERINGS GRID -->
    <section class="py-24" style="background:#f9fafb;">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Our Coverage Options</div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50;">Short-Term Insurance Categories</h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; max-width:720px; line-height:1.8;">Comprehensive protection plans for individuals, families, and commercial enterprises.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="c in categories" :key="c.title" class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-300 transition-all duration-300 flex flex-col">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6" style="background:rgba(212,175,55,.1); color:#b8940e;">
              <i :class="c.icon"></i>
            </div>
            <h4 class="text-xl font-bold mb-3" style="color:#2c3e50;">{{ c.title }}</h4>
            <p class="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{{ c.desc }}</p>
            <ul class="space-y-2 mb-6">
              <li v-for="item in c.items" :key="item" class="flex items-center gap-2 text-slate-600 text-sm">
                <i class="fas fa-check-circle" style="color:#27ae60;"></i> {{ item }}
              </li>
            </ul>
            <router-link to="/contact" class="inline-flex items-center gap-2 font-bold text-sm" style="color:#3498db;">
              Get a Quote <i class="fas fa-arrow-right"></i>
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
            <h2 class="font-extrabold mb-4" style="font-size:clamp(1.8rem,4vw,2.8rem); color:#1a252f;">Ready to Compare & Save on Short-Term Insurance?</h2>
            <p class="mb-8 mx-auto" style="color:rgba(26,37,47,.75); font-size:1.1rem; max-width:600px; line-height:1.7;">Get a tailored quotation from our team and let us structure the best policy for your car, home, or business.</p>
            <div class="flex flex-wrap gap-4 justify-center">
              <router-link to="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 hover:shadow-2xl transition-all" style="background:#1a252f; color:white;"><i class="fas fa-phone-alt"></i> Contact Our Team</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const whyPoints = [
  'Multiple quotes compared across leading SA short-term insurers',
  'Dedicated claims assistance for rapid resolution',
  'Customized excess options to suit your monthly budget',
  'Bundle car and home insurance for maximum discount benefits',
];

const categories = [
  { icon: 'fas fa-car', title: 'Motor & Vehicle Insurance', desc: 'Comprehensive cover against accident damage, theft, hijacking, third-party liability, and roadside assistance.', items: ['Comprehensive Cover', 'Third-Party, Fire & Theft', 'Roadside Assistance & Towing', 'Car Hire Option'] },
  { icon: 'fas fa-home', title: 'Household Contents Insurance', desc: 'Protection for your personal possessions, electronics, furniture, and valuables inside your residential home.', items: ['Theft & Burglary', 'Water Damage & Flooding', 'All Risks Cover for Wearables', 'Power Surge Protection'] },
  { icon: 'fas fa-building', title: 'Building Insurance', desc: 'Structural insurance covering physical damage to your residential or commercial property structures.', items: ['Fire & Natural Disaster', 'Geyser & Pipe Burst Cover', 'Structural Repair', 'Property Owners Liability'] },
  { icon: 'fas fa-store', title: 'Commercial Insurance', desc: 'Customized business insurance tailored to protect physical premises, machinery, stock, and business interruption.', items: ['Business Interruption', 'Goods in Transit', 'Public Liability', 'Commercial Fleet Cover'] },
  { icon: 'fas fa-user-injured', title: 'Health & Accident (Individuals)', desc: 'Personal accident cover providing cash payouts for accidental disability, hospitalization, or injury.', items: ['Accidental Hospitalization', 'Disability Benefit', 'Emergency Transportation', 'Global Travel Protection'] },
  { icon: 'fas fa-users-cog', title: 'Health & Accident (Corporates)', desc: 'Group personal accident insurance designed for company employees, workers, and executive teams.', items: ['Group Accident Cover', 'Workplace Injury Protection', 'Duty of Care Benefits', 'Flexible Group Rates'] },
];
</script>
