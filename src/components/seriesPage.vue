<template>
    <div >
      <div v-for="serie in populars.results" key="id">
        <div class="card " style="width: 18rem;">
          <img :src="setImmagine(serie.poster_path)" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title"> {{serie.name}}</h5>
            <p class="card-text"> {{this.dettagli + serie.first_air_date}}</p>
            <router-link :to="{name: 'seriesDetails', params:{id: serie.id}}" class="btn btn-success card-button"> <h5> {{this.profileButton}} </h5></router-link>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn-movimento" @click="addPage">
      <img src="../assets/images/freccia.png" id="freccia">
    </button>
    <button type="button" class="btn btn-primary" @click="leggi()"> premi </button>
</template>

<script>
  export default 
  {
    name: 'seriesView',
      data() 
      {
        return {
          pages:1,
          populars:{
            page:1,
            results:[],
            total_pages:0,
            total_results:0
          },
          popoverControll:false,
          profileButton:"vai al profilo della serie",
          language:"",
          dettagli:"la prima apparizione in tv è avvenuta in data: "
        }
      },
      methods: 
      {
        getData()
        {
          fetch(`https://api.themoviedb.org/3/tv/popular?api_key=6f9286d54de4891ea7a5c91779e09786&language=${this.language}&page=${this.pages}`)
          .then(res => res.json() )
          .then(data => 
          {
            this.populars.results = this.populars.results.concat(data.results)
            this.populars.page=data.page
            this.populars.total_pages=data.total_pages
            this.populars.total_results=data.total_results
          })
          .catch(err => console.log(err.message))
        },
        setImmagine(poster_path)
        {
          if (poster_path==null) 
          {
            return "../assets/images/immagine non disponibile.png"
          }
            return "https://image.tmdb.org/t/p/original" + poster_path
        },
        setDettagli(first_air_date)
        {
          if(this.lang==false)
          {
            return "the first appearance on tv took place on: " + first_air_date
          }
          else
          {
            return "la prima apparizione in tv è avvenuta in data: " + first_air_date
          }
        },
        openPopover()
        {
          if(this.popoverControll==false)
          {
            const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
            const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
            this.popoverControll=true
          }
        },
        addPage()
        {
          if (this.pages < this.populars.total_pages) 
          {
            this.pages++
            this.getData()
          }
          else
          {
            if (lang==true) 
            {
              alert("sono già state caricate tutte le pagine")
            }
          }
        },
        traduci(lingua)
        {
          console.log("entrato")
          if(lingua=="it-IT")
          {
            console.log("traduzione in italiano")
            this.profileButton="vai al profilo della serie"
            this.dettagli="la prima apparizione in tv è avvenuta in data: "
            this.populars=
            {
              page:1,
              results:[],
              total_pages:0,
              total_results:0
            }
            this.getData()
          }
          else
          {
            console.log("traduzione in inglese")
            this.profileButton="go to the series profile"
            this.dettagli="the first appearance on tv took place on: "
            this.populars=
            {
              page:1,
              results:[],
              total_pages:0,
              total_results:0
            }
            this.getData()
          }
        },
        leggi()
        {
          console.log(this.$router)
        }
      },
      created()
      {
        this.getData()
      },
      watch:
      {
        $route (to, from)
        {
          console.log("ricevuto")
          this.language=to.query.lang
          this.traduci(this.language)
        }
      }
  }
</script>