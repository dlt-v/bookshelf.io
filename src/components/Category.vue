<template>
    <div class="category">
        {{ category }}
    </div>
</template>

<script>
export default {
    name: 'Category',
    props: {
        category: String
    }
}
</script>

<style lang="scss" scoped>
    .category {
        display: inline-block;
        border: green solid 2px;
        padding: 5px;
        border-radius: 20px;
        margin: 5px;
    }
</style>