<template>
    <div class="container">
        <img :src="getImage()" alt="">
        <div class="about">
            <h3 class="title"> {{ book.volumeInfo.title }} </h3>
            <h6 class="author"> {{`by ${book.volumeInfo.authors[0]}`}}</h6>
            <p class="subtitle"> {{ book.volumeInfo.subtitle  ? book.volumeInfo.subtitle : '' }} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Book",
    data() {
        return {
            imageURL: ''
        }
    },
    props: {
        book: {}
    },
    methods: {
        getImage() {
            return this.book.volumeInfo.imageLinks.thumbnail;
        }
    },
    mounted: function () {
        console.log(this.book.volumeInfo.imageLinks.thumbnail);
    }

}
</script>

<style lang="scss" scoped>
    h1 {
        background-color: red;
    }
</style>