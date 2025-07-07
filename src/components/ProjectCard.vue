<template>
    <div
        class="bg-white/5 border border-white/10 rounded-xl p-5 shadow hover:shadow-lg transition-all flex flex-col justify-between">

        <img v-if="image" :src="image" alt="Vista previa de proyecto"
            class="rounded-lg mb-4 object-cover w-full max-h-48 border border-white/10" />

        <h3 class="text-xl text-naranja font-bold mb-2">{{ title }}</h3>

        <p class="text-sm text-gray-300 mb-4 leading-relaxed">
            {{ description }}
        </p>

        <div class="text-xs text-celeste mb-4">
            <span v-for="(tech, index) in technologies" :key="index" class="inline-block mr-2">
                • {{ tech }}
            </span>
        </div>

        <div class="mt-auto flex justify-between items-end">
            <span class="text-xs text-orange-300 italic">{{ status }}</span>
            <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer"
                class="text-sm text-naranja hover:text-orange-400 underline transition">
                Ver más
            </a>
        </div>

    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    technologies: Array,
    status: String,
    link: String,
    image: String,
})
</script>
