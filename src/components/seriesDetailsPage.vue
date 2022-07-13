<template>
    <div>
        
            <div class="info">
                <h1> {{serie.name}} </h1>
                <div class="dropdown">
                    <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {{testoPulsante}}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <div v-for="stagione in serie.seasons" :key="stagione.id">
                            <li><a class="dropdown-item" href="#" @click="stagioni(stagione)">{{stagione.name}}</a></li>
                        </div>
                    </ul>
                </div>
                <div style="background-color: black; margin-top: 5px; width: 400px;">
                    {{this.serie.overview}}
                </div>
            </div>
            <div class="backdrop">
                <img :src="setImmagine(this.backdropPath)" alt="" class="immagine">
            </div>
            <div class="poster">
                <img :src="setImmagine(this.imagePath)" alt="" class="immagine">
            </div>
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
                backdropPath:""
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
                    this.getData()
                }
                else
                {
                    console.log("traduzione in inglese")
                    this.testoPulsante="select season"
                    this.language="en-US"
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
        margin: 30px 30px;
        color: white;
        float: left;
    }
    .poster
    {
        float:right;
        width: 587px;
    }
    .backdrop
    {
        margin-left: 10px;
        float: left;
        width: 863px;
    }
    .immagine
    {
        width: 100%;
    }
</style>