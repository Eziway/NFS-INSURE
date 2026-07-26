<template>
  <div class="overflow-hidden bg-slate-50 min-h-screen">
    <!-- Hero Section -->
    <section class="relative pt-[160px] pb-24 max-md:pt-[120px] max-md:pb-16 overflow-hidden bg-primary-dark">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-dark to-slate-800 opacity-90 z-10"></div>
        <img
          src="/img/hero-future.png"
          alt="SMME Funding Background"
          class="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
        />
      </div>

      <div class="max-w-[1200px] mx-auto px-6 relative z-20 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <i class="fas fa-seedling text-gold-bright"></i> SMME Funding Solutions
        </div>
        <h1 class="text-[clamp(1.8rem,3.5vw,3.2rem)] font-extrabold text-white mb-4 leading-tight">
          Apply for <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-gold-bright">Business Funding</span>
        </h1>
        <p class="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Complete the application below. Your dedicated advisor will review your application and contact you within 2 business days.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16">
      <div class="max-w-[900px] mx-auto px-6">
        
        <div class="mb-6">
          <router-link to="/smme-funding" class="text-slate-500 hover:text-accent font-semibold text-sm flex items-center gap-2 transition-colors w-max">
            <i class="fas fa-arrow-left"></i> Back to SMME Funding Information
          </router-link>
        </div>

        <!-- Form Card -->
        <div class="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
          
          <!-- Form Header -->
          <div class="bg-gradient-to-br from-primary to-[#1a3a5c] p-8 relative overflow-hidden">
            <div class="absolute right-6 top-1/2 -translate-y-1/2 text-8xl opacity-10">📋</div>
            <h3 class="text-xl font-bold text-white mb-1"><i class="fas fa-seedling text-secondary mr-2"></i> SMME Funding Application</h3>
            <p class="text-slate-300 text-sm">Confidential Application | Protected under POPIA</p>
          </div>

          <!-- Progress Bar -->
          <div class="flex border-b border-slate-100 bg-slate-50 relative overflow-x-auto">
            <div 
              v-for="(s, index) in steps" 
              :key="index"
              class="flex-1 min-w-[100px] py-4 px-2 text-center text-xs font-bold uppercase tracking-wide border-b-4 transition-all duration-300 flex flex-col items-center gap-1 cursor-default"
              :class="[
                step === index + 1 ? 'text-accent border-accent bg-white' : '',
                step > index + 1 ? 'text-success border-success' : '',
                step < index + 1 ? 'text-slate-400 border-transparent' : ''
              ]"
            >
              <i :class="[s.icon, 'text-lg']"></i>
              {{ s.title }}
            </div>
          </div>

          <div class="p-8 md:p-12">
            
            <form v-if="step <= 5" @submit.prevent="nextStep">
              
              <!-- Step 1: Business Details -->
              <div v-if="step === 1" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Business Details</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Tell us about your business to help us match you with the right funding.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Registered Business Name <span class="text-danger">*</span></label>
                    <input v-model="form.bizName" type="text" required placeholder="e.g. Acme Trading Pty Ltd" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Trading Name</label>
                    <input v-model="form.tradingName" type="text" placeholder="If different" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Business Type <span class="text-danger">*</span></label>
                    <select v-model="form.bizType" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                      <option value="" disabled>Select business type</option>
                      <option value="PTY">Private Company (Pty Ltd)</option>
                      <option value="CC">Close Corporation (CC)</option>
                      <option value="SOLE">Sole Proprietorship</option>
                      <option value="PARTNER">Partnership</option>
                      <option value="TRUST">Trust</option>
                    </select>
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Company Registration Number <span class="text-danger">*</span></label>
                    <input v-model="form.regNum" type="text" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Years in Operation <span class="text-danger">*</span></label>
                    <select v-model="form.yearsOp" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                      <option value="" disabled>Select</option>
                      <option value="<1">Less than 1 year</option>
                      <option value="1-3">1 to 3 years</option>
                      <option value="3-5">3 to 5 years</option>
                      <option value="5+">More than 5 years</option>
                    </select>
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Industry / Sector <span class="text-danger">*</span></label>
                    <select v-model="form.industry" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                      <option value="" disabled>Select</option>
                      <option value="Retail">Retail & Wholesale</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Construction">Construction</option>
                      <option value="Transport">Transport & Logistics</option>
                      <option value="Services">Professional Services</option>
                      <option value="IT">IT & Tech</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Step 2: Owner Details -->
              <div v-if="step === 2" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Owner / Director Details</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Primary contact person for this application.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">First Name <span class="text-danger">*</span></label>
                    <input v-model="form.firstName" type="text" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Last Name <span class="text-danger">*</span></label>
                    <input v-model="form.lastName" type="text" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">ID Number <span class="text-danger">*</span></label>
                    <input v-model="form.idNumber" type="text" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Email Address <span class="text-danger">*</span></label>
                    <input v-model="form.email" type="email" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Mobile Number <span class="text-danger">*</span></label>
                    <input v-model="form.phone" type="tel" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                </div>
              </div>

              <!-- Step 3: Funding Requirements -->
              <div v-if="step === 3" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Funding Requirements</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">How much do you need and what is it for?</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Requested Amount (ZAR) <span class="text-danger">*</span></label>
                    <input v-model="form.amount" type="number" required placeholder="e.g. 500000" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Average Monthly Turnover <span class="text-danger">*</span></label>
                    <select v-model="form.turnover" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                      <option value="" disabled>Select average</option>
                      <option value="<30k">Less than R30,000</option>
                      <option value="30k-100k">R30,000 - R100,000</option>
                      <option value="100k-500k">R100,000 - R500,000</option>
                      <option value="500k-1m">R500,000 - R1,000,000</option>
                      <option value=">1m">More than R1,000,000</option>
                    </select>
                  </div>
                </div>

                <label class="text-sm font-semibold text-slate-700 mb-2 block">Primary Purpose of Funding <span class="text-danger">*</span></label>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all" :class="{'border-accent bg-accent/5': form.purpose === 'Working Capital'}">
                    <input v-model="form.purpose" type="radio" value="Working Capital" name="purpose" class="w-4 h-4 accent-accent" required />
                    <span class="text-sm font-semibold text-slate-700">Working Capital</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all" :class="{'border-accent bg-accent/5': form.purpose === 'Asset Purchase'}">
                    <input v-model="form.purpose" type="radio" value="Asset Purchase" name="purpose" class="w-4 h-4 accent-accent" required />
                    <span class="text-sm font-semibold text-slate-700">Asset/Equipment Purchase</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all" :class="{'border-accent bg-accent/5': form.purpose === 'Expansion'}">
                    <input v-model="form.purpose" type="radio" value="Expansion" name="purpose" class="w-4 h-4 accent-accent" required />
                    <span class="text-sm font-semibold text-slate-700">Business Expansion</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all" :class="{'border-accent bg-accent/5': form.purpose === 'Purchase Order'}">
                    <input v-model="form.purpose" type="radio" value="Purchase Order" name="purpose" class="w-4 h-4 accent-accent" required />
                    <span class="text-sm font-semibold text-slate-700">Purchase Order Funding</span>
                  </label>
                </div>
              </div>

              <!-- Step 4: Documents -->
              <div v-if="step === 4" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Supporting Documents</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Optional for now, but required before final approval. Max 10MB per file.</p>
                
                <div class="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center bg-slate-50 hover:bg-accent/5 hover:border-accent transition-colors cursor-pointer relative group">
                  <input type="file" multiple class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  <div class="text-4xl text-slate-400 group-hover:text-accent mb-2 transition-colors"><i class="fas fa-cloud-upload-alt"></i></div>
                  <p class="text-slate-600 font-medium">Drag & drop files here or <span class="text-accent font-bold">browse</span></p>
                  <p class="text-slate-400 text-xs mt-1">Accepted: PDF, DOCX, JPG, PNG</p>
                </div>
                
                <div class="mt-4 p-4 rounded-lg bg-accent/10 border border-accent/20 flex gap-3">
                  <i class="fas fa-info-circle text-accent mt-0.5"></i>
                  <div class="text-sm text-slate-700">
                    <strong>Tip:</strong> Having your <span class="font-bold">ID, 6 months bank statements, and CIPC docs</span> ready will speed up your application significantly.
                  </div>
                </div>
              </div>

              <!-- Step 5: Declaration -->
              <div v-if="step === 5" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Declaration & Consent</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Please review and agree to the terms to submit.</p>
                
                <div class="flex flex-col gap-3 mb-6">
                  <label class="flex items-start gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all">
                    <input v-model="form.agreeTruth" type="checkbox" required class="w-5 h-5 accent-accent mt-0.5" />
                    <span class="text-sm font-medium text-slate-700">I declare that the information provided is true and correct.</span>
                  </label>
                  <label class="flex items-start gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all">
                    <input v-model="form.agreeCredit" type="checkbox" required class="w-5 h-5 accent-accent mt-0.5" />
                    <span class="text-sm font-medium text-slate-700">I consent to NFS Insure and its lending partners conducting a credit check on the business and its directors/owners.</span>
                  </label>
                  <label class="flex items-start gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all">
                    <input v-model="form.agreePopia" type="checkbox" required class="w-5 h-5 accent-accent mt-0.5" />
                    <span class="text-sm font-medium text-slate-700">I consent to the processing of my personal and business information in accordance with POPIA.</span>
                  </label>
                </div>
                
                <div class="bg-secondary/10 border-l-4 border-secondary p-4 rounded-r-lg">
                  <p class="text-xs text-slate-600"><strong>Note:</strong> Applying does not guarantee funding. Terms and conditions will apply to approved loans.</p>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <div class="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                <button v-if="step > 1" @click.prevent="prevStep" type="button" class="bg-white border-2 border-slate-200 text-slate-600 font-bold py-3 px-6 rounded-full hover:bg-slate-50 transition-all flex items-center gap-2">
                  <i class="fas fa-arrow-left"></i> Back
                </button>
                <div v-else></div> <!-- Spacer -->

                <button v-if="step < 5" type="submit" class="bg-gradient-to-r from-accent to-blue text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 group">
                  Next Step <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </button>

                <button v-if="step === 5" @click.prevent="submitForm" :disabled="isSubmitting || !form.agreeTruth || !form.agreeCredit || !form.agreePopia" class="bg-gradient-to-r from-secondary to-gold-bright text-primary-dark font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-lg">
                  <span v-if="isSubmitting"><i class="fas fa-spinner fa-spin"></i> Processing...</span>
                  <span v-else><i class="fas fa-paper-plane"></i> Submit Application</span>
                </button>
              </div>

            </form>

            <!-- Success Panel -->
            <div v-if="step === 6" class="text-center py-10 animate-[fadeIn_0.5s_ease-out]">
              <div class="w-24 h-24 bg-success/10 text-success rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                <i class="fas fa-check"></i>
              </div>
              <h2 class="text-3xl font-bold text-primary mb-4">Application Submitted!</h2>
              <p class="text-slate-500 mb-8 max-w-md mx-auto">
                Thank you for applying through NFS Insure SMME Funding Solutions. Your dedicated advisor will review your application and contact you within <strong>2 business days</strong>.
              </p>
              <router-link to="/smme-funding" class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#1a3a5c] text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all hover:-translate-y-1">
                <i class="fas fa-arrow-left"></i> Back to SMME Funding
              </router-link>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '@/lib/supabase';

