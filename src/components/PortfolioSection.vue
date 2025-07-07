<template>
    <section id="portafolio" class="py-20 px-6 bg-fondo text-white max-w-6xl mx-auto">

        <h2 class="text-3xl md:text-4xl font-bold text-naranja mb-10 text-center">
            Portafolio
        </h2>

        <div class="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <ProjectCard v-for="(project, index) in projects" :key="index" v-bind="project" />
        </div>
    </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
    {
        title: 'RemediosC3',
        description: 'App creada en pandemia para agendar el retiro de medicamentos sin hacer filas. Validaba automáticamente si el paciente tenía receta disponible mediante scraping al sistema clínico, evitando agendamientos falsos y reduciendo aglomeraciones en el CESFAM.',
        technologies: ['PHP', 'Python', 'MySQL'],
        status: 'Proyecto cerrado (uso en pandemia)',
        link: '',
    },
    {
        title: 'Sofake',
        description: 'App comunitaria para reportar hechos de incivilidad en barrios específicos. Los reportes llegan a una bandeja de gestión municipal y los agentes de Seguridad Pública reciben notificaciones automatizadas vía WhatsApp. Diseñada para fortalecer la respuesta rápida y la participación ciudadana, especialmente en sectores con baja denuncia formal.',
        technologies: ['Ionic', 'React', 'Firebase', 'Bot-WhatsApp'],
        status: 'Próximo a publicarse en Play Store y AppStore',
        link: '',
    },
    {
        title: 'Bot Municipal',
        description: 'Atención ciudadana automatizada por WhatsApp: trámites, horarios, contacto con departamentos.',
        technologies: ['Node.js', 'TypeScript', 'Baileys', 'MongoDB'],
        status: 'Desarrollo privado en etapa final',
    },
    {
        title: 'MenosPapel',
        description: 'Plataforma institucional para eliminar el papeleo tradicional. Permite crear, firmar y gestionar memos u oficios de forma 100% digital, con control de flujos, subrogancias, notificaciones automáticas y trazabilidad completa. Cumple con los lineamientos de modernización del Estado y está en uso desde 2023.',
        technologies: ['Laravel', 'MySQL'],
        status: 'Operativo entre 2023 y 2025',
    },
    {
        title: 'Sitio Municipalidad de Doñihue',
        description: 'Web institucional segura, sin CMS ni plugins. Hecha con Laravel y Docker para reducir costos.',
        technologies: ['Laravel', 'Docker'],
        status: 'En línea',
        link: 'https://mdonihue.cl',
    },
    {
        title: 'Knar – Bodega de Insumos',
        description: 'Sistema de gestión de inventario con control por lotes y fechas de vencimiento. Permite registrar entradas y salidas de insumos con múltiples ítems tipo carrito, validando stock, vencimientos y trazabilidad por bodega. Diseñado para instituciones que requieren control preciso y confiable de sus recursos.',
        technologies: ['Laravel', 'MySQL', 'Blade', 'SweetAlert2'],
        status: 'Uso interno en instituciones',
    },
    {
        title: 'Simulador de Notas Lonkodev',
        description: 'Plataforma para estudiantes que calcula promedios, proyecta notas finales y permite simular escenarios de evaluación. Nació ante la falta de información clara en plataformas oficiales, y busca dar a los alumnos mayor claridad y control sobre su desempeño académico.',
        technologies: ['Vue', 'TailwindCSS', 'Firebase'],
        status: 'En uso por alumnos de educación superior',
    },
]
</script>
