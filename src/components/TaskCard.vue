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
            <i :class="taskStatusIcon(task.status)"></i>
        </div>
    </div>

    <div class="card-body">
        {{ task.description }}
    </div>

    <div class="card-footer">
        {{ timeAgo(task.date).toLocaleUpperCase() }} | {{ task.startTime }} - {{ task.endTime }}
    </div>
  </div>
</template>

<script setup>
import { taskCategories } from '../data';
import { formatDistanceToNow } from "date-fns"

const props = defineProps({
    task: {
        required: true,
        type: Object
    }
});

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
        open: "bi-arrow-right-circle text-primary",
        closed: "bi-check-circle-fill text-success",
        archived: "bi-archive-fill text-warning",
    };

    return statusIcons[status] || "bi-dot";
}

function timeAgo(dateString){
    return formatDistanceToNow(new Date(dateString), { addSuffix: true })
} 
</script>