const step = ref(1);
const isSubmitting = ref(false);

const steps = [
  { icon: 'fas fa-building', title: 'Business' },
  { icon: 'fas fa-user-tie', title: 'Owner' },
  { icon: 'fas fa-coins', title: 'Funding' },
  { icon: 'fas fa-paperclip', title: 'Documents' },
  { icon: 'fas fa-check-square', title: 'Declaration' }
];

const form = ref({
  bizName: '',
  tradingName: '',
  bizType: '',
  regNum: '',
  yearsOp: '',
  industry: '',
  firstName: '',
  lastName: '',
  idNumber: '',
  email: '',
  phone: '',
  amount: '',
  turnover: '',
  purpose: '',
  agreeTruth: false,
  agreeCredit: false,
  agreePopia: false
});

function nextStep() {
  if (step.value < 5) step.value++;
  window.scrollTo({ top: 300, behavior: 'smooth' });
}

function prevStep() {
  if (step.value > 1) step.value--;
  window.scrollTo({ top: 300, behavior: 'smooth' });
}

async function submitForm() {
  isSubmitting.value = true;
  
  try {
    const { error } = await supabase.from('smme_applications').insert([{
      biz_name: form.value.bizName,
      trading_name: form.value.tradingName,
      biz_type: form.value.bizType,
      cipc_number: form.value.regNum,
      years_operating: form.value.yearsOp,
      industry: form.value.industry,
      owner_name: `${form.value.firstName} ${form.value.lastName}`,
      owner_title: 'Owner',
      owner_id: form.value.idNumber,
      owner_email: form.value.email,
      owner_phone: form.value.phone,
      biz_address: 'Not provided',
      biz_city: 'Not provided',
      ownership_percentage: '100',
      owner_address: 'Not provided',
      funding_amount: form.value.amount,
      monthly_turnover: form.value.turnover,
      funding_purpose: form.value.purpose
    }]);

    if (error) throw error;
    
    step.value = 6;
    window.scrollTo({ top: 300, behavior: 'smooth' });
  } catch (error) {
    console.error('Error submitting application:', error.message);
    alert('There was an error submitting your application. Please try again later.');
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
