<template>
    <div>
        <span class="completed" v-if="sort_completed_orders !== undefined">

        <h1>Order History:</h1>

        <div class="comp_order" v-for="(order, i) in sort_completed_orders" :key="i">

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
                unsort_completed_orders: [],

                sort_completed_orders: undefined,
            }
        },

        mounted(){

            this.get_order();
        },

        methods:{

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
                        is_complete: 1
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


            }
        }
    }
</script>

<style lang="scss" scoped>

</style>