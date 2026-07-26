<template>
  <!-- FAB Button -->
  <a
    class="fixed bottom-8 right-8 max-md:right-4 max-md:bottom-4 w-[60px] h-[60px] max-md:w-[50px] max-md:h-[50px] rounded-full text-white border-none flex items-center justify-center text-2xl max-md:text-xl z-[1000] cursor-pointer transition-all duration-300 hover:scale-110 bg-gradient-to-br from-[#25d366] to-[#1da851] shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] no-underline"
    style="animation: pulse-green 2s infinite;"
    title="Chat with us on WhatsApp"
    @click.prevent="isOpen = true"
  >
    <i class="fab fa-whatsapp"></i>
  </a>

  <!-- Modal -->
  <Teleport to="body">
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 bg-black/40 z-[10000] flex items-center justify-center p-4" @click.self="isOpen = false">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-[350px] overflow-hidden" @click.stop>
          <!-- Header -->
          <div class="bg-[#25d366] text-white px-5 py-4 flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg shrink-0">
              <i class="fas fa-headset"></i>
            </div>
            <h5 class="font-semibold text-lg flex-1 m-0">NFS Insure Support</h5>
            <button class="text-white/80 hover:text-white text-xl transition-opacity cursor-pointer" @click="isOpen = false">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <!-- Body -->
          <div class="p-6 text-gray-700 bg-gray-50 text-center flex flex-col items-center justify-center min-h-[250px]">
            <div class="bg-white rounded-2xl px-5 py-4 shadow-sm max-w-[90%] text-left relative mb-6" style="animation: fadeInMessage 0.3s ease-out;">
              <p class="mb-2">Hi there! 👋</p>
              <p class="text-[0.95rem]">How can we help you today? Click the button below to chat with us on WhatsApp.</p>
              <!-- Bubble tail -->
              <div class="absolute left-1/2 -bottom-2 -translate-x-1/2 rotate-45 w-4 h-4 bg-white shadow-[2px_2px_5px_rgba(0,0,0,0.1)] -z-10 rounded-br-[5px]"></div>
            </div>
            <p class="text-gray-800 font-medium text-lg">We're here to assist you!</p>
          </div>

          <!-- Footer -->
          <div class="border-t border-gray-200 p-5 bg-white flex justify-center">
            <a
              :href="whatsappUrl"
              target="_blank"
              class="bg-[#25d366] text-white border-none px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-md hover:bg-[#1da851] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-sm no-underline inline-flex items-center gap-2"
              @click="isOpen = false"
            >
              <i class="fab fa-whatsapp"></i> Continue to WhatsApp
            </a>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue';
import { companyInfo } from '@/data/companyInfo';

const isOpen = ref(false);
const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/\+/g, '')}?text=Hello%20NFS%20Insure%2C%20I%27m%20interested%20in%20your%20services.`;
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
