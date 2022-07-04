<template>
  <div class="relative overflow-hidden md:-mt-[90vh] -mt-[70vh]">
    <div
      class="flex items-center bg-[#222030] max-w-2xl md:rounded-xl md:h-1/8 md:mt-36 md:m-auto justify-center min-h-full text-center"
    >
      <div
        class="relative rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden sm:my-8 sm:max-w-sm sm:w-full sm:p-6"
      >
        <div
          class="relative rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6"
        >
          <div>
            <div
              class="mx-auto flex items-center justify-center h-12 w-12 rounded-full"
            >
              <slot></slot>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3 class="text-4xl leading-6 font-medium mt-8 text-white">
                Thank you!
              </h3>
              <div class="mt-2">
                <p class="text-sm text-white mt-8">
                  {{ mainText }}
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <slot name="modal-button"></slot>
          </div>
        </div>
        <p class="text-center mt-6 text-[#6C757D] font-medium">
          <slot name="have-account"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainText: {
      type: String,
      default: "",
    },
  },
};
</script>
