<template>
    <div v-if="!ready" class="placeholder">Loading...</div>
    <div v-if="ready" class="book-container">
        <img :src="setCover()" alt="" class="book-cover" />
        <div class="book-details">
            <h1 class="book-title">
                {{ book ? book.volumeInfo.title : "Loading..." }}
            </h1>
            <h3 class="book-author">
                {{
                    book.volumeInfo.authors
                        ? `by ${book.volumeInfo.authors[0]}`
                        : ""
                }}
            </h3>
            <div v-html="book.volumeInfo.description" class="book-description"></div>
        </div>
    </div>
</template>

<script>
import router from "../router/index";

export default {
    name: "Details",
    props: {
        bookId: String
    },
    data() {
        return {
            ready: false
        };
    },
    methods: {
        async fetchBook() {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/books/v1/volumes/${this.bookId}`,
                    {
                        method: "GET"
                    }
                );
                if (!response.ok) {
                    alert("Uh oh! Something went wrong!");
                    router.push({ path: "/" });
                }
                return await response.json();
            } catch (error) {
                console.log(error);
            }
        },
        setCover() {
            return this.book.volumeInfo.imageLinks.thumbnail;
        }
    },
    async mounted() {
        this.book = await this.fetchBook();
        this.ready = true;
    }
};
</script>

<style lang="scss" scoped>

.placeholder {
    font-size: 40px;
    margin-top: 40px;
    color: $vue-color;
}
.book-container {
    width: 60%;
    min-width: 600px;
    margin: 60px auto;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 3px 0 1px #ccc;
    -webkit-box-shadow: 3px 0 5px #ccc;
    -moz-box-shadow: 3px 0 5px #ccc;

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
        .book-author {
            margin-top: 10px;
        }
        .book-description {
            padding: 20px;
        }
    }
}
</style>
