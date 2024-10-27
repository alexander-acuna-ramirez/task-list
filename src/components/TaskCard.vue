<template>
  <div class="card mb-3 shadow-sm">
    <div class="card-header d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">

            <i 
                class="bi fs-4 me-2"
                :class="taskIcon(task.category)"
                :style="{
                    'color': taskIconColor(task.category)
                }"
            ></i>


            <h5 class="mb-0">
                {{ task.title }}
            </h5>
        </div>

        <div>
            <span class="badge rounded-pill"
                :class="taskStatusColor(task.status)">
                <i :class="taskStatusIcon(task.status)"></i>
                {{ task.status }}
            </span>
        </div>
    </div>

    <div class="card-body">
        {{ task.description }}
    </div>

    <div class="card-footer d-flex justify-content-between align-items-center">
        <div>
            {{ taskDate }}
        </div>

        <div>
          <button 
            class="btn btn-link p-0 me-1" 
            v-if="task.status !== 'closed'" 
            @click="changeStatus('closed')"
            title="Close"
          >
            <i class="bi bi-check-circle-fill fs-5 text-primary"></i>
          </button>
          <button 
            class="btn btn-link p-0 me-1" 
            v-if="task.status !== 'archived'" 
            @click="changeStatus('archived')"
            title="Archive"
          >
            <i class="bi bi-archive-fill fs-5 text-warning"></i>
          </button>
          <button 
            class="btn btn-link p-0" 
            v-if="task.status !== 'open'" 
            @click="changeStatus('open')"
            title="Reopen"
          >
            <i class="bi bi-arrow-return-left fs-5 text-secondary"></i>
          </button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { taskCategories } from '../data';
import { formatDistanceToNow } from "date-fns"

const props = defineProps({
    task: {
        required: true,
        type: Object
    }
});

const emit = defineEmits(["update-status"]);

function taskIcon(category){
    const categoryIcon = taskCategories.find((e) => e.name == category);
    return categoryIcon.icon;
}

function taskIconColor(category){
    const categoryIcon = taskCategories.find((e) => e.name == category);
    return categoryIcon.color;
}

function taskStatusIcon(status){
    const statusIcons = {
        open: "bi-arrow-right-circle text-white",
        closed: "bi-check-circle-fill text-white",
        archived: "bi-archive-fill text-white",
    };

    return statusIcons[status] || "bi-dot";
}


function taskStatusColor(status){
    const statusIcons = {
        open: "bg-primary",
        closed: "bg-success",
        archived: "bg-warning",
    };

    return statusIcons[status] || "bg-secondary";
}


function timeAgo(dateString){
    return formatDistanceToNow(new Date(dateString), { addSuffix: true })
} 

function changeStatus(newStatus){
    emit("update-status", props.task.id, newStatus)
}

const taskDate = computed(() => {
    return `${timeAgo(props.task.date).toLocaleUpperCase()} | ${props.task.startTime} - ${props.task.endTime}`
})
</script>
