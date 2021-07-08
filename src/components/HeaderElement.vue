<template>
    <h3>{{ value }}</h3>
</template>

<script>
export default {
    name: "HeaderElement",
    props: {
        value: {
            type: String,
            default: "No text!"
        }
    }
}
</script>

<style lang="scss" scoped>

</style>