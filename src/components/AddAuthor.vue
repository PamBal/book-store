<template>
    <div class="container">
        <div class="title">
            Добавить автора
        </div>
        <Input />
    </div>
</template>

<script lang="ts">
import Input from "../components/UI/Input.vue";
import {defineComponent} from "vue";

export default defineComponent({
    name: "AddAuthor",
    components: {
        Input
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
    }
</style>