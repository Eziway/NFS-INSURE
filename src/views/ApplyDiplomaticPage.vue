<template>
  <div class="overflow-hidden bg-slate-50 min-h-screen">
    <!-- Hero Section -->
    <section class="relative pt-[160px] pb-24 max-md:pt-[120px] max-md:pb-16 overflow-hidden bg-primary-dark">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-dark to-slate-800 opacity-90 z-10"></div>
        <img
          src="/img/hero-future.png"
          alt="Diplomatic Desk Background"
          class="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
        />
      </div>

      <div class="max-w-[1200px] mx-auto px-6 relative z-20 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <i class="fas fa-landmark text-gold-bright"></i> Concierge Diplomatic Desk
        </div>
        <h1 class="text-[clamp(1.8rem,3.5vw,3.2rem)] font-extrabold text-white mb-4 leading-tight">
          Apply <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-gold-bright">Now</span>
        </h1>
        <p class="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Apply for exclusive diplomatic insurance and financial services tailored for embassies, high commissions, and international organizations.
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16">
      <div class="max-w-[900px] mx-auto px-6">
        
        <div class="mb-6">
          <router-link to="/diplomatic" class="text-slate-500 hover:text-accent font-semibold text-sm flex items-center gap-2 transition-colors w-max">
            <i class="fas fa-arrow-left"></i> Back to Diplomatic Desk Information
          </router-link>
        </div>

        <!-- Form Card -->
        <div class="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
          
          <!-- Form Header -->
          <div class="bg-gradient-to-br from-primary to-[#1a3a5c] p-8 relative overflow-hidden">
            <div class="absolute right-6 top-1/2 -translate-y-1/2 text-8xl opacity-10">🏛️</div>
            <h3 class="text-xl font-bold text-white mb-1"><i class="fas fa-landmark text-secondary mr-2"></i> Concierge Diplomatic Desk Application</h3>
            <p class="text-slate-300 text-sm">Confidential Application | Protected under POPIA</p>
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
              
              <!-- Step 1: Mission Details -->
              <div v-if="step === 1" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Mission / Embassy Details</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Tell us about your diplomatic mission or embassy.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div class="flex flex-col gap-1.5 md:col-span-2">
                    <label class="text-sm font-semibold text-slate-700">Mission / Embassy Name <span class="text-danger">*</span></label>
                    <input v-model="form.missionName" type="text" required placeholder="e.g. Embassy of France" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Country Represented <span class="text-danger">*</span></label>
                    <input v-model="form.country" type="text" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Mission Type <span class="text-danger">*</span></label>
                    <select v-model="form.missionType" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                      <option value="" disabled>Select</option>
                      <option value="Embassy">Embassy</option>
                      <option value="High Commission">High Commission</option>
                      <option value="Consulate">Consulate</option>
                      <option value="International Org">International Organization</option>
                    </select>
                  </div>
                  <div class="flex flex-col gap-1.5 md:col-span-2">
                    <label class="text-sm font-semibold text-slate-700">Physical Address in South Africa <span class="text-danger">*</span></label>
                    <input v-model="form.address" type="text" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                </div>
              </div>

              <!-- Step 2: Representative Details -->
              <div v-if="step === 2" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Authorized Representative</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Primary contact person for this application.</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Title <span class="text-danger">*</span></label>
                    <select v-model="form.title" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                      <option value="" disabled>Select</option>
                      <option value="H.E.">H.E.</option>
                      <option value="Ambassador">Ambassador</option>
                      <option value="High Commissioner">High Commissioner</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Dr.">Dr.</option>
                    </select>
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Full Name <span class="text-danger">*</span></label>
                    <input v-model="form.fullName" type="text" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Official Email <span class="text-danger">*</span></label>
                    <input v-model="form.email" type="email" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-slate-700">Phone Number <span class="text-danger">*</span></label>
                    <input v-model="form.phone" type="tel" required class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                </div>
              </div>

              <!-- Step 3: Services Required -->
              <div v-if="step === 3" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Services Required</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Select the services you are interested in.</p>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all">
                    <input v-model="form.services" type="checkbox" value="Embassy Property Insurance" class="w-5 h-5 accent-accent" />
                    <span class="text-sm font-semibold text-slate-700">Embassy Property Insurance</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all">
                    <input v-model="form.services" type="checkbox" value="Diplomatic Fleet Insurance" class="w-5 h-5 accent-accent" />
                    <span class="text-sm font-semibold text-slate-700">Diplomatic Fleet Insurance</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all">
                    <input v-model="form.services" type="checkbox" value="Health & Medical Cover" class="w-5 h-5 accent-accent" />
                    <span class="text-sm font-semibold text-slate-700">Health & Medical Cover</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all">
                    <input v-model="form.services" type="checkbox" value="Repatriation Services" class="w-5 h-5 accent-accent" />
                    <span class="text-sm font-semibold text-slate-700">Repatriation Services</span>
                  </label>
                </div>
                
                <div class="flex flex-col gap-1.5">
                  <label class="text-sm font-semibold text-slate-700">Additional Information / Specific Requirements</label>
                  <textarea v-model="form.additionalInfo" rows="3" class="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"></textarea>
                </div>
              </div>

              <!-- Step 4: Documents -->
              <div v-if="step === 4" class="animate-[fadeIn_0.4s_ease-out]">
                <h4 class="text-xl font-bold text-primary mb-1">Supporting Documents</h4>
                <p class="text-slate-500 text-sm mb-6 pb-4 border-b border-slate-100">Optional for now, but required before final approval. Max 10MB per file.</p>
                
                <div class="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center bg-slate-50 hover:bg-accent/5 hover:border-accent transition-colors cursor-pointer relative group mb-4">
                  <input type="file" multiple @change="handleFileChange" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  <div class="text-4xl text-slate-400 group-hover:text-accent mb-2 transition-colors"><i class="fas fa-cloud-upload-alt"></i></div>
                  <p class="text-slate-600 font-medium">Drag & drop files here or <span class="text-accent font-bold">browse</span></p>
                  <p class="text-slate-400 text-xs mt-1">Accepted: PDF, DOCX, JPG, PNG (Max 10MB each)</p>
                </div>

                <!-- Display selected files -->
                <div v-if="selectedFiles.length > 0" class="mt-4 space-y-2 mb-4">
                  <div v-for="(file, index) in selectedFiles" :key="index" class="flex justify-between items-center bg-white border border-slate-200 p-3 rounded-lg shadow-sm">
                    <span class="text-xs font-semibold text-slate-700 truncate mr-4"><i class="fas fa-file-alt text-slate-400 mr-2"></i>{{ file.name }}</span>
                    <button type="button" @click="removeFile(index)" class="text-danger hover:text-danger/70 focus:outline-none">
                      <i class="fas fa-times-circle"></i>
                    </button>
                  </div>
                </div>
                
                <div class="p-4 rounded-lg bg-accent/10 border border-accent/20 flex gap-3">
                  <i class="fas fa-info-circle text-accent mt-0.5"></i>
                  <div class="text-sm text-slate-700">
                    Required later: Passport copy of authorized rep, proof of address, proof of diplomatic accreditation.
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
                    <span class="text-sm font-medium text-slate-700">I declare that the information provided is true and correct and I am authorized to submit this on behalf of the mission.</span>
                  </label>
                  <label class="flex items-start gap-3 cursor-pointer p-4 border border-slate-200 rounded-xl hover:border-accent hover:bg-accent/5 transition-all">
                    <input v-model="form.agreeConfidential" type="checkbox" required class="w-5 h-5 accent-accent mt-0.5" />
                    <span class="text-sm font-medium text-slate-700">I understand that all information will be handled with strict confidentiality.</span>
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

                <button v-if="step === 5" @click.prevent="submitForm" :disabled="isSubmitting || !form.agreeTruth || !form.agreeConfidential || !form.agreePopia || form.services.length === 0" class="bg-gradient-to-r from-secondary to-gold-bright text-primary-dark font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-lg">
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
                Thank you for applying to the NFS Insure Concierge Diplomatic Desk. Our team will review your application and contact you within <strong>3 business days</strong>.
              </p>
              <router-link to="/diplomatic" class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#1a3a5c] text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all hover:-translate-y-1">
                <i class="fas fa-arrow-left"></i> Back to Diplomatic Desk
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
const selectedFiles = ref([]);

