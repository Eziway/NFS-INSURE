<template>
  <div class="overflow-hidden bg-slate-50 min-h-screen">
    <!-- Hero Section -->
    <section class="relative pt-[160px] pb-24 max-md:pt-[120px] max-md:pb-16 overflow-hidden bg-primary-dark">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-dark to-slate-800 opacity-90 z-10"></div>
        <img
          src="/img/hero-future.png"
          alt="Home Loans Background"
          class="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
        />
      </div>

      <div class="max-w-[1200px] mx-auto px-6 relative z-20 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <i class="fas fa-home text-gold-bright"></i> Home Loans
        </div>
        <h1 class="text-[clamp(1.8rem,3.5vw,3.2rem)] font-extrabold text-white mb-4 leading-tight">
          Apply for a <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-gold-bright">Home Loan</span>
        </h1>
        <p class="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Get your Pre-Qualified Buyer's Certificate and find out exactly how much you can afford.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16">
      <div class="max-w-[900px] mx-auto px-6">
        
        <div class="mb-6">
          <router-link to="/home-loans" class="text-slate-500 hover:text-accent font-semibold text-sm flex items-center gap-2 transition-colors w-max">
            <i class="fas fa-arrow-left"></i> Back to Home Loans Information
          </router-link>
        </div>

        <!-- Form Card -->
        <div class="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
          
          <!-- Form Header -->
          <div class="bg-gradient-to-br from-primary to-[#1a3a5c] p-8 relative overflow-hidden">
            <div class="absolute right-6 top-1/2 -translate-y-1/2 text-8xl opacity-10">🏠</div>
            <h3 class="text-xl font-bold text-white mb-1"><i class="fas fa-key text-secondary mr-2"></i> Home Loan Pre-Qualification</h3>
            <p class="text-slate-300 text-sm">In Partnership with ooba | Protected under POPIA</p>
          </div>

          <!-- Progress Bar -->
          <div class="flex border-b border-slate-100 bg-slate-50 relative overflow-x-auto">
            <div 
              v-for="(s, index) in steps" 
              :key="index"
              class="flex-1 min-w-[90px] py-4 px-2 text-center text-xs font-bold uppercase tracking-wide border-b-4 transition-all duration-300 flex flex-col items-center gap-1 cursor-default"
              :class="[
                step === index + 1 ? 'text-accent border-accent bg-white' : '',
                step > index + 1 ? 'text-success border-success' : '',
                step < index + 1 ? 'text-slate-400 border-transparent' : ''
              ]"
            >
              <i :class="[s.icon, 'text-lg']"></i>
              <span class="hidden sm:inline">{{ s.title }}</span>
            </div>
          </div>

          <div class="p-8 md:p-12">
            
            <form v-if="step <= 5" @submit.prevent="nextStep">
              
              <!-- Step 1: Personal Details -->
              <div v-if="step === 1" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Personal Details</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Let's start with your basic information.</p>
                
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
                    <label class="text-sm font-semibold text-slate-700">ID / Passport Number <span class="text-danger">*</span></label>
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
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Marital Status <span class="text-danger">*</span></label>
                    <select v-model="form.maritalStatus" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                      <option value="" disabled>Select status</option>
                      <option value="Single">Single</option>
                      <option value="Married (COP)">Married (In Community of Property)</option>
                      <option value="Married (ANC)">Married (Out of Community of Property)</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widowed">Widowed</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Step 2: Income Details -->
              <div v-if="step === 2" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Income Details</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Provide details about your employment and income.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div class="flex flex-col gap-1.5 md:col-span-2">
                    <label class="text-sm font-semibold text-slate-700">Employment Type <span class="text-danger">*</span></label>
                    <select v-model="form.empType" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                      <option value="" disabled>Select</option>
                      <option value="Salaried">Salaried Employee</option>
                      <option value="Self-Employed">Self-Employed</option>
                      <option value="Commission">Commission Earner</option>
                    </select>
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Gross Monthly Income (Before Tax) <span class="text-danger">*</span></label>
                    <input v-model="form.grossIncome" type="number" required placeholder="ZAR" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Net Monthly Income (After Tax) <span class="text-danger">*</span></label>
                    <input v-model="form.netIncome" type="number" required placeholder="ZAR" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5 md:col-span-2">
                    <label class="text-sm font-semibold text-slate-700">Total Monthly Expenses <span class="text-danger">*</span></label>
                    <input v-model="form.expenses" type="number" required placeholder="ZAR (e.g. 15000)" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                    <p class="text-xs text-slate-500 mt-1">Include rent, groceries, transport, debt repayments, etc.</p>
                  </div>
                </div>
              </div>

              <!-- Step 3: Property Details -->
              <div v-if="step === 3" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Property Details</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Tell us about your property goals.</p>
                
                <div class="flex flex-col gap-4 mb-6">
                  <label class="text-sm font-semibold text-slate-700">Application Type <span class="text-danger">*</span></label>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all" :class="{'border-accent bg-accent/5': form.appType === 'Pre-qualification'}">
                      <input v-model="form.appType" type="radio" value="Pre-qualification" name="appType" class="w-4 h-4 accent-accent" required />
                      <span class="text-sm font-semibold text-slate-700">Pre-qualification (Looking to buy)</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all" :class="{'border-accent bg-accent/5': form.appType === 'Home Loan'}">
                      <input v-model="form.appType" type="radio" value="Home Loan" name="appType" class="w-4 h-4 accent-accent" required />
                      <span class="text-sm font-semibold text-slate-700">New Home Loan (Found a property)</span>
                    </label>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6" v-if="form.appType">
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Purchase Price / Estimated Value <span class="text-danger">*</span></label>
                    <input v-model="form.purchasePrice" type="number" required placeholder="ZAR" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Deposit Amount (Optional)</label>
                    <input v-model="form.deposit" type="number" placeholder="ZAR" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                </div>
              </div>

              <!-- Step 4: Documents -->
              <div v-if="step === 4" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Supporting Documents</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Optional for now, but required before final approval. Max 10MB per file.</p>
                
                <div class="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center bg-slate-50 hover:bg-accent/5 hover:border-accent transition-colors cursor-pointer relative group mb-4">
                  <input type="file" multiple class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  <div class="text-4xl text-slate-400 group-hover:text-accent mb-2 transition-colors"><i class="fas fa-cloud-upload-alt"></i></div>
                  <p class="text-slate-600 font-medium">Drag & drop files here or <span class="text-accent font-bold">browse</span></p>
                  <p class="text-slate-400 text-xs mt-1">Accepted: PDF, DOCX, JPG, PNG</p>
                </div>
                
                <div class="p-4 rounded-lg bg-accent/10 border border-accent/20 flex gap-3">
                  <i class="fas fa-info-circle text-accent mt-0.5"></i>
                  <div class="text-sm text-slate-700">
                    <strong>Salaried:</strong> ID, 3 months bank statements, 3 months payslips.<br/>
                    <strong>Self-Employed:</strong> ID, 6 months bank statements, latest financials.
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
                    <span class="text-sm font-medium text-slate-700">I consent to NFS Insure, ooba, and partner banks conducting a credit check.</span>
                  </label>
                  <label class="flex items-start gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all">
                    <input v-model="form.agreePopia" type="checkbox" required class="w-5 h-5 accent-accent mt-0.5" />
                    <span class="text-sm font-medium text-slate-700">I consent to the processing of my personal information in accordance with POPIA.</span>
                  </label>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <div class="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                <button v-if="step > 1" @click.prevent="prevStep" type="button" class="bg-white border-2 border-slate-200 text-slate-600 font-bold py-3 px-6 rounded-full hover:bg-slate-50 transition-all flex items-center gap-2">
                  <i class="fas fa-arrow-left"></i> Back
                </button>
                <div v-else></div>

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
                Thank you for applying for a home loan with NFS Insure. Our team will review your application and be in touch within <strong>3 business days</strong> with your next steps.
              </p>
              <router-link to="/home-loans" class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#1a3a5c] text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all hover:-translate-y-1">
                <i class="fas fa-arrow-left"></i> Back to Home Loans
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
  { icon: 'fas fa-user', title: 'Personal' },
  { icon: 'fas fa-briefcase', title: 'Income' },
  { icon: 'fas fa-home', title: 'Property' },
  { icon: 'fas fa-paperclip', title: 'Documents' },
  { icon: 'fas fa-check-square', title: 'Declaration' }
];

const form = ref({
  firstName: '',
  lastName: '',
  idNumber: '',
  email: '',
  phone: '',
  maritalStatus: '',
  empType: '',
  grossIncome: '',
  netIncome: '',
  expenses: '',
  appType: '',
  purchasePrice: '',
  deposit: '',
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
    const { error } = await supabase.from('home_loan_applications').insert([{
      full_name: `${form.value.firstName} ${form.value.lastName}`,
      id_number: form.value.idNumber,
      date_of_birth: '2000-01-01', // Dummy data since not in form
      marital_status: form.value.maritalStatus || 'Single',
      email: form.value.email,
      phone: form.value.phone,
      current_address: 'Not provided',
      employment_type: form.value.empType || 'Employed',
      employer_name: 'Not provided',
      occupation: 'Not provided',
      employment_length: 'Not provided',
      gross_income: form.value.grossIncome || 0,
      existing_debt: form.value.expenses || 0,
      purchase_price: form.value.purchasePrice || null,
      deposit: form.value.deposit || null,
      property_type: form.value.appType || 'single',
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
