<script setup>
import MainLayout from './components/layouts/MainLayout.vue';
import TaskList from './components/TaskList.vue';
</script>

<template>
  <MainLayout>
    <template #header>
      <span>
        Task App
      </span>
    </template>
    <template #default>
      <TaskList />
    </template>

    <template #footer>
      <span>
        &copy; 2024 Task App
      </span>
    </template>
  </MainLayout>
</template>
