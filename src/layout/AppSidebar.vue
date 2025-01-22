<script setup>
import AppMenu from './AppMenu.vue';
import { useLayout } from '@/layout/composables/layout';

const { layoutState } = useLayout();

let timeout = null;

const onMouseEnter = () => {
    if (!layoutState.anchored.value) {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        layoutState.sidebarActive.value = true;
    }
};

const onMouseLeave = () => {
    if (!layoutState.anchored.value) {
        if (!timeout) {
            timeout = setTimeout(() => (layoutState.sidebarActive.value = false), 300);
        }
    }
};

const anchor = () => {
    layoutState.anchored.value = !layoutState.anchored.value;
};
</script>

<template>
    <div class="layout-sidebar" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <div class="sidebar-header">
            <router-link :to="{ name: 'e-commerce' }" >
                <img src="public/demo/images/ecommerce/ailin2.png" alt="Logo de Ailin" class="app-logo-normal"  />
            </router-link>
            <button class="layout-sidebar-anchor p-link z-2 mb-2" type="button" @click="anchor()"></button>
        </div>
        <div class="layout-menu-container">
            <AppMenu />
        </div>
    </div>
</template>

<style scoped lang="scss">
.sidebar-header {
    display: flex;
    align-items: center; 
    justify-content: space-between;
    padding: 4%; 
    height: 20%;
    box-sizing: border-box; 
}

.app-logo-normal {
    max-width: 180px; 
    height: auto;
    object-fit: contain;
}

.layout-sidebar-anchor {
    display: flex;
    align-items: center; 
    height: 40px; 
    width: 40px;
    margin: 0; 
    padding: 0; 
    cursor: pointer;
}

</style>
