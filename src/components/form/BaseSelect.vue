<template>
  <Field
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modalValue', $event.target.value);
      },
    }"
    :placeholder="placeholder"
    :value="modelValue"
    class="bg-[#11101A] w-full rounded-md placeholder-white text-white"
    as="select"
  >
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.name"
      :selected="option === modelValue"
    >
      {{ option.name }}
    </option>
  </Field>
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
    modelValue: {
      type: [String, Number],
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
  },
  emits: ["update:modalValue"],
};
</script>
