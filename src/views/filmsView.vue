<template>
    <NavBar></NavBar>
    <filmsPage></filmsPage>
</template>

<script>
    import NavBar from '@/components/navBar.vue'
    import filmsPage from "../components/filmsPage.vue"

    export default {
        name: 'filmsView',
        components: 
        {
            NavBar, filmsPage
        },
        methods:
        {
            
        }
    }
</script>