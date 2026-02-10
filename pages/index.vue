<template>
  <section class="max-w-[1280px] mx-auto px-6 py-8 lg:py-24">
    <div
      class="grid grid-cols-1 md:grid-cols-2 border border-gray-400 bg-white"
    >
      <!-- LEFT CONTENT -->
      <div
        class="flex flex-col justify-center items-center md:items-start text-center md:text-left p-6 sm:p-8 md:p-20 min-h-[16rem] md:min-h-[28rem]"
      >
        <div class="flex items-center gap-3 sm:gap-4 mb-4">
          <span class="w-8 sm:w-10 h-px bg-gray-400"></span>
          <p class="uppercase text-sm sm:text-base">Our Bestsellers</p>
        </div>

        <h1
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-5 sm:mb-8 leading-tight"
        >
          Latest Arrivals
        </h1>

        <div class="flex items-center gap-2 sm:gap-4">
          <a
            href="#"
            class="uppercase text-sm sm:text-base transition-all pb-1"
          >
            Shop Now
          </a>
          <span class="w-8 sm:w-16 h-px bg-gray-400"></span>
        </div>
      </div>

      <!-- RIGHT IMAGE -->
      <div
        class="relative h-[320px] sm:h-[400px] md:h-auto overflow-hidden bg-gray-400"
      >
        <img
          :src="heroImage"
          alt="Latest Arrivals"
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </section>

  <section class="max-w-[1280px] mx-auto px-6 py-8 lg:py-24">
    <h2
      class="text-center mb-6 sm:mb-10 leading-tight text-2xl sm:text-3xl md:text-4xl font-sans font-normal text-gray-800 uppercase tracking-wide"
    >
      Latest Collections
    </h2>

    <!-- 4 items per row on large screens, slightly larger cards -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
      <div
        v-for="product in products"
        :key="product.name"
        class="bg-white p-4 md:p-5 rounded-xl flex flex-col items-center"
      >
        <!-- Bigger image, show full picture without cropping -->
        <div
          class="w-full h-64 md:h-72 flex items-center justify-center bg-white overflow-hidden rounded-lg"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="max-h-full max-w-full object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div class="text-center">
          <div class="font-medium text-sm text-gray-800">
            {{ product.name }}
          </div>
          <div class="text-blue-600 text-lg text-left font-semibold mt-1">
            ${{ product.price }}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-8 lg:py-24">
    <div class="max-w-[1280px] mx-auto px-6">
      <!-- Title with horizontal lines -->
      <div class="flex items-center justify-center gap-4 mb-4">
        <span class="w-16 h-px bg-gray-400"></span>
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-sans font-normal text-gray-800 uppercase tracking-wide"
        >
          BESTSELLERS
        </h2>
        <span class="w-16 h-px bg-gray-400"></span>
      </div>

      <!-- 4 Product Cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        <div
          v-for="product in bestsellers"
          :key="product.name"
          class="bg-white p-4 md:p-5 rounded-xl flex flex-col items-center"
        >
          <!-- Image with hover zoom -->
          <div
            class="w-full h-64 md:h-72 flex items-center justify-center bg-white overflow-hidden rounded-lg"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="max-h-full max-w-full object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div class="text-center mt-4">
            <div class="font-medium text-sm text-gray-800">
              {{ product.name }}
            </div>
            <div class="text-blue-600 text-lg font-semibold mt-1">
              ${{ product.price }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import rawProducts from "~/json/product_data.json";

// Statically import all product images so Nuxt can bundle and serve them correctly
const productImages = import.meta.glob("../photo/*.png", {
  eager: true,
  import: "default",
});

// Hero image for the top banner - import from photo folder
const heroImages = import.meta.glob("../photo/*.{jpg,jpeg}", {
  eager: true,
  import: "default",
});
const heroImage = heroImages["../photo/woman-posing-happy.jpg"];

const products = rawProducts.map((product) => ({
  ...product,
  image: productImages[`../photo/${product.image}`],
}));

// Get first 4 products for BESTSELLERS section
const bestsellers = products.slice(0, 4);
</script>
