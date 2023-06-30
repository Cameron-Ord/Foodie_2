<template>
    <div>
        <span class="incoming_orders" v-if="sort_unconfirmed_orders !== undefined">

        <h1>Incoming Orders:</h1>

        <div v-for="(order, i) in sort_unconfirmed_orders" :key="i">

        <h1>ORDER: {{ order[0][`order_id`] }}</h1>

        <div v-for="(item, j) in order" :key="j">

        <h1>{{ item.name }} - ${{ item.price }}</h1>


        </div>

        <button :clicked_confirm="i" @click="confirm_order" ref="confirmed_order">Confirm Order</button>

        </div>
    </span>

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
            this.get_orders()

        }
    }
</script>

<style scoped>
@media only screen and (min-width: 770px){



}


@media only screen and (min-width: 1025px){


    
}
</style>