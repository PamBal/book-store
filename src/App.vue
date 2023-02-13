<template>
  <div v-for="author in authors" :key="author">
    {{ author }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {getBooks} from "./api/api";

export default defineComponent({
  name: "App",
  components: {},

  data() {
    return {
      authors: [
        "Фёдор Михайлович Достоевский",
        "Пушкин Александр Сергеевич"
      ]
    }
  },

  async mounted() {
    console.log(this.authors[0]);
  }
})

</script>

<style scoped>

</style>
