<template>
    <button v-show="visible" @click="scrollToTop"
        class="fixed bottom-6 right-6 bg-naranja text-black p-3 rounded-full shadow-lg hover:bg-orange-400 transition-all z-50"
        aria-label="Volver arriba">
        ↑
    </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const toggleVisibility = () => {
    visible.value = window.scrollY > 200
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    window.addEventListener('scroll', toggleVisibility)
})

onUnmounted(() => {
    window.removeEventListener('scroll', toggleVisibility)
})
</script>
