<template>
  <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
    <!-- Breadcrumb or Top Navigation could go here, but matching image directly -->

    <div class="flex flex-col lg:flex-row gap-8 lg:gap-16">
      <!-- Sidebar Filters -->
      <aside class="w-full lg:w-60 flex-shrink-0">
        <div
          @click="showFilter = !showFilter"
          class="text-xl font-medium text-gray-900 mb-8 uppercase tracking-wider flex items-center gap-2 cursor-pointer lg:cursor-default group"
        >
          Filters
          <svg
            class="w-4 h-4 text-gray-400 transition-transform duration-300 lg:hidden"
            :class="{ 'rotate-180': showFilter }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <!-- Filters Content: Always show on desktop (lg:block), toggle on mobile -->
        <div :class="[showFilter ? 'block' : 'hidden', 'lg:block']">
          <!-- Categories Filter -->
          <div class="border border-gray-400 p-5 mb-8">
            <h3
              class="text-sm font-bold text-gray-900 mb-6 uppercase tracking-widest"
            >
              Categories
            </h3>
            <div class="space-y-4">
              <label
                v-for="cat in categories"
                :key="cat"
                class="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  v-model="selectedCategories"
                  :value="cat"
                  class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 rounded"
                />
                <span
                  class="ml-3 text-sm text-gray-600 group-hover:text-black transition-colors"
                  >{{ cat }}</span
                >
              </label>
            </div>
          </div>

          <!-- Type Filter -->
          <div class="border border-gray-400 p-5">
            <h3
              class="text-sm font-bold text-gray-900 mb-6 uppercase tracking-widest"
            >
              Type
            </h3>
            <div class="space-y-4">
              <label
                v-for="type in types"
                :key="type"
                class="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  v-model="selectedTypes"
                  :value="type"
                  class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 rounded"
                />
                <span
                  class="ml-3 text-sm text-gray-600 group-hover:text-black transition-colors"
                  >{{ type }}</span
                >
              </label>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1">
        <!-- Top Title & Sort Section -->
        <div class="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div class="flex items-center gap-4">
            <h1
              class="text-xl md:text-2xl font-normal text-gray-500 uppercase tracking-widest flex items-center gap-3"
            >
              All <span class="text-gray-900 font-medium">Collections</span>
              <span class="h-px w-10 bg-gray-900"></span>
            </h1>
          </div>

          <div class="flex items-center">
            <select
              id="sort"
              v-model="sortBy"
              class="text-sm border border-gray-300 px-4 py-2 bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
        </div>

        <!-- Products Grid -->
        <div
          v-if="filteredProducts.length > 0"
          class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10"
        >
          <div
            v-for="product in filteredProducts"
            :key="product.name"
            class="group cursor-pointer"
          >
            <!-- Product Image -->
            <div class="aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <!-- Product Info -->
            <div class="flex flex-col gap-1">
              <h3 class="text-sm text-gray-800 leading-tight">
                {{ product.name }}
              </h3>
              <p class="text-sm font-semibold text-gray-900">
                ${{ product.price }}
              </p>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-else
          class="flex flex-col items-center justify-center py-24 text-center"
        >
          <div
            class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4"
          >
            <svg
              class="w-8 h-8 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-1">
            No collections found
          </h3>
          <p class="text-sm text-gray-500 mb-6">
            We couldn't find anything matching your current selection.
          </p>
          <button
            @click="resetFilters"
            class="px-6 py-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import rawProducts from "~/json/product_data.json";
import { useSearch } from "~/composables/useSearch";

const { search } = useSearch();

// Image handling
const productImages = import.meta.glob("../photo/*.png", {
  eager: true,
  import: "default",
});

const products = rawProducts.map((product) => ({
  ...product,
  image: productImages[`../photo/${product.image}`],
}));

// Filter options
const categories = ["Men", "Women", "Kids"];
const types = ["Topwear", "Bottomwear", "Winterwear"];

// UI State
const showFilter = ref(false); // Collapsed by default
const selectedCategories = ref([]);
const selectedTypes = ref([]);
const sortBy = ref("relevant");

// Logic
const filteredProducts = computed(() => {
  let result = [...products];

  // Apply Search filter
  if (search.value) {
    result = result.filter((p) =>
      p.name.toLowerCase().includes(search.value.toLowerCase()),
    );
  }

  // Apply Categories filter
  if (selectedCategories.value.length > 0) {
    result = result.filter((p) =>
      selectedCategories.value.includes(p.category),
    );
  }

  // Apply Type filter
  if (selectedTypes.value.length > 0) {
    result = result.filter((p) => selectedTypes.value.includes(p.type));
  }

  // Apply Sorting
  if (sortBy.value === "low-high") {
    result.sort((a, b) => a.price - b.price);
  } else if (sortBy.value === "high-low") {
    result.sort((a, b) => b.price - a.price);
  }

  return result;
});

const resetFilters = () => {
  selectedCategories.value = [];
  selectedTypes.value = [];
  search.value = "";
  sortBy.value = "relevant";
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
