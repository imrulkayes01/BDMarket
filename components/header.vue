<template>
  <header class="w-full transition-all duration-300 border-b bg-white/80 backdrop-blur-md border-gray-100"
    :class="{ 'shadow-sm': scrolled }">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo Section -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center gap-2 group">
            <div class="relative overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <svg width="35" height="35" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Base circle -->
                <circle cx="32" cy="32" r="30" stroke="#2563EB" stroke-width="4" fill="#EFF6FF" />

                <!-- Shop roof -->
                <path d="M16 28L32 12L48 28H16Z" fill="#2563EB" />

                <!-- Shop body -->
                <rect x="20" y="28" width="24" height="20" rx="3" fill="#3B82F6" />

                <!-- BD letters -->
                <text x="24" y="24" text-anchor="middle" font-size="10" fill="white" font-family="Poppins, sans-serif"
                  font-weight="700">
                  BD
                </text>
              </svg>

              <div
                class="absolute inset-0 bg-blue-500/10 rounded-full scale-150 blur-xl opacity-0 group-hover:opacity-100 transition-opacity">
              </div>
            </div>
            <span
              class="text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              BDMarket
            </span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path"
            class="relative text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors uppercase tracking-wider group py-2">
            {{ link.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"
              :class="{ 'w-full': $route.path === link.path }"></span>
          </NuxtLink>
        </nav>

        <!-- Icons Section -->
        <div class="flex items-center gap-2 lg:gap-4">
          <!-- Search -->
          <button
            class="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
            aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>

          <!-- User -->
          <button
            class="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
            aria-label="User Account">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

          <!-- Cart -->
          <button
            class="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>

          <!-- Mobile Menu Toggle -->
          <button
            class="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
            @click="toggleMenu" aria-label="Toggle Menu">
            <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <transition enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in" leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0">
      <div v-if="menuOpen" class="lg:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden">
        <nav class="flex flex-col py-4 px-4 space-y-1">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path"
            class="px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 uppercase tracking-wider"
            :class="{ 'bg-blue-50 text-blue-600': $route.path === link.path }" @click="closeMenu">
            {{ link.name }}
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
const scrolled = ref(false);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Collection", path: "/collection" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
