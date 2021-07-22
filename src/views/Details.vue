<template>
    <h1>{{bookId}}</h1>
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
    }
}
</script>