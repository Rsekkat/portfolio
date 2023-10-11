<template>
  <div>
    <div class="bg-black">
      <section
        id="features"
        class="relative block px-6 py-10 md:py-12 2xl:px-6 md:px-30 border-t border-b border-neutral-900 bg-neutral-900/30 flex flex-col items-center"
      >
        <h1
          class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-justify pb-8"
        >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r"
            style="
              background: linear-gradient(rgb(80, 70, 229), rgb(43, 49, 203));
              background-clip: text;
              -webkit-background-clip: text;
              color: transparent;
            "
            >About</span
          >
        </h1>
        <div class="relative mx-auto max-w-5xl text-justify">
          <h2
            class="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl"
          >
            Rayan Sekkat dev web fullstack / devOps 
          </h2>
        </div>

        <div
          class="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div
            class="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-justify shadow"
          >
            <div
              class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
              style="
                background-image: linear-gradient(
                  rgb(80, 70, 229) 0%,
                  rgb(43, 49, 203) 100%
                );
                border-color: rgb(93, 79, 240);
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-color-swatch"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"
                ></path>
                <path
                  d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"
                ></path>
                <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                <line x1="17" y1="17" x2="17" y2="17.01"></line>
              </svg>
            </div>
            <h3 class="mt-6 text-gray-400 text-center">Fullstack expertise</h3>
            <p
              class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400"
            >
              I have a solid grasp of front-end and back-end technologies,
              enabling me to design robust solutions, from user interface to
              database.
            </p>
          </div>

          <div
            class="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-justify shadow"
          >
            <div
              class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
              style="
                background-image: linear-gradient(
                  rgb(80, 70, 229) 0%,
                  rgb(43, 49, 203) 100%
                );
                border-color: rgb(93, 79, 240);
              "
            >
              <img src="../../assets/idea.png" />
            </div>
            <h3 class="mt-6 text-gray-400 text-center">Technical creativity</h3>
            <p
              class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400"
            >
              My approach is focused on innovation. Every project is an
              opportunity to explore new solutions.
            </p>
          </div>

          <div
            class="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-justify shadow"
          >
            <div
              class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
              style="
                background-image: linear-gradient(
                  rgb(80, 70, 229) 0%,
                  rgb(43, 49, 203) 100%
                );
                border-color: rgb(93, 79, 240);
              "
            >
              <img src="../../assets/infinity.png" />
            </div>
            <h3 class="mt-6 text-gray-400 text-center">devOps</h3>
            <p
              class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400"
            >
              My approach is focused on innovation. Every project is an
              opportunity to explore new solutions.
            </p>
          </div>

          <div
            class="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-justify shadow"
          >
            <div
              class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
              style="
                background-image: linear-gradient(
                  rgb(80, 70, 229) 0%,
                  rgb(43, 49, 203) 100%
                );
                border-color: rgb(93, 79, 240);
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-tools"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                <polyline points="12 8 7 3 3 7 8 12"></polyline>
                <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                <polyline points="16 12 21 17 17 21 12 16"></polyline>
                <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
              </svg>
            </div>
            <h3 class="mt-6 text-gray-400 text-center">Quality first</h3>
            <p
              class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400"
            >
              My primary concern is code quality and user experience. Every line
              of code I write is scrupulously scrutinized to guarantee reliable,
              optimal performance.
            </p>
          </div>
          <div
            class="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-justify shadow"
          >
            <div
              class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
              style="
                background-image: linear-gradient(
                  rgb(80, 70, 229) 0%,
                  rgb(43, 49, 203) 100%
                );
                border-color: rgb(93, 79, 240);
              "
            >
              <img src="../../assets/collab.png" />
            </div>
            <h3 class="mt-6 text-gray-400 text-center">Transparency and collaboration</h3>
            <p
              class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400"
            >
              I value open communication and close collaboration with my
              customers. My aim is to fully understand their needs and satisfy
              them to the best of my ability.
            </p>
          </div>
          <div
            class="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-justify shadow"
          >
            <div
              class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
              style="
                background-image: linear-gradient(
                  rgb(80, 70, 229) 0%,
                  rgb(43, 49, 203) 100%
                );
                border-color: rgb(93, 79, 240);
              "
            >
              <img src="../../assets/deadlines.png" />
            </div>
            <h3 class="mt-6 text-gray-400 text-center">Respect for deadlines</h3>
            <p
              class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400"
            >
              I am committed to rigorously respecting deadlines in order to
              deliver your projects on time, without compromising on quality.
            </p>
          </div>
        </div>
        <!-- <div
          class="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style="
            background-image: linear-gradient(
              to right top,
              rgba(79, 70, 229, 0.2) 0%,
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
              rgba(220, 38, 38, 0.2) 0%,
              transparent 50%,
              transparent 100%
            );
            border-color: rgba(92, 79, 240, 0.2);
          "
        ></div> -->
      </section>
    </div>
  </div>
</template>
