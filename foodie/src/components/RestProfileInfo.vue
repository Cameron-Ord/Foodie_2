<template>
    <div>

        <div class="article_1_div">

        <h1>Welcome, {{ rest_data_holder[`name`] }}</h1>

        <img v-bind:src="rest_data_holder[`banner_url`]">

        </div>

        <div class="span_div">

        <span class="span_1">

        <div>
        <p class="p_text">Email:</p>
        <p> {{ rest_data_holder[`email`] }}</p>
        </div>

        <div>
        <p class="p_text">Address:</p>
        <p> {{ rest_data_holder[`address`] }}</p>
        </div>

        <div>
        <p class="p_text">Phone Number:</p>
        <p> {{ rest_data_holder[`phone_number`] }}</p>
        </div>

        <div>
        <p class="p_text">Bio:</p>
        <p class="bio_text"> {{ rest_data_holder[`bio`] }}</p>
        </div>

        <div>
        <p class="p_text">Location:</p>
        <p> {{ rest_data_holder[`city`] }}</p>
        </div>

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
    color: #FFFFFF;
    background-color: #003F91;
    padding: 10px;
    border-radius: 10px;
    width: 75%;
}
.bio_text{

    margin-top: 6px;
    margin-bottom: 6px;
    width: 90%;
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
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    background-color: #003F91;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 80%;
    border-radius: 10px;
    color: #FFFFFF;
    padding-top: 10px;
    padding-bottom: 10px;

}

.span_1>div{
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 6vh 3vh;
}

.p_text{
    text-align: center;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 10px;
    color: #003F91;
}
@media only screen and (min-width: 770px){

.article_1_div{


}
.article_1_div>h1{
    width: 65%;
}

.article_1_div>img{

}

.span_div{


}
.span_1{

}

.p_text{

}

}


@media only screen and (min-width: 1025px){
.article_1_div{


}
.article_1_div>h1{

}

.article_1_div>img{

    width: 75%;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;

}

.span_div{


}
.span_1{

    width: 70%;
}

.p_text{

}


    
}
</style>