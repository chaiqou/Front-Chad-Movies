import { defineRule } from "vee-validate";
import { required, email, min, max, confirmed } from "@vee-validate/rules";
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
defineRule("confirmed", confirmed);

defineRule("lower-case", (value) => {
  if (/^[a-z0-9]+$/.test(value) === true) {
    return true;
  }
  return "Must contain all lowercase letters";
});
