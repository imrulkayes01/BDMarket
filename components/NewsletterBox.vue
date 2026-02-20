<template>
  <div class="text-center py-20">
    <p class="lg:text-2xl text-xl font-medium text-gray-800">
      Subscribe now & get 20% off
    </p>
    <p class="text-gray-400 mt-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolor.
    </p>

    <form
      @submit.prevent="onSubmit"
      class="w-full sm:w-1/2 flex items-center mx-auto my-6 border pl-3 rounded-l-lg"
    >
      <input
        type="email"
        placeholder="Enter your email"
        class="w-full sm:flex-1 outline-none py-3"
        required
      />
      <button
        type="submit"
        class="bg-black rounded-r-lg text-white text-xs px-10 py-4 active:bg-gray-700"
      >
        SUBSCRIBE
      </button>
    </form>
  </div>
</template>

<script setup>
const onSubmit = (event) => {
  // Add your logic here
  console.log("Form submitted");
};
</script>
