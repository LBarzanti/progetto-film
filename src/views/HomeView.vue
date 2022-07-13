<template>
  <div>
    <NavBar/>
    <homePage/>
  </div>
</template>

<script>
// @ is an alias to /src
  import NavBar from '@/components/navBar.vue'
  import homePage from '../components/homePage.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar, homePage
}
}
</script>