<template>
    <div 
        class="button" 
        :class="positive ? 'positive' : 'negative'"
        @click="onClick"
    >
        {{ title }}
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: "Button",
    props: {
        title: {
            type: String as PropType<string>,
        },
        positive: {
            type: Boolean as  PropType<boolean>,
            default: true
        }
    },
    methods: {
        onClick() {
            this.$emit("button-clicked")
        }
    }
})
</script>

<style lang="scss" scoped>
    .button {
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        border-radius: 4px;
        cursor: pointer;
        color: white;

        &.positive {
            background: rgb(128, 209, 128);
        }

        &.negative {
            background: rgb(227, 91, 91);
        }
    }
</style>