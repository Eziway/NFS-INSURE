<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md border border-slate-100 relative">
      <router-link to="/admin/login" class="absolute top-6 left-6 text-slate-400 hover:text-slate-600 transition-colors">
        <i class="fas fa-arrow-left text-xl"></i>
      </router-link>
      
      <div class="text-center mb-8 mt-4">
        <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-100">
          <i class="fas fa-key text-2xl text-blue-500"></i>
        </div>
        <h1 class="text-2xl font-bold text-slate-800">Forgot Password</h1>
        <p class="text-slate-500 text-sm mt-2">Enter your email and we'll send you a link to reset your password.</p>
      </div>

      <form v-if="!success" @submit.prevent="handleReset" class="space-y-5">
        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
          <input 
            v-model="email" 
            type="email" 
            required 
            class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            placeholder="admin@nfs.insure"
          />
        </div>

        <div v-if="errorMsg" class="text-danger text-sm font-semibold bg-danger/10 p-3 rounded-xl">
          {{ errorMsg }}
        </div>

        <button 
          type="submit" 
          :disabled="loading"
          class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 disabled:opacity-50"
        >
          <span v-if="loading"><i class="fas fa-spinner fa-spin"></i> Sending...</span>
          <span v-else>Send Reset Link</span>
        </button>
      </form>

      <div v-else class="text-center">
        <div class="bg-green-50 text-green-700 p-4 rounded-xl text-sm font-semibold mb-6 border border-green-100">
          Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder.
        </div>
        <router-link to="/admin/login" class="text-slate-900 font-bold hover:underline">Return to Login</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/lib/supabase'

const email = ref('')
const loading = ref(false)
const errorMsg = ref('')
const success = ref(false)

async function handleReset() {
  loading.value = true
  errorMsg.value = ''
  
  const { error } = await supabase.auth.resetPasswordForEmail(email.value, {
    redirectTo: `${window.location.origin}/admin-reset-password`,
  })

  loading.value = false

  if (error) {
    errorMsg.value = error.message
  } else {
    success.value = true
  }
}
</script>
