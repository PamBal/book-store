<template>
    <input class="input" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Input"
});

</script>

<style lang="scss" scoped>
    .input {
        width: 300px;
        height: 22px;
        border-radius: 4px;
        border: 1px solid;
    }
</style>