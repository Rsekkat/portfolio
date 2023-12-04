export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "vue-email/nuxt",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  runtimeConfig: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  },
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
});
