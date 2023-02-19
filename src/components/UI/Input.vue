<template>
    <input 
        class="input"
        v-model="text"
        @input="onChange"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Input",
    
    data () {
        return {
            text: ""
        }
    },

    methods: {
        onChange() {
            this.$emit("onChange", this.text);
        }
    }
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