<template>
  <div>
    <Field
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modalValue', $event.target.value);
        },
      }"
      :placeholder="placeholder"
      :value="modelValue"
      :name="errorName"
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
