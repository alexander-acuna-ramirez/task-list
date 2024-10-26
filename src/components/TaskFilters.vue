<template>
  <div class="w-100 d-flex my-4">
    <div class="d-flex justify-content-start w-100">
      <div>
        <div class="text-primary fs-5 me-3">
          <strong> All </strong>

          <span class="badge rounded-pill bg-primary">
            99+
            <span class="visually-hidden">unread messages</span>
          </span>
        </div>
      </div>
      <div v-for="(option, index) in statusOptions" :key="index">
        <div class="text-secondary fs-5 me-4">
          {{ option.label }}

          <span class="badge rounded-pill bg-primary">
            99+
            <span class="visually-hidden">unread messages</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const statusOptions = inject("statusOptions");

</script>
