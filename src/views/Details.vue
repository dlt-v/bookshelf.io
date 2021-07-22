<template>
    <h1>{{bookId}}</h1>
</template>

<script>
export default {
    name: "Details",
    props: {
        bookId: String,
    }
}
</script>