<template>
  <AppNavbar v-if="!isAdminRoute" />
  <main>
    <router-view />
  </main>
  <AppFooter v-if="!isAdminRoute" />
  <AiChatBot v-if="!isAdminRoute" />
  <WhatsAppChat v-if="!isAdminRoute" />
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';
import AiChatBot from '@/components/AiChatBot.vue';
import WhatsAppChat from '@/components/WhatsAppChat.vue';

const route = useRoute();
const isAdminRoute = computed(() => {
  return route.path.startsWith('/admin');
});
</script>
