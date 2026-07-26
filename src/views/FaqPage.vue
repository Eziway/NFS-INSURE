<template>
  <div class="overflow-hidden bg-slate-50 min-h-screen">
    <!-- ============================================
         HERO SECTION
         ============================================ -->
    <section class="relative pt-[160px] pb-24 max-md:pt-[120px] max-md:pb-16 overflow-hidden bg-primary-dark">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-dark to-[#1a3a5c] opacity-90 z-10"></div>
        <div class="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div class="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-secondary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div class="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-sm text-white text-xs font-bold uppercase tracking-wider mb-6 reveal">
          <i class="fas fa-question-circle text-secondary"></i> Knowledge Base
        </div>
        <h1 class="text-[clamp(1.8rem,3.5vw,3.2rem)] font-extrabold text-white mb-6 leading-tight tracking-tight reveal">
          Frequently Asked <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-gold-bright">Questions</span>
        </h1>
        <p class="text-[1.05rem] text-slate-300 leading-relaxed max-w-2xl mx-auto reveal">
          Find answers to common questions about our services, processes, and how we can help you achieve financial security.
        </p>
      </div>
      
      <div class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
        <svg class="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f8fafc"></path>
        </svg>
      </div>
    </section>

    <!-- ============================================
         FAQ CATEGORIES & LIST
         ============================================ -->
    <section class="py-16 relative z-30 -mt-10">
      <div class="max-w-[1000px] mx-auto px-6">
        
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-3 mb-12 reveal">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            @click="activeCategory = cat.id"
            class="px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm"
            :class="activeCategory === cat.id ? 'bg-primary text-white shadow-lg -translate-y-0.5' : 'bg-white text-slate-600 hover:bg-slate-100'"
          >
            <i :class="cat.icon" class="mr-2"></i> {{ cat.name }}
          </button>
        </div>

        <!-- FAQ Accordion -->
        <div class="space-y-4 reveal" ref="faqListRef">
          <div 
            v-for="(faq, idx) in filteredFaqs" 
            :key="idx" 
            class="bg-white border rounded-2xl overflow-hidden transition-all duration-300"
            :class="activeFaq === faq.id ? 'border-primary shadow-[0_10px_30px_rgba(30,41,59,0.05)]' : 'border-slate-100 hover:border-slate-300'"
          >
            <button 
              @click="toggleFaq(faq.id)" 
              class="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left focus:outline-none bg-transparent"
            >
              <h3 class="font-bold text-primary md:text-lg pr-8">{{ faq.question }}</h3>
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                :class="activeFaq === faq.id ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-500'"
              >
                <i class="fas fa-chevron-down text-sm"></i>
              </div>
            </button>
            
            <div 
              class="px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out"
              :style="{ maxHeight: activeFaq === faq.id ? '500px' : '0', opacity: activeFaq === faq.id ? '1' : '0' }"
            >
              <div class="pb-6 md:pb-8 text-slate-500 leading-relaxed text-[0.95rem]">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ============================================
         CTA SECTION
         ============================================ -->
    <section class="py-20 bg-white">
      <div class="max-w-[800px] mx-auto px-6 text-center reveal" ref="ctaRef">
        <div class="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary text-3xl mx-auto mb-6">
          <i class="fas fa-headset"></i>
        </div>
        <h2 class="text-3xl font-extrabold text-primary mb-4">Still have questions?</h2>
        <p class="text-slate-500 mb-8 max-w-lg mx-auto">
          If you couldn't find the answer you were looking for, our expert team is ready to assist you directly.
        </p>
        <router-link to="/contact" class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#1a3a5c] text-white font-bold py-4 px-10 rounded-full text-lg hover:-translate-y-1 shadow-[0_10px_30px_rgba(26,58,92,0.3)] transition-all">
          Contact Our Team <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useScrollReveal } from '@/composables/useScrollReveal';

const { observe } = useScrollReveal();
const faqListRef = ref(null);
const ctaRef = ref(null);

const activeCategory = ref('all');
const activeFaq = ref(null);

const categories = [
  { id: 'all', name: 'All Questions', icon: 'fas fa-layer-group' },
  { id: 'general', name: 'General', icon: 'fas fa-info-circle' },
  { id: 'medical', name: 'Medical Aid', icon: 'fas fa-heartbeat' },
  { id: 'funding', name: 'Business Funding', icon: 'fas fa-store' },
];

const faqs = [
  {
    id: 1,
    category: 'general',
    question: "Is there a fee for your consulting services?",
    answer: "Our initial consultation and quote comparisons are completely free. We are remunerated by the service providers when you successfully take up a product, meaning you get expert advice at no extra cost."
  },
  {
    id: 2,
    category: 'general',
    question: "Are you licensed and regulated?",
    answer: "Yes, NFS Insure Consultant (Pty) Ltd is a licensed Financial Services Provider (FSP No. 53910) registered with the Financial Sector Conduct Authority (FSCA) and accredited with The Council for Medical Schemes."
  },
  {
    id: 3,
    category: 'medical',
    question: "How do I choose the right medical aid plan?",
    answer: "Our expert advisors will assess your healthcare needs, family size, and budget to recommend the most suitable plan from South Africa's top providers. We compare benefits and costs across the market for you."
  },
  {
    id: 4,
    category: 'medical',
    question: "Can I change my medical aid during the year?",
    answer: "Generally, you can upgrade your plan at the beginning of the year, but you can downgrade at any time with a month's notice. You can also move to a different scheme at any time, though waiting periods may apply."
  },
  {
    id: 5,
    category: 'funding',
    question: "What types of business funding do you offer?",
    answer: "We offer a range of SMME funding solutions including working capital, asset finance, and expansion capital. Approvals are fast, and we tailor the repayment structures to your cash flow."
  },
  {
    id: 6,
    category: 'funding',
    question: "What documents do I need to apply for SMME funding?",
    answer: "Typically, you will need your company registration documents, directors' IDs, the last 6 months of bank statements, and recent management accounts. The exact requirements depend on the type and amount of funding requested."
  }
];

const filteredFaqs = computed(() => {
  if (activeCategory.value === 'all') {
    return faqs;
  }
  return faqs.filter(faq => faq.category === activeCategory.value);
});

const toggleFaq = (id) => {
  activeFaq.value = activeFaq.value === id ? null : id;
};

onMounted(() => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => observe(el));
});
</script>