const steps = [
  { icon: 'fas fa-building', title: 'Mission' },
  { icon: 'fas fa-user-tie', title: 'Representative' },
  { icon: 'fas fa-concierge-bell', title: 'Services' },
  { icon: 'fas fa-paperclip', title: 'Documents' },
  { icon: 'fas fa-check-square', title: 'Declaration' }
];

const form = ref({
  missionName: '',
  country: '',
  missionType: '',
  address: '',
  title: '',
  fullName: '',
  email: '',
  phone: '',
  services: [],
  additionalInfo: '',
  agreeTruth: false,
  agreeConfidential: false,
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

function handleFileChange(event) {
  if (event.target.files) {
    selectedFiles.value = [...selectedFiles.value, ...Array.from(event.target.files)];
  }
}

function removeFile(index) {
  selectedFiles.value.splice(index, 1);
}

async function submitForm() {
  isSubmitting.value = true;
  
  try {
    // 1. Upload files if any
    const uploadedUrls = [];
    if (selectedFiles.value.length > 0) {
      for (const file of selectedFiles.value) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('diplomatic-documents')
          .upload(fileName, file);
          
        if (uploadError) {
          console.error('Error uploading file:', uploadError);
          continue; // skip failed upload
        }
        
        const { data: publicUrlData } = supabase.storage
          .from('diplomatic-documents')
          .getPublicUrl(fileName);
          
        if (publicUrlData) {
          uploadedUrls.push(publicUrlData.publicUrl);
        }
      }
    }

    // 2. Insert into DB
    const { error } = await supabase.from('diplomatic_applications').insert([{
      mission_name: form.value.missionName,
      country: form.value.country,
      mission_type: form.value.missionType,
      mission_address: form.value.address,
      city: 'Not provided',
      staff_count: 'Not provided',
      rep_title: form.value.title,
      rep_name: form.value.fullName,
      rep_email: form.value.email,
      rep_phone: form.value.phone,
      rep_passport: 'Not provided',
      rep_nationality: 'Not provided',
      rep_address: 'Not provided',
      services_selected: form.value.services,
      additional_notes: form.value.additionalInfo,
      documents: uploadedUrls
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
