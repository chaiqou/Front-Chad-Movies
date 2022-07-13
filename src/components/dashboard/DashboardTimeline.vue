<template>
  <main class="flex-1">
    <div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      <div class="max-w-7xl mx-auto px-22 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <slot name="header"></slot>
        <div class="py-4">
          <div class="rounded-lg h-24">
            <slot></slot>
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </div>
  </main>
</template>
