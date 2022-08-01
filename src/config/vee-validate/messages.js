import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";

configure({
  generateMessage: localize("en", {
    fields: {
      password: {
        required: "Password cannot be empty",
        min: "Password must be at least 8 characters",
      },
      email: {
        required: "Email cannot be empty",
        email: "Email must be a valid email address",
        min: "Email must be at least 3 characters",
      },
      name: {
        required: "Name cannot be empty",
        min: "Name must be at least 3 characters",
        max: "Name must be at most 15 characters",
      },
      confirm: {
        required: "Confirm password cannot be empty",
        confirmed: "Confirm password must match password",
        min: "Confirm password must be at least 8 characters",
        max: "Confirm password must be at most 15 characters",
      },

      title_en: {
        required: "English title cannot be empty",
        min: "English title must be at least 3 characters",
        max: "English title must be at most 15 characters",
        englishKeyboard: "English title must contain all English letters",
      },
      title_ka: {
        required: "Georgian title cannot be empty",
        min: "Georgian title must be at least 3 characters",
        max: "Georgian title must be at most 15 characters",
        georgianKeyboard: "Georgian title must contain all Georgian letters",
      },
      director_en: {
        required: "English director cannot be empty",
        min: "English director must be at least 3 characters",
        max: "English director must be at most 15 characters",
        englishKeyboard: "English director must contain all English letters",
      },
      director_ka: {
        required: "Georgian director cannot be empty",
        min: "Georgian director must be at least 3 characters",
        max: "Georgian director must be at most 15 characters",
        georgianKeyboard: "Georgian director must contain all Georgian letters",
      },
      description_en: {
        required: "English description cannot be empty",
        min: "English description must be at least 3 characters",
        max: "English description must be at most 15 characters",
        englishKeyboard: "English description must contain all English letters",
      },
      description_ka: {
        required: "Georgian description cannot be empty",
        min: "Georgian description must be at least 3 characters",
        max: "Georgian description must be at most 15 characters",
        georgianKeyboard:
          "Georgian description must contain all Georgian letters",
      },
      year: {
        required: "Year cannot be empty",
        numeric: "Year must be a number",
      },
      budget: {
        required: "Budget cannot be empty",
        numeric: "Budget must be a number",
      },
      thumbnail: {
        required: "Thumbnail cannot be empty",
      },
      quote_en: {
        required: "English quote cannot be empty",
        min: "English quote must be at least 3 characters",
        max: "English quote must be at most 15 characters",
        englishKeyboard: "English quote must contain all English letters",
      },
      quote_ka: {
        required: "Georgian quote cannot be empty",
        min: "Georgian quote must be at least 3 characters",
        max: "Georgian quote must be at most 15 characters",
        georgianKeyboard: "Georgian quote must contain all Georgian letters",
      },
      movie_name: {
        required: "Movie name cannot be empty",
      },
    },
  }),
});

