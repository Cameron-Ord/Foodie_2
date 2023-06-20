<template>
    <div>

          <!--importing components..-->

        <page-header></page-header>

        <restaurant-signup-component></restaurant-signup-component>

        <page-footer></page-footer>
    </div>
</template>

<script>


import PageHeader from '@/components/PageHeader.vue';
import RestaurantSignupComponent from '@/components/RestaurantSignupComponent.vue';
import PageFooter from '@/components/PageFooter.vue';
import axios from 'axios';
import Cookies from 'vue-cookies';
    export default {

        components:{

    
            PageHeader,
            RestaurantSignupComponent,
            PageFooter
        },


        mounted(){

            let get_div = document.querySelector(`body`);

            get_div.classList.remove(`no-scroll`);
        },

        Cookies,
        axios
    }
</script>

<style scoped>
</style>