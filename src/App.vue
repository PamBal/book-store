<template>
  <div v-for="author in authors" :key="author.name">
    {{ author.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {getBooks} from "./api/api";

interface Author {
  name: string;
  books: string[]
}

export default defineComponent({
  name: "App",
  components: {},

  data() {
    return {
      authors: [
        {name: "Фёдор Михайлович Достоевский", books: []} as Author,
        {name: "Пушкин Александр Сергеевич", books: []} as Author,
        {name: "Жюль Верн", books: []} as Author,
        {name: "Теодор Драйзер", books: []} as Author,
        {name: "Толстой Лев Николаевич", books: []} as Author
      ]
    }
  },

  mounted() {
    this.authors.forEach(async (author) => {
      const books = await getBooks(author.name);
      author.books = [...books]
    });
  }
})

</script>

<style scoped>

</style>
