<template>
    <div>

        <!--importing my header and footer-->

        <page-header></page-header>

        <main class="page_main">
            <section class="section_main">
                <article class="page_article_1">

                    <!--a loop for all the restaurants stored in the restaurants variable-->

                    <span class="rest_span" v-for="(restaurant, i) in restaurants" :key="i"> 

                        <h1 class="rest_name">{{ restaurant[`name`] }}</h1>

                        <img :src="restaurant[`banner_url`]">

                        <p> {{ restaurant[`phone_number`] }}</p>

                        <p>{{ restaurant[`address`] }}</p>

                        <p class="bio_p">{{ restaurant[`bio`] }}</p>

                        <!--using attributes to get the clicked target(restaurant) and taking you to the public page depending on which one you clicked-->

                        <button :clicked_rest="i" @click="rest_chose" ref="button_clicked">view menu</button>

                    </span>
                </article>
            </section>
        </main>


        <page-footer></page-footer>

    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
     export default {


        components:{

            PageHeader,
            PageFooter

        },


        data() {
            return {
               restaurants: [],
            }
        },

        methods:{

            rest_chose(details){

                //function for chosen restaurant, uses get attributes and currentTarget to index which restaurant you chose//

                this.$refs[`button_clicked`] = details.currentTarget;
              
                let button_clicker = this.$refs[`button_clicked`].getAttribute(`clicked_rest`);

                let restaurant = this.restaurants[button_clicker];

                Cookies.set(`restaurant_selected`, restaurant[`restaurant_id`]);

                this.$router.push(`/PublicPage`);

            }
        },

        mounted(){

            //axios call on mount, pushes content from response to the empty restaurants array//

            axios({

                method: `GET`,

                url:`${process.env.VUE_APP_BASE_DOMAIN}/api/restaurants`,

                headers:{

                    'x-api-key': `qK2iR1gTkkAjPH0kfGDY`
                },

            }).then((response)=>{

                response;
                console.log(response);

                for(let i = 0; i < response[`data`].length; i = i +1){

                    

                    this.restaurants.push(response[`data`][i]);

       
                }


            }).catch((error) =>{

                error;

            })
        
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

    width: 100%;
}

.page_main>.section_main>.page_article_1{

    display: grid;

    justify-items: center;
    
    align-items: center;

    grid-auto-flow: row;

        width: 100%;
}

.page_main>.section_main>.page_article_1>.rest_span{

    display: grid;

    justify-items: center;
    
    align-items: center;

    text-align: center;

    grid-template-rows: 10vh 25vh 6vh 8vh 1fr 12vh;

    width: 80%;

    margin-top: 25px;

    margin-bottom: 25px;

    background-color: #003F91;

    color: #FFFFFF;
    
    border-radius: 15px;

    min-height: 80vh;
}



.page_main>.section_main>.page_article_1>.rest_span>img{

    width: 125px;
    height: 125px;

    border-radius: 50%;

    object-fit: cover;

    border-style: solid;

    border-width: 10px;

    color: #FFFFFF;

}


.page_main>.section_main>.page_article_1>.rest_span>button{

    color: #003F91;

    background-color: #FFFFFF;

    padding: 10px;



}

.page_main>.section_main>.page_article_1>.rest_span>p{

    width: 60%;

    background-color: #FFFFFF;

    padding: 8px;

    color: #003F91;

    font-weight: 800;
    
    border-radius: 15px;

}



.bio_p{

    margin-top: 10px;
    margin-bottom: 10px;
}

.rest_name{

    background-color: #FFFFFF;

    color: #003F91;

    padding: 10px;

    border-radius: 10px;



}
@media only screen and (min-width: 770px){

.page_main{

grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));

}
.page_main>.section_main>.page_article_1>.rest_span{

width: 75%;

min-height: 80vh;

}



.page_main>.section_main>.page_article_1>.rest_span>img{

width: 150px;

height: 150px;

border-radius: 50%;

}


.page_main>.section_main>.page_article_1>.rest_span>button{


padding: 10px;



}

.page_main>.section_main>.page_article_1>.rest_span>p{

width: 40%;

}
}
@media only screen and (min-width: 1025px){



.page_main{

display: grid;

min-height: 80vh;

justify-items: center;

align-items: center;

grid-template-columns: repeat(auto-fit, minmax(770px, 1fr));

}

.page_main>.section_main{

    display: grid;

    justify-items: center;
    
    align-items: center;

    width: 100%;

    grid-auto-flow: row;
}

.page_main>.section_main>.page_article_1{

    display: grid;

    justify-items: center;
    
    align-items: center;

    grid-auto-flow: column;

    width: 100%;
}

.page_main>.section_main>.page_article_1>.rest_span{

    display: grid;

    justify-items: center;
    
    align-items: center;

    text-align: center;

    grid-template-rows: 10vh 20vh 6vh 8vh 1fr 12vh;

    min-height: 70vh;

    max-height: 70vh;

    max-width: 80%;

    margin-top: 25px;

    margin-bottom: 25px;

    background-color: #003F91;

    color: #FFFFFF;
    
    border-radius: 15px;
}



.page_main>.section_main>.page_article_1>.rest_span>img{


    height: 150px;
    width: 150px;

}


.page_main>.section_main>.page_article_1>.rest_span>button{





}

.page_main>.section_main>.page_article_1>.rest_span>p{

width: 17vw;

}

.page_main>.section_main>.page_article_1>.rest_span>h1{

}


.page_main>.section_main>.page_article_1>.rest_span>button{


}

.bio_p{

}

.rest_name{





}





}

</style>