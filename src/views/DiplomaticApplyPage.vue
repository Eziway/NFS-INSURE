<template>
  <div class="bg-slate-50 min-h-screen pt-32 pb-24">
    <div class="max-w-[800px] mx-auto px-6">
      
      <div class="text-center mb-10 reveal" ref="headerRef">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-dark/10 text-primary-dark text-xs font-bold uppercase tracking-wider mb-4 border border-primary-dark/20">
          <i class="fas fa-globe"></i> Diplomatic Concierge
        </div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-primary mb-4">Request Services</h1>
        <p class="text-slate-500 max-w-xl mx-auto">Please provide your details below. A dedicated concierge manager will contact you discreetly.</p>
      </div>

      <!-- Form Container -->
      <div class="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(30,41,59,0.05)] border border-slate-100 p-8 md:p-12 relative overflow-hidden reveal" ref="formRef">
        
        <form @submit.prevent="submitFinal">
          <!-- Section: Personal Info -->
          <h3 class="text-xl font-bold text-primary mb-6 border-b border-slate-100 pb-4">Personal & Diplomatic Details</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-2">Title</label>
              <select v-model="form.title" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary appearance-none">
                <option value="H.E.">H.E. (His/Her Excellency)</option>
                <option value="Hon.">Hon. (Honourable)</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
                <option value="Dr.">Dr.</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
              <input type="text" v-model="form.fullName" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Enter full name" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-2">Embassy / Mission / Organization</label>
              <input type="text" v-model="form.embassy" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="e.g. Embassy of..." />
            </div>
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-2">Position / Job Title</label>
              <input type="text" v-model="form.position" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="e.g. Ambassador, Attaché" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-2">Email Address (Secure)</label>
              <input type="email" v-model="form.email" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="secure@email.com" />
            </div>
            <div>
              <label class="block text-sm font-bold text-slate-700 mb-2">Contact Number</label>
              <input type="tel" v-model="form.phone" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="+27..." />
            </div>
          </div>

          <!-- Section: Services -->
          <h3 class="text-xl font-bold text-primary mb-6 border-b border-slate-100 pb-4">Required Services</h3>
          <p class="text-sm text-slate-500 mb-4">Select all the areas where you require assistance or consultation:</p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <label v-for="service in availableServices" :key="service.id" class="flex items-center gap-3 p-4 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors" :class="form.services.includes(service.id) ? 'bg-primary/5 border-primary shadow-sm' : ''">
              <input type="checkbox" :value="service.id" v-model="form.services" class="w-4 h-4 text-primary focus:ring-primary rounded border-slate-300" />
              <span class="text-sm font-semibold text-slate-700">{{ service.label }}</span>
            </label>
          </div>

          <!-- Section: Additional Notes -->
          <div class="mb-8">
            <label class="block text-sm font-bold text-slate-700 mb-2">Additional Information / Specific Requirements</label>
            <textarea v-model="form.notes" rows="4" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary resize-none" placeholder="Please specify any particular needs, preferred contact times, or urgency..."></textarea>
          </div>

          <!-- Privacy Consent -->
          <div class="mb-8 bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
            <input type="checkbox" v-model="form.consent" required class="mt-1 w-4 h-4 text-primary focus:ring-primary rounded border-slate-300" id="consent" />
            <label for="consent" class="text-sm text-slate-600 leading-relaxed cursor-pointer">
              I understand that all information provided is treated with strict confidentiality. I consent to NFS Insure processing my data to fulfill my service request.
            </label>
          </div>

          <!-- Submit -->
          <div class="flex justify-end pt-6 border-t border-slate-100">
            <button 
              type="submit"
              class="px-10 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary-dark shadow-xl hover:-translate-y-1 transition-all"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Submit Request Discreetly</span>
              <span v-else><i class="fas fa-spinner fa-spin mr-2"></i> Encrypting & Sending...</span>
            </button>
          </div>
        </form>

        <!-- Success State Overlay -->
        <div v-if="showSuccess" class="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center text-center p-8 animate-[fadeIn_0.3s_ease-out]">
          <div class="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center text-4xl mb-6">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h2 class="text-3xl font-bold text-primary mb-4">Request Secured & Received</h2>
          <p class="text-slate-500 mb-8 max-w-md">Thank you. Your request has been securely transmitted to our Diplomatic Desk. A concierge manager will contact you shortly using your preferred method.</p>
          <router-link to="/" class="px-8 py-3 rounded-full bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors">
            Return to Home
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useScrollReveal } from '@/composables/useScrollReveal';

const isSubmitting = ref(false);
const showSuccess = ref(false);

const availableServices = [
  { id: 'real_estate', label: 'Real Estate & Relocation' },
  { id: 'vehicle', label: 'Vehicle Procurement & Reg' },
  { id: 'medical', label: 'International Medical Aid' },
  { id: 'insurance', label: 'Asset & Liability Insurance' },
  { id: 'banking', label: 'Banking & Wealth Management' },
  { id: 'concierge', label: 'Lifestyle Concierge' },
];

const form = ref({
  title: 'H.E.', fullName: '', embassy: '', position: '',
  email: '', phone: '', services: [], notes: '', consent: false
});

function submitFinal() {
  if (!form.value.consent) {
    alert("Please accept the privacy terms to continue.");
    return;
  }
  isSubmitting.value = true;
  // Simulate API Submission
  setTimeout(() => {
    isSubmitting.value = false;
    showSuccess.value = true;
  }, 2000);
}

const headerRef = ref(null);
const formRef = ref(null);
const { observe } = useScrollReveal();

onMounted(() => {
  observe(headerRef.value);
  observe(formRef.value);
});
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
