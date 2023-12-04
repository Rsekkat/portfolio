<template>
  <div>
    <div class="bg-black">
      <section
        id="features"
        class="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
      >
        <h1
          class="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-center"
        >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r"
            style="
              background: linear-gradient(rgb(80, 70, 229), rgb(43, 49, 203));
              background-clip: text;
              -webkit-background-clip: text;
              color: transparent;
            "
            >Contact</span
          >
        </h1>
        <div
          class="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 2xl:pr-0"
        >
          <section>
            <div
              class="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow"
            >
              <p
                class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl"
              >
                {{ $t("contact_description") }}
              </p>
              <div class="space-y-8">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-300"
                    >{{ $t("contact_email") }}</label
                  >
                  <input
                    type="email"
                    id="email"
                    v-model="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-300"
                    >{{ $t("contact_subject") }}</label
                  >
                  <input
                    type="text"
                    id="subject"
                    v-model="subject"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-300"
                    >{{ $t("contact_message") }}</label
                  >
                  <textarea
                    id="message"
                    v-model="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  @click="sendMail"
                  class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                  style="
                    background-image: linear-gradient(
                      rgb(80, 70, 229) 0%,
                      rgb(43, 49, 203) 100%
                    );
                    border-color: rgb(93, 79, 240);
                  "
                >
                  {{ $t("contact_button") }}
                </button>
              </div>
            </div>
          </section>
        </div>

        <div
          class="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style="
            background-image: linear-gradient(
              to right top,
              rgb(80, 70, 229) 0%,
              transparent 50%,
              transparent 100%
            );
            border-color: rgba(92, 79, 240, 0.2);
          "
        ></div>
        <div
          class="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style="
            background-image: linear-gradient(
              to left top,
              rgb(43, 49, 203) 0%,
              transparent 50%,
              transparent 100%
            );
            border-color: rgba(92, 79, 240, 0.2);
          "
        ></div>
      </section>
    </div>
  </div>
</template>

<script setup>
const email = ref("");
const subject = ref("");
const message = ref("");

const form = computed(() => {
  return { email: email.value, subject: subject.value, message: message.value };
});
const sendMail = async () => {
  let msg = {
    personalizations: [
      {
        to: [
          {
            email: "rayan.sekkat@gmail.com",
          },
        ],
      },
    ],
    from: {
      email: "rayan.sekkat@gmail.com",
    },
    subject: "from: " + form.value.email + " " + form.value.subject,
    content: [
      {
        type: "text/plain",
        value: form.value.message,
      },
      {
        type: "text/html",
        value: form.value.message,
      },
    ],
  };
  try {
    const response = await useFetch("/forms/contact", {
      method: "POST",
      body: msg,
    });

    // Access the actual value of the ref using .value
    if (response && response.status && response.status.value === "success") {
      useNuxtApp().$toast.success("Message envoyé avec succès", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      console.log("Envoyé");
    } else {
      console.error("La requête a retourné une erreur:", response);
    }
  } catch (error) {
    console.error("Erreur lors de la requête:", error);
  }
};
</script>
