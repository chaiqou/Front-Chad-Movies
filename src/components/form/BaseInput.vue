<template>
  <label class="text-md flex font-bold text-white whitespace-normal"
    >{{ label }}
    <p class="text-red-500 ml-1">*</p></label
  >
  <div class="flex-col">
    <Field
      v-bind="$attrs"
      :name="errorName"
      class="inline-block w-full placeholder-[#626262] rounded-md border border-[#626262] bg-[#CED4DA] whitespace-nowrap"
      :placeholder="placeholder"
    />
    <p class="text-sm text-red-500">
      <ErrorMessage :name="errorName" />
    </p>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
  components: { Field, ErrorMessage },
  props: {
    label: {
      type: String,
      default: "",
    },
    errorName: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>
