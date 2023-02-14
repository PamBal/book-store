<template>
    <div class="container">
        <div class="title">Книги автора "{{ $route.params.id }}""</div>
        <div v-for="book in books" :key="book" class="book">
            {{ book }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { getBooks } from "../api/api";

export default defineComponent({
    name: "BookList",
    
    data() {
        return {
            books: [] as string[],
        }
    },

    async mounted() {
        this.books = await getBooks(this.$route.params.id as string)
    }
});

</script>

<style scoped lang="scss">
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    
    .title {
        font-weight: bold;
        font-size: 20px;
    }
    
    .book {
        cursor: pointer;
        padding: 10px 0;
        margin: 5px 0;
    }
}
</style>