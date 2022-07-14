<template>
        <br><br><br><br><br><br><br><br>
        <div class="div-immagini float-start">
            <img src="../assets/images/PopCorn.jpg" class="img">
        </div>
        <div class="centro float-start">
            <h1> {{welcome}}</h1>
            <h3> {{subTitle}} </h3>
            <div>
                <router-link class="btn btn-info bottoni" :to="this.filmPath">{{film}}</router-link>
                <router-link class="btn btn-info bottoni" :to="this.seriesPath">{{serie}}</router-link>
            </div>
        </div>
        <div class="div-immagini float-start">
            <img src="../assets/images/PopCorn.jpg" class="img">
        </div>
</template>

<script>
import { thisExpression } from '@babel/types'

    export default 
    {
        data()
        {
            return{
                language:"",
                welcome:"Benvenuto su The Film Place",
                subTitle:"Qui puoi trovare i migliori film e le migliori serie tv per le tue maratone",
                film:"FILM",
                serie:"SERIE",
                filmPath:"/film?lang=it-IT",
                seriesPath:"/serie?lang=it-IT",
                myInput:"",
                search:"",
                checked:false,
                sensibili:"mostra risultati sensibili",
            }
        },
        methods:
        {
            traduci(lingua)
            {
                if(lingua=="it-IT")
                {
                    console.log("traduzione in italiano")
                    this.welcome="Benvenuto su The Film Place"
                    this.subTitle="Qui puoi trovare i migliori film e le migliori serie tv per le tue maratone"
                    this.film="FILM"
                    this.serie="SERIE"
                    this.filmPath="/film?lang=it-IT"
                    this.seriesPath="/serie?lang=it-IT"
                    this.sensibili="mostra risultati sensibili"
                }
                else
                {
                    console.log("traduzione in inglese")
                    this.welcome="Welcome to The Film Place"
                    this.subTitle="Here you can find the best movies and the best TV series for your marathons"
                    this.film="FILMS"
                    this.serie="SERIES"
                    this.filmPath="/film?lang=en-US"
                    this.seriesPath="/serie?lang=en-US"
                    this.sensibili="shows sensitive results"
                }
            },
            
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

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap');
    h1,h3
    {
        margin: 20px 0px;
        text-align: center;
        color:aqua;
    }
    .div-immagini
    {
        margin: 20px 5px;
        width: 24.3%;
    }
    .centro
    {
        width: 50%;
        float: left;
        font-family: 'Rubik Moonrocks', cursive;
        text-align: center;
    }
    img
    {
        width:100%;
        border-radius: 10%;
    }
    .bottoni
    {
        margin: 60px 120px;
        font-family:'Times New Roman', Times, serif;
    }
</style>