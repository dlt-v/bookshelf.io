<template>
    <div class="container__items">
            <p>{{ value }}</p>
        
    </div>
</template>

<script>
export default {
    name: "HeaderElement",
    props: {
        value: {
            type: String,
            default: "No text!"
        },
        path: {
            type: String,
            default: "/error"
        }
    }
}
</script>

<style lang="scss" scoped>
    .container__items {
        -webkit-box-sizing: border-box !important;
        -moz-box-sizing: border-box !important;
        -ms-box-sizing: border-box !important;
        box-sizing: border-box !important;
        border-radius: 5px;
        width: 132px;
        height: 75%;
        background-color: white;
        color: $vue-color;

        font-size: 20px;
        padding: 10px 15px;
        margin: 0 10px;
        text-align: center;
        &:hover {
            transition: .2s;
            cursor: pointer;
            border: 1px solid white;
            background-color: $vue-color;
            color: white;
        }
        &:active {
            background-color: $vue-dark;
        }
        
    }
</style>