<template>
    <div class="container-fluid">
        <h2 class="text-light" >Movies</h2>
        <div class="w-100 d-flex justify-content-center position-relative align-items-center ">
            <div class="text-light d-flex align-items-center my-position-s"   @click="Carousel(-1)"><i class="fa-solid fa-chevron-left fa-2xl" v-if="!arrowShow" @click="arrowShow=true" :class="{arrow: arrowShow }" style="color: #ffffff;"></i></div>
            <div class="row row-cols-5 justify-content-start column-gap-2 flex-nowrap overflow-x-scroll scroll  " ref="CarouselM">
                <div v-for="movie in store.movieList " class="p-0 rounded  overflow-hidden " style="width: 250px;">
                    <!-- {{ movie.title }} {{ movie.orginal_title }} {{ movie.vote_average }} {{ movie.original_language }} -->
                    <img :src="store.imgUrl+movie.backdrop_path"  :alt="movie.title" class="rounded w-100 ">
                    <!-- <img :src="'https://flagsapi.com/'+movie.original_language.toUpperCase().substring(0,2)+ '/shiny/64.png'" > -->
                    <!-- <i v-for="star in voteStars(movie)" class="fa-solid fa-star"></i> -->
                </div>
            </div>
            <div class="text-light d-flex align-items-center my-position-e" @click="Carousel(+1)"><i class="fa-solid fa-chevron-right fa-2xl Arrow" style="color: #ffffff;"></i></div>
        </div>


        <h2 class="text-light" >Series</h2>
        <div class="w-100 d-flex justify-content-center position-relative align-items-center ">
            <div class="text-light d-flex align-items-center my-position-s"   @click="Carousel(-1)"><i class="fa-solid fa-chevron-left fa-2xl" v-if="!arrowShow" @click="arrowShow=true" :class="{arrow: arrowShow }" style="color: #ffffff;"></i></div>
            <div class="row row-cols-5 justify-content-start column-gap-2 flex-nowrap overflow-x-scroll scroll  " ref="CarouselM">
                <div v-for="serie in store.seriesList " class="p-0 rounded  overflow-hidden " style="width: 250px;">
                    <!-- {{ movie.title }} {{ movie.orginal_title }} {{ movie.vote_average }} {{ movie.original_language }} -->
                    <img :src="store.imgUrl+serie.backdrop_path"  :alt="serie.title" class="rounded w-100 ">
                    <!-- <img :src="'https://flagsapi.com/'+movie.original_language.toUpperCase().substring(0,2)+ '/shiny/64.png'" > -->
                    <!-- <i v-for="star in voteStars(movie)" class="fa-solid fa-star"></i> -->
                </div>
            </div>
            <div class="text-light d-flex align-items-center my-position-e" @click="Carousel(+1)"><i class="fa-solid fa-chevron-right fa-2xl Arrow" style="color: #ffffff;"></i></div>
        </div>
        
        
    </div>
    
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'CardListComponent',
        data(){
            return{
                arrowShow: false,
                store,
            }
        },
        methods:{
            Carousel(directions){
                const selectedCarousel= this.$refs.CarouselM
                const scrollAmount = 2000;
                selectedCarousel.scrollLeft += directions * scrollAmount;
            },
            
        }
        
    }
</script>

<style lang="scss" scoped>
    .my-container{
        max-width: 1250px;
        margin: 0 auto;
    }

    .scroll{
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
    width: 0px;
    }

    .my-position-s{
        position: absolute;
        left: 0;
        z-index: 1000;
        height: 100%;
        width: 2.4%;
        border-radius: 5%;
        background-color: #22222259;
    }
    .my-position-e{
        position: absolute;
        right: 0;
        z-index: 1000;
        height: 100%;
        width: 2.4%;
        border-radius: 5%;
        background-color: #22222259;

    }

   

    .arrow{
        display: none;
    }
</style>