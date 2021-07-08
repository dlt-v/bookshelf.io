<template>
    <h1>Hello!</h1>
    <input type="text" v-model="text" placeholder="Enter the book title">
    <button @click="clicked()">Please click me!</button>
    <div :key="book.id" v-for="book in books">
        <h3>{{book.volumeInfo.title}}</h3>

    </div>
</template>

<script>
// import bookSearch from '../components/BookSearch';
// import Books from '../components/Books';

export default {
    name: "Home",
    data() {
        return {
            books: [],
            text: '',
        }
    },
    components: {},
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
                `https://www.googleapis.com/books/v1/volumes?q=${this.text}&langRestrict=en`,
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

</style>