<template>
    <h1>{{ bookId }}</h1>
</template>

<script>
//TODO: Fetch data about the book.
//TODO: Add styling
//TODO: Add option to add to favourites
//TODO?: Add option to add comments
export default {
    name: "Details",
    props: {
        bookId: String,
    },
    methods: {
        async fetchBook() {
            await fetch(
                `https://www.googleapis.com/books/v1/volumes/${this.bookId}`,
                {
                    method: "GET",
                }
            )
            .then(response => response.json())
            .then(book => console.log(book.volumeInfo.title))
            .catch(error => console.log(error));
        },
    },
    mounted() {
        
        console.log(this.fetchBook());
    },
};
</script>