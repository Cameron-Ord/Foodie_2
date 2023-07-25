<template>
    <div class="parent">
        <div class="incoming_orders" v-if="sort_unconfirmed_orders !== undefined">

        <h1>Incoming Orders:</h1>

        <div v-for="(order, i) in sort_unconfirmed_orders" :key="i">

        <h1>ORDER: {{ order[0][`order_id`] }}</h1>

        <div v-for="(item, j) in order" :key="j">

        <h1>{{ item.name }} - ${{ item.price }}</h1>


        </div>

        <button :clicked_confirm="i" @click="confirm_order" ref="confirmed_order">Confirm Order</button>

        </div>
    </div>

    </div>
</template>

<script>

import axios from 'axios';
import Cookies from 'vue-cookies';
    export default {
        
        components:{
            
        },

        data() {
            return {
                unsort_unconfirmed_orders: [],

                sort_unconfirmed_orders: undefined,
            }
        },

        methods:{


            confirm_order(details) {

                //confirms an order, uses indexing to select the order clicked

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.$refs[`confirmed_order`] = details.currentTarget;

            let button_clicker = this.$refs[`confirmed_order`].getAttribute(`clicked_confirm`);

            let confirmed_item = this.unsort_unconfirmed_orders[button_clicker][`order_id`];


            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant-order`,

                headers: {

                    token: restaurant_token,
                },

                data: {

                    //updates info

                    order_id: confirmed_item,

                    is_confirmed: 1,
                 


                },

            }).then((response) => {

                response;

            }).catch((error) => {

                error;

            })

        },


        get_orders(){

            //gets unconfirmed orders associated with a restaurant

        let rest_token = Cookies.get(`rest_login_token`);

        axios({

            method: `GET`,

            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant-order`,

            headers: {

                token: rest_token,

            },

            params: {

                is_confirmed: 0,

                is_complete: 0
            }

        }).then((response) => {

            response;

            for (let i = 0; i < response[`data`].length; i++) {

                this.unsort_unconfirmed_orders.push(response[`data`][i]);



            }


            if(this.unsort_unconfirmed_orders.length <= 0){

                this.unsort_unconfirmed_orders = undefined;

            }


            this.sort_unconfirmed();


        }).catch((error) => {

            error;

        });

        },

        sort_unconfirmed(){

            //sorts the unconfirmed orders

            let sorted_orders = [];

            let order_ids = [];

            for(let i = 0; i<this.unsort_unconfirmed_orders.length; i++){

                let indexed = order_ids.findIndex((order_id) => order_id === this.unsort_unconfirmed_orders[i][`order_id`]);

                if(indexed !== -1) {

                    sorted_orders[indexed].push(this.unsort_unconfirmed_orders[i]);

                }else{

                    sorted_orders.push([this.unsort_unconfirmed_orders[i]]);
                    order_ids.push(this.unsort_unconfirmed_orders[i][`order_id`]);
                }

                this.sort_unconfirmed_orders = sorted_orders;

             
            }
        }

        },

        mounted(){

            //calls function on mount
            this.get_orders()

        }
    }
</script>


<style scoped>


.parent{

display: grid;

justify-items: center;

align-items: center;

width: 100%;
}

.incoming_orders{

display: grid;

color: #FFFFFF;

justify-items: center;

align-items: center;

width: 100%;
}

.incoming_orders>div{

background-color: #003F91;
display: grid;
align-items: center;
justify-items: center;
text-align: center;
width: 80%;
margin-top: 10px;
margin-bottom: 10px;
grid-auto-flow: row;
padding-top: 10px;
padding-bottom: 10px;
border-radius: 10px;
}

.incoming_orders>div>div>h1{

margin-top: 3px;
margin-bottom: 3px;

}
.incoming_orders>div>button{

margin-top: 5px;
margin-bottom: 5px;
padding: 10px;
background-color: #FFFFFF;
color: #003F91;
border-radius: 10px;
}

@media only screen and (min-width: 770px){



}


@media only screen and (min-width: 1025px){


    
}
</style>