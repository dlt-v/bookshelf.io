<template>
    <input type="text" v-model="text" v-on:keyup.enter="search()" placeholder="Search" class="navbar-search">
</template>

<script>
export default {
    name: `NavbarSearch`,
    methods: {
        search() {
            // if (document.activeElement === document.querySelector('.navbar-search'))
            console.log(`I am pushed!`);
        }
    }
}
</script>

<style lang="scss" scoped>
    input {
        height: 42px;
        width: auto;
        max-width: 200px;
        font-size: 23px;
        border: none;
        color: $vue-color;
        border-radius: 5px;
        padding: 11px;
        margin-right: 10px;

        &:active, &:focus {
            transition: 0.1s;
            outline: none;
        }
        &::placeholder {
            color: rgb(190, 190, 190);
        }
    }
</style>