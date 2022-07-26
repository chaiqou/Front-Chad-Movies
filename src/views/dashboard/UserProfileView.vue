<template>
  <DashboardLayout />
  <DashboardTimeline>
    <div
      class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-[#11101A] w-full mb-6 shadow-lg rounded-xl mt-16"
    >
      <div class="px-6">
        <div class="flex flex-wrap justify-center">
          <div class="w-full flex justify-center">
            <div v-if="profile_image" class="relative">
              <img
                :src="getUserProfilePhoto()"
                alt="movieimages"
                class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
              />
            </div>
          </div>
        </div>
        <FormVee enctype="multipart/form-data" @submit="onSubmitForm">
          <div class="w-full text-center mt-20">
            <div class="flex justify-center lg:pt-4 pt-8 pb-0">
              <div class="p-3 text-center">
                <div class="text-lg font-bold block text-white">
                  <label class="p-1 text-white font-bold" for="dropzone"
                    >Upload new photo</label
                  >
                  <Field
                    id="dropzone"
                    v-model="profile_image"
                    type="file"
                    name="profile_image"
                    class="hidden"
                    @change="selectFile"
                  />
                </div>
              </div>
            </div>
          </div>
          <base-input
            v-model="name"
            :label="$t('firstname')"
            error-name="name"
            rules="min:3|max:255"
            type="text"
            :placeholder="$t('nameplaceholder')"
          />
          <base-input
            v-model="email"
            :label="$t('email')"
            error-name="email"
            rules="email"
            type="email"
            :placeholder="$t('emailplaceholder')"
          />
          <base-input
            v-model="password"
            :label="$t('password')"
            error-name="password"
            name="password"
            rules="min:8|max:15"
            type="password"
            :placeholder="$t('passwordplaceholder')"
          />
          <base-input
            v-model="password_confirmation"
            :label="$t('confirmpassword')"
            error-name="confirm"
            rules="confirmed:@password"
            type="password"
            :placeholder="$t('confirmpasswordplaceholder')"
          />
          <button
            :disabled="form_submmiting"
            class="flex w-full justify-center mt-4 rounded-md px-4 py-2 bg-[#E31221] text-base font-medium text-white"
          >
            {{ form_submmiting ? "Please wait..." : "Save changes" }}
          </button>
        </FormVee>
      </div>
    </div>
  </DashboardTimeline>
</template>

<script>
import { mapWritableState } from "pinia";
import { useUserProfileStore } from "@/stores/useUserProfileStore";
import DashboardLayout from "@/components/dashboard/DashboardLayout.vue";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
import { Form as FormVee, Field } from "vee-validate";
import BaseInput from "@/components/form/BaseInput.vue";
import axios from "@/config/axios/index";
import { useMovieListStore } from "@/stores/useMovieListStore";

export default {
  components: { DashboardLayout, DashboardTimeline, FormVee, BaseInput, Field },
  computed: {
    ...mapWritableState(useUserProfileStore, [
      "email",
      "name",
      "profile_image",
      "loading",
      "form_submmiting",
      "password",
      "password_confirmation",
      "getUserData",
    ]),
    ...mapWritableState(useMovieListStore, ["backurl"]),
  },
  methods: {
    getUserProfilePhoto() {
      let profileImage =
        this.profile_image.length > 50
          ? this.profile_image
          : this.backurl + this.profile_image;

      return profileImage;
    },
    selectFile(event) {
      let file = event.target.files[0];
      this.profile_image = file;

      let reader = new FileReader();
      reader.onload = (e) => {
        this.profile_image = e.target.result;
      };

      if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
      }
    },
    onSubmitForm() {
      this.form_submmiting = true;

      let fields = new FormData();
      for (let key in this.getUserData) {
        fields.append(key, this.getUserData[key]);
      }

      axios
        .put("profile", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          profile_image: this.profile_image,
        })
        .then(() => {
          this.form_submmiting = false;
        })
        .catch(() => {
          this.form_submmiting = false;
        });
    },
  },
};
</script>
