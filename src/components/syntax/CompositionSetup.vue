<script setup>
import { ref, reactive, onMounted } from 'vue';

const htmlTest = ref("<h1>Hello</h1>");
const buttonActive = ref(false);
const tasks = reactive([
]);

const task = reactive({
  name: "",
  finished: false,
  date: '2019-05-11'
});

function handleClick(event) {
  if(task.name &&  task.name != ""){
    buttonActive.value = false;
    tasks.push({...task});
    Object.assign(task, {
      name: "",
      finished: false,
      date: '2019-05-10'
    });
  }
}
 
onMounted(() => {
  console.log("ON MOUNTED")
});

</script>

<template>
  <div>
    <form @submit.prevent="handleClick">
      <input type="text" placeholder="Tarea" v-model="task.name" :disabled="buttonActive"/>
      <button type="submit">Add</button>
      <button @click="buttonActive = !buttonActive">Activar input</button>
    </form>
    <div>
      <div v-for="(task, index) in tasks" :key="index">
        <div>
          {{index }}
        </div>
        <div>
          {{ task.name }}
        </div>


        <div v-if="task.finished">
          Terminado
        </div>
        <div v-else>
          Pendiente
        </div>


        <div>
          {{ new Date(task.date).toLocaleString() }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
