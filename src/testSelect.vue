<template>
  <div>
    <h-select :model="val" action="/api/options1" @change="onChange"></h-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        val: '',
      }
    },

    async created() {

    },

    methods: {
      onChange(val) {
        console.log(val)
      }
    }

  }
</script>

<style scoped>
</style>