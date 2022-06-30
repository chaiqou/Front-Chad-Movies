<template>
  <div class="flex items-center h-screen justify-center z-10">
    <div
      class="relative bg-[#222030] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6"
    >
      <div>
        <div
          class="mx-auto flex items-center justify-center h-12 w-12 rounded-full"
        >
          <img src="@/assets/svgs/Done.svg" alt="done" />
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-4xl leading-6 font-medium mt-8 text-white">
            Thank you!
          </h3>
          <div class="mt-2">
            <p class="text-sm text-white mt-8">
              Your account has been activated.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-5 sm:mt-6">
        <router-link
          to="/"
          class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
        >
          Go to my news feed
        </router-link>
      </div>
    </div>
  </div>
</template>
