<template>
    <div class="parent">
        <!--displaying orders based on a condition and whether they have been completed or not-->

        <span v-if="sort_incomplete_orders !== undefined" class="incomp">

            <h1>Pending Orders:</h1>

        

        <div class="incomp_order" v-for="(order, i) in sort_incomplete_orders" :key="i">

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
                unsort_incomplete_orders: [],
                sort_incomplete_orders: undefined,
            }
        },

        methods:{


        sort_incomplete(){


            //sorting orders

            let sorted_orders = [];

            let order_ids = [];

           

            for(let i = 0; i<this.unsort_incomplete_orders.length; i++){

                let indexed = order_ids.findIndex((order_id) => order_id === this.unsort_incomplete_orders[i][`order_id`]);

                if(indexed !== -1) {

                    sorted_orders[indexed].push(this.unsort_incomplete_orders[i]);

                }else{

                    sorted_orders.push([this.unsort_incomplete_orders[i]]);
                    order_ids.push(this.unsort_incomplete_orders[i][`order_id`]);
                }

                this.sort_incomplete_orders = sorted_orders;

             
            }


        },

    
        get_order(){

            //gets incomplete orders associated with a client 

        let client_token = Cookies.get(`client_login_token`);



        axios({

            method: `GET`,

            url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client-order`,

            headers: {

                token: client_token

            },

            params: {

                is_confirmed: 0,
                is_complete : 0
               
            }


        }).then((response) => {

        
            response;

            
            for (let i = 0; i < response[`data`].length; i++) {

                this.unsort_incomplete_orders.push(response[`data`][i]);

            
            }

            this.sort_incomplete();

            if(this.unsort_incomplete_orders.length <= 0){

                this.unsort_incomplete_orders = undefined;
            }


      
        }).catch((error) => {

            error;

        });

            }

        },

        mounted(){

            this.get_order();

        }
    }
</script>
<style scoped>

.parent{
    justify-items: center;
    align-items: center;
    display: grid;

}

.incomp{
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
    margin-top: 20px;
    margin-bottom: 10px;

}

.incomp>h1{
    margin-top: 10px;
    margin-bottom: 5px;
}

.incomp_order{
    justify-items: center;
    align-items: center;
    display: grid;
    grid-auto-flow: row;

}

.incomp_order>h1{
    margin-top: 5px;
    margin-bottom: 10px;
}

.incomp_order>div{

    justify-items: center;
    align-items: center;
    display: grid;
    margin-top: 5px;
    margin-bottom: 5px;

}
@media only screen and (min-width: 770px){


.parent{


}

.incomp{


}

.incomp>h1{

}

.incomp_order{


}

.incomp_order>h1{

}

.incomp_order>div{


}
}


@media only screen and (min-width: 1025px){

.parent{


}

.incomp{


}

.incomp>h1{

}

.incomp_order{


}

.incomp_order>h1{

}

.incomp_order>div{


}
    
}
</style>