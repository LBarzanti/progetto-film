<template>
    <NavBar></NavBar>
    <seriesPage></seriesPage>
</template>

<script>
    import NavBar from '@/components/navBar.vue'
    import seriesPage from "../components/seriesPage.vue"

    export default {
        name: 'SeriesView',
        components: 
        {
            NavBar, seriesPage
        }
    }
</script>