<template>
    <div>
          <!--importing components..-->

        <page-header></page-header>

        <shopping-cart-c></shopping-cart-c>
             
        <page-footer></page-footer>


    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import ShoppingCartC from '@/components/ShoppingCartC.vue';
import PageFooter from '@/components/PageFooter.vue';
import Cookies from 'vue-cookies';

    export default {
        

        Cookies,

        components:{
            PageHeader,
            ShoppingCartC,
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