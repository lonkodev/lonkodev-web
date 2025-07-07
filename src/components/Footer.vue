<template>
    <footer class="bg-black bg-opacity-90 text-gray-400 text-sm py-6 px-4 text-center border-t border-white/10">
        <p>
            Hecho por <span class="text-naranja font-semibold">Giovanni Cáceres R.</span> /
            <span class="text-white">Lonkodev</span> — Chile · {{ year }}
        </p>
        <div class="mt-2 flex justify-center gap-4 text-naranja text-sm">
            <a href="#sobre-mi" class="hover:underline">Sobre mí</a>
            <a href="#portafolio" class="hover:underline">Portafolio</a>
            <a href="#contenido" class="hover:underline">Contenido</a>
            <a href="#contacto" class="hover:underline">Contacto</a>
        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
