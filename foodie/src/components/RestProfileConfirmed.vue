<template>
    <div class="parent">
        <div class="confirmed_orders" v-if="sort_confirmed_orders !== undefined">

        <h1>Confirmed Orders:</h1>

        <span v-for="(confirmed, i) in sort_confirmed_orders" :key="i">

        <h1>ORDER: {{ confirmed[0][`order_id`] }}</h1>

        <div v-for="(item, j) in confirmed" :key="j">

        <h1>{{ item.name }} - ${{ item.price }}</h1>

        </div>
        <button :clicked_complete="i" @click="complete_order" ref="completed_order">Complete Order</button>
        </span>

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
            unsort_confirmed_orders: [],
            sort_confirmed_orders: undefined,
        }
    },

    methods:{

        //completes an order on click, uses indexing to select the order

         complete_order(details) {

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.$refs[`completed_order`] = details.currentTarget;

            let button_clicker = this.$refs[`completed_order`].getAttribute(`clicked_complete`);

            let completed_item = this.unsort_confirmed_orders[button_clicker][`order_id`];



            axios({

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant-order`,

                headers: {

                    token: restaurant_token,
                },

                data: {

                    order_id: completed_item,

                    is_complete: 1,
                    is_confirmed: 1


                },


            }).then((response) => {

                response;


            }).catch((error) => {
                error;


            });




        },

        get_orders(){

            //gets confirmed orders from the respective restaurant defined by the cookie
        let rest_token = Cookies.get(`rest_login_token`);


        axios({

            method: `GET`,

            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant-order`,

            headers: {

                'x-api-key': `qK2iR1gTkkAjPH0kfGDY`,

                token: rest_token,


            },

            params: {

                is_confirmed: 1,
                is_complete: 0


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
        },

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
        }
       
    },



    mounted(){

        this.get_orders()

    },
}
</script>
<style scoped>
.parent{

    display: grid;

    justify-items: center;

    align-items: center;

    width: 100%;
}

.confirmed_orders{

    display: grid;

    color: #FFFFFF;

    justify-items: center;

    align-items: center;

    width: 100%;
}

.confirmed_orders>span{

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

.confirmed_orders>span>div>h1{

    margin-top: 3px;
    margin-bottom: 3px;

}
.confirmed_orders>span>button{

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