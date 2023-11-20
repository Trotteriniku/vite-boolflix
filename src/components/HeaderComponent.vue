<template>
    <header class=" px-5 py-3 d-flex justify-content-between align-items-center position-sticky">
        <img src="../assets/images/BOOLFIXIMG.png" alt="boolflix logo" style="width: 110px;">
        <i class="fa-solid fa-search text-light fs-5 d-inline-block" v-if="!barExpand" @click="barExpand= true"></i>
        <div class="border border-light p-1 " v-if="barExpand" style="max-width: 260px; min-width: 260px;" >
        <i class="fa-solid fa-search text-light fs-5  d-inline-block " @click="barExpand= false"></i>

        <input type="text" class="ps-3 align-baseline  border-0 text-secondary" id="searchinput" v-model="data" @keyup.enter="getParams()" placeholder="Titoli,persone,generi">
        </div>
    </header>
    
</template>

<script>
import { store  } from '../data/store';
    export default {
        name:'HeaderComponent',
        data(){
            return{
                barExpand: false,
                data:'',
                store
            }
        },
        methods:{
            getParams(){
                this.store.params.query= this.data
                this.$emit('change-value')
            },
            barOpener(){
                if (condition) {
                    
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        // background-color: #222222;
        background-color: transparent;
        height: 68px;
        background-image: linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent);

        div{
            background-color: #2222226a;
        }

        input{
            background-color: #2222226a;
            outline: none;
        }
    }
</style>