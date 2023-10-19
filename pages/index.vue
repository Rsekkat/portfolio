<template>
  <div>
    <BaseNavBar></BaseNavBar>
    <section
      id="home"
      style="
        background-image: linear-gradient(
          rgb(80, 70, 229) 0%,
          rgb(43, 49, 203) 100%
        );
      "
    >
      <BaseHome></BaseHome>
    </section>
    <section id="about" class="bg-blue">
      <BaseAbout></BaseAbout>
    </section>
    <section class="bg-black"><BaseSliderLogo></BaseSliderLogo></section>
    <section id="services"><BaseServices></BaseServices></section>
    <section id="contact">
      <BaseContact></BaseContact>
    </section>
    <section
      style="
        background-image: linear-gradient(
          rgb(80, 70, 229) 0%,
          rgb(43, 49, 203) 100%
        );
      "
    >
      <!-- <BaseFooter></BaseFooter> -->
    </section>
  </div>
</template>

<style scoped>
.bg-blue {
  background-color: #5465ff !important;
}
</style>
