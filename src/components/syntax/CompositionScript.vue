<template>
    <div>
      <div>{{ message }}</div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  export default {
    name: 'OptionsComponent',
    setup(){
        const message = ref("")

        return {
            message,
        }
    }
    
  };
  </script>