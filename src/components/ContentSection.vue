<template>
    <section id="contenido" class="py-20 px-6 bg-black bg-opacity-20 text-white max-w-6xl mx-auto">

        <h2 class="text-3xl md:text-4xl font-bold text-naranja mb-10 text-center">
            Contenido y redes
        </h2>

        <div class="flex flex-wrap justify-center gap-4 text-sm mb-10">
            <a href="https://www.tiktok.com/@lonkodev" target="_blank"
                class="flex items-center gap-2 bg-white/10 text-naranja px-4 py-2 rounded hover:bg-naranja hover:text-black transition">
                <img src="https://cdn.simpleicons.org/tiktok/fff" alt="TikTok" class="w-4 h-4" />
                TikTok
            </a>
            <a href="https://www.instagram.com/lonkodev" target="_blank"
                class="flex items-center gap-2 bg-white/10 text-naranja px-4 py-2 rounded hover:bg-naranja hover:text-black transition">
                <img src="https://cdn.simpleicons.org/instagram/fff" alt="Instagram" class="w-4 h-4" />
                Instagram
            </a>
            <a href="https://www.linkedin.com/in/giovannicaceres" target="_blank"
                class="flex items-center gap-2 bg-white/10 text-naranja px-4 py-2 rounded hover:bg-naranja hover:text-black transition">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" class="w-4 h-4" />
                LinkedIn
            </a>
            <a href="https://github.com/lonkodev" target="_blank"
                class="flex items-center gap-2 bg-white/10 text-naranja px-4 py-2 rounded hover:bg-naranja hover:text-black transition">
                <img src="https://cdn.simpleicons.org/github/fff" alt="GitHub" class="w-4 h-4" />
                GitHub
            </a>
            <a href="https://www.whatsapp.com/channel/0029Vb6GiZY3wtb5gXyzjd1y" target="_blank"
                class="flex items-center gap-2 bg-white/10 text-naranja px-4 py-2 rounded hover:bg-naranja hover:text-black transition">
                <img src="https://cdn.simpleicons.org/whatsapp/fff" alt="WhatsApp" class="w-4 h-4" />
                WhatsApp
            </a>
        </div>

        <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4">Últimos videos de TikTok</h3>
            <div class="grid gap-4 md:grid-cols-3">
                <a v-for="(video, index) in tiktoks" :key="index" :href="video.link" target="_blank"
                    rel="noopener noreferrer"
                    class="bg-white/5 border border-white/10 rounded-lg p-4 hover:shadow-lg transition-all flex flex-col">
                    <div class="aspect-video bg-black rounded mb-3 flex items-center justify-center overflow-hidden">
                        <img :src="video.thumbnail" alt="Video TikTok" class="object-contain h-full" />
                    </div>
                    <p class="text-sm text-gray-300 leading-snug mb-3">
                        {{ video.title }}
                    </p>
                    <div class="mt-auto">
                        <span
                            class="flex items-center gap-2 bg-white/10 text-naranja px-4 py-2 rounded hover:bg-naranja hover:text-black transition">
                            <img src="https://cdn.simpleicons.org/tiktok/fff" alt="TikTok" class="w-4 h-4" />
                            Ver en TikTok
                        </span>
                    </div>
                </a>
            </div>
        </div>

        <!-- <div class="mb-12">
            <h3 class="text-xl font-semibold mb-4">Proyectos en GitHub</h3>
            <ul class="space-y-4">
                <li v-for="(repo, index) in repos" :key="index"
                    class="bg-white/5 border border-white/10 p-4 rounded-lg">
                    <a :href="repo.link" target="_blank" rel="noopener noreferrer"
                        class="text-naranja hover:underline text-lg font-bold">
                        {{ repo.name }}
                    </a>
                    <p class="text-sm text-gray-300">{{ repo.description }}</p>
                </li>
            </ul>
        </div> -->
    </section>

</template>

<script setup>
const tiktoks = [
    {
        title: '¿Recién empiezas con GitHub y todo suena raro?',
        link: 'https://www.tiktok.com/@lonkodev/photo/7508888472283892997',
        thumbnail: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-i-photomode-us/23f216bc963f4e8ea2a1bd208b2b0697~tplv-photomode-image.jpeg?dr=14555&x-expires=1752084000&x-signature=1OU8p9HEd7NshHxO09G45arBmV4%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=maliva&ftpl=1',
    },
    {
        title: '10 Patrones que todo dev debe conocer YA!',
        link: 'https://www.tiktok.com/@lonkodev/photo/7511198284380146950',
        thumbnail: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-i-photomode-us/730b8e0ffc8a4503bdcafc57e24e7a41~tplv-photomode-image.jpeg?dr=14555&x-expires=1752084000&x-signature=PGBU6C9ObUQiYxQhPcSJAQwwmaI%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=maliva&ftpl=1',
    },
    {
        title: '¿Programación Orientada a Objetos te resulta difícil?',
        link: 'https://www.tiktok.com/@lonkodev/photo/7513345759379492152',
        thumbnail: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-i-photomode-us/60e20a0459ff4d559d70ae585bf85700~tplv-photomode-image.jpeg?dr=14555&x-expires=1752084000&x-signature=iwi0FQdIEVyjMAgXrAi%2BG3ixZWM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=9b759fb9&idc=maliva&ftpl=1',
    },
]

const repos = [
    {
        // name: 'simulador-notas',
        // description: 'App para estudiantes que proyecta notas, promedios y escenarios con Vue.',
        // link: 'https://github.com/lonkodev/simulador-notas',
    },

]
</script>
