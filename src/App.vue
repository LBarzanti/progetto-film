<template>
  <nav-bar/>
  <router-view/>
</template>
<script>
  import NavBar from '@/components/navBar.vue'
  export default 
  {
    components:
    {
      NavBar
    },
    data()
    {
      return{
        
      }
    },
    methods:
    {
      
    }
  };
</script>
<style>
.card-title
{
  text-align: center;
  font-size:13px;
  
}
.btn-movimento
{
  position:fixed;
  width:60px;
  height:60px;
  bottom:2px;
  right:50%;
  background-color:#0C9;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  box-shadow: 2px 2px 3px #999;
}
.card
{
  margin-left: 80px;
  margin-top: 25px;
  margin-bottom: 25px;
  float: left

}
#background
{
  width: 100%;
  height: 100%;
  background-image:url(./assets/images/sfondo.jpg);
  background-repeat:repeat-y;
  background-size: 100% ;
}
.card-img-top
{
  width: 286px !important;
  height: 430px;
}
.card-button
{
  width: 80%;
  margin: 3% 10%;
  padding: 5px !important;
}
#freccia
{
  width: 30px;
}
.card-text
{
  text-align: center;
  font-size: 18px;
}
</style>

