<template>
  <footer class="border-t border-gray-200 bg-white/80 backdrop-blur py-10">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
        <!-- Logo & Description -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <div class="mb-2 flex items-center gap-2">
            <!-- Re-use SVG from header -->
            <svg width="35" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" stroke="#2563EB" stroke-width="4" fill="#EFF6FF" />
              <path d="M16 28L32 12L48 28H16Z" fill="#2563EB" />
              <rect x="20" y="28" width="24" height="20" rx="3" fill="#3B82F6" />
              <text x="24" y="24" text-anchor="middle" font-size="10" fill="white" font-family="Poppins, sans-serif"
                font-weight="700">BD</text>
            </svg>
            <div class="text-lg font-bold text-blue-700">BDMarket</div>
          </div>
          <p class="text-gray-500 text-sm max-w-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, alias saepe nam quisquam consequuntur
            distinctio ad aliquam eaque ipsa qui.
          </p>
        </div>
        <!-- Company Links -->
        <div class="flex flex-col gap-2">
          <div class="font-semibold text-gray-900 mb-2">COMPANY</div>
          <NuxtLink to="/" class="text-gray-600 hover:text-blue-600 text-sm py-1">Home</NuxtLink>
          <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600 text-sm py-1">About us</NuxtLink>
          <NuxtLink to="/Contact" class="text-gray-600 hover:text-blue-600 text-sm py-1">Contact us</NuxtLink>
          <NuxtLink to="/Collection" class="text-gray-600 hover:text-blue-600 text-sm py-1">Collection
          </NuxtLink>
        </div>
        <!-- Get In Touch -->
        <div>
          <div class="font-semibold text-gray-900 mb-2">GET IN TOUCH</div>
          <div class="text-gray-600 text-sm mb-1">+1-212-456-7890</div>
          <div class="text-gray-600 text-sm">support bdmarket@gmail.com</div>
        </div>
      </div>
      <div class="border-t border-gray-100 mt-10 pt-6 text-center text-xs text-gray-500">
        ©Copyright 2026 bdmarket.com – All Right Reserved.
      </div>
    </div>
  </footer>
</template>
