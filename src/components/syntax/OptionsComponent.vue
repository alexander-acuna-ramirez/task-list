<template>
  <div>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'OptionsComponent',
  components: {

  },
  data() {
    return {
      message: "HelloWorld"
    };
  },

  methods: {
    printSomething() {
        console.log("Hello");
    }
  },
  
};
</script>