<template>
  <Field
    v-bind="$attrs"
    :name="errorName"
    :placeholder="placeholder"
    class="bg-[#11101A] w-full rounded-md placeholder-white text-white"
    type="text"
  />
</template>

<script>
import { Field } from "vee-validate";

export default {
  components: { Field },
  props: {
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
