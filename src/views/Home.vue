<template>
    <h1>Find the book you're looking for!</h1>
    <input type="text" v-model="text" v-on:keyup.enter="clicked()" placeholder="Enter the book title">
    <button @click="clicked()"><i class="fas fa-search"></i></button>
    <div class="books__container">
        <Book :key="book.id" v-for="book in books" v-bind:book="book" />
    </div>

    
</template>

<script>
import Book from '../components/Book';

export default {
    name: "Home",
    data() {
        return {
            books: [],
            text: '',
        }
    },
    components: {
        Book,
    },
    methods: {
        async clicked() {
            try {
                const result = await this.fetchBooks();
                const jsonResult = await result.json();
                console.log(jsonResult.items);
                this.books = jsonResult.items;
            } catch (error) {
                console.log(error);
            }
        },
        async fetchBooks() {
            const resolved = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${this.text}&langRestrict=en&maxResults=30`,
                {
                    method: "GET"
                });
                resolved.status === 200 ? console.log("success") : console.log("fail");
                return resolved;
        }
    }

}
</script>

<style lang="scss" scoped>
    h1 {
        color: $vue-color;
        margin: 40px 0 20px;
    }
    input {
        height: 30px;
        width: 300px;
        font-size: 25px;
        border: none;
        border-bottom: solid 1px $vue-color;
        color: $vue-color;
        &:active, &:focus {
            transition: 0.1s;
            border: none;
            border-bottom: solid 3px $vue-color;
            outline: none;
        }
        &::placeholder {
            color: rgb(190, 190, 190);
        }
    }
    button {
        height: 50px;
        width: 50px;
        color: white;
        font-size: 25px;
        margin-left: 30px;
        background-color: $vue-color;
        border: none;
        i {
            margin: auto;
        }
        &:hover, &:active {
            transition: .1s;
            cursor: pointer;
            background-color: white;
            color: $vue-color;
            border: 3px solid $vue-color;
        }
        &:active {
            transition: 0.1s;
            color: $vue-color;
        }
    }

    .books__container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        width: 80vw;
        margin: 0 auto;
    }
</style>