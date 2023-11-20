<template>
  <HeaderComponent  @change-value="getBoth"/>
    <HeroComponent/>
    <CardListComponent/>
 
  
  <main>  
    <h2 >Movies</h2>
    <!-- <div 
    v-for="movie in store.movieList">{{ movie.title }} {{ movie.orginal_title }} {{ movie.vote_average }} {{ movie.original_language }}
    <img :src="store.imgUrl+movie.poster_path" :alt="movie.title">
    <img :src="'https://flagsapi.com/'+movie.original_language.toUpperCase().substring(0,2)+ '/shiny/64.png'" >
    <i v-for="star in voteStars(movie)" class="fa-solid fa-star"></i>
    </div> -->
    <h2>Series</h2>
    <div v-for="serie in store.seriesList">{{ serie.name }} {{ serie.orginal_title }} {{ serie.vote_average }} {{ serie.original_language }}
    <img :src="store.imgUrl+serie.poster_path" :alt="serie.title">
    <img :src="'https://flagsapi.com/'+serie.original_language.toUpperCase().substring(0,2)+ '/shiny/64.png'" >
    <i v-for="star in voteStars(serie)" class="fa-solid fa-star"></i>
    </div>
    <div>

    </div>
  </main>
</template>

<script>
import axios from 'axios'
import { store } from './data/store';
import HeaderComponent from './components/HeaderComponent.vue';
import CardListComponent from './components/CardListComponent.vue';
import HeroComponent from './components/HeroComponent.vue';


  export default {
    name: "App",
    components: {
       HeaderComponent,
       CardListComponent,
        HeroComponent
       },
    data(){
      return{
        store
      }
    },
    methods:{
      getMovies(){
        axios.get(store.apiUrl+store.endPoint.movie, {params: store.params}).then((response)=>{
          store.movieList= response.data.results
          console.log(store.movieList);
        })
      },
      getSeries(){
        axios.get(store.apiUrl+store.endPoint.series, {params: this.store.params}).then((response)=>{
          store.seriesList= response.data.results
          console.log(store.seriesList);
        })
      },
      getMSPhoto(){

      },

      getBoth(){
        this.getMovies()
        this.getSeries()
      },
      voteStars(movie){
         return Math.ceil(movie.vote_average / 2)
        
      }
      
    },
    created(){
      this.getMovies(),
      this.getSeries()
      ;
    },
    computed(){
      
    }
}
</script>

<style lang="scss" scoped>
 
</style>