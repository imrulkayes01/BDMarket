<template>
  <div>
    <Header class="fixed top-0 left-0 right-0 z-50" />
    <div class="pt-16 lg:pt-20">
      <SearchBar />
      <slot />
    </div>
    <Footer />
  </div>
</template>
