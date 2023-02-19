<template>
    <div class="list">
        <div class="title">Авторы</div>
        <div v-for="author in authors" :key="author.name" class="author">
            <router-link :to="{name: 'books', params: {id: author.name}}">{{ author.name }}</router-link>
        </div>
        <Button 
            title="Добавить автора"
            @button-clicked="addAuthor"
        />
    </div>
</template>
  
<script lang="ts">
    import { defineComponent, PropType } from "vue";
    import {Author} from "../assets/defaultAuthors";
    import Button from "../components/UI/Button.vue";

    export default defineComponent({
        name: "AuthorsList",
        components: {
            Button
        },
        props: {
            authors: {
                type: Array as PropType<Author[]>
            }
        },
        methods: {
            addAuthor() {
                console.log("test");
            }
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
  