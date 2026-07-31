<template>
  <div class="overflow-hidden bg-slate-50 min-h-screen">
    <!-- Hero Section -->
    <section class="relative pt-[160px] pb-24 max-md:pt-[120px] max-md:pb-16 overflow-hidden bg-primary-dark">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-dark to-slate-800 opacity-90 z-10"></div>
        <img
          src="/img/hero-future.png"
          alt="Medical Aid Background"
          class="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
        />
      </div>

      <div class="max-w-[1200px] mx-auto px-6 relative z-20 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <i class="fas fa-heartbeat text-accent"></i> Medical Aid Quote
        </div>
        <h1 class="text-[clamp(1.8rem,3.5vw,3.2rem)] font-extrabold text-white mb-4 leading-tight">
          Find the Perfect <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue">Health Cover</span>
        </h1>
        <p class="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Complete the form below to request a tailored medical aid quote from South Africa's leading providers.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16">
      <div class="max-w-[900px] mx-auto px-6">
        
        <div class="mb-6">
          <router-link to="/medical-aid" class="text-slate-500 hover:text-accent font-semibold text-sm flex items-center gap-2 transition-colors w-max">
            <i class="fas fa-arrow-left"></i> Back to Medical Aid Information
          </router-link>
        </div>

        <!-- Step Indicators -->
        <div class="flex justify-center items-center mb-12">
          <div class="flex items-center gap-3">
            <div 
              class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300"
              :class="step >= 1 ? 'bg-accent text-white shadow-lg' : 'bg-slate-200 text-slate-500'"
            >
              1
            </div>
            <span class="font-semibold text-sm" :class="step >= 1 ? 'text-primary' : 'text-slate-500'">Your Details</span>
          </div>
          
          <div class="w-16 h-1 bg-slate-200 mx-4 relative rounded-full">
            <div 
              class="absolute top-0 left-0 h-full bg-accent rounded-full transition-all duration-500"
              :style="{ width: step > 1 ? '100%' : '0%' }"
            ></div>
          </div>
          
          <div class="flex items-center gap-3">
            <div 
              class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300"
              :class="step >= 2 ? 'bg-accent text-white shadow-lg' : 'bg-slate-200 text-slate-500'"
            >
              2
            </div>
            <span class="font-semibold text-sm" :class="step >= 2 ? 'text-primary' : 'text-slate-500'">Compare Plans</span>
          </div>
        </div>

        <!-- Form Card -->
        <div class="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative">
          
          <!-- Step 1: Personal Info -->
          <div v-if="step === 1" class="animate-[fadeIn_0.5s_ease-out]">
            <h2 class="text-2xl font-bold text-primary mb-2">Client Information</h2>
            <p class="text-slate-500 text-sm mb-8">Fields marked with <span class="text-danger">*</span> are required.</p>
            
            <form @submit.prevent="goToStep2">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div class="flex flex-col gap-1.5">
                  <label class="text-sm font-semibold text-slate-700">First Name <span class="text-danger">*</span></label>
                  <input v-model="form.firstName" type="text" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
                
                <div class="flex flex-col gap-1.5">
                  <label class="text-sm font-semibold text-slate-700">Last Name <span class="text-danger">*</span></label>
                  <input v-model="form.lastName" type="text" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>

                <div class="flex flex-col gap-1.5">
                  <label class="text-sm font-semibold text-slate-700">ID / Passport Number</label>
                  <input v-model="form.idNumber" type="text" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
                
                <div class="flex flex-col gap-1.5">
                  <label class="text-sm font-semibold text-slate-700">Email <span class="text-danger">*</span></label>
                  <input v-model="form.email" type="email" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>

                <div class="flex flex-col gap-1.5">
                  <label class="text-sm font-semibold text-slate-700">Phone Number <span class="text-danger">*</span></label>
                  <input v-model="form.phone" type="tel" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>

                <div class="flex flex-col gap-1.5">
                  <label class="text-sm font-semibold text-slate-700">Number of Dependants</label>
                  <input v-model="form.dependants" type="number" min="0" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
                
                <div class="md:col-span-2 flex flex-col gap-1.5 mt-2">
                  <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all">
                    <input v-model="form.isCorporate" type="checkbox" class="w-5 h-5 accent-accent" />
                    <span class="text-sm font-semibold text-slate-700">This is a corporate/group application</span>
                  </label>
                </div>

                <div v-if="form.isCorporate" class="md:col-span-2 flex flex-col gap-1.5 mt-2 animate-[fadeIn_0.3s_ease-out]">
                  <label class="text-sm font-semibold text-slate-700">Company Name <span class="text-danger">*</span></label>
                  <input v-model="form.companyName" type="text" :required="form.isCorporate" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>

              </div>

              <div class="mt-10 flex justify-end">
                <button type="submit" class="bg-gradient-to-r from-accent to-blue text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 group">
                  Next Step <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </form>
          </div>

          <!-- Step 2: Compare / Select Schemes -->
          <div v-if="step === 2" class="animate-[fadeIn_0.5s_ease-out]">
            <button @click="step = 1" class="text-slate-500 hover:text-accent font-semibold text-sm flex items-center gap-2 mb-6 transition-colors">
              <i class="fas fa-arrow-left"></i> Back to Details
            </button>
            
            <h2 class="text-2xl font-bold text-primary mb-2">Select a Scheme</h2>
            <p class="text-slate-500 text-sm mb-8">Choose a medical aid provider below to request a personalized quote.</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              
              <!-- Discovery -->
              <div 
                class="border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 relative overflow-hidden"
                :class="selectedScheme === 'discovery' ? 'border-accent bg-accent/5' : 'border-slate-100 hover:border-slate-300'"
                @click="selectedScheme = 'discovery'"
              >
                <div v-if="selectedScheme === 'discovery'" class="absolute top-3 right-3 text-accent text-xl">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div class="w-14 h-14 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-2xl mb-4">
                  <i class="fas fa-plus-square"></i>
                </div>
                <h3 class="font-bold text-primary text-lg mb-1">Discovery Health</h3>
                <p class="text-xs text-slate-500">Comprehensive cover with Vitality rewards.</p>
              </div>

              <!-- Momentum -->
              <div 
                class="border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 relative overflow-hidden"
                :class="selectedScheme === 'momentum' ? 'border-[#e02020] bg-[#e02020]/5' : 'border-slate-100 hover:border-slate-300'"
                @click="selectedScheme = 'momentum'"
              >
                <div v-if="selectedScheme === 'momentum'" class="absolute top-3 right-3 text-[#e02020] text-xl">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div class="w-14 h-14 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-2xl mb-4">
                  <i class="fas fa-heartbeat"></i>
                </div>
                <h3 class="font-bold text-primary text-lg mb-1">Momentum</h3>
                <p class="text-xs text-slate-500">Flexible plans for diverse needs.</p>
              </div>

              <!-- Bonitas -->
              <div 
                class="border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 relative overflow-hidden"
                :class="selectedScheme === 'bonitas' ? 'border-[#00923f] bg-[#00923f]/5' : 'border-slate-100 hover:border-slate-300'"
                @click="selectedScheme = 'bonitas'"
              >
                <div v-if="selectedScheme === 'bonitas'" class="absolute top-3 right-3 text-[#00923f] text-xl">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div class="w-14 h-14 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-2xl mb-4">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <h3 class="font-bold text-primary text-lg mb-1">Bonitas</h3>
                <p class="text-xs text-slate-500">Affordable, reliable health cover.</p>
              </div>

            </div>

            <div v-if="selectedScheme" class="animate-[fadeIn_0.3s_ease-out]">
              <div class="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                <h4 class="font-bold text-slate-700 mb-4">You selected: <span class="capitalize text-accent">{{ selectedScheme }}</span></h4>
                <div class="flex items-start gap-3">
                  <input type="checkbox" v-model="form.agreeToTerms" id="terms" class="mt-1 w-4 h-4 accent-accent" />
                  <label for="terms" class="text-sm text-slate-600 cursor-pointer">
                    I consent to NFS Insure processing my personal information to provide me with a quote, in accordance with the Protection of Personal Information Act (POPIA).
                  </label>
                </div>
              </div>
              
              <div class="flex justify-end">
                <button 
                  @click="submitQuote" 
                  :disabled="!form.agreeToTerms || isSubmitting"
                  class="bg-gradient-to-r from-secondary to-gold-bright text-primary-dark font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-lg flex items-center gap-2"
                >
                  <span v-if="isSubmitting"><i class="fas fa-spinner fa-spin"></i> Processing...</span>
                  <span v-else><i class="fas fa-paper-plane"></i> Request Quote</span>
                </button>
              </div>
            </div>

          </div>

          <!-- Step 3: Success -->
          <div v-if="step === 3" class="text-center py-8 animate-[fadeIn_0.5s_ease-out]">
            <div class="w-24 h-24 bg-success/10 text-success rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
              <i class="fas fa-check"></i>
            </div>
            <h2 class="text-3xl font-bold text-primary mb-4">Request Sent Successfully!</h2>
            <p class="text-slate-500 mb-8 max-w-md mx-auto">
              Thank you, {{ form.firstName }}. One of our expert advisors will review your details and contact you shortly with your personalized medical aid quote.
            </p>
            <router-link to="/medical-aid" class="inline-flex items-center gap-2 bg-slate-100 text-slate-700 font-bold py-3 px-6 rounded-full hover:bg-slate-200 transition-colors">
              Return Home
            </router-link>
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
const selectedScheme = ref('');
const isSubmitting = ref(false);

const form = ref({
  firstName: '',
  lastName: '',
  idNumber: '',
  email: '',
  phone: '',
  dependants: 0,
  isCorporate: false,
  companyName: '',
  agreeToTerms: false
});

function goToStep2() {
  // Add basic validation if needed, native HTML5 handles required fields
  step.value = 2;
  window.scrollTo({ top: 200, behavior: 'smooth' });
}

async function submitQuote() {
  if (!form.value.agreeToTerms) return;
  
  isSubmitting.value = true;
  
  try {
    const { error } = await supabase.from('medical_aid_applications').insert([{
      first_name: form.value.firstName,
      last_name: form.value.lastName,
      id_number: form.value.idNumber || null,
      email: form.value.email,
      phone: form.value.phone,
      dependants: form.value.dependants || 0,
      is_corporate: form.value.isCorporate,
      company_name: form.value.companyName || null,
      selected_scheme: selectedScheme.value
    }]);

    if (error) throw error;
    
    step.value = 3;
    window.scrollTo({ top: 200, behavior: 'smooth' });
  } catch (error) {
    console.error('Error submitting application:', error.message);
    alert('Error submitting application: ' + (error.message || 'Please try again later.'));
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