configure({
  generateMessage: localize("ka", {
    fields: {
      password: {
        required: "პაროლის ველი არ შეიძლება იყოს ცარიელი",
        min: "პაროლი უნდა იყოს მინიმუმ 8 სიმბოლო",
      },
      email: {
        required: "ემაილის ველი არ შეიძლება იყოს ცარიელი",
        email: "ემაილის ველი უნდა იყოს ემაილის ფორმატი",
        min: "ემაილის ველი უნდა იყოს მინიმუმ 3 სიმბოლო",
      },
      name: {
        required: "სახელის ველი არ შეიძლება იყოს ცარიელი",
        min: "სახელის ველი უნდა იყოს მინიმუმ 3 სიმბოლო",
        max: "სახელის ველი უნდა იყოს მაქსიმუმ 15 სიმბოლო",
      },
      confirm: {
        required: "დადასტურების ველი არ შეიძლება იყოს ცარიელი",
        confirmed: "დადასტურების ველი უნდა ემთხვეოდეს პაროლის ველს",
        min: "დადასტურის ველი უნდა იყოს მინიმუმ 8 სიმბოლო",
        max: "დადასტურის ველი უნდა იყოს მაქსიმუმ 15 სიმბოლო",
      },

      title_en: {
        required: "ინგლისური სათაური არ შეიძლება იყოს ცარიელი",
        min: "ინგლისური სათაური უნდა იყოს მინიმუმ 3 სიმბოლო",
        max: "ინგლისური სათაური უნდა იყოს მაქსიმუმ 15 სიმბოლო",
        englishKeyboard:
          "ინგლისური სათაური უნდა შეიცავდეს მხოლოდ ლათინურ ასოებს",
      },
      title_ka: {
        required: "ქართული სათაური არ შეიძლება იყოს ცარიელი",
        min: "ქართული სათაური უნდა იყოს მინიმუმ 3 სიმბოლო",
        max: "ქართული სათაური უნდა იყოს მაქსიმუმ 15 სიმბოლო",
        georgianKeyboard: "ქართული სათაური უნდა შეიცავდეს მხოლოდ ქართულ ასოებს",
      },
      director_en: {
        required: "რეჟისორის სახელი არ შეიძლება იყოს ცარიელი",
        min: "რეჟისორის სახელი უნდა იყოს მინიმუმ 3 სიმბოლო",
        max: "რეჟისორის სახელი უნდა იყოს მაქსიმუმ 15 სიმბოლო",
        georgianKeyboard:
          "რეჟისორის სახელი უნდა შეიცავდეს მხოლოდ ლათინურ ასოებს",
      },
      director_ka: {
        required: "რეჟისორის სახელი არ შეიძლება იყოს ცარიელი",
        min: "რეჟისორის სახელი უნდა იყოს მინიმუმ 3 სიმბოლო",
        max: "რეჟისორის სახელი უნდა იყოს მაქსიმუმ 15 სიმბოლო",
        georgianKeyboard: "რეჟისორის სახელი უნდა შეიცავდეს ქართულ ასოებს",
      },
      description_en: {
        required: "ინგლისური აღწერის ტექსტი არ შეიძლება იყოს ცარიელი",
        min: "ინგლისური აღწერის ტექსტი უნდა იყოს მინიმუმ 3 სიმბოლო",
        max: "ინგლისური აღწერის ტექსტი უნდა იყოს მაქსიმუმ 500 სიმბოლო",
        georgianKeyboard:
          "ინგლისური აღწერის ტექსტი უნდა შეიცავდეს მხოლოდ ლათინურ ასოებს",
      },
      description_ka: {
        required: "ქართული აღწერის ტექსტი არ შეიძლება იყოს ცარიელი",
        min: "ქართული აღწერის ტექსტი უნდა იყოს მინიმუმ 3 სიმბოლო",
        max: "ქართული აღწერის ტექსტი უნდა იყოს მაქსიმუმ 500 სიმბოლო",
        englishKeyboard:
          "ქართული აღწერის ტექსტი უნდა შეიცავდეს მხოლოდ ქართულ ასოებს",
      },
      year: {
        required: "წელი არ შეიძლება იყოს ცარიელი",
        numeric: "წელი უნდა იყოს მთელი რიცხვი",
      },
      budget: {
        required: "ბიუჯეტი არ შეიძლება იყოს ცარიელი",
        numeric: "ბიუჯეტი უნდა იყოს მთელი რიცხვი",
      },
      thumbnail: {
        required: "სურათი არ შეიძლება იყოს ცარიელი",
      },

      quote_en: {
        required: "ინგლისური ციტატის ტექსტი არ შეიძლება იყოს ცარიელი",
        min: "ინგლისური ციტატის ტექსტი უნდა იყოს მინიმუმ 3 სიმბოლო",
        max: "ინგლისური ციტატის ტექსტი უნდა იყოს მაქსიმუმ 15 სიმბოლო",
        englishKeyboard:
          "ინგლისური ციტატის ტექსტი უნდა შეიცავდეს მხოლოდ ლათინურ ასოებს",
      },
      quote_ka: {
        required: "ქართული ციტატის ტექსტი არ შეიძლება იყოს ცარიელი",
        min: "ქართული ციტატის ტექსტი უნდა იყოს მინიმუმ 3 სიმბოლო",
        max: "ქართული ციტატის ტექსტი უნდა იყოს მაქსიმუმ 15 სიმბოლო",
        englishKeyboard:
          "ქართული ციტატის ტექსტი უნდა შეიცავდეს მხოლოდ ქართულ ასოებს",
      },
      movie_name: {
        required: "ფილმის სახელი არ შეიძლება იყოს ცარიელი",
      },
    },
  }),
});
