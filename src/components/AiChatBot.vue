<template>
  <!-- FAB Button -->
  <button
    class="fixed bottom-8 right-36 max-md:right-22 max-md:bottom-4 w-[60px] h-[60px] max-md:w-[50px] max-md:h-[50px] rounded-full text-white border-none flex items-center justify-center text-2xl max-md:text-xl z-[1000] cursor-pointer transition-all duration-300 hover:scale-110 bg-gradient-to-br from-[#667eea] to-[#764ba2] shadow-[0_4px_20px_rgba(102,126,234,0.4)] hover:shadow-[0_6px_25px_rgba(102,126,234,0.6)]"
    style="animation: pulse-purple 2s infinite;"
    title="Chat with our AI Assistant"
    @click="isOpen = true"
  >
    <i class="fas fa-comments"></i>
  </button>

  <!-- Modal Backdrop -->
  <Teleport to="body">
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 bg-black/40 z-[10000] flex items-center justify-center p-4" @click.self="isOpen = false">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-[380px] overflow-hidden flex flex-col max-h-[85vh]" @click.stop>
          <!-- Header -->
          <div class="bg-gradient-to-br from-primary to-accent text-white px-5 py-4 flex items-center justify-between shrink-0">
            <h5 class="font-semibold flex items-center gap-2 text-lg m-0">
              <i class="fas fa-comments"></i>
              NFS AI Assistant
            </h5>
            <button class="text-white/80 hover:text-white text-xl transition-opacity cursor-pointer" @click="isOpen = false">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <!-- Messages -->
          <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-50 min-h-[300px] max-h-[500px] max-md:max-h-[400px]">
            <div
              v-for="(msg, i) in messages"
              :key="i"
              class="max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
              :class="msg.sender === 'user'
                ? 'self-end bg-accent text-white rounded-br-sm'
                : 'self-start bg-white text-gray-800 rounded-bl-sm shadow-sm'"
              style="animation: fadeInMessage 0.3s ease-out;"
            >
              {{ msg.text }}
            </div>
          </div>

          <!-- Input -->
          <div class="p-4 border-t border-gray-200 bg-white shrink-0">
            <div class="flex gap-2">
              <input
                v-model="inputText"
                type="text"
                placeholder="Type your message..."
                class="flex-1 rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/25 transition-all"
                @keypress.enter="sendMessage"
              />
              <button
                class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center shrink-0 hover:shadow-lg transition-all cursor-pointer"
                @click="sendMessage"
              >
                <i class="fas fa-paper-plane text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';
import { companyInfo, pdfContent } from '@/data/companyInfo';

const isOpen = ref(false);
const inputText = ref('');
const messagesContainer = ref(null);

const messages = ref([
  {
    sender: 'bot',
    text: "Hello! I'm your NFS AI Assistant. How can I help you today? Feel free to ask me anything about NFS Insure's services, mission, or our PAIA manual.",
  },
]);

async function scrollToBottom() {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
}

async function sendMessage() {
  const text = inputText.value.trim();
  if (!text) return;

  messages.value.push({ sender: 'user', text });
  inputText.value = '';
  await scrollToBottom();

  // Typing indicator
  messages.value.push({ sender: 'bot', text: 'Typing...' });
  await scrollToBottom();

  try {
    const prompt = `You are an AI assistant for NFS Insure Consultant. Your purpose is to provide helpful and accurate information based *only* on the company details and the PAIA Manual content provided below. If a question cannot be answered from this information, kindly state that you don't have enough information and suggest contacting NFS Insure directly via phone or email.

---
**General Company Information:**
Name: ${companyInfo.name}
FSP Number: ${companyInfo.fspNumber}
Accreditation Number (Medical Schemes): ${companyInfo.accreditationNumber}
Physical Address: ${companyInfo.address}
Phone Number: ${companyInfo.phone}
Email Address: ${companyInfo.email}
Services Offered: ${companyInfo.services.join('; ')}
Mission: ${companyInfo.mission}
Vision: ${companyInfo.vision}
Values: ${companyInfo.values}
---
**PAIA Manual Content:**
${pdfContent}
---

Based *only* on the information above, answer the following user's question: "${text}"`;

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      }),
    });

    // Remove typing indicator
    const typingIdx = messages.value.findLastIndex((m) => m.text === 'Typing...');
    if (typingIdx !== -1) messages.value.splice(typingIdx, 1);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const result = await response.json();
    const botText = result?.candidates?.[0]?.content?.parts?.[0]?.text
      || "I apologize, but I couldn't process your request. Please try again or contact NFS Insure directly.";

    messages.value.push({ sender: 'bot', text: botText });
  } catch {
    const typingIdx = messages.value.findLastIndex((m) => m.text === 'Typing...');
    if (typingIdx !== -1) messages.value.splice(typingIdx, 1);

    messages.value.push({
      sender: 'bot',
      text: "I'm having trouble connecting to the AI service. Please try again later or contact us directly.",
    });
  }

  await scrollToBottom();
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
