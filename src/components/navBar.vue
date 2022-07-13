<template>
    <nav class="navbar navbar-expand-lg bg-primary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">THE FILM PLACE</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{ sezione() }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button class="dropdown-item button" v-on:click=" switchSection "> {{ opzione() }} </button>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{ lingua }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button class="dropdown-item button" v-on:click=" switchLang "> {{ lingua2 }} </button>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search" v-if="language==1">
            <input class="form-control me-2" type="search" placeholder="Cerca" aria-label="Search">
            <button class="btn btn-outline-success btn-warning" type="submit"> cerca </button>
          </form>
          <form class="d-flex" role="search" v-else>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success btn-warning" type="submit"> search </button>
          </form>
        </div>
      </div>
    </nav>
</template>

<script>
    export default{
      data()
      {
        return{
            section:true,
            language:true
        }
      },
    methods:{
      switchSection()
      {
        this.section= !this.section
        const path=this.section ? '/film' : '/serie'
        this.$router.push(path)
      },
      switchLang()
      {
        this.language = !this.language
        const query=this.language ? 'it-IT' : 'en-US'
        this.$router.replace({ query: {lang:query} })
      },
      sezione(){
        if (this.section) {
          return 'FILM'
        }
        else
        {
          return 'SERIE TV'
        }
      },
      opzione(){
        if (this.section) {
          return 'SERIE TV'
        }
        else
        {
          return 'FILM'
        }
      }
    },
    computed:{
      lingua()
      {
        if (this.language==true) 
        {
          return 'italiano'  
        }
        else
        {
          return 'english'  
        }
      },
      lingua2()
      {
        if (this.language==true) 
        {
          return 'english'  
        }
        else
        {
          return 'italiano'
        }
      },
      
    },

    }
</script>