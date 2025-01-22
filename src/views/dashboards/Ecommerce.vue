<script setup>
import { onMounted, ref, watch } from 'vue';
import { ProductService } from '@/service/ProductService';
import { FilterMatchMode } from 'primevue/api';
import { useLayout } from '@/layout/composables/layout';
const { layoutConfig } = useLayout();
const knobValue = ref(90);
const products = ref([]);
const weeks = ref([
    {
        label: 'Last Week',
        value: 0,
        data: [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ]
    },
    {
        label: 'This Week',
        value: 1,
        data: [
            [35, 19, 40, 61, 16, 55, 30],
            [48, 78, 10, 29, 76, 77, 10]
        ]
    }
]);
const selectedWeek = ref(weeks.value[0]);
const pieOptions = ref({});
const barOptions = ref({});
const barData = ref({});
const pieData = ref({});
const salesTableRef = ref(null);
const filterSalesTable = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});
onMounted(() => {
    const productService = new ProductService();
    productService.getProductsSmall().then((data) => (products.value = data));
    selectedWeek.value = weeks.value[0];
    setChartData();
});
watch(layoutConfig.colorScheme, () => {
    setChartData();
});
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    pieData.value = {
        labels: ['Electronics', 'Fashion', 'Household'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [documentStyle.getPropertyValue('--primary-700'), documentStyle.getPropertyValue('--primary-400'), documentStyle.getPropertyValue('--primary-100')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--primary-600'), documentStyle.getPropertyValue('--primary-300'), documentStyle.getPropertyValue('--primary-200')]
            }
        ]
    };
    pieOptions.value = {
        animation: {
            duration: 0
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: textColor,
                    usePointStyle: true,
                    font: {
                        weight: 700
                    },
                    padding: 28
                },
                position: 'bottom'
            }
        }
    };
    barData.value = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [
            {
                label: 'Revenue',
                backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                barThickness: 12,
                borderRadius: 12,
                data: selectedWeek.value.data[0]
            },
            {
                label: 'Profit',
                backgroundColor: documentStyle.getPropertyValue('--primary-200'),
                barThickness: 12,
                borderRadius: 12,
                data: selectedWeek.value.data[1]
            }
        ]
    };
    barOptions.value = {
        animation: {
            duration: 0
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: textColor,
                    usePointStyle: true,
                    font: {
                        weight: 700
                    },
                    padding: 28
                },
                position: 'bottom'
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const exportCSV = () => {
    salesTableRef.value.exportCSV();
};
const onWeekChange = () => {
    let newBarData = { ...barData.value };
    newBarData.datasets[0].data = selectedWeek.value.data[0];
    newBarData.datasets[1].data = selectedWeek.value.data[1];
    barData.value = newBarData;
    setChartData();
};
const getBadgeSeverity = (inventoryStatus) => {
    switch (inventoryStatus.toLowerCase()) {
        case 'instock':
            return 'success';
        case 'lowstock':
            return 'warning';
        case 'outofstock':
            return 'danger';
        default:
            return 'info';
    }
};
watch(
    layoutConfig.colorScheme,
    () => {
        setChartData();
    },
    { immediate: true }
);
watch(
    layoutConfig.theme,
    () => {
        setChartData();
    },
    { immediate: true }
);
const downloadCV = () => {
    const link = document.createElement("a");
    link.href =
        "https://www.canva.com/design/DAGTjqOyQ5M/PHXOx3uCW80Ya8bMuzQ3hQ/view?utm_content=DAGTjqOyQ5M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h14a2d97a58"; // URL del CV
    link.download = "CV_Ailin_Baudin.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const scrollToSobreMi = () => {
    const element = document.getElementById("sobremi");
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};
</script>
<style scoped>
#img {
    max-width: auto;
    max-height: 600px;
}

#sobremi {
    padding-top: 5%;

}

.titulo-destacado {
    font-weight: bold;
}

# {
    padding-top: 0%;
    padding-bottom: 0%;
}

