import { defineRule } from "vee-validate";
import { required, email, min, max, confirmed } from "@vee-validate/rules";
import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";

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

defineRule("georgian-keyboard", (value) => {
  if (/^[ა-ჰ]+$/.test(value) === true) {
    return true;
  }
  return "Must contain all Georgian letters";
});

defineRule("english-keyboard", (value) => {
  if (/^[a-zA-Z]+$/.test(value) === true) {
    return true;
  }
  return "Must contain all English letters";
});

configure({
  // Generates an English message locale generator
  generateMessage: localize("english", {
    messages: {
      between: "The {field} value must be between 0:{min} and 1:{max}",
      required: "The {field} field is required",
    },
  }),
});

configure({
  // Generates an English message locale generator
  generateMessage: localize("georgian", {
    messages: {
      between:
        "{field} მნიშვნელობა უნდა იყოს მინიმუმ 0:{min} და მაქსიმუმ 1:{max}",
      required: "{field} ველი სავალდებულოა",
    },
  }),
});
