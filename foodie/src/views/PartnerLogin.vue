<template>
    <div>
          <!--importing components..-->

        <page-header></page-header>

        <restaurant-login-component></restaurant-login-component>

        <page-footer></page-footer>

    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import RestaurantLoginComponent from '@/components/RestaurantLoginComponent.vue';

import PageFooter from '@/components/PageFooter.vue';

    export default {
        
        components:{
            PageHeader,
            RestaurantLoginComponent,
            PageFooter
        },


        mounted(){

            let get_div = document.querySelector(`body`);

            get_div.classList.remove(`no-scroll`);
        }
    }
</script>

<style scoped>

</style>