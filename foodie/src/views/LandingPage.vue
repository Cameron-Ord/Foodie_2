<template>
        <div class="landing_parent">

              <!--importing components..-->
              
            <page-header></page-header>

            <main class="page_main">

                <section class="section_main">

                    <article class="landing_article">

                        <span class="landing_span">

                            <input placeholder="Enter Your Address" type="text">

                            <input placeholder="Apt/Unit Number" type="text">

                            <input placeholder="Delivery Instructions" type="text">


                        </span>

                        <nav>

                            <router-link class="router_css" to="/DiscoverPage">Find restaurants nearby</router-link>

                        </nav>

                    </article>

                </section>

            </main>

            <page-footer></page-footer>


        </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {

    components: {

        PageHeader,
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

    align-items: center;

    justify-items: center;

    min-height: 80vh;

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.page_main>.section_main{
    display: grid;

    align-items: center;

    justify-items: center;

    width: 100%;
    
}

.page_main>.section_main>.landing_article{
    display: grid;

    align-items: center;

    justify-items: center;

    grid-template-rows: 1fr 1fr;

    width: 100%;
}
.page_main>.section_main>.landing_article>.landing_span{

    display: grid;

    align-items: center;

    justify-items: center;

    grid-template-rows: 8vh 8vh 8vh;

    padding-top: 20px;

    padding-bottom: 20px;

    width: 90%;

    background-color: #003F91;

    border-radius: 15px;
}
.page_main>.section_main>.landing_article>.landing_span>input{

    width: 60vw;
}
.router_css{

    background-color: #003F91;

    padding: 10px;

    color: #FFFFFF;

    text-align: center;

    text-decoration: none;

    border-radius: 10px;

}
@media only screen and (min-width: 770px){


.page_main{
grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
}
.page_main>.section_main>.landing_article>.landing_span{

width: 50%;

}
.page_main>.section_main>.landing_article>.landing_span>input{

width: 30vw;
}


}


@media only screen and (min-width: 1025px){
.page_main{


    grid-template-columns: repeat(auto-fit, minmax(770px, 1fr));

}
.page_main>.section_main>.landing_article>.landing_span{


width: 30%;


}
.page_main>.section_main>.landing_article>.landing_span>input{

width: 15vw;
}

.router_css{



}









}
</style>