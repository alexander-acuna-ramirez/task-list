<template>
  <div class="w-100 d-flex my-4">
    <div class="d-flex justify-content-start w-100">
      <div v-for="(option, index) in statusOptions" :key="index">
        <div
          class="fs-5 me-4"
          :class="{
            'text-primary': selectFilter === option.value,
            'text-secondary': selectFilter !== option.value,
          }"
          style="cursor: pointer"
          @click="selectFilter = option.value"
        >
          <strong>
            {{ option.label }}
          </strong>

          <span class="badge rounded-pill bg-primary">
            {{ option.count }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
const statusOptions = inject("statusOptions");

const selectFilter = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
