<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md border border-slate-100 relative">
      <router-link to="/" class="absolute top-6 left-6 text-slate-400 hover:text-slate-600 transition-colors" title="Back to Home">
        <i class="fas fa-arrow-left text-xl"></i>
      </router-link>
      <div class="text-center mb-8 mt-4">
        <router-link to="/">
          <img src="/img/NFS_Insure_Logo_Off-white_Mustard_Combination@2x.png" alt="NFS Insure Logo" class="h-[40px] mx-auto mb-6 bg-slate-900 p-2 rounded" />
        </router-link>
        <h1 class="text-2xl font-bold text-slate-800">Admin Login</h1>
        <p class="text-slate-500 text-sm mt-2">Sign in to access the applications dashboard</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-5">
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
        
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <label class="block text-sm font-semibold text-slate-700">Password</label>
            <router-link to="/admin-forgot-password" class="text-xs font-semibold text-accent hover:underline">Forgot password?</router-link>
          </div>
          <input 
            v-model="password" 
            type="password" 
            required 
            class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            placeholder="••••••••"
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
          <span v-if="loading"><i class="fas fa-spinner fa-spin"></i> Signing In...</span>
          <span v-else>Sign In</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

onMounted(async () => {
  loading.value = true
  const { data: { session } } = await supabase.auth.getSession()
  loading.value = false
  if (session) {
    router.push('/admin-dashboard')
  }
})

async function handleLogin() {
  loading.value = true
  errorMsg.value = ''
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  loading.value = false

  if (error) {
    errorMsg.value = error.message
  } else {
    router.push('/admin-dashboard')
  }
}
</script>
