<template>
    <div>

        <div class="article_1_div">

        <h1>Welcome, {{ rest_data_holder[`name`] }}</h1>

        <img v-bind:src="rest_data_holder[`banner_url`]">

        </div>

        <span class="span_1">
        <p class="p_text">Email:</p>
        <p> {{ rest_data_holder[`email`] }}</p>

        <p class="p_text">Address:</p>
        <p> {{ rest_data_holder[`address`] }}</p>

        <p class="p_text">Phone Number:</p>
        <p> {{ rest_data_holder[`phone_number`] }}</p>

        <p class="p_text">Bio:</p>
        <p class="bio_text"> {{ rest_data_holder[`bio`] }}</p>

        <p class="p_text">Location:</p>
        <p> {{ rest_data_holder[`city`] }}</p>

        </span>
    

    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';
    export default {

        data() {
            return {
                rest_data_holder: []
            }
        },
        
        methods:{

            get_call(){
            let rest_id_value = Cookies.get(`restaurant_id`);
            axios({
                method: `GET`,
                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,
                params: {
                    restaurant_id: rest_id_value,
                }
            }).then((response) => {
                response;
                this.rest_data_holder = response[`data`][0];
            }).catch((error) => {
                error;
            });
            }
        },


        mounted(){

            this.get_call();
        }
    }
</script>

<style lang="scss" scoped>

</style>