<template>
  <div class="hidden md:flex">
    <nav
      class="border-gray-200 dark:bg-gray-900 fixed right-0 z-10 2xl:right-10"
    >
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <ul
          class="flex flex-col font-medium p-4 mt-4 border-gray-100 rounded-lg bg-gray-50 md:flex-col md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          style="background-color: transparent"
        >
          <li v-for="item in navItems" :key="item.name" class="cursor-pointer">
            <a
              :href="item.href"
              class="cursor-pointer block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:text-indigo-700 md:dark:indigo-blue-500"
              aria-current="page"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
const navItems = reactive([
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Contact",
    href: "#contact",
  },
]);
</script>
