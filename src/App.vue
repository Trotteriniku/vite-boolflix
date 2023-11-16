<template>
  <HeaderComponent  @change-value="getBoth"/>
  <main>
    <h2 >Movies</h2>
    <div v-for="movie in store.movieList">{{ movie.title }} {{ movie.orginal_title }} {{ movie.vote_average }} {{ movie.original_language }}</div>
    <h2>Series</h2>
    <div v-for="serie in store.seriesList">{{ serie.name }}{{ serie.orginal_title }}{{ serie.vote_average }}{{ serie.original_language }}</div>

  </main>
</template>

<script>
import axios from 'axios'
import { store } from './data/store';
import HeaderComponent from './components/HeaderComponent.vue';


  export default {
    name: "App",
    components: { HeaderComponent },
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

      getBoth(){
        this.getMovies()
        this.getSeries()
      }
    },
    created(){
      this.getMovies(),
      this.getSeries()
    }
}
</script>

<style lang="scss" scoped>

</style>