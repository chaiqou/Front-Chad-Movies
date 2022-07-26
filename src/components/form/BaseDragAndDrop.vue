<template>
  <div
    class="w-full h-10 flex whitespace-nowrap justify-left py-6 items-center text-white space-x-2 border border-gray-600 rounded-md"
    :class="[active ? 'bg-[#9747FF66]' : '']"
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="dragAndDropFile"
    @change="selectFile"
  >
    <span class="ml-3"> <IconCamera /></span>

    <span>Drag or drop File or</span>
    <label class="p-1 text-white bg-[#9747FF66] font-bold" for="dropzone"
      >Choose File</label
    >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    toggleActive: {
      type: Function,
      default: () => {},
    },
    dragAndDropFile: {
      type: Function,
      default: () => {},
    },
    selectFile: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
