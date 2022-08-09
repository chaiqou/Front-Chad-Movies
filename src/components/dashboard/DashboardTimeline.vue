<template>
  <main class="flex-1 md:mt-16 mt-8 overflow-y-auto">
    <div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1
          class="invisible md:visible text-xl font-semibold mt-12 ml-20 text-white"
        >
          {{ header }}
        </h1>
      </div>

      <div class="max-w-6xl mx-auto px-22 sm:px-6 md:px-8">
        <slot name="header"></slot>
        <div class="py-4">
          <div class="rounded-lg h-24">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: "",
    },
  },
};
</script>
