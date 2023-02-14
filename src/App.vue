<template>
  <AuthorsList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthorsList from "./components/AuthorsList.vue";

interface Author {
  name: string;
  books: string[]
}

export default defineComponent({
  name: "App",
  components: {
    AuthorsList
  },
})

</script>

<style scoped>

</style>
