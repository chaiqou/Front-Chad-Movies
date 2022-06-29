<template>
  <div class="relative opacity-0.5">
    <div
      class="flex items-center md:bg-[#222030] md:max-w-2xl md:rounded-xl md:h-1/2 md:mt-36 md:m-auto justify-center min-h-full p-4 text-center"
    >
      <div
        class="relative rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden sm:my-8 sm:max-w-sm sm:w-full sm:p-6"
      >
        <div
          class="mx-auto flex items-center justify-center h-12 w-12 mt-12 md:mt-0 whitespace-nowrap"
        >
          <h1 class="font-medium text-white text-2xl leading-[120%]">
            Create an account
          </h1>
        </div>
        <div class="text-center">
          <h3 class="font-normal text-[#6C757D] text-base mb-12">
            Start your journey!
          </h3>
        </div>
        <Form class="space-y-4">
          <base-input
            label="Name"
            name="name"
            type="text"
            placeholder="Enter your name"
            :value="name"
            @input="onInput"
          />
          <base-input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            :value="name"
            @input="onInput"
          />
          <base-input
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            :value="name"
            @input="onInput"
          />
          <base-input
            label="Confirm Password"
            name="confirm"
            type="password"
            placeholder="Password"
            :value="name"
            @input="onInput"
          />
          <div class="mt-5 sm:mt-6 items-center text-center">
            <button
              type="button"
              class="inline-flex justify-center w-full mt-4 rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
            >
              Get Started
            </button>
            <button
              type="button"
              class="flex justify-center w-full mt-4 rounded-md shadow-sm px-4 py-2 border border-white text-base font-medium text-white"
            >
              <img src="@/assets/svg/google.svg" alt="Google" class="mr-2" />

              Sign in with Google
            </button>
          </div>
          <p class="text-center text-[#6C757D] font-medium mt-2">
            Already have an account?
            <router-link class="text-[#0D6EFD] underline" to="/login"
              >Log in</router-link
            >
          </p>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "../components/form/BaseInput.vue";
export default {
  components: { BaseInput },
};
</script>
