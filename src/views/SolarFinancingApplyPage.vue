<template>
  <div class="bg-slate-50 min-h-screen pt-32 pb-24">
    <div class="max-w-[800px] mx-auto px-6">
      
      <div class="text-center mb-10 reveal" ref="headerRef">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary-dark text-xs font-bold uppercase tracking-wider mb-4">
          <i class="fas fa-sun"></i> Solar Finance Application
        </div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-primary mb-4">Get Financed for Solar</h1>
        <p class="text-slate-500 max-w-xl mx-auto">Take the first step towards energy independence for your Guesthouse or B&B.</p>
      </div>

      <!-- Step Indicator -->
      <div class="flex justify-between items-center mb-12 relative max-w-[500px] mx-auto reveal" ref="progressRef">
        <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-0"></div>
        <div class="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-secondary transition-all duration-500 -z-0" :style="{ width: progressWidth }"></div>
        
        <div v-for="step in 3" :key="step" class="relative z-10 flex flex-col items-center gap-2">
          <div 
            class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300"
            :class="[
              currentStep === step ? 'bg-secondary text-primary-dark shadow-lg shadow-secondary/30 ring-4 ring-white' : 
              currentStep > step ? 'bg-secondary text-primary-dark ring-4 ring-white' : 
              'bg-slate-200 text-slate-500 ring-4 ring-slate-50'
            ]"
          >
            <i v-if="currentStep > step" class="fas fa-check"></i>
            <span v-else>{{ step }}</span>
          </div>
          <span class="text-xs font-semibold" :class="currentStep >= step ? 'text-primary' : 'text-slate-400'">
            {{ stepNames[step - 1] }}
          </span>
        </div>
      </div>

      <!-- Form Container -->
      <div class="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(30,41,59,0.05)] border border-slate-100 p-8 md:p-12 relative overflow-hidden reveal" ref="formRef">
        
        <form @submit.prevent="nextStep">
          <!-- STEP 1: Property Details -->
          <div v-show="currentStep === 1" class="animate-[fadeIn_0.5s_ease-out]">
            <h3 class="text-xl font-bold text-primary mb-6 border-b border-slate-100 pb-4">Property Details</h3>
            <div class="mb-6">
              <label class="block text-sm font-bold text-slate-700 mb-2">Property Type</label>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <label v-for="type in propertyTypes" :key="type.value" class="cursor-pointer">
                  <input type="radio" v-model="form.propertyType" :value="type.value" class="peer sr-only" />
                  <div class="rounded-xl border border-slate-200 p-4 text-center peer-checked:bg-secondary/10 peer-checked:border-secondary peer-checked:text-secondary-dark font-semibold transition-all h-full flex flex-col items-center justify-center gap-2">
                    <i :class="type.icon" class="text-2xl"></i>
                    <span class="text-sm">{{ type.label }}</span>
                  </div>
                </label>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Registered Business Name</label>
                <input type="text" v-model="form.businessName" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary" placeholder="Guesthouse Name" />
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Number of Rooms</label>
                <input type="number" v-model="form.rooms" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary" placeholder="10" />
              </div>
            </div>
          </div>

          <!-- STEP 2: Energy Requirements -->
          <div v-show="currentStep === 2" class="animate-[fadeIn_0.5s_ease-out]">
            <h3 class="text-xl font-bold text-primary mb-6 border-b border-slate-100 pb-4">Energy Requirements</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Average Monthly Electricity Bill (R)</label>
                <input type="number" v-model="form.monthlyBill" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary" placeholder="5000" />
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Current Phase Supply</label>
                <select v-model="form.phaseSupply" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary appearance-none">
                  <option value="" disabled>Select Phase</option>
                  <option value="single">Single Phase</option>
                  <option value="three">Three Phase</option>
                  <option value="unsure">I'm not sure</option>
                </select>
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-sm font-bold text-slate-700 mb-2">What is your primary goal?</label>
              <select v-model="form.primaryGoal" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary appearance-none">
                <option value="" disabled>Select Goal</option>
                <option value="backup">Backup power during load-shedding only</option>
                <option value="savings">Reduce monthly electricity bill (Savings + Backup)</option>
                <option value="offgrid">Go completely off-grid</option>
              </select>
            </div>
            <div class="mb-6">
              <label class="block text-sm font-bold text-slate-700 mb-2">Do you already have a quote from a solar installer?</label>
              <div class="flex gap-4">
                <label class="flex-1 cursor-pointer">
                  <input type="radio" v-model="form.hasQuote" value="yes" class="peer sr-only" />
                  <div class="rounded-xl border border-slate-200 px-4 py-3 text-center peer-checked:bg-secondary/10 peer-checked:border-secondary peer-checked:text-secondary-dark font-semibold transition-all">Yes, I have a quote</div>
                </label>
                <label class="flex-1 cursor-pointer">
                  <input type="radio" v-model="form.hasQuote" value="no" class="peer sr-only" />
                  <div class="rounded-xl border border-slate-200 px-4 py-3 text-center peer-checked:bg-secondary/10 peer-checked:border-secondary peer-checked:text-secondary-dark font-semibold transition-all">No, I need an installer</div>
                </label>
              </div>
            </div>
          </div>

          <!-- STEP 3: Contact Details -->
          <div v-show="currentStep === 3" class="animate-[fadeIn_0.5s_ease-out]">
            <h3 class="text-xl font-bold text-primary mb-6 border-b border-slate-100 pb-4">Owner / Contact Details</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input type="text" v-model="form.ownerName" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary" placeholder="Jane Doe" />
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">ID Number</label>
                <input type="text" v-model="form.ownerId" required maxlength="13" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary" placeholder="9001015000000" />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" v-model="form.email" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary" placeholder="jane@guesthouse.com" />
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Cell Number</label>
                <input type="tel" v-model="form.phone" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-secondary" placeholder="082 123 4567" />
              </div>
            </div>
            <div class="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <input type="checkbox" v-model="form.consent" required class="mt-1 w-4 h-4 text-secondary focus:ring-secondary rounded border-slate-300" id="consent" />
              <label for="consent" class="text-sm text-slate-600 leading-relaxed cursor-pointer">
                I consent to a credit assessment and confirm the provided information is accurate. I understand that I will need to provide utility bills and financial statements.
              </label>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex items-center justify-between pt-6 mt-8 border-t border-slate-100">
            <button 
              type="button" 
              v-if="currentStep > 1" 
              @click="currentStep--"
              class="px-6 py-3 rounded-full text-slate-500 font-bold hover:bg-slate-100 transition-colors"
            >
              <i class="fas fa-arrow-left mr-2"></i> Back
            </button>
            <div v-else></div> <!-- Spacer -->
            
            <button 
              v-if="currentStep < 3" 
              type="submit"
              class="px-8 py-3 rounded-full bg-primary text-white font-bold hover:bg-primary-dark transition-colors shadow-md"
            >
              Continue <i class="fas fa-arrow-right ml-2"></i>
            </button>
            
            <button 
              v-if="currentStep === 3" 
              type="button"
              @click="submitFinal"
              class="px-10 py-3 rounded-full bg-secondary text-primary-dark font-bold hover:bg-gold-bright shadow-lg transition-all"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Submit Application</span>
              <span v-else><i class="fas fa-spinner fa-spin mr-2"></i> Processing...</span>
            </button>
          </div>
        </form>

        <!-- Success State Overlay -->
        <div v-if="showSuccess" class="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center text-center p-8 animate-[fadeIn_0.3s_ease-out]">
          <div class="w-20 h-20 rounded-full bg-secondary/10 text-secondary-dark flex items-center justify-center text-4xl mb-6">
            <i class="fas fa-sun"></i>
          </div>
          <h2 class="text-3xl font-bold text-primary mb-4">Application Received!</h2>
          <p class="text-slate-500 mb-8 max-w-md">Thank you for submitting your solar finance request. Our energy finance specialists will review your details and contact you within 24 hours.</p>
          <router-link to="/" class="px-8 py-3 rounded-full bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors">
            Return to Home
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useScrollReveal } from '@/composables/useScrollReveal';

