<template>
    <div class="container">
        <HeaderElement value="Hello!"/>
        <HeaderElement value="Wordl!"/>
        <HeaderElement />
    </div>
</template>

<script>
import HeaderElement from './HeaderElement'

export default {
    name: "Header",
    components: {
        HeaderElement
    }
}
</script>

<style lang="scss" scoped>
    .container {
        width: 100vw;
        height: 50px;
        background-color: $vue-color;
        display: flex;
    }
</style>