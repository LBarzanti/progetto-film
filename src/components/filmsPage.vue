<template>
    <div class="search-bar">
        <input class="form-control me-2" v-model="myInput">
        <button class="btn btn-outline-success btn-warning" @click="cerca()" role="submit">Search</button>
        <div class="check">
            <span>{{sensibili}}</span>
            <input v-model="checked" type="checkbox" name="adult-mode"/>
        </div>
    </div>
    <div >
      <div v-for="film in populars.results" :key="film.id">
        <div class="card " style="width: 18rem;">
          <img :src="setImmagine(film.poster_path)" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title"> {{film.name}}</h5>
            <p class="card-text"> {{setDettagli(film.release_date)}}</p>
            <router-link :to="{name: 'filmsDetails', params:{id: film.id}}" class="btn btn-success card-button"> <h5> {{this.profileButton}} </h5></router-link>
          </div>
        </div>
      </div>
    </div>
    
    <button type="button" class="btn-movimento" @click="addPage">
      <img src="../assets/images/freccia.png" id="freccia">
    </button>
</template>

<script>
    export default 
    {
      name: 'filmsPageIt',
        data() 
        {
            return {
                pages:1,
                language:"it-IT",
                populars:{
                    page:1,
                    results:[],
                    total_pages:0,
                    total_results:0
                },
                popoverControll:false,
                profileButton:"vai al profilo del film",
                dettagli:"è stato pubblicato in data: ",
                myInput:"",
                search:"",
                checked:false,
                sensibili:"mostra risultati sensibili"
            }
        },
        methods: {
            getData()
            {
                fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6f9286d54de4891ea7a5c91779e09786&language=${this.language}&page=${this.pages}`)
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
                return this.dettagli + first_air_date
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
                    alert("sono già state caricate tutte le pagine")
                }
            },
            traduci()
            {
                console.log("entrato")
                if(this.language=="it-IT")
                {
                    console.log("traduzione in italiano")
                    this.profileButton="vai al profilo del film"
                    this.dettagli="è stato pubblicato in data: "
                    this.sensibili="mostra risultati sensibili"
                    this.populars={
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
                    this.profileButton="go to the film profile"
                    this.dettagli="was published on: "
                    this.sensibili="shows sensitive results"
                    this.populars={
                        page:1,
                        results:[],
                        total_pages:0,
                        total_results:0
                    }
                    this.getData()
                }
            },
            cerca()
            {
                this.search=this.myInput
                if (this.search=="") 
                {
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
                    this.populars=
                    {
                        page:1,
                        results:[],
                        total_pages:0,
                        total_results:0
                    }
                    fetch(`https://api.themoviedb.org/3/search/movie?api_key=6f9286d54de4891ea7a5c91779e09786&language=${this.language}&query=${this.search}&page=${this.pages}&include_adult=${this.checked}`)
                    .then(res => res.json() )
                    .then(data => 
                    {
                        this.populars.results = data.results
                        console.log(this.populars)
                    })
                    .catch(err => console.log(err.message))
                }
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
                this.traduci()
            }
        }
    }
    
</script>

<style>
    .form-control
    {
        margin-left: 23%;
        float: left;
        width: 50%;
    }
    .search-bar
    {
        margin-top: 0.5%;
        color: white;
    }
    .check
    {
        text-align: center;
    }
    .check span
    {
        margin: 0.5%;
    }
</style>