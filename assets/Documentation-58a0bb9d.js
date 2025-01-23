import{_ as s,b as o,c as i,f as t,p as n,g as d,d as a}from"./index-4d150a88.js";const l={},r=e=>(n("data-v-adb5e7e5"),e=e(),d(),e),p={class:"card docs"},m=t(`<h2 data-v-adb5e7e5>Getting Started</h2><p data-v-adb5e7e5> Apollo is an application template and has 2 version in it. Vue 3 based on <a href="https://github.com/vuejs/create-vue" class="font-medium text-primary hover:underline" data-v-adb5e7e5>create-vue</a>, the recommended way to start a <strong data-v-adb5e7e5>Vite-powered</strong> Vue projects. Nuxt 3 based on <a href="https://nuxt.com/docs/getting-started/installation" class="font-medium text-primary hover:underline" data-v-adb5e7e5>nuxi</a>, the recommended way to start a <strong data-v-adb5e7e5>Nuxt 3</strong> Vue projects. To get started, extract the contents of the zip file, cd to the directory and install the dependencies with npm, yarn or pnpm. </p><pre class="app-code" data-v-adb5e7e5><code data-v-adb5e7e5>npm install</code></pre><p data-v-adb5e7e5>Next step is running the application using the serve script and navigate to <i data-v-adb5e7e5>http://localhost:3000/</i> to view the application. That is it, you may now start with the development using the Apollo template.</p><pre class="app-code" data-v-adb5e7e5><code data-v-adb5e7e5>npm run dev</code></pre><h4 data-v-adb5e7e5>Structure</h4><p data-v-adb5e7e5>Apollo consists of a couple folders, demos and layout have been separated so that you can easily remove what is not necessary for your application.</p><ul class="line-height-3" data-v-adb5e7e5><li data-v-adb5e7e5><span class="text-primary font-medium" data-v-adb5e7e5>layouts</span>: Main layout files, need to be present</li><li data-v-adb5e7e5><span class="text-primary font-medium" data-v-adb5e7e5>pages</span>: Demo pages</li><li data-v-adb5e7e5><span class="text-primary font-medium" data-v-adb5e7e5>public/demo</span>: Assets used in demos</li><li data-v-adb5e7e5><span class="text-primary font-medium" data-v-adb5e7e5>public/layout</span>: Assets used in layout</li><li data-v-adb5e7e5><span class="text-primary font-medium" data-v-adb5e7e5>assets/demo</span>: Styles used in demos</li><li data-v-adb5e7e5><span class="text-primary font-medium" data-v-adb5e7e5>assets/layout</span>: SCSS files of the main layout</li></ul><h4 data-v-adb5e7e5>Default Configuration</h4><p data-v-adb5e7e5> Initial layout configuration can be defined at the main app component by injecting the composable from <span class="text-primary font-medium" data-v-adb5e7e5>layouts/composables/layout</span>, this step is optional and only necessary when customizing the defaults. Note that <span class="text-primary font-medium" data-v-adb5e7e5>theme</span> and <span class="text-primary font-medium" data-v-adb5e7e5>scale</span> are not reactive at the moment since theme is configured outside of Vue. In Vite version at <strong class="font-semibold" data-v-adb5e7e5>main.js</strong> and In Nuxt version at <strong class="font-semibold" data-v-adb5e7e5>nuxt.config.js</strong> by default and initial scale is defined with the <span class="text-primary font-medium" data-v-adb5e7e5>$scale</span> at <strong class="font-semibold" data-v-adb5e7e5>layout.scss</strong>. When default theme or scale is changed at their files initially, it is required to configure the layout service with the matching values to avoid sync issues. </p><h5 data-v-adb5e7e5>Vite</h5><pre class="app-code" data-v-adb5e7e5><code data-v-adb5e7e5>&lt;script setup&gt;
import { useLayout } from &#39;@/layout/composables/layout&#39;;

const { layoutConfig } = useLayout();
layoutConfig.menuMode.value = &#39;slim&#39;;
&lt;/script&gt;

&lt;template&gt;
    &lt;router-view /&gt;
&lt;/template&gt;

&lt;style scoped&gt;&lt;/style&gt;
</code></pre><h5 data-v-adb5e7e5>Nuxt</h5><pre class="app-code" data-v-adb5e7e5><code data-v-adb5e7e5>&lt;script setup&gt;
import { useLayout } from &#39;@/layout/composables/layout&#39;;

const { layoutConfig } = useLayout();
layoutConfig.menuMode.value = &#39;slim&#39;;
&lt;/script&gt;

&lt;template&gt;
    &lt;NuxtLayout&gt;
        &lt;NuxtPage /&gt;
    &lt;/NuxtLayout&gt;
&lt;/template&gt;

&lt;style scoped&gt;&lt;/style&gt;
</code></pre><h4 data-v-adb5e7e5>Menu</h4><p data-v-adb5e7e5> Main menu is located at <span class="text-primary font-medium" data-v-adb5e7e5>layouts/AppMenu.vue</span> file. Update the <span class="text-primary font-medium" data-v-adb5e7e5>model</span> property to define the menu of your application using PrimeVue MenuModel API. </p><pre class="app-code" data-v-adb5e7e5><code data-v-adb5e7e5>&lt;script setup&gt;
import { ref } from &#39;vue&#39;;

import AppSubMenu from &#39;./AppSubMenu.vue&#39;;

const model = ref([
    {
        label: &#39;Dashboards&#39;,
        icon: &#39;pi pi-home&#39;,
        items: [
            {
                label: &#39;E-Commerce&#39;,
                icon: &#39;pi pi-fw pi-home&#39;,
                to: &#39;/&#39;
            },
            {
                label: &#39;Banking&#39;,
                icon: &#39;pi pi-fw pi-image&#39;,
                to: &#39;/dashboard-banking&#39;
            }
        ]
    },
    //...
</code></pre><h4 data-v-adb5e7e5>Breadcrumb</h4><p data-v-adb5e7e5> Breadcrumb component at the topbar section is dynamic and retrieves the path information from the router using the <span class="text-primary font-medium" data-v-adb5e7e5>meta.breadcrumb</span> property. </p><pre class="app-code" data-v-adb5e7e5><code data-v-adb5e7e5>{
    path: &#39;/uikit/formlayout&#39;,
    name: &#39;formlayout&#39;,
    meta: {
        breadcrumb: [&#39;UI Kit&#39;, &#39;Form Layout&#39;]
    },
    component: () =&gt; import(&#39;@/views/uikit/FormLayout.vue&#39;)
},</code></pre><h4 data-v-adb5e7e5>Integration with Existing Vite Applications</h4><p data-v-adb5e7e5>Only the folders that are related to the layout needs to move in to your project. We&#39;ve created a short tutorial with details. It is based on Sakai but flow is exactly the same with Apollo.</p>`,22),c=r(()=>a("div",{class:"video-container"},[a("iframe",{class:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/AHeSjJFR3ZE",frameborder:"0",allowfullscreen:""})],-1)),u=t(`<h4 data-v-adb5e7e5>PrimeVue Theme</h4><p data-v-adb5e7e5> Apollo provides 24 PrimeVue themes out of the box. Setup of a theme is simple by including the css of theme to your bundle that are located inside <span class="text-primary font-medium" data-v-adb5e7e5>public/layout/styles/theme/</span> folder such as <span class="text-primary font-medium" data-v-adb5e7e5>public/layout/styles/theme/theme-light/indigo/theme.css</span>. </p><p data-v-adb5e7e5>A custom theme can be developed by the following steps.</p><ul data-v-adb5e7e5><li class="line-height-4" data-v-adb5e7e5>Choose a custom theme name such as &quot;mytheme&quot;.</li><li class="line-height-4" data-v-adb5e7e5> Create a folder named &quot;mytheme&quot; under <span class="font-semibold" data-v-adb5e7e5>public/layout/styles/theme/theme-light/mytheme</span> folder. </li><li class="line-height-4" data-v-adb5e7e5>Create a file such as theme.scss inside your &quot;mytheme&quot; folder.</li><li class="line-height-4" data-v-adb5e7e5>Define the variables listed below in your file and import the dependencies.</li><li class="line-height-4" data-v-adb5e7e5> Include the theme.scss in your application via an import in <i data-v-adb5e7e5>assets/styles.scss</i> or simply refer to the compiled css with a link tag. Note that if you choose the former, the theme will be bundled with the rest of your app. </li></ul><p data-v-adb5e7e5>Here are the variables required to create a theme.</p><pre class="app-code" data-v-adb5e7e5><code data-v-adb5e7e5>$primaryColor: #6366f1 !default;
$primaryLightColor: #c7d2fe !default;
$primaryDarkColor: #4f46e5 !default;
$primaryDarkerColor: #4338ca !default;
$primaryTextColor: #ffffff !default;
$primary500: #6366f1 !default;

$highlightBg: #eef2ff !default;
$highlightTextColor: $primaryDarkerColor !default;
$highlightFocusBg: rgba($primaryColor, 0.24) !default;

@import &#39;../_variables&#39;;
@import &#39;../../theme-base/_components&#39;;
@import &#39;../_extensions&#39;;
</code></pre><h4 data-v-adb5e7e5>Theme Switcher</h4><p data-v-adb5e7e5> Dynamic theming is built-in to the template and implemented by including the theme via a link tag instead of bundling the theme along with a configurator component to switch it. In order to switch your theme dynamically as well, it needs to be compiled to css. An example sass command to compile the css would be; </p><pre class="app-code" data-v-adb5e7e5><code data-v-adb5e7e5>sass --update public/layout/styles/assets/theme-light/mytheme.scss:public/layout/styles/assets/theme-light/mytheme.css</code></pre><p class="text-sm" data-v-adb5e7e5>*Note: The sass command above is supported by Dart Sass. Please use Dart Sass instead of Ruby Sass.</p><h4 data-v-adb5e7e5>Theme Designer</h4><p data-v-adb5e7e5> Apollo includes a simplified version of the <a href="https://www.primefaces.org/designer/primevue" data-v-adb5e7e5>PrimeVue Theme Designer</a> that only includes the main SASS structure. Full list of SASS variables to customize the components further is available at the <a href="https://www.primefaces.org/designer/api/primevue/3.9.0/" class="font-medium text-primary hover:underline" data-v-adb5e7e5>SASS API</a> docs. </p><h4 data-v-adb5e7e5>Migration</h4><p data-v-adb5e7e5> Initial integration with an existing Vite application and the migration process is similar. During an update, only the layout folder and layout assets folder need to be updated, see the &quot;Integration with Existing Vite Applications&quot; section for more information. Important changes are also documented at CHANGELOG.md file. </p>`,14),h=[m,c,u];function b(e,v){return o(),i("div",p,h)}const y=s(l,[["render",b],["__scopeId","data-v-adb5e7e5"]]);export{y as default};
