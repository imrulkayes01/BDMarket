<template>
  <transition
    enter-active-class="transition-all duration-300 ease-in-out"
    enter-from-class="-translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-all duration-200 ease-in-out"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="-translate-y-full opacity-0"
  >
    <div
      v-if="showSearch && isSearchPage"
      class="border-t border-b bg-gray-50 text-center py-4"
    >
      <div
        class="inline-flex items-center justify-center border border-gray-300 px-5 py-2 my-2 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white transition-all focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400"
      >
        <input
          v-model="search"
          class="flex-1 outline-none text-sm text-gray-700 bg-transparent"
          type="text"
          placeholder="Search for products..."
          ref="searchInput"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-gray-400"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </div>
      <button
        @click="showSearch = false"
        class="inline-flex items-center justify-center p-2 hover:bg-gray-200 rounded-full transition-colors ml-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-gray-500 hover:text-red-500"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  </transition>
</template>

<script setup>
import { computed, watch, ref, nextTick } from "vue";
import { useSearch } from "~/composables/useSearch";
import { useRoute } from "vue-router";

const { showSearch, search } = useSearch();
const route = useRoute();
const searchInput = ref(null);

const isSearchPage = computed(() => {
  // In the original design, search bar is only visible on certain pages (like collection)
  // But we can show it everywhere if requested.
  // For now, let's show it if it's toggled.
  return true;
});

watch(showSearch, (newVal) => {
  if (newVal) {
    nextTick(() => {
      searchInput.value?.focus();
    });
  }
});
</script>
