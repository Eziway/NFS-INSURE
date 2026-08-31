<template>
  <footer class="bg-gray-900 text-gray-400 pt-20 pb-8">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr] gap-10">
        <!-- Brand -->
        <div class="lg:pr-8">
          <router-link to="/" class="inline-block mb-4">
            <img
              src="/img/NFS_Insure_Logo_Off-white_Mustard_Combination@2x.png"
              alt="NFS Insure Logo"
              class="h-[50px] w-auto"
            />
          </router-link>
          <p class="leading-relaxed">
            Your trusted partner in building a secure financial future. We provide
            comprehensive insurance solutions with integrity and transparency.
          </p>
          <p class="mt-2"><strong class="text-white">FSP No. 53910</strong></p>
        </div>

        <!-- Useful Links -->
        <div>
          <h5 class="text-white font-bold text-lg mb-5">Useful Links</h5>
          <div class="flex flex-col gap-1">
            <router-link to="/about" class="py-1 hover:text-secondary hover:pl-1 transition-all duration-300">About Us</router-link>
            <router-link to="/services" class="py-1 hover:text-secondary hover:pl-1 transition-all duration-300">Services</router-link>
            <router-link to="/faq" class="py-1 hover:text-secondary hover:pl-1 transition-all duration-300">FAQ's</router-link>
            <router-link to="/contact" class="py-1 hover:text-secondary hover:pl-1 transition-all duration-300">Contact</router-link>
            <router-link to="/admin-dashboard" class="py-1 hover:text-secondary hover:pl-1 transition-all duration-300">Admin Portal</router-link>
            <a href="https://health.nfs.insure" target="_blank" class="py-1 hover:text-secondary hover:pl-1 transition-all duration-300">NFS Health</a>
          </div>
        </div>

        <!-- Legal -->
        <div>
          <h5 class="text-white font-bold text-lg mb-5">Legal</h5>
          <div class="flex flex-col gap-1">
            <a href="/docs/PAIA MANUAL WEBSITE.pdf" target="_blank" class="py-1 hover:text-secondary hover:pl-1 transition-all duration-300">PAIA Manual</a>
            <a href="/docs/Conflict of Interest Management Policy Website.pdf" target="_blank" class="py-1 hover:text-secondary hover:pl-1 transition-all duration-300">Conflict of Interest</a>
            <a href="/docs/Complaints Policy WEBSITE.pdf" target="_blank" class="py-1 hover:text-secondary hover:pl-1 transition-all duration-300">Complaints</a>
            <a href="/docs/TCF Policy WEBSITE.pdf" target="_blank" class="py-1 hover:text-secondary hover:pl-1 transition-all duration-300">TCF</a>
            <a href="/docs/PRIVACY NOTICE WEBSITE.pdf" target="_blank" class="py-1 hover:text-secondary hover:pl-1 transition-all duration-300">Privacy Notice</a>
          </div>
        </div>

        <!-- Contact -->
        <div>
          <h5 class="text-white font-bold text-lg mb-5">Contact Us</h5>
          <div class="flex flex-col gap-3">
            <p class="flex items-start gap-2 text-[0.95rem]">
              <i class="fas fa-map-marker-alt mt-1 text-secondary shrink-0"></i>
              <a :href="company.mapsUrl" target="_blank" class="hover:text-secondary transition-colors break-words">
                Eagle Canyon Office Park, Cnr Christiaan De Wet &amp; Dolfyn St, Randpark Ridge, 2154
              </a>
            </p>
            <p class="flex items-start gap-2 text-[0.95rem]">
              <i class="fas fa-phone mt-1 text-secondary shrink-0"></i>
              <a href="tel:+27100110010" class="hover:text-secondary transition-colors">+27 10 011 0010</a>
            </p>
            <p class="flex items-start gap-2 text-[0.95rem]">
              <i class="fas fa-envelope mt-1 text-secondary shrink-0"></i>
              <a href="mailto:info@nfs.insure" class="hover:text-secondary transition-colors">info@nfs.insure</a>
            </p>
          </div>

          <div class="flex gap-2.5 mt-5">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              :aria-label="social.name"
              class="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              :class="social.hoverClass"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-gray-800 pt-6 mt-12 text-center">
        <p>
          &copy; {{ currentYear }} NFS Insure Consultant | All Rights Reserved. |
          <a href="/docs/PRIVACY NOTICE WEBSITE.pdf" target="_blank" class="text-secondary underline hover:text-white transition-colors">Privacy Policy</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { companyInfo as company } from '@/data/companyInfo';

const currentYear = new Date().getFullYear();

const socials = [
  { name: 'Instagram', url: company.social.instagram, icon: 'fab fa-instagram', hoverClass: 'hover:bg-[#c13584]' },
  { name: 'Facebook', url: company.social.facebook, icon: 'fab fa-facebook-f', hoverClass: 'hover:bg-[#3b5998]' },
  { name: 'LinkedIn', url: company.social.linkedin, icon: 'fab fa-linkedin-in', hoverClass: 'hover:bg-[#0077b5]' },
];
</script>
