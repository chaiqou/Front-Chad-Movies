<template>
  <div class="flex">
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-start min-h-screen min-w-screen sm:items-center justify-center text-center sm:p-0"
      >
        <div
          class="relative bg-[#11101A] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden sm:my-8 max-w-2xl p-12"
        >
          <div class="absolute top-0 right-0 pt-6 pr-4">
            <button
              type="button"
              class="bg-[#11101A] rounded-md text-gray-400 hover:text-gray-500"
            >
              <img src="@/assets/svgs/exit.svg" alt="exit" />
            </button>
          </div>
          <div class="sm:flex sm:items-start">
            <div class="text-center">
              <h3 class="text-lg text-center leading-6 font-medium text-white">
                Add movie
              </h3>
              <div
                class="border border-b-0 opacity-25 text-[#EFEFEF] mt-4"
              ></div>
              <div class="md:text-left text-white mt-8">Nikoloz Lomtadze</div>
              <div class="mt-16 min-w-screen space-y-8">
                <input class="bg-[#11101A] w-full" type="text" />
                <input class="bg-[#11101A] w-full" type="text" />
                <input class="bg-[#11101A] w-full" type="text" />
                <input class="bg-[#11101A] w-full" type="text" />
                <input class="bg-[#11101A] w-full" type="text" />
                <input class="bg-[#11101A] w-full" type="text" />
                <input class="bg-[#11101A] w-full" type="text" />
                <input class="bg-[#11101A] w-full" type="text" />
              </div>
            </div>
          </div>
          <button
            class="flex w-full justify-center mt-4 rounded-md px-4 py-2 bg-[#E31221] text-base font-medium text-white"
          >
            Add movie
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
