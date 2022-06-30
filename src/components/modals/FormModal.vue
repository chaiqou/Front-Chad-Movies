<template>
  <div class="relative h-100 overflow-hidden -mt-[800px] backdrop-blur-sm">
    <div
      class="flex items-center md:bg-[#222030] md:max-w-2xl md:rounded-xl md:h-1/8 md:mt-36 md:m-auto justify-center min-h-full p-4 text-center"
    >
      <div
        class="relative rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden sm:my-8 sm:max-w-sm sm:w-full sm:p-6"
      >
        <div
          class="mx-auto flex items-center justify-center h-12 md:h-4 w-12 mt-12 md:mt-0 whitespace-nowrap"
        >
          <h1 class="font-medium text-white text-2xl leading-[120%]">
            <slot name="main-text"></slot>
          </h1>
        </div>
        <div class="text-center">
          <h3 class="font-normal text-[#6C757D] text-base mb-12">
            <slot name="minor-text"></slot>
          </h3>
        </div>
        <slot></slot>
        <p class="text-center text-[#6C757D] font-medium mt-2">
          Already have an account?
          <slot name="have-account"></slot>
        </p>
      </div>
    </div>
  </div>
</template>
