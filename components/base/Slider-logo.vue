<template>
  <div class="inline-flex h-32 w-screen overflow-hidden bg-neutral-900/30">
    <ul
      class="flex items-center justify-center md:justify-start py-4 x-infinite-scroll"
    >
      <li v-for="logo in logos.concat(logos).concat(logos)" :key="logo.alt" class="w-10 h-10 md:w-15 md:h-15 lg:w-20 lg:h-20 mx-8 md:mx-16">
        <img
          :src="logo.src"
          :alt="logo.alt"
          class="slide w-full h-full"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
const logos = [
  {
    alt: "js",
    src: "/images/logos/js.svg",
  },
  {
    alt: "python",
    src: "/images/logos/python.svg",
  },
  {
    alt: "vue",
    src: "/images/logos/vue.svg",
  },
  {
    alt: "django",
    src: "/images/logos/django.svg",
  },
  {
    alt: "docker",
    src: "/images/logos/docker.svg",
  },
  {
    alt: "kubernetes",
    src: "/images/logos/kubernetes.svg",
  },
  {
    alt: "html",
    src: "/images/logos/html.svg",
  },
];
</script>

<style>
.x-infinite-scroll {
  animation: infinite-scroll 50s linear infinite;
}

@keyframes infinite-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-250px * 7));
  }
}

.slide {
  margin-left: 40px;
}

@media only screen and (min-width: 640px) and (max-width: 768px) { 
  .slide {
    margin-left: 60px;
  }
}
</style>

<!-- <style>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 960px;
}

.slider::before,
.slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slider .slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}

.slider .slide {
  height: 100px;
  width: 250px;
}
</style> -->
