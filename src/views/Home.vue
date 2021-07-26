<template>
    <h1>Find the book you're looking for!</h1>
    <input type="text" v-model="text" v-on:keyup.enter="clicked(true)" placeholder="Enter the book title">
    <button @click="clicked(true)"><i class="fas fa-search"></i></button>
    <div class="books__container">
        <Book :key="book.id" v-for="book in books" v-bind:book="book" />
    </div>
    <div v-if="showNav" class="navigation">
        <div v-if="currentPage" class="nav__button nav__button--back" @click="changePage(-1)"><i class="fas fa-arrow-left"></i></div>
        <div v-if="notLastPage" class="nav__button nav__button--forward" @click="changePage(1)"><i class="fas fa-arrow-right"></i></div>
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
            showNav: false,
            currentPage: 0,
            notLastPage: true
        }
    },
    components: {
        Book,
    },
    methods: {
        async clicked(restart = false) {
            try {
                const result = await this.fetchBooks();
                const jsonResult = await result.json();
                // console.log(jsonResult.items);
                this.books = jsonResult.items;
            } catch (error) {
                console.log(error);
            }
            this.showNav = true;
            if (restart) this.currentPage = 0;
            if (this.books.length < 30) {
                this.lastPage = false;
            } else {
                this.lastPage = true;
            }
            window.scrollTo(0,0);
        },
        async fetchBooks() {
            const resolved = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${this.text}&langRestrict=en&maxResults=30&startIndex=${this.currentPage * 30}`,
                {
                    method: "GET"
                });
                return resolved;
        },
        async changePage(diff) {
            console.log(`Current page: ${this.currentPage} + (${diff})`);
            this.currentPage += diff;
            this.clicked();
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
        width: 80%;
        margin: 30px auto 0 auto;

    }

    .navigation {
        width: 150px;
        margin: 10px auto 30px auto;
        display: block;
        display: flex;
        justify-content: center;

        .nav__button {
            height: 60px;
            font-size: 1.9em;;
            background-color: $vue-color;
            color: white;
            border-radius: 5px;
            width: 60px;
            text-align: center;
            padding: 12px;
            transition: .1s;
            &--back {
                margin-right: 30px;
            }
            &--inactive {
                display: none;
            }
            &:hover {
                cursor: pointer;
                transform: scale(1.1, 1.1);
            }
            &:active {
                transform: scale(1.05, 1.05);
            }
        }
    }
</style>