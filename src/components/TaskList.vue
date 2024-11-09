<script setup>
import { computed, reactive, provide, ref, onMounted } from "vue";
import { http } from "@/plugins/axios";
import { watch } from "vue";

import TaskCard from "./TaskCard.vue";
import TaskAdd from "./TaskAdd.vue";
import TaskFilters from "./TaskFilters.vue";
import TaskPaginator from "./TaskPaginator.vue";
import PageLoader from "./PageLoader.vue";

const tasks = reactive([]);
const categories = reactive([]);
const todayDate = computed(() => {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });
});
const statusOptions = reactive([]);
const totalTasks = ref(0);
const paginationState = reactive({
  page: 1,
  per_page: 10,
  sot_by: "created_at",
  sort_direction: "desc",
  date: new Date().toISOString().substr(0, 10),
  status: "all",
});
const isLoading = ref(false);

provide("statusOptions", statusOptions);
provide("tasks", tasks);

async function loadTasks() {
  const params = new URLSearchParams(paginationState).toString();
  const response = await http.get(`api/v1/tasks?${params}`);
  const data = response.data;

  totalTasks.value = data.total;
  tasks.splice(0, tasks.length);
  tasks.push(...data.data);
}

async function taskCounts() {
  const response = await http.get("api/v1/tasks/task/count");
  statusOptions.splice(0, statusOptions.length);
  statusOptions.push(...response.data.reverse());
}

async function loadCategories() {
  const response = await http.get("api/v1/categories/combo/list");
  categories.push(...response.data);
}

async function updateTaskStatus(taskId, newStatus) {
  const response = await http.put(`api/v1/tasks/${taskId}/status`, { status: newStatus });
  loadTasks();
  taskCounts();
}

watch(paginationState, () => loadTasks());

onMounted(async () => {
  isLoading.value = true;
  try {
    await loadTasks();
    await taskCounts();
    await loadCategories();
  } catch (e) {
    console.error(e);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section class="w-100 h-100 px-4 py-4">
    <div class="w-100 d-flex justify-content-between align-items-center">
      <div>
        <h1>Today's Tasks</h1>
        <small>
          {{ todayDate }}
        </small>
      </div>
      <div></div>
      <TaskAdd
        @created="loadTasks"
        :status="statusOptions"
        :categories="categories"
      />
    </div>

    <PageLoader message="Loading Tasks..." v-if="isLoading" />
    <div v-else>
      <TaskFilters v-model="paginationState.status" />

      <ul class="list-unstyled mt-2">
        <li v-for="(item, index) in tasks" :key="index">
          <TaskCard :task="item" @update-status="updateTaskStatus" />
        </li>
      </ul>

      <TaskPaginator
        :totalItems="totalTasks"
        :itemsPerPage="paginationState.per_page"
        v-model="paginationState.page"
      />
    </div>
  </section>
</template>

<style scoped></style>
