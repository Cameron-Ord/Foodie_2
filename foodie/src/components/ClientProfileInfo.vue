<template>
    <div class="parent">
        <span class="article_1_span_2">

        <!--using data stored in variable to display onto the page-->

        <div class="special_div">
        <h1>Welcome, {{ client_data_holder[`username`] }}</h1>
        <h1>Account info:</h1>
        <img v-bind:src="client_data_holder[`image_url`]">
        </div>

        <div>
        <p class="p_prof">Email:</p>
        <p class="p_data">{{ client_data_holder[`email`] }}</p>
        </div>

        <div>
        <p class="p_prof">First-name: </p>
        <p class="p_data"> {{ client_data_holder[`first_name`] }}</p>
        </div>

        <div>
        <p class="p_prof">last-name: </p>
        <p class="p_data">{{ client_data_holder[`last_name`] }}</p>
        </div>

        <div>
        <p class="p_prof">username: </p>
        <p class="p_data">{{ client_data_holder[`username`] }}</p>
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
.parent{

    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
    width: 100%;
}
.article_1_span_2{
    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
    width: 80%;
    background-color: #003F91;
    color: #FFFFFF;
    margin-top: 20px;
    margin-bottom: 10px;
    padding-top: 15px;
    padding-bottom: 15px;

    grid-template-rows: 1fr 10vh 10vh 10vh 10vh;

    border-radius: 10px;
}
.p_prof{
    color: #003F91;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 10px;
}
.special_div{

    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: 5vh 5vh 1fr;
}

.special_div>img{
    width: 50%;
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 10px;
}

.article_1_span_2>div{

    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows: 6vh 4vh;



}


@media only screen and (min-width: 770px){

.parent{


}
.article_1_span_2{

}
.p_prof{

}
.special_div{


}

.special_div>img{

}

.article_1_span_2>div{




}

}


@media only screen and (min-width: 1025px){
    .parent{


}
.article_1_span_2{

}
.p_prof{

}
.special_div{


}

.special_div>img{

}

.article_1_span_2>div{




}

    
}
</style>