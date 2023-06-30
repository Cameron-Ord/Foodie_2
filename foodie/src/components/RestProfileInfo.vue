<template>
    <div>

        <div class="article_1_div">

        <h1>Welcome, {{ rest_data_holder[`name`] }}</h1>

        <img v-bind:src="rest_data_holder[`banner_url`]">

        </div>

        <div class="span_div">

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

<style scoped>

.article_1_div{

    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
    grid-template-rows: 10vh 1fr;
    width: 100%;

}
.article_1_div>h1{
    margin-top: 10px;
    margin-bottom: 10px;
}

.article_1_div>img{

    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #003F91;
}

.span_div{

    align-items: center;
    display: grid;
    justify-items: center;
    width: 100%;
}
.span_1{

    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
    grid-template-rows: 8vh 6vh 8vh 6vh 8vh 6vh 8vh 6vh 8vh 6vh;
    background-color: #003F91;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 80%;
    border-radius: 10px;
    color: #FFFFFF;
    padding-top: 10px;
    padding-bottom: 10px;

}

.p_text{
    text-align: center;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 10px;
    color: #003F91;
}
@media only screen and (min-width: 770px){



}


@media only screen and (min-width: 1025px){


    
}
</style>