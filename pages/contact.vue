<template>
  <section class="max-w-[1280px] mx-auto px-6 py-8 lg:py-12 border-t">
    <div class="text-2xl text-center pt-8">
      <div class="inline-flex gap-2 items-center mb-3">
        <p class="text-gray-500">
          CONTACT <span class="text-gray-700 font-medium">US</span>
        </p>
        <p class="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-16 justify-center">
      <div class="my-10 flex flex-col md:flex-row gap-16">
        <img
          src="/photo/contact_img.png"
          alt="contact_img"
          class="w-full md:max-w-[450px] object-cover"
        />
      </div>

      <div class="flex flex-col justify-center items-start gap-6">
        <p class="font-semibold text-xl text-gray-800">Our Store</p>
        <p class="text-gray-500">
          54709 Willms Station<br />Suite 350, Washington, USA
        </p>
        <p class="text-gray-500">
          Tel: (415) 555‑0132 <br />
          Email: support.forever@gmail.com
        </p>
        <p class="font-semibold text-xl text-gray-800">Careers at Forever</p>
        <p class="text-gray-500">
          Learn more about our teams and job openings.
        </p>
        <button
          class="border border-black rounded-full px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"
        >
          Explore Jobs
        </button>
      </div>
    </div>
    <NewsletterBox />
  </section>
</template>
