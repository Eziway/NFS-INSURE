<template>
  <div class="overflow-hidden bg-slate-50 min-h-screen">
    <!-- Hero Section -->
    <section class="relative pt-[160px] pb-24 max-md:pt-[120px] max-md:pb-16 overflow-hidden bg-primary-dark">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-dark to-slate-800 opacity-90 z-10"></div>
        <img
          src="/img/hero-future.png"
          alt="Solar Financing Background"
          class="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
        />
      </div>

      <div class="max-w-[1200px] mx-auto px-6 relative z-20 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <i class="fas fa-solar-panel text-gold-bright"></i> Green Asset Finance
        </div>
        <h1 class="text-[clamp(1.8rem,3.5vw,3.2rem)] font-extrabold text-white mb-4 leading-tight">
          Apply for <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-gold-bright">Solar Financing</span>
        </h1>
        <p class="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Fund your business's solar system without paying the full cost upfront. Tell us about your business and we'll match you with the right financing option.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16">
      <div class="max-w-[900px] mx-auto px-6">
        
        <div class="mb-6">
          <router-link to="/solar-financing" class="text-slate-500 hover:text-accent font-semibold text-sm flex items-center gap-2 transition-colors w-max">
            <i class="fas fa-arrow-left"></i> Back to Solar Financing Information
          </router-link>
        </div>

        <!-- Form Card -->
        <div class="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
          
          <!-- Form Header -->
          <div class="bg-gradient-to-br from-primary to-[#1a3a5c] p-8 relative overflow-hidden">
            <div class="absolute right-6 top-1/2 -translate-y-1/2 text-8xl opacity-10">☀️</div>
            <h3 class="text-xl font-bold text-white mb-1"><i class="fas fa-solar-panel text-secondary mr-2"></i> Solar Financing Application</h3>
            <p class="text-slate-300 text-sm">Business & Green Asset Finance | Protected under POPIA</p>
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
              
              <!-- Step 1: Business Details -->
              <div v-if="step === 1" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Business Details</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Tell us about your business.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div class="flex flex-col gap-1.5 md:col-span-2">
                    <label class="text-sm font-semibold text-slate-700">Business Name <span class="text-danger">*</span></label>
                    <input v-model="form.businessName" type="text" required placeholder="e.g. Riverside Guesthouse" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Company Registration Number</label>
                    <input v-model="form.regNo" type="text" placeholder="CIPC registration number" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Years in Operation <span class="text-danger">*</span></label>
                    <select v-model="form.yearsOperating" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                      <option value="" disabled>Select range</option>
                      <option value="<1">Less than 1 year</option>
                      <option value="1-2">1 – 2 years</option>
                      <option value="3-5">3 – 5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>
                  <div class="flex flex-col gap-1.5 md:col-span-2">
                    <label class="text-sm font-semibold text-slate-700">Physical Address <span class="text-danger">*</span></label>
                    <input v-model="form.address" type="text" required placeholder="Street address, Suburb, City, Postal Code" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">City <span class="text-danger">*</span></label>
                    <input v-model="form.city" type="text" required placeholder="e.g. Hermanus" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Province</label>
                    <select v-model="form.province" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                      <option value="" disabled>Select province</option>
                      <option>Gauteng</option><option>Western Cape</option><option>KwaZulu-Natal</option><option>Eastern Cape</option><option>Limpopo</option><option>Mpumalanga</option><option>North West</option><option>Free State</option><option>Northern Cape</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Step 2: Applicant Details -->
              <div v-if="step === 2" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Applicant Details</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Details of the owner or authorized representative.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Full Name <span class="text-danger">*</span></label>
                    <input v-model="form.fullName" type="text" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Position / Role <span class="text-danger">*</span></label>
                    <input v-model="form.position" type="text" required placeholder="e.g. Owner, Manager" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
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
                    <label class="text-sm font-semibold text-slate-700">Phone Number <span class="text-danger">*</span></label>
                    <input v-model="form.phone" type="tel" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Preferred Contact Method</label>
                    <select v-model="form.contactMethod" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                      <option>Email</option><option>Phone Call</option><option>WhatsApp</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Step 3: Financing & System Details -->
              <div v-if="step === 3" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Financing Details</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Tell us about your current power costs and what you're looking for.</p>
                
                <div class="flex flex-col gap-4 mb-6">
                  <label class="text-sm font-semibold text-slate-700">Preferred Financing Option <span class="text-danger">*</span></label>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all" :class="{'border-accent bg-accent/5': form.finOption === 'Loan'}">
                      <input v-model="form.finOption" type="radio" value="Loan" name="finOption" class="w-4 h-4 accent-accent" required />
                      <span class="text-sm font-semibold text-slate-700">Business Loan / Asset Finance</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all" :class="{'border-accent bg-accent/5': form.finOption === 'PPA'}">
                      <input v-model="form.finOption" type="radio" value="PPA" name="finOption" class="w-4 h-4 accent-accent" required />
                      <span class="text-sm font-semibold text-slate-700">Solar PPA</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all" :class="{'border-accent bg-accent/5': form.finOption === 'Lease'}">
                      <input v-model="form.finOption" type="radio" value="Lease" name="finOption" class="w-4 h-4 accent-accent" required />
                      <span class="text-sm font-semibold text-slate-700">Leasing / Rental</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all" :class="{'border-accent bg-accent/5': form.finOption === 'Not Sure'}">
                      <input v-model="form.finOption" type="radio" value="Not Sure" name="finOption" class="w-4 h-4 accent-accent" required />
                      <span class="text-sm font-semibold text-slate-700">Not Sure — Advise Me</span>
                    </label>
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Current Monthly Bill (ZAR) <span class="text-danger">*</span></label>
                    <input v-model="form.monthlyBill" type="number" required placeholder="e.g. 15000" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Estimated Budget (ZAR)</label>
                    <input v-model="form.budget" type="number" placeholder="e.g. 400000" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                </div>

                <div class="flex flex-col gap-1.5">
                  <label class="text-sm font-semibold text-slate-700">Additional Notes</label>
                  <textarea v-model="form.additionalNotes" rows="3" placeholder="Anything else you'd like us to know..." class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"></textarea>
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
                    Required later: Owner's ID, Business Registration, 6 months bank statements, latest electricity bill.
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
                    <span class="text-sm font-medium text-slate-700">I declare that the information provided is true and correct and I am authorized to submit this on behalf of the business.</span>
                  </label>
                  <label class="flex items-start gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all">
                    <input v-model="form.agreeCredit" type="checkbox" required class="w-5 h-5 accent-accent mt-0.5" />
                    <span class="text-sm font-medium text-slate-700">I consent to NFS Insure and its partner funders conducting a credit check.</span>
                  </label>
                  <label class="flex items-start gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all">
                    <input v-model="form.agreePopia" type="checkbox" required class="w-5 h-5 accent-accent mt-0.5" />
                    <span class="text-sm font-medium text-slate-700">I consent to the processing of personal information in accordance with POPIA.</span>
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
                Thank you for applying for solar financing with NFS Insure. Our team will review your application and be in touch within <strong>3 business days</strong> with your financing options.
              </p>
              <router-link to="/solar-financing" class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#1a3a5c] text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all hover:-translate-y-1">
                <i class="fas fa-arrow-left"></i> Back to Solar Financing
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
  { icon: 'fas fa-user', title: 'Applicant' },
  { icon: 'fas fa-solar-panel', title: 'Financing' },
  { icon: 'fas fa-paperclip', title: 'Documents' },
  { icon: 'fas fa-check-square', title: 'Declaration' }
];

const form = ref({
  businessName: '',
  regNo: '',
  yearsOperating: '',
  address: '',
  city: '',
  province: '',
  fullName: '',
  position: '',
  idNumber: '',
  email: '',
  phone: '',
  contactMethod: 'Email',
  finOption: '',
  monthlyBill: '',
  budget: '',
  additionalNotes: '',
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
    const { error } = await supabase.from('solar_applications').insert([{
      business_name: form.value.businessName,
      reg_no: form.value.regNo,
      years_operating: form.value.yearsOperating,
      address: form.value.address,
      city: form.value.city,
      province: form.value.province,
      full_name: form.value.fullName,
      position: form.value.position,
      id_number: form.value.idNumber,
      email: form.value.email,
      phone: form.value.phone,
      contact_method: form.value.contactMethod,
      fin_option: form.value.finOption,
      monthly_bill: form.value.monthlyBill,
      budget: form.value.budget || null,
      additional_notes: form.value.additionalNotes,
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
