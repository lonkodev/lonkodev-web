<template>
    <button class="bg-naranja text-black px-5 py-2 rounded-2xl hover:bg-orange-500 transition-all font-semibold"
        @click="onClick">
        <slot />
    </button>
</template>

<script setup>
const emit = defineEmits(['click'])
function onClick(event) {
    emit('click', event)
}
</script>
