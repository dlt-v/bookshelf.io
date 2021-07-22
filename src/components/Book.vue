<template>
    <router-link style="text-decoration: none;" to="/book">
        <div class="container">
            <img :src="getImage()" :alt="formatTitle()" />
            <div class="about">
                <h3 class="title">{{ formatTitle() }}</h3>
                <h6 class="author">{{ returnAuthors() }}</h6>
                <!-- <p class="subtitle">
                {{ book.volumeInfo.subtitle ? book.volumeInfo.subtitle : "" }}
            </p> -->
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "Book",
    data() {
        return {
            imageURL: ""
        };
    },
    props: {
        book: {}
    },
    methods: {
        getImage() {
            if (!this.book.volumeInfo.imageLinks) return "";
            return this.book.volumeInfo.imageLinks.thumbnail;
        },
        returnAuthors() {
            if (!this.book.volumeInfo.authors) return "";
            if (this.book.volumeInfo.authors.length === 1) {
                return `by ${this.book.volumeInfo.authors[0]}`;
            } else {
                let authors = "by ";
                let i = 0;
                for (let author of this.book.volumeInfo.authors) {
                    if (i > this.book.volumeInfo.authors.length) {
                        authors += ` ${author},`;
                    } else {
                        authors += ` ${author}`;
                    }
                    i++;
                }
                return authors;
            }
        },
        formatTitle() {
            if (!this.book.volumeInfo.title) return "";

            if (this.book.volumeInfo.title.length < 58) {
                return this.book.volumeInfo.title;
            } else {
                let newTitle = "";
                for (let i = 0; i < 45; i++) {
                    newTitle += this.book.volumeInfo.title[i];
                }
                newTitle += "...";
                return newTitle;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    width: 350px;
    height: 180px;
    background-color: rgb(220, 255, 242);
    border-radius: 10px;
    display: flex;
    position: relative;
    justify-content: space-between;
    margin: 20px;
    transition: all 0.2s;
    color: $vue-dark;

    img {
        height: 100%;
        max-width: 40%;
        box-shadow: 3px 0 1px #ccc;
        -webkit-box-shadow: 3px 0 5px #ccc;
        -moz-box-shadow: 3px 0 5px #ccc;
    }
    .about {
        height: 60%;
        margin: auto 0;
        flex-grow: 2;
        padding: 10px;

        .title {
            overflow: hidden;
        }
        .author {
        }
        .subtitle {
            margin-top: 10px;
        }
    }

    &:hover,
    &:focus {
        cursor: pointer;
        background-color: $vue-color;
        transform: scale(1.2, 1.2);
        color: white;
        box-shadow: 0 0 10px #ccc;
        -webkit-box-shadow: 0 0 10px #ccc;
        -moz-box-shadow: 0 0 10px #ccc;

        & > img {
            box-shadow: none;
        }
    }

    &:active {
        transform: scale(1.1, 1.1);
    }
}
</style>
