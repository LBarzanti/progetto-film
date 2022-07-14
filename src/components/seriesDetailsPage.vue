<template>
    <div class="info">
        <h1> {{serie.name}} </h1>
        <div class="dropdown">
            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {{testoPulsante}}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <div v-for="stagione in serie.seasons" :key="stagione.id">
                    <li><a class="dropdown-item" @click="stagioni(stagione)">{{stagione.name}}</a></li>
                </div>
            </ul>
        </div>
        <img src="../assets/images/no18.png" v-if="serie.adult" class="iconcine">
        <span class="iconcine"> {{serie.vote_average}} </span>
                <br><br>
                <div class="descrizione">
                    {{this.serie.overview}}
                    <br>
                    {{producer}}
                    <div v-for="produttore in serie.production_companies" :key="produttore.id">
                        <img :src="setImmagine(produttore.logo_path)" :alt="this.disponibilità" class="logo">
                        {{produttore.name}}
                    </div>
                    <br>
                    {{genere}}
                    <div v-for="genere in serie.genres" :key="genere.id">
                        {{genere.name}}
                    </div>
                </div>
    </div>
            <div class="backdrop">
                <img :src="setImmagine(this.backdropPath)" alt="" class="immagine">
            </div>
            <div class="poster">
                <img :src="setImmagine(this.imagePath)" alt="" class="immagine">
            </div>
</template>

<script>

    export default 
    {
        data() 
        {
            return{
                serie:{},
                id:this.$route.params.id,
                language:"it-IT",
                testoPulsante:"seleziona stagione",
                imagePath:"",
                backdropPath:"",
                producer:" creato da: ",
                disponibilità:" immagine non disponibile",
                genere:" generi: "
            }
        },
        methods: 
        {
            getData()
            {
                fetch(`https://api.themoviedb.org/3/tv/${this.id}?api_key=6f9286d54de4891ea7a5c91779e09786&language=${this.language}`)
                .then(res => res.json() )
                .then(data => this.serie = data)
                .then(data => console.log(this.serie))
                .catch(err => console.log(err.message))
            },
            traduci(lingua)
            {
                console.log("entrato")
                if (lingua=="it-IT") 
                {
                    console.log("traduzione in italiano")
                    this.testoPulsante="seleziona stagione"
                    this.language="it-IT"
                    this.producer="creato da: "
                    this.disponibilità="immagine non disponibile"
                    this.genere="genere: "
                    this.getData()
                }
                else
                {
                    console.log("traduzione in inglese")
                    this.testoPulsante="select season"
                    this.language="en-US"
                    this.producer="created by: "
                    this.disponibilità="image not available"
                    this.genere="genres: "
                    this.getData()
                }
            },
            stagioni(stagione)
            {
                this.testoPulsante=stagione.name
                console.log(this.testoPulsante)
                this.imagePath=stagione.poster_path
                this.backdropPath=this.serie.backdrop_path
            },
            setImmagine(path)
            {
                return "https://image.tmdb.org/t/p/original" + path
            },
        },
        created()
        {
            this.getData()
        },
        watch:
        {
            $route (to, from)
            {
                console.log("arrivato")
                this.language=to.query.lang
                this.traduci(this.language)
            }
        }
    }
</script>

<style scoped>
    .info
    {
        float: left;
        margin: 30px 30px;
        color: white;
    }
    .poster
    {
        float:right;
        width: 30.436%;
        height: 50%;
    }
    .backdrop
    {
        float: left;
        width: 44%;
    }
    .immagine
    {
        width: 100%;
    }
    .iconcine
    {
        margin: 5px 5px;
        float: left;
        width: 35px;
    }
    .dropdown
    {
        float: left;
    }
    .descrizione
    {
        background-color: black; 
        margin-top: 5px;
        margin-right: 5.5px;
        width: 421px;
    }
    .logo
    {
        background-color: white;
        width: 100px;
        color: black;
        margin-bottom: 5px;
    }
</style>