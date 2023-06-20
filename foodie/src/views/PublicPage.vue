<template>
    <div>

          <!--importing components..-->

        <page-header></page-header>

        <main class="page_main">

            <section class="section_main">
              
                    <public-page-comp></public-page-comp>
                
            </section>
        </main>

        <page-footer></page-footer>

    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PublicPageComp from '@/components/PublicPageComp.vue';
import PageFooter from '@/components/PageFooter.vue';
    export default {
        

        components:{

            PageHeader,
            PublicPageComp,

            PageFooter

        },


        mounted(){

            let get_div = document.querySelector(`body`);

            get_div.classList.remove(`no-scroll`);
        }
    }
</script>

<style scoped>

.page_main{

    display: grid;

    min-height: 80vh;

    justify-items: center;

    align-items: center;

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.page_main>.section_main{


    display: grid;

    justify-items: center;

    align-items: center;
}

@media only screen and (min-width: 770px){
.page_main{
grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
}

}


@media only screen and (min-width: 1025px){
.page_main{
grid-template-columns: repeat(auto-fit, minmax(770px, 1fr));
}

}

</style>