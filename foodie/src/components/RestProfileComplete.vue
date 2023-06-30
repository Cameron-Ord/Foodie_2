<template>
    <div>

        <article class="completed_orders" v-if="sort_completed_orders !== undefined">

        <h1>Completed Orders:</h1>

        <span v-for="(completed, i) in sort_completed_orders" :key="i">

        <h1>ORDER: {{ completed[0][`order_id`] }}</h1>

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
                unsort_completed_orders: [],
                sort_completed_orders: undefined,
            }
        },

        mounted(){

            this.get_orders();

        },

        methods:{

            get_orders(){
                 let rest_token = Cookies.get(`rest_login_token`);


        axios({

            method: `GET`,

            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant-order`,

            headers: {

                token: rest_token,

            },

            params: {


                is_complete: 1,
                is_confirmed: 1


            }

        }).then((response) => {

            response;

            for (let i = 0; i < response[`data`].length; i++) {

                this.unsort_completed_orders.push(response[`data`][i]);

            }

            this.sort_completed();

            if(this.unsort_completed_orders.length <= 0){

                this.unsort_completed_orders = undefined;

            }


        }).catch((error) => {

            error;

        });
            },

        sort_completed(){

            let sorted_orders = [];

            let order_ids = [];

        

            for(let i = 0; i<this.unsort_completed_orders.length; i++){

                let indexed = order_ids.findIndex((order_id) => order_id === this.unsort_completed_orders[i][`order_id`]);

                if(indexed !== -1) {

                    sorted_orders[indexed].push(this.unsort_completed_orders[i]);

                }else{

                    sorted_orders.push([this.unsort_completed_orders[i]]);
                    order_ids.push(this.unsort_completed_orders[i][`order_id`]);
                }

                this.sort_completed_orders = sorted_orders;

             
            }

        },


            
        },
    }
</script>
<style scoped>
@media only screen and (min-width: 770px){



}


@media only screen and (min-width: 1025px){


    
}
</style>