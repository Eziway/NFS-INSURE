<template>
  <div class="overflow-hidden bg-white">
    <!-- HERO -->
    <section class="relative flex items-center justify-center text-center overflow-hidden"
      style="min-height:62vh; padding-top:110px; padding-bottom:80px; background: linear-gradient(135deg, #1a252f 0%, #2c3e50 40%, #1a3a5c 70%, #0d2137 100%);">
      <div class="absolute inset-0 z-10 pointer-events-none" style="background: radial-gradient(circle at 20% 50%, rgba(212,175,55,.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(52,152,219,.15) 0%, transparent 50%)"></div>
      <div class="absolute inset-0 z-10 pointer-events-none" style="background-image: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(212,175,55,.04) 60px, rgba(212,175,55,.04) 61px)"></div>
      <div class="relative z-20 max-w-[860px] mx-auto px-6">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-[2px]" style="background: rgba(212,175,55,.15); border: 1px solid rgba(212,175,55,.4); color: #d4af37;">
          <i class="fas fa-user-graduate"></i> NFS Insure — Educational Protection Division
        </div>
        <h1 class="font-extrabold text-white leading-tight mb-5" style="font-size: clamp(2.4rem,5vw,3.8rem); text-shadow: 0 4px 20px rgba(0,0,0,.4);">
          NFS <span style="color:#d4af37">Learner Insurance</span>
        </h1>
        <p class="mb-8 mx-auto" style="font-size:1.15rem; color:rgba(255,255,255,.75); max-width:700px; line-height:1.8;">
          All-in-one protection for learners, students, and schools — covering medical emergencies, sports injuries, healthcare benefits, and funeral cover.
        </p>
        <div class="mb-8" style="color:rgba(255,255,255,.6); font-size:.95rem;">
          <router-link to="/" style="color:rgba(255,255,255,.8); text-decoration:none;" class="hover:text-yellow-400 transition-colors">Home</router-link>
          <span class="mx-2">/</span><span>Learner Insurance</span>
        </div>
        <router-link to="/contact" class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" style="background: linear-gradient(135deg,#d4af37,#f1c40f); color:#1a252f; box-shadow:0 4px 20px rgba(212,175,55,.4);">
          <i class="fas fa-paper-plane"></i> Apply for Learner Cover
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
                <h2 class="text-3xl font-extrabold text-white mb-4">Dedicated Safety & Health Protection for South African Learners</h2>
                <p style="color:rgba(255,255,255,.85); line-height:1.8;">Active school children and students are exposed to physical activities, sports injuries, and medical emergencies. NFS Learner Insurance is specifically designed to provide parents and educational institutions with an affordable safety net.</p>
                <p class="mt-4" style="color:rgba(255,255,255,.85); line-height:1.8;">Our comprehensive policy includes healthcare benefits, medical emergency wallet, sports injury cover, and funeral benefits to ensure uninterrupted education and peace of mind.</p>
                <div class="flex flex-wrap gap-3 mt-8">
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-running text-yellow-400"></i> Sports Injury Cover</span>
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-notes-medical text-yellow-400"></i> Emergency Healthcare</span>
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-wallet text-yellow-400"></i> Medical Wallet</span>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-5">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-100">
              <img
                src="/img/learner_insurance_1785048604761.png"
                alt="Parent dropping child at school"
                class="w-full h-auto object-cover max-h-[300px]"
              />
            </div>

            <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Why It Matters</div>
            <div class="space-y-4">
              <div v-for="item in benefits" :key="item" class="flex items-center gap-4">
                <div class="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style="background:rgba(39,174,96,.12); color:#27ae60;"><i class="fas fa-check"></i></div>
                <p class="text-slate-700 font-medium m-0">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OFFERINGS -->
    <section class="py-24" style="background:#f9fafb;">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Features & Cover</div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50;">What NFS Learner Insurance Covers</h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; max-width:720px; line-height:1.8;">Complete peace of mind for parents, learners, and school management.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="item in features" :key="item.title" class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-300 transition-all duration-300 flex flex-col">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6" style="background:rgba(212,175,55,.1); color:#b8940e;">
              <i :class="item.icon"></i>
            </div>
            <h4 class="text-xl font-bold mb-3" style="color:#2c3e50;">{{ item.title }}</h4>
            <p class="text-slate-500 text-sm leading-relaxed flex-1">{{ item.desc }}</p>
            <router-link to="/contact" class="inline-flex items-center gap-2 font-bold text-sm" style="color:#3498db;">
              Enquire Now <i class="fas fa-arrow-right"></i>
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
            <h2 class="font-extrabold mb-4" style="font-size:clamp(1.8rem,4vw,2.8rem); color:#1a252f;">Protect Your Learners & School Today</h2>
            <p class="mb-8 mx-auto" style="color:rgba(26,37,47,.75); font-size:1.1rem; max-width:600px; line-height:1.7;">Get in touch with NFS Insure to set up group learner cover for your school or individual policy for your child.</p>
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
const benefits = [
  'Full coverage for school sports injuries and extra-mural events',
  'Immediate medical emergency wallet for fast admission',
  'Flexible group schemes for public and private schools',
  'Affordable premiums for parents and school funds',
];

const features = [
  { icon: 'fas fa-cross', title: 'Funeral Cover', desc: 'Dignified funeral protection payout ensuring sudden bereavement expenses don\'t disrupt family stability.' },
  { icon: 'fas fa-heartbeat', title: 'Healthcare Benefits', desc: 'Out-patient care benefits, GP visits, and medication support for active learners.' },
  { icon: 'fas fa-ambulance', title: 'Medical Emergency', desc: 'Emergency medical evacuation, ambulance transportation, and hospital stabilization.' },
  { icon: 'fas fa-wallet', title: 'Medical Wallet', desc: 'Dedicated digital allocation to assist parents with upfront hospital and prescription co-payments.' },
  { icon: 'fas fa-running', title: 'Sports Injuries', desc: 'Cover for specialized orthopaedic treatment, X-rays, physiotherapists, and recovery after school sports activities.' },
  { icon: 'fas fa-school', title: 'School Group Protection', desc: 'Tailored institutional insurance packages designed for school principals, governing bodies, and tours.' },
];
</script>
