<template>
  <div class="max-w-[1280px] mx-auto px-6 py-8 lg:py-24 border-t">
    <!-- ABOUT US SECTION -->
    <div class="text-2xl text-center pt-8">
      <div class="inline-flex gap-2 items-center mb-3">
        <p class="text-gray-500">
          ABOUT <span class="text-gray-700 font-medium">US</span>
        </p>
        <p class="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
      </div>
    </div>

    <div class="my-10 flex flex-col md:flex-row gap-16">
      <!-- LEFT IMAGE -->
      <img
        :src="aboutImage"
        alt="About Forever"
        class="w-full md:max-w-[450px] object-cover"
      />

      <!-- RIGHT TEXT -->
      <div class="flex flex-col justify-center gap-6 md:w-3/4 text-gray-800">
        <p>
          Forever was born out of a passion for innovation and desire to
          revolutionize the way people shop online. Our journey began with a
          simple idea: to provide a platform where customers can easily
          discover, explore and purchase a wide range of products from the
          comfort of their homes
        </p>
        <p>
          Since our inception, we've worked tirelessly to create a diverse
          selection of high-quality products that cater to every taste and
          preference. From fashion and beauty to electronics and home
          essentials, we offer an extensive collection sourced from trusted
          brands and suppliers
        </p>
        <b class="text-gray-800">Our Mission</b>
        <p>
          Our mission at Forever is to empower customers with choice,
          convenience and confidence. We're dedicated to providing a seamless
          shopping experience that exceeds expectations, from browsing and
          ordering to delivery and beyond.
        </p>
      </div>
    </div>

    <!-- WHY CHOOSE US SECTION -->
    <div class="text-xl py-4">
      <div class="inline-flex gap-2 items-center mb-3">
        <p class="text-gray-500">
          WHY <span class="text-gray-700 font-medium">CHOOSE US</span>
        </p>
        <p class="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
      </div>
    </div>

    <!-- THREE CARDS -->
    <div class="flex flex-col md:flex-row text-sm">
      <div
        class="border-2 border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
      >
        <b>Quality Assurance:</b>
        <p class="text-gray-800 leading-relaxed">
          We meticulously select and vet each product to ensure it meets our
          stringent quality standards.
        </p>
      </div>

      <div
        class="border-2 border-gray-400 border-t-0 md:border-t-2 md:border-l-0 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
      >
        <b>Convenience:</b>
        <p class="text-gray-800 leading-relaxed">
          With our user-friendly interface and hassle-free ordering process,
          shopping has never been easier.
        </p>
      </div>

      <div
        class="border-2 border-gray-400 border-t-0 md:border-t-2 md:border-l-0 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
      >
        <b>Exceptional Customer Service:</b>
        <p class="text-gray-800 leading-relaxed">
          Our team of dedicated professionals is here to assist you the way,
          ensuring your satisfaction is our top priority.
        </p>
      </div>
    </div>
    <NewsletterBox />
  </div>
</template>

<script setup>
const images = import.meta.glob("../photo/*.png", {
  eager: true,
  import: "default",
});

const aboutImage = images["../photo/about_img-BAJyTXw9.png"];
</script>
