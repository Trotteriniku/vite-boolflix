<template>
    <div>
        <input type="text" v-model="data" @keyup.enter="getParams()">
    </div>
</template>

<script>
import { store  } from '../data/store';
    export default {
        name:'HeaderComponent',
        data(){
            return{
                data:'',
                store
            }
        },
        methods:{
            getParams(){
                this.store.params.query= this.data
                this.$emit('change-value')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>