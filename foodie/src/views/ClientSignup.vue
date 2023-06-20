<template>
    <div>

          <!--importing components..-->

        <page-header></page-header>
        <client-signup-component></client-signup-component>
        <page-footer></page-footer>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import ClientSignupComponent from '@/components/ClientSignupComponent.vue';
import PageFooter from '@/components/PageFooter.vue';
    export default {
        
        components:{

            PageHeader,
            ClientSignupComponent,
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