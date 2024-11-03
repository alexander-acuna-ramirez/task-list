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
          <div class="row" v-if="errors.length > 0">
            <div class="col-md-12 mb-2">
              <div class="alert alert-danger mt-3">
                <ul>
                  <li v-for="(error, idx) in errors" :key="idx">
                    {{ error }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-2">
              <label for="title" class="form-label">Title</label>
              <input
                :disabled="isLoading"
                type="text"
                id="title"
                class="form-control"
                v-model="task.title"
              />
            </div>

            <div class="col-md-6 mb-2">
              <label for="category" class="form-label">Category</label>
              <select
                :disabled="isLoading"
                name="category"
                id="category"
                class="form-control"
                v-model="task.category_id"
              >
                <option
                  :value="category.id"
                  v-for="category in categories"
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
                :disabled="isLoading"
                type="date"
                id="date"
                class="form-control"
                v-model="task.date"
              />
            </div>

            <div class="col-md-6 mb-2">
              <label for="category" class="form-label">Status</label>
              <select
                :disabled="isLoading"
                name="category"
                id="category"
                class="form-control"
                v-model="task.status"
                disabled
              >
                <option
                  :value="status.value"
                  v-for="status in status"
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
                :disabled="isLoading"
                type="time"
                id="startTime"
                class="form-control"
                v-model="task.startTime"
              />
            </div>

            <div class="col-md-6 mb-2">
              <label for="endTime" class="form-label">End Time</label>
              <input
                :disabled="isLoading"
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
                :disabled="isLoading"
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
            :disabled="isLoading"
            @click="addTask()"
            class="btn btn-primary me-2 d-flex align-items-center justify-content-center"
          >
            <span
              v-if="isLoading"
              class="spinner-border spinner-border-sm me-2"
            ></span>
            <i class="bi bi-plus fs-4" v-else></i>
            Add
          </button>

          <button
            @click="close()"
            :disabled="isLoading"
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
import { ref, reactive, watch } from "vue";
import { http } from "@/plugins/axios";

const props = defineProps({
  status: {
    required: true,
    type: Array,
  },
  categories: {
    required: true,
    type: Array,
  },
});

const emit = defineEmits(["created"]);
const isLoading = ref(false);
const addDialog = ref(false);
const errors = reactive([]);
const task = reactive({
  id: "",
  title: "",
  startTime: "",
  endTime: "",
  date: new Date().toISOString().substr(0, 10),
  category_id: "",
  description: "",
  status: "open",
});

function close() {
  addDialog.value = false;
}

async function addTask() {
  isLoading.value = true;
  try {
    const response = await http.post("api/v1/tasks", task);
    emit("created", response.data);
    close();
  } catch (e) {
    if (e.response && e.response.status == 422) {
      const errorsData = e.response.data.errors;
      errors.splice(0, errors.length);
      errors.push(...Object.values(errorsData).flat());
    }
  } finally {
    isLoading.value = false;
  }
}

watch(addDialog, (current, oldvalue) => {
  if (!current) {
    Object.assign(task, {
      id: "",
      title: "",
      startTime: "",
      endTime: "",
      date: new Date().toISOString().substr(0, 10),
      category_id: "",
      description: "",
      status: "open",
    });

    errors.splice(0, errors.length);
  }
});
</script>
