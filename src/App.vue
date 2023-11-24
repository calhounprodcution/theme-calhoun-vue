<script lang="ts">
    import { RouterView } from 'vue-router'

    export default {
    created () {
        if (sessionStorage.redirect) {
        const redirect = sessionStorage.redirect
        delete sessionStorage.redirect
        this.$router.push(redirect)
        }
    },
    setup() {
        return {
            RouterView
        }
    }
    }
</script>

<template>
    <RouterView/>
</template>