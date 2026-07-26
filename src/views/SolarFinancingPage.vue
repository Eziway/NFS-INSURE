<template>
  <div class="overflow-hidden bg-white">
    <!-- HERO -->
    <section class="relative flex items-center justify-center text-center overflow-hidden"
      style="min-height:62vh; padding-top:110px; padding-bottom:80px; background: linear-gradient(135deg, #1a252f 0%, #2c3e50 40%, #1a3a5c 70%, #0d2137 100%);">
      <div class="absolute inset-0 z-10 pointer-events-none" style="background: radial-gradient(circle at 20% 50%, rgba(212,175,55,.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(52,152,219,.15) 0%, transparent 50%)"></div>
      <div class="absolute inset-0 z-10 pointer-events-none" style="background-image: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(212,175,55,.04) 60px, rgba(212,175,55,.04) 61px)"></div>
      <div class="relative z-20 max-w-[860px] mx-auto px-6">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-[2px]" style="background: rgba(212,175,55,.15); border: 1px solid rgba(212,175,55,.4); color: #d4af37;">
          <i class="fas fa-solar-panel"></i> NFS Insure — Business & Green Asset Finance
        </div>
        <h1 class="font-extrabold text-white leading-tight mb-5" style="font-size: clamp(2.4rem,5vw,3.8rem); text-shadow: 0 4px 20px rgba(0,0,0,.4);">
          Guesthouse <span style="color:#d4af37">Solar Financing</span>
        </h1>
        <p class="mb-8 mx-auto" style="font-size:1.15rem; color:rgba(255,255,255,.75); max-width:700px; line-height:1.8;">
          Install a solar power system for your guesthouse or B&B without paying 100% cash upfront. Spread the cost over time while you start saving on electricity from day one.
        </p>
        <div class="mb-8" style="color:rgba(255,255,255,.6); font-size:.95rem;">
          <router-link to="/" style="color:rgba(255,255,255,.8); text-decoration:none;" class="hover:text-yellow-400 transition-colors">Home</router-link>
          <span class="mx-2">/</span><span>Solar Financing</span>
        </div>
        <router-link to="/solar-financing-apply" class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" style="background: linear-gradient(135deg,#d4af37,#f1c40f); color:#1a252f; box-shadow:0 4px 20px rgba(212,175,55,.4);">
          <i class="fas fa-paper-plane"></i> Apply for Solar Financing
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
                <h2 class="text-3xl font-extrabold text-white mb-4">Skip the R250k – R800k Upfront Cost</h2>
                <p style="color:rgba(255,255,255,.85); line-height:1.8;">Guesthouse solar financing lets you install a solar power system without paying the full cost in one go. Instead of spending R250,000 – R800,000 upfront, you spread the cost over time through a funder — while your Eskom bill drops immediately.</p>
                <p class="mt-4" style="color:rgba(255,255,255,.85); line-height:1.8;">NFS Insure helps guesthouse and B&B owners access the right financing structure for their business, from asset finance to Power Purchase Agreements and green loans.</p>
                <div class="flex flex-wrap gap-3 mt-8">
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-bolt text-yellow-400"></i> Cut Bills by 50–80%</span>
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-battery-full text-yellow-400"></i> No Load Shedding</span>
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-file-invoice-dollar text-yellow-400"></i> Section 12B Tax Break</span>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-5">
            <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Why Guesthouses Need It</div>
            <p class="text-center text-slate-600 mb-6" style="font-size:.95rem; line-height:1.7;">Guesthouses carry three big power costs — solar and batteries fix all three, and become a selling point: <strong>"We have 24/7 power."</strong></p>
            <div class="space-y-4">
              <div v-for="cost in powerCosts" :key="cost.title" class="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 hover:border-yellow-300 hover:shadow-md transition-all">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0" style="background:rgba(212,175,55,.1); color:#b8940e;"><i :class="cost.icon"></i></div>
                <div><h6 class="font-bold mb-1" style="color:#2c3e50;">{{ cost.title }}</h6><p class="text-slate-500 text-sm leading-relaxed m-0">{{ cost.desc }}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINANCING MODELS -->
    <section class="py-24" style="background:#f9fafb;">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Financing Options</div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50;">Main Financing Models in South Africa</h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; max-width:720px; line-height:1.8;">There's no one-size-fits-all option — we help you choose the structure that best fits your guesthouse's cash flow and goals.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="model in financingModels" :key="model.title"
            class="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            :class="model.iconClass === 'icon-blue' ? 'hover:border-blue-300' : 'hover:border-yellow-300'">
            <div class="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-2xl mb-5 transition-all duration-300" :class="model.iconClass"><i :class="model.icon"></i></div>
            <h4 class="text-lg font-bold mb-3" style="color:#2c3e50;">{{ model.title }}</h4>
            <p class="text-slate-500 text-sm leading-relaxed flex-1">{{ model.desc }}</p>
            <div class="mt-4 flex items-start gap-2 text-sm font-semibold" style="color:#3498db;">
              <i class="fas fa-thumbs-up mt-0.5 shrink-0"></i><span>{{ model.bestFor }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- KEY BENEFITS (dark) -->
    <section class="py-24 relative overflow-hidden" style="background:linear-gradient(135deg,#2c3e50 0%,#1a3a5c 100%);">
      <div class="absolute inset-0 pointer-events-none" style="background: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(255,255,255,.02) 60px, rgba(255,255,255,.02) 61px);"></div>
      <div class="relative z-10 max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 text-xs font-bold uppercase tracking-[2px]" style="background:rgba(212,175,55,.15); border:1px solid rgba(212,175,55,.4); color:#d4af37;"><i class="fas fa-star"></i> Key Benefits</div>
          <h2 class="font-extrabold text-white mb-4" style="font-size:clamp(2rem,4vw,3rem);">What Solar Financing Does for Your Guesthouse</h2>
          <p style="color:rgba(255,255,255,.7); font-size:1.1rem; max-width:650px; margin:0 auto;">More than just a lower power bill — solar becomes a business advantage.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="card in benefitCards" :key="card.title" class="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/50" style="background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.12); backdrop-filter:blur(4px);">
            <span class="text-5xl mb-4 block">{{ card.emoji }}</span>
            <h5 class="font-bold text-white mb-2 text-lg">{{ card.title }}</h5>
            <p style="color:rgba(255,255,255,.7); font-size:.92rem; line-height:1.7; margin:0;">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT'S INCLUDED -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div class="lg:col-span-5">
            <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(212,175,55,.1); color:#b8940e; border:1px solid rgba(212,175,55,.3);">Your System</div>
            <h2 class="font-extrabold mt-2 mb-6" style="font-size:clamp(1.8rem,3.5vw,2.5rem); color:#2c3e50; line-height:1.2;">What's Usually Included</h2>
            <p class="text-slate-600 mb-8" style="font-size:1.05rem; line-height:1.8;">A typical guesthouse solar system is sized around your geyser load, occupancy, and backup needs — NFS Insure helps you match the right funding to the right system.</p>
            <div class="rounded-2xl p-8 text-center" style="background:linear-gradient(135deg,#d4af37 0%,#f1c40f 100%); color:#1a252f;">
              <h3 class="text-xl font-extrabold mb-3">Ready to Stop Paying Eskom in Full?</h3>
              <p class="mb-6 opacity-85">Apply for solar financing and let us match you with the funding option that suits your guesthouse.</p>
              <router-link to="/solar-financing-apply" class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm hover:-translate-y-1 hover:shadow-lg transition-all" style="background:#1a252f; color:white;">
                <i class="fas fa-arrow-right"></i> Start Your Application
              </router-link>
            </div>
          </div>
          <div class="lg:col-span-7 space-y-4">
            <div v-for="f in systemFeatures" :key="f.title" class="flex items-start gap-5 p-6 rounded-2xl border border-slate-200 hover:border-yellow-300 hover:shadow-lg hover:translate-x-1 transition-all duration-300">
              <div class="w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-2xl shrink-0" style="background:rgba(212,175,55,.1); color:#b8940e;"><i :class="f.icon"></i></div>
              <div><h5 class="font-bold mb-1" style="color:#2c3e50;">{{ f.title }}</h5><p class="text-slate-500 text-sm leading-relaxed m-0">{{ f.desc }}</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- GOSOLR PACKAGES -->
    <section class="py-24 bg-white" style="background: linear-gradient(to bottom, #ffffff, #f9fafb);">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(212,175,55,.1); color:#b8940e; border:1px solid rgba(212,175,55,.3);">Featured Partner</div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50;">Gosolr Packages</h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; max-width:720px; line-height:1.8;">Explore our comprehensive, fully installed solar solutions. Each package includes Tier-1 equipment, professional installation, and ongoing support.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="pkg in gosolrPackages" :key="pkg.name" class="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col relative overflow-hidden group">
            
            <div v-if="pkg.badge" class="absolute top-6 right-6 text-[0.7rem] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200 shadow-sm z-10">{{ pkg.badge }}</div>
            
            <div class="mb-6 relative z-10">
              <h4 class="text-2xl font-black tracking-tight mb-2 text-slate-800">{{ pkg.name }}</h4>
              <p class="text-sm font-medium text-slate-500 mb-4">{{ pkg.idealFor }}</p>
              <div class="flex items-baseline gap-1">
                <span class="text-3xl font-extrabold text-[#b8940e]">{{ pkg.price }}</span>
                <span class="text-sm font-bold text-slate-400" v-if="!pkg.isOnceOff">/ month</span>
              </div>
            </div>

            <hr class="border-slate-100 mb-6" />

            <div class="flex-1">
              <h5 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Hardware Included</h5>
              <ul class="space-y-3 mb-8 text-sm font-semibold text-slate-700">
                <li class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5"><i class="fas fa-bolt text-[10px] text-slate-600"></i></div>
                  <span>{{ pkg.inverter }}</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5"><i class="fas fa-solar-panel text-[10px] text-slate-600"></i></div>
                  <span>{{ pkg.panels }}</span>
                </li>
                <li class="flex items-start gap-3" v-if="pkg.batteries">
                  <div class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5"><i class="fas fa-car-battery text-[10px] text-slate-600"></i></div>
                  <span>{{ pkg.batteries }}</span>
                </li>
              </ul>
              
              <h5 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Value Adds</h5>
              <ul class="space-y-2 mb-8 text-sm font-medium text-slate-500">
                <li v-for="(inclusion, idx) in pkg.inclusions" :key="idx" class="flex items-center gap-2">
                  <i class="fas fa-check text-green-500"></i> {{ inclusion }}
                </li>
              </ul>
            </div>

            <div class="flex flex-col gap-3 mt-auto relative z-10">
              <button @click="openPackageDetails(pkg)" class="w-full text-center py-3.5 rounded-xl font-bold text-sm border-2 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors">
                View Full Specifications
              </button>
              <router-link :to="{ path: '/solar-financing-apply', query: { package: pkg.name } }" class="w-full text-center py-3.5 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg transition-all">
                Enquire About This Package
              </router-link>
            </div>
            
            <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-[#b8940e] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Package Details Modal -->
    <transition name="fade">
      <div v-if="selectedPackage" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" @click="selectedPackage = null"></div>
        <div class="relative bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
          <div class="p-8 border-b border-slate-100 bg-slate-50 flex justify-between items-start">
            <div>
              <div class="inline-block px-3 py-1 rounded bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-wider mb-3">Package Details</div>
              <h3 class="text-3xl font-black text-slate-800">{{ selectedPackage.name }}</h3>
              <p class="text-2xl font-bold text-[#b8940e] mt-2">{{ selectedPackage.price }} <span class="text-sm text-slate-400 font-medium" v-if="!selectedPackage.isOnceOff">/ month</span></p>
            </div>
            <button @click="selectedPackage = null" class="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors">
              <i class="fas fa-times"></i>
            </button>
          </div>
          
          <div class="p-8 overflow-y-auto flex-1 custom-scrollbar">
            <h4 class="font-bold text-lg text-slate-800 mb-4 border-b border-slate-100 pb-2">Hardware Specifications</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Inverter</div>
                <div class="font-semibold text-slate-700">{{ selectedPackage.inverter }}</div>
              </div>
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Solar Panels</div>
                <div class="font-semibold text-slate-700">{{ selectedPackage.panels }}</div>
              </div>
              <div v-if="selectedPackage.batteries" class="bg-slate-50 p-4 rounded-xl border border-slate-100 sm:col-span-2">
                <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Battery Storage</div>
                <div class="font-semibold text-slate-700">{{ selectedPackage.batteries }}</div>
              </div>
            </div>

            <h4 class="font-bold text-lg text-slate-800 mb-4 border-b border-slate-100 pb-2">What's Included</h4>
            <ul class="space-y-3 mb-8">
              <li v-for="(inc, idx) in selectedPackage.inclusions" :key="'modal-inc-'+idx" class="flex items-start gap-3">
                <i class="fas fa-check-circle text-green-500 mt-1"></i>
                <span class="text-slate-600 font-medium">{{ inc }}</span>
              </li>
              <li class="flex items-start gap-3">
                 <i class="fas fa-check-circle text-green-500 mt-1"></i>
                 <span class="text-slate-600 font-medium">Standard installation & setup</span>
              </li>
              <li class="flex items-start gap-3">
                 <i class="fas fa-check-circle text-green-500 mt-1"></i>
                 <span class="text-slate-600 font-medium">Certificate of Compliance (COC)</span>
              </li>
            </ul>
            
            <div class="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm font-medium border border-blue-100 flex items-start gap-3">
              <i class="fas fa-info-circle mt-0.5 text-blue-500"></i>
              <p>{{ selectedPackage.systemSpecs }}</p>
            </div>
          </div>
          
          <div class="p-6 border-t border-slate-100 bg-white">
            <router-link :to="{ path: '/solar-financing-apply', query: { package: selectedPackage.name } }" class="block w-full text-center py-4 rounded-xl font-bold text-white bg-gradient-to-r from-accent to-blue shadow-lg hover:shadow-xl transition-all">
              Proceed with this Package
            </router-link>
          </div>
        </div>
      </div>
    </transition>

    <!-- SIMPLE EXPLAINER -->
    <section class="py-24" style="background:#f9fafb;">
      <div class="max-w-[900px] mx-auto px-6">
        <div class="text-center mb-12">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">In Simple Terms</div>
          <h2 class="font-extrabold" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50;">A Simple Way to Think About It</h2>
        </div>
        <div class="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">
          <h3 class="text-2xl font-bold mb-4" style="color:#2c3e50;">Trade a Forever Bill for a 5-Year Instalment</h3>
          <p class="text-slate-600 mb-8" style="line-height:1.8;">Instead of paying Eskom R15,000/month forever, you pay a funder around R10,000/month for 5 years. After 5 years, the system is fully yours and your power is almost free.</p>
          <div class="flex flex-col sm:flex-row items-center gap-4">
            <div class="px-6 py-3 rounded-xl font-bold text-center text-sm" style="background:#f9fafb; border:1px solid #e5e7eb; color:#374151;">Pay Eskom R15,000/mo forever</div>
            <i class="fas fa-arrow-right text-slate-400 text-xl flex-shrink-0 rotate-90 sm:rotate-0"></i>
            <div class="px-6 py-3 rounded-xl font-bold text-center text-sm" style="background:linear-gradient(135deg,#d4af37,#f1c40f); color:#1a252f;">Pay funder ~R10,000/mo for 5 years</div>
            <i class="fas fa-arrow-right text-slate-400 text-xl flex-shrink-0 rotate-90 sm:rotate-0"></i>
            <div class="px-6 py-3 rounded-xl font-bold text-center text-sm" style="background:#f9fafb; border:1px solid #e5e7eb; color:#374151;">System is yours — power is almost free</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="relative rounded-[2rem] p-16 text-center overflow-hidden" style="background:linear-gradient(135deg,#d4af37 0%,#f1c40f 100%);">
          <div class="relative z-10">
            <h2 class="font-extrabold mb-4" style="font-size:clamp(1.8rem,4vw,2.8rem); color:#1a252f;">Ready to Power Your Guesthouse Differently?</h2>
            <p class="mb-8 mx-auto" style="color:rgba(26,37,47,.75); font-size:1.1rem; max-width:600px; line-height:1.7;">Apply today and let NFS Insure match you with the right solar financing option for your business.</p>
            <div class="flex flex-wrap gap-4 justify-center">
              <router-link to="/solar-financing-apply" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 hover:shadow-2xl transition-all" style="background:#1a252f; color:white;"><i class="fas fa-paper-plane"></i> Apply Now</router-link>
              <router-link to="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 transition-all" style="background:transparent; border:2px solid rgba(26,37,47,.35); color:#1a252f;"><i class="fas fa-envelope"></i> Get in Touch</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedPackage = ref(null);

function openPackageDetails(pkg) {
  selectedPackage.value = pkg;
}
const powerCosts = [
  { icon: 'fas fa-hot-tub-person', title: 'Geysers', desc: 'Guests use hot water around the clock — geysers alone make up 30–40% of the average guesthouse electricity bill.' },
  { icon: 'fas fa-lightbulb', title: 'Lights, Fridges, AC & WiFi', desc: 'Common areas and guest rooms draw power all day, every day, regardless of occupancy.' },
  { icon: 'fas fa-battery-three-quarters', title: 'Backup Power', desc: 'Guests expect uninterrupted power — load shedding during a stay is one of the fastest ways to lose a booking or a review.' },
];

const financingModels = [
  { icon: 'fas fa-university', iconClass: 'icon-blue', title: 'Business Loan / Asset Finance', desc: 'A bank lends you the money and you own the system from day one. Pay it off over 3–7 years.', bestFor: 'Best for: strong cash flow & credit record' },
  { icon: 'fas fa-file-signature', iconClass: 'icon-gold', title: 'Solar PPA (Power Purchase Agreement)', desc: 'A solar company installs the system for free — you simply buy the power from them at a rate lower than Eskom.', bestFor: 'Best for: zero upfront cost, predictable monthly bill' },
  { icon: 'fas fa-key', iconClass: 'icon-blue', title: 'Leasing / Rental', desc: 'You "rent" the solar system, typically for 5 years, and then take full ownership at the end of the term.', bestFor: 'Best for: off-balance-sheet & tax benefits' },
  { icon: 'fas fa-leaf', iconClass: 'icon-gold', title: 'Green Loans', desc: 'Banks such as Nedbank and Standard Bank offer lower interest loans specifically for green energy projects.', bestFor: 'Best for: lower interest + tax incentive eligibility' },
];

const benefitCards = [
  { emoji: '📉', title: 'Lower Running Costs', desc: 'Cut your Eskom bill by 50–80%, freeing up cash flow for the rest of your business.' },
  { emoji: '🔋', title: 'No Load Shedding', desc: 'Batteries keep lights, WiFi, gates, and fridges running through every stage of load shedding.' },
  { emoji: '📣', title: 'Marketing Edge', desc: '"Eco-friendly + uninterrupted power" is a genuine selling point that drives more bookings.' },
  { emoji: '🧾', title: 'Tax Break', desc: 'Section 12B allows a 100% deduction in year one for qualifying commercial solar installations.' },
  { emoji: '🏡', title: 'Asset Value', desc: 'A solar-equipped guesthouse becomes a more valuable, more attractive property.' },
  { emoji: '📱', title: 'Remote Monitoring', desc: 'Track your savings and system performance from your phone, wherever you are.' },
];

const systemFeatures = [
  { icon: 'fas fa-solar-panel', title: 'Solar Panels', desc: 'Roof-mounted panels sized to your guesthouse\'s daily energy usage and occupancy patterns.' },
  { icon: 'fas fa-car-battery', title: 'Inverter & Lithium Batteries', desc: 'Stores solar power and keeps essentials running through load shedding and at night.' },
  { icon: 'fas fa-water', title: 'Solar Geysers or Heat Pumps', desc: 'Targets your single biggest power cost directly, cutting geyser-related electricity use.' },
  { icon: 'fas fa-chart-line', title: 'Monitoring', desc: 'An app or dashboard so you can see your savings and system performance from your phone.' },
];

const gosolrPackages = [
  { 
    name: 'XL Single Phase', 
    price: 'R3,249', 
    isOnceOff: true, 
    inverter: '12kVA single phase inverter', 
    panels: '18 panels', 
    batteries: '3 batteries', 
    badge: 'NEW',
    idealFor: 'Large households with high energy demand.',
    inclusions: ['Tier-1 Solar Panels', 'Full System Installation', 'Smart App Monitoring'],
    systemSpecs: 'Designed for substantial load offset. Protects against advanced load shedding stages and significantly reduces grid reliance.'
  },
  { 
    name: 'GS+ Basic', 
    price: 'R4,699', 
    isOnceOff: false, 
    inverter: '16 kVA single phase inverter', 
    panels: '27 panels', 
    batteries: '4 batteries',
    idealFor: 'Premium residential or small commercial.',
    inclusions: ['Tier-1 Solar Panels', 'Full System Installation', 'Smart App Monitoring', 'Maintenance Included'],
    systemSpecs: 'A robust setup for heavy daily usage, capable of powering high-draw appliances and keeping the lights on during extended outages.'
  },
  { 
    name: 'GS+ Plus Saver', 
    price: 'R4,799', 
    isOnceOff: false, 
    inverter: '30 kVA three phase inverter', 
    panels: '45 x 600 Wp panels', 
    batteries: null,
    idealFor: 'Daytime commercial operations.',
    inclusions: ['Three-Phase Compatibility', 'High-Yield 600W Panels', 'Smart App Monitoring'],
    systemSpecs: 'Ideal for businesses operating primarily during the day. Maximizes solar generation to offset daytime grid consumption without the cost of batteries.'
  },
  { 
    name: 'GS+ Plus', 
    price: 'R7,499', 
    isOnceOff: false, 
    inverter: '30 kVA three phase inverter', 
    panels: '45 x 600 Wp panels', 
    batteries: '40 kWh of batteries',
    idealFor: 'Medium commercial / Lodges.',
    inclusions: ['Three-Phase Compatibility', 'High-Yield 600W Panels', 'Massive Storage Capacity', 'Full Maintenance'],
    systemSpecs: 'A powerhouse system for businesses that need serious backup power. 40kWh of storage ensures operations continue smoothly through the night or severe load shedding.'
  },
  { 
    name: 'GS+ Pro Saver', 
    price: 'R6,749', 
    isOnceOff: false, 
    inverter: '50 kVA three phase inverter', 
    panels: '64 x 600 Wp panels', 
    batteries: null,
    idealFor: 'Large daytime commercial operations.',
    inclusions: ['Industrial-Grade Inverter', 'Maximum Panel Density', 'Commercial Setup'],
    systemSpecs: 'Heavy-duty solar generation for large facilities operating during sunlight hours. Drastically reduces commercial electricity bills.'
  },
  { 
    name: 'GS+ Pro', 
    price: 'R9,999', 
    isOnceOff: false, 
    inverter: '50 kVA three phase inverter', 
    panels: '64 x 600 Wp panels', 
    batteries: '50 kWh of batteries',
    idealFor: 'Large scale commercial & continuous operations.',
    inclusions: ['Industrial-Grade Inverter', 'Maximum Panel Density', '50kWh Storage Bank', 'Comprehensive Support'],
    systemSpecs: 'The ultimate commercial package. Combines massive generation with immense 50kWh storage to essentially take a large business off-grid or bulletproof it against power instability.'
  },
];
</script>

<style scoped>
.icon-blue { background: rgba(52,152,219,.12); color: #3498db; }
.icon-gold { background: rgba(212,175,55,.12); color: #b8940e; }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Custom Scrollbar for Modal */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 20px;
}
</style>
