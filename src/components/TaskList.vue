<script setup>
import { computed, reactive, provide } from "vue";
import { tasksData } from "../data";
import TaskCard from "./TaskCard.vue";
import TaskAdd from "./TaskAdd.vue";
import TaskFilters from "./TaskFilters.vue";

const tasks = reactive(tasksData);
const todayDate = computed(() => {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });
});

const statusOptions = reactive([
  {
    label: "Open",
    value: "open",
    count: tasks.reduce((p, c) => {
      if (p.status == "open") c += 1;
      return c;
    }, 0),
  },
  {
    label: "Closed",
    value: "closed",
    count: tasks.reduce((p, c) => {
      if (p.status == "closed") c += 1;
      return c;
    }, 0),
  },
  {
    label: "Archived",
    value: "archived",
    count: tasks.reduce((p, c) => {
      if (p.status == "archived") c += 1;
      return c;
    }, 0),
  },
]);

provide("statusOptions", statusOptions);

function handleTaskAdded(task) {
  tasks.push(task);
}
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

      <TaskAdd @created="handleTaskAdded" />
    </div>

    <TaskFilters />

    <ul class="list-unstyled mt-2">
      <li v-for="(item, index) in tasks" :key="index">
        <TaskCard :task="item" />
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
