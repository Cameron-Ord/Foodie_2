<template>
    <div class="parent">


        <span class="span_1">

            <h1>Account Settings:</h1>

            <input placeholder="enter your password to delete your account" type="text" ref="delete_acc">


            <button @click="delete_account">Delete Account</button>

            <p v-if="status !== undefined">{{ status }}</p>

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

            password: undefined,
            status: undefined


        }
    },

    methods: {


        delete_account() {

            //deletes account, requires password input and a valid token

            let restaurant_token = Cookies.get(`rest_login_token`);

            this.password = this.$refs[`delete_acc`][`value`];

            if(this.password === ''){

                this.password = null;
            }

         
            axios({

                method: `DELETE`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/restaurant`,

                headers: {

                    token: restaurant_token,
                },

                data: {

                    password: this.password

                }

            }).then((response) => {

                response;

                //if account is successfuly deleted, sends the user to the home page and removes cookies

                if(response['data'][0]['deleted'] !== undefined){

                Cookies.remove('restaurant_id');
                Cookies.remove('rest_login_token');
                this.$router.push('/');

                }


            }).catch((error) => {

                error;

                this.status = 'Enter your password to delete your account';

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
    grid-template-rows: 8vh 6vh 8vh auto;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #003F91;
    width: 80%;
    border-radius: 10px;
    color: #FFFFFF;
}
@media only screen and (min-width: 770px){

.parent{


}
.span_1>button{

}
.span_1{

}

}


@media only screen and (min-width: 1025px){

.parent{


}
.span_1>button{

}
.span_1{
width: 60%;
}

    
}
</style>