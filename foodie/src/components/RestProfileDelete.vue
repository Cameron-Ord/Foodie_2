<template>
    <div>
        <section class="delete_sect">
                <article class="article_4">

                    <span class="span_1">

                        <h1>Account Settings:</h1>

                        <input placeholder="enter your password to delete your account" type="text" ref="delete_acc">


                        <button @click="delete_account">Delete Account</button>

                    </span>

                </article>
            </section>
  

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
@media only screen and (min-width: 770px){



}


@media only screen and (min-width: 1025px){


    
}
</style>