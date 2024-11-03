<template>
  <div class="w-100 d-flex justify-content-center flex-column align-items-center" style="min-height: 400px">
    <span class="spinner-border spinner-border-sm me-2 fs-3"></span>
    <span class="fs-4"
      ><strong>
        {{ message }}
      </strong></span
    >
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>