const currentStep = ref(1);
const stepNames = ['Property', 'Energy', 'Contact'];
const isSubmitting = ref(false);
const showSuccess = ref(false);

const propertyTypes = [
  { label: 'Guesthouse', value: 'guesthouse', icon: 'fas fa-bed' },
  { label: 'B&B', value: 'bnb', icon: 'fas fa-coffee' },
  { label: 'Boutique Hotel', value: 'hotel', icon: 'fas fa-hotel' },
  { label: 'Other', value: 'other', icon: 'fas fa-building' },
];

const form = ref({
  propertyType: 'guesthouse', businessName: '', rooms: '',
  monthlyBill: '', phaseSupply: '', primaryGoal: '', hasQuote: 'no',
  ownerName: '', ownerId: '', email: '', phone: '', consent: false
});

const progressWidth = computed(() => {
  return ((currentStep.value - 1) / 2) * 100 + '%';
});

function nextStep() {
  if (currentStep.value < 3) currentStep.value++;
}

function submitFinal() {
  if (!form.value.consent) {
    alert("Please agree to the credit check consent.");
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
const progressRef = ref(null);
const formRef = ref(null);
const { observe } = useScrollReveal();

onMounted(() => {
  observe(headerRef.value);
  observe(progressRef.value);
  observe(formRef.value);
});
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
