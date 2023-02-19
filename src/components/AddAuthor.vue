<template>
    <div class="container">
        <div class="title">
            Добавить автора
        </div>
        <Input
            @onChange="changeAuthorName"
        />
        <div class="controls">
            <Button 
                :title="'Добавить'"
                @button-clicked="addAuthor"
            />
            <Button 
                :title="'Назад'" 
                :positive="false"
                @button-clicked="back"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Input from "../components/UI/Input.vue";
import Button from "../components/UI/Button.vue";
import { authors } from "../assets/defaultAuthors";
import {defineComponent} from "vue";

export default defineComponent({
    name: "AddAuthor",
    components: {
        Input,
        Button
    },

    data() {
        return {
            author: ''
        }
    },

    methods: {
        back() {
            this.$router.push('/authors');
        },

        addAuthor() {
            if (this.author !== '') {
                authors.push({
                    name: this.author,
                    books: [],
                });
                this.back();
            }
        },

        changeAuthorName(name: string) {
            this.author = name;
        }
    }
});
</script>

<style scoped lang="scss">
    .container {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        flex-direction: column;
        gap: 20px;

        .title {
            font-weight: bold;
            font-size: 20px;
        }

        .controls {
            display: flex;
            gap: 30px;
            justify-content: center;
        }
    }
</style>