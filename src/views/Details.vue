<template>
    <div class="book-container">
        <img :src="getImage()" alt="" class="book-cover" />
        <div class="book-details">
            <h1 class="book-title">{{ book ? book.volumeInfo.title : 'Loading...'}}</h1>
            <h3 class="book-author">{{ `by ${book.volumeInfo.authors[0]}` }}</h3>
        </div>
    </div>
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
    data() {
        return {
            book: {
                isEmpty: false,
                volumeInfo: {
                    title: "Book Title"
                }
            },
            ready: false,
        };
    },
    methods: {
        async fetchBook() {
            let bookData = {};

            await fetch(
                `https://www.googleapis.com/books/v1/volumes/${this.bookId}`,
                {
                    method: "GET",
                }
            )
                .then((response) => response.json())
                .then((book) => {
                    bookData = book;
                })
                .catch((error) => console.log(error));

            return bookData;
        },
        getImage() {
            // console.log(this.book.volumeInfo?.imageLinks.large);
            if (!this.book.volumeInfo?.imageLinks) return "";
            return this.book.volumeInfo?.imageLinks.thumbnail;
        },
    },
    async mounted() {
        this.book = await this.fetchBook();
        console.log(this.book);
    },
};
</script>

<style lang="scss" scoped>
.book-container {
    border: 2px solid red; //debug
    width: 60%;
    min-width: 600px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    .book-cover {
        height: 400px;
        max-width: 50%;
    }
    .book-details {
        min-width: 50%;
        max-width: 100%;
        min-height: 400px;
        padding: 20px;
        color: $vue-color;
        .book-title {
            
        }
        .book-author {
        }
    }
}
</style>