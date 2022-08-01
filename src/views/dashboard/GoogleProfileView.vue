<template>
  <DashboardLayout />

  <DashboardTimeline :header="$t('myprofile')">
    <div
      class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-[#11101A] w-full mb-6 shadow-lg rounded-xl mt-16"
    >
      <div class="px-6">
        <div class="flex flex-wrap justify-center">
          <div class="w-full flex justify-center">
            <div class="relative">
              <img
                v-if="profile_image"
                :src="getUserProfilePhoto()"
                alt="profile image"
                class="shadow-xl rounded-lg align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
              />
              <img
                v-else
                src="@/assets/images/vue-profile.jpg"
                alt="vue profile photo"
                class="shadow-xl rounded-lg align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
              />
            </div>
          </div>
        </div>
        <FormVee
          enctype="multipart/form-data"
          @submit="onSubmitEditGoogleProfile"
        >
          <div class="w-full text-center mt-20">
            <div class="flex justify-center lg:pt-4 pt-8 pb-0">
              <div class="p-3 text-center">
                <div class="text-lg font-bold block text-white">
                  <label class="p-1 text-white font-bold" for="dropzone">{{
                    $t("uploadphoto")
                  }}</label>
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
            label="Username"
            error-name="name"
            rules="min:3|max:255"
            type="text"
            :placeholder="$t('nameplaceholder')"
          />
          <div class="mt-4">
            <label
              class="text-md flex font-bold text-white whitespace-normal mb-2"
              for="email"
              >Email</label
            >
            <p
              id="email"
              class="border flex justify-between rounded-lg bg-[#CED4DA] t border-gray-500 p-4 font-bold text-sm"
            >
              <span>{{ email }}</span>
              <span>Eng</span>
            </p>
          </div>
          <button
            :disabled="form_submmiting"
            class="flex w-full justify-center mt-4 rounded-md px-4 py-2 bg-[#E31221] text-base font-medium text-white"
          >
            {{
              form_submmiting ? `${$t("pleasewait")}` : `${$t("savechanges")}`
            }}
          </button>
        </FormVee>
      </div>
    </div>
  </DashboardTimeline>
</template>

<script>
import DashboardLayout from "@/components/dashboard/DashboardLayout.vue";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import axios from "@/config/axios/index";

import { Form as FormVee, Field } from "vee-validate";
import { useMovieListStore } from "@/stores/useMovieListStore";
import { mapWritableState } from "pinia";
import { useUserProfileStore } from "@/stores/useUserProfileStore";

export default {
  components: { DashboardLayout, DashboardTimeline, FormVee, BaseInput, Field },
  computed: {
    ...mapWritableState(useUserProfileStore, [
      "email",
      "name",
      "profile_image",
      "form_submmiting",
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
    onSubmitEditGoogleProfile() {
      this.form_submmiting = true;

      axios
        .put("profile", {
          name: this.name,
          profile_image: this.profile_image,
        })
        .then(() => {
          this.form_submmiting = false;
          this.$router.push("/dashboard");
        })
        .catch(() => {
          this.form_submmiting = false;
        });
    },
  },
};
</script>
