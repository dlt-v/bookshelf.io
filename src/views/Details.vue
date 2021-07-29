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
            <p>Is this book available in:</p>
            <p>Epub: {{book.accessInfo.epub.isAvailable ? 'Yes' : 'No'}}</p>
            <p>PDF: {{book.accessInfo.pdf.isAvailable ? 'Yes' : 'No'}}</p>
            <p>Page count: {{book.volumeInfo.pageCount ? book.volumeInfo.pageCount : 'Not available'}}</p>
            <p>Date: {{book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : 'Not available'}}</p>
            <p>Publisher: {{book.volumeInfo.publisher ? book.volumeInfo.publisher : 'Not available'}}</p>
        </div>
    </div>
    <div v-if="ready" class="categories">
        <Category :key="category" v-for="category in book.volumeInfo.categories" :category="category"/>
    </div>
</template>

<script>
import router from "../router/index";
import Category from "../components/Category";

export default {
    name: "Details",
    props: {
        bookId: String
    },
    components: {
        Category
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
        console.log(this.book);
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
    max-width: 800px;
    margin: 60px auto 0 auto;
    display: flex;
    justify-content: space-between;
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
.categories {
    width: 60%;
    min-width: 600px;
    max-width: 800px;
    margin: 10px auto;
}
</style>
