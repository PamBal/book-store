<template>
    <div class="list">
        <div class="title">Авторы</div>
        <div v-for="author in authors" :key="author.name" class="author">
            {{ author.name }}
        </div>
    </div>
</template>
  
  <script lang="ts">
  import { defineComponent, PropType } from "vue";
  import {Author} from "../assets/defaultAuthors";
//   import {getBooks} from "../api/api";
  
  export default defineComponent({
    name: "App",
    components: {},
    props: {
        authors: {
            type: Array as PropType<Author[]>
        }
    },
  
    mounted() {
    //   this.authors.forEach(async (author) => {
    //     const books = await getBooks(author.name);
    //     author.books = [...books]
    //   });
    }
  })
  
  </script>
  
  <style scoped lang="scss">
    .list {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        
        .title {
            font-weight: bold;
            font-size: 20px;
        }

        .author {
            cursor: pointer;
            padding: 10px 0;
            margin: 5px 0;
        }
    }
  </style>
  