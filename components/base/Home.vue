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
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
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
