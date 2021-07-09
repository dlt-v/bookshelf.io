<template>
    <div class="container">
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
import NavbarElement from './NavbarElement'

export default {
    name: "Header",
    components: {
        NavbarElement
    }
}
</script>

<style lang="scss" scoped>
    .container {
        width: 100vw;
        height: 60px;
        background-color: $vue-color;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>