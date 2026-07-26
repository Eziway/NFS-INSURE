<template>
  <div class="overflow-hidden bg-white">
    <!-- HERO -->
    <section class="relative flex items-center justify-center text-center overflow-hidden"
      style="min-height:62vh; padding-top:110px; padding-bottom:80px; background: linear-gradient(135deg, #1a252f 0%, #2c3e50 40%, #1a3a5c 70%, #0d2137 100%);">
      <div class="absolute inset-0 z-10 pointer-events-none" style="background: radial-gradient(circle at 20% 50%, rgba(212,175,55,.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(52,152,219,.15) 0%, transparent 50%)"></div>
      <div class="absolute inset-0 z-10 pointer-events-none" style="background-image: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(212,175,55,.04) 60px, rgba(212,175,55,.04) 61px)"></div>
      <div class="relative z-20 max-w-[860px] mx-auto px-6">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-[2px]" style="background: rgba(212,175,55,.15); border: 1px solid rgba(212,175,55,.4); color: #d4af37;">
          <i class="fas fa-key"></i> NFS Insure — In Partnership with ooba Home Loans
        </div>
        <h1 class="font-extrabold text-white leading-tight mb-5" style="font-size: clamp(2.4rem,5vw,3.8rem); text-shadow: 0 4px 20px rgba(0,0,0,.4);">
          Home Loan <span style="color:#d4af37">Pre-Qualification</span>
        </h1>
        <p class="mb-8 mx-auto" style="font-size:1.15rem; color:rgba(255,255,255,.75); max-width:700px; line-height:1.8;">
          Now that you've taken the first step to becoming a home owner, let us help you find out exactly how much you can afford — and boost your chances of bond approval with a Pre-Qualified Buyer's Certificate.
        </p>
        <div class="mb-8" style="color:rgba(255,255,255,.6); font-size:.95rem;">
          <router-link to="/" style="color:rgba(255,255,255,.8); text-decoration:none;" class="hover:text-yellow-400 transition-colors">Home</router-link>
          <span class="mx-2">/</span><span>Home Loans</span>
        </div>
        <router-link to="/home-loans-apply" class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" style="background: linear-gradient(135deg,#d4af37,#f1c40f); color:#1a252f; box-shadow:0 4px 20px rgba(212,175,55,.4);">
          <i class="fas fa-paper-plane"></i> Apply for a Home Loan
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
                <h2 class="text-3xl font-extrabold text-white mb-4">A Pre-Qualified Buyer's Certificate Puts You in Control</h2>
                <p style="color:rgba(255,255,255,.85); line-height:1.8;">NFS Insure has partnered with ooba, South Africa's leading home loan comparison service, to help you get pre-qualified before you start house hunting — so you know exactly what you can afford to buy for.</p>
                <p class="mt-4" style="color:rgba(255,255,255,.85); line-height:1.8;">Your application is submitted to multiple major banks at once, giving you the best chance of approval and the most competitive interest rate, all managed by your NFS Insure consultant from start to finish.</p>
                <div class="flex flex-wrap gap-3 mt-8">
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-university text-yellow-400"></i> Multiple Banks, One Application</span>
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-percentage text-yellow-400"></i> Best Rate Comparison</span>
                  <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style="background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); color:white;"><i class="fas fa-gift text-yellow-400"></i> No Cost to You</span>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-5">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-100">
              <img
                src="/img/home_loan_family_1785047722826.png"
                alt="Happy family with new home"
                class="w-full h-auto object-cover max-h-[300px]"
              />
            </div>

            <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Why it matters</div>
            <p class="text-slate-600 mb-8" style="font-size:1.05rem; line-height:1.8;">A Pre-Qualified Buyer's Certificate shows estate agents and sellers that you're a serious, ready buyer — and gives you a clear budget before you start viewing properties.</p>
            <div class="space-y-4">
              <div v-for="item in whyItems" :key="item" class="flex items-center gap-4">
                <div class="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style="background:rgba(39,174,96,.12); color:#27ae60;"><i class="fas fa-check"></i></div>
                <p class="text-slate-700 font-medium m-0">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DOCUMENTS -->
    <section class="py-24" style="background:#f9fafb;">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(52,152,219,.1); color:#3498db; border:1px solid rgba(52,152,219,.25);">Before You Apply</div>
          <h2 class="font-extrabold mb-4" style="font-size:clamp(2rem,4vw,3rem); color:#2c3e50;">Documents Needed for Your Loan Application</h2>
          <p class="text-slate-600 mx-auto" style="font-size:1.1rem; max-width:720px; line-height:1.8;">What you'll need depends on how you earn your income. Have these ready to speed up your pre-qualification.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div v-for="docGroup in docGroups" :key="docGroup.title"
            class="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            :class="docGroup.iconClass === 'icon-blue' ? 'hover:border-blue-300' : 'hover:border-yellow-300'">
            <div class="w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300" :class="docGroup.iconClass">
              <i :class="docGroup.icon"></i>
            </div>
            <h4 class="text-2xl font-bold mb-2" style="color:#2c3e50;">{{ docGroup.title }}</h4>
            <p class="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-6">{{ docGroup.subtitle }}</p>
            <ul class="space-y-2.5 flex-1">
              <li v-for="item in docGroup.items" :key="item" class="flex items-start gap-3 text-slate-600 text-[0.95rem]">
                <i class="fas fa-check-circle mt-0.5 shrink-0" style="color:#27ae60;"></i> {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <!-- Certificate banner -->
        <div class="flex items-center gap-6 p-6 rounded-2xl" style="background:linear-gradient(135deg,#d4af37 0%,#f1c40f 100%);">
          <div class="w-14 h-14 rounded-full flex items-center justify-center text-2xl shrink-0" style="background:rgba(26,37,47,.2); color:#1a252f;"><i class="fas fa-award"></i></div>
          <p class="font-bold m-0" style="color:#1a252f; font-size:1.05rem;">Your Qualified Buyer Certificate is valid for 3 months from date of issue.</p>
        </div>
      </div>
    </section>

    <!-- PARTNERSHIP -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div class="lg:col-span-5">
            <div class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style="background:rgba(212,175,55,.1); color:#b8940e; border:1px solid rgba(212,175,55,.3);">Our Partner</div>
            <h2 class="font-extrabold mt-2 mb-6" style="font-size:clamp(1.8rem,3.5vw,2.5rem); color:#2c3e50; line-height:1.2;">Partnered with ooba Home Loans</h2>
            <p class="text-slate-600 mb-8" style="font-size:1.05rem; line-height:1.8;">ooba is South Africa's largest home loan comparison service, submitting your application to multiple banks to secure you the best possible deal. NFS Insure manages your application from start to finish, so you don't have to deal with the banks directly.</p>
            <div class="rounded-2xl p-8 text-center" style="background:linear-gradient(135deg,#d4af37 0%,#f1c40f 100%); color:#1a252f;">
              <h3 class="text-xl font-extrabold mb-3">Ready to Find Out What You Qualify For?</h3>
              <p class="mb-6 opacity-85">Complete our simple online application and upload your documents — our team takes it from there.</p>
              <router-link to="/home-loans-apply" class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm hover:-translate-y-1 hover:shadow-lg transition-all" style="background:#1a252f; color:white;">
                <i class="fas fa-arrow-right"></i> Start Your Application
              </router-link>
            </div>
          </div>
          <div class="lg:col-span-7 space-y-4">
            <div v-for="f in partnerFeatures" :key="f.title" class="flex items-start gap-5 p-6 rounded-2xl border border-slate-200 hover:border-yellow-300 hover:shadow-lg hover:translate-x-1 transition-all duration-300">
              <div class="w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-2xl shrink-0" style="background:rgba(212,175,55,.1); color:#b8940e;"><i :class="f.icon"></i></div>
              <div><h5 class="font-bold mb-1" style="color:#2c3e50;">{{ f.title }}</h5><p class="text-slate-500 text-sm leading-relaxed m-0">{{ f.desc }}</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY PRE-QUALIFY (dark) -->
    <section class="py-24 relative overflow-hidden" style="background:linear-gradient(135deg,#2c3e50 0%,#1a3a5c 100%);">
      <div class="absolute inset-0 pointer-events-none" style="background: repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(255,255,255,.02) 60px, rgba(255,255,255,.02) 61px);"></div>
      <div class="relative z-10 max-w-[1200px] mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 text-xs font-bold uppercase tracking-[2px]" style="background:rgba(212,175,55,.15); border:1px solid rgba(212,175,55,.4); color:#d4af37;"><i class="fas fa-star"></i> Why Choose Us</div>
          <h2 class="font-extrabold text-white mb-4" style="font-size:clamp(2rem,4vw,3rem);">Why Get Pre-Qualified with NFS Insure?</h2>
          <p style="color:rgba(255,255,255,.7); font-size:1.1rem; max-width:650px; margin:0 auto;">A simple, guided process that puts you in the strongest position to buy your next home.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="card in whyCards" :key="card.title" class="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/50" style="background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.12); backdrop-filter:blur(4px);">
            <span class="text-5xl mb-4 block">{{ card.emoji }}</span>
            <h5 class="font-bold text-white mb-2 text-lg">{{ card.title }}</h5>
            <p style="color:rgba(255,255,255,.7); font-size:.92rem; line-height:1.7; margin:0;">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-white">
      <div class="max-w-[1200px] mx-auto px-6">
        <div class="relative rounded-[2rem] p-16 text-center overflow-hidden" style="background:linear-gradient(135deg,#d4af37 0%,#f1c40f 100%);">
          <div class="relative z-10">
            <h2 class="font-extrabold mb-4" style="font-size:clamp(1.8rem,4vw,2.8rem); color:#1a252f;">Ready to Find Your Buying Power?</h2>
            <p class="mb-8 mx-auto" style="color:rgba(26,37,47,.75); font-size:1.1rem; max-width:600px; line-height:1.7;">Apply today for your Pre-Qualified Buyer's Certificate and take the next confident step towards owning your home.</p>
            <div class="flex flex-wrap gap-4 justify-center">
              <router-link to="/home-loans-apply" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 hover:shadow-2xl transition-all" style="background:#1a252f; color:white;"><i class="fas fa-paper-plane"></i> Apply Now</router-link>
              <router-link to="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:-translate-y-1 transition-all" style="background:transparent; border:2px solid rgba(26,37,47,.35); color:#1a252f;"><i class="fas fa-envelope"></i> Get in Touch</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const whyItems = [
  'Know your affordable purchase price upfront',
  'Submitted to major South African banks simultaneously',
  'Dedicated consultant manages the process for you',
  'Upload documents online or send via WhatsApp / email',
];

const docGroups = [
  {
    title: 'Salaried Applicants', subtitle: 'Employed / Earning a Fixed Salary',
    icon: 'fas fa-briefcase', iconClass: 'icon-blue',
    items: ['Copy of ID document (front & back of ID card)', 'Latest 3 months\' personal bank statements, reflecting salary deposits', 'Latest 3 months\' pay slips — if any overtime or commission is earned, provide the latest 6 consecutive months', 'Completed and signed ooba application form'],
  },
  {
    title: 'Self-Employed / Business Owners', subtitle: 'Own Business, Freelance or Commission-Based',
    icon: 'fas fa-store', iconClass: 'icon-gold',
    items: ['Copy of ID document (front & back of ID card)', 'Latest 6 months\' personal and business bank statements', 'Latest 2 years\' financial statements or management accounts', 'Latest 2 years\' personal and business tax returns (SARS)', 'Proof of business registration (CIPC/CK documents)', 'Completed and signed ooba application form'],
  },
];

const partnerFeatures = [
  { icon: 'fas fa-university', title: 'Access to Multiple Banks', desc: 'One application is submitted to South Africa\'s major banks at once, maximizing your chance of approval.' },
  { icon: 'fas fa-percentage', title: 'Competitive Interest Rates', desc: 'Banks compete for your business, helping you secure the most favourable interest rate available.' },
  { icon: 'fas fa-mobile-alt', title: 'Simple Online or WhatsApp Process', desc: 'Complete the online application and upload your documents directly, or send them through via WhatsApp and email.' },
  { icon: 'fas fa-user-tie', title: 'Dedicated NFS Insure Consultant', desc: 'A personal consultant guides you through pre-qualification, document collection, and bank submission.' },
];

const whyCards = [
  { emoji: '🏠', title: 'Know Your Budget', desc: 'Find out exactly how much you can afford before you start house hunting.' },
  { emoji: '🏦', title: 'Multiple Bank Access', desc: 'Your application is submitted to all major South African banks through our ooba partnership.' },
  { emoji: '💸', title: 'No Cost to You', desc: 'Our home loan pre-qualification and application service comes at no charge to the applicant.' },
  { emoji: '⚡', title: 'Fast Turnaround', desc: 'A streamlined, digital process gets your pre-qualification certificate to you quickly.' },
  { emoji: '📱', title: 'Apply Your Way', desc: 'Complete the form online, or send documents via WhatsApp and email — whichever suits you.' },
  { emoji: '🤝', title: 'Personal Consultant', desc: 'A dedicated NFS Insure consultant supports you through every step of the process.' },
];
</script>

<style scoped>
.icon-blue { background: rgba(52,152,219,.12); color: #3498db; }
.icon-gold { background: rgba(212,175,55,.12); color: #b8940e; }
</style>
