<template>
    <div class="parent"> 
        <span class="completed" v-if="sort_completed_orders !== undefined">

        <h1>Order History:</h1>

        <div class="comp_order" v-for="(order, i) in sort_completed_orders" :key="i">

        <h1>ORDER: {{ order[0][`order_id`] }}</h1>
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
    
                //ordering and sorting orders

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

                //gets completed orders from client token

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
<style scoped>
.parent{
    justify-items: center;
    align-items: center;
    display: grid;

}

.completed{
    justify-items: center;
    align-items: center;
    display: grid;
    background-color: #003F91;
    color: #FFFFFF;
    width: 80%;
    grid-auto-flow: row;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.completed>h1{
    margin-top: 10px;
    margin-bottom: 5px;
}

.comp_order{
    justify-items: center;
    align-items: center;
    display: grid;
    grid-auto-flow: row;

}

.comp_order>h1{
    margin-top: 5px;
    margin-bottom: 10px;
}

.comp_order>div{

    justify-items: center;
    align-items: center;
    display: grid;
    margin-top: 5px;
    margin-bottom: 5px;

}


@media only screen and (min-width: 770px){
    .parent{
    justify-items: center;
    align-items: center;
    display: grid;

}

.completed{

}

.completed>h1{

}

.comp_order{


}

.comp_order>h1{

}

.comp_order>div{


}



}


@media only screen and (min-width: 1025px){
.completed{

}

.completed>h1{

}

.comp_order{


}

.comp_order>h1{

}

.comp_order>div{


}

    
}
</style>