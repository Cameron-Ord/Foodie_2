<template>
    <div>
        <span v-if="sort_confirmed_orders !== undefined" class="incomp">

        <h1>Current Orders:</h1>

        <div class="incomp_order" v-for="(order, i) in sort_confirmed_orders" :key="i">

        <h1>ORDER: {{ order[0][`order_id`] }}</h1>

        <div v-for="(item, j) in order" :key="j">

        <h4>{{ item.name }} - ${{ item.price }}</h4>

        </div>


        </div>

        </span>

    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';
    export default {

        data() {
            return {
                unsort_confirmed_orders: [],
                sort_confirmed_orders:undefined
            }
        },

        mounted(){
            this.get_order();

        },

        methods:{

            sort_confirmed(){

            let sorted_orders = [];

            let order_ids = [];

           

            for(let i = 0; i<this.unsort_confirmed_orders.length; i++){

                let indexed = order_ids.findIndex((order_id) => order_id === this.unsort_confirmed_orders[i][`order_id`]);

                if(indexed !== -1) {

                    sorted_orders[indexed].push(this.unsort_confirmed_orders[i]);

                }else{

                    sorted_orders.push([this.unsort_confirmed_orders[i]]);
                    order_ids.push(this.unsort_confirmed_orders[i][`order_id`]);
                }

                this.sort_confirmed_orders = sorted_orders;

             
            }


        },

    
            get_order(){


            let client_token = Cookies.get(`client_login_token`);



            axios({

                method: `GET`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client-order`,

                headers: {

                    token: client_token

                },

                params: {

                    is_confirmed: 1,
                
                }


            }).then((response) => {

            
                response;

                
                for (let i = 0; i < response[`data`].length; i++) {

                    this.unsort_confirmed_orders.push(response[`data`][i]);

                
                    
                    
            
                }

                this.sort_confirmed();

                if(this.unsort_confirmed_orders.length <= 0){

                    this.unsort_confirmed_orders = undefined;
                }


        
            }).catch((error) => {

                error;

            });

                }
        }
    }
</script>

<style lang="scss" scoped>

</style>