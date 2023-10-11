<template>
  <div class="relative">
    <div class="box"></div>
    <div
      class="absolute bottom-0 top-0 flex items-center"
    >
      <div class="mx-auto max-w-2xl px-6 pt-20 lg:px-8">
        <div class="text-center flex items-center flex-col lg:w-full">
          <div class="avatar rounded-full"></div>
          <h1
            class="font-bold tracking-tight text-white text-6xl"
          >
            Rayan Sekkat
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-200">
            Hello and welcome to my website! I'm Rayan Sekkat, a dedicated and
            passionate Fullstack developer / devOps, specializing in the creation of web
            applications. With 3 years experience in the development industry,
            I'm ready to put my expertise to work on your most ambitious
            projects.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
}

.box {
  width: 100vw;
  height: 85vh;
  background-image: url("/images/rayancoree.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  clip-path: polygon(0 0, 100% 0, 100% 100%);
  filter: blur(6px);
}

.avatar {
  height: 200px;
  width: 200px;
  background-image: url("/images/rayan2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
