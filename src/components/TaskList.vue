<script setup>
import { computed, reactive, provide, ref, onMounted } from "vue";
import { tasksData } from "../data";
import TaskCard from "./TaskCard.vue";
import TaskAdd from "./TaskAdd.vue";
import TaskFilters from "./TaskFilters.vue";
import { useAuthStore } from "@/stores/authStore";
import { http } from "../plugins/axios";

//const tasks = reactive(tasksData);
const tasks = reactive([]);
const taskFilter = ref("all");
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
const authStore = useAuthStore();
const today = new Date().toISOString().split("T")[0];

const paginationState = reactive({
  page: 1,
  per_page: 10,
  sot_by: "created_at",
  sort_direction: "desc",
  created_at: new Date().toISOString().substr(0, 10)
})

const filteredTasks = computed(() => {
  return tasks.filter((task) => {
    const isToday = task.date === today;
    const hasStatus = taskFilter.value === 'all' || taskFilter.value === task.status;
    return isToday && hasStatus;
  });
});

provide("statusOptions", statusOptions);
provide("tasks", tasks);

function handleTaskAdded(task) {
  tasks.push(task);
}

function updateTaskStatus(taskId, newStatus){
  const task = tasks.find(task => task.id === taskId);
  if(task){
    task.status = newStatus;
  }
}

async function loadTasks(){
  const params = new URLSearchParams(paginationState).toString()
  const response = await http.get(`api/v1/tasks?${params}`);
  const data = response.data;
  
  tasks.push(...data.data);

}

onMounted(() => {
  loadTasks();
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
      <div>
      </div>

      <TaskAdd @created="handleTaskAdded" />
    </div>

    <TaskFilters v-model="taskFilter"/>

    <ul class="list-unstyled mt-2">
      <li v-for="(item, index) in tasks" :key="index">
        <TaskCard :task="item" @update-status="updateTaskStatus"/>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
