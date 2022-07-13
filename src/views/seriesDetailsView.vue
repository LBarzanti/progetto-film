<template>
    <NavBar></NavBar>
    <seriesDetailsPage></seriesDetailsPage>
</template>

<script>
    import NavBar from '@/components/navBar.vue'
    import seriesDetailsPage from '@/components/seriesDetailsPage.vue'

    export default {
        name: 'SeriesDetailsView',
        components: 
        {
            NavBar, seriesDetailsPage
        }
    }
</script>