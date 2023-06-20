<template>
    <div class="parent_div" >
        <article class="article_1">

            <!--displays restaurant information based off the restaurant called in the API which is selected by the ID-->

                <div class="landing_div">

                    <h1>{{ restaurant_object[`name`] }}</h1>

                    <img :src="restaurant_object[`profile_url`]">

                </div>

            <span class="span_rest">

                <p>{{ restaurant_object[`city`] }}</p>

                <p>{{ restaurant_object[`address`] }}</p>

                <p>{{ restaurant_object[`phone_number`] }}</p>

                <p>{{ restaurant_object[`bio`] }}</p>


            </span>
        </article>


        <div class="menu_div" v-if="(rest_menu !== undefined)">

            <h1>Menu Items:</h1>

        </div>

        <article class="article_2">

            <!--same operation as getting the restaurant info from axios, but with the menu-->

            <span class="span_menu" v-for="(menu_item, i) in rest_menu" :key="i">

                <h4>{{ menu_item[`name`] }}</h4>

                <img :src="menu_item[`image_url`]">

                <p class="price_tag">${{ menu_item[`price`] }}</p>

                <button @click="add_to_cart" ref="button_clicked" :clicked_menu_item="i">Add to cart</button>

            </span>

        </article>

        <!--if the food cart variable is not null, display-->

        <article class="article_3" v-if="food_cart !== null">

        <span class="checkout_box">
            <router-link to="/ShoppingCart" class="router_css">View Cart</router-link>
        </span>
        </article>
    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';
export default {


        data() {
            return {
               restaurant_object: {},

               rest_menu: undefined,

               menu_items: [],

               food_cart: undefined
            }
        },

        methods:{

            add_to_cart(details, menu_item){

                //using attributes and the currentTarget to index which menu item was clicked//

                this.$refs[`button_clicked`] = details.currentTarget;

                let button_clicker = this.$refs[`button_clicked`].getAttribute(`clicked_menu_item`);

                menu_item = this.rest_menu[button_clicker];

                this.menu_items.push(menu_item);

                Cookies.set(`food_cart`, this.menu_items);

              
            
                

            }

        },

        mounted(){


            let chosen_restaurant_id = Cookies.get(`restaurant_selected`);

            //if chosen_restaurant_id is null, will not execute//

            if(chosen_restaurant_id !== null){

                axios({

                    method: `GET`,

                    url: `https://foodie.bymoen.codes/api/restaurant`,

                    headers:{

                        'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,
                    },

                    params:{

                        restaurant_id: chosen_restaurant_id

                    }


                }).then((response)=>{

 
                    this.restaurant_object = response[`data`][0];

                  

                }).catch((error)=>{

                    error;

                
                
                });


            }

            //axios call on mount for rest menu, if the chosen restaurant ID is null, it will not execute//

            if(chosen_restaurant_id !== null){

            axios({

                method: `GET`,

                url: `https://foodie.bymoen.codes/api/menu`,

                
                    headers:{

                        'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,
                    },

                    params:{

                        restaurant_id: chosen_restaurant_id

                    }


            }).then((response)=>{

                response;

 
                    this.rest_menu = response[`data`];
              

                    if(this.rest_menu.length <= 0){

                        this.rest_menu = undefined
                    }
           

            }).catch((error)=>{

                error

            })
        }

        this.food_cart = Cookies.get(`food_cart`);

        }
    }
</script>

<style scoped>

.parent_div{

    display: grid;

    grid-auto-flow: row;
}

.menu_div{

    display: grid;

    justify-items: center;

    align-items: center;

    text-align: center;

    width: 100%;

    margin-top: 20px;

    margin-bottom: 20px;

}

.menu_div>h1{

    color: #FFFFFF;

    background-color: #003F91;

    padding: 10px;

    border-radius: 10px;

    width: 80%;
    
}
.article_1{

    display: grid;

    grid-auto-flow: row;

    justify-items: center;

    align-items: center;

    text-align: center;

}

