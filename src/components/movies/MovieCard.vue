<template>
  <div>
    <router-link to="/dashboard">
      <img
        src="@/assets/joker.jpeg"
        alt="movieimage"
        class="hover:opacity-50 transition ease-in-out duration-500 rounded-lg h-full w-full"
      />
    </router-link>
    <div class="mt-4 text-24 ml-8 md:ml-0">
      <h3 class="text-white md:mb-2 md:mt-2">Loki Mobius (2021)</h3>
      <div class="flex items-center">
        <span class="text-white mr-2">10</span>
        <img
          src="@/assets/svgs/comment.svg"
          alt="comment"
          height="20"
          width="20"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
