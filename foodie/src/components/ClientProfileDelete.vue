<template>
    <div>
              
    <span class="del_span">
            <h1>Account settings:</h1>
            <input placeholder="enter your password to delete your account" type="password"
                ref="delete_account">

                <!--calling the delete api on click, requires password typed in field-->

            <button @click="delete_profile" class="delete_button">Delete Account</button>
        </span>
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



    methods: {



        delete_profile() {

            //defining the token for the api header//

            let client_token = Cookies.get(`client_login_token`);

            axios({

                method: `DELETE`,

                url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                headers: {

                    token: client_token,

                },

                data: {

                    //getting the typed value//

                    password: this.$refs[`delete_account`].value,
                }

            }).then((response) => {

                response;

                //deletes your profile, removes cookies, and pushes user to home page.//

                this.$router.push(`/`);

                Cookies.remove(`client_id`);

                Cookies.remove(`client_login_token`);

            }).catch((error) => {

                error;
            })


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