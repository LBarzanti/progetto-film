<template>
    <nav-bar/>
    <films-details-page/>
</template>

<script>
    import NavBar from '@/components/navBar.vue'
    import FilmsDetailsPage from '@/components/filmsDetailsPage.vue'

    export default {
        name: 'FilmsDetailsView',
        components: 
        {
            NavBar, FilmsDetailsPage
        }
    }
</script>