<template>
  <section class="max-w-[1280px] mx-auto px-6 py-8 lg:py-24">
    <div class="grid grid-cols-1 md:grid-cols-2 border border-gray-400 bg-white">
      <!-- LEFT CONTENT -->
      <div
        class="flex flex-col justify-center items-center md:items-start text-center md:text-left p-6 sm:p-8 md:p-20 min-h-[16rem] md:min-h-[28rem]">
        <div class="flex items-center gap-3 sm:gap-4 mb-4">
          <span class="w-8 sm:w-10 h-px bg-gray-400"></span>
          <p class="uppercase text-sm sm:text-base ">
            Our Bestsellers
          </p>
        </div>

        <h1
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-5 sm:mb-8 leading-tight">
          Latest Arrivals
        </h1>

        <div class="flex items-center gap-2 sm:gap-4">
          <a href="#" class="uppercase text-sm sm:text-base transition-all pb-1">
            Shop Now
          </a>
          <span class="w-8 sm:w-16 h-px bg-gray-400"></span>
        </div>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="relative h-[320px] sm:h-[400px] md:h-auto overflow-hidden bg-gray-400">
        <img src="/photo/woman-posing-happy.jpg" alt="Latest Arrivals"
          class="absolute inset-0 w-full h-full object-cover object-center" />
      </div>
    </div>
  </section>
</template>
