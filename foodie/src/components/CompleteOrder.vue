<template>
    <div>
        <button :clicked_complete="i" @click="complete_order" ref="completed_order">Complete Order</button>
    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';
    export default {
     
        data() {
            return {
                
            }
        },
        methods:{

            //completing order based on the order that was clicked

            complete_order(details) {

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.$refs[`completed_order`] = details.currentTarget;

            let button_clicker = this.$refs[`completed_order`].getAttribute(`clicked_complete`);

            let completed_item = this.unsort_confirmed_orders[button_clicker][`order_id`];



            axios({

                //patching table data

                method: `PATCH`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant-order`,

                headers: {

                    token: restaurant_token,
                },

                data: {

                    //assigning values to order

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

        }
        
    }
</script>


<style scoped>
@media only screen and (min-width: 770px){



}


@media only screen and (min-width: 1025px){


    
}
</style>