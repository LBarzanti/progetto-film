<template>
    <div class="info">
        <h1> {{film.title}}</h1>
        <img src="../assets/images/no18.png" v-if="film.adult" class="iconcine">
        <div class="iconcine">
            {{voto}}{{ film.vote_average}}
        </div>
        <br><br>
        <div class="descrizione">
            <h3>{{descrizione}}</h3>
            {{this.film.overview}}
            <br>
            <h3>{{producer}}</h3>
            <div v-for="produttore in film.production_companies" :key="produttore.id">
                <img :src="setImmagine(produttore.logo_path)" :alt="this.disponibilità" class="logo">
                {{produttore.name}}
            </div>
            <br>
                <h3>{{genere}}</h3>
            <div v-for="genere in film.genres" :key="genere.id">
                {{genere.name}}
            </div>
        </div>
        <div class="backdrop">
            <img :src="setImmagine(film.backdrop_path)" :alt="this.disponibilità" class="immagine">
        </div>
        <div class="poster">
        <img :src="setImmagine(film.poster_path)" :alt="this.disponibilità" class="immagine">
    </div>
    </div>
</template>

<script>
    export default 
    {
        data() 
        {
            return{
                film:{},
                id:this.$route.params.id,
                language:"it-IT",
                imagePath:"",
                backdropPath:"",
                descrizione:"trama: ",
                producer:" creato da: ",
                disponibilità:" immagine non disponibile",
                genere:" generi: ",
                voto:" valutazione: "
            }
        },
        methods:
        {
            getData()
            {
                fetch(`https://api.themoviedb.org/3/movie/${this.id}?api_key=6f9286d54de4891ea7a5c91779e09786&language=${this.language}`)
                .then(res => res.json() )
                .then(data => this.film = data)
                .then(data => console.log(this.film))
                .catch(err => console.log(err.message))
            },
            setImmagine(path)
            {
                if(path==null)
                {
                    return require('../assets/images/immagine-non-disponibile.png')
                }
                return "https://image.tmdb.org/t/p/original" + path
            },
            traduci()
            {
                if (this.language=="it-IT") 
                {
                    this.descrizione="trama: "
                    this.producer="creato da: "
                    this.disponibilità="immagine non disponibile"
                    this.genere="generi: "
                    this.voto="valutazione: "
                }
                else
                {
                    this.descrizione="story: "
                    this.producer="created by: "
                    this.disponibilità="image not available"
                    this.genere="genres: "
                    this.voto="rating: "
                }
                this.getData()
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
        width: 30%;
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
        margin: 0px 5px;
        margin-bottom: px;
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
        margin-left: 0px;
        width: 421px;
        float: left;
    }
    .logo
    {
        background-color: white;
        width: 100px;
        color: black;
        margin-bottom: 5px;
    }
</style>