import { defineRule } from "vee-validate";
import { required, email, min, max } from "@vee-validate/rules";
import { configure } from "vee-validate";

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: true,
});

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
