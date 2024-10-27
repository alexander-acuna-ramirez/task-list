<template>
  <div class="w-100 d-flex my-4">
    <div class="d-flex justify-content-start w-100">
      <div>
        <div
          class="fs-5 me-3"
          :class="{
            'text-primary': selectFilter === 'all',
            'text-secondary': selectFilter !== 'all',
          }"
          style="cursor: pointer;"
          @click="selectFilter = 'all'"
        >
          <strong> All </strong>

          <span class="badge rounded-pill bg-primary">
            {{ allTasksCount }}
          </span>
        </div>
      </div>
      <div v-for="(option, index) in statusOptions" :key="index">
        <div
          class="fs-5 me-4"
          :class="{
            'text-primary': selectFilter === option.value,
            'text-secondary': selectFilter !== option.value,
          }"
          style="cursor: pointer;"
          @click="selectFilter = option.value"
        >
          <strong>
            {{ option.label }}
          </strong>

          <span class="badge rounded-pill bg-primary">
            {{ getStatusCount(option.value) }}
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
const today = new Date().toISOString().split("T")[0];
const statusOptions = inject("statusOptions");
const tasks = inject("tasks");

const allTasksCount = computed(() => {
  return tasks.filter(task => task.date === today).length;
});

function getStatusCount(status) {
  return tasks.filter((task) => task.date === today)
              .filter((task) => task.status === status).length;
}

const selectFilter = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
