<template>
  <div>
    <button
      @click.prevent="addDialog = !addDialog"
      class="btn btn-primary d-flex align-items-center justify-content-center"
    >
      <i class="bi bi-plus-lg fs-4 me-2"></i>
      Add Task
    </button>
    <GDialog
      v-model="addDialog"
      :border-radius="'8px'"
      width="100%"
      height="auto"
      :scrollable="true"
      background="white"
    >
      <div class="card w-100">
        <div class="card-header">
          <h4>
            <strong>
              <span> Add Task </span>
            </strong>
          </h4>
        </div>

        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mb-2">
              <label for="title" class="form-label">Title</label>
              <input
                type="text"
                id="title"
                class="form-control"
                v-model="task.title"
              />
            </div>

            <div class="col-md-6 mb-2">
              <label for="category" class="form-label">Category</label>
              <select
                name="category"
                id="category"
                class="form-control"
                v-model="task.category"
              >
                <option
                  :value="category.name"
                  v-for="category in taskCategories"
                  :key="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-2">
              <label for="date" class="form-label">Date</label>
              <input
                type="date"
                id="date"
                class="form-control"
                v-model="task.date"
              />
            </div>

            <div class="col-md-6 mb-2">
              <label for="category" class="form-label">Status</label>
              <select
                name="category"
                id="category"
                class="form-control"
                v-model="task.status"
                disabled
              >
                <option
                  :value="status.value"
                  v-for="status in statusOptions"
                  :key="status.value"
                >
                  {{ status.label }}
                </option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-2">
              <label for="startTime" class="form-label">Start Time</label>
              <input
                type="time"
                id="startTime"
                class="form-control"
                v-model="task.startTime"
              />
            </div>

            <div class="col-md-6 mb-2">
              <label for="endTime" class="form-label">End Time</label>
              <input
                type="time"
                id="endTime"
                class="form-control"
                v-model="task.endTime"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 mb-2">
              <label for="description" class="form-label">Description</label>
              <textarea
                id="description"
                class="form-control"
                rows="3"
                v-model="task.description"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="card-footer d-flex justify-content-end">
          <button
            @click="addTask()"
            class="btn btn-primary me-2 d-flex align-items-center justify-content-center"
          >
            <i class="bi bi-plus fs-4"></i>
            Add
          </button>

          <button
            @click="close()"
            class="btn btn-secondary d-flex align-items-center justify-content-center"
          >
            <i class="bi bi-x fs-4"></i>
            Cancel
          </button>
        </div>
      </div>
    </GDialog>
  </div>
</template>

<script setup>
import { GDialog } from "gitart-vue-dialog";
import { taskCategories } from "../data";
import { ref, reactive, watch } from "vue";
import { v4 as uuidv4 } from 'uuid';


const emit = defineEmits(["created"]);

const addDialog = ref(false);
const statusOptions = reactive([
  {
    label: "Open",
    value: "open",
  },
  {
    label: "Closed",
    value: "closed",
  },
  {
    label: "Archived",
    value: "archived",
  },
]);

const task = reactive({
  id: "",
  title: "",
  startTime: "",
  endTime: "",
  date: new Date().toISOString().substr(0, 10),
  category: "Work",
  description: "",
  status: "open",
});

function close(){
  addDialog.value = false;
}

function addTask(){
  if(task.title && task.startTime && task.endTime){
    emit("created", {...task, id: uuidv4() });
    close();
  }

  return;
}

watch(addDialog, (current, oldvalue) => {
  if (!current) {
    Object.assign(task, {
      id: "",
      title: "",
      startTime: "",
      endTime: "",
      date: new Date().toISOString().substr(0, 10),
      category: "Work",
      description: "",
      status: "open",
    });
  }
});
</script>
