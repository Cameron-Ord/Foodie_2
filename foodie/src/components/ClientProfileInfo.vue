<template>
    <div>
        <span class="article_1_span_2">

        <!--using data stored in variable to display onto the page-->

        <h1>Welcome, {{ client_data_holder[`username`] }}</h1>

        <h1>Account info:</h1>

        <img v-bind:src="client_data_holder[`image_url`]">

        <p class="p_prof">Email:</p>
        <p class="p_data">{{ client_data_holder[`email`] }}</p>

        <p class="p_prof">First-name: </p>
        <p class="p_data"> {{ client_data_holder[`first_name`] }}</p>

        <p class="p_prof">last-name: </p>
        <p class="p_data">{{ client_data_holder[`last_name`] }}</p>

        <p class="p_prof">username: </p>
        <p class="p_data">{{ client_data_holder[`username`] }}</p>


        </span>
    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';
    export default {
        data() {
            return {
                 client_data_holder: {},
            }
        },

        mounted(){

            this.get_client();

        },

        methods:{

            get_client(){
                
                let client_token = Cookies.get(`client_login_token`);

                let client_id_value = Cookies.get(`client_id_token`);

                if (client_token !== undefined) {

                    axios({

                        method: `GET`,

                        url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                        headers: {

                        },

                        params: {

                            client_id: client_id_value,

                        }


                    }).then((response) => {

                        response;
                        this.client_data_holder = response[`data`][0];

                    }).catch((error) => {

                        error;

                    });

                }

            }

        }
    }
</script>

<style scoped>
@media only screen and (min-width: 770px){



}


@media only screen and (min-width: 1025px){


    
}
</style>