.article_1>.span_rest{


    display: grid;

    justify-items: center;

    align-items: center;

    grid-template-rows:7vh 6vh 6vh 1fr;

    background-color: #003F91;
    
    margin-top: 25px;

    width: 90%;

    padding-bottom: 15px;

    border-radius: 15px;


    
}


.article_1>.span_rest>p{

    width: 75%;

    color: #FFFFFF;

}

.landing_div{

    display: grid;

    grid-template-rows: 10vh 1fr;

    align-items: center;

    justify-items: center;
}


.landing_div>h1{

    color: #FFFFFF;

    background-color: #003F91;

    padding: 10px;

    border-radius: 10px;



}

.landing_div>img{

    width: 100%;
    
    padding-top: 15px;

    padding-bottom: 15px;

    background-color: #003F91;
    
}

.article_2{

    display: grid;

    grid-auto-flow: row;

    justify-items: center;

    align-items: center;

    text-align: center;

    margin-bottom: 25px;
}


.article_2>.span_menu{


    display: grid;

    justify-items: center;

    align-items: center;

    grid-template-rows: 10vh 1fr 10vh 10vh;

    background-color: #003F91;

    width: 90%;

    border-radius: 15px;

    margin-top: 10px;

    margin-bottom: 10px;
}

.article_2>.span_menu>p{

    color: #FFFFFF;

}

.article_2>.span_menu>h4{

    color: #003F91;

    background-color: #FFFFFF;

    padding: 10px;

    border-radius: 10px;

}

.article_2>.span_menu>button{


    color: #003F91;

    background-color: #FFFFFF;

    padding: 10px;


    width: 30vw;
}

.article_2>.span_menu>img{

    height: 175px;
    width: 175px;

    border-radius: 50%;

    border-style: solid;

    border-width: 15px;

    color: #FFFFFF;
}

.article_2>.span_menu>.price_tag{

    color: #003F91;

    background-color: #FFFFFF;

    padding: 10px;

    border-radius: 50%;

}

.article_3{

    display: grid;

    justify-items: center;

    align-items: center;

}

.article_3>.checkout_box{

    display: grid;

    justify-items: center;

    align-items: center;

    margin-bottom: 25px;

    text-align: center;


}

.article_3>.checkout_box>.router_css{

    text-decoration: none;

    background-color: #003F91;

    padding: 10px;

    color: #FFFFFF;

    border-radius: 10px;


}


@media only screen and (min-width: 770px){

.landing_div>img{

width: 90%;

padding-top: 15px;

padding-bottom: 15px;

padding-left: 15px;

padding-right: 15px;

background-color: #003F91;

border-radius: 50px;
}

.article_2>.span_menu{

width: 75%;

}

.article_1>.span_rest{

width: 75%;



}
.menu_div>h1{


width: 50%;

}
    
}


@media only screen and (min-width: 1025px){
.parent_div{

    width: 100%;

}

.menu_div{

    width: 100%;


}

.menu_div>h1{


    width: 50%;

}
.article_1{


    width: 100%;

}

.article_1>.span_rest{

width: 75%;



}


.article_1>.span_rest>p{


}

.landing_div{
    width: 100%;

}


.landing_div>h1{




}

.landing_div>img{

    width: 90%;
    
    padding-top: 15px;

    padding-bottom: 15px;

    padding-left: 15px;

    padding-right: 15px;

    background-color: #003F91;

    border-radius: 50px;
}

.article_2{

grid-auto-flow: column;

width: 100%;
    
}


.article_2>.span_menu{

width: 90%;

}

.article_2>.span_menu>p{


}

.article_2>.span_menu>h4{

}

.article_2>.span_menu>button{

    width: 5vw;

}

.article_2>.span_menu>img{

}

.article_2>.span_menu>.price_tag{


}

.article_3{

    width: 100%;
}

.article_3>.checkout_box{




}

.article_3>.checkout_box>.router_css{




}




}

</style>