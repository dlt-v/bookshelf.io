<template>
    <div v-bind:class="{ showSticky: sticky}" class="container">
            <NavbarSearch v-if="showSticky"> </NavbarSearch>
        <!-- Move style to dedicated style tag later! -->
        <router-link style="text-decoration: none;" to="/">
            <NavbarElement value="New books" />
        </router-link>
        <router-link style="text-decoration: none;" to="/mylibrary"> 
            <NavbarElement value="My libary" />
        </router-link>
    </div>
</template>

<script>
import NavbarElement from './NavbarElement';
import NavbarSearch from './NavbarSearch.vue';

export default {
    name: "Header",
    components: {
        NavbarElement,
        NavbarSearch
    },
    props: {
        showSticky: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 60px;
        background-color: $vue-color;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .sticky {
        position: fixed;
        margin-top: -40px;
        z-index: 100;
        box-shadow: 3px 0 1px #ccc;
        -webkit-box-shadow: 3px 0 5px #ccc;
        -moz-box-shadow: 3px 0 5px #ccc;
    }
</style>