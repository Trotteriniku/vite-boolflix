<template>
    <div v-for="photo in store.movieList[1]">
        <img :src="store.imgUrl+photo.backdrop_path" :alt="photo.title" >
    </div>
</template>

<script>
import { store } from '../data/store';
    export default {
        name:'HeroComponent',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>