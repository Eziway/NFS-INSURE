<template>
  <nav class="fixed top-0 left-0 right-0 w-full z-[9999] flex justify-center py-3 px-4 pointer-events-none" ref="navRef">
    <!-- Floating Pill Navbar -->
    <div
      class="pointer-events-auto w-full max-w-[1200px] flex items-center justify-between px-5 py-2.5 rounded-full bg-white/98 backdrop-blur-xl shadow-[0_8px_40px_rgba(26,37,47,0.14)] border border-slate-100/90 transition-all duration-500"
      :class="isScrolled ? 'shadow-[0_12px_50px_rgba(26,37,47,0.2)] py-2' : ''"
    >
      <!-- Logo -->
      <router-link to="/" class="flex items-center shrink-0 group" @click="closeMenu">
        <img
          src="/img/NFS_Insure_Logo_Blue_Mustard_Combination@2x.png"
          alt="NFS Insure"
          class="h-[42px] w-auto transition-transform duration-500 group-hover:scale-105 max-sm:h-[34px]"
        />
      </router-link>

      <!-- Desktop Navigation Links -->
      <ul class="hidden lg:flex items-center gap-1 m-0 p-0">
        <li
          v-for="link in navLinks"
          :key="link.label"
          class="relative flex items-center py-1"
          @mouseenter="link.children && onHoverEnter(link)"
          @mouseleave="link.children && onHoverLeave(link)"
        >
          <!-- Simple link -->
          <router-link
            v-if="!link.children"
            :to="link.to"
            class="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 no-underline"
            :class="isActive(link.to)
              ? 'bg-primary text-white shadow-md'
              : 'text-slate-700 hover:text-primary hover:bg-slate-100'"
            @click="closeMenu"
          >
            {{ link.label }}
          </router-link>

          <!-- Dropdown trigger -->
          <button
            v-else
            type="button"
            class="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 border-none cursor-pointer"
            :class="isDropdownActive(link) || openDropdown === link.id
              ? 'bg-primary text-white shadow-md'
              : 'text-slate-700 hover:text-primary hover:bg-slate-100 bg-transparent'"
            @click.stop="toggleDropdown(link.id)"
          >
            {{ link.label }}
            <i
              class="fas fa-chevron-down text-[0.6rem] transition-transform duration-300"
              :class="openDropdown === link.id ? 'rotate-180' : ''"
            ></i>
          </button>

          <!-- Mega Dropdown -->
          <div
            v-if="link.children"
            class="absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 z-[10000]"
            :class="openDropdown === link.id ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible translate-y-2 pointer-events-none'"
          >
            <!-- Arrow pointer -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-slate-100 rotate-45 rounded-sm shadow-sm z-20"></div>

            <div
              class="bg-white border border-slate-100 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.18)] p-5 flex gap-4 relative z-10"
              :style="{ minWidth: link.id === 'solutions' ? '920px' : '340px' }"
            >
              <div
                v-for="group in link.children"
                :key="group.category"
                class="flex-1"
              >
                <!-- Category header -->
                <div class="flex items-center gap-2 px-2 mb-3">
                  <span class="text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-slate-400 whitespace-nowrap">{{ group.category }}</span>
                  <div class="h-px bg-slate-100 flex-1"></div>
                </div>

                <div class="flex flex-col gap-1">
                  <component
                    :is="item.external ? 'a' : 'router-link'"
                    v-for="item in group.items"
                    :key="item.label"
                    :[item.external?'href':'to']="item.to"
                    :target="item.external ? '_blank' : null"
                    class="group/item flex items-center gap-3.5 p-2.5 rounded-2xl transition-all duration-200 hover:bg-slate-50 no-underline cursor-pointer"
                    :class="route.path === item.to ? 'bg-primary/5' : ''"
                    @click="closeMenu"
                  >
                    <div
                      class="w-10 h-10 rounded-xl flex items-center justify-center text-sm transition-all duration-200 shrink-0"
                      :class="route.path === item.to
                        ? 'bg-primary text-secondary shadow-md'
                        : 'bg-slate-100 text-slate-600 group-hover/item:bg-primary group-hover/item:text-secondary group-hover/item:shadow-md'"
                    >
                      <i :class="item.icon"></i>
                    </div>
                    <div>
                      <div class="text-[0.88rem] font-bold text-slate-800 group-hover/item:text-primary transition-colors leading-tight">{{ item.label }}</div>
                      <div class="text-[0.75rem] text-slate-400 leading-tight mt-0.5">{{ item.description }}</div>
                    </div>
                  </component>
                </div>

                <!-- View All -->
                <div v-if="group.viewAll" class="mt-3 px-1">
                  <router-link
                    :to="group.viewAll.to"
                    class="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-[#1a3a5c] text-white font-bold text-xs transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 group/all no-underline cursor-pointer"
                    @click="closeMenu"
                  >
                    <span>{{ group.viewAll.label }}</span>
                    <i class="fas fa-arrow-right text-secondary transition-transform duration-300 group-hover/all:translate-x-1"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <!-- Desktop CTA + Hamburger -->
      <div class="flex items-center gap-2 shrink-0">
        <router-link
          to="/contact"
          class="hidden sm:inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gradient-to-r from-secondary to-gold-bright text-primary-dark font-bold text-sm transition-all duration-300 hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 group no-underline"
          @click="closeMenu"
        >
          <i class="fas fa-phone-alt text-xs"></i>
          Contact Us
        </router-link>

        <!-- Hamburger -->
        <button
          type="button"
          class="lg:hidden w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex flex-col justify-center items-center gap-[5px] cursor-pointer transition-colors border-none relative"
          @click="toggleMenu"
          aria-label="Toggle navigation"
        >
          <span class="block w-[18px] h-[2px] rounded-full bg-primary transition-all duration-300 origin-center" :class="menuOpen ? 'rotate-45 translate-y-[7px]' : ''"></span>
          <span class="block w-[18px] h-[2px] rounded-full bg-primary transition-all duration-300" :class="menuOpen ? 'opacity-0 scale-x-0' : ''"></span>
          <span class="block w-[18px] h-[2px] rounded-full bg-primary transition-all duration-300 origin-center" :class="menuOpen ? '-rotate-45 -translate-y-[7px]' : ''"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      class="lg:hidden pointer-events-auto fixed inset-x-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style="top: 76px"
      :style="{ maxHeight: menuOpen ? '85vh' : '0', opacity: menuOpen ? 1 : 0 }"
    >
      <div v-if="menuOpen" class="bg-white rounded-3xl border border-slate-100 shadow-[0_30px_80px_rgba(0,0,0,0.18)] p-5 overflow-y-auto max-h-[calc(85vh-20px)]">

        <!-- Mobile links -->
        <div v-for="link in navLinks" :key="link.label" class="mb-1">
          <router-link
            v-if="!link.children"
            :to="link.to"
            class="flex items-center py-3 px-4 rounded-2xl font-semibold text-base transition-all no-underline"
            :class="isActive(link.to) ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-primary'"
            @click="closeMenu"
          >
            {{ link.label }}
          </router-link>

          <template v-else>
            <button
              type="button"
              class="w-full flex items-center justify-between py-3 px-4 rounded-2xl font-semibold text-base transition-all bg-transparent border-none cursor-pointer text-left"
              :class="openDropdown === link.id ? 'bg-slate-50 text-primary' : 'text-slate-700 hover:bg-slate-50'"
              @click="toggleDropdown(link.id)"
            >
              <span>{{ link.label }}</span>
              <div class="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300" :class="openDropdown === link.id ? 'rotate-180 bg-primary/10' : ''">
                <i class="fas fa-chevron-down text-xs text-slate-400"></i>
              </div>
            </button>

            <div
              class="overflow-hidden transition-all duration-300"
              :style="{ maxHeight: openDropdown === link.id ? '600px' : '0' }"
            >
              <div class="pt-1 pb-3 pl-4 border-l-2 border-slate-100 ml-4 mt-1">
                <div v-for="group in link.children" :key="group.category" class="mb-4">
                  <div class="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-slate-400 mb-2 px-2">{{ group.category }}</div>
                  <component
                    :is="item.external ? 'a' : 'router-link'"
                    v-for="item in group.items"
                    :key="item.label"
                    :[item.external?'href':'to']="item.to"
                    :target="item.external ? '_blank' : null"
                    class="flex items-center gap-3 py-2.5 px-3 rounded-xl font-semibold text-sm transition-colors text-slate-700 hover:text-primary hover:bg-slate-50 no-underline"
                    @click="closeMenu"
                  >
                    <i :class="item.icon" class="w-4 text-center text-secondary"></i>
                    {{ item.label }}
                  </component>
                </div>
              </div>
            </div>
          </template>
        </div>

        <!-- Mobile CTA -->
        <router-link
          to="/contact"
          class="mt-3 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-secondary to-gold-bright text-primary-dark font-bold text-base shadow-lg transition-all active:scale-95 no-underline"
          @click="closeMenu"
        >
          <i class="fas fa-phone-alt text-sm"></i>
          Contact Us
        </router-link>
      </div>
    </div>

    <!-- Mobile Overlay -->
    <div
      v-if="menuOpen"
      class="lg:hidden fixed inset-0 bg-slate-900/30 backdrop-blur-sm pointer-events-auto"
      style="z-index: -1"
      @click="closeMenu"
    ></div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { navLinks } from '@/data/navigation';

const route = useRoute();
const navRef = ref(null);
const isScrolled = ref(false);
const menuOpen = ref(false);
const openDropdown = ref(null);

function handleScroll() {
  isScrolled.value = window.scrollY > 20;
}

function handleClickOutside(e) {
  if (navRef.value && !navRef.value.contains(e.target)) {
    openDropdown.value = null;
  }
}

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  if (menuOpen.value) openDropdown.value = null;
}

function closeMenu() {
  menuOpen.value = false;
  openDropdown.value = null;
}

function toggleDropdown(id) {
  openDropdown.value = openDropdown.value === id ? null : id;
}

function onHoverEnter(link) {
  if (window.innerWidth >= 1024) openDropdown.value = link.id;
}

function onHoverLeave(link) {
  // Option to keep dropdown open on click or close on leave
}

function isActive(to) {
  return route.path === to;
}

function isDropdownActive(link) {
  if (!link.children) return false;
  return link.children.some(g => g.items.some(i => route.path === i.to || route.path.startsWith(i.to)));
}
</script>
