<template>
    <div class="container">
        <div class="title">Навигация</div>
        <div class="router-link">
            <router-link :to="{name: 'authors'}">Список авторов</router-link>
        </div>
    </div>
</template>

<script lang="ts">
export default {}
</script>


<style scoped lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        position: fixed;
        top: 0;
        height: 100%;
        padding: 0 10px;
        border-right: 1px solid;

        .title {
            font-weight: bold;
            font-size: 20px;
        }

        .router-link {
            cursor: pointer;
            padding: 10px 0;
            margin: 5px 0;
        }
    }
</style>