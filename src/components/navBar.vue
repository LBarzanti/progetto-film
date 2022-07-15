<template>
    <nav class="navbar navbar-expand-lg bg-primary">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="'/' + '?lang=' + this.$route.query.lang">THE FILM PLACE</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <span class="leg" v-if="isNotHomePage"> {{ serie }} </span>
          <Toggle v-if="isNotHomePage" v-model="section" @change="switchSection" class="toggle-yellow-blue"/>
          <span v-if="isNotHomePage" class="leg dividi"> {{film}} </span>

          <span class="leg"> {{ eng }} </span>
          <Toggle v-model="language" @change="switchLang" class="toggle-yellow-blue"/>
          <span class="leg"> {{ ita }} </span>
        </div>
      </div>
    </nav>
</template>

<script>
  import Toggle from '@vueform/toggle'
    export default{
      components:{
        Toggle
      },
      data()
      {
        return{
            section:null,
            language:null,
            myInput:"",
            search:"",
            serie:"serie tv",
            film:"film",
            ita:"italiano",
            eng:"inglese"
        }
      },
      computed:{
        isNotHomePage() {
          return this.$route.path !== '/'
        }
      },
    methods:{
      switchSection()
      {
        if (this.section !== null || this.$route.path !== '/') 
        {
          const path=this.section ? '/film' : '/serie'
          this.$router.replace(path + "/" + "?lang=" + this.$route.query.lang)
        }
      },
      switchLang()
      {
        const query=this.language ? 'it-IT' : 'en-US'
        this.$router.replace({ query: {lang:query} })
      },
      cerca()
      {
        this.search=this.myInput
        
      },
      traduci()
      {
        if (this.$route.query.lang==="it-IT" || this.$route.query.lang == undefined) 
        {
          this.eng="inglese"
          this.ita="italiano"
          this.serie="serie tv"
          this.film="film"
          this.language=true
          this.switchLang()
        }
        else
        {
          this.eng="english"
          this.ita="italian"
          this.serie="tv series"
          this.film="movies"
          this.language=false
          this.switchLang()
        }
      }
    },
    created()
    {
      this.traduci()
    },
    watch:
    {
      '$route.query.lang':
            {
              handler: function(language) {
                this.traduci()
              },
              deep: false,
              immediate: true
            
            }
    }
  }
</script>
<style src="@vueform/toggle/themes/default.css"/>
<style scoped>
.leg
{
  color: white;
  margin: 0px 15px;
}
.dividi
{
  margin-right: 50px
}
.toggle-yellow-blue
{
  --toggle-bg-on: yellow;
  --toggle-border-on: yellow;
  --toggle-bg-off: blue;
  --toggle-border-off: blue;
}
</style>