<template>
    <div class="parent">


        <span class="span_1">

            <h1>Account Settings:</h1>

            <input placeholder="enter your password to delete your account" type="text" ref="delete_acc">


            <button @click="delete_account">Delete Account</button>

        </span>


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



        }
    },

    methods: {


        delete_account() {

            let restaurant_token = Cookies.get(`rest_login_token`);

         
            axios({

                method: `DELETE`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,

                headers: {

                    token: restaurant_token,
                },

                data: {

                    password: this.$refs[`delete_acc`][`value`],

                }

            }).then((response) => {

                response;
                Cookies.remove('restaurant_id');
                Cookies.remove('rest_login_token');
                this.$router.push('/');

            }).catch((error) => {

                error;

            });


        },









    },




    mounted() {

       





    }





}
</script>
<style scoped>

.parent{
    display: grid;
    align-items: center;
    justify-items: center;

}
.span_1>button{
    color: #003F91;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 10px;
}
.span_1{
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows: 8vh 6vh 8vh;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: #003F91;
    width: 90%;
    border-radius: 10px;
    color: #FFFFFF;
}
@media only screen and (min-width: 770px){



}


@media only screen and (min-width: 1025px){


    
}
</style>