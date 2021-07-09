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
        border-radius: 5px;
        height: 75%;
        background-color: white;
        color: $vue-color;

        font-size: 20px;
        padding: 5px;
        margin: 0 10px;
        text-align: center;
        box-shadow: 0 0 5px rgb(78, 78, 78);
        &:hover {
            cursor: pointer;

        }
        &:active {
             box-shadow: 0 0 2px rgb(37, 37, 37);
            transition: box-shadow 0.1s;
        }

        p {
            
        }
        
    }
</style>