@media (max-width: 768px) {
    .mobile-center {
        justify-content: center;
    }
}
</style>
<template>
    <div>
        <div class="grid grid-nogutter surface-section text-800">
            <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
                <section>
                    <span class="block text-7xl font-bold mb-1">¡Bienvenido a mi sitio!</span>
                    <div class="text-6xl text-primary font-bold mb-3">Hola, soy Ailin Baudin</div>
                    <p class="mt-0 mb-4 text-700 line-height-3">
                        Soy Frontend Developer, apasionada por diseñar y desarrollar experiencias web que sorprenden y
                        conectan. 🌐✨ <br>
                        Me destaco por mi <span class="titulo-destacado">versatilidad</span>, una cualidad que me
                        permite adaptarme a nuevos proyectos y desafíos con entusiasmo.
                        Formé mis estudios en la <span class="titulo-destacado">Facultad de Ingeniería de Lomas de
                            Zamora</span> y he continuado profundizando mis conocimientos en diversas tecnologías.
                        En la siguiente sección encontrarás una lista de las herramientas con las que trabajo y para las
                        que me he capacitado, siempre en busca de seguir aprendiendo y mejorando.
                    </p>
                    <div class="flex flex-wrap gap-2 justify-content-center mobile-center">
                        <a href="https://www.linkedin.com/in/frontdeveloper-ailinbaudin/" target="_blank"
                            rel="noopener noreferrer">
                            <Button label="Contactame" type="button" raised></Button>
                        </a>
                        <Button label="Mi experiencia" type="button" outlined @click="scrollToSobreMi"></Button>
                        <Button label="Descargar CV" type="button" outlined icon="pi pi-download"
                            @click="downloadCV"></Button>
                    </div>
                </section>
            </div>

            <div class="col-12 md:col-6 overflow-hidden">
                <img src="/demo/images/blocks/hero/ailin.jpeg" alt="Image" class="md:ml-auto block md:h-full"
                    style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" />
            </div>

        </div>
        <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-start">
            <div id="titleAspiraciones" class="mb-3 font-bold text-3xl">
                <span class="text-900">Mis </span>
                <span class="text-blue-600">Aspiraciones</span>
            </div>
            <div class="text-700 mb-6 line-height-3">
                Como profesional, siempre estoy buscando ampliar mis conocimientos y asumir nuevos retos. Aunque mi
                enfoque principal es el desarrollo frontend, actualmente estoy estudiando backend para expandir mis
                habilidades en áreas como <span class="titulo-destacado">Node.js</span> y la creación de <span
                    class="titulo-destacado">APIs RESTful</span>. <br>
                En el pasado, participé en proyectos utilizando <span class="titulo-destacado">C</span> aplicados a la
                robótica y al desarrollo con <span class="titulo-destacado">Arduino</span>, lo que despertó mi interés
                por explorar más en este campo. En el futuro, me encantaría profundizar en la <span
                    class="titulo-destacado">robótica</span>, combinando programación y tecnología para soluciones
                innovadoras.
            </div>
        </div>
        <div class="surface-section md:px-6 lg:px-8 text-center">
            <div class="mb-3 font-bold text-3xl">
                <span class="text-900">Herramientas y</span>
                <span class="text-blue-600"> Frameworks Principales</span>
            </div>
            <div class="text-700 mb-6"> Node.js, Tailwind, MySQL, HeidiSQL, Figma, Adobe Photoshop, y Scrum.
                Experiencia en diseño UX/UI, desarrollo de aplicaciones móviles con Ionic, testing unitario y
                automatizado, y creación de landing pages optimizadas.</div>
            <div class="grid">
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-code text-4xl text-yellow-500"></i>
                    </span>
                    <div class="text-900 text-xl mb-3 font-medium">JavaScript
                    </div>
                    <span class="text-700 line-height-3">El lenguaje esencial para la web moderna.
                        Ampliamente utilizado en desarrollo frontend y backend.</span>
                </div>
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-desktop text-4xl text-green-500"></i>
                    </span>
                    <div class="text-900 text-xl mb-3 font-medium">🌟 Vue.js
                    </div>
                    <span class="text-700 line-height-3">Framework avanzado para construir interfaces de usuario
                        interactivas.
                        Ideal para aplicaciones SPA y PWA.</span>
                </div>
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-desktop text-4xl text-blue-500"></i>
                    </span>
                    <div class="text-900 text-xl mb-3 font-medium">⚛️ React.js</div>
                    <span class="text-700 line-height-3">Biblioteca flexible para crear interfaces de usuario.
                        Excelente para componentes reutilizables y dinámicos.</span>
                </div>
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-palette text-4xl text-orange-500"></i>
                    </span>
                    <div class="text-900 text-xl mb-3 font-medium">🎨 HTML5, CSS3, Sass
                    </div>
                    <span class="text-700 line-height-3">La base del diseño web estructurado y atractivo.
                        Incluye personalizaciones con Sass y TailwindCSS.</span>
                </div>
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-github text-4xl text-blue-500"></i>
                    </span>
                    <div class="text-900 text-xl mb-3 font-medium">📁 Git, GitHub y GitLab
                    </div>
                    <span class="text-700 line-height-3">Experiencia en gestión de repositorios y control de versiones.
                        Trabajo colaborativo eficiente con ramas, pull requests y resolución de conflictos.</span>
                </div>
                <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-share-alt text-4xl text-green-500"></i>
                    </span>
                    <div class="text-900 text-xl mb-3 font-medium">🔗 APIs RESTful
                    </div>
                    <span class="text-700 line-height-3">Integraciones para una experiencia fluida y dinámica.
                        Con experiencia en proyectos CRM y ERP.</span>
                </div>
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-database text-4xl text-blue-500"></i>
                    </span>
                    <div class="text-900 text-xl mb-3 font-medium">🗄️ HeidiSQL</div>
                    <span class="text-700 line-height-3">
                        Experiencia en gestión y administración de bases de datos MySQL. Uso eficiente de consultas,
                        exportación de datos, y optimización de estructuras de tablas para mejorar el rendimiento de
                        aplicaciones.
                    </span>

                </div>
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-desktop text-4xl text-green-500"></i>
                    </span>
                    <div class="text-900 text-xl mb-3 font-medium"> Node.js
                    </div>
                    <span class="text-700 line-height-3">Utilizado como entorno para la ejecución y configuración de
                        proyectos frontend con Vue.js.</span>
                </div>
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-pencil text-4xl text-pink-500"></i>
                    </span>
                    <div class="text-900 text-xl mb-3 font-medium">Figma
                    </div>
                    <span class="text-700 line-height-3">Herramienta esencial para diseño de interfaces y prototipos
                        interactivos con un enfoque colaborativo.
                    </span>
                </div>
            </div>
        </div>
        <div id="card" class="flex flex-wrap mb-4">
            <div class="w-full lg:w-6 pl-0 lg:pr-4">
                <img id="img" src="/demo/images/blocks/hero/ailin.jpg" alt="Image" class="w-full border-round" />
            </div>
            <div class="w-full lg:w-6 pr-0 lg:pl-4 mt-3 lg:mt-0">
                <div id="sobremi" class="font-bold text-5xl mb-4 text-900">Sobre mi experiencia laboral</div>
                <p class="line-height-3 mt-0 mb-3 p-0">
                    Soy Desarrolladora Frontend con experiencia en <span class="titulo-destacado">diseño UX</span>,
                    especializada en la creación de interfaces web funcionales y atractivas. Trabajo con tecnologías
                    como <span class="titulo-destacado">Vue.js, PrimeVue, Tailwind y React.js</span>, y cuento con
                    experiencia en <span class="titulo-destacado">integraciones con WordPress</span> para extender y
                    personalizar funcionalidades según los requerimientos de los proyectos. También gestiono <span
                        class="titulo-destacado">documentación funcional</span> para mantener claridad y organización en
                    cada etapa del desarrollo.
                </p>
                <p class="line-height-3 mt-0 mb-3 p-0">
                    En los últimos dos años, he desarrollado habilidades en el <span class="titulo-destacado">manejo de
                        servidores</span>, realizando despliegues de proyectos, monitoreo de <span
                        class="titulo-destacado">historiales de ejecución</span>, y resolución de problemas en sistemas
                    en producción. Además, tengo experiencia en el <span class="titulo-destacado">manejo de bases de
                        datos</span>, asegurando un rendimiento eficiente e integraciones efectivas con las
                    aplicaciones.
                </p>
                <p class="line-height-3 mt-0 mb-3 p-0">
                    También utilizo herramientas como <span class="titulo-destacado">Figma</span> para diseñar y
                    prototipar soluciones orientadas a la experiencia del usuario, combinando creatividad y enfoque
                    técnico. Estas habilidades, junto con la aplicación de <span class="titulo-destacado">testing
                        unitario</span> e <span class="titulo-destacado">integral</span>, me permiten entregar
                    soluciones robustas y adaptadas a las necesidades del cliente.
                </p>
                <p class="line-height-3 mt-0 mb-3 p-0">
                    Mi trayectoria comenzó como Help Desk nivel 1/2 en una empresa de email marketing, donde gestioné
                    incidencias, lideré capacitaciones y trabajé en maquetación de mailings y landing pages.
                    Posteriormente, colaboré en el desarrollo de una billetera virtual con <span
                        class="titulo-destacado">React.js</span>, trabajando en equipo para implementar soluciones
                    innovadoras.
                </p>
                <p class="line-height-3 mt-0 mb-3 p-0">
                    Si desean más detalles sobre las empresas en las que he trabajado, pueden encontrarlos en mi CV
                    descargable o en mi perfil de LinkedIn. Además, en mis redes sociales podrán leer reseñas y
                    comentarios de compañeros y jefes con quienes he colaborado, que reflejan mi desempeño y compromiso
                    profesional.
                </p>
            </div>
        </div>
        <div id="card" class="col-12 md:col-10 lg:col-7">
            <div class="grid text-center md:text-left">
                <div class="col-12 md:col-3">
                    <h4 class="font-medium text-xl line-height-3 mb-3 text-900">Sigueme</h4>
                    <a class="line-height-3 block cursor-pointer mb-2 text-blue-700"
                        href="https://www.linkedin.com/in/frontdeveloper-ailinbaudin/" target="_blank"
                        rel="noopener noreferrer">Linkedin</a>
                </div>

                <div class="col-12 md:col-3 mt-4 md:mt-0">
                    <h4 class="font-medium text-xl line-height-3 mb-3 text-900">Contacto</h4>
                    <a class="line-height-3 block cursor-pointer mb-2 text-700">+541136940091</a>
                </div>
                <div class="col-12 md:col-3 mt-4 md:mt-0">
                    <h4 class="font-medium text-xl line-height-3 mb-3 text-900">Repositorio</h4>
                    <a class="line-height-3 block cursor-pointer mb-2 text-700"
                        href="https://github.com/palabrasafiladas" target="_blank">Github</a>
                </div>
            </div>
        </div>
    </div>
</template>