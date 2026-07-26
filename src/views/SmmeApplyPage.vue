<template>
  <div class="bg-slate-50 min-h-screen pt-32 pb-24">
    <div class="max-w-[800px] mx-auto px-6">
      
      <div class="text-center mb-10 reveal" ref="headerRef">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 text-success text-xs font-bold uppercase tracking-wider mb-4">
          <i class="fas fa-store"></i> SMME Funding
        </div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-primary mb-4">Business Funding Application</h1>
        <p class="text-slate-500">Fast, flexible funding to fuel your business growth.</p>
      </div>

      <!-- Step Indicator -->
      <div class="flex justify-between items-center mb-12 relative max-w-[500px] mx-auto reveal" ref="progressRef">
        <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-0"></div>
        <div class="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-success transition-all duration-500 -z-0" :style="{ width: progressWidth }"></div>
        
        <div v-for="step in 3" :key="step" class="relative z-10 flex flex-col items-center gap-2">
          <div 
            class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300"
            :class="[
              currentStep === step ? 'bg-success text-white shadow-lg shadow-success/30 ring-4 ring-white' : 
              currentStep > step ? 'bg-success text-white ring-4 ring-white' : 
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
          <!-- STEP 1: Business Details -->
          <div v-show="currentStep === 1" class="animate-[fadeIn_0.5s_ease-out]">
            <h3 class="text-xl font-bold text-primary mb-6 border-b border-slate-100 pb-4">Business Information</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Registered Business Name</label>
                <input type="text" v-model="form.businessName" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-success focus:border-success" placeholder="Company Pty Ltd" />
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Trading Name (if different)</label>
                <input type="text" v-model="form.tradingName" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-success focus:border-success" placeholder="Company Trading" />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Registration Number</label>
                <input type="text" v-model="form.regNumber" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-success focus:border-success" placeholder="2020/123456/07" />
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Business Type</label>
                <select v-model="form.businessType" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-success focus:border-success appearance-none">
                  <option value="" disabled>Select Type</option>
                  <option value="sole_proprietor">Sole Proprietor</option>
                  <option value="pty_ltd">PTY (Ltd)</option>
                  <option value="close_corporation">Close Corporation (CC)</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-sm font-bold text-slate-700 mb-2">Years in Operation</label>
              <select v-model="form.yearsOperating" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-success focus:border-success appearance-none">
                <option value="" disabled>Select Duration</option>
                <option value="less_than_1">Less than 1 year</option>
                <option value="1_to_3">1 - 3 years</option>
                <option value="3_to_5">3 - 5 years</option>
                <option value="more_than_5">More than 5 years</option>
              </select>
            </div>
          </div>

          <!-- STEP 2: Financials & Request -->
          <div v-show="currentStep === 2" class="animate-[fadeIn_0.5s_ease-out]">
            <h3 class="text-xl font-bold text-primary mb-6 border-b border-slate-100 pb-4">Funding Details</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Average Monthly Turnover (R)</label>
                <input type="number" v-model="form.monthlyTurnover" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-success focus:border-success" placeholder="0.00" />
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Funding Amount Required (R)</label>
                <input type="number" v-model="form.fundingAmount" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-success focus:border-success" placeholder="0.00" />
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-sm font-bold text-slate-700 mb-2">Primary Purpose of Funding</label>
              <select v-model="form.fundingPurpose" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-success focus:border-success appearance-none">
                <option value="" disabled>Select Purpose</option>
                <option value="working_capital">Working Capital / Cashflow</option>
                <option value="equipment">Equipment Purchase</option>
                <option value="purchase_order">Purchase Order / Tender Financing</option>
                <option value="expansion">Business Expansion</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <!-- STEP 3: Contact Person -->
          <div v-show="currentStep === 3" class="animate-[fadeIn_0.5s_ease-out]">
            <h3 class="text-xl font-bold text-primary mb-6 border-b border-slate-100 pb-4">Director / Contact Details</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input type="text" v-model="form.directorName" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-success focus:border-success" placeholder="Jane Doe" />
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">ID Number</label>
                <input type="text" v-model="form.directorId" required maxlength="13" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-success focus:border-success" placeholder="9001015000000" />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" v-model="form.email" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-success focus:border-success" placeholder="jane@company.com" />
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Cell Number</label>
                <input type="tel" v-model="form.phone" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-success focus:border-success" placeholder="082 123 4567" />
              </div>
            </div>
            <div class="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <input type="checkbox" v-model="form.consent" required class="mt-1 w-4 h-4 text-success focus:ring-success rounded border-slate-300" id="consent" />
              <label for="consent" class="text-sm text-slate-600 leading-relaxed cursor-pointer">
                I hereby consent to a preliminary credit check on both the business and director's profiles. I confirm that I am authorized to apply on behalf of this business.
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
              class="px-10 py-3 rounded-full bg-success text-white font-bold hover:bg-[#219653] shadow-lg transition-all"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Submit Application</span>
              <span v-else><i class="fas fa-spinner fa-spin mr-2"></i> Processing...</span>
            </button>
          </div>
        </form>

        <!-- Success State Overlay -->
        <div v-if="showSuccess" class="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center text-center p-8 animate-[fadeIn_0.3s_ease-out]">
          <div class="w-20 h-20 rounded-full bg-success/10 text-success flex items-center justify-center text-4xl mb-6">
            <i class="fas fa-check"></i>
          </div>
          <h2 class="text-3xl font-bold text-primary mb-4">Application Received!</h2>
          <p class="text-slate-500 mb-8 max-w-md">Thank you for submitting your SMME funding request. A business finance specialist will contact you shortly to request supporting documents (bank statements & financials).</p>
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
const stepNames = ['Business', 'Funding', 'Contact'];
const isSubmitting = ref(false);
const showSuccess = ref(false);

const form = ref({
  businessName: '', tradingName: '', regNumber: '', businessType: '', yearsOperating: '',
  monthlyTurnover: '', fundingAmount: '', fundingPurpose: '',
  directorName: '', directorId: '', email: '', phone: '', consent: false
